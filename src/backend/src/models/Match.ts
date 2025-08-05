import mongoose, { Document, Schema } from 'mongoose';

export interface IMatch extends Document {
  _id: mongoose.Types.ObjectId;
  user1Id: mongoose.Types.ObjectId;
  user2Id: mongoose.Types.ObjectId;
  recipeId: mongoose.Types.ObjectId;
  status: 'active' | 'dismissed' | 'cooked';
  cookedAt?: Date;
  notes?: string;
  rating?: number; // 1-5 stars
  createdAt: Date;
  updatedAt: Date;
}

const MatchSchema = new Schema<IMatch>({
  user1Id: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  user2Id: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  recipeId: {
    type: Schema.Types.ObjectId,
    ref: 'Recipe',
    required: true
  },
  status: {
    type: String,
    enum: ['active', 'dismissed', 'cooked'],
    default: 'active'
  },
  cookedAt: {
    type: Date
  },
  notes: {
    type: String,
    trim: true,
    maxlength: 500
  },
  rating: {
    type: Number,
    min: 1,
    max: 5
  }
}, {
  timestamps: true,
  toJSON: {
    transform: (doc, ret) => {
      delete ret.__v;
      return ret;
    }
  }
});

// Indexes
MatchSchema.index({ user1Id: 1, user2Id: 1, recipeId: 1 }, { unique: true }); // Prevent duplicate matches
MatchSchema.index({ user1Id: 1, status: 1, createdAt: -1 }); // For user's matches
MatchSchema.index({ user2Id: 1, status: 1, createdAt: -1 }); // For user's matches
MatchSchema.index({ recipeId: 1 }); // For recipe analytics
MatchSchema.index({ status: 1, createdAt: -1 }); // For filtering matches

// Middleware to ensure user1Id < user2Id for consistency
MatchSchema.pre('save', function(next) {
  if (this.user1Id.toString() > this.user2Id.toString()) {
    const temp = this.user1Id;
    this.user1Id = this.user2Id;
    this.user2Id = temp;
  }
  next();
});

export const Match = mongoose.model<IMatch>('Match', MatchSchema);