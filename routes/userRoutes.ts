import { Router } from 'express';

import { adminMiddleware, authMiddleware, superAdminMiddleware } from '../middleware/authMiddleware';
import { getUserProfile, updateUserProfile, deleteUserProfile, getAllUsers, updateUserRole } from '../controllers/userController';

const router = Router();

router.get('/profile', authMiddleware, getUserProfile);
router.put('/profile', authMiddleware, updateUserProfile);
router.delete('/profile', authMiddleware, deleteUserProfile);

// Admin routes
router.get('/', authMiddleware, superAdminMiddleware, adminMiddleware, getAllUsers);
router.put('/role/:id', authMiddleware, superAdminMiddleware, updateUserRole);

export default router;
