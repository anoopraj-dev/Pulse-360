
import type { Request, Response } from "express";
import Doctor, { type IDoctor } from "../../models/doctor.model.js";
import Patient, { type IPatient } from "../../models/patient.model.js";
import bcrypt from "bcryptjs";

export const userSignin = async (req: Request, res: Response) => {
    try {
        const { email, password, role } = req.body;

        //check if user exists
        let user: IDoctor | IPatient | null = null;
        if (role === 'doctor') {
            user = await Doctor.findOne({ email });
        } else {
            user= await Patient.findOne({ email });
        }
        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'User not registered!'
            })
        }

        //check password
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.status(401).json({
                success: false,
                message:'Invalid credentials'
            })
        }


    } catch (error) {

    }
}