import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';
import { FaCalendarAlt, FaEdit, FaTrash, FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'
import DocShedule from './DocSchedule';

const Docview = () => {
  const url = "http://localhost:3000"
  const [appointments, setAppointments] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [viewMode, setViewMode] = useState('list'); // 'list' or 'calendar'
  
  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await axios.get(`${url}/api/appointment/get`);
        console.log(response.data)
        setAppointments(response.data.data);
      } catch (error) {
        alert('Failed to fetch appointments');
      }
    };
    fetchAppointments();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this appointment?')) {
      try {
        await axios.delete(`${url}/api/appointment/delete/${id}`);
        setAppointments(appointments.filter(a => a._id !== id));
        alert('Appointment deleted successfully');
      } catch (error) {
        alert('Failed to delete appointment');
      }
    }
  };

  const filteredAppointments = Array.isArray(appointments) && appointments.filter(appointment =>
    appointment.patientName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    appointment.doctorName?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-8 text-white bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <motion.h1
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4 md:mb-0"
          >
            <FaCalendarAlt className="inline-block mr-2" />
            Appointment Schedule
          </motion.h1>
          
          <div className="flex items-center gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search appointments..."
                className="pl-10 pr-4 py-2 bg-white/5 rounded-lg border border-white/10 focus:outline-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <FaSearch className="absolute left-3 top-3 text-gray-400" />
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={() => {
                setSelectedAppointment(null);
                setShowModal(true);
              }}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2 rounded-lg flex items-center gap-2"
            >
              New Appointment
            </motion.button>
          </div>
        </div>

        {/* View Mode Toggle */}
        <div className="flex gap-4 mb-6">
          <button
            onClick={() => setViewMode('list')}
            className={`px-4 py-2 rounded-lg ${viewMode === 'list' ? 'bg-cyan-500/20' : 'bg-white/5'}`}
          >
            List View
          </button>
          
        </div>

        {/* Appointments List */}
        {viewMode === 'list' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="glass-container bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 shadow-2xl overflow-hidden"
          >
            <table className="w-full">
              <thead className="bg-white/5">
                <tr>
                  <th className="px-6 py-4 text-left">Patient</th>
                  <th className="px-6 py-4 text-left">Doctor</th>
                  <th className="px-6 py-4 text-left">Date & Time</th>
                  <th className="px-6 py-4 text-left">Status</th>
                  <th className="px-6 py-4 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                { Array.isArray(filteredAppointments) && filteredAppointments.map(appointment => (
                  <tr key={appointment._id} className="border-t border-white/10 hover:bg-white/5">
                    <td className="px-6 py-4">{appointment.patientName}</td>
                    <td className="px-6 py-4">{appointment.doctorName}</td>
                    <td className="px-6 py-4">
                      {new Date(appointment.date).toLocaleDateString()} {appointment.time}
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 rounded-full text-sm ${
                        appointment.status === 'completed' ? 'bg-green-500/20 text-green-400' :
                        appointment.status === 'cancelled' ? 'bg-red-500/20 text-red-400' :
                        'bg-cyan-500/20 text-cyan-400'
                      }`}>
                        {appointment.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex gap-3">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          onClick={() => {
                            setSelectedAppointment(appointment);
                            setShowModal(true);
                          }}
                          className="text-cyan-400 hover:text-cyan-300"
                        >
                          <FaEdit />
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          onClick={() => handleDelete(appointment._id)}
                          className="text-red-400 hover:text-red-300"
                        >
                          <FaTrash />
                        </motion.button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        )}

        
        

        {/* Add/Edit Modal */}
        <AnimatePresence>
          {showModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
            >
              <motion.div
                initial={{ y: 50 }}
                animate={{ y: 0 }}
                className="glass-container bg-slate-800/90 backdrop-blur-lg rounded-2xl p-8  w-screen"
              >
                <DocShedule 
                  appointmentToEdit={selectedAppointment}
                  onClose={() => setShowModal(false)}
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Docview;