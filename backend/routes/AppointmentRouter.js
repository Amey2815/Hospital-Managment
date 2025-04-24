import express from 'express'
import { addAppoinment, deleteAppointment, editAppointment, getAppointments } from '../controller/AppointmentController.js';


const AppointRouter = express.Router();


AppointRouter.get("/get",getAppointments)
AppointRouter.post("/add",addAppoinment)
AppointRouter.put("/add/:id",editAppointment)
AppointRouter.delete("/delete/:id",deleteAppointment)



export default AppointRouter;