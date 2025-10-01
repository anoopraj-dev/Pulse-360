
import type { Request, Response } from "express";
import Patient from "../../models/patient.model.js";
import type { AuthRequest } from "../../types/authRequest.js";
import mongoose from "mongoose";


export const getPatientProfile = async (req: AuthRequest, res: Response) => {
    const token = req.cookies.token;
    
    if (!token) return res.status(401).json({
        success: false,
        message: 'Unauthorized'
    })
    try {
        if (!req.user || req.user.role !== 'patient') {
            return res.status(403).json({ message: 'Not authorized' });
        }

        const patient = await Patient.findOne({patientId:req.user.id}).select('-password');
        console.log(patient)
        if (!patient) {
            return res.status(404).json({
                success: false,
                message: 'Patient not found'
            })
        }
        res.json({
            success: true,
            user: patient
        })
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
}