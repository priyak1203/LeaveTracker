import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const app = express();

// routes
app.get('/', (req, res) => {
  res.json({ msg: 'Basic Server Setup' });
});

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
