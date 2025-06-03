import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
import listingRouter from './routes/listing.route.js';
import cookieParser from 'cookie-parser';
import path from 'path';
dotenv.config();

// Check if MONGO environment variable is set
if (!process.env.MONGO) {
  console.error('MONGO environment variable is not set!');
  process.exit(1);
}

// Debug MongoDB URI (hide password)
const debugUri = process.env.MONGO.replace(
  /:([^@]+)@/,
  ':****@'
);
console.log('Attempting to connect to MongoDB with URI:', debugUri);

// MongoDB connection with detailed error logging
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log('Connected to MongoDB!');
  })
  .catch((err) => {
    console.error('MongoDB connection error:');
    console.error('Error name:', err.name);
    console.error('Error code:', err.code);
    console.error('Error message:', err.message);
    if (err.codeName) console.error('Error codeName:', err.codeName);
    
    // Additional debugging info
    console.error('Full error object:', JSON.stringify(err, null, 2));
    process.exit(1);
  });

const __dirname = path.resolve();
const app = express();

app.use(express.json());

app.use(cookieParser());

app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);
app.use('/api/listing', listingRouter);

app.use(express.static(path.join(__dirname, '/client/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
});

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

// Start server
const PORT = process.env.PORT || 3001;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}!`);
  console.log('Environment:', process.env.NODE_ENV);
  console.log('MongoDB URI status:', process.env.MONGO ? 'Set' : 'Not Set');
});
