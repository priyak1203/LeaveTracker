import { Router } from 'express';
import { login, register } from '../controllers/authController.js';
import apiLimiter from '../middlewares/apiLimiter.js';

const router = Router();

router.post('/register', apiLimiter, register);
router.post('/login', apiLimiter, login);

export default router;
