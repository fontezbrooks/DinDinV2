import mongoose, { Document, Schema } from 'mongoose';

export interface IIngredient {
  name: string;
  amount: string;
  unit: string;
}

export interface IInstruction {
  step: number;
  description: string;
}

export interface INutrition {
  calories?: number;
  protein?: number;
  carbs?: number;
  fat?: number;
  fiber?: number;
}

export interface IRecipe extends Document {
  _id: mongoose.Types.ObjectId;
  title: string;
  description?: string;
  image?: string;
  ingredients: IIngredient[];
  instructions: IInstruction[];
  cookTime?: number; // in minutes
  prepTime?: number; // in minutes
  servings?: number;
  difficulty: 'easy' | 'medium' | 'hard';
  cuisine: string[];
  dietary: string[];
  nutrition?: INutrition;
  tags: string[];
  isActive: boolean;
  createdBy?: mongoose.Types.ObjectId;
  likes: number;
  dislikes: number;
  createdAt: Date;
  updatedAt: Date;
}

const IngredientSchema = new Schema<IIngredient>({
  name: {
    type: String,
    required: true,
    trim: true
  },
  amount: {
    type: String,
    required: true,
    trim: true
  },
  unit: {
    type: String,
    required: true,
    trim: true
  }
});

const InstructionSchema = new Schema<IInstruction>({
  step: {
    type: Number,
    required: true,
    min: 1
  },
  description: {
    type: String,
    required: true,
    trim: true
  }
});

const NutritionSchema = new Schema<INutrition>({
  calories: {
    type: Number,
    min: 0
  },
  protein: {
    type: Number,
    min: 0
  },
  carbs: {
    type: Number,
    min: 0
  },
  fat: {
    type: Number,
    min: 0
  },
  fiber: {
    type: Number,
    min: 0
  }
});

const RecipeSchema = new Schema<IRecipe>({
  title: {
    type: String,
    required: true,
    trim: true,
    maxlength: 200
  },
  description: {
    type: String,
    trim: true,
    maxlength: 1000
  },
  image: {
    type: String,
    trim: true
  },
  ingredients: {
    type: [IngredientSchema],
    required: true,
    validate: {
      validator: function(ingredients: IIngredient[]) {
        return ingredients.length > 0;
      },
      message: 'Recipe must have at least one ingredient'
    }
  },
  instructions: {
    type: [InstructionSchema],
    required: true,
    validate: {
      validator: function(instructions: IInstruction[]) {
        return instructions.length > 0;
      },
      message: 'Recipe must have at least one instruction'
    }
  },
  cookTime: {
    type: Number,
    min: 0
  },
  prepTime: {
    type: Number,
    min: 0
  },
  servings: {
    type: Number,
    min: 1,
    default: 4
  },
  difficulty: {
    type: String,
    enum: ['easy', 'medium', 'hard'],
    default: 'medium'
  },
  cuisine: [{
    type: String,
    enum: ['italian', 'american', 'mexican', 'asian', 'indian', 'mediterranean', 'french', 'thai', 'japanese', 'chinese', 'other']
  }],
  dietary: [{
    type: String,
    enum: ['vegetarian', 'vegan', 'pescatarian', 'keto', 'paleo', 'gluten-free', 'dairy-free', 'none']
  }],
  nutrition: NutritionSchema,
  tags: [{
    type: String,
    trim: true,
    lowercase: true
  }],
  isActive: {
    type: Boolean,
    default: true
  },
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  likes: {
    type: Number,
    default: 0,
    min: 0
  },
  dislikes: {
    type: Number,
    default: 0,
    min: 0
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
RecipeSchema.index({ title: 'text', description: 'text' });
RecipeSchema.index({ cuisine: 1 });
RecipeSchema.index({ dietary: 1 });
RecipeSchema.index({ difficulty: 1 });
RecipeSchema.index({ tags: 1 });
RecipeSchema.index({ isActive: 1 });
RecipeSchema.index({ createdBy: 1 });
RecipeSchema.index({ likes: -1 }); // For popular recipes
RecipeSchema.index({ createdAt: -1 }); // For newest recipes

export const Recipe = mongoose.model<IRecipe>('Recipe', RecipeSchema);