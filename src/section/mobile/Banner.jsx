import React from 'react';
import './Banner.css'; 
import Logo from "../../../public/mobileappdev.png";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-content">
        <h1 className="banner-title"> MOBILE APP DEVELOPMENT </h1>
        <div className="banner-details">
          <span>Welcome to our Mobile App Development services!<br /> Transform Your Ideas Into Reality</span>
        </div>
        <p className="banner-description">
        We turn your innovative ideas into fully functional mobile applications that captivate users and meet your business goals.

        </p>
        <a href="#contact" className="banner-button">LET'S GET IN TOUCH</a>
      </div>
      <div className="banner-image">
        <img src={Logo} alt="Technology background" />
      </div>
    </div>
  );
};

export default Banner;
