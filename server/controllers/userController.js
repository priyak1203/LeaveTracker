import { validateRegisterUserInput } from '../middlewares/validation.js';
import User from '../models/userModel.js';

// Register User
export const register = async (req, res) => {
  const { name, email, password, phone, lastName } = req.body;

  const validData = validateRegisterUserInput(req.body);
  console.log(validData);

  res.status(201).json({ data: rawdata });
};

// Login User
export const login = async (req, res) => {
  res.status(201).json({ msg: 'Login User' });
};

// Trial Controllers

// Get all users
export const getAllUsers = async (req, res) => {
  const users = await User.find({});
  res.status(200).json({ users });
};
