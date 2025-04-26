import express from 'express'
import { AddPatient, deletePatient, getPatientById, GetPatients, updatePatient } from '../controller/PatientController.js';

const PatientRouter = express.Router();


PatientRouter.post("/add",AddPatient)
PatientRouter.get("/get",GetPatients)
PatientRouter.put("/update/:id",updatePatient)
PatientRouter.delete("/delete/:id",deletePatient)
PatientRouter.get("/get/:id",getPatientById)


export default PatientRouter;