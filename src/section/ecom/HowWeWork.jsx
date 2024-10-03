import React from 'react';
import styled from 'styled-components';

// Styled Components
const Section = styled.section`
  padding: 40px 20px;
  background-color: #f9f9f9; /* Light background for contrast */
  text-align: center;

  @media (min-width: 768px) {
    padding: 60px 40px; /* More padding on larger screens */
  }
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 30px;
  color: #333; /* Main text color */
`;

const StepsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); /* Responsive grid */
  gap: 20px; /* Space between steps */

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr); /* 3 columns on larger screens */
  }
`;

const StepCard = styled.div`
  background: #fff; /* White background for cards */
  border: 1px solid #ddd; /* Light border for separation */
  border-radius: 8px; /* Rounded corners */
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* Subtle shadow */
  transition: transform 0.2s; /* Smooth hover effect */

  &:hover {
    transform: scale(1.05); /* Scale up on hover */
  }

  h3 {
    font-size: 1.5rem;
    color: rgba(10, 13, 80, 1); /* Title color */
    margin-bottom: 10px; /* Space below title */
  }

  p {
    font-size: 1rem;
    color: #555; /* Description color */
    text-align: left;
  }
`;

// HowWeWork Component
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
    <Section>
      <Title>How We Work</Title>
      <StepsContainer>
        {steps.map((step, index) => (
          <StepCard key={index}>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </StepCard>
        ))}
      </StepsContainer>
    </Section>
  );
};

export default HowWeWork;
