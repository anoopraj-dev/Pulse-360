
import mongoose,{Schema,Model} from "mongoose";

export interface IDoctor extends Document {
    name: string;
    department?: mongoose.Types.ObjectId;
    doctorId: string;
    gender: 'male' | 'female' | 'other';
    dob: Date;
    profilePic ? : string;
    email: string;
    phone: string;
    password: string;
    confirmPassword: string;
    specializations: string[];
    qualifications: string[];
    experienceYears: number;
    rating?: number;
    services: ('online' |'offline')[];
    status:'approved'|'pending'|'rejected'|'blocked';
    role: string;
}

const DoctorSchema = new Schema<IDoctor>({
    name:{
        type: String,
        required: true,
    },
    department: {
        type: Schema.ObjectId,
        ref: 'Department',
    },
    doctorId: {
        type: String,
        unique: true,
        required: true
    },
    gender: {
        type: String,
        enum: ['male','female','other']

    },
    dob: {
        type: Date
    },
    profilePic: {
        type: String
    },
    email: {
        type: String, 
        unique: true,
        required: true,
    },
    phone:{
        type: String,
    },
    password: {
        type: String,
        required: true
    },
    specializations: {
        type: [String]
    },
    qualifications: {
        type: [String]
    },
    experienceYears:{
        type: Number,
        default: 0
    },
    rating: {
        type: Number,
        default: 0
    },
    services: {
        type: [String],
        enum: ['online','offline'],
        required: true
    },
    status:{
        type: String,
        enum: ['approved','pending','rejected','blocked'],
        default: 'pending'
    },
    role:{
        type: String,
        required: true
    }
},{collection:'doctors',timestamps: true});

const Doctor = mongoose.model<IDoctor>('Doctor',DoctorSchema);

export default Doctor;