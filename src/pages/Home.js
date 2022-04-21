import React from 'react'

import { Footer } from '../components/Footer';
import { Header } from '../components/Header.js';
import { Hero } from '../components/Hero';
import { Property } from '../components/Property';
import { Navbar } from '../components/Navbar';
import '../assets/css/Home.css';
import { useState } from 'react';
import BestSellerProp from '../components/BestSellerProp';


 const Home = () => {
   const[data,setData] = useState()
  return (
    <div>
    <header>
    <Header />
    <Navbar setData={setData} />
    <div className='home'><Hero />
    <div className='heading h3'> <b>Check out our exclusive property types </b> </div>
    <div style={{"text-align":"center", "display":"flex", "justify-content" : "space-around","height" :"auto"}}>
    <Property /></div>
    <div className='heading h3'> <b>Check out our best sellers </b> </div>
    <div style={{"text-align":"center", "display":"flex", "justify-content" : "space-around","height" :"auto"}}><BestSellerProp /></div>
    </div>
 
    <Footer /></header>
    </div>
  )
}

export default Home;