import { Router } from 'express';
import { applyforLeave } from '../controllers/leaveController.js';
import { authenticateUser } from '../middlewares/authentication.js';

const router = Router();

router.post('/apply-leave', authenticateUser, applyforLeave);

export default router;
