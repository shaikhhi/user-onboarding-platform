import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { config } from './config';
import authRoutes from './controllers/auth.controller';
import userRoutes from './controllers/users.controller';

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

// Health check route
app.get('/health', (req, res) => {
    res.status(200).send('OK');
});

// Start the server
const PORT = config.port || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

export default app;