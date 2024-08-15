

import express from 'express';
import { login, refreshToken, register, resendVerification, verifyEmail } from '../controllers/authController';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/verify/:token', verifyEmail);
router.post('/refresh-token', refreshToken);
router.post('/resend-verification', resendVerification);

export default router;
