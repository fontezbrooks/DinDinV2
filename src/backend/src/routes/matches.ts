import express from 'express';
import { MatchService } from '../services/matchService';
import { verifyToken, AuthRequest } from '../middleware/auth';
import { validateMatchUpdate } from '../middleware/validation';

const router = express.Router();

// GET /api/matches - Get user's matches
router.get('/', verifyToken, async (req: AuthRequest, res) => {
  try {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: 'Authentication required'
      });
    }

    const {
      status,
      page = '1',
      limit = '20'
    } = req.query;

    const filters = {
      status: status as 'active' | 'dismissed' | 'cooked'
    };

    const pagination = {
      page: parseInt(page as string, 10),
      limit: Math.min(parseInt(limit as string, 10), 100)
    };

    const result = await MatchService.getUserMatches(
      req.user._id.toString(),
      filters,
      pagination
    );

    res.json({
      success: true,
      message: 'Matches retrieved successfully',
      data: result
    });

  } catch (error) {
    console.error('Get matches endpoint error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch matches'
    });
  }
});

// GET /api/matches/stats - Get user's match statistics
router.get('/stats', verifyToken, async (req: AuthRequest, res) => {
  try {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: 'Authentication required'
      });
    }

    const stats = await MatchService.getMatchStats(req.user._id.toString());

    res.json({
      success: true,
      message: 'Match statistics retrieved successfully',
      data: stats
    });

  } catch (error) {
    console.error('Get match stats endpoint error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch match statistics'
    });
  }
});

// GET /api/matches/:id - Get specific match by ID
router.get('/:id', verifyToken, async (req: AuthRequest, res) => {
  try {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: 'Authentication required'
      });
    }

    const { id } = req.params;

    const match = await MatchService.getMatchById(id, req.user._id.toString());

    if (!match) {
      return res.status(404).json({
        success: false,
        message: 'Match not found'
      });
    }

    res.json({
      success: true,
      message: 'Match retrieved successfully',
      data: match
    });

  } catch (error) {
    console.error('Get match by ID endpoint error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch match'
    });
  }
});

// PUT /api/matches/:id - Update match
router.put('/:id', verifyToken, validateMatchUpdate, async (req: AuthRequest, res) => {
  try {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: 'Authentication required'
      });
    }

    const { id } = req.params;

    const match = await MatchService.updateMatch(
      id,
      req.user._id.toString(),
      req.body
    );

    if (!match) {
      return res.status(404).json({
        success: false,
        message: 'Match not found'
      });
    }

    res.json({
      success: true,
      message: 'Match updated successfully',
      data: match
    });

  } catch (error) {
    console.error('Update match endpoint error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to update match'
    });
  }
});

// POST /api/matches/:id/dismiss - Dismiss a match
router.post('/:id/dismiss', verifyToken, async (req: AuthRequest, res) => {
  try {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: 'Authentication required'
      });
    }

    const { id } = req.params;

    const success = await MatchService.dismissMatch(id, req.user._id.toString());

    if (!success) {
      return res.status(404).json({
        success: false,
        message: 'Match not found'
      });
    }

    res.json({
      success: true,
      message: 'Match dismissed successfully'
    });

  } catch (error) {
    console.error('Dismiss match endpoint error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to dismiss match'
    });
  }
});

// POST /api/matches/:id/cooked - Mark match as cooked
router.post('/:id/cooked', verifyToken, async (req: AuthRequest, res) => {
  try {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: 'Authentication required'
      });
    }

    const { id } = req.params;
    const { notes, rating } = req.body;

    const match = await MatchService.markAsCooked(
      id,
      req.user._id.toString(),
      notes,
      rating
    );

    if (!match) {
      return res.status(404).json({
        success: false,
        message: 'Match not found'
      });
    }

    res.json({
      success: true,
      message: 'Match marked as cooked successfully',
      data: match
    });

  } catch (error) {
    console.error('Mark as cooked endpoint error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to mark match as cooked'
    });
  }
});

// GET /api/matches/partner/:partnerId - Get matches with specific partner
router.get('/partner/:partnerId', verifyToken, async (req: AuthRequest, res) => {
  try {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: 'Authentication required'
      });
    }

    const { partnerId } = req.params;

    const matches = await MatchService.getPartnerMatches(
      req.user._id.toString(),
      partnerId
    );

    res.json({
      success: true,
      message: 'Partner matches retrieved successfully',
      data: matches
    });

  } catch (error) {
    console.error('Get partner matches endpoint error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch partner matches'
    });
  }
});

export default router;