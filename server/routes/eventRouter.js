import { Router } from 'express';
import {
  authenticateUser,
  authorizePermissions,
} from '../middlewares/authentication.js';
import { createEvent, getAllEvents } from '../controllers/eventController.js';

const router = Router();

router.post(
  '/create',
  authenticateUser,
  authorizePermissions('admin'),
  createEvent
);

router.get('/all-events', authenticateUser, getAllEvents);

export default router;
