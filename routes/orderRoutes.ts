import { Router } from 'express';

import { authMiddleware } from '../middleware/authMiddleware';
import { createOrder, deleteOrder, getOrders, updateOrder } from '../controllers/orderController';

const router = Router();

router.post('/', authMiddleware, createOrder);
router.get('/', authMiddleware, getOrders);
router.put('/:id', authMiddleware, updateOrder);
router.delete('/:id', authMiddleware, deleteOrder);

export default router;
