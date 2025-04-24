import mongoose from "mongoose";

const DoctorSchema = new mongoose.Schema({
    name:{type:String,required:true},
    specialization:{type:String,required:true},
    number:{type:Number,required:true},
    email:{type:String,required:true},
    experience:{type:String,required:true}
})

const DoctorModel = mongoose.model.doctor || mongoose.model("doctor",DoctorSchema)

export default DoctorModel