import {
  validateId,
  validateUpdateUserInfo,
} from '../middlewares/validation.js';
import User from '../models/userModel.js';
import { StatusCodes } from 'http-status-codes';

// Get all users
export const getAllUsers = async (req, res) => {
  const users = await User.find({});
  res.status(StatusCodes.OK).json({ users });
};

// Update user info
export const updateUserInfo = async (req, res) => {
  const { id: userId } = req.params;

  // validate User Id
  validateId(userId);

  // validate input data
  const validData = validateUpdateUserInfo(req.body);

  const updatedUser = await User.findByIdAndUpdate({ _id: userId }, validData, {
    new: true,
  });

  res.status(StatusCodes.OK).json({ msg: 'user info updated' });
};
