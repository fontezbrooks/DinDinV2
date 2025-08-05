import { Recipe, IRecipe } from '../models/Recipe';
import { SwipeHistory } from '../models/SwipeHistory';
import { User, IUser } from '../models/User';
import mongoose from 'mongoose';

export interface RecipeFilters {
  cuisine?: string[];
  dietary?: string[];
  difficulty?: string;
  searchTerm?: string;
  excludeSwipedBy?: string; // userId to exclude already swiped recipes
}

export interface PaginationOptions {
  page?: number;
  limit?: number;
}

export class RecipeService {
  
  static async getRecipes(
    filters: RecipeFilters = {},
    pagination: PaginationOptions = {}
  ): Promise<{
    recipes: IRecipe[];
    totalCount: number;
    currentPage: number;
    totalPages: number;
  }> {
    try {
      const {
        cuisine,
        dietary,
        difficulty,
        searchTerm,
        excludeSwipedBy
      } = filters;

      const {
        page = 1,
        limit = 20
      } = pagination;

      // Build query
      const query: any = { isActive: true };

      if (cuisine && cuisine.length > 0) {
        query.cuisine = { $in: cuisine };
      }

      if (dietary && dietary.length > 0) {
        query.dietary = { $in: dietary };
      }

      if (difficulty) {
        query.difficulty = difficulty;
      }

      if (searchTerm) {
        query.$text = { $search: searchTerm };
      }

      // Exclude recipes already swiped by user
      if (excludeSwipedBy) {
        const swipedRecipeIds = await SwipeHistory.find({
          userId: excludeSwipedBy
        }).distinct('recipeId');

        query._id = { $nin: swipedRecipeIds };
      }

      // Calculate pagination
      const skip = (page - 1) * limit;

      // Get recipes with pagination
      const [recipes, totalCount] = await Promise.all([
        Recipe.find(query)
          .sort(searchTerm ? { score: { $meta: 'textScore' } } : { createdAt: -1 })
          .skip(skip)
          .limit(limit)
          .lean(),
        Recipe.countDocuments(query)
      ]);

      const totalPages = Math.ceil(totalCount / limit);

      return {
        recipes,
        totalCount,
        currentPage: page,
        totalPages
      };

    } catch (error) {
      console.error('Get recipes error:', error);
      throw new Error('Failed to fetch recipes');
    }
  }

  static async getRecipeById(recipeId: string): Promise<IRecipe | null> {
    try {
      if (!mongoose.Types.ObjectId.isValid(recipeId)) {
        return null;
      }

      return await Recipe.findOne({
        _id: recipeId,
        isActive: true
      });

    } catch (error) {
      console.error('Get recipe by ID error:', error);
      return null;
    }
  }

  static async getPersonalizedRecipes(
    userId: string,
    pagination: PaginationOptions = {}
  ): Promise<{
    recipes: IRecipe[];
    totalCount: number;
    currentPage: number;
    totalPages: number;
  }> {
    try {
      const user = await User.findById(userId);
      if (!user) {
        throw new Error('User not found');
      }

      const { page = 1, limit = 20 } = pagination;

      // Get user preferences
      const { dietary, cuisines, difficulty } = user.preferences;

      // Build personalized query
      const query: any = { isActive: true };

      // Add preference filters
      const preferenceFilters: any[] = [];

      if (dietary.length > 0) {
        preferenceFilters.push({ dietary: { $in: dietary } });
      }

      if (cuisines.length > 0) {
        preferenceFilters.push({ cuisine: { $in: cuisines } });
      }

      if (difficulty) {
        preferenceFilters.push({ difficulty });
      }

      // If user has preferences, prioritize matching recipes
      if (preferenceFilters.length > 0) {
        query.$or = preferenceFilters;
      }

      // Exclude already swiped recipes
      const swipedRecipeIds = await SwipeHistory.find({
        userId
      }).distinct('recipeId');

      if (swipedRecipeIds.length > 0) {
        query._id = { $nin: swipedRecipeIds };
      }

      // Calculate pagination
      const skip = (page - 1) * limit;

      // Get personalized recipes
      let recipes = await Recipe.find(query)
        .sort({ likes: -1, createdAt: -1 }) // Popular first, then newest
        .skip(skip)
        .limit(limit)
        .lean();

      // If not enough personalized recipes, fill with general recipes
      if (recipes.length < limit) {
        const remainingLimit = limit - recipes.length;
        const remainingSkip = Math.max(0, skip - await Recipe.countDocuments(query));

        const generalQuery: any = {
          isActive: true,
          _id: { 
            $nin: [
              ...swipedRecipeIds,
              ...recipes.map(r => r._id)
            ]
          }
        };

        const additionalRecipes = await Recipe.find(generalQuery)
          .sort({ likes: -1, createdAt: -1 })
          .skip(remainingSkip)
          .limit(remainingLimit)
          .lean();

        recipes = [...recipes, ...additionalRecipes];
      }

      // Get total count for pagination
      const totalAvailableQuery = {
        isActive: true,
        _id: { $nin: swipedRecipeIds }
      };

      const totalCount = await Recipe.countDocuments(totalAvailableQuery);
      const totalPages = Math.ceil(totalCount / limit);

      return {
        recipes,
        totalCount,
        currentPage: page,
        totalPages
      };

    } catch (error) {
      console.error('Get personalized recipes error:', error);
      throw new Error('Failed to fetch personalized recipes');
    }
  }

  static async createRecipe(recipeData: Partial<IRecipe>, createdBy?: string): Promise<IRecipe> {
    try {
      const recipe = new Recipe({
        ...recipeData,
        createdBy: createdBy ? new mongoose.Types.ObjectId(createdBy) : undefined,
        isActive: true,
        likes: 0,
        dislikes: 0
      });

      return await recipe.save();

    } catch (error) {
      console.error('Create recipe error:', error);
      throw new Error('Failed to create recipe');
    }
  }

  static async updateRecipe(
    recipeId: string,
    updateData: Partial<IRecipe>,
    userId?: string
  ): Promise<IRecipe | null> {
    try {
      if (!mongoose.Types.ObjectId.isValid(recipeId)) {
        return null;
      }

      const query: any = { _id: recipeId, isActive: true };

      // If userId provided, ensure only creator can update
      if (userId) {
        query.createdBy = userId;
      }

      return await Recipe.findOneAndUpdate(
        query,
        updateData,
        { new: true, runValidators: true }
      );

    } catch (error) {
      console.error('Update recipe error:', error);
      return null;
    }
  }

  static async deleteRecipe(recipeId: string, userId?: string): Promise<boolean> {
    try {
      if (!mongoose.Types.ObjectId.isValid(recipeId)) {
        return false;
      }

      const query: any = { _id: recipeId };

      // If userId provided, ensure only creator can delete
      if (userId) {
        query.createdBy = userId;
      }

      const result = await Recipe.findOneAndUpdate(
        query,
        { isActive: false },
        { new: true }
      );

      return !!result;

    } catch (error) {
      console.error('Delete recipe error:', error);
      return false;
    }
  }

  static async updateRecipeStats(recipeId: string, liked: boolean): Promise<void> {
    try {
      if (!mongoose.Types.ObjectId.isValid(recipeId)) {
        return;
      }

      const updateField = liked ? 'likes' : 'dislikes';
      
      await Recipe.findByIdAndUpdate(
        recipeId,
        { $inc: { [updateField]: 1 } }
      );

    } catch (error) {
      console.error('Update recipe stats error:', error);
    }
  }
}