import { apiClient, ApiResponse, Recipe, PaginatedResponse } from './api';

export interface RecipeFilters {
  cuisine?: string[];
  dietary?: string[];
  difficulty?: string;
  search?: string;
}

export interface PaginationOptions {
  page?: number;
  limit?: number;
}

export interface SwipeResult extends ApiResponse {
  match?: any;
  isMatch?: boolean;
}

class RecipeService {
  // Get recipes with optional filters
  async getRecipes(
    filters: RecipeFilters = {},
    pagination: PaginationOptions = {}
  ): Promise<PaginatedResponse<Recipe>> {
    try {
      const params = {
        ...filters,
        ...pagination,
        cuisine: filters.cuisine?.join(','),
        dietary: filters.dietary?.join(','),
      };

      return await apiClient.get<PaginatedResponse<Recipe>>('/recipes', params);
    } catch (error: any) {
      return {
        success: false,
        message: error.response?.data?.message || 'Failed to fetch recipes',
        data: {
          recipes: [],
          totalCount: 0,
          currentPage: 1,
          totalPages: 0,
        },
      };
    }
  }

  // Get personalized recipes for authenticated user
  async getPersonalizedRecipes(
    pagination: PaginationOptions = {}
  ): Promise<PaginatedResponse<Recipe>> {
    try {
      return await apiClient.get<PaginatedResponse<Recipe>>('/recipes/personalized', pagination);
    } catch (error: any) {
      return {
        success: false,
        message: error.response?.data?.message || 'Failed to fetch personalized recipes',
        data: {
          recipes: [],
          totalCount: 0,
          currentPage: 1,
          totalPages: 0,
        },
      };
    }
  }

  // Get specific recipe by ID
  async getRecipeById(recipeId: string): Promise<Recipe | null> {
    try {
      const response = await apiClient.get<ApiResponse<Recipe>>(`/recipes/${recipeId}`);
      return response.success ? response.data || null : null;
    } catch (error) {
      console.warn('Failed to fetch recipe:', error);
      return null;
    }
  }

  // Create a new recipe
  async createRecipe(recipeData: Partial<Recipe>): Promise<ApiResponse<Recipe>> {
    try {
      return await apiClient.post<ApiResponse<Recipe>>('/recipes', recipeData);
    } catch (error: any) {
      return {
        success: false,
        message: error.response?.data?.message || 'Failed to create recipe',
      };
    }
  }

  // Update an existing recipe
  async updateRecipe(recipeId: string, recipeData: Partial<Recipe>): Promise<ApiResponse<Recipe>> {
    try {
      return await apiClient.put<ApiResponse<Recipe>>(`/recipes/${recipeId}`, recipeData);
    } catch (error: any) {
      return {
        success: false,
        message: error.response?.data?.message || 'Failed to update recipe',
      };
    }
  }

  // Delete a recipe
  async deleteRecipe(recipeId: string): Promise<ApiResponse> {
    try {
      return await apiClient.delete<ApiResponse>(`/recipes/${recipeId}`);
    } catch (error: any) {
      return {
        success: false,
        message: error.response?.data?.message || 'Failed to delete recipe',
      };
    }
  }

  // Record a swipe
  async swipeRecipe(recipeId: string, direction: 'left' | 'right'): Promise<SwipeResult> {
    try {
      return await apiClient.post<SwipeResult>('/swipes', {
        recipeId,
        swipeDirection: direction,
      });
    } catch (error: any) {
      return {
        success: false,
        message: error.response?.data?.message || 'Failed to record swipe',
      };
    }
  }

  // Get swipe history
  async getSwipeHistory(pagination: PaginationOptions = {}): Promise<PaginatedResponse<any>> {
    try {
      return await apiClient.get<PaginatedResponse<any>>('/swipes/history', pagination);
    } catch (error: any) {
      return {
        success: false,
        message: error.response?.data?.message || 'Failed to fetch swipe history',
        data: {
          swipes: [],
          totalCount: 0,
          currentPage: 1,
          totalPages: 0,
        },
      };
    }
  }

  // Get swipe statistics
  async getSwipeStats(): Promise<ApiResponse<any>> {
    try {
      return await apiClient.get<ApiResponse<any>>('/swipes/stats');
    } catch (error: any) {
      return {
        success: false,
        message: error.response?.data?.message || 'Failed to fetch swipe statistics',
      };
    }
  }
}

export const recipeService = new RecipeService();