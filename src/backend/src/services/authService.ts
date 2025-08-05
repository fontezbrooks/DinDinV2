import bcrypt from 'bcryptjs';
import { User, IUser } from '../models/User';
import { generateToken } from '../middleware/auth';

export interface AuthResponse {
  success: boolean;
  message: string;
  user?: Partial<IUser>;
  token?: string;
}

export interface RegisterData {
  email: string;
  name: string;
  password?: string;
  googleId?: string;
  avatar?: string;
}

export interface LoginData {
  email: string;
  password: string;
}

export class AuthService {
  
  static async register(userData: RegisterData): Promise<AuthResponse> {
    try {
      const { email, name, password, googleId, avatar } = userData;

      // Check if user already exists
      const existingUser = await User.findOne({ 
        $or: [
          { email },
          ...(googleId ? [{ googleId }] : [])
        ]
      });

      if (existingUser) {
        return {
          success: false,
          message: 'User already exists with this email or Google account'
        };
      }

      // Hash password if provided (for email/password registration)
      let hashedPassword: string | undefined;
      if (password) {
        const saltRounds = 12;
        hashedPassword = await bcrypt.hash(password, saltRounds);
      }

      // Create new user
      const newUser = new User({
        email,
        name,
        password: hashedPassword,
        googleId,
        avatar,
        preferences: {
          dietary: [],
          cuisines: [],
          difficulty: 'medium'
        },
        isActive: true,
        partnerships: []
      });

      await newUser.save();

      // Generate JWT token
      const token = generateToken(newUser);

      // Remove sensitive data from response
      const userResponse = newUser.toJSON();
      delete userResponse.password;

      return {
        success: true,
        message: 'User registered successfully',
        user: userResponse,
        token
      };

    } catch (error) {
      console.error('Registration error:', error);
      return {
        success: false,
        message: 'Registration failed. Please try again.'
      };
    }
  }

  static async login(loginData: LoginData): Promise<AuthResponse> {
    try {
      const { email, password } = loginData;

      // Find user with password field included
      const user = await User.findOne({ email }).select('+password');

      if (!user) {
        return {
          success: false,
          message: 'Invalid email or password'
        };
      }

      if (!user.isActive) {
        return {
          success: false,
          message: 'Account is inactive. Please contact support.'
        };
      }

      // Check if user has a password (not Google-only account)
      if (!user.password) {
        return {
          success: false,
          message: 'This account was created with Google. Please sign in with Google.'
        };
      }

      // Verify password
      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (!isPasswordValid) {
        return {
          success: false,
          message: 'Invalid email or password'
        };
      }

      // Generate JWT token
      const token = generateToken(user);

      // Remove sensitive data from response
      const userResponse = user.toJSON();
      delete userResponse.password;

      return {
        success: true,
        message: 'Login successful',
        user: userResponse,
        token
      };

    } catch (error) {
      console.error('Login error:', error);
      return {
        success: false,
        message: 'Login failed. Please try again.'
      };
    }
  }

  static async googleAuth(profile: any): Promise<AuthResponse> {
    try {
      const { id: googleId, emails, displayName, photos } = profile;
      const email = emails[0]?.value;
      const avatar = photos[0]?.value;

      if (!email) {
        return {
          success: false,
          message: 'Google profile must have an email address'
        };
      }

      // Check if user already exists
      let user = await User.findOne({
        $or: [
          { googleId },
          { email }
        ]
      });

      if (user) {
        // Update Google ID if user exists but doesn't have it
        if (!user.googleId && user.email === email) {
          user.googleId = googleId;
          if (avatar && !user.avatar) {
            user.avatar = avatar;
          }
          await user.save();
        }

        // Check if account is active
        if (!user.isActive) {
          return {
            success: false,
            message: 'Account is inactive. Please contact support.'
          };
        }

        // Generate JWT token
        const token = generateToken(user);

        return {
          success: true,
          message: 'Google authentication successful',
          user: user.toJSON(),
          token
        };
      }

      // Create new user with Google data
      const newUser = new User({
        email,
        name: displayName,
        googleId,
        avatar,
        preferences: {
          dietary: [],
          cuisines: [],
          difficulty: 'medium'
        },
        isActive: true,
        partnerships: []
      });

      await newUser.save();

      // Generate JWT token
      const token = generateToken(newUser);

      return {
        success: true,
        message: 'Google registration successful',
        user: newUser.toJSON(),
        token
      };

    } catch (error) {
      console.error('Google auth error:', error);
      return {
        success: false,
        message: 'Google authentication failed. Please try again.'
      };
    }
  }

  static async getUserById(userId: string): Promise<IUser | null> {
    try {
      return await User.findById(userId).select('-password');
    } catch (error) {
      console.error('Get user by ID error:', error);
      return null;
    }
  }

  static async updateUser(userId: string, updateData: Partial<IUser>): Promise<AuthResponse> {
    try {
      // Remove sensitive fields that shouldn't be updated directly
      const { password, googleId, ...safeUpdateData } = updateData;

      const user = await User.findByIdAndUpdate(
        userId,
        safeUpdateData,
        { new: true, runValidators: true }
      ).select('-password');

      if (!user) {
        return {
          success: false,
          message: 'User not found'
        };
      }

      return {
        success: true,
        message: 'User updated successfully',
        user: user.toJSON()
      };

    } catch (error) {
      console.error('Update user error:', error);
      return {
        success: false,
        message: 'User update failed. Please try again.'
      };
    }
  }
}