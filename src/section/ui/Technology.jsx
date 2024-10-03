import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  padding: 40px 20px; /* Padding for spacing */
  background-color: #f5f5f5; /* Light background color */
  text-align: center; /* Center align text */
`;

const Title = styled.h2`
  font-size: 2.5rem; /* Font size for title */
  margin-bottom: 30px; /* Space below title */
  color: rgba(10, 13, 80, 1); /* Title color */
`;

const StepsContainer = styled.div`
  display: grid; /* Use grid for layout */
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); /* Responsive columns */
  gap: 20px; /* Space between step cards */
`;

const StepCard = styled.div`
  background-color: #fff; /* White background for cards */
  padding: 20px; /* Padding inside cards */
  border-radius: 8px; /* Rounded corners */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Shadow for depth */
  transition: transform 0.3s; /* Transition for hover effect */
  text-align: left; /* Align text to left */

  &:hover {
    transform: translateY(-5px); /* Lift effect on hover */
  }
`;

const StepTitle = styled.h3`
  font-size: 1.5rem; /* Font size for step title */
  margin-top: 15px; /* Space above step title */
  margin-bottom: 10px; /* Space below step title */
  color: #333; /* Step title color */
`;

const IconContainer = styled.div`
  font-size: 2rem; /* Adjust icon size */
  color: #007BFF; /* Color for icons */
`;

const Technology = () => {
  const steps = [
    {
      title: 'Figma',
      icon: '🎨', // Add an icon here if needed
    },
    {
      title: 'Sketch',
      icon: '🖌️', // Add an icon here if needed
    },
    {
      title: 'Adobe XD',
      icon: '📐', // Add an icon here if needed
    },
    {
      title: 'InVision',
      icon: '🖥️', // Add an icon here if needed
    },
    {
      title: 'Hotjar',
      icon: '📊', // Add an icon here if needed
    },
  ];

  return (
    <Section>
      <Title>Technologies We Use</Title>
      <StepsContainer>
        {steps.map((step, index) => (
          <StepCard key={index}>
            <IconContainer>{step.icon}</IconContainer>
            <StepTitle>{step.title}</StepTitle>
          </StepCard>
        ))}
      </StepsContainer>
    </Section>
  );
};

export default Technology;
