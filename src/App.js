import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Component/Header/Header';
import Footer from './Component/Footer/Footer';
import Home from './Container/Home/Home';
import Department from './Container/Department/Department';
import Doctors from './Container/Doctors/Doctors';
import About from './Container/About/About';
import Contact from './Container/Contact/Contact';
import Appoinment from './Container/Appointment/Appoinment';
import Medicine from './Container/Medicine';
import PrivateRoute from './Container/Root/PrivateRoute';
import Login from './Container/Login/Login';
import DocterDetalis from './Container/Doctors/DocterDetalis';
import Ragistration from './Container/Login/Ragistration';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/departments' element={<Department />} />
        <Route path='/doctors' element={<PrivateRoute><Doctors /></PrivateRoute>} />
        <Route path='/doctors/:id' element={<PrivateRoute><DocterDetalis /></PrivateRoute>} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/appointment' element={<Appoinment />} />
        <Route path='/medicine' element={<Medicine />} />
        <Route path='/login' element={<Login />} />
        <Route path='/ragistration' element={<Ragistration />} />

      </Routes>
      <Footer />
    </>
  );
}

export default App;
