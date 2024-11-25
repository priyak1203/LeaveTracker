import { BadRequestError } from '../errors/customErrors.js';
import {
  validateAddLeaveCredits,
  validateEditLeave,
  validateId,
  validateUserLeaveInput,
} from '../middlewares/validation.js';
import { differenceInDays } from 'date-fns';
import Leave from '../models/leaveModel.js';
import { StatusCodes } from 'http-status-codes';
import Balances from '../models/balancesModel.js';

export const applyforLeave = async (req, res) => {
  // validating input
  const validData = validateUserLeaveInput(req.body);
  const { leaveType, startDate, endDate, userName, userEmail, userNotes } =
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
    userName,
    userEmail,
    userNotes,
    user: req.user.userId,
  };

  const leave = await Leave.create(leaveData);

  res.status(StatusCodes.CREATED).json({ msg: 'Leave Applied Successfully' });
};

export const addLeaveCredits = async (req, res) => {
  const { userId } = req.body;

  // validate UserId
  validateId(userId);

  // validate input
  const validData = validateAddLeaveCredits(req.body);
  const {
    year,
    annualCredit,
    healthCredit,
    studyCredit,
    familyCredit,
    maternityCredit,
    paternityCredit,
  } = validData;

  // check for existing credits
  const existingCredits = await Balances.find({
    user: userId,
    year,
  });

  if (existingCredits.length > 0) {
    throw new BadRequestError(`Credits for the year ${year} already exists`);
  }

  const creditsData = {
    ...validData,
    annualAvailable: annualCredit,
    healthAvailable: healthCredit,
    studyAvailable: studyCredit,
    familyAvailable: familyCredit,
    maternityAvailable: maternityCredit,
    paternityAvailable: paternityCredit,
    user: userId,
  };

  // update user balance
  const credits = await Balances.create(creditsData);

  res.status(StatusCodes.OK).json({ msg: 'Credits added successfully' });
};

export const getUserBalances = async (req, res) => {
  const { userId } = req.user;
  const year = new Date().getFullYear().toString();

  const userBalances = await Balances.find({ user: userId, year });

  res.status(StatusCodes.OK).json({ userBalances });
};

export const getAllLeaves = async (req, res) => {
  const allLeaves = await Leave.find({});
  res.status(StatusCodes.OK).json({ allLeaves });
};

export const updateLeave = async (req, res) => {
  const { id: leaveId } = req.params;

  // Validate Leave Id
  validateId(leaveId);
  // Validate input
  const validData = validateEditLeave(req.body);

  const {
    leaveStatus,
    leaveType,
    days,
    userId,
    year,
    notes,
    moderatorName,
    moderatorId,
  } = validData;

  if (leaveStatus === 'approved') {
    // Check for the balance
    const balance = await Balances.findOne({ user: userId, year });
    if (!balance)
      throw new BadRequestError(
        'Balance not found for the specified user and year'
      );

    // Check if there is enough balance
    const leaveAvailable = balance[`${leaveType}Available`];
    if (leaveAvailable < days) {
      throw new BadRequestError('Not enough leaves available');
    }

    // Update balance
    balance[`${leaveType}Available`] = balance[`${leaveType}Available`] - days;
    balance[`${leaveType}Used`] = days;
    await balance.save();
  }

  // Update leave
  const leaveUpdateObject = {
    leaveStatus,
    moderatorNotes: notes,
    moderatorName,
    moderator: moderatorId,
  };

  const updatedLeave = await Leave.findOneAndUpdate(
    { _id: leaveId },
    leaveUpdateObject,
    { new: true }
  );

  res.status(StatusCodes.OK).json({ msg: 'Leave Updated' });
};

export const getAllBalances = async (req, res) => {
  const balances = await Balances.find();
  res.status(StatusCodes.OK).json({ balances });
};
