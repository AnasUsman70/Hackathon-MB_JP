import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Signup from './Screens/Sigunp/Signup';
import Login from './Screens/Login/Login';
import Home from './Screens/Home/Home';
import AuthRoute from './Routing/AuthRoute';
import ProtectedRoute from './Routing/ProtectedRoute';
import RoomList from './Screens/Room/RoomList';
import Booking from './Screens/Booking/Booking';
import PMethod from './Screens/Payment/PMethod';
import Services from './Screens/Services/Services';
import ServicesReq from './Screens/Services/ServicesReq';
import Feedback from './Screens/Feedback/Feedback';
import Registration from './Screens/reg/Registration';
import Staff from './Screens/Staff/Staff';
import CustomerDetails from './Screens/Customer/CustomerDetails';
import PaymentDetails from './Screens/Payment/PaymentDetails';



const App = () => {
  return (
    <Routes>
      <Route element={<AuthRoute />}>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Route>

      <Route element={<ProtectedRoute />}>
        <Route path="/home" element={<Home />} />
        <Route path="/roomlist" element={<RoomList />} />
        <Route path="/booking/:id" element={<Booking />} />
        <Route path="/paymentmethod" element={<PMethod/>} />
        <Route path="/Feedback" element={<Feedback/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/servicesrequest" element={<ServicesReq/>} />
        <Route path="/registration" element={<Registration/>} />
        <Route path="/staff" element={<Staff/>} />
        <Route path="/CustomerDetails" element={<CustomerDetails/>} />
        <Route path="/paymentdetails" element={<PaymentDetails/>} />        
      </Route>

      <Route path="/" element={<Navigate to="/login" />} />
    </Routes>
  );
};

export default App;