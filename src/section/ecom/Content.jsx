import React from 'react';
import './Content.css';  

const Content = () => {
  const services = [
    { 
      heading: "Custom E-commerce Solutions", 
      description: "Tailored platforms to fit your business needs." },
    { 
      heading: "Shopping Cart Integration", 
      description: "User-friendly and secure carts for smooth transactions." },
    { 
      heading: "Payment Gateway Setup", 
      description: "Integration with various payment methods for secure transactions." },
    { 
      heading: "Product Catalog Management", 
      description: " Easy management of product listings and organization." },
    { 
      heading: "Mobile Optimization", 
      description: "Designs optimized for seamless mobile shopping experiences." },
    { 
      heading: "Order Management System", 
      description: "Tools to track and manage orders and inventory." },
    { 
      heading: "User Account Management", 
      description: "Features for customers to create accounts and save preferences." 
  },
  { 
      heading: "Security Features", 
      description: "SSL certificates and encryption to protect data and transactions." 
  },
  { 
      heading: "Analytics and Reporting", 
      description: "Insights into sales and customer behavior to guide decisions." 
  },
  { 
      heading: "Ongoing Support and Maintenance", 
      description: "Regular updates and support to keep your application running smoothly." 
  }
  ];

  return (
    <div className="content-section">
      <div className="left-box">
        <h2 className="left-heading">Why Choose Us?</h2>
        <p className="content-para">
        We create custom e-commerce solutions that fit your needs perfectly. Our team uses the latest technologies to build secure and high-performing online stores.
        We work closely with you throughout the process to ensure everything meets your expectations.
        With our focus on quality and customer satisfaction, we help you stand out and succeed online.
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
