import { Router } from 'express';
import {
  addLeaveCredits,
  applyforLeave,
  getAllLeaves,
  getUserBalances,
  updateLeave,
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
router.get(
  '/all-leaves',
  authenticateUser,
  authorizePermissions('admin'),
  getAllLeaves
);

router.patch(
  '/:id',
  authenticateUser,
  authorizePermissions('admin'),
  updateLeave
);

export default router;
