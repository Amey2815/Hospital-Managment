// ✅ EditPatient.jsx with blue & white background
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { motion } from 'framer-motion';
import Sidebar from '../Sidebar/Sidebar';
import { FaUser, FaBirthdayCake, FaVenusMars, FaPhone, FaEnvelope, FaHome, FaNotesMedical } from 'react-icons/fa';

const EditPatient = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const url = "http://localhost:3000";

  const [patientData, setPatientData] = useState({
    name: '', age: '', gender: '', contact: '', email: '', address: '', medicalHistory: ''
  });

  useEffect(() => {
    const fetchPatient = async () => {
      try {
        const res = await axios.get(`${url}/api/patient/get/${id}`);
        if (res.data.success) {
          setPatientData(res.data.data);
        } else {
          alert('Failed to load patient data.');
        }
      } catch (error) {
        alert('Error fetching patient data.');
      }
    };

    fetchPatient();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPatientData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(`${url}/api/patient/update/${id}`, patientData);
      if (res.data.success) {
        alert('Patient updated successfully!');
        navigate('/viewpatient');
      } else {
        alert('Update failed.');
      }
    } catch (error) {
      alert('Error updating patient data.');
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
    <div className="flex">
      <Sidebar />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="overflow-hidden flex justify-center items-center flex-1 bg-gradient-to-br from-white via-blue-100 to-white min-h-screen px-4 sm:px-6 md:px-10 py-10"
      >
        <div className="relative w-full max-w-lg">
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
              Edit Patient Info
            </motion.h2>

            <form onSubmit={handleSubmit} className="space-y-6 text-gray-800">
              {formFields.map((field, index) => (
                <motion.div
                  key={field.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <div className="flex items-center gap-3 mb-2 text-blue-500">
                    {field.icon}
                    <label className="text-sm font-medium">{field.label}</label>
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
                className="w-full py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg font-semibold text-lg shadow-md hover:shadow-green-300 transition-all"
              >
                Update Patient
              </motion.button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default EditPatient;
