import React, { useEffect, useState } from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  Alert,
  Text,
  TouchableOpacity,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';

import { RecipeSwiper } from '@/components/RecipeSwiper';
import { RecipeCard } from '@/components/RecipeCard';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { useAuthStore } from '@/store/authStore';
import { useRecipeStore } from '@/store/recipeStore';
import { Recipe } from '@/services/api';

export default function DiscoverScreen() {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme ?? 'light'];
  
  const { isAuthenticated, user } = useAuthStore();
  const {
    recipes,
    isLoading,
    error,
    loadRecipes,
    swipeRecipe,
    lastMatch,
    clearError,
  } = useRecipeStore();

  const [showRecipeDetails, setShowRecipeDetails] = useState<Recipe | null>(null);

  useEffect(() => {
    // Load recipes when component mounts
    loadRecipes(isAuthenticated);
  }, [isAuthenticated]);

  useEffect(() => {
    // Show match alert when there's a new match
    if (lastMatch) {
      Alert.alert(
        '🎉 It\'s a Match!',
        `You and your partner both love this recipe! Time to cook together.`,
        [
          {
            text: 'View Match',
            style: 'default',
            onPress: () => {
              // Navigate to matches screen
              // This would be handled by router navigation
            },
          },
          {
            text: 'Keep Swiping',
            style: 'cancel',
          },
        ]
      );
    }
  }, [lastMatch]);

  const handleSwipeLeft = async (recipe: Recipe) => {
    if (!isAuthenticated) {
      Alert.alert(
        'Sign In Required',
        'Please sign in to save your preferences and match with others.',
        [
          { text: 'Maybe Later', style: 'cancel' },
          { text: 'Sign In', onPress: () => {/* Navigate to auth */ } },
        ]
      );
      return;
    }

    const success = await swipeRecipe(recipe._id, 'left');
    if (!success && error) {
      Alert.alert('Error', error);
      clearError();
    }
  };

  const handleSwipeRight = async (recipe: Recipe) => {
    if (!isAuthenticated) {
      Alert.alert(
        'Sign In Required',
        'Please sign in to save your preferences and match with others.',
        [
          { text: 'Maybe Later', style: 'cancel' },
          { text: 'Sign In', onPress: () => {/* Navigate to auth */ } },
        ]
      );
      return;
    }

    const success = await swipeRecipe(recipe._id, 'right');
    if (!success && error) {
      Alert.alert('Error', error);
      clearError();
    }
  };

  const handleShowMore = (recipe: Recipe) => {
    setShowRecipeDetails(recipe);
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 20,
      paddingVertical: 16,
      backgroundColor: theme.surface,
    },
    headerTitle: {
      fontSize: 24,
      fontWeight: '700',
      color: theme.text,
    },
    profileButton: {
      width: 40,
      height: 40,
      borderRadius: 20,
      backgroundColor: Colors.accent,
      justifyContent: 'center',
      alignItems: 'center',
    },
    content: {
      flex: 1,
    },
    errorContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 32,
    },
    errorText: {
      fontSize: 16,
      color: theme.textSecondary,
      textAlign: 'center',
      marginTop: 16,
    },
    retryButton: {
      backgroundColor: Colors.accent,
      paddingHorizontal: 24,
      paddingVertical: 12,
      borderRadius: 25,
      marginTop: 16,
    },
    retryButtonText: {
      color: Colors.white,
      fontSize: 16,
      fontWeight: '600',
    },
    modalContainer: {
      flex: 1,
      backgroundColor: theme.background,
    },
    modalHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 20,
      paddingVertical: 16,
      backgroundColor: theme.surface,
    },
    modalTitle: {
      fontSize: 18,
      fontWeight: '600',
      color: theme.text,
    },
    closeButton: {
      padding: 8,
    },
    guestBanner: {
      backgroundColor: Colors.transparent.accent20,
      paddingHorizontal: 20,
      paddingVertical: 12,
      alignItems: 'center',
    },
    guestBannerText: {
      fontSize: 14,
      color: Colors.accent,
      textAlign: 'center',
    },
  });

  if (error && recipes.length === 0) {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
        
        <View style={styles.header}>
          <Text style={styles.headerTitle}>DinDin</Text>
          <TouchableOpacity style={styles.profileButton}>
            <Ionicons name="person" size={20} color={Colors.white} />
          </TouchableOpacity>
        </View>

        <View style={styles.errorContainer}>
          <Ionicons name="wifi-outline" size={60} color={theme.textTertiary} />
          <Text style={styles.errorText}>
            Oops! We couldn't load your recipes.{'\n'}
            Please check your internet connection and try again.
          </Text>
          <TouchableOpacity 
            style={styles.retryButton} 
            onPress={() => loadRecipes(isAuthenticated)}
          >
            <Text style={styles.retryButtonText}>Try Again</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  if (showRecipeDetails) {
    return (
      <SafeAreaView style={styles.modalContainer}>
        <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
        
        <View style={styles.modalHeader}>
          <Text style={styles.modalTitle}>Recipe Details</Text>
          <TouchableOpacity 
            style={styles.closeButton}
            onPress={() => setShowRecipeDetails(null)}
          >
            <Ionicons name="close" size={24} color={theme.text} />
          </TouchableOpacity>
        </View>

        <View style={styles.content}>
          <RecipeCard 
            recipe={showRecipeDetails} 
            showFullDetails={true}
          />
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
      
      <View style={styles.header}>
        <Text style={styles.headerTitle}>DinDin</Text>
        <TouchableOpacity style={styles.profileButton}>
          <Ionicons name="person" size={20} color={Colors.white} />
        </TouchableOpacity>
      </View>

      {!isAuthenticated && (
        <View style={styles.guestBanner}>
          <Text style={styles.guestBannerText}>
            Sign in to save preferences and match with others! 👫
          </Text>
        </View>
      )}

      <View style={styles.content}>
        <RecipeSwiper
          recipes={recipes}
          onSwipeLeft={handleSwipeLeft}
          onSwipeRight={handleSwipeRight}
          onShowMore={handleShowMore}
          isLoading={isLoading}
        />
      </View>
    </SafeAreaView>
  );
}
