import { SwipeHistory, ISwipeHistory } from '../models/SwipeHistory';
import { Match, IMatch } from '../models/Match';
import { User } from '../models/User';
import { RecipeService } from './recipeService';
import mongoose from 'mongoose';

export interface SwipeData {
  userId: string;
  recipeId: string;
  swipeDirection: 'left' | 'right';
}

export interface SwipeResult {
  success: boolean;
  message: string;
  match?: IMatch;
  isMatch?: boolean;
}

export class SwipeService {
  
  static async recordSwipe(swipeData: SwipeData): Promise<SwipeResult> {
    try {
      const { userId, recipeId, swipeDirection } = swipeData;

      // Validate ObjectIds
      if (!mongoose.Types.ObjectId.isValid(userId) || !mongoose.Types.ObjectId.isValid(recipeId)) {
        return {
          success: false,
          message: 'Invalid user ID or recipe ID'
        };
      }

      // Check if user already swiped this recipe
      const existingSwipe = await SwipeHistory.findOne({
        userId: new mongoose.Types.ObjectId(userId),
        recipeId: new mongoose.Types.ObjectId(recipeId)
      });

      if (existingSwipe) {
        return {
          success: false,
          message: 'You have already swiped on this recipe'
        };
      }

      // Record the swipe
      const swipe = new SwipeHistory({
        userId: new mongoose.Types.ObjectId(userId),
        recipeId: new mongoose.Types.ObjectId(recipeId),
        swipeDirection
      });

      await swipe.save();

      // Update recipe stats
      await RecipeService.updateRecipeStats(recipeId, swipeDirection === 'right');

      // If it's a right swipe, check for potential matches
      if (swipeDirection === 'right') {
        const matchResult = await this.checkForMatches(userId, recipeId);
        
        if (matchResult) {
          return {
            success: true,
            message: 'Swipe recorded and match found!',
            match: matchResult,
            isMatch: true
          };
        }
      }

      return {
        success: true,
        message: 'Swipe recorded successfully',
        isMatch: false
      };

    } catch (error) {
      console.error('Record swipe error:', error);
      return {
        success: false,
        message: 'Failed to record swipe'
      };
    }
  }

  static async checkForMatches(userId: string, recipeId: string): Promise<IMatch | null> {
    try {
      // Get user's active partnerships
      const user = await User.findById(userId);
      if (!user || user.partnerships.length === 0) {
        return null;
      }

      // Get active partners
      const activePartners = user.partnerships
        .filter(p => p.status === 'active')
        .map(p => p.partnerId);

      if (activePartners.length === 0) {
        return null;
      }

      // Find partners who also swiped right on the same recipe
      const partnerSwipes = await SwipeHistory.find({
        userId: { $in: activePartners },
        recipeId: new mongoose.Types.ObjectId(recipeId),
        swipeDirection: 'right'
      });

      // Create matches for each partner who also liked the recipe
      const matches: IMatch[] = [];

      for (const partnerSwipe of partnerSwipes) {
        // Check if match already exists
        const existingMatch = await Match.findOne({
          $or: [
            {
              user1Id: new mongoose.Types.ObjectId(userId),
              user2Id: partnerSwipe.userId,
              recipeId: new mongoose.Types.ObjectId(recipeId)
            },
            {
              user1Id: partnerSwipe.userId,
              user2Id: new mongoose.Types.ObjectId(userId),
              recipeId: new mongoose.Types.ObjectId(recipeId)
            }
          ]
        });

        if (!existingMatch) {
          const match = new Match({
            user1Id: new mongoose.Types.ObjectId(userId),
            user2Id: partnerSwipe.userId,
            recipeId: new mongoose.Types.ObjectId(recipeId),
            status: 'active'
          });

          const savedMatch = await match.save();
          matches.push(savedMatch);
        }
      }

      // Return the first match (or null if no matches created)
      return matches.length > 0 ? matches[0] : null;

    } catch (error) {
      console.error('Check for matches error:', error);
      return null;
    }
  }

  static async getUserSwipeHistory(
    userId: string,
    pagination: { page?: number; limit?: number } = {}
  ): Promise<{
    swipes: ISwipeHistory[];
    totalCount: number;
    currentPage: number;
    totalPages: number;
  }> {
    try {
      const { page = 1, limit = 50 } = pagination;
      const skip = (page - 1) * limit;

      const [swipes, totalCount] = await Promise.all([
        SwipeHistory.find({ userId: new mongoose.Types.ObjectId(userId) })
          .populate('recipeId', 'title image difficulty cuisine')
          .sort({ createdAt: -1 })
          .skip(skip)
          .limit(limit)
          .lean(),
        SwipeHistory.countDocuments({ userId: new mongoose.Types.ObjectId(userId) })
      ]);

      const totalPages = Math.ceil(totalCount / limit);

      return {
        swipes,
        totalCount,
        currentPage: page,
        totalPages
      };

    } catch (error) {
      console.error('Get user swipe history error:', error);
      throw new Error('Failed to fetch swipe history');
    }
  }

  static async getSwipeStats(userId: string): Promise<{
    totalSwipes: number;
    rightSwipes: number;
    leftSwipes: number;
    matchRate: number;
  }> {
    try {
      const [totalSwipes, rightSwipes, leftSwipes, totalMatches] = await Promise.all([
        SwipeHistory.countDocuments({ userId: new mongoose.Types.ObjectId(userId) }),
        SwipeHistory.countDocuments({ 
          userId: new mongoose.Types.ObjectId(userId), 
          swipeDirection: 'right' 
        }),
        SwipeHistory.countDocuments({ 
          userId: new mongoose.Types.ObjectId(userId), 
          swipeDirection: 'left' 
        }),
        Match.countDocuments({
          $or: [
            { user1Id: new mongoose.Types.ObjectId(userId) },
            { user2Id: new mongoose.Types.ObjectId(userId) }
          ]
        })
      ]);

      const matchRate = rightSwipes > 0 ? (totalMatches / rightSwipes) * 100 : 0;

      return {
        totalSwipes,
        rightSwipes,
        leftSwipes,
        matchRate: Math.round(matchRate * 100) / 100 // Round to 2 decimal places
      };

    } catch (error) {
      console.error('Get swipe stats error:', error);
      throw new Error('Failed to fetch swipe statistics');
    }
  }
}