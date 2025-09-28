import mongoose,{Schema,Model} from "mongoose";
import type {Role} from '../config/RBAC.js'

export interface IUser{
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    role: Role;
    createdAt: Date;
    updatedAt: Date;

}

const UserSchema: Schema= new Schema<IUser>({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        index: true
    },
    password: {
        type: String,
        required: true,
    },
    confirmPassword: {
        type: String,
        requried: true
    },
    role: {
        type: String,
        enum: ["admin", "doctor", "patient"],
        default: 'patient'

    }
}, {timestamps:true})


export const User: Model<IUser> = mongoose.model<IUser>('User',UserSchema);

export default User;