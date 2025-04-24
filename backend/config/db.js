import mongoose from "mongoose";

export const ConnectDB = async ()=>{
    await mongoose.connect('mongodb://localhost:27017/Hospital-Managment').then(console.log("db connected")
    )
}