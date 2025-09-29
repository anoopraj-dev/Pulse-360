import {Router} from 'express';
import { userSignup } from '../controllers/authControllers/userSignup.js';
import { generateId } from '../middlewares/registrationID.js';


const router = Router();

router.post('/signup',generateId(),userSignup);

export default router;