
import type { Request, Response } from "express";
import Doctor from "../../models/doctor.model.js";
import bcrypt from "bcryptjs";

export const doctorSignup = async (req: Request, res: Response) => {
    try {

        const {name,email,password,confirmPassword,role} = req.body;

    //check if existing doctor
    const existingDoctor = await Doctor.findOne({email});

    if(existingDoctor){
        return res.status(409).json({
            success: false,
            message: 'Email already exists. Please use a different email'
        })
    }

    if(password !== confirmPassword){
        return res.status(400).json({
            success: false,
            message: 'Password doesnt match'
        })
    }

    //Encrypt password

    const hashedPassword = await bcrypt.hash(password,10);

    //create new user

    const newDoctor = new Doctor({
        doctorId: (req as any).registrationID,
        name,
        email,
        password: hashedPassword,
        role
    })

    await newDoctor.save();

    return res.status(201).json({
        succes: true,
        message:'Doctor registered succesfully!'
    })
        
    } catch (error:any) {
        console.error(error);
        return res.status(500).json({
            success:false,
            message:'Internal server error. Signup failed!'
        })
    }

}