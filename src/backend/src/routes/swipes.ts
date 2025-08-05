import express from 'express';
import { SwipeService } from '../services/swipeService';
import { verifyToken, AuthRequest } from '../middleware/auth';
import { validateSwipe } from '../middleware/validation';
import { swipeLimiter } from '../middleware/rateLimiter';

const router = express.Router();

// POST /api/swipes - Record a swipe
router.post('/', verifyToken, swipeLimiter, validateSwipe, async (req: AuthRequest, res) => {
  try {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: 'Authentication required'
      });
    }

    const { recipeId, swipeDirection } = req.body;

    const result = await SwipeService.recordSwipe({
      userId: req.user._id.toString(),
      recipeId,
      swipeDirection
    });

    if (!result.success) {
      return res.status(400).json(result);
    }

    const statusCode = result.isMatch ? 200 : 201;
    res.status(statusCode).json(result);

  } catch (error) {
    console.error('Record swipe endpoint error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to record swipe'
    });
  }
});

// GET /api/swipes/history - Get user's swipe history
router.get('/history', verifyToken, async (req: AuthRequest, res) => {
  try {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: 'Authentication required'
      });
    }

    const { page = '1', limit = '50' } = req.query;

    const pagination = {
      page: parseInt(page as string, 10),
      limit: Math.min(parseInt(limit as string, 10), 100)
    };

    const result = await SwipeService.getUserSwipeHistory(
      req.user._id.toString(),
      pagination
    );

    res.json({
      success: true,
      message: 'Swipe history retrieved successfully',
      data: result
    });

  } catch (error) {
    console.error('Get swipe history endpoint error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch swipe history'
    });
  }
});

// GET /api/swipes/stats - Get user's swipe statistics
router.get('/stats', verifyToken, async (req: AuthRequest, res) => {
  try {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: 'Authentication required'
      });
    }

    const stats = await SwipeService.getSwipeStats(req.user._id.toString());

    res.json({
      success: true,
      message: 'Swipe statistics retrieved successfully',
      data: stats
    });

  } catch (error) {
    console.error('Get swipe stats endpoint error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch swipe statistics'
    });
  }
});

export default router;