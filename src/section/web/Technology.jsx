import React from 'react';
import styled from 'styled-components';

const Technology = () => {
  const technologies = [
    { heading: 'HTML, CSS, and JavaScript' },
    { heading: 'React or Angular' },
    { heading: 'Node.js or PHP' },
    { heading: 'WordPress or CMS' },
    { heading: 'Shopify' },
    { heading: 'Git Version Control' }
  ];

  return (
    <TechnologyContainer>
      <MainHeading>TECHNOLOGIES WE USE</MainHeading>
      <CircleContainer>
        {technologies.map((tech, index) => (
          <Circle key={index}>
            <CircleHeading>{tech.heading}</CircleHeading>
          </Circle>
        ))}
      </CircleContainer>
    </TechnologyContainer>
  );
};

export default Technology;


const TechnologyContainer = styled.div`
  padding: 60px 20px;
  text-align: center;
`;

const MainHeading = styled.h2`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 30px;
  }
`;

const CircleContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;

  @media (max-width: 768px) {
    gap: 15px;
  }
`;

const Circle = styled.div`
  width: 200px;
  height: 200px;
  background-color: rgba(10, 13, 80, 1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  color: #fff;
  text-align: center;

  @media (max-width: 768px) {
    width: 150px;
    height: 150px;
    padding: 10px;
  }

  @media (max-width: 480px) {
    width: 120px;
    height: 120px;
  }
`;

const CircleHeading = styled.h3`
  font-size: 1.25rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;
