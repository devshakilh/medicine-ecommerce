import { verify } from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';






export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(' ')[1];
  
    if (!token) {
      return res.status(401).json({ message: 'No token provided' });
    }
  
    try {
      const decoded = verify(token, process.env.JWT_SECRET || '');
      (req as any).user = decoded;
      next();
    } catch (error) {
      return res.status(401).json({ message: 'Invalid token' });
    }
};


// Middleware to check if the user is a super admin
export const superAdminMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const user = (req as any).user;

  if (user.role !== 'super_admin') {
    return res.status(403).json({ message: 'Access denied' });
  }

  next();
};

// Middleware to check if the user is an admin
export const adminMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const user = (req as any).user;

  if (user.role !== 'admin' && user.role !== 'super_admin') {
    return res.status(403).json({ message: 'Access denied' });
  }

  next();
};
