import React from 'react';
import './HowWeWork.css';
import styled from 'styled-components';
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
  text-align: left;
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
  }
`;