
import mongoose,{Schema,Model, model}from 'mongoose'

export interface IOtp extends Document {
    email:String
    otp : String;
    expiresAt:Date;
}

const otpSchema = new Schema<IOtp>({
    email:{
        type:String
    },
    otp : {
        type: String
    },
    expiresAt: {
        type: Date
    }
})

//ttl index
otpSchema.index({expiresAt:1},{expireAfterSeconds:0})

const Otp:Model<IOtp> = mongoose.model('Otp',otpSchema);

export default Otp;