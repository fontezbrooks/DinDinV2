import dotenv from 'dotenv';
import path from 'path';

// Load environment variables
dotenv.config();

interface Config {
  // Database
  MONGODB_URI: string;
  DATABASE_NAME: string;
  
  // JWT
  JWT_SECRET: string;
  JWT_EXPIRES_IN: string;
  
  // Google OAuth
  GOOGLE_CLIENT_ID: string;
  GOOGLE_CLIENT_SECRET: string;
  
  // Server
  PORT: number;
  NODE_ENV: string;
  CORS_ORIGIN: string;
  
  // Session
  SESSION_SECRET: string;
  
  // Rate Limiting
  RATE_LIMIT_WINDOW_MS: number;
  RATE_LIMIT_MAX_REQUESTS: number;
}

const getEnvVar = (name: string, defaultValue?: string): string => {
  const value = process.env[name] || defaultValue;
  if (!value) {
    throw new Error(`Environment variable ${name} is required`);
  }
  return value;
};

const getEnvNumber = (name: string, defaultValue?: number): number => {
  const value = process.env[name];
  if (!value && defaultValue === undefined) {
    throw new Error(`Environment variable ${name} is required`);
  }
  return value ? parseInt(value, 10) : defaultValue!;
};

export const config: Config = {
  // Database
  MONGODB_URI: getEnvVar('MONGODB_URI', 'mongodb://localhost:27017/'),
  DATABASE_NAME: getEnvVar('DATABASE_NAME', 'dindin'),
  
  // JWT
  JWT_SECRET: getEnvVar('JWT_SECRET', 'your-super-secret-jwt-key-here'),
  JWT_EXPIRES_IN: getEnvVar('JWT_EXPIRES_IN', '7d'),
  
  // Google OAuth
  GOOGLE_CLIENT_ID: getEnvVar('GOOGLE_CLIENT_ID', ''),
  GOOGLE_CLIENT_SECRET: getEnvVar('GOOGLE_CLIENT_SECRET', ''),
  
  // Server
  PORT: getEnvNumber('PORT', 3001),
  NODE_ENV: getEnvVar('NODE_ENV', 'development'),
  CORS_ORIGIN: getEnvVar('CORS_ORIGIN', 'http://localhost:8081'),
  
  // Session
  SESSION_SECRET: getEnvVar('SESSION_SECRET', 'your-super-secret-session-key-here'),
  
  // Rate Limiting
  RATE_LIMIT_WINDOW_MS: getEnvNumber('RATE_LIMIT_WINDOW_MS', 900000), // 15 minutes
  RATE_LIMIT_MAX_REQUESTS: getEnvNumber('RATE_LIMIT_MAX_REQUESTS', 100),
};

// Validate required environment variables in production
if (config.NODE_ENV === 'production') {
  const requiredVars = ['JWT_SECRET', 'GOOGLE_CLIENT_ID', 'GOOGLE_CLIENT_SECRET', 'SESSION_SECRET'];
  
  for (const varName of requiredVars) {
    if (!process.env[varName]) {
      throw new Error(`Environment variable ${varName} is required in production`);
    }
  }
}