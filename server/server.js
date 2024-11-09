import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import 'express-async-errors';

dotenv.config();

const app = express();

// routers
import userRouter from './routes/userRouter.js';
import authRouter from './routes/authRouter.js';

// error handlers
import errorHandler from './middlewares/errorHandler.js';

// middlewares
app.use(cors());
app.use(express.json());

// routes
app.get('/', (req, res) => {
  res.json({ msg: 'Basic Server Setup' });
});

// set up routes
app.use('/api/v1/users', userRouter);
app.use('/api/v1/auth', authRouter);

// Error handler middleware
app.use(errorHandler);

const PORT = process.env.PORT || 3000;

try {
  await mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log(`Connnected To DB`));
  app.listen(PORT, () => console.log(`Server is listening on PORT: ${PORT}`));
} catch (error) {
  console.log(error);
  process.exit(1);
}
