import dotenv from 'dotenv'
dotenv.config()
import type {SendMailOptions, Transporter} from 'nodemailer';
import nodemailer from 'nodemailer'

//create transporter
const transporter: Transporter = nodemailer.createTransport({
  host: "live.smtp.mailtrap.io",
  port: 587,
  auth: {
    user: "api",
    pass: process.env.PASS
  }
});

export const sendEmail = async(options: SendMailOptions)=>{
    return transporter.sendMail(options);
}