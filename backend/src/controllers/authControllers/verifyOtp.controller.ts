import type { Request,Response } from "express";
import Patient from "../../models/patient.model.js";
import Doctor from "../../models/doctor.model.js";
import Otp, { type IOtp } from "../../models/otps.model.js";

export const verifyOtp = async(req:Request,res:Response)=>{
    try {
        const {otp,email} = req.body;

        //check if otp exists
        const savedOtp: IOtp | null  = await Otp.findOne({email});
        console.log(savedOtp)

        if(!savedOtp){
            return res.status(400).json({
                success:false,
                messgage:'OTP not found'
            })
        }

        //check if otp expired
        if(savedOtp.expiresAt < new Date()){
            return res.status(400).json({
                success: false,
                message:'OTP expired! Try again'
            })
        }

        //check if otp matches
        if(savedOtp.otp!==otp){
            return res.status(400).json({
                success: false,
                message:'Invalid OTP'
            })
        }

        //verify the user
        const patient = await Patient.findOneAndUpdate({email},{isVerified: true});
        const doctor = await Doctor.findOneAndUpdate({email},{isVerified: true});


        return res.status(200).json({
            success:true,
            message:'Email verified successfully!'
        })


    } catch (error : any) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: 'Internal Server Error'
        })
    }
}