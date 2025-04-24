import mongoose from 'mongoose'

const PatientSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },  
    gender: { type: String, required: true },
    contact: { type: String, required: true },
    email: { type: String, required: true },
    address: { type: String, required: true },
    medicalHistory: { type: String, required: true },
    
})

const PatientModel = mongoose.model.patient || mongoose.model('Patient', PatientSchema)
export default PatientModel;



