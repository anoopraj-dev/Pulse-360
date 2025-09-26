import dotenv from 'dotenv';
dotenv.config();

import mongoose from 'mongoose';

const mongoURI = process.env.DB_URL;

const connectDB = async (): Promise<void> => {
  if (!mongoURI) {
    throw new Error('MongoDB URL is missing in environment variables');
  }

  try {
    await mongoose.connect(mongoURI);
    console.log('MongoDB connected successfully');
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('Failed to connect to MongoDB:', error.message);
    } else {
      console.error('Failed to connect to MongoDB:', error);

    }
    process.exit(1)
  }
  
};

export default connectDB;
