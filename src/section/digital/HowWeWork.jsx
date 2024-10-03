import React from 'react';
import styled from 'styled-components';

// Styled Components
const HowWeWorkSection = styled.section`
  padding: 40px 20px;
  background-color: #f8f9fa; /* Light background */
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
  color: #333;
`;

const StepsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr; /* Single column layout for smaller screens */
  gap: 20px; /* Space between step cards */

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr); /* Two columns on medium screens */
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr); /* Three columns on large screens */
  }
`;

const StepCard = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px); /* Hover effect */
  }

  h3 {
    font-size: 1.5rem;
    margin-bottom: 10px;
    color: #1d3557;
  }

  p {
    font-size: 1rem;
    color: #6c757d;
    text-align: left;
  }
`;

// Component
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
    <HowWeWorkSection>
      <SectionTitle>How We Work</SectionTitle>
      <StepsContainer>
        {steps.map((step, index) => (
          <StepCard key={index}>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </StepCard>
        ))}
      </StepsContainer>
    </HowWeWorkSection>
  );
};

export default HowWeWork;
