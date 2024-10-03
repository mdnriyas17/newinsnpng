import React from 'react';
import styled from 'styled-components';

// Styled Components
const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
`;

const MainHeading = styled.h2`
  font-size: 2rem;
  color: #333;
  margin-bottom: 40px;
`;

const CircleContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 columns for desktop */
  gap: 30px; /* Space between circles */

  /* Responsive styles */
  @media (max-width: 1199px) {
    grid-template-columns: repeat(2, 1fr); /* 2 columns for laptops */
  }

  @media (max-width: 767px) {
    grid-template-columns: 1fr; /* 1 column for mobile */
  }
`;

const Circle = styled.div`
  background: #f0f0f0; /* Light background for circles */
  border-radius: 50%;
  width: 200px;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;
  margin: 0 auto; /* Center circles in their grid cells */

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  }

  h3 {
    font-size: 1.2rem;
    color: #007bff; /* Accent color for headings */
    margin: 0;
  }

  p {
    font-size: 0.9rem;
    color: #666;
    text-align: center;
    margin: 0;
  }
`;

// Technology Component
const Technology = () => {
  const technologies = [
    { heading: 'Native Development', subheading: 'Swift, Kotlin' },
    { heading: 'Cross-Platform Development', subheading: 'React Native, Flutter' },
    { heading: 'Backend & APIs', subheading: 'Node.js, Python, Ruby' },
    { heading: 'Cloud & Hosting', subheading: 'AWS, Google Cloud, Azure' },
    { heading: 'Databases', subheading: 'MySQL, MongoDB, Firebase' },
    { heading: 'Latest Trends', subheading: 'AI, ML, AR/VR, Blockchain' }
  ];

  return (
    <Container>
      <MainHeading>TECHNOLOGIES WE USE</MainHeading>
      <CircleContainer>
        {technologies.map((tech, index) => (
          <Circle key={index}>
            <h3>{tech.heading}</h3>
            <p>{tech.subheading}</p>
          </Circle>
        ))}
      </CircleContainer>
    </Container>
  );
};

export default Technology;
