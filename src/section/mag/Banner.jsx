
import React from 'react';
import './Banner.css'; 
import Logo from "../../../public/mam.jpg";
const Banner = () => {
  return (
    <div>      
      
      <h1 className="top-heading"><span className="services">SERVICES</span> <br />Management Systems</h1>
      <h3 className = "bottom">Welcome to Our Management Systems Solutions !<br></br>
      </h3>
      <div className="banner-container">
        <div className="banner-content">
          <h1 className="banner-title">Transform Your Business with Our Management Systems</h1>          
          <p className="banner-text">
          At NPNG Tech, Our management systems are designed to streamline and optimize your business operations. From inventory management to employee tracking and customer relationship management (CRM), our tailored solutions help businesses improve efficiency, reduce manual work, and make informed decisions based on real-time data.

          Whether you need a simple tool or a complex integrated system, we offer the right solution for your needs.
          </p>
        </div>
        <div className="banner-graphic">
          <img
            src={Logo}
            alt="Web Development Graphic"
            className="right-img"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
