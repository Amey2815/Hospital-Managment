import express from 'express'
import { addDoctor, deleteDoctor, getDoctor, updateDoctor } from '../controller/DoctorController.js';

const DoctorRouter = express.Router();

DoctorRouter.post("/add",addDoctor)
DoctorRouter.get("/get",getDoctor)
DoctorRouter.put("/update/:id",updateDoctor)
DoctorRouter.delete("/delete/:id",deleteDoctor)

export default DoctorRouter;