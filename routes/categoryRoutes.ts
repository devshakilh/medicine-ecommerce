import { Router } from 'express';

import { authMiddleware, adminMiddleware } from '../middleware/authMiddleware';
import{ createCategory, getCategories, updateCategory, deleteCategory } from '../controllers/categoryController';

const router = Router();
// authMiddleware, adminMiddleware, 
router.post('/', createCategory);
router.get('/', getCategories);
router.put('/:id', authMiddleware, adminMiddleware, updateCategory);
router.delete('/:id', authMiddleware, adminMiddleware, deleteCategory);

export default router;
