import { Match, IMatch } from '../models/Match';
import { User } from '../models/User';
import mongoose from 'mongoose';

export interface MatchFilters {
  status?: 'active' | 'dismissed' | 'cooked';
}

export interface PaginationOptions {
  page?: number;
  limit?: number;
}

export class MatchService {
  
  static async getUserMatches(
    userId: string,
    filters: MatchFilters = {},
    pagination: PaginationOptions = {}
  ): Promise<{
    matches: IMatch[];
    totalCount: number;
    currentPage: number;
    totalPages: number;
  }> {
    try {
      const { status } = filters;
      const { page = 1, limit = 20 } = pagination;

      // Build query
      const query: any = {
        $or: [
          { user1Id: new mongoose.Types.ObjectId(userId) },
          { user2Id: new mongoose.Types.ObjectId(userId) }
        ]
      };

      if (status) {
        query.status = status;
      }

      // Calculate pagination
      const skip = (page - 1) * limit;

      // Get matches with populated data
      const [matches, totalCount] = await Promise.all([
        Match.find(query)
          .populate('user1Id', 'name email avatar')
          .populate('user2Id', 'name email avatar')
          .populate('recipeId', 'title image description difficulty cuisine cookTime prepTime servings')
          .sort({ createdAt: -1 })
          .skip(skip)
          .limit(limit)
          .lean(),
        Match.countDocuments(query)
      ]);

      const totalPages = Math.ceil(totalCount / limit);

      return {
        matches,
        totalCount,
        currentPage: page,
        totalPages
      };

    } catch (error) {
      console.error('Get user matches error:', error);
      throw new Error('Failed to fetch matches');
    }
  }

  static async getMatchById(matchId: string, userId: string): Promise<IMatch | null> {
    try {
      if (!mongoose.Types.ObjectId.isValid(matchId)) {
        return null;
      }

      // Ensure user is part of the match
      const match = await Match.findOne({
        _id: matchId,
        $or: [
          { user1Id: new mongoose.Types.ObjectId(userId) },
          { user2Id: new mongoose.Types.ObjectId(userId) }
        ]
      })
        .populate('user1Id', 'name email avatar')
        .populate('user2Id', 'name email avatar')
        .populate('recipeId', 'title image description ingredients instructions difficulty cuisine cookTime prepTime servings nutrition');

      return match;

    } catch (error) {
      console.error('Get match by ID error:', error);
      return null;
    }
  }

  static async updateMatch(
    matchId: string,
    userId: string,
    updateData: Partial<IMatch>
  ): Promise<IMatch | null> {
    try {
      if (!mongoose.Types.ObjectId.isValid(matchId)) {
        return null;
      }

      // Ensure user is part of the match
      const match = await Match.findOneAndUpdate(
        {
          _id: matchId,
          $or: [
            { user1Id: new mongoose.Types.ObjectId(userId) },
            { user2Id: new mongoose.Types.ObjectId(userId) }
          ]
        },
        {
          ...updateData,
          ...(updateData.status === 'cooked' && !updateData.cookedAt ? { cookedAt: new Date() } : {})
        },
        { new: true, runValidators: true }
      )
        .populate('user1Id', 'name email avatar')
        .populate('user2Id', 'name email avatar')
        .populate('recipeId', 'title image description difficulty cuisine');

      return match;

    } catch (error) {
      console.error('Update match error:', error);
      return null;
    }
  }

  static async dismissMatch(matchId: string, userId: string): Promise<boolean> {
    try {
      const result = await this.updateMatch(matchId, userId, { status: 'dismissed' });
      return !!result;

    } catch (error) {
      console.error('Dismiss match error:', error);
      return false;
    }
  }

  static async markAsCooked(
    matchId: string,
    userId: string,
    notes?: string,
    rating?: number
  ): Promise<IMatch | null> {
    try {
      const updateData: Partial<IMatch> = {
        status: 'cooked',
        cookedAt: new Date()
      };

      if (notes) {
        updateData.notes = notes;
      }

      if (rating) {
        updateData.rating = rating;
      }

      return await this.updateMatch(matchId, userId, updateData);

    } catch (error) {
      console.error('Mark as cooked error:', error);
      return null;
    }
  }

  static async getMatchStats(userId: string): Promise<{
    totalMatches: number;
    activeMatches: number;
    cookedMatches: number;
    dismissedMatches: number;
    averageRating: number;
  }> {
    try {
      const matchQuery = {
        $or: [
          { user1Id: new mongoose.Types.ObjectId(userId) },
          { user2Id: new mongoose.Types.ObjectId(userId) }
        ]
      };

      const [
        totalMatches,
        activeMatches,
        cookedMatches,
        dismissedMatches,
        ratingStats
      ] = await Promise.all([
        Match.countDocuments(matchQuery),
        Match.countDocuments({ ...matchQuery, status: 'active' }),
        Match.countDocuments({ ...matchQuery, status: 'cooked' }),
        Match.countDocuments({ ...matchQuery, status: 'dismissed' }),
        Match.aggregate([
          { $match: { ...matchQuery, status: 'cooked', rating: { $exists: true } } },
          {
            $group: {
              _id: null,
              averageRating: { $avg: '$rating' },
              totalRatings: { $sum: 1 }
            }
          }
        ])
      ]);

      const averageRating = ratingStats.length > 0 
        ? Math.round(ratingStats[0].averageRating * 100) / 100 
        : 0;

      return {
        totalMatches,
        activeMatches,
        cookedMatches,
        dismissedMatches,
        averageRating
      };

    } catch (error) {
      console.error('Get match stats error:', error);
      throw new Error('Failed to fetch match statistics');
    }
  }

  static async getPartnerMatches(userId: string, partnerId: string): Promise<IMatch[]> {
    try {
      const matches = await Match.find({
        $or: [
          {
            user1Id: new mongoose.Types.ObjectId(userId),
            user2Id: new mongoose.Types.ObjectId(partnerId)
          },
          {
            user1Id: new mongoose.Types.ObjectId(partnerId),
            user2Id: new mongoose.Types.ObjectId(userId)
          }
        ]
      })
        .populate('recipeId', 'title image description difficulty cuisine')
        .sort({ createdAt: -1 });

      return matches;

    } catch (error) {
      console.error('Get partner matches error:', error);
      throw new Error('Failed to fetch partner matches');
    }
  }
}