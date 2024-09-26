
import React from 'react';
import './Banner.css'; 
import Logo from "../../../public/ui.jpg";
const Banner = () => {
  return (
    <div>      
      
      <h1 className="top-heading"><span className="services">SERVICES</span> <br />UI/UX DESIGNS</h1>
      <h3 className = "bottom">Welcome to Our UI/UX Design Services !<br></br>
      </h3>
      <div className="banner-container">
        <div className="banner-content">
          <h1 className="banner-title">Discover Our UI/UX Solutions</h1>          
          <p className="banner-text">
          At NPNG Tech, We focus on creating intuitive, user-friendly, and visually appealing interfaces that improve user experience and meet your business goals. Our team combines creativity with research-driven design principles to deliver solutions that engage and retain users.
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
