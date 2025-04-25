import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import axios from 'axios';
import Sidebar from '../Sidebar/Sidebar';
import { FaUserMd, FaStethoscope, FaPhone, FaEnvelope, FaBriefcase } from 'react-icons/fa';

const EditDoctor = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const url = "http://localhost:3000";

  const [doctorData, setDoctorData] = useState({
    name: '',
    specialization: '',
    number: '',
    email: '',
    experience: '',
  });

  const getDoctorDetails = async () => {
    try {
      const res = await axios.get(`${url}/api/doctor/get`);
      const doctor = res.data.data.find(d => d._id === id);
      if (doctor) {
        setDoctorData(doctor);
      }
    } catch (err) {
      console.error("Error fetching doctor details");
    }
  };

  useEffect(() => {
    getDoctorDetails();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDoctorData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(`${url}/api/doctor/update/${id}`, doctorData);
      if (res.data.success) {
        alert("Doctor updated successfully!");
        navigate('/viewdoctor');
      } else {
        alert("Failed to update doctor");
      }
    } catch (err) {
      alert("Error updating doctor");
    }
  };

  return (
    <div>
      <Sidebar />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="overflow-hidden flex justify-center items-center pl-60 min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 p-10"
      >
        <div className="relative w-full max-w-2xl mx-auto">
          <div className="absolute -top-32 -right-32 w-64 h-64 bg-blue-500/20 rounded-full blur-2xl" />
          <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-purple-500/20 rounded-full blur-2xl" />

          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="glass-container bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 shadow-2xl p-8"
          >
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
            >
              <FaUserMd className="inline-block mr-3" />
              Edit Doctor
            </motion.h2>

            <form onSubmit={handleSubmit} className="space-y-6 text-white">
              {/* Fields same as AddDoctor */}
              {[
                { icon: FaUserMd, label: "Full Name", name: "name", type: "text" },
                { icon: FaStethoscope, label: "Specialization", name: "specialization", type: "text" },
                { icon: FaPhone, label: "Contact Number", name: "number", type: "text" },
                { icon: FaEnvelope, label: "Email", name: "email", type: "email" },
                { icon: FaBriefcase, label: "Experience (years)", name: "experience", type: "number" },
              ].map(({ icon: Icon, label, name, type }, idx) => (
                <motion.div
                  key={name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="group relative"
                >
                  <div className="flex items-center gap-3 mb-2 text-cyan-400">
                    <Icon />
                    <label className="text-sm font-medium text-gray-300">{label}</label>
                  </div>
                  <input
                    type={type}
                    name={name}
                    value={doctorData[name]}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 rounded-lg border border-white/10 focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/30 outline-none transition-all"
                    required
                  />
                </motion.div>
              ))}

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg font-semibold text-lg shadow-lg hover:shadow-green-500/20 transition-all"
              >
                Update Doctor
              </motion.button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default EditDoctor;
