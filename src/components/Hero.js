import React from 'react';
import '../assets/css/Hero.css';
import Banner from '../assets/images/Banner.jpeg';
import {Carousel} from 'react-responsive-carousel';
import Banner2 from '../assets/images/Banner2.jpeg';
import banner3 from '../assets/images/banner3.jpeg';
import banner4 from '../assets/images/banner4.jpeg';
import banner5 from '../assets/images/banner5.jpeg';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export const Hero = () => {
  return (
    <div class="hero">
    <Carousel className = 'main'>
    <div>
        <img src={Banner} />
     
    </div>
    <div>
        <img src={Banner2} />
      
    </div>
    <div>
        <img src={banner3} />
      
    </div>
    <div>
        <img src={banner4} />
      
    </div>
    <div>
        <img src={banner5} />
      
    </div>
</Carousel>
    </div>
  )
}

export default Hero;