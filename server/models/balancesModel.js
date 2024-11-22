import mongoose from 'mongoose';

const BalanceSchema = new mongoose.Schema(
  {
    year: {
      type: String,
      default: '',
    },
    annualCredit: {
      type: Number,
      default: 0,
    },
    annualAvailable: {
      type: Number,
      default: 0,
    },
    annualUsed: {
      type: Number,
      default: 0,
    },
    healthCredit: {
      type: Number,
      default: 0,
    },
    healthAvailable: {
      type: Number,
      default: 0,
    },
    healthUsed: {
      type: Number,
      default: 0,
    },
    studyCredit: {
      type: Number,
      default: 0,
    },
    studyAvailable: {
      type: Number,
      default: 0,
    },
    studyUsed: {
      type: Number,
      default: 0,
    },
    familyCredit: {
      type: Number,
      default: 0,
    },
    familyAvailable: {
      type: Number,
      default: 0,
    },
    familyUsed: {
      type: Number,
      default: 0,
    },
    maternityCredit: {
      type: Number,
      default: 0,
    },
    maternityAvailable: {
      type: Number,
      default: 0,
    },
    maternityUsed: {
      type: Number,
      default: 0,
    },
    paternityCredit: {
      type: Number,
      default: 0,
    },
    paternityAvailable: {
      type: Number,
      default: 0,
    },
    paternityUsed: {
      type: Number,
      default: 0,
    },
    unpaidUsed: {
      type: Number,
      default: 0,
    },
    userName: String,
    userEmail: String,
    user: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model('Balances', BalanceSchema);
