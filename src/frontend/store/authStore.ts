import { create } from 'zustand';
import { authService, LoginData, RegisterData } from '../services/authService';
import { User } from '../services/api';

interface AuthState {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  error: string | null;
  
  // Actions
  login: (credentials: LoginData) => Promise<boolean>;
  register: (userData: RegisterData) => Promise<boolean>;
  logout: () => Promise<void>;
  updateProfile: (updateData: Partial<User>) => Promise<boolean>;
  getCurrentUser: () => Promise<void>;
  clearError: () => void;
  initializeAuth: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set, get) => ({
  user: null,
  isLoading: false,
  isAuthenticated: false,
  error: null,

  login: async (credentials: LoginData) => {
    set({ isLoading: true, error: null });
    
    try {
      const response = await authService.login(credentials);
      
      if (response.success && response.user) {
        set({
          user: response.user,
          isAuthenticated: true,
          isLoading: false,
          error: null,
        });
        return true;
      } else {
        set({
          error: response.message,
          isLoading: false,
        });
        return false;
      }
    } catch (error) {
      set({
        error: 'Login failed. Please try again.',
        isLoading: false,
      });
      return false;
    }
  },

  register: async (userData: RegisterData) => {
    set({ isLoading: true, error: null });
    
    try {
      const response = await authService.register(userData);
      
      if (response.success && response.user) {
        set({
          user: response.user,
          isAuthenticated: true,
          isLoading: false,
          error: null,
        });
        return true;
      } else {
        set({
          error: response.message,
          isLoading: false,
        });
        return false;
      }
    } catch (error) {
      set({
        error: 'Registration failed. Please try again.',
        isLoading: false,
      });
      return false;
    }
  },

  logout: async () => {
    set({ isLoading: true });
    
    try {
      await authService.logout();
    } catch (error) {
      console.warn('Logout error:', error);
    } finally {
      set({
        user: null,
        isAuthenticated: false,
        isLoading: false,
        error: null,
      });
    }
  },

  updateProfile: async (updateData: Partial<User>) => {
    set({ isLoading: true, error: null });
    
    try {
      const response = await authService.updateProfile(updateData);
      
      if (response.success && response.user) {
        set({
          user: response.user,
          isLoading: false,
          error: null,
        });
        return true;
      } else {
        set({
          error: response.message,
          isLoading: false,
        });
        return false;
      }
    } catch (error) {
      set({
        error: 'Profile update failed. Please try again.',
        isLoading: false,
      });
      return false;
    }
  },

  getCurrentUser: async () => {
    set({ isLoading: true });
    
    try {
      const user = await authService.getCurrentUser();
      
      if (user) {
        set({
          user,
          isAuthenticated: true,
          isLoading: false,
          error: null,
        });
      } else {
        set({
          user: null,
          isAuthenticated: false,
          isLoading: false,
        });
      }
    } catch (error) {
      set({
        user: null,
        isAuthenticated: false,
        isLoading: false,
      });
    }
  },

  clearError: () => {
    set({ error: null });
  },

  initializeAuth: async () => {
    set({ isLoading: true });
    
    try {
      const isAuthenticated = await authService.isAuthenticated();
      
      if (isAuthenticated) {
        const storedUser = await authService.getStoredUser();
        
        if (storedUser) {
          set({
            user: storedUser,
            isAuthenticated: true,
            isLoading: false,
          });
          
          // Refresh user data from server
          get().getCurrentUser();
        } else {
          // Token exists but no user data, fetch from server
          await get().getCurrentUser();
        }
      } else {
        set({
          user: null,
          isAuthenticated: false,
          isLoading: false,
        });
      }
    } catch (error) {
      set({
        user: null,
        isAuthenticated: false,
        isLoading: false,
      });
    }
  },
}));