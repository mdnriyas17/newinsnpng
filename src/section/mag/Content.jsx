import React from 'react';
import './Content.css';  

const Content = () => {
  const services = [
    { 
      heading: "Custom Management Solutions" 
    },
    { 
      heading: "Inventory Management" 
    },
    { 
      heading: "Employee Management" 
    },
    { 
      heading: "Customer Relationship Management (CRM)" 
    },
    { 
      heading: "Reporting and Analytics" 
    },
    
  ];

  return (
    <div className="content-section">
      <div className="left-box">
        <h2 className="left-heading">Why Choose Us?</h2>
        <p className="content-para">
        Choose us to transform your business with our customizable management systems designed to streamline operations and boost efficiency. Our expert team provides seamless integration, comprehensive training, and ongoing support to ensure long-term success. Let us help you make informed decisions with real-time data and improve overall business performance.
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
