import { Request, Response, NextFunction } from 'express';
import { body, validationResult, ValidationError } from 'express-validator';

export const handleValidationErrors = (req: Request, res: Response, next: NextFunction): void => {
  const errors = validationResult(req);
  
  if (!errors.isEmpty()) {
    const errorMessages = errors.array().map((error: ValidationError) => ({
      field: error.type === 'field' ? error.path : undefined,
      message: error.msg
    }));

    res.status(400).json({
      success: false,
      message: 'Validation failed',
      errors: errorMessages
    });
    return;
  }
  
  next();
};

// User validation rules
export const validateUserRegistration = [
  body('email')
    .isEmail()
    .normalizeEmail()
    .withMessage('Please provide a valid email address'),
  
  body('name')
    .trim()
    .isLength({ min: 2, max: 50 })
    .withMessage('Name must be between 2 and 50 characters'),
  
  body('password')
    .optional()
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters long')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/)
    .withMessage('Password must contain at least one lowercase letter, one uppercase letter, and one number'),

  handleValidationErrors
];

export const validateUserLogin = [
  body('email')
    .isEmail()
    .normalizeEmail()
    .withMessage('Please provide a valid email address'),
  
  body('password')
    .notEmpty()
    .withMessage('Password is required'),

  handleValidationErrors
];

export const validateUserUpdate = [
  body('name')
    .optional()
    .trim()
    .isLength({ min: 2, max: 50 })
    .withMessage('Name must be between 2 and 50 characters'),
  
  body('preferences.dietary')
    .optional()
    .isArray()
    .withMessage('Dietary preferences must be an array'),
  
  body('preferences.dietary.*')
    .optional()
    .isIn(['vegetarian', 'vegan', 'pescatarian', 'keto', 'paleo', 'gluten-free', 'dairy-free', 'none'])
    .withMessage('Invalid dietary preference'),
  
  body('preferences.cuisines')
    .optional()
    .isArray()
    .withMessage('Cuisine preferences must be an array'),
  
  body('preferences.cuisines.*')
    .optional()
    .isIn(['italian', 'american', 'mexican', 'asian', 'indian', 'mediterranean', 'french', 'thai', 'japanese', 'chinese', 'other'])
    .withMessage('Invalid cuisine preference'),
  
  body('preferences.difficulty')
    .optional()
    .isIn(['easy', 'medium', 'hard'])
    .withMessage('Difficulty must be easy, medium, or hard'),

  handleValidationErrors
];

// Recipe validation rules
export const validateRecipeCreation = [
  body('title')
    .trim()
    .isLength({ min: 3, max: 200 })
    .withMessage('Title must be between 3 and 200 characters'),
  
  body('description')
    .optional()
    .trim()
    .isLength({ max: 1000 })
    .withMessage('Description must be less than 1000 characters'),
  
  body('ingredients')
    .isArray({ min: 1 })
    .withMessage('Recipe must have at least one ingredient'),
  
  body('ingredients.*.name')
    .trim()
    .notEmpty()
    .withMessage('Ingredient name is required'),
  
  body('ingredients.*.amount')
    .trim()
    .notEmpty()
    .withMessage('Ingredient amount is required'),
  
  body('ingredients.*.unit')
    .trim()
    .notEmpty()
    .withMessage('Ingredient unit is required'),
  
  body('instructions')
    .isArray({ min: 1 })
    .withMessage('Recipe must have at least one instruction'),
  
  body('instructions.*.step')
    .isInt({ min: 1 })
    .withMessage('Instruction step must be a positive integer'),
  
  body('instructions.*.description')
    .trim()
    .notEmpty()
    .withMessage('Instruction description is required'),
  
  body('difficulty')
    .optional()
    .isIn(['easy', 'medium', 'hard'])
    .withMessage('Difficulty must be easy, medium, or hard'),
  
  body('cuisine')
    .optional()
    .isArray()
    .withMessage('Cuisine must be an array'),
  
  body('cuisine.*')
    .optional()
    .isIn(['italian', 'american', 'mexican', 'asian', 'indian', 'mediterranean', 'french', 'thai', 'japanese', 'chinese', 'other'])
    .withMessage('Invalid cuisine type'),
  
  body('dietary')
    .optional()
    .isArray()
    .withMessage('Dietary must be an array'),
  
  body('dietary.*')
    .optional()
    .isIn(['vegetarian', 'vegan', 'pescatarian', 'keto', 'paleo', 'gluten-free', 'dairy-free', 'none'])
    .withMessage('Invalid dietary type'),

  handleValidationErrors
];

// Swipe validation rules
export const validateSwipe = [
  body('recipeId')
    .isMongoId()
    .withMessage('Recipe ID must be a valid MongoDB ObjectId'),
  
  body('swipeDirection')
    .isIn(['left', 'right'])
    .withMessage('Swipe direction must be left or right'),

  handleValidationErrors
];

// Match validation rules
export const validateMatchUpdate = [
  body('status')
    .optional()
    .isIn(['active', 'dismissed', 'cooked'])
    .withMessage('Status must be active, dismissed, or cooked'),
  
  body('notes')
    .optional()
    .trim()
    .isLength({ max: 500 })
    .withMessage('Notes must be less than 500 characters'),
  
  body('rating')
    .optional()
    .isInt({ min: 1, max: 5 })
    .withMessage('Rating must be between 1 and 5'),

  handleValidationErrors
];