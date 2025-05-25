import mongoose from "mongoose";

export const ConnectDB = async ()=>{
    await mongoose.connect('mongodb+srv://maxap600:Amey15@cluster0.coc7t.mongodb.net/Hospital-Managment').then(console.log("db connected")
    )
}