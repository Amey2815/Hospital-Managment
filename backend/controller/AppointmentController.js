import AppointmentModel from "../models/AppointmentModel.js";
import PatientModel from '../models/PatientModel.js'
import DoctorModel from '../models/DoctorModel.js'
// GET all appointments
const getAppointments = async (req, res) => {
  const { doctorId, patientId, date } = req.query;

  let filter = {};
  if (doctorId) filter.doctorId = doctorId;
  if (patientId) filter.patientId = patientId;
  if (date) filter.date = date;

  try {
    const appointments = await AppointmentModel.find(filter);
    console.log('Fetched appointments:', appointments); // Debug log
    res.status(200).json(appointments);
  } catch (err) {
    console.error('Actual error:', err); // Full error log
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};


// POST new appointment
const addAppoinment =  async (req, res) => {
  const { patientId, doctorId, date, time, description } = req.body;

  try {
    // Check if patient exists
    const patient = await PatientModel.findById(patientId);
    if (!patient) return res.status(404).json({ message: 'Patient not found' });

    // Check if doctor exists
    const doctor = await DoctorModel.findById(doctorId);
    if (!doctor) return res.status(404).json({ message: 'Doctor not found' });

    const newAppointment = new AppointmentModel({
      patientId,
      doctorId,
      date,
      time,
      description,
      status: 'scheduled'
    });

    const savedAppointment = await newAppointment.save();
    res.status(201).json(savedAppointment);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// PUT update appointment
 const editAppointment =  async (req, res) => {
  const { id } = req.params;

  try {
    const appointment = await AppointmentModel.findById(id);
    if (!appointment) return res.status(404).json({ message: 'Appointment not found' });

    if (req.body.patientId) {
      const patient = await PatientModel.findById(req.body.patientId);
      if (!patient) return res.status(404).json({ message: 'Patient not found' });
    }

    if (req.body.doctorId) {
      const doctor = await DoctorModel.findById(req.body.doctorId);
      if (!doctor) return res.status(404).json({ message: 'Doctor not found' });
    }

    Object.keys(req.body).forEach(key => {
      appointment[key] = req.body[key];
    });

    const updatedAppointment = await appointment.save();
    res.json(updatedAppointment);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// DELETE appointment
 const deleteAppointment = async (req, res) => {
  try {
    const appointment = await AppointmentModel.findByIdAndDelete(req.params.id);
    if (!appointment) return res.status(404).json({ message: 'Appointment not found' });
    res.json({ message: 'Appointment deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export { addAppoinment ,getAppointments ,deleteAppointment ,editAppointment }