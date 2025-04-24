import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Sidebar from '../Sidebar/Sidebar';
import axios from 'axios';
import { FaUser, FaBirthdayCake, FaVenusMars, FaPhone, FaEnvelope, FaHome, FaNotesMedical } from 'react-icons/fa';

const AddPatient = () => {
  const url = "http://localhost:3000";
  const [patientData, setPatientData] = useState({
    name: '',
    age: '',
    gender: '',
    contact: '',
    email: '',
    address: '',
    medicalHistory: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPatientData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${url}/api/patient/add`, patientData);
      if(response.data.success) {
        alert('Patient added successfully!');
        setPatientData({
          name: '',
          age: '',
          gender: '',
          contact: '',
          email: '',
          address: '',
          medicalHistory: ''
        });
      }
    } catch (error) {
      alert('Failed to add patient. Please try again.');
    }
  };

  const formFields = [
    { icon: <FaUser />, name: 'name', label: 'Full Name', type: 'text' },
    { icon: <FaBirthdayCake />, name: 'age', label: 'Age', type: 'number' },
    { icon: <FaVenusMars />, name: 'gender', label: 'Gender', type: 'select' },
    { icon: <FaPhone />, name: 'contact', label: 'Contact Number', type: 'text' },
    { icon: <FaEnvelope />, name: 'email', label: 'Email Address', type: 'email' },
    { icon: <FaHome />, name: 'address', label: 'Address', type: 'text' },
    { icon: <FaNotesMedical />, name: 'medicalHistory', label: 'Medical History', type: 'textarea' },
  ];

  return (
    <div>
      <Sidebar />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className=" overflow-hidden flex justify-center items-center pl-60 min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 p-10"
      >
        <div className="relative w-full max-w-2xl mx-auto">
          {/* Animated background elements */}
          <div className="absolute -top-32 -right-32 w-64 h-64 bg-cyan-500/20 rounded-full blur-2xl" />
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
              <FaUser className="inline-block mr-3" />
              Add New Patient
            </motion.h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {formFields.map((field, index) => (
                <motion.div
                  key={field.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative"
                >
                  <div className="flex items-center gap-3 mb-2 text-cyan-400">
                    {field.icon}
                    <label className="text-sm font-medium text-gray-300">{field.label}</label>
                  </div>
                  
                  {field.type === 'select' ? (
                    <div className="relative">
                      <select
                        name={field.name}
                        value={patientData[field.name]}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/5 rounded-lg border border-white/10 focus:border-cyan-400/50 appearance-none outline-none transition-all"
                        required
                      >
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  ) : field.type === 'textarea' ? (
                    <textarea
                      name={field.name}
                      value={patientData[field.name]}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 rounded-lg border border-white/10 focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/30 outline-none transition-all h-32"
                      required
                    />
                  ) : (
                    <input
                      type={field.type}
                      name={field.name}
                      value={patientData[field.name]}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 rounded-lg border border-white/10 focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/30 outline-none transition-all"
                      required
                    />
                  )}
                </motion.div>
              ))}

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold text-lg shadow-lg hover:shadow-cyan-500/20 transition-all"
              >
                Add Patient
              </motion.button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default AddPatient;