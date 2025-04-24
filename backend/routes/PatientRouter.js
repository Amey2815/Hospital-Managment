import express from 'express'
import { AddPatient, GetPatients } from '../controller/PatientController.js';

const PatientRouter = express.Router();


PatientRouter.post("/add",AddPatient)
PatientRouter.get("/get",GetPatients)


export default PatientRouter;