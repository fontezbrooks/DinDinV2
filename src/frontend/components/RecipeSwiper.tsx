import React, { useRef, useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Animated,
  PanGestureHandler,
  GestureHandlerRootView,
  State,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';
import { RecipeCard } from './RecipeCard';
import { Colors } from '../constants/Colors';
import { Recipe } from '../services/api';
import { useColorScheme } from '../hooks/useColorScheme';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
const SWIPE_THRESHOLD = screenWidth * 0.3;
const ROTATION_FACTOR = 0.1;

interface RecipeSwiperProps {
  recipes: Recipe[];
  onSwipeLeft: (recipe: Recipe) => void;
  onSwipeRight: (recipe: Recipe) => void;
  onShowMore?: (recipe: Recipe) => void;
  isLoading?: boolean;
}

export const RecipeSwiper: React.FC<RecipeSwiperProps> = ({
  recipes,
  onSwipeLeft,
  onSwipeRight,
  onShowMore,
  isLoading = false,
}) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme ?? 'light'];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const translateX = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(0)).current;
  const rotate = useRef(new Animated.Value(0)).current;
  const scale = useRef(new Animated.Value(1)).current;
  const nextCardScale = useRef(new Animated.Value(0.95)).current;
  const nextCardOpacity = useRef(new Animated.Value(0.8)).current;

  const currentRecipe = recipes[currentIndex];
  const nextRecipe = recipes[currentIndex + 1];

  useEffect(() => {
    // Reset animations when new cards are loaded
    resetAnimations();
  }, [recipes]);

  const resetAnimations = () => {
    translateX.setValue(0);
    translateY.setValue(0);
    rotate.setValue(0);
    scale.setValue(1);
    nextCardScale.setValue(0.95);
    nextCardOpacity.setValue(0.8);
  };

  const animateSwipe = (direction: 'left' | 'right') => {
    const toValue = direction === 'right' ? screenWidth + 100 : -screenWidth - 100;
    const rotateToValue = direction === 'right' ? 15 : -15;

    Animated.parallel([
      Animated.timing(translateX, {
        toValue,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(rotate, {
        toValue: rotateToValue,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(scale, {
        toValue: 0.8,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(nextCardScale, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(nextCardOpacity, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start(() => {
      // Call the appropriate callback
      if (direction === 'right') {
        onSwipeRight(currentRecipe);
      } else {
        onSwipeLeft(currentRecipe);
      }
      
      // Move to next card
      setCurrentIndex(prev => prev + 1);
      resetAnimations();
    });
  };

  const onGestureEvent = Animated.event(
    [{ nativeEvent: { translationX: translateX, translationY: translateY } }],
    { useNativeDriver: true }
  );

  const onHandlerStateChange = (event: any) => {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      const { translationX, velocityX } = event.nativeEvent;
      
      // Determine if swipe is strong enough
      const swipeDirection = translationX > 0 ? 'right' : 'left';
      const shouldSwipe = Math.abs(translationX) > SWIPE_THRESHOLD || Math.abs(velocityX) > 1000;

      if (shouldSwipe) {
        // Haptic feedback
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
        animateSwipe(swipeDirection);
      } else {
        // Snap back to center
        Animated.parallel([
          Animated.spring(translateX, {
            toValue: 0,
            useNativeDriver: true,
          }),
          Animated.spring(translateY, {
            toValue: 0,
            useNativeDriver: true,
          }),
          Animated.spring(rotate, {
            toValue: 0,
            useNativeDriver: true,
          }),
        ]).start();
      }
    }
  };

  const handleButtonSwipe = (direction: 'left' | 'right') => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    animateSwipe(direction);
  };

  // Update rotation and opacity based on translation
  const rotateInterpolate = rotate.interpolate({
    inputRange: [-screenWidth, 0, screenWidth],
    outputRange: ['-15deg', '0deg', '15deg'],
    extrapolate: 'clamp',
  });

  const translateXInterpolate = translateX.interpolate({
    inputRange: [-screenWidth, 0, screenWidth],
    outputRange: [-screenWidth, 0, screenWidth],
    extrapolate: 'clamp',
  });

  const likeOpacity = translateX.interpolate({
    inputRange: [0, SWIPE_THRESHOLD],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  });

  const dislikeOpacity = translateX.interpolate({
    inputRange: [-SWIPE_THRESHOLD, 0],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 16,
    },
    cardsContainer: {
      width: screenWidth - 32,
      height: screenHeight - 250,
      position: 'relative',
    },
    cardContainer: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    overlayContainer: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 10,
      pointerEvents: 'none',
    },
    likeOverlay: {
      position: 'absolute',
      top: 100,
      right: 50,
      backgroundColor: Colors.interaction.like,
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderRadius: 8,
      transform: [{ rotate: '20deg' }],
    },
    dislikeOverlay: {
      position: 'absolute',
      top: 100,
      left: 50,
      backgroundColor: Colors.interaction.dislike,
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderRadius: 8,
      transform: [{ rotate: '-20deg' }],
    },
    overlayText: {
      color: Colors.white,
      fontSize: 20,
      fontWeight: 'bold',
    },
    buttonsContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 30,
      gap: 30,
    },
    actionButton: {
      width: 60,
      height: 60,
      borderRadius: 30,
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: theme.shadow,
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.3,
      shadowRadius: 8,
      elevation: 8,
    },
    dislikeButton: {
      backgroundColor: Colors.interaction.dislike,
    },
    likeButton: {
      backgroundColor: Colors.interaction.like,
    },
    emptyContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    emptyText: {
      fontSize: 18,
      color: theme.textSecondary,
      textAlign: 'center',
      marginTop: 16,
    },
    loadingContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    loadingText: {
      fontSize: 16,
      color: theme.textSecondary,
      marginTop: 16,
    },
  });

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <Ionicons name="restaurant-outline" size={60} color={theme.textTertiary} />
        <Text style={styles.loadingText}>Loading delicious recipes...</Text>
      </View>
    );
  }

  if (!currentRecipe) {
    return (
      <View style={styles.emptyContainer}>
        <Ionicons name="restaurant-outline" size={80} color={theme.textTertiary} />
        <Text style={styles.emptyText}>
          No more recipes to swipe!{'\n'}Check back later for fresh ideas.
        </Text>
      </View>
    );
  }

  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.cardsContainer}>
        {/* Next card (background) */}
        {nextRecipe && (
          <Animated.View
            style={[
              styles.cardContainer,
              {
                transform: [{ scale: nextCardScale }],
                opacity: nextCardOpacity,
              },
            ]}
          >
            <RecipeCard 
              recipe={nextRecipe} 
              onShowMore={() => onShowMore?.(nextRecipe)} 
            />
          </Animated.View>
        )}

        {/* Current card (foreground) */}
        <PanGestureHandler
          onGestureEvent={onGestureEvent}
          onHandlerStateChange={onHandlerStateChange}
        >
          <Animated.View
            style={[
              styles.cardContainer,
              {
                transform: [
                  { translateX: translateXInterpolate },
                  { translateY },
                  { rotate: rotateInterpolate },
                  { scale },
                ],
              },
            ]}
          >
            <RecipeCard 
              recipe={currentRecipe} 
              onShowMore={() => onShowMore?.(currentRecipe)} 
            />

            {/* Swipe overlays */}
            <View style={styles.overlayContainer}>
              <Animated.View style={[styles.likeOverlay, { opacity: likeOpacity }]}>
                <Text style={styles.overlayText}>LIKE</Text>
              </Animated.View>
              
              <Animated.View style={[styles.dislikeOverlay, { opacity: dislikeOpacity }]}>
                <Text style={styles.overlayText}>NOPE</Text>
              </Animated.View>
            </View>
          </Animated.View>
        </PanGestureHandler>
      </View>

      {/* Action buttons */}
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={[styles.actionButton, styles.dislikeButton]}
          onPress={() => handleButtonSwipe('left')}
        >
          <Ionicons name="close" size={30} color={Colors.white} />
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.actionButton, styles.likeButton]}
          onPress={() => handleButtonSwipe('right')}
        >
          <Ionicons name="heart" size={28} color={Colors.white} />
        </TouchableOpacity>
      </View>
    </GestureHandlerRootView>
  );
};