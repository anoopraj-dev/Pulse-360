import express from 'express';
import patientRoutes from './routes/patientRoutes.js';
import cors from 'cors'
const app = express();

app.use(express.json())
app.use(cors());

app.use('/api/auth',patientRoutes)


export default app;