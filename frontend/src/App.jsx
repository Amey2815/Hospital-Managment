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
import ViewDoctor from './components/Doctor/ViewDoctor';
import EditDoctor from './components/Doctor/EditDoctor';
import ViewPatient from './components/Patient/ViewPatient';
import EditPatient from './components/Patient/EditPatient';
import PatientDashbord from './components/DashBoard/PatientDashboard'
import PatientAdd from './components/Patient/PatientAdd';
import PatientView from './components/Appointment/PatientView';
import DoctorDashboard from './components/DashBoard/DoctorDashboard'
import DoctorAdd from './components/Doctor/DocAdd'
import DoctorView from './components/Doctor/DocView'
import DoctorEdit from './components/Doctor/DocEdit'
import DocShedule from './components/Appointment/DocSchedule';
import DocView from './components/Appointment/DocView';
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

         {/* admin */}
        <Route path='/register' element={<Register />} />
        <Route path='/admin/doctor' element={<AddDoctor />} />
        <Route path='/admin/patient' element={<AddPatient />} />
        <Route path='/viewdoctor' element={<ViewDoctor />} />
        <Route path='/editdoctor/:id' element={<EditDoctor />} />
        <Route path='/admin/register' element={<UserRegister />} />
        <Route path="/schedule" element={<ScheduleAppointment />} />
        <Route path="/viewschedule" element={<ViewSchedule />} />

         {/* doctor  */}
        <Route path='/doctor' element={<DoctorDashboard />} />
        <Route path='/doctoradd' element={<DoctorAdd />} />
        <Route path='/doctorview' element={<DoctorView />} />
        <Route path='/doctoredit/:id' element={<DoctorEdit />} />
        <Route path='/docshedule' element={<DocShedule/>}/>
        <Route path='/docview' element={<DocView/>}/>


         {/* patient  */}
        <Route path='/patient' element={<PatientDashbord />} />
        <Route path='/addpatient' element={<PatientAdd />} />
        <Route path='/editpatient/:id' element={<EditPatient />} />
        <Route path='/viewpatient' element={<ViewPatient />} />


        <Route path='/PatientView' element={<PatientView />} />
      </Routes>
    </>
  );
}

export default App;