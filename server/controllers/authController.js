import { StatusCodes } from 'http-status-codes';
import User from '../models/userModel.js';
import {
  validateLoginUserInput,
  validateRegisterUserInput,
} from '../middlewares/validation.js';
import { comparePassword, hashPassword } from '../utils/passwordUtils.js';
import {
  BadRequestError,
  UnauthenticatedError,
} from '../errors/customErrors.js';
import { createJWT } from '../utils/tokenUtils.js';

// Register User
export const register = async (req, res) => {
  // validating inputs
  const validData = validateRegisterUserInput(req.body);

  const { email, password } = validData;

  // check if the user already registered
  const userExists = await User.findOne({ email });
  if (userExists) {
    throw new BadRequestError('user already registered');
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
  // validating inputs
  const validData = validateLoginUserInput(req.body);

  const { email, password } = validData;

  // check if the user exists
  const user = await User.findOne({ email });

  // check if the password is correct
  const isValidUser = user && (await comparePassword(password, user.password));

  if (!isValidUser) throw new UnauthenticatedError('invalid credentials');

  // setting up token
  const token = createJWT({ userId: user._id, role: user.role });

  // filter user data to send
  const userInfo = user.toJSON();

  res
    .status(StatusCodes.OK)
    .json({ msg: 'user logged in', user: { ...userInfo, token } });
};
