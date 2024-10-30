import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';

dotenv.config();

const app = express();

// routers
import userRouter from './routes/userRouter.js';

// middlewares
app.use(cors());

// routes
app.get('/', (req, res) => {
  res.json({ msg: 'Basic Server Setup' });
});

app.use('/api/v1/users', userRouter);

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
