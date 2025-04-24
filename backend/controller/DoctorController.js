import DoctorModel from "../models/DoctorModel.js"


const addDoctor = async (req, res) => {

    const doctor = new DoctorModel({
        name: req.body.name,
        specialization: req.body.specialization,
        number: req.body.number,
        email: req.body.email,
        experience: req.body.experience
    })

    try {
        await doctor.save();
        res.json({success:true,message:"Doctor data added successfully"})
    }
    catch(error){
        res.json({success:false,message:"error to add data"})
    }
}

const getDoctor = async (req,res)=>{
    try{
        const doctor = await DoctorModel.find()
        res.json({success:true,data:doctor})
    }
    catch(error){
        res.json({success:false,message:"error to get the data of doctor"})
    }
}


export { addDoctor , getDoctor }