import { Request, Response } from 'express';
import User from '../models/userModel';


// Get All Users (for super admin only)
export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.find().select('-password');
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};


// Get User Profile
export const getUserProfile = async (req: Request, res: Response) => {
    const userId = (req as any).user.id;
  
    try {
      const user = await User.findById(userId).select('-password');
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.json(user);
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
  };
  
  // Update User Profile
  export const updateUserProfile = async (req: Request, res: Response) => {
    const userId = (req as any).user.id;
    const { name, email } = req.body;
  
    try {
      const user = await User.findByIdAndUpdate(userId, { name, email }, { new: true });
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.json(user);
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
  };
  
  // Delete User Profile
  export const deleteUserProfile = async (req: Request, res: Response) => {
    const userId = (req as any).user.id;
  
    try {
      const user = await User.findByIdAndDelete(userId);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.json({ message: 'User deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
  };

// Update User Role (for super admin only)
export const updateUserRole = async (req: Request, res: Response) => {
  const userId = req.params.id;
  const { role } = req.body;

  if (!['super_admin', 'admin', 'user'].includes(role)) {
    return res.status(400).json({ message: 'Invalid role' });
  }

  try {
    const user = await User.findByIdAndUpdate(userId, { role }, { new: true });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
