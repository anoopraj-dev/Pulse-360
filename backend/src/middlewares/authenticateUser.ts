import dotenv from 'dotenv';
dotenv.config();
import type { NextFunction,Response } from "express";
import type { AuthRequest } from "../types/authRequest.js";
import jwt  from "jsonwebtoken";

export const authenticateUser = (req: AuthRequest,res:Response,next:NextFunction) =>{
    const token = req.cookies.token;
    if(!token){
        return res.status(401).json({
            success: false,
            message: 'Token missing , Not authenticated'
        })
    }

    try{
        const decoded = jwt.verify(token,process.env.JWT_SECRET!) as {
            id: string;
            email: string;
            role: 'patient' | 'doctor'
        };
        req.user = decoded;
        next();
    }catch(error){
        return res.status(403).json({
            success:false,
            message:'Invalid token'
        })
    }
}