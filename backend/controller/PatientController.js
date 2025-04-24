import PatientModel from "../models/PatientModel.js"



const AddPatient = async(req,res)=>{
    
    const patient = new PatientModel({
        name: req.body.name,
        age: req.body.age,
        gender: req.body.gender,
        contact: req.body.contact,
        email: req.body.email,
        address: req.body.address,
        medicalHistory: req.body.medicalHistory
    }) 
    try{
        await patient.save();
        res.json({success:true,message:"Patient added successfully"})
    }
    catch(error){
        res.json({success:false,message:"Error adding patient"});
    }

}

const GetPatients = async(req,res)=>{
    try{
        const patients = await PatientModel.find({});
        res.json({success:true,data:patients});
    }
    catch(error){
        res.json({success:false,message:"Error retrieving patients"});
    }
}


export { AddPatient , GetPatients }