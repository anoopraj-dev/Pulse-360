import {Router} from 'express';
import { userSignup } from '../controllers/authControllers/userSignup.controller.js';
import { generateId } from '../middlewares/registrationID.js';
import { verifyOtp } from '../controllers/authControllers/verifyOtp.controller.js';

const router = Router();

//signup route
router.post('/signup',generateId(),userSignup);

//email verification
router.post('/verify-email',verifyOtp)

export default router;