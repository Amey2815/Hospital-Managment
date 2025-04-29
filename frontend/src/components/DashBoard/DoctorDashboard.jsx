import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { motion } from 'framer-motion';
import { FaUserMd, FaUsers, FaCalendarCheck, FaChartLine, FaPlus, FaCog } from 'react-icons/fa';
import axios from 'axios';
import DoctorSidebar from '../Sidebar/DoctorSidebar';

const DoctorPage = () => {
  const url = "http://localhost:3000"
  const [doctor, setdoctor] = useState([])
  const [patient, setpatient] = useState([])
  const [appoint, setappoint] = useState([])
  const [monthlygroth, setmonthlygroth] = useState([])
  useEffect(() => {
    const fetchdata = async ()=>{
      try{
        const doctor = await axios.get(`${url}/api/doctor/get`)
        const patient = await axios.get(`${url}/api/patient/get`)
        const appointment = await axios.get(`${url}/api/appointment/get`)
        setdoctor(doctor.data.data)
        setpatient(patient.data.data)
        setappoint(appointment.data.data)
      }
      catch(error){
        alert("error")
      }
    }
   fetchdata();
  },[])

  


  const stats = [
    { icon: <FaUserMd />, title: "Total Doctors", value:`${doctor.length}` , color: "bg-purple-500" },
    { icon: <FaUsers />, title: "Active Patients", value: `${patient.length}`, color: "bg-cyan-500" },
    { icon: <FaCalendarCheck />, title: "Appointments", value: `${appoint.length}`, color: "bg-pink-500" },
    // { icon: <FaChartLine />, title: "Monthly Growth", value: ``, color: "bg-orange-500" },
  ];

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-blue-100 to-white">
  <DoctorSidebar />

  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="flex-1 p-8 ml-64 relative overflow-hidden"
  >
    {/* Light decorative background elements */}
    <div className="absolute -top-32 -right-32 w-64 h-64 bg-blue-300/30 rounded-full blur-2xl" />
    <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-white/40 rounded-full blur-2xl" />

    <div className="relative z-10">
      <div className="flex items-center justify-between mb-8">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent"
        >
          Doctor Dashboard
        </motion.h1>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all group"
          >
            <div className="flex items-center justify-between">
              <div className={`p-4 rounded-lg ${stat.color} text-white shadow`}>
                {stat.icon}
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-600">{stat.title}</p>
                <p className="text-3xl font-bold text-gray-800">{stat.value}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Main Content Card */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="bg-white rounded-2xl border border-gray-200 p-8 shadow-xl"
      >
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">Welcome Admin</h2>
            <p className="text-gray-500">Manage your hospital operations efficiently</p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-3 rounded-xl flex items-center gap-2"
          >
            <FaPlus />
            <a href="/admin/doctor">New Doctor</a>
          </motion.button>
        </div>

        {/* Quick Actions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {['Manage Users', 'Appointments', 'pateint'].map((action, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="p-4 bg-blue-50 rounded-xl border border-blue-200 hover:border-blue-400 cursor-pointer transition-all"
            >
              <div className="text-blue-600 text-xl mb-2">
                {index === 0 && <a href="/admin/register"><FaUsers /></a>}
                {index === 1 && <a href="/viewschedule"><FaCalendarCheck /></a>}
                {index === 2 && <a href="/admin/patient"><FaUserMd /></a>}
              </div>
              <h3 className="font-semibold text-gray-800">{action}</h3>
              <p className="text-sm text-gray-500">View and manage {action.toLowerCase()}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </motion.div>
</div>

  );
};

export default DoctorPage;