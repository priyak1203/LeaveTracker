import mongoose from 'mongoose';

const BalanceSchema = new mongoose.Schema(
  {
    year: {
      type: String,
      default: '',
    },
    annualCredit: Number,
    annualAvailable: Number,
    annualUsed: Number,
    healthCredit: Number,
    healthAvailable: Number,
    healthUsed: Number,
    studyCredit: Number,
    studyAvailable: Number,
    studyUsed: Number,
    familyCredit: Number,
    familyAvailable: Number,
    familyUsed: Number,
    maternityCredit: Number,
    maternityAvailable: Number,
    maternityUsed: Number,
    paternityCredit: Number,
    paternityAvailable: Number,
    paternityUsed: Number,
    unpaidUsed: Number,
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
