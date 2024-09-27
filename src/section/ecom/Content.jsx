import React from 'react';
import styled from 'styled-components';

const Content = () => {
  const services = [
    { heading: "Custom E-commerce Solutions", description: "Tailored platforms to fit your business needs." },
    { heading: "Shopping Cart Integration", description: "User-friendly and secure carts for smooth transactions." },
    { heading: "Payment Gateway Setup", description: "Integration with various payment methods for secure transactions." },
    { heading: "Product Catalog Management", description: "Easy management of product listings and organization." },
    { heading: "Mobile Optimization", description: "Designs optimized for seamless mobile shopping experiences." },
    { heading: "Order Management System", description: "Tools to track and manage orders and inventory." },
    { heading: "User Account Management", description: "Features for customers to create accounts and save preferences." },
    { heading: "Security Features", description: "SSL certificates and encryption to protect data and transactions." },
    { heading: "Analytics and Reporting", description: "Insights into sales and customer behavior to guide decisions." },
  ];

  return (
    <ContentSection>
      <LeftBox>
        <LeftHeading>Why Choose Us?</LeftHeading>
        <ContentPara>
          We create custom e-commerce solutions that fit your needs perfectly. Our team uses the latest technologies to build secure and high-performing online stores.
          We work closely with you throughout the process to ensure everything meets your expectations.
          With our focus on quality and customer satisfaction, we help you stand out and succeed online.
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
    grid-template-columns: 1fr;
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
