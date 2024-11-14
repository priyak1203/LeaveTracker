import mongoose from 'mongoose';

const LeaveSchema = new mongoose.Schema({
  leaveType: {
    type: String,
    enum: [
      'annual',
      'health',
      'study',
      'family',
      'maternity',
      'paternity',
      'unpaid',
    ],
  },
  year: {
    type: String,
    default: '',
  },
  startDate: Date,
  endDate: Date,
  days: Number,
  username: String,
});
