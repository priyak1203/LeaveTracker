import { Router } from 'express';
import {
  addLeaveCredits,
  applyforLeave,
  getAllBalances,
  getAllLeaves,
  getUserBalances,
  updateBalance,
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

router.get(
  '/all-balances',
  authenticateUser,
  authorizePermissions('admin'),
  getAllBalances
);

router.patch(
  '/:id',
  authenticateUser,
  authorizePermissions('admin'),
  updateLeave
);

router.patch(
  '/balances/:id',
  authenticateUser,
  authorizePermissions('admin'),
  updateBalance
);

export default router;
