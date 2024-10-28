import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  phone: String,
  lastName: {
    type: String,
    default: 'last name',
  },
  role: {
    type: String,
    enum: ['admin', 'user', 'moderator'],
    default: 'user',
  },
  jobTitle: String,
  manager: String,
  department: String,
  avatar: String,
  avatarPublicId: String,
});

export default mongoose.model('User', UserSchema);
