import dotenv from 'dotenv'
dotenv.config();
import type { Request, Response } from "express";
import Doctor, { type IDoctor } from "../../models/doctor.model.js";
import Patient, { type IPatient } from "../../models/patient.model.js";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken'

const jwtSecret= process.env.JWT_SECRET
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
        console.log(user)
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

        //create JWT payload

        let payload;
        if(role==='doctor'){ 
            payload ={
                id: (user as IDoctor).doctorId,
                email:user.email,
                role
            }
        }else{
            payload = {
                id: (user as IPatient).patientId,
                email: user.email,
                role
            }
        }

        //create token

        if(!jwtSecret){
            throw new Error('jwt secret is not defined')
        }

        const token = jwt.sign(
            payload,
            jwtSecret,
            {expiresIn: '1d'}
        )

        //set http-only cookie
        res.cookie('token',token,{
            httpOnly: true,
            sameSite: 'strict',
            maxAge: 1*24*60*60*1000
        })

        return res.status(200).json({
            success: true,
            message: 'Login successful',
            user: {
                id: role === 'doctor'?(user as IDoctor).doctorId : (user as IPatient).patientId,
                email: user.email,
                role
            }
        })

    } catch (error:any) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message:'Inernal Server Error'
        })
    }
}