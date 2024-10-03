import React from 'react';
import styled from 'styled-components';

const HowWeWork = () => {
  return (
    <HowWeWorkContainer>
      <SectionTitle>How We Work</SectionTitle>
      
      <StepsContainer>
        <StepBox>
          <p>CONSULTATION</p>
          <span>We start by understanding your business objectives and project requirements.</span>
        </StepBox>
        <StepBox>
          <p>PLANNING</p>
          <span>We create a detailed plan and timeline to guide the development process.</span>
        </StepBox>
        <StepBox>
          <p>DESIGN</p>
          <span>The design phase focuses on crafting a user-friendly and visually appealing layout that aligns with your brand.</span>
        </StepBox>
        <StepBox>
          <p>DEVELOPMENT</p>
          <span>We build the site using the latest technology to ensure reliability and performance.</span>
        </StepBox>
        <StepBox>
          <p>TESTING</p>
          <span>After thorough testing to fix any issues, we prepare for launch.</span>
        </StepBox>
        <StepBox>
          <p>LAUNCH & SUPPORT</p>
          <span>We launch your website and provide ongoing support and maintenance to keep it updated and running smoothly.</span>
        </StepBox>
      </StepsContainer>
    </HowWeWorkContainer>
  );
};

export default HowWeWork;


const HowWeWorkContainer = styled.div`
  padding: 60px 20px;
  background-color: #f9f9f9;
  text-align: center;

  @media (max-width: 768px) {
    padding: 40px 10px;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 30px;
  }
`;

const StepsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
  }
`;

const StepBox = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  flex-basis: 30%;
  text-align: left;
  
  p {
    font-size: 1.25rem;
    font-weight: bold;
    margin-bottom: 10px;
    color: rgba(10, 13, 80, 1);
  }

  span {
    font-size: 1rem;
    color: #555;
    text-align: left;
  }

  @media (max-width: 768px) {
    flex-basis: 100%;
    text-align: center;
    
    p {
      font-size: 1.2rem;
    }

    span {
      font-size: 0.95rem;
    }
  }
`;
