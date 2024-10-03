import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 40px 20px; /* Padding for spacing */
  background-color: #f5f5f5; /* Light background color */
  text-align: center; /* Center align text */
`;

const Title = styled.h2`
  font-size: 2.5rem; /* Font size for title */
  margin-bottom: 20px; /* Space below title */
  color: rgba(10, 13, 80, 1); /* Title color */
`;

const StepsContainer = styled.div`
  display: grid; /* Use grid for layout */
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr)); /* Responsive columns */
  gap: 20px; /* Space between step cards */
`;

const StepCard = styled.div`
  background-color: #fff; /* White background for cards */
  padding: 20px; /* Padding inside cards */
  border-radius: 8px; /* Rounded corners */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Shadow for depth */
  transition: transform 0.3s; /* Transition for hover effect */

  &:hover {
    transform: translateY(-5px); /* Lift effect on hover */
  }
`;

const StepTitle = styled.h3`
  font-size: 1.5rem; /* Font size for step title */
  margin-bottom: 10px; /* Space below step title */
  color: #333; /* Step title color */
`;

const StepDescription = styled.p`
  font-size: 1rem; /* Font size for description */
  color: #666; /* Step description color */
  line-height: 1.5; /* Line height for readability */
  text-align: left;
`;

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
    <Section>
      <Title>How We Work</Title>
      <StepsContainer>
        {steps.map((step, index) => (
          <StepCard key={index}>
            <StepTitle>{step.title}</StepTitle>
            <StepDescription>{step.description}</StepDescription>
          </StepCard>
        ))}
      </StepsContainer>
    </Section>
  );
};

export default HowWeWork;
