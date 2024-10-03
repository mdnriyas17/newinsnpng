import React from "react";
import styled from "styled-components";

// Styled Components
const ContentSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  background-color: #f8f9fa;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    gap: 40px;
    padding: 40px;
  }
`;

const LeftBox = styled.div`
  flex: 1;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    padding: 30px;
  }
`;

const LeftHeading = styled.h2`
  font-size: 1.6rem;
  color: #333;
  margin-bottom: 15px;

  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

const ContentPara = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #666;
  text-align: left;
  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
`;

const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const OfferBox = styled.div`
  background-color: #e9ecef;
  padding: 15px;
  border-radius: 8px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #dee2e6;
  }
`;

const BoxHeading = styled.h3`
  font-size: 1.2rem;
  color: #343a40;

  @media (min-width: 768px) {
    font-size: 1.4rem;
  }
`;

// Main Content Component
const Content = () => {
  const services = [
    { heading: "Custom Management Solutions" },
    { heading: "Inventory Management" },
    { heading: "Employee Management" },
  ];

  return (
    <ContentSection>
      <LeftBox>
        <LeftHeading>Why Choose Us?</LeftHeading>
        <ContentPara>
          Choose us to transform your business with our customizable management
          systems designed to streamline operations and boost efficiency. Our
          expert team provides seamless integration, comprehensive training, and
          ongoing support to ensure long-term success. Let us help you make
          informed decisions with real-time data and improve overall business
          performance.
        </ContentPara>
      </LeftBox>

      <LeftBox>
        <LeftHeading>What We Offer</LeftHeading>
        <BoxContainer>
          {services.map((service, index) => (
            <OfferBox key={index}>
              <BoxHeading>{service.heading}</BoxHeading>
            </OfferBox>
          ))}
        </BoxContainer>
      </LeftBox>
    </ContentSection>
  );
};

export default Content;
