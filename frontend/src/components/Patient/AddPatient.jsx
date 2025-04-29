// ✅ AddPatient.jsx with blue & white background
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Sidebar from '../Sidebar/Sidebar';
import axios from 'axios';
import { FaUser, FaBirthdayCake, FaVenusMars, FaPhone, FaEnvelope, FaHome, FaNotesMedical } from 'react-icons/fa';

const AddPatient = () => {
  const url = "http://localhost:3000";
  const [patientData, setPatientData] = useState({
    name: '', age: '', gender: '', contact: '', email: '', address: '', medicalHistory: ''
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
        setPatientData({ name: '', age: '', gender: '', contact: '', email: '', address: '', medicalHistory: '' });
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
        className="overflow-hidden flex justify-center items-center pl-60 min-h-screen bg-gradient-to-br from-white via-blue-100 to-white p-10"
      >
        <div className="relative w-full max-w-2xl mx-auto">
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-2xl border border-blue-100 shadow-xl p-8"
          >
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-3xl font-bold text-center mb-8 text-blue-600"
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
                  <div className="flex items-center gap-3 mb-2 text-blue-500">
                    {field.icon}
                    <label className="text-sm font-medium text-gray-700">{field.label}</label>
                  </div>

                  {field.type === 'select' ? (
                    <select
                      name={field.name}
                      value={patientData[field.name]}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white rounded-lg border border-blue-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-300 outline-none transition-all"
                      required
                    >
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  ) : field.type === 'textarea' ? (
                    <textarea
                      name={field.name}
                      value={patientData[field.name]}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white rounded-lg border border-blue-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-300 outline-none transition-all h-32"
                      required
                    />
                  ) : (
                    <input
                      type={field.type}
                      name={field.name}
                      value={patientData[field.name]}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white rounded-lg border border-blue-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-300 outline-none transition-all"
                      required
                    />
                  )}
                </motion.div>
              ))}

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg font-semibold text-lg text-white shadow-md hover:shadow-blue-300 transition-all"
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
