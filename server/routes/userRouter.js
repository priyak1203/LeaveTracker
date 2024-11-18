import { Router } from 'express';
import { getAllUsers, updateUserInfo } from '../controllers/userController.js';
import {
  authenticateUser,
  authorizePermissions,
} from '../middlewares/authentication.js';

const router = Router();

router.get(
  '/all-users',
  authenticateUser,
  authorizePermissions('admin'),
  getAllUsers
);

router.patch(
  '/:id',
  authenticateUser,
  authorizePermissions('admin'),
  updateUserInfo
);

export default router;
