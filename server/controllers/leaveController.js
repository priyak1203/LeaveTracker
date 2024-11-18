import { validateUserLeaveInput } from '../middlewares/validation.js';

export const applyforLeave = (req, res) => {
  console.log('request body', req.body);
  console.log('user', req.user);
  const { leaveType, startDate, endDate, notes, userName, userEmail } =
    req.body;
  const leaveData = {
    leaveType,
    startDate,
    endDate,
    notes,
    userName,
    userEmail,
  };
  const validData = validateUserLeaveInput(leaveData);
  console.log(validData);

  res.status(201).json({ msg: 'apply for leave' });
};
