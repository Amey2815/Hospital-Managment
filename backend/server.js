import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose';
import UserRouter from './routes/UserRouter.js';
import dotenv from 'dotenv'
import PatientRouter from './routes/PatientRouter.js';
import DoctorRouter from './routes/DoctorRouter.js';
import AppointRouter from './routes/AppointmentRouter.js';
dotenv.config()

const app = express();


app.use(cors());
app.use(express.json());

//api routes
app.use("/api/user",UserRouter)
app.use("/api/patient",PatientRouter)
app.use("/api/doctor",DoctorRouter)
app.use("/api/appointment",AppointRouter)


//connect database
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;

// Connect to MongoDB
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});