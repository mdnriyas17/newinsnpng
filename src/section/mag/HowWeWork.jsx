import React from 'react';
import './HowWeWork.css';

const HowWeWork = () => {
  const steps = [
    {
      title: 'Consultation',
      description: 'We start by understanding your business processes and requirements.',
    },
    {
      title: 'Planning',
      description: 'We develop a plan to create a management system that fits your needs.',
    },
    {
      title: 'Development',
      description: 'We build and customize the system, ensuring it integrates seamlessly with your existing tools.',
    },
    {
      title: 'Implementation',
      description: 'We install and configure the system, ensuring everything works smoothly.',
    },
    {
      title: 'Training',
      description: 'We train your team to use the system effectively.',
    },
    {
      title: 'Support',
      description: 'We provide ongoing support and maintenance to ensure your system operates at its best.',
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
