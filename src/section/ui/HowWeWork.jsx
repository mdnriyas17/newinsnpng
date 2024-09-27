import React from 'react';
import './HowWeWork.css';

const HowWeWork = () => {
  const steps = [
    {
      title: 'Discovery',
      description: 'We begin by understanding your business and user needs.',
    },
    {
      title: 'Research',
      description: 'We conduct user research to gather insights and preferences.',
    },
    {
      title: 'Wireframing',
      description: 'We create basic layouts to map out the user journey.',
    },
    {
      title: 'Prototyping',
      description: 'We develop interactive prototypes to visualize the design.',
    },
    {
      title: 'Testing',
      description: 'We perform usability testing to refine the design based on feedback.',
    },
    {
      title: 'Final Design',
      description: 'After revisions, we deliver the final product, ensuring it aligns with your goals.',
    },
  ];

  return (
    <section className="how-we-work">
      <h2>How We Work</h2>
      <div className="steps-container1">
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
