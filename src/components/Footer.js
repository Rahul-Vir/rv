import React from 'react';
import '../assets/css/Footer.css';
import { FaFacebook } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaSnapchat } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className='footer bg-light'>
      <div className='row'>
            <div className='col-3'>
            <h3>Support</h3>
                        <ul>
                            <li><a href="#">Help Centre</a></li>
                            <li><a href="#">Cancellation Policy</a></li>
                            <li><a href="#">Our Covid-19 response</a></li>
                        </ul>
            </div>

            <div className='col-3'>
            <h3>Services</h3>
                        <ul>
                            <li><a href="#">Take Pictures</a></li>
                            <li><a href="#">Become a host </a></li>
                            <li><a href="#">Development</a></li>
                        </ul>
            </div>

            <div className='col-3'>
            <h3>About</h3>
                        <ul>
                            <li><a href="#">Newsletter</a></li>
                            <li><a href="#">Investors</a></li>
                            <li><a href="#">Careers</a></li>
                        </ul>
            </div>
            <div className='col-3 icons '>
            <a href="#"><FaFacebook size='3rem'/></a>
            <a href="#"><FaTwitterSquare size='3rem' /></a>
            <a href="#"><FaSnapchat size='3rem' /></a>
            <a href="#"><FaInstagram size='3rem' /></a>
           
      </div>
      </div>
      
    </div>
  )
}

export default Footer;