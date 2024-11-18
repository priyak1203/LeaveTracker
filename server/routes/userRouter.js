import { Router } from 'express';
import { getAllUsers } from '../controllers/userController.js';
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

export default router;
