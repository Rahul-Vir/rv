import React from 'react'
import BestSeller from '../components/BestSeller';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header.js';
import { Hero } from '../components/Hero';
import { PropType } from '../components/PropType';
import { Navbar } from '../components/Navbar';
import '../assets/css/Home.css';


 const Home = () => {
  return (
    <div>
    <header>
    <Header />
    <Navbar />
    <div className='home'><Hero />
    <div className='heading h3'> <b>Check out our exclusive property types </b> </div>
    <PropType />
    <div className='heading h3'> <b>Check out our best sellers </b> </div>
    <BestSeller />
    </div>
 
    <Footer /></header>
    </div>
  )
}

export default Home;