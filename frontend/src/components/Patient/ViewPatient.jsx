import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import Sidebar from '../Sidebar/Sidebar';
import { FaEdit, FaTrash, FaCopy } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const ViewPatient = () => {
  const [patients, setPatients] = useState([]);
  const navigate = useNavigate();
  const url = "http://localhost:3000";

  const fetchPatients = async () => {
    try {
      const res = await axios.get(`${url}/api/patient/get`);
      if (res.data.success) {
        setPatients(res.data.data);
      }
    } catch (error) {
      console.error("Failed to fetch patients", error);
    }
  };

  useEffect(() => {
    fetchPatients();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this patient?')) {
      try {
        const res = await axios.delete(`${url}/api/patient/delete/${id}`);
        if (res.data.success) {
          alert('Patient deleted successfully!');
          fetchPatients(); // Refresh the list
        }
      } catch (error) {
        alert('Failed to delete patient.');
      }
    }
  };

  const handleEdit = (id) => {
    navigate(`/editpatient/${id}`);
  };

  const handleCopy = (patient) => {
    const text = `
      Name: ${patient.name}
      Age: ${patient.age}
      Gender: ${patient.gender}
      Contact: ${patient.contact}
      Email: ${patient.email}
      Address: ${patient.address}
      Medical History: ${patient.medicalHistory}
    `;
    navigator.clipboard.writeText(text);
    alert('Patient details copied!');
  };

  return (
    <div>
      <Sidebar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="overflow-x-auto min-h-screen pl-70 p-10 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900"
      >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-white mb-8 text-center"
        >
          Patient List
        </motion.h2>

        <div className="bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 p-6 shadow-2xl">
          <table className="min-w-full text-sm text-white">
            <thead className="border-b border-white/10">
              <tr>
                <th className="py-3 px-4">Name</th>
                <th className="py-3 px-4">Age</th>
                <th className="py-3 px-4">Gender</th>
                <th className="py-3 px-4">Contact</th>
                <th className="py-3 px-4">Email</th>
                <th className="py-3 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {patients.map((patient, index) => (
                <motion.tr
                  key={patient._id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="hover:bg-white/10 transition-all text-center"
                >
                  <td className="py-3 px-4">{patient.name}</td>
                  <td className="py-3 px-4">{patient.age}</td>
                  <td className="py-3 px-4 capitalize">{patient.gender}</td>
                  <td className="py-3 px-4">{patient.contact}</td>
                  <td className="py-3 px-4">{patient.email}</td>
                  <td className="py-3 px-4 flex justify-center items-center gap-4">
                    <button
                      onClick={() => handleEdit(patient._id)}
                      className="text-blue-400 hover:text-blue-600 transition-all"
                    >
                      <FaEdit />
                    </button>
                    <button
                      onClick={() => handleDelete(patient._id)}
                      className="text-red-400 hover:text-red-600 transition-all"
                    >
                      <FaTrash />
                    </button>
                    <button
                      onClick={() => handleCopy(patient)}
                      className="text-green-400 hover:text-green-600 transition-all"
                    >
                      <FaCopy />
                    </button>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>

          {patients.length === 0 && (
            <p className="text-center py-10 text-gray-400">No patients found.</p>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default ViewPatient;
