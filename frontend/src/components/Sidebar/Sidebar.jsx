import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaUserMd, 
  FaUserInjured, 
  FaCalendarAlt, 
  FaUserPlus,
  FaChevronDown,
  FaPlus,
  FaListUl
} from 'react-icons/fa';

const Sidebar = () => {
  const [openMenu, setOpenMenu] = useState(null);

  const toggleDropdown = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  const menuItems = [
    {
      title: 'Doctor',
      icon: <FaUserMd />,
      subItems: [
        { title: 'Add Doctor', icon: <FaPlus />, link: '/admin/doctor' },
        { title: 'Manage Doctors', icon: <FaListUl />, link: '/viewdoctor' }
      ]
    },
    {
      title: 'Patient',
      icon: <FaUserInjured />,
      subItems: [
        { title: 'Add Patient', icon: <FaPlus />, link: '/admin/patient' },
        { title: 'Manage Patients', icon: <FaListUl />, link: '/admin/viewpatient' }
      ]
    },
    {
      title: 'Appointment',
      icon: <FaCalendarAlt />,
      subItems: [
        { title: 'View Appointments', icon: <FaListUl />, link: '/viewschedule' },
        { title: 'Schedule', icon: <FaPlus />, link: '/schedule' }
      ]
    },
    {
      title: 'Register Members',
      icon: <FaUserPlus />,
      subItems: [
        { title: 'Add Member', icon: <FaPlus />, link: '/admin/register' }
      ]
    }
  ];

  return (
    <motion.div
      initial={{ x: -300 }}
      animate={{ x: 0 }}
      transition={{ type: 'spring', stiffness: 70 }}
      className="w-64 bg-slate-900/80 backdrop-blur-lg text-gray-100 shadow-2xl p-6 space-y-4 fixed left-0 top-0 bottom-0 border-r border-white/10"
    >
      <motion.h2
        className="text-2xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <a href="/">MediAdmin</a>
      </motion.h2>

      {menuItems.map((item, index) => (
        <div key={index} className="relative">
          <motion.button
            whileHover={{ x: 5 }}
            onClick={() => toggleDropdown(item.title)}
            className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-white/5 transition-all"
          >
            <div className="flex items-center gap-3">
              <span className="text-cyan-400">{item.icon}</span>
              <span className="font-medium">{item.title}</span>
            </div>
            <motion.span
              animate={{ rotate: openMenu === item.title ? 180 : 0 }}
              className="text-sm text-gray-400"
            >
              <FaChevronDown />
            </motion.span>
          </motion.button>

          <AnimatePresence>
            {openMenu === item.title && (
              <motion.ul
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="ml-8 mt-2 space-y-2"
              >
                {item.subItems.map((subItem, subIndex) => (
                  <motion.li
                    key={subIndex}
                    whileHover={{ x: 5 }}
                    className="overflow-hidden"
                  >
                    <a
                      href={subItem.link}
                      className="w-full flex items-center gap-3 p-3 text-sm rounded-lg hover:bg-cyan-500/10 transition-all group"
                    >
                      <span className="text-cyan-400 transition-all group-hover:text-cyan-300">
                        {subItem.icon}
                      </span>
                      {subItem.title}
                    </a>
                  </motion.li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </div>
      ))}

      {/* Decorative Elements */}
      <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-cyan-500/20 rounded-full blur-2xl" />
    </motion.div>
  );
};

export default Sidebar;