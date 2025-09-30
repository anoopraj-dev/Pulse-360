import dotenv from 'dotenv'
dotenv.config()
import type {SendMailOptions, Transporter} from 'nodemailer';
import nodemailer from 'nodemailer'

//create transporter
const transporter: Transporter = nodemailer.createTransport({
  service: "gmail",
  port: 587,
  secure: false,
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS
  }
});

export const sendEmail = async(options: SendMailOptions)=>{
    return transporter.sendMail(options);
}