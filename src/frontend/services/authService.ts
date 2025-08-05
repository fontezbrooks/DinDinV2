import { apiClient, ApiResponse, User } from './api';
import * as SecureStore from 'expo-secure-store';

export interface LoginData {
  email: string;
  password: string;
}

export interface RegisterData {
  email: string;
  name: string;
  password: string;
}

export interface AuthResponse extends ApiResponse {
  user?: User;
  token?: string;
}

class AuthService {
  // Login with email/password
  async login(credentials: LoginData): Promise<AuthResponse> {
    try {
      const response = await apiClient.post<AuthResponse>('/auth/login', credentials);
      
      // Store token if login successful
      if (response.success && response.token) {
        await SecureStore.setItemAsync('userToken', response.token);
        await SecureStore.setItemAsync('userData', JSON.stringify(response.user));
      }
      
      return response;
    } catch (error: any) {
      return {
        success: false,
        message: error.response?.data?.message || 'Login failed. Please try again.',
      };
    }
  }

  // Register with email/password
  async register(userData: RegisterData): Promise<AuthResponse> {
    try {
      const response = await apiClient.post<AuthResponse>('/auth/register', userData);
      
      // Store token if registration successful
      if (response.success && response.token) {
        await SecureStore.setItemAsync('userToken', response.token);
        await SecureStore.setItemAsync('userData', JSON.stringify(response.user));
      }
      
      return response;
    } catch (error: any) {
      return {
        success: false,
        message: error.response?.data?.message || 'Registration failed. Please try again.',
      };
    }
  }

  // Get current user profile
  async getCurrentUser(): Promise<User | null> {
    try {
      const response = await apiClient.get<ApiResponse<User>>('/auth/me');
      
      if (response.success && response.data) {
        await SecureStore.setItemAsync('userData', JSON.stringify(response.data));
        return response.data;
      }
      
      return null;
    } catch (error) {
      console.warn('Failed to get current user:', error);
      return null;
    }
  }

  // Update user profile
  async updateProfile(updateData: Partial<User>): Promise<AuthResponse> {
    try {
      const response = await apiClient.put<AuthResponse>('/auth/profile', updateData);
      
      if (response.success && response.user) {
        await SecureStore.setItemAsync('userData', JSON.stringify(response.user));
      }
      
      return response;
    } catch (error: any) {
      return {
        success: false,
        message: error.response?.data?.message || 'Profile update failed. Please try again.',
      };
    }
  }

  // Logout
  async logout(): Promise<void> {
    try {
      await apiClient.post('/auth/logout');
    } catch (error) {
      console.warn('Logout API call failed:', error);
    } finally {
      // Always clear stored data
      await SecureStore.deleteItemAsync('userToken');
      await SecureStore.deleteItemAsync('userData');
    }
  }

  // Check if user is authenticated
  async isAuthenticated(): Promise<boolean> {
    try {
      const token = await SecureStore.getItemAsync('userToken');
      return !!token;
    } catch (error) {
      return false;
    }
  }

  // Get stored user data
  async getStoredUser(): Promise<User | null> {
    try {
      const userData = await SecureStore.getItemAsync('userData');
      return userData ? JSON.parse(userData) : null;
    } catch (error) {
      return null;
    }
  }

  // Get stored token
  async getStoredToken(): Promise<string | null> {
    try {
      return await SecureStore.getItemAsync('userToken');
    } catch (error) {
      return null;
    }
  }
}

export const authService = new AuthService();