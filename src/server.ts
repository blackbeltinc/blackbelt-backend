import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';

const app = express();

dotenv.config();

app.use(cors());
app.use(express.json());

app.get('/', (request, response) => {
  return response.send('BlackBelt');
});

app.listen(3333, () =>
  console.log('🔥 Server is running on http://localhost:3333'),
);
