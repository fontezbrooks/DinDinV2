import express from 'express';
import { RecipeService } from '../services/recipeService';
import { verifyToken, optionalAuth, AuthRequest } from '../middleware/auth';
import { validateRecipeCreation } from '../middleware/validation';

const router = express.Router();

// GET /api/recipes - Get recipes with optional filters
router.get('/', optionalAuth, async (req: AuthRequest, res) => {
  try {
    const {
      cuisine,
      dietary,
      difficulty,
      search,
      page = '1',
      limit = '20'
    } = req.query;

    const filters = {
      cuisine: cuisine ? (cuisine as string).split(',') : undefined,
      dietary: dietary ? (dietary as string).split(',') : undefined,
      difficulty: difficulty as string,
      searchTerm: search as string,
      excludeSwipedBy: req.user ? req.user._id.toString() : undefined
    };

    const pagination = {
      page: parseInt(page as string, 10),
      limit: Math.min(parseInt(limit as string, 10), 100) // Max 100 per page
    };

    const result = await RecipeService.getRecipes(filters, pagination);

    res.json({
      success: true,
      message: 'Recipes retrieved successfully',
      data: result
    });

  } catch (error) {
    console.error('Get recipes endpoint error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch recipes'
    });
  }
});

// GET /api/recipes/personalized - Get personalized recipes for authenticated user
router.get('/personalized', verifyToken, async (req: AuthRequest, res) => {
  try {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: 'Authentication required'
      });
    }

    const { page = '1', limit = '20' } = req.query;

    const pagination = {
      page: parseInt(page as string, 10),
      limit: Math.min(parseInt(limit as string, 10), 100)
    };

    const result = await RecipeService.getPersonalizedRecipes(
      req.user._id.toString(),
      pagination
    );

    res.json({
      success: true,
      message: 'Personalized recipes retrieved successfully',
      data: result
    });

  } catch (error) {
    console.error('Get personalized recipes endpoint error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch personalized recipes'
    });
  }
});

// GET /api/recipes/:id - Get specific recipe by ID
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const recipe = await RecipeService.getRecipeById(id);

    if (!recipe) {
      return res.status(404).json({
        success: false,
        message: 'Recipe not found'
      });
    }

    res.json({
      success: true,
      message: 'Recipe retrieved successfully',
      data: recipe
    });

  } catch (error) {
    console.error('Get recipe by ID endpoint error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch recipe'
    });
  }
});

// POST /api/recipes - Create new recipe (authenticated users only)
router.post('/', verifyToken, validateRecipeCreation, async (req: AuthRequest, res) => {
  try {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: 'Authentication required'
      });
    }

    const recipe = await RecipeService.createRecipe(req.body, req.user._id.toString());

    res.status(201).json({
      success: true,
      message: 'Recipe created successfully',
      data: recipe
    });

  } catch (error) {
    console.error('Create recipe endpoint error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to create recipe'
    });
  }
});

// PUT /api/recipes/:id - Update recipe (creator only)
router.put('/:id', verifyToken, validateRecipeCreation, async (req: AuthRequest, res) => {
  try {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: 'Authentication required'
      });
    }

    const { id } = req.params;

    const recipe = await RecipeService.updateRecipe(
      id,
      req.body,
      req.user._id.toString()
    );

    if (!recipe) {
      return res.status(404).json({
        success: false,
        message: 'Recipe not found or unauthorized'
      });
    }

    res.json({
      success: true,
      message: 'Recipe updated successfully',
      data: recipe
    });

  } catch (error) {
    console.error('Update recipe endpoint error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to update recipe'
    });
  }
});

// DELETE /api/recipes/:id - Delete recipe (creator only)
router.delete('/:id', verifyToken, async (req: AuthRequest, res) => {
  try {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: 'Authentication required'
      });
    }

    const { id } = req.params;

    const success = await RecipeService.deleteRecipe(id, req.user._id.toString());

    if (!success) {
      return res.status(404).json({
        success: false,
        message: 'Recipe not found or unauthorized'
      });
    }

    res.json({
      success: true,
      message: 'Recipe deleted successfully'
    });

  } catch (error) {
    console.error('Delete recipe endpoint error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to delete recipe'
    });
  }
});

export default router;