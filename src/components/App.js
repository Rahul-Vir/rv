import React from 'react';
import '../assets/css/App.css';
import Home from '../pages/Home';
import PropertyList from '../pages/PropertyList';
import PropertyDescription from '../pages/PropertyDescription';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import 'bootstrap/dist/css/bootstrap.css'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import {Link } from 'react-router-dom';
import Description from '../components/Description.js';
import AllPropertyPage from '../pages/AllPropertyPage';

 const App = () => {
  return (

   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="registration" element={<RegisterPage />} />
      <Route path="propertyList/:id" element={<PropertyList />} />
      <Route path="allproperty" element={<AllPropertyPage />} />
      <Route path="propertyDescription/:id" element={<PropertyDescription />} />
      
    </Routes>
  </BrowserRouter>


  )
}


export default App;
