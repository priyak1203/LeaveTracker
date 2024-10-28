import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// routes
app.get('/', (req, res) => {
  res.json({ msg: 'Basic Server' });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server is listening on PORT: ${PORT}`));
