import { useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Login from './components/Login/Login';
import AdminPage from './components/Admin/Admin';
import './App.css';
import AddDoctor from './components/Doctor/AddDoctor';
import AddPatient from './components/Patient/AddPatient';
import Register from './components/Register/Register';
import UserRegister from './components/Register/UserRegister';
import ViewSchedule from './components/Appointment/ViewSchedule';
import ScheduleAppointment from './components/Appointment/ScheduleAppointment';

function App() {
  const location = useLocation();
  
  // Routes where Navbar should be hidden
  const hideNavbarRoutes = ['/'];

  return (
    <>
      {hideNavbarRoutes.includes(location.pathname) && <Navbar />}
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/admin' element={<AdminPage />} />
        <Route path='/register' element={<Register/>}/>
        <Route path='/admin/doctor' element={<AddDoctor/>}/>
        <Route path='/admin/patient' element={<AddPatient />} />
        <Route path='/admin/register' element={<UserRegister />} />
        <Route path="/schedule" element={<ScheduleAppointment/>} />
        <Route path="/viewschedule" element={<ViewSchedule/>} />
      </Routes>
    </>
  );
}

export default App;