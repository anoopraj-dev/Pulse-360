import express from 'express';
import userRoutes from './routes/user.Routes.js';
import cors from 'cors'
import cookieParser from 'cookie-parser'

const app = express();


//middlewares
app.use(express.json())
app.use(cors());
app.use(cookieParser())

//routes
app.use('/api/auth',userRoutes)


export default app;