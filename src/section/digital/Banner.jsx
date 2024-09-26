
import React from 'react';
import './Banner.css'; 
import Logo from '../../../public/digi.jpg';
const Banner = () => {
  return (
    <div>      
      
      <h1 className="top-heading"><span className="services">SERVICES</span> <br />Digital Marketing</h1>
      <h3 className = "bottom">Welcome to Our Digital Marketing Services!<br></br>
      </h3>
      <div className="banner-container">
        <div className="banner-content">
          <h1 className="banner-title">Maximize Your Online Presence with Our Digital Marketing Services</h1>          
          <p className="banner-text">
          At NPNG Tech, Our digital marketing solutions are designed to help businesses grow by reaching the right audience online. From search engine optimization (SEO) to social media marketing, we offer a range of services tailored to your business goals. Our data-driven approach ensures that you connect with potential customers, increase brand visibility, and achieve measurable results in the digital space.
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
