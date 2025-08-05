import mongoose, { Document, Schema } from 'mongoose';

export interface IPartnership {
  partnerId: mongoose.Types.ObjectId;
  status: 'pending' | 'active' | 'inactive';
  createdAt: Date;
}

export interface IUserPreferences {
  dietary: string[];
  cuisines: string[];
  difficulty: 'easy' | 'medium' | 'hard';
}

export interface IUser extends Document {
  _id: mongoose.Types.ObjectId;
  googleId?: string;
  email: string;
  name: string;
  password?: string; // For email/password authentication
  avatar?: string;
  preferences: IUserPreferences;
  isActive: boolean;
  partnerships: IPartnership[];
  createdAt: Date;
  updatedAt: Date;
}

const PartnershipSchema = new Schema<IPartnership>({
  partnerId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  status: {
    type: String,
    enum: ['pending', 'active', 'inactive'],
    default: 'pending'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const UserPreferencesSchema = new Schema<IUserPreferences>({
  dietary: [{
    type: String,
    enum: ['vegetarian', 'vegan', 'pescatarian', 'keto', 'paleo', 'gluten-free', 'dairy-free', 'none']
  }],
  cuisines: [{
    type: String,
    enum: ['italian', 'american', 'mexican', 'asian', 'indian', 'mediterranean', 'french', 'thai', 'japanese', 'chinese', 'other']
  }],
  difficulty: {
    type: String,
    enum: ['easy', 'medium', 'hard'],
    default: 'medium'
  }
});

const UserSchema = new Schema<IUser>({
  googleId: {
    type: String,
    unique: true,
    sparse: true // Allows null values but ensures uniqueness when present
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  password: {
    type: String,
    select: false // Don't include password in queries by default
  },
  avatar: {
    type: String,
    default: null
  },
  preferences: {
    type: UserPreferencesSchema,
    default: () => ({
      dietary: [],
      cuisines: [],
      difficulty: 'medium'
    })
  },
  isActive: {
    type: Boolean,
    default: true
  },
  partnerships: [PartnershipSchema]
}, {
  timestamps: true,
  toJSON: {
    transform: (doc, ret) => {
      delete ret.password;
      delete ret.__v;
      return ret;
    }
  }
});

// Indexes
UserSchema.index({ email: 1 }, { unique: true });
UserSchema.index({ googleId: 1 }, { unique: true, sparse: true });
UserSchema.index({ 'partnerships.partnerId': 1 });

// Middleware
UserSchema.pre('save', function(next) {
  if (this.isModified('email')) {
    this.email = this.email.toLowerCase();
  }
  next();
});

export const User = mongoose.model<IUser>('User', UserSchema);