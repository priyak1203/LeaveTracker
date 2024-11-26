import { StatusCodes } from 'http-status-codes';

export const createEvent = async (req, res) => {
  res.status(StatusCodes.OK).json({ msg: 'create an event' });
};
