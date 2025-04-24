import express from 'express'
import { addDoctor, getDoctor } from '../controller/DoctorController.js';

const DoctorRouter = express.Router();

DoctorRouter.post("/add",addDoctor)
DoctorRouter.get("/get",getDoctor)


export default DoctorRouter;