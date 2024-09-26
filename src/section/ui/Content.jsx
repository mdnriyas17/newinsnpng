import React from 'react';
import './Content.css';  

const Content = () => {
  const services = [
    { heading: "User Research", description: "We gather insights to understand your users and their needs." },
    { heading: "Wireframing", description: "We create structural blueprints for your website or app." },
    { heading: "Prototyping", description: "We build interactive mockups to visualize the final product." },
    { heading: "UI Design", description: "We craft visually appealing interfaces that are easy to use." },
    { heading: "UX Strategy", description: "We ensure a smooth and enjoyable user experience." },
    { heading: "Usability Testing", description: "We test the design to ensure it meets user expectations." }
  ];

  return (
    <div className="content-section">
      <div className="left-box">
        <h2 className="left-heading">Why Choose Us?</h2>
        <p className="content-para">
          We focus on creating intuitive, user-friendly, and visually appealing interfaces that improve user experience and meet your business goals. Our team combines creativity with research-driven design principles to deliver solutions that engage and retain users.
        </p>
      </div>    

      <div className="left-box">
        <h2 className="left-heading">What We Offer</h2>
        <div className="box-container">
          {services.map((service, index) => (
            <div className="offer-box" key={index}>
              <h3 className="box-heading">{service.heading}</h3>
              <p className="box-subheading">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Content;
