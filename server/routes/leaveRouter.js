import { Router } from 'express';
import {
  addLeaveCredits,
  applyforLeave,
  getUserBalances,
} from '../controllers/leaveController.js';
import {
  authenticateUser,
  authorizePermissions,
} from '../middlewares/authentication.js';

const router = Router();

router.post('/apply-leave', authenticateUser, applyforLeave);
router.post(
  '/add-leave-credits',
  authenticateUser,
  authorizePermissions('admin'),
  addLeaveCredits
);

router.get('/user-balance', authenticateUser, getUserBalances);

export default router;
