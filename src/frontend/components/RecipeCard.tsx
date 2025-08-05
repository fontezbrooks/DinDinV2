import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Image } from 'expo-image';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../constants/Colors';
import { Recipe } from '../services/api';
import { useColorScheme } from '../hooks/useColorScheme';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

interface RecipeCardProps {
  recipe: Recipe;
  onShowMore?: () => void;
  showFullDetails?: boolean;
}

export const RecipeCard: React.FC<RecipeCardProps> = ({
  recipe,
  onShowMore,
  showFullDetails = false,
}) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme ?? 'light'];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy':
        return Colors.difficulty.easy;
      case 'medium':
        return Colors.difficulty.medium;
      case 'hard':
        return Colors.difficulty.hard;
      default:
        return Colors.difficulty.medium;
    }
  };

  const formatTime = (minutes?: number) => {
    if (!minutes) return '';
    if (minutes < 60) return `${minutes}m`;
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return remainingMinutes > 0 ? `${hours}h ${remainingMinutes}m` : `${hours}h`;
  };

  const styles = StyleSheet.create({
    card: {
      width: screenWidth - 32,
      height: showFullDetails ? screenHeight - 200 : screenHeight - 250,
      backgroundColor: theme.background,
      borderRadius: 16,
      shadowColor: theme.shadow,
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.3,
      shadowRadius: 8,
      elevation: 8,
      overflow: 'hidden',
    },
    imageContainer: {
      height: showFullDetails ? '40%' : '60%',
      position: 'relative',
    },
    image: {
      width: '100%',
      height: '100%',
      backgroundColor: theme.surface,
    },
    imagePlaceholder: {
      width: '100%',
      height: '100%',
      backgroundColor: theme.surface,
      justifyContent: 'center',
      alignItems: 'center',
    },
    difficultyBadge: {
      position: 'absolute',
      top: 16,
      right: 16,
      paddingHorizontal: 12,
      paddingVertical: 6,
      borderRadius: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    difficultyText: {
      color: Colors.white,
      fontSize: 12,
      fontWeight: '600',
      marginLeft: 4,
      textTransform: 'capitalize',
    },
    contentContainer: {
      flex: 1,
      padding: 20,
    },
    scrollContent: {
      flex: 1,
    },
    title: {
      fontSize: 24,
      fontWeight: '700',
      color: theme.text,
      marginBottom: 8,
      lineHeight: 30,
    },
    description: {
      fontSize: 16,
      color: theme.textSecondary,
      lineHeight: 22,
      marginBottom: 16,
    },
    metaRow: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 12,
    },
    metaItem: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 20,
    },
    metaText: {
      fontSize: 14,
      color: theme.textSecondary,
      marginLeft: 4,
    },
    tagsContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginBottom: 16,
    },
    tag: {
      backgroundColor: Colors.transparent.accent20,
      paddingHorizontal: 12,
      paddingVertical: 6,
      borderRadius: 16,
      marginRight: 8,
      marginBottom: 8,
    },
    tagText: {
      fontSize: 12,
      color: Colors.accent,
      fontWeight: '600',
    },
    showMoreButton: {
      backgroundColor: Colors.accent,
      paddingVertical: 12,
      paddingHorizontal: 24,
      borderRadius: 25,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 'auto',
    },
    showMoreText: {
      color: Colors.white,
      fontSize: 16,
      fontWeight: '600',
    },
    ingredientsSection: {
      marginBottom: 20,
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: '600',
      color: theme.text,
      marginBottom: 12,
    },
    ingredient: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 4,
    },
    ingredientName: {
      fontSize: 14,
      color: theme.text,
      flex: 1,
    },
    ingredientAmount: {
      fontSize: 14,
      color: theme.textSecondary,
      fontWeight: '500',
    },
    instructionsSection: {
      marginBottom: 20,
    },
    instruction: {
      flexDirection: 'row',
      marginBottom: 12,
    },
    instructionNumber: {
      width: 24,
      height: 24,
      borderRadius: 12,
      backgroundColor: Colors.accent,
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 12,
      marginTop: 2,
    },
    instructionNumberText: {
      fontSize: 12,
      fontWeight: '600',
      color: Colors.white,
    },
    instructionText: {
      fontSize: 14,
      color: theme.text,
      lineHeight: 20,
      flex: 1,
    },
  });

  const renderBasicInfo = () => (
    <>
      <Text style={styles.title} numberOfLines={2}>
        {recipe.title}
      </Text>
      
      {recipe.description && (
        <Text style={styles.description} numberOfLines={3}>
          {recipe.description}
        </Text>
      )}

      <View style={styles.metaRow}>
        {recipe.cookTime && (
          <View style={styles.metaItem}>
            <Ionicons name="time-outline" size={16} color={theme.textSecondary} />
            <Text style={styles.metaText}>{formatTime(recipe.cookTime)}</Text>
          </View>
        )}
        
        {recipe.servings && (
          <View style={styles.metaItem}>
            <Ionicons name="people-outline" size={16} color={theme.textSecondary} />
            <Text style={styles.metaText}>{recipe.servings} servings</Text>
          </View>
        )}
      </View>

      <View style={styles.tagsContainer}>
        {recipe.cuisine.slice(0, 3).map((cuisine, index) => (
          <View key={index} style={styles.tag}>
            <Text style={styles.tagText}>{cuisine}</Text>
          </View>
        ))}
        {recipe.dietary.slice(0, 2).map((diet, index) => (
          <View key={`diet-${index}`} style={styles.tag}>
            <Text style={styles.tagText}>{diet}</Text>
          </View>
        ))}
      </View>

      {onShowMore && (
        <TouchableOpacity style={styles.showMoreButton} onPress={onShowMore}>
          <Text style={styles.showMoreText}>Show More</Text>
        </TouchableOpacity>
      )}
    </>
  );

  const renderFullDetails = () => (
    <ScrollView style={styles.scrollContent} showsVerticalScrollIndicator={false}>
      <Text style={styles.title}>{recipe.title}</Text>
      
      {recipe.description && (
        <Text style={styles.description}>{recipe.description}</Text>
      )}

      <View style={styles.metaRow}>
        {recipe.prepTime && (
          <View style={styles.metaItem}>
            <Ionicons name="timer-outline" size={16} color={theme.textSecondary} />
            <Text style={styles.metaText}>Prep: {formatTime(recipe.prepTime)}</Text>
          </View>
        )}
        
        {recipe.cookTime && (
          <View style={styles.metaItem}>
            <Ionicons name="time-outline" size={16} color={theme.textSecondary} />
            <Text style={styles.metaText}>Cook: {formatTime(recipe.cookTime)}</Text>
          </View>
        )}
      </View>

      <View style={styles.metaRow}>
        {recipe.servings && (
          <View style={styles.metaItem}>
            <Ionicons name="people-outline" size={16} color={theme.textSecondary} />
            <Text style={styles.metaText}>{recipe.servings} servings</Text>
          </View>
        )}
      </View>

      <View style={styles.tagsContainer}>
        {[...recipe.cuisine, ...recipe.dietary].map((tag, index) => (
          <View key={index} style={styles.tag}>
            <Text style={styles.tagText}>{tag}</Text>
          </View>
        ))}
      </View>

      <View style={styles.ingredientsSection}>
        <Text style={styles.sectionTitle}>Ingredients</Text>
        {recipe.ingredients.map((ingredient, index) => (
          <View key={index} style={styles.ingredient}>
            <Text style={styles.ingredientName}>{ingredient.name}</Text>
            <Text style={styles.ingredientAmount}>
              {ingredient.amount} {ingredient.unit}
            </Text>
          </View>
        ))}
      </View>

      <View style={styles.instructionsSection}>
        <Text style={styles.sectionTitle}>Instructions</Text>
        {recipe.instructions.map((instruction, index) => (
          <View key={index} style={styles.instruction}>
            <View style={styles.instructionNumber}>
              <Text style={styles.instructionNumberText}>{instruction.step}</Text>
            </View>
            <Text style={styles.instructionText}>{instruction.description}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );

  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        {recipe.image ? (
          <Image
            source={{ uri: recipe.image }}
            style={styles.image}
            contentFit="cover"
            transition={300}
            placeholder={require('../assets/images/recipe-placeholder.png')}
          />
        ) : (
          <View style={styles.imagePlaceholder}>
            <Ionicons name="restaurant-outline" size={60} color={theme.textTertiary} />
          </View>
        )}
        
        <View style={[styles.difficultyBadge, { backgroundColor: getDifficultyColor(recipe.difficulty) }]}>
          <Ionicons 
            name={recipe.difficulty === 'easy' ? 'checkmark-circle' : 
                  recipe.difficulty === 'medium' ? 'star' : 'flame'} 
            size={14} 
            color={Colors.white} 
          />
          <Text style={styles.difficultyText}>{recipe.difficulty}</Text>
        </View>
      </View>

      <View style={styles.contentContainer}>
        {showFullDetails ? renderFullDetails() : renderBasicInfo()}
      </View>
    </View>
  );
};