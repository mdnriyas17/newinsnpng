import React from 'react';
import styled from 'styled-components';

// Styled Components
const TechnologySection = styled.section`
  padding: 40px 20px;
  background-color: #f4f4f4; /* Light background */
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  color: #333;
  margin-bottom: 30px;
`;

const StepsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr; /* Single column on small screens */
  gap: 20px; /* Space between items */

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr); /* Two columns on medium screens */
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr); /* Three columns on larger screens */
  }
`;

const StepCard = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }

  h3 {
    font-size: 1.2rem;
    color: #1d3557;
  }

  p {
    font-size: 1rem;
    color: #6c757d;
  }
`;

// Component
const Technology = () => {
  const steps = [
    { title: 'Google Analytics' },
    { title: 'SEO Tools' },
    { title: 'Social Media Platforms' },
    { title: 'PPC Platforms' },
    { title: 'Email Marketing Tools  ' },
    { title: 'Content Management Systems' },
  ];

  return (
    <TechnologySection>
      <SectionTitle>Technologies We Use</SectionTitle>
      <StepsContainer>
        {steps.map((step, index) => (
          <StepCard key={index}>
            <h3>{step.title}</h3>
          </StepCard>
        ))}
      </StepsContainer>
    </TechnologySection>
  );
};

export default Technology;
