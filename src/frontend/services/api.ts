import axios, { AxiosInstance, AxiosResponse } from 'axios';
import * as SecureStore from 'expo-secure-store';
import Constants from 'expo-constants';

// API Configuration
const API_BASE_URL = __DEV__ 
  ? 'http://localhost:3001/api' 
  : 'https://your-production-api.com/api';

// API Client
class ApiClient {
  private client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: API_BASE_URL,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    this.setupInterceptors();
  }

  private setupInterceptors() {
    // Request interceptor to add auth token
    this.client.interceptors.request.use(
      async (config) => {
        try {
          const token = await SecureStore.getItemAsync('userToken');
          if (token) {
            config.headers.Authorization = `Bearer ${token}`;
          }
        } catch (error) {
          console.warn('Error getting token from secure store:', error);
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    // Response interceptor for error handling
    this.client.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (error.response?.status === 401) {
          // Token expired or invalid, clear stored token
          await SecureStore.deleteItemAsync('userToken');
          // You might want to redirect to login here
        }
        return Promise.reject(error);
      }
    );
  }

  // Generic API methods
  async get<T>(endpoint: string, params?: any): Promise<T> {
    const response: AxiosResponse<T> = await this.client.get(endpoint, { params });
    return response.data;
  }

  async post<T>(endpoint: string, data?: any): Promise<T> {
    const response: AxiosResponse<T> = await this.client.post(endpoint, data);
    return response.data;
  }

  async put<T>(endpoint: string, data?: any): Promise<T> {
    const response: AxiosResponse<T> = await this.client.put(endpoint, data);
    return response.data;
  }

  async delete<T>(endpoint: string): Promise<T> {
    const response: AxiosResponse<T> = await this.client.delete(endpoint);
    return response.data;
  }
}

export const apiClient = new ApiClient();

// API Response Types
export interface ApiResponse<T = any> {
  success: boolean;
  message: string;
  data?: T;
  errors?: Array<{ field?: string; message: string }>;
}

export interface PaginatedResponse<T> {
  success: boolean;
  message: string;
  data: {
    items?: T[];
    recipes?: T[];
    matches?: T[];
    swipes?: T[];
    totalCount: number;
    currentPage: number;
    totalPages: number;
  };
}

// User Types
export interface User {
  _id: string;
  email: string;
  name: string;
  avatar?: string;
  preferences: {
    dietary: string[];
    cuisines: string[];
    difficulty: 'easy' | 'medium' | 'hard';
  };
  isActive: boolean;
  partnerships: Array<{
    partnerId: string;
    status: 'pending' | 'active' | 'inactive';
    createdAt: string;
  }>;
  createdAt: string;
  updatedAt: string;
}

// Recipe Types
export interface Recipe {
  _id: string;
  title: string;
  description?: string;
  image?: string;
  ingredients: Array<{
    name: string;
    amount: string;
    unit: string;
  }>;
  instructions: Array<{
    step: number;
    description: string;
  }>;
  cookTime?: number;
  prepTime?: number;
  servings?: number;
  difficulty: 'easy' | 'medium' | 'hard';
  cuisine: string[];
  dietary: string[];
  nutrition?: {
    calories?: number;
    protein?: number;
    carbs?: number;
    fat?: number;
    fiber?: number;
  };
  tags: string[];
  isActive: boolean;
  createdBy?: string;
  likes: number;
  dislikes: number;
  createdAt: string;
  updatedAt: string;
}

// Match Types
export interface Match {
  _id: string;
  user1Id: User;
  user2Id: User;
  recipeId: Recipe;
  status: 'active' | 'dismissed' | 'cooked';
  cookedAt?: string;
  notes?: string;
  rating?: number;
  createdAt: string;
  updatedAt: string;
}

// Swipe Types
export interface SwipeHistory {
  _id: string;
  userId: string;
  recipeId: Recipe;
  swipeDirection: 'left' | 'right';
  createdAt: string;
}