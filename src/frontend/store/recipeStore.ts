import { create } from 'zustand';
import { recipeService, RecipeFilters, PaginationOptions } from '../services/recipeService';
import { Recipe } from '../services/api';

interface RecipeState {
  recipes: Recipe[];
  currentRecipe: Recipe | null;
  isLoading: boolean;
  isSwipeLoading: boolean;
  error: string | null;
  currentPage: number;
  totalPages: number;
  hasMore: boolean;
  filters: RecipeFilters;
  
  // Swipe-related state
  swipeHistory: any[];
  swipeStats: any;
  lastMatch: any;
  
  // Actions
  loadRecipes: (isPersonalized?: boolean, loadMore?: boolean) => Promise<void>;
  loadRecipeById: (id: string) => Promise<Recipe | null>;
  swipeRecipe: (recipeId: string, direction: 'left' | 'right') => Promise<boolean>;
  setFilters: (filters: RecipeFilters) => void;
  clearRecipes: () => void;
  clearError: () => void;
  loadSwipeHistory: () => Promise<void>;
  loadSwipeStats: () => Promise<void>;
  removeRecipeFromDeck: (recipeId: string) => void;
}

export const useRecipeStore = create<RecipeState>((set, get) => ({
  recipes: [],
  currentRecipe: null,
  isLoading: false,
  isSwipeLoading: false,
  error: null,
  currentPage: 1,
  totalPages: 1,
  hasMore: true,
  filters: {},
  swipeHistory: [],
  swipeStats: null,
  lastMatch: null,

  loadRecipes: async (isPersonalized = true, loadMore = false) => {
    const state = get();
    
    if (state.isLoading || (!state.hasMore && loadMore)) {
      return;
    }

    set({ 
      isLoading: true, 
      error: null,
      ...(loadMore ? {} : { recipes: [], currentPage: 1 })
    });

    try {
      const pagination: PaginationOptions = {
        page: loadMore ? state.currentPage + 1 : 1,
        limit: 20,
      };

      const response = isPersonalized
        ? await recipeService.getPersonalizedRecipes(pagination)
        : await recipeService.getRecipes(state.filters, pagination);

      if (response.success && response.data) {
        const newRecipes = response.data.recipes || [];
        
        set({
          recipes: loadMore 
            ? [...state.recipes, ...newRecipes]
            : newRecipes,
          currentPage: response.data.currentPage,
          totalPages: response.data.totalPages,
          hasMore: response.data.currentPage < response.data.totalPages,
          isLoading: false,
          error: null,
        });
      } else {
        set({
          error: response.message,
          isLoading: false,
        });
      }
    } catch (error) {
      set({
        error: 'Failed to load recipes',
        isLoading: false,
      });
    }
  },

  loadRecipeById: async (id: string) => {
    try {
      const recipe = await recipeService.getRecipeById(id);
      
      if (recipe) {
        set({ currentRecipe: recipe });
      }
      
      return recipe;
    } catch (error) {
      console.warn('Failed to load recipe:', error);
      return null;
    }
  },

  swipeRecipe: async (recipeId: string, direction: 'left' | 'right') => {
    set({ isSwipeLoading: true, error: null });

    try {
      const response = await recipeService.swipeRecipe(recipeId, direction);

      if (response.success) {
        // Remove the swiped recipe from the deck
        get().removeRecipeFromDeck(recipeId);

        // If it's a match, store it
        if (response.isMatch && response.match) {
          set({ lastMatch: response.match });
        }

        set({ isSwipeLoading: false });
        return true;
      } else {
        set({
          error: response.message,
          isSwipeLoading: false,
        });
        return false;
      }
    } catch (error) {
      set({
        error: 'Failed to record swipe',
        isSwipeLoading: false,
      });
      return false;
    }
  },

  setFilters: (filters: RecipeFilters) => {
    set({ filters });
    // Reload recipes with new filters
    get().loadRecipes(false);
  },

  clearRecipes: () => {
    set({
      recipes: [],
      currentRecipe: null,
      currentPage: 1,
      totalPages: 1,
      hasMore: true,
      error: null,
    });
  },

  clearError: () => {
    set({ error: null });
  },

  loadSwipeHistory: async () => {
    try {
      const response = await recipeService.getSwipeHistory();
      
      if (response.success && response.data) {
        set({ swipeHistory: response.data.swipes || [] });
      }
    } catch (error) {
      console.warn('Failed to load swipe history:', error);
    }
  },

  loadSwipeStats: async () => {
    try {
      const response = await recipeService.getSwipeStats();
      
      if (response.success && response.data) {
        set({ swipeStats: response.data });
      }
    } catch (error) {
      console.warn('Failed to load swipe stats:', error);
    }
  },

  removeRecipeFromDeck: (recipeId: string) => {
    const state = get();
    const updatedRecipes = state.recipes.filter(recipe => recipe._id !== recipeId);
    
    set({ recipes: updatedRecipes });

    // If we're running low on recipes, load more
    if (updatedRecipes.length < 5 && state.hasMore) {
      get().loadRecipes(true, true);
    }
  },
}));