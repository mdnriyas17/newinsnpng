import React from "react";
import styled from "styled-components";

// Styled Components
const Section = styled.div`
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
  grid-template-columns: repeat(
    auto-fill,
    minmax(200px, 1fr)
  ); /* Responsive grid */
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
    font-size: 1.2rem;
    color: #007bff; /* Title color */
    margin-top: 10px; /* Space above title */
  }
`;

// Technology Component
const Technology = () => {
  const steps = [
    { title: "Shopify, Magento,  BigCommerce" },
    { title: "Stripe and PayPal" },
    { title: "Google Analytics" },
    { title: "AWS" },
    { title: "React" },
    {
      title: "Node.js",
    },
  ];

  return (
    <Section>
      <Title>Technologies We Use</Title>
      <StepsContainer>
        {steps.map((step, index) => (
          <StepCard key={index}>
            <h3>{step.title}</h3>
          </StepCard>
        ))}
      </StepsContainer>
    </Section>
  );
};

export default Technology;
