import {Router} from 'express';
import { patientSignup } from '../controllers/authControllers/patientSignup.js';
import { generateId } from '../middlewares/registrationID.js';


const router = Router();

router.post('/signup',generateId(),patientSignup);

export default router;