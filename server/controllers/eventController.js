import { StatusCodes } from 'http-status-codes';
import { validateAddEvent } from '../middlewares/validation.js';
import { parseISO } from 'date-fns';
import Event from '../models/eventModel.js';

export const createEvent = async (req, res) => {
  // validate the data
  const rawData = { ...req.body, startDate: parseISO(req.body.startDate) };
  const validData = validateAddEvent(rawData);

  // create an event
  await Event.create(validData);
  res.status(StatusCodes.CREATED).json({ msg: 'Event added.' });
};

export const getAllEvents = async (req, res) => {
  const events = await Event.find();
  res.status(StatusCodes.OK).json({ events });
};
