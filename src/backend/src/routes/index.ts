import express from 'express';
import authRoutes from './auth';
import recipeRoutes from './recipes';
import swipeRoutes from './swipes';
import matchRoutes from './matches';

const router = express.Router();

// Health check endpoint
router.get('/health', (req, res) => {
  res.json({
    success: true,
    message: 'DinDin API is running',
    timestamp: new Date().toISOString(),
    version: '1.0.0'
  });
});

// API routes
router.use('/auth', authRoutes);
router.use('/recipes', recipeRoutes);
router.use('/swipes', swipeRoutes);
router.use('/matches', matchRoutes);

// 404 handler for API routes
router.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: 'API endpoint not found',
    requestedPath: req.originalUrl
  });
});

export default router;