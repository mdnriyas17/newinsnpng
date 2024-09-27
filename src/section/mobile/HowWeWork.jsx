import React from 'react';
import './HowWeWork.css';

const HowWeWork = () => {
  return (
    <div className="how-we-work-container">
      <h2 className="sections-title">How We Work</h2>
      
      <div className="steps-container">
        <div className="step-box">
          <h3>01</h3>
          <p>Discovery & Planning</p>
          <span>We start by understanding your vision, market, and target users to craft a detailed plan for your app development.</span>
        </div>
        <div className="step-box">
          <h3>02</h3>
          <p>Design & Prototype</p>
          <span>Our team creates wireframes and prototypes to visualize the app structure and user journey, incorporating your feedback at every stage.</span>
        </div>
        <div className="step-box">
          <h3>03</h3>
          <p>Development</p>
          <span>We begin coding, whether for a native, cross-platform, or hybrid app, ensuring all functionalities are in place as per your requirements.</span>
        </div>
        <div className="step-box">
          <h3>04</h3>
          <p>Testing & Quality Assurance</p>
          <span>Rigorous testing ensures a bug-free, high-performance app that meets industry standards.</span>
        </div>
        <div className="step-box">
          <h3>05</h3>
          <p>Launch & Support</p>
          <span>After the final checks, we help you deploy the app on your chosen platforms and provide ongoing support for updates and new features.</span>
        </div>
      </div>
    </div>
  );
};

export default HowWeWork;
