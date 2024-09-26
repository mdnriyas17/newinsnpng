import React from 'react';
import './Technology.css'; 

const Technology = () => {
  const steps = [
    {
      title: 'HTML, CSS, and JavaScript',
    },
    {
      title: 'React or Angular',
    },
    {
      title: 'Node.js or PHP',
    },
    {
      title: 'WordPress or CMS',
    },
    {
      title: 'Shopify',
    },
   
    {
      title: 'Git Version Control',
    },
  ];
  

  return (
    <div className="how-we-work-section">
      <h2>Technologies We Use</h2>
      <div className="steps">
        {steps.map((step, index) => (
          <div className="step" key={index}>
            <div className="icon">{step.icon}</div>
            <h3>{step.title}</h3>            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technology;
