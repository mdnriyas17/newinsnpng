import React from 'react';
import './Technology.css'; 

const Technology = () => {
  const steps = [
    {
      title: 'Custom Software Platforms'
       
      
    },
    {
      title: 'Cloud Integration ',
      
    },
    {
      title: 'Data Analytics Tools',
      
    },
    {
      title: 'API Integrations',
      
    }
    
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
