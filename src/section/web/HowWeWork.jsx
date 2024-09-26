import React from 'react';
import './HowWeWork.css';

const HowWeWork = () => {
  const steps = [
    {
      title: 'Consultation',
      description: 'We start by understanding your business objectives and project requirements.',
    },
    {
      title: 'Planning',
      description: 'We create a detailed plan and timeline to guide the development process.',
    },
    {
      title: 'Design',
      description: 'The design phase focuses on crafting a user-friendly and visually appealing layout that aligns with your brand.',
    },
    {
      title: 'Development',
      description: 'We build the site using the latest technology to ensure reliability and performance.',
    },
    {
      title: 'Testing',
      description: 'After thorough testing to fix any issues, we prepare for launch.',
    },
    {
      title: 'Launch & Support',
      description: 'We launch your website and provide ongoing support and maintenance to keep it updated and running smoothly.',
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
