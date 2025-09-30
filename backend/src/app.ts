import express from 'express';
import userRoutes from './routes/user.Routes.js';
import cors from 'cors'
const app = express();

//middlewares
app.use(express.json())
app.use(cors());

//routes
app.use('/api/auth',userRoutes)


export default app;