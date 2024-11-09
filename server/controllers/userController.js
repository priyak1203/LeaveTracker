import { StatusCodes } from 'http-status-codes';
import { BadRequestError } from '../errors/customErrors.js';
import { validateRegisterUserInput } from '../middlewares/validation.js';
import User from '../models/userModel.js';
import { hashPassword } from '../utils/passwordUtils.js';

// Register User
export const register = async (req, res) => {
  // validating inputs
  const validData = validateRegisterUserInput(req.body);

  const { email, password } = validData;

  // check if the user already registered
  const userExists = await User.findOne({ email });
  if (userExists) {
    throw new BadRequestError('User already registered');
  }

  const isFirstAccount = (await User.countDocuments()) === 0;
  validData.role = isFirstAccount ? 'admin' : 'user';

  // hash the password
  const hashedPassword = await hashPassword(password);
  validData.password = hashedPassword;

  await User.create(validData);
  res.status(StatusCodes.CREATED).json({ msg: 'user registered' });
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
