import { Router } from 'express';
import {
  authenticateUser,
  authorizePermissions,
} from '../middlewares/authentication.js';
import { createEvent } from '../controllers/eventController.js';

const router = Router();

router.post(
  '/create',
  authenticateUser,
  authorizePermissions('admin'),
  createEvent
);

export default router;
