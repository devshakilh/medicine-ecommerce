import { Router } from 'express';

import { authMiddleware, adminMiddleware, superAdminMiddleware } from '../middleware/authMiddleware';
import { createProduct,  getProductById, deleteProduct, getProducts, updateProduct } from '../controllers/productController';

const router = Router();
// authMiddleware, adminMiddleware, superAdminMiddleware,
router.post('/',  createProduct);
router.get('/', getProducts);
router.get('/:id',  getProductById,);
router.put('/:id', authMiddleware, adminMiddleware, superAdminMiddleware, updateProduct);
router.delete('/:id', authMiddleware, adminMiddleware, superAdminMiddleware, deleteProduct);

export default router;
