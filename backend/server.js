import express from 'express'
import cors from 'cors'
import { ConnectDB } from './config/db.js';
import UserRouter from './routes/UserRouter.js';
import dotenv from 'dotenv'
import PatientRouter from './routes/PatientRouter.js';
import DoctorRouter from './routes/DoctorRouter.js';
import AppointRouter from './routes/AppointmentRouter.js';
dotenv.config()

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

//api routes
app.use("/api/user",UserRouter)
app.use("/api/patient",PatientRouter)
app.use("/api/doctor",DoctorRouter)
app.use("/api/appointment",AppointRouter)


//connect database
ConnectDB()

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});