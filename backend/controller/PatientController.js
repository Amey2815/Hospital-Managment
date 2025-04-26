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


const updatePatient = async (req, res) => {
    try {
      const updatedPatient = await PatientModel.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      if (updatedPatient) {
        res.json({ success: true, message: "Patient updated successfully" });
      } else {
        res.json({ success: false, message: "Patient not found" });
      }
    } catch (error) {
      console.error(error);
      res.json({ success: false, message: "Failed to update patient" });
    }
  };
  
  // Delete Patient
  const deletePatient = async (req, res) => {
    try {
      const deletedPatient = await PatientModel.findByIdAndDelete(req.params.id);
      if (deletedPatient) {
        res.json({ success: true, message: "Patient deleted successfully" });
      } else {
        res.json({ success: false, message: "Patient not found" });
      }
    } catch (error) {
      console.error(error);
      res.json({ success: false, message: "Failed to delete patient" });
    }
  };

  const getPatientById = async (req, res) => {
    try {
      const patient = await PatientModel.findById(req.params.id);
      if (patient) {
        res.json({ success: true, data: patient });
      } else {
        res.json({ success: false, message: "Patient not found" });
      }
    } catch (error) {
      console.error(error);
      res.json({ success: false, message: "Error fetching patient" });
    }
  };
  


export { AddPatient , GetPatients , updatePatient , deletePatient ,getPatientById }