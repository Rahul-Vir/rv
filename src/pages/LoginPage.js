import React from 'react';
import { Header } from '../components/Header';
import { Navbar } from '../components/Navbar';
import { Login } from '../components/Login';




export const LoginPage = () => {
  return (
    <div>
    <Header />
    <Navbar />
    <Login />

    </div>
  )
}

export default LoginPage;