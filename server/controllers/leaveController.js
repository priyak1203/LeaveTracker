import { BadRequestError } from '../errors/customErrors.js';
import { validateUserLeaveInput } from '../middlewares/validation.js';
import { differenceInDays } from 'date-fns';
import Leave from '../models/leaveModel.js';
import { StatusCodes } from 'http-status-codes';

export const applyforLeave = async (req, res) => {
  // validating input
  const validData = validateUserLeaveInput(req.body);
  const { leaveType, startDate, endDate, username, userEmail, userNotes } =
    validData;

  const days = differenceInDays(endDate, startDate) + 1;
  // checking for valid dates
  if (days < 1) {
    throw new BadRequestError('Start date should be greater than End Date');
  }

  //check for existing leaves
  const existingLeave = await Leave.find({
    $and: [{ user: req.user.userId }, { $or: [{ startDate }, { endDate }] }],
  });
  if (existingLeave.length !== 0) {
    throw new BadRequestError('Leave entry already exists for these dates');
  }

  const year = new Date().getFullYear().toString();

  const leaveData = {
    leaveType,
    year,
    startDate,
    endDate,
    days,
    username,
    userEmail,
    userNotes,
    user: req.user.userId,
  };

  const leave = await Leave.create(leaveData);

  res.status(StatusCodes.CREATED).json({ msg: 'Leave Applied Successfully' });
};

export const addLeaveCredits = async (req, res) => {
  res.status(StatusCodes.OK).json({ msg: 'add leave credits' });
};
