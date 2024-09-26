
import React from 'react';
import './Banner.css'; 
import Logo from '../../../public/ecom.jpg';
const Banner = () => {
  return (
    <div>      
      
      <h1 className="top-heading"><span className="services">SERVICES</span> <br />E-Commerce Applications</h1>
      <h3 className = "bottom">Welcome to Our E-commerce Solutions !<br></br>
      </h3>
      <div className="banner-container">
        <div className="banner-content">
          <h1 className="banner-title">Transform Your Ideas into Reality</h1>          
          <p className="banner-text">
          At NPNG Tech, We create custom e-commerce applications that help your business succeed online. Our solutions are designed to be user-friendly and effective, with features like secure payment options and intuitive shopping experiences. We use the latest technology to build online stores that look great and work seamlessly, ensuring your customers have a positive shopping experience.
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
