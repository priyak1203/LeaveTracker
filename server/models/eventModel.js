import mongoose from 'mongoose';

const EventSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    startDate: Date,
    endDate: Date,
  },
  { timestamps: true }
);

export default mongoose.model('Event', EventSchema);
