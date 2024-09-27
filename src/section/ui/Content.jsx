import React from 'react';
import styled from 'styled-components';

const Content = () => {
  const services = [
    { heading: "User Research", description: "We gather insights to understand your users and their needs." },
    { heading: "Wireframing", description: "We create structural blueprints for your website or app." },
    { heading: "Prototyping", description: "We build interactive mockups to visualize the final product." },
    { heading: "UI Design", description: "We craft visually appealing interfaces that are easy to use." },
    { heading: "UX Strategy", description: "We ensure a smooth and enjoyable user experience." },
    { heading: "Usability Testing", description: "We test the design to ensure it meets user expectations." }
  ];

  return (
    <ContentSection>
      <LeftBox>
        <LeftHeading>Why Choose Us?</LeftHeading>
        <ContentPara>
          We focus on creating intuitive, user-friendly, and visually appealing interfaces that improve user experience and meet your business goals. Our team combines creativity with research-driven design principles to deliver solutions that engage and retain users.
        </ContentPara>
      </LeftBox>

      <LeftBox>
        <LeftHeading>What We Offer</LeftHeading>
        <BoxContainer>
          {services.map((service, index) => (
            <OfferBox key={index}>
              <BoxHeading>{service.heading}</BoxHeading>
              <BoxSubheading>{service.description}</BoxSubheading>
            </OfferBox>
          ))}
        </BoxContainer>
      </LeftBox>
    </ContentSection>
  );
};

export default Content;


export const ContentSection = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 768px) {
    padding: 30px 15px;
  }
`;

export const LeftBox = styled.div`
  padding: 20px;
  background-color: #f9f9f9;
  border: 2px solid #9a77f0;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

export const LeftHeading = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 20px;
  color: #f8612b;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

export const ContentPara = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #071330;
  text-align: justify;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

export const BoxContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
`;

export const OfferBox = styled.div`
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;

  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

export const BoxHeading = styled.h3`
  font-size: 1.5rem;
  color: #5f47e3;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }

  @media (max-width: 480px) {
    font-size: 1.1rem;
  }
`;

export const BoxSubheading = styled.p`
  font-size: 1rem;
  color: #071330;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
`;
