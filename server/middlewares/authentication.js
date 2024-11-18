import { UnauthenticatedError } from '../errors/customErrors.js';
import { verifyJWT } from '../utils/tokenUtils.js';

export const authenticateUser = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    throw new UnauthenticatedError('Authentication Invalid');
  }

  const token = authHeader.split(' ')[1];

  try {
    const payload = verifyJWT(token);
    const { userId, role } = payload;
    req.user = { userId, role };
    next();
  } catch (error) {
    throw new UnauthenticatedError('Not authorized to access this route');
  }
};
