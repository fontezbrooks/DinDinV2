import express from 'express';
import passport from 'passport';
import { AuthService } from '../services/authService';
import { verifyToken, AuthRequest } from '../middleware/auth';
import { validateUserRegistration, validateUserLogin, validateUserUpdate } from '../middleware/validation';
import { authLimiter, registerLimiter } from '../middleware/rateLimiter';

const router = express.Router();

// POST /api/auth/register - Register with email/password
router.post('/register', registerLimiter, validateUserRegistration, async (req, res) => {
  try {
    const { email, name, password } = req.body;

    const result = await AuthService.register({
      email,
      name,
      password
    });

    if (!result.success) {
      return res.status(400).json(result);
    }

    res.status(201).json(result);
  } catch (error) {
    console.error('Registration endpoint error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

// POST /api/auth/login - Login with email/password
router.post('/login', authLimiter, validateUserLogin, async (req, res) => {
  try {
    const { email, password } = req.body;

    const result = await AuthService.login({ email, password });

    if (!result.success) {
      return res.status(401).json(result);
    }

    res.json(result);
  } catch (error) {
    console.error('Login endpoint error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

// GET /api/auth/google - Initiate Google OAuth
router.get('/google', 
  passport.authenticate('google', { 
    scope: ['profile', 'email'] 
  })
);

// GET /api/auth/google/callback - Google OAuth callback
router.get('/google/callback',
  passport.authenticate('google', { session: false }),
  async (req: AuthRequest, res) => {
    try {
      if (!req.user) {
        return res.redirect(`${process.env.FRONTEND_URL || 'http://localhost:8081'}/auth/error?message=Authentication failed`);
      }

      // The user is available from Passport
      const result = await AuthService.googleAuth(req.user);

      if (!result.success || !result.token) {
        return res.redirect(`${process.env.FRONTEND_URL || 'http://localhost:8081'}/auth/error?message=${encodeURIComponent(result.message)}`);
      }

      // Redirect to frontend with token
      res.redirect(`${process.env.FRONTEND_URL || 'http://localhost:8081'}/auth/success?token=${result.token}`);
    } catch (error) {
      console.error('Google callback error:', error);
      res.redirect(`${process.env.FRONTEND_URL || 'http://localhost:8081'}/auth/error?message=Authentication failed`);
    }
  }
);

// GET /api/auth/me - Get current user profile
router.get('/me', verifyToken, async (req: AuthRequest, res) => {
  try {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: 'User not found'
      });
    }

    res.json({
      success: true,
      message: 'User profile retrieved successfully',
      user: req.user
    });
  } catch (error) {
    console.error('Get profile endpoint error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

// PUT /api/auth/profile - Update user profile
router.put('/profile', verifyToken, validateUserUpdate, async (req: AuthRequest, res) => {
  try {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: 'User not found'
      });
    }

    const result = await AuthService.updateUser(req.user._id.toString(), req.body);

    if (!result.success) {
      return res.status(400).json(result);
    }

    res.json(result);
  } catch (error) {
    console.error('Update profile endpoint error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

// POST /api/auth/logout - Logout (client-side token removal)
router.post('/logout', verifyToken, async (req: AuthRequest, res) => {
  try {
    // With JWT, logout is primarily client-side
    // Server can optionally blacklist tokens here if needed
    
    res.json({
      success: true,
      message: 'Logged out successfully'
    });
  } catch (error) {
    console.error('Logout endpoint error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

export default router;