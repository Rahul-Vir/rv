import React from 'react';
import UserDashboard from '../components/UserDashboard.js';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useState } from 'react';

export const Dashboard = () => {
    const[data,setData] = useState()
  return (
    <div style={{"background-color" : "rgba(253, 237, 254, 0.448)"}}>
    <Header />
   <Navbar setData={setData} />
    <UserDashboard />
  <Footer /> 
    </div>
  )
}

export default Dashboard;