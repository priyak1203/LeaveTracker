import { z } from 'zod';

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
  userNotes: z.string().max(500).optional(),
  userName: z.string({ required_error: 'username is required' }),
  userEmail: z.string().email({ required_error: 'user email is required' }),
});

export const validateUserLeaveInput = (data) => {
  return validateWithZodSchema(leaveInputSchema, data);
};
