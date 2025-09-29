
import type { Request, Response } from "express";
import Patient from '../../models/patient.model.js';
import Doctor from '../../models/doctor.model.js'
import bcrypt from 'bcryptjs';

export const userSignup = async (req: Request, res: Response) => {
    try {
        const { name, email, password, confirmPassword, role } = req.body;

        //check if user already exists
        const existingPatient = await Patient.findOne({ email });
        const existingDoctor = await Doctor.findOne({ email })
        if (existingPatient || existingDoctor) {
            return res.status(409).json({
                success: false,
                message: "Email already exists. Please use a different email.",
            });
        }

        //checks for password match
        if (password !== confirmPassword) {
            return res.status(400).json({
                success: false,
                message: 'Passwords do not match'
            })
        }

        //Encrypt password
        const hashedPassword = await bcrypt.hash(password, 10);

        //create new patient
        if (role === 'patient') {

            const newPatient = new Patient({
                patientId: (req as any).registrationId,
                name,
                email,
                password: hashedPassword,
                role
            })

            await newPatient.save();

        } else {
            const newDoctor = new Doctor({
                doctorId: (req as any).registrationId,
                name,
                email,
                password: hashedPassword,
                role
            })
            await newDoctor.save();
        }



        return res.status(201).json({
            success: true,
            message: `${role} registered successfully!`
        })
    } catch (error: any) {
        console.error(error)
        return res.status(500).json({
            success: false,
            message: 'Internal server error, Signup failed!'
        })
    }
}