
import type { Request, Response } from "express";
import Doctor from "../../models/doctor.model.js";
import type { AuthRequest } from "../../types/authRequest.js";



export const getDoctorProfile = async (req: AuthRequest, res: Response) => {
    const token = req.cookies.token;
    
    if (!token) return res.status(401).json({
        success: false,
        message: 'Unauthorized'
    })
    try {
        if (!req.user || req.user.role !== 'doctor') {
            return res.status(403).json({ message: 'Not authorized' });
        }

        const doctor = await Doctor.findOne({doctorId:req.user.id}).select('-password');
        console.log(doctor)
        if (!doctor) {
            return res.status(404).json({
                success: false,
                message: 'Doctor not found'
            })
        }
        res.json({
            success: true,
            user: doctor
        })
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
}