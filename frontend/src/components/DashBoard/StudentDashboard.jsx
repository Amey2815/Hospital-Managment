import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/StudSidebar'; 
import { motion } from 'framer-motion';
import { FaUser, FaCalendarCheck, FaHeartbeat } from 'react-icons/fa';
import axios from 'axios';

const PatientPage = () => {
  const url = "http://localhost:3000";
  const [appointments, setAppointments] = useState([]);
  const [profile, setProfile] = useState({});
  
  

  const stats = [
    { icon: <FaUser />, title: "My Profile", value: profile.name || "Patient", color: "bg-blue-400" },
  ];

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-white via-blue-50 to-white">
      <Sidebar />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex-1 p-8 ml-64 relative overflow-hidden"
      >
        {/* Background blobs */}
        <div className="absolute -top-32 -right-32 w-64 h-64 bg-blue-300/20 rounded-full blur-2xl" />
        <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-blue-400/20 rounded-full blur-2xl" />

        <div className="relative z-10">
          <div className="flex items-center justify-between mb-8">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent"
            >
              Patient Dashboard
            </motion.h1>
          </div>

         

          {/* Main Card */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-semibold text-blue-600">Welcome {profile.name || 'Patient'}</h2>
                <p className="text-gray-500">Here’s your health dashboard</p>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-400 to-cyan-400 px-6 py-3 rounded-xl flex items-center gap-2 text-white"
              >
                <a href="/patient/appointments">View Appointments</a>
              </motion.button>
            </div>

            {/* Quick Links */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { label: "Book Appointment", link: "/admin/patient", icon: <FaCalendarCheck /> }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="p-4 bg-blue-50 rounded-xl border border-blue-100 hover:border-blue-300 cursor-pointer transition-all"
                >
                  <div className="text-blue-500 text-xl mb-2">
                    <a href={item.link}>{item.icon}</a>
                  </div>
                  <h3 className="font-semibold text-blue-700">{item.label}</h3>
                  <p className="text-sm text-gray-500">Manage your {item.label.toLowerCase()}</p>
                </motion.div>
              ))}
            </div>

          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default PatientPage;
