/**
 * DinDin Color System
 * Based on the PRD specifications for a warm, inviting, and playful design
 */

export const Colors = {
  // Primary Brand Colors
  primary: '#F7F7F7',       // Main Color - light, neutral gray
  accent: '#FFC700',        // Accent Color - vibrant, energetic orange-yellow
  
  // Base Colors
  white: '#FFFFFF',
  black: '#000000',
  
  // Light Theme
  light: {
    background: '#FFFFFF',    // Background Color for light mode
    surface: '#F7F7F7',      // Primary surface color
    text: '#333333',          // Text Color for light mode
    textSecondary: '#666666', // Secondary text
    textTertiary: '#999999',  // Tertiary text
    border: '#E0E0E0',        // Light borders
    disabled: '#CCCCCC',      // Disabled elements
    shadow: 'rgba(0, 0, 0, 0.1)', // Card shadows
    tint: '#FFC700',
    icon: '#666666',
    tabIconDefault: '#999999',
    tabIconSelected: '#FFC700',
  },
  
  // Dark Theme
  dark: {
    background: '#333333',    // Background Color for dark mode
    surface: '#444444',       // Primary surface color
    text: '#FFFFFF',          // Text Color for dark mode
    textSecondary: '#CCCCCC', // Secondary text
    textTertiary: '#999999',  // Tertiary text
    border: '#555555',        // Dark borders
    disabled: '#666666',      // Disabled elements
    shadow: 'rgba(0, 0, 0, 0.3)', // Card shadows
    tint: '#FFC700',
    icon: '#CCCCCC',
    tabIconDefault: '#999999',
    tabIconSelected: '#FFC700',
  },
  
  // Semantic Colors
  success: '#4CAF50',       // Green for success states
  warning: '#FF9800',       // Orange for warning states
  error: '#F44336',         // Red for error states
  info: '#2196F3',          // Blue for info states
  
  // Recipe Difficulty Colors
  difficulty: {
    easy: '#4CAF50',        // Green for easy recipes
    medium: '#FF9800',      // Orange for medium recipes
    hard: '#F44336',        // Red for hard recipes
  },
  
  // Interactive States
  interaction: {
    like: '#4CAF50',        // Green for right swipe/like
    dislike: '#F44336',     // Red for left swipe/dislike
    match: '#FFC700',       // Accent color for matches
    
    // Button states
    buttonPrimary: '#FFC700',
    buttonPrimaryPressed: '#E6B300',
    buttonSecondary: '#FFFFFF',
    buttonSecondaryPressed: '#F0F0F0',
    
    // Touch feedback
    ripple: 'rgba(255, 199, 0, 0.3)',
    overlay: 'rgba(0, 0, 0, 0.5)',
  },
  
  // Transparent variations
  transparent: {
    black10: 'rgba(0, 0, 0, 0.1)',
    black20: 'rgba(0, 0, 0, 0.2)',
    black30: 'rgba(0, 0, 0, 0.3)',
    black50: 'rgba(0, 0, 0, 0.5)',
    white10: 'rgba(255, 255, 255, 0.1)',
    white20: 'rgba(255, 255, 255, 0.2)',
    white30: 'rgba(255, 255, 255, 0.3)',
    white50: 'rgba(255, 255, 255, 0.5)',
    accent10: 'rgba(255, 199, 0, 0.1)',
    accent20: 'rgba(255, 199, 0, 0.2)',
    accent30: 'rgba(255, 199, 0, 0.3)',
  },
};

// Theme interface for TypeScript
export interface Theme {
  background: string;
  surface: string;
  text: string;
  textSecondary: string;
  textTertiary: string;
  border: string;
  disabled: string;
  shadow: string;
  tint: string;
  icon: string;
  tabIconDefault: string;
  tabIconSelected: string;
}

// Helper function to get theme colors
export const getThemeColors = (isDark: boolean): Theme => {
  return isDark ? Colors.dark : Colors.light;
};

// Status bar style helper
export const getStatusBarStyle = (isDark: boolean): 'light' | 'dark' => {
  return isDark ? 'light' : 'dark';
};
