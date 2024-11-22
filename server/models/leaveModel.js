import mongoose from 'mongoose';

const LeaveSchema = new mongoose.Schema(
  {
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
    userName: String,
    userEmail: String,
    userNotes: String,
    leaveStatus: {
      type: String,
      enum: ['pending', 'approved', 'inmoderation', 'rejected'],
      default: 'pending',
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    moderator: {
      type: mongoose.Types.ObjectId,
      ref: 'Moderator',
    },
    moderatorName: String,
    moderatorNotes: String,
  },
  { timestamps: true }
);

export default mongoose.model('Leave', LeaveSchema);
