import express from 'express';
import userRoutes from './routes/user.Routes.js';
import patientRoutes from './routes/patient.Routes.js'
import cors from 'cors'
import cookieParser from 'cookie-parser'

const app = express();


//middlewares
app.use(cookieParser())
app.use(express.json())
app.use(cors({
    origin: 'http://localhost:5174',
    credentials:true,
}));


//common auth routes for doctor and patient
app.use('/api/auth',userRoutes);

//patient routes

app.use('/api/patient',patientRoutes)


export default app;