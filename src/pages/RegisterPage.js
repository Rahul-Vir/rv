import React from 'react';
import { Header } from '../components/Header';
import { Navbar } from '../components/Navbar';
import { Register } from '../components/Register';
import { Footer } from '../components/Footer';




export const RegisterPage = () => {
  return (
    <div>
 <Header />
    <Navbar />
    <Register />
 <Footer />
    </div>
  )
}

export default RegisterPage;