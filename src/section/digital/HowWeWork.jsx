import React from 'react';
import './HowWeWork.css';

const HowWeWork = () => {
  const steps = [
    {
      title: 'Consultation',
      description: 'We start by understanding your business goals and target audience.',
    },
    {
      title: 'Strategy',
      description: 'We develop a custom digital marketing plan tailored to your objectives.',
    },
    {
      title: 'Implementation',
      description: 'Our team executes the strategy across various digital channels.',
    },
    {
      title: 'Optimization',
      description: 'We continuously monitor and optimize campaigns to ensure maximum effectiveness.',
    },
    {
      title: 'Reporting',
      description: 'We provide regular reports to keep you informed of your campaign’s success and areas for improvement.',
    },
    {
      title: 'Support',
      description: 'We offer ongoing support to adjust strategies and help you stay ahead in the market.',
    },
    
  ];

  return (
    <section className="how-we-work">
      <h2>How We Work</h2>
      <div className="steps-container">
        {steps.map((step, index) => (
          <div className="step-card" key={index}>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowWeWork;
