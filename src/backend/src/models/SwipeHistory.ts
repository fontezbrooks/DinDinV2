import mongoose, { Document, Schema } from 'mongoose';

export interface ISwipeHistory extends Document {
  _id: mongoose.Types.ObjectId;
  userId: mongoose.Types.ObjectId;
  recipeId: mongoose.Types.ObjectId;
  swipeDirection: 'left' | 'right';
  createdAt: Date;
}

const SwipeHistorySchema = new Schema<ISwipeHistory>({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  recipeId: {
    type: Schema.Types.ObjectId,
    ref: 'Recipe',
    required: true
  },
  swipeDirection: {
    type: String,
    enum: ['left', 'right'],
    required: true
  }
}, {
  timestamps: { createdAt: true, updatedAt: false },
  toJSON: {
    transform: (doc, ret) => {
      delete ret.__v;
      return ret;
    }
  }
});

// Indexes
SwipeHistorySchema.index({ userId: 1, recipeId: 1 }, { unique: true }); // Prevent duplicate swipes
SwipeHistorySchema.index({ userId: 1, createdAt: -1 }); // For user's swipe history
SwipeHistorySchema.index({ recipeId: 1, swipeDirection: 1 }); // For recipe analytics

export const SwipeHistory = mongoose.model<ISwipeHistory>('SwipeHistory', SwipeHistorySchema);