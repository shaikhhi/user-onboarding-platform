import express from 'express';
import { json } from 'body-parser';
import { createConnection } from 'typeorm';
import { User } from './models/user.model';
import { authRoutes } from './controllers/auth.controller';
import { userRoutes } from './controllers/users.controller';
import { config } from './config/index';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(json());

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

createConnection()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Database connection error:', error);
  });