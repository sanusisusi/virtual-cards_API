import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import cardRouter from './routes/card.route';


const app = express();
dotenv.config();

app.use(express.json());  
app.use(express.urlencoded({ extended: true }))
app.use(cors());

const PORT = process.env.PORT || 3001;
const prefix = '/api/v1';

app.get('/', (req, res) => res.status(200).json({
  status: 200,
  data: 'welcome to flutterwave-virtual-card',
}));

app.use(`${prefix}/`, cardRouter);

app.use(async (req, res) => {
  try {
    throw new Error('Route does not exist');
  } catch (error) {
    return res.status(error.status || 404).json({
      status: error.status || 404,
      error: error.message,
    });
  }
});

app.listen(PORT, () => console.log(`Welcome ${PORT}`));

export default app;
