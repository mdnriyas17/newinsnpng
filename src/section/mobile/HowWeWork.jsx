import React from 'react';
import styled from 'styled-components';

// Styled Components
const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  color: #333;
  margin-bottom: 30px;
  text-align: center;
`;

const StepsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px; /* Space between each step */
`;

const StepBox = styled.div`
  background: #f8f9fa; /* Light background for step boxes */
  border: 1px solid #ddd; /* Light border */
  border-radius: 8px;
  padding: 15px;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }

  p {
    font-size: 1.25rem;
    font-weight: bold;
    color: rgba(10, 13, 80, 1); /* Accent color for step titles */
    margin-bottom: 10px;
  }

  span {
    font-size: 1rem;
    color: #666;
    text-align: left !important;
  }
`;

// HowWeWork Component
const HowWeWork = () => {
  return (
    <Container>
      <SectionTitle>How We Work</SectionTitle>
      
      <StepsContainer>
        <StepBox>
          <p>Discovery & Planning</p>
          <span>We start by understanding your vision, market, and target users to craft a detailed plan for your app development.</span>
        </StepBox>
        <StepBox>
          <p>Design & Prototype</p>
          <span>Our team creates wireframes and prototypes to visualize the app structure and user journey, incorporating your feedback at every stage.</span>
        </StepBox>
        <StepBox>
          <p>Development</p>
          <span>We begin coding, whether for a native, cross-platform, or hybrid app, ensuring all functionalities are in place as per your requirements.</span>
        </StepBox>
        <StepBox>
          <p>Testing & Quality Assurance</p>
          <span>Rigorous testing ensures a bug-free, high-performance app that meets industry standards.</span>
        </StepBox>
        <StepBox>
          <p>Launch & Support</p>
          <span>After the final checks, we help you deploy the app on your chosen platforms and provide ongoing support for updates and new features.</span>
        </StepBox>
      </StepsContainer>
    </Container>
  );
};

export default HowWeWork;
