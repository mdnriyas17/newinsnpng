
import React from 'react';
import './Banner.css'; 
import Logo from "../../../public/webappd.jpg";

const Banner = () => {
  return (
    <div>      
      
      <h1 className="top-heading"><span className="services">SERVICES</span> <br />Web Development</h1>
      <h3 className = "bottom">Welcome to Our Web Development Services!<br></br>
      </h3>
      <div className="banner-container">
        <div className="banner-content">
          <h1 className="banner-title">Transform Your Ideas Into Reality</h1>          
          <p className="banner-text">
          At NPNG Tech, we are dedicated to helping you build a powerful online presence with our top-notch web development services. Whether you’re launching a new website or revamping an existing one, our team of experts is here to deliver customized solutions that meet your unique business needs. Explore how we can assist you in creating a website that stands out and drives success.


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
