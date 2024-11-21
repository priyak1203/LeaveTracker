import { z } from 'zod';
import { isValidObjectId } from 'mongoose';
import { BadRequestError } from '../errors/customErrors.js';

const validateWithZodSchema = (schema, data) => {
  const result = schema.safeParse(data);
  if (!result.success) {
    const errors = result.error.errors.map((error) => error.message);
    throw new Error(errors.join(', '));
  }

  return result.data;
};

// Register User Validation
const registerUserSchema = z.object({
  name: z.string({ message: 'name is required' }),
  email: z
    .string({ message: 'email is required' })
    .email({ message: 'Please enter valid email' }),
  password: z
    .string({ message: 'password is required' })
    .min(6, { message: 'password must be minimum 6 letters' }),
  lastName: z.string({ message: 'last name must be a string' }).optional(),
  phone: z.string({ message: 'phone number must be a string' }).optional(),
});

export const validateRegisterUserInput = (data) => {
  return validateWithZodSchema(registerUserSchema, data);
};

// Login user validation
const loginUserSchema = z.object({
  email: z
    .string({ message: 'email is required' })
    .email({ message: 'Please enter valid email' }),
  password: z.string({ message: 'password is required' }),
});

export const validateLoginUserInput = (data) => {
  return validateWithZodSchema(loginUserSchema, data);
};

// Leave Input Schema
const leaveInputSchema = z.object({
  leaveType: z.enum(
    ['annual', 'health', 'study', 'family', 'maternity', 'paternity', 'unpaid'],
    {
      required_error: 'leave type is required',
    }
  ),
  startDate: z.string({ required_error: 'start date is required' }),
  endDate: z.string({ required_error: 'end date is required' }),
  userNotes: z.string().max(200).optional(),
  userName: z.string({ required_error: 'username is required' }),
  userEmail: z.string().email({ required_error: 'user email is required' }),
});

export const validateUserLeaveInput = (data) => {
  return validateWithZodSchema(leaveInputSchema, data);
};

// Update User Info Schema
const updateUserInfoSchema = z.object({
  phone: z.string().max(10).optional(),
  department: z.string({ required_error: 'department is required' }),
  jobTitle: z.string({ required_error: 'job title is required' }),
  role: z.enum(['admin', 'user', 'moderator'], {
    required_error: 'user role is required',
  }),
});

export const validateUpdateUserInfo = (data) => {
  return validateWithZodSchema(updateUserInfoSchema, data);
};

export const validateId = (id) => {
  const isValid = isValidObjectId(id);
  if (!isValid) throw new BadRequestError('Invalid MongoDB id');
  return isValid;
};

// Add Credits Schema
const addCreditSchema = z.object({
  year: z.string(),
  annualCredit: z.number().max(10),
  healthCredit: z.number().max(10),
  studyCredit: z.number().max(10),
  familyCredit: z.number().max(10),
  maternityCredit: z.number().max(10).optional(),
  paternityCredit: z.number().max(10).optional(),
  userName: z.string().optional(),
  userEmail: z.string().optional(),
});

export const validateAddLeaveCredits = (data) => {
  return validateWithZodSchema(addCreditSchema, data);
};
