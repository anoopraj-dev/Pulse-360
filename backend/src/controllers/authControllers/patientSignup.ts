
import type { Request, Response } from "express";
import Patient from '../../models/patient.model.js';
import bcrypt from 'bcryptjs';

export const patientSignup = async (req: Request, res: Response) => {
    try {
        const { name, email, password, confirmPassword,role} = req.body;

        //check if user already exists
        const existingPatient = await Patient.findOne({ email });
        if (existingPatient) {
            return res.status(409).json({
                success: false,
                message: "Email already exists. Please use a different email.",
            });
        }

        //checks for password match
        if(password!== confirmPassword){
            return res.status(400).json({
                success: false,
                message: 'Passwords do not match'
            })
        }

        //Encrypt password
        const hashedPassword = await bcrypt.hash(password,10);

       //create new patient
        // console.log('Registration ID:', (req as any).registrationId);

       const newPatient = new Patient({
            patientId: (req as any).registrationId,
            name,
            email,
            password: hashedPassword,
            role
       })

       await newPatient.save();

       return res.status(201).json({
        success: true,
        message: 'Patient registered successfully'
       })
    } catch (error:any) {
        console.error(error)
        return res.status(500).json({
            success: false,
            message: 'Internal server error, Signup failed!'
        })
    }
}