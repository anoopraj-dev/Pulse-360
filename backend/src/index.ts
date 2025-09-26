import dotenv from 'dotenv';
dotenv.config();

import connectDB from "./db/db.js";
import app from './app.js'

const port = process.env.PORT;

const startServer = (async() =>{
    try {
        await connectDB();

        await new Promise<void> ((resolve,reject)=>{
            const server = app.listen(port,()=>{
                console.log(`Server started on port http://localhost:${port}`);
                resolve();
            })

            server.on('error',(err:Error)=>reject(err));
            process.exit(1)
        })

    } catch (error: unknown) {
        if(error instanceof Error){
            console.log('Failed to establish connection',error.message);
        }else{
            console.log('Failed to establish connection',error)
        }
        process.exit(1)
    }
})()
