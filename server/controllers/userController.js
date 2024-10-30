import User from '../models/userModel.js';

// Get all users
export const getAllUsers = async (req, res) => {
  const users = await User.find({});
  res.status(200).json({ users });
};
