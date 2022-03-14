import React from 'react';
import "../assets/css/Header.css";
import RestInnLogo from '../assets/images/RestInnLogo.jpeg';

export const Header = () => {
  return (
    <div className='my border'>
      
        <div className='border'>
        <img src = {RestInnLogo} alt = 'Logo' className="logo" />
        </div>
        <div className='t'>Our mission is to help you find a comfortable stay !!</div>
    </div>
  );
}

export default Header;
