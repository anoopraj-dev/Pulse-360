import mongoose, { Schema, Document } from "mongoose";

export interface IPatient extends Document {
    name: string;
    gender: "male" | "female" | "other";
    dob: Date;
    email: string;
    phone: string;
    password: string;
    confirmPassword: string;
    address?: string;
    profile_pic?: string;
    medical_history: mongoose.Types.ObjectId[];
    status: "active" | "blocked";
    role: string
}

const PatientSchema = new Schema<IPatient>(
    {
        name: { 
            type: String, 
            required: true 
        },
        gender: { 
            type: String, 
            enum: ["male", "female", "other"], 
        },
        dob: Date,
        email: { 
            type: String, 
            unique: true, 
            required: true 
        },
        phone: { 
            type: String, 
        },
        password: { 
            type: String, 
            required: true 
        },
        address: {
            type:String
        },
        profile_pic: {
            type: String
        },
        medical_history: [{ 
            type: Schema.Types.ObjectId, 
            ref: "TreatmentReport" 
        }],
        status: { 
            type: String, 
            enum: ["active", "blocked"], 
            default: "active" 
        },
        role: {
            type: String,
            required: true
        }
    },
    { timestamps: true }
);

const Patient = mongoose.model<IPatient>("Patient", PatientSchema);
export default Patient;