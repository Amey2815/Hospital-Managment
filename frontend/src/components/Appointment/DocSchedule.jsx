import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { FaCalendarCheck, FaUser, FaUserMd, FaClock, FaNotesMedical } from 'react-icons/fa';
import DoctorSidebar from '../Sidebar/DoctorSidebar';
import { useNavigate } from 'react-router-dom';

const DocShedule = ({ appointmentToEdit }) => {
  const url = "http://localhost:3000";
  const [formData, setFormData] = useState({
    patientId: '',
    doctorId: '',
    date: '',
    time: '',
    description: '',
    status: 'scheduled'
  });

  const [patients, setPatients] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const patientsRes = await axios.get(`${url}/api/patient/get`);
        const doctorsRes = await axios.get(`${url}/api/doctor/get`);
        setPatients(patientsRes.data.data);
        setDoctors(doctorsRes.data.data);

        if (appointmentToEdit) {
          setFormData(appointmentToEdit);
        }
      } catch (error) {
        alert('Error fetching data');
      }
    };
    fetchData();
  }, [appointmentToEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (appointmentToEdit) {
         await axios.put(`${url}/api/appointment/add/${appointmentToEdit._id}`, formData);
          alert('Appointment updated successfully');
        navigate('/doctor');
      } else {
        await axios.post(`${url}/api/appointment/add`, formData);
        alert('Appointment scheduled successfully');
      }
    } catch (error) {
      alert('Operation failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-200">
      <DoctorSidebar />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex-1 p-8 pl-64"
      >
        <div className="max-w-4xl mx-auto">
          <div className="glass-container bg-white/70 backdrop-blur-md rounded-2xl border border-blue-200 p-8 shadow-2xl">
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              <FaCalendarCheck className="inline-block mr-2" />
              {appointmentToEdit ? 'Edit Appointment' : 'New Appointment'}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6 text-gray-700">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Patient Selection */}
                {!appointmentToEdit && (
                  <motion.div className="group relative">
                    <div className="flex items-center gap-3 mb-2 text-blue-500">
                      <FaUser />
                      <label className="text-sm font-medium">Patient</label>
                    </div>
                    <select
                      name="patientId"
                      value={formData.patientId}
                      onChange={(e) => setFormData({ ...formData, patientId: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                      required
                    >
                      <option value="">Select Patient</option>
                      {patients.map(patient => (
                        <option key={patient._id} value={patient._id}>
                          {patient.name}
                        </option>
                      ))}
                    </select>
                  </motion.div>
                )}

                {/* Doctor Selection */}
                {!appointmentToEdit && (
                  <motion.div className="group relative">
                    <div className="flex items-center gap-3 mb-2 text-blue-500">
                      <FaUserMd />
                      <label className="text-sm font-medium">Doctor</label>
                    </div>
                    <select
                      name="doctorId"
                      value={formData.doctorId}
                      onChange={(e) => setFormData({ ...formData, doctorId: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                      required
                    >
                      <option value="">Select Doctor</option>
                      {doctors.map(doctor => (
                        <option key={doctor._id} value={doctor._id}>
                          {doctor.name} ({doctor.specialization})
                        </option>
                      ))}
                    </select>
                  </motion.div>
                )}

                {/* Status for edit */}
                {appointmentToEdit && (
                  <motion.div className="group relative">
                    <div className="flex items-center gap-3 mb-2 text-blue-500">
                      <FaUserMd />
                      <label className="text-sm font-medium">Status</label>
                    </div>
                    <select
                      name="status"
                      value={formData.status}
                      onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                      required
                    >
                      <option value="">Select Status</option>
                      <option value="scheduled">Scheduled</option>
                      <option value="completed">Completed</option>
                      <option value="cancelled">Cancelled</option>
                    </select>
                  </motion.div>
                )}

                {/* Date and Time */}
                <motion.div className="group relative">
                  <div className="flex items-center gap-3 mb-2 text-blue-500">
                    <FaCalendarCheck />
                    <label className="text-sm font-medium">Date</label>
                  </div>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    required
                  />
                </motion.div>

                <motion.div className="group relative">
                  <div className="flex items-center gap-3 mb-2 text-blue-500">
                    <FaClock />
                    <label className="text-sm font-medium">Time</label>
                  </div>
                  <input
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    required
                  />
                </motion.div>
              </div>

              {/* Description */}
              <motion.div className="group relative">
                <div className="flex items-center gap-3 mb-2 text-blue-500">
                  <FaNotesMedical />
                  <label className="text-sm font-medium">Description</label>
                </div>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-4 py-3 bg-white border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 h-32"
                />
              </motion.div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-lg font-semibold text-lg shadow-lg hover:shadow-blue-400/50"
              >
                {loading ? 'Processing...' : (appointmentToEdit ? 'Update Appointment' : 'Schedule Appointment')}
              </motion.button>
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default DocShedule;
