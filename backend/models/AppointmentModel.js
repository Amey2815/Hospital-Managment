import mongoose from 'mongoose'

const AppointmentSchema = new mongoose.Schema({
  patientId: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient', required: true },
  doctorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Doctor', required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  description: { type: String, required: true },
  status: { type: String, default: 'scheduled' }
});

const AppointmentModel = mongoose.model.appointment  || mongoose.model('appointment', AppointmentSchema);

export default AppointmentModel;