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

const updateDoctor = async (req, res) => {
    const { id } = req.params;

    try {
        const updatedDoctor = await DoctorModel.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedDoctor) {
            res.json({success:false,message:"doctor not found"})
        }

        res.json({ success: true, message: "Doctor updated successfully", data: updatedDoctor });
    } catch (error) {
        res.status(500).json({ success: false, message: "Error updating doctor" });
    }
};

const deleteDoctor = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedDoctor = await DoctorModel.findByIdAndDelete(id);
        if (!deletedDoctor) {
            res.json({ success: false, message: "Doctor not found" });
        }

        res.json({ success: true, message: "Doctor deleted successfully" });
    } catch (error) {
        res.status(500).json({ success: false, message: "Error deleting doctor" });
    }
};



export { addDoctor , getDoctor , updateDoctor , deleteDoctor }