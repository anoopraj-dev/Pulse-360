import dotenv from 'dotenv';
dotenv.config();

import { connectDB } from './db/db.js';
import app from './app.js';

const port = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await connectDB();

    const server = app.listen(port, () => {
      console.log(`Server started on http://localhost:${port}`);
    });

    server.on('error', (err: Error) => {
      console.error('Server failed to start:', err.message);
      process.exit(1);
    });

  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('Failed to establish connection:', error.message);
    } else {
      console.error('Failed to establish connection:', error);
    }
    process.exit(1);
  }
};

startServer();
