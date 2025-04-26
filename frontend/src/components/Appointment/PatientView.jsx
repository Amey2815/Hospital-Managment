import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';
import { FaCalendarAlt, FaSearch } from 'react-icons/fa';
import Sidebar from '../Sidebar/PatientSidebar';

const StudView = () => {
    const url = "http://localhost:3000";
    const [appointments, setAppointments] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [viewMode, setViewMode] = useState('list');

    useEffect(() => {
        const fetchAppointments = async () => {
            try {
                const response = await axios.get(`${url}/api/appointment/get`);
                setAppointments(response.data.data);
            } catch (error) {
                alert('Failed to fetch appointments');
            }
        };
        fetchAppointments();
    }, []);

    const filteredAppointments = Array.isArray(appointments) && appointments.filter(appointment =>
        appointment.patientName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        appointment.doctorName?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <Sidebar />
            <div className="flex justify-center items-start  min-h-screen bg-white p-10 pl-75">
                <div className="w-full max-w-7xl relative">
                    {/* Animated Background Effects */}
                    <div className="absolute -top-32 -right-32 w-64 h-64 bg-blue-300/30 rounded-full blur-2xl" />
                    <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-cyan-300/30 rounded-full blur-2xl" />

                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex flex-col md:flex-row justify-between items-center mb-8"
                    >
                        <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent mb-4 md:mb-0">
                            <FaCalendarAlt className="inline-block mr-2" />
                            Appointments
                        </h1>

                        <div className="flex items-center gap-4">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Search appointments..."
                                    className="pl-10 pr-4 py-2 bg-white border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                                <FaSearch className="absolute left-3 top-3 text-gray-400" />
                            </div>
                            
                        </div>
                    </motion.div>

                    {/* View Toggle */}
                    

                    {/* Appointments List */}
                    {viewMode === 'list' && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="overflow-hidden rounded-2xl shadow-xl bg-white border border-gray-200"
                        >
                            <table className="w-full table-auto">
                                <thead className="bg-blue-100">
                                    <tr>
                                        <th className="px-6 py-4 text-left text-blue-700">Patient</th>
                                        <th className="px-6 py-4 text-left text-blue-700">Doctor</th>
                                        <th className="px-6 py-4 text-left text-blue-700">Date & Time</th>
                                        <th className="px-6 py-4 text-left text-blue-700">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Array.isArray(filteredAppointments) && filteredAppointments.map(appointment => (
                                        <tr key={appointment._id} className="hover:bg-blue-50">
                                            <td className="px-6 py-4">{appointment.patientName}</td>
                                            <td className="px-6 py-4">{appointment.doctorName}</td>
                                            <td className="px-6 py-4">
                                                {new Date(appointment.date).toLocaleDateString()} {appointment.time}
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                                                    appointment.status === 'completed' ? 'bg-green-100 text-green-600' :
                                                    appointment.status === 'cancelled' ? 'bg-red-100 text-red-600' :
                                                    'bg-blue-100 text-blue-600'
                                                }`}>
                                                    {appointment.status}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </motion.div>
                    )}

                    {/* Add/Edit Appointment Modal */}
                    
                </div>
            </div>
        </>
    );
};

export default StudView;
