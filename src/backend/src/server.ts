import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import compression from 'compression';
import session from 'express-session';

import { config } from './config/env';
import { database } from './config/database';
import passport from './config/passport';
import { generalLimiter } from './middleware/rateLimiter';
import apiRoutes from './routes';

class Server {
  private app: express.Application;

  constructor() {
    this.app = express();
    this.configureMiddleware();
    this.configureRoutes();
    this.configureErrorHandling();
  }

  private configureMiddleware(): void {
    // Security middleware
    this.app.use(helmet({
      contentSecurityPolicy: {
        directives: {
          defaultSrc: ["'self'"],
          styleSrc: ["'self'", "'unsafe-inline'"],
          scriptSrc: ["'self'"],
          imgSrc: ["'self'", "data:", "https:"],
        },
      },
      crossOriginEmbedderPolicy: false
    }));

    // CORS configuration
    this.app.use(cors({
      origin: [
        config.CORS_ORIGIN,
        'http://localhost:3000',
        'http://localhost:8081',
        'exp://192.168.1.100:8081' // For Expo development
      ],
      credentials: true,
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
      allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With']
    }));

    // Compression
    this.app.use(compression());

    // Logging
    if (config.NODE_ENV === 'development') {
      this.app.use(morgan('dev'));
    } else {
      this.app.use(morgan('combined'));
    }

    // Body parsing
    this.app.use(express.json({ limit: '10mb' }));
    this.app.use(express.urlencoded({ extended: true, limit: '10mb' }));

    // Session configuration for Passport
    this.app.use(session({
      secret: config.SESSION_SECRET,
      resave: false,
      saveUninitialized: false,
      cookie: {
        secure: config.NODE_ENV === 'production',
        maxAge: 24 * 60 * 60 * 1000 // 24 hours
      }
    }));

    // Passport middleware
    this.app.use(passport.initialize());
    this.app.use(passport.session());

    // Rate limiting
    this.app.use('/api', generalLimiter);

    // Request logging
    this.app.use((req, res, next) => {
      console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
      next();
    });
  }

  private configureRoutes(): void {
    // API routes
    this.app.use('/api', apiRoutes);

    // Root endpoint
    this.app.get('/', (req, res) => {
      res.json({
        message: 'Welcome to DinDin API',
        version: '1.0.0',
        documentation: '/api/health',
        status: 'running'
      });
    });

    // 404 handler
    this.app.use('*', (req, res) => {
      res.status(404).json({
        success: false,
        message: 'Route not found',
        requestedPath: req.originalUrl
      });
    });
  }

  private configureErrorHandling(): void {
    // Global error handler
    this.app.use((error: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
      console.error('Global error handler:', error);

      // Mongoose validation error
      if (error.name === 'ValidationError') {
        const errors = Object.values(error.errors).map((err: any) => ({
          field: err.path,
          message: err.message
        }));

        return res.status(400).json({
          success: false,
          message: 'Validation error',
          errors
        });
      }

      // Mongoose duplicate key error
      if (error.code === 11000) {
        const field = Object.keys(error.keyValue)[0];
        return res.status(400).json({
          success: false,
          message: `${field} already exists`
        });
      }

      // JWT errors
      if (error.name === 'JsonWebTokenError') {
        return res.status(401).json({
          success: false,
          message: 'Invalid token'
        });
      }

      if (error.name === 'TokenExpiredError') {
        return res.status(401).json({
          success: false,
          message: 'Token expired'
        });
      }

      // Default error
      const statusCode = error.statusCode || error.status || 500;
      const message = config.NODE_ENV === 'production' 
        ? 'Internal server error' 
        : error.message;

      res.status(statusCode).json({
        success: false,
        message,
        ...(config.NODE_ENV === 'development' && { stack: error.stack })
      });
    });
  }

  public async start(): Promise<void> {
    try {
      // Connect to database
      await database.connect();

      // Start server
      const server = this.app.listen(config.PORT, () => {
        console.log(`
🚀 DinDin API Server Started Successfully!
────────────────────────────────────────
🌐 Environment: ${config.NODE_ENV}
📡 Port: ${config.PORT}
🔗 URL: http://localhost:${config.PORT}
📊 Health Check: http://localhost:${config.PORT}/api/health
🗄️  Database: ${database.isConnected() ? '✅ Connected' : '❌ Disconnected'}
────────────────────────────────────────
Ready to serve recipes! 🍽️
        `);
      });

      // Graceful shutdown
      const gracefulShutdown = async (signal: string) => {
        console.log(`\n${signal} received. Starting graceful shutdown...`);
        
        server.close(async () => {
          console.log('HTTP server closed');
          
          try {
            await database.disconnect();
            console.log('Database disconnected');
            process.exit(0);
          } catch (error) {
            console.error('Error during graceful shutdown:', error);
            process.exit(1);
          }
        });
      };

      process.on('SIGTERM', () => gracefulShutdown('SIGTERM'));
      process.on('SIGINT', () => gracefulShutdown('SIGINT'));

    } catch (error) {
      console.error('Failed to start server:', error);
      process.exit(1);
    }
  }
}

// Start the server
const server = new Server();
server.start().catch((error) => {
  console.error('Failed to start application:', error);
  process.exit(1);
});