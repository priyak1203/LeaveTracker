import { z } from 'zod';

const validateWithZodSchema = (schema, data) => {
  const result = schema.safeParse(data);
  if (!result.success) {
    const errors = result.error.errors.map((error) => error.message);
    throw new Error(errors.join(', '));
  }

  return result.data;
};

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
