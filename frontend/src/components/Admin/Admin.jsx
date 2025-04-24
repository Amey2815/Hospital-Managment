import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { motion } from 'framer-motion';
import { FaUserMd, FaUsers, FaCalendarCheck, FaChartLine, FaPlus, FaCog } from 'react-icons/fa';

const AdminPage = () => {
  const stats = [
    { icon: <FaUserMd />, title: "Total Doctors", value: "245", color: "bg-purple-500" },
    { icon: <FaUsers />, title: "Active Patients", value: "1,892", color: "bg-cyan-500" },
    { icon: <FaCalendarCheck />, title: "Appointments", value: "326", color: "bg-pink-500" },
    { icon: <FaChartLine />, title: "Monthly Growth", value: "+24%", color: "bg-orange-500" },
  ];

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Sidebar />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex-1 p-8 ml-64 relative overflow-hidden"
      >
        {/* Animated background elements */}
        <div className="absolute -top-32 -right-32 w-64 h-64 bg-cyan-500/20 rounded-full blur-2xl" />
        <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-purple-500/20 rounded-full blur-2xl" />

        <div className="relative z-10">
          <div className="flex items-center justify-between mb-8">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
            >
              Admin Dashboard
            </motion.h1>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-400/30"
            >
              <FaCog className="text-2xl text-cyan-400" />
            </motion.button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:border-cyan-400/30 transition-all group"
              >
                <div className="flex items-center justify-between">
                  <div className={`p-4 rounded-lg ${stat.color} shadow-lg`}>
                    {stat.icon}
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-400">{stat.title}</p>
                    <p className="text-3xl font-bold text-white">{stat.value}</p>
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
            className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 p-8 shadow-2xl"
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-semibold text-white">Welcome Admin</h2>
                <p className="text-gray-400">Manage your hospital operations efficiently</p>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 rounded-xl flex items-center gap-2"
              >
                <FaPlus />
                <span>New Doctor</span>
              </motion.button>
            </div>

            {/* Quick Actions Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['Manage Users', 'Appointments', 'Reports', 'Settings'].map((action, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="p-4 bg-white/5 rounded-xl border border-white/10 hover:border-cyan-400/30 cursor-pointer transition-all"
                >
                  <div className="text-cyan-400 text-xl mb-2">
                    {index === 0 && <FaUsers />}
                    {index === 1 && <FaCalendarCheck />}
                    {index === 2 && <FaChartLine />}
                    {index === 3 && <FaCog />}
                  </div>
                  <h3 className="font-semibold text-white">{action}</h3>
                  <p className="text-sm text-gray-400">View and manage {action.toLowerCase()}</p>
                </motion.div>
              ))}
            </div>

            {/* Recent Activity Section */}
            <div className="mt-8 pt-8 border-t border-white/10">
              <h3 className="text-lg font-semibold text-white mb-4">Recent Activity</h3>
              <div className="space-y-4">
                {['New patient registered', 'Appointment completed', 'Report generated', 'System updated'].map((activity, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="flex items-center justify-between p-3 bg-white/5 rounded-lg"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                      <span className="text-gray-300">{activity}</span>
                    </div>
                    <span className="text-sm text-gray-500">2h ago</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default AdminPage;