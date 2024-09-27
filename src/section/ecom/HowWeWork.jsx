import React from 'react';
import './HowWeWork.css';

const HowWeWork = () => {
  const steps = [
    {
      title: 'Discovery and Planning',
      description: 'We begin by understanding your business requirements and goals. We then create a detailed plan outlining the project scope, timeline, and key features.',
    },
    {
      title: 'Design',
      description: 'Our team designs user-friendly and visually appealing e-commerce interfaces. We create wireframes and prototypes to illustrate the layout and functionality.',
    },
    {
      title: 'Development',
      description: 'We build the e-commerce application, integrating essential features like shopping carts, payment gateways, and product management systems.',
    },
    {
      title: 'Testing',
      description: 'We rigorously test the application to ensure it is functional, secure, and provides a seamless user experience. We identify and fix any issues before launch.',
    },
    {
      title: 'Launch',
      description: 'We assist with the launch of your e-commerce application, ensuring it is live and fully operational. We provide support to handle any immediate post-launch concerns.',
    },
    {
      title: 'Ongoing Support',
      description: 'After launch, we offer continued support and maintenance to keep your application running smoothly. We make updates, fix issues, and implement improvements based on user feedback.',
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
