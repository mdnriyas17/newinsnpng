import React from 'react';
import styled from 'styled-components';
const Content = () => {
  const services = [
    { heading: "Search Engine Optimization (SEO)", description: "Boost your website’s visibility on search engines and drive organic traffic." },
    { heading: "Social Media Marketing", description: "Engage with your audience and build brand loyalty on platforms like Facebook, Instagram, and LinkedIn." },
    { heading: "Content Marketing", description: "Create and distribute valuable content that attracts and engages your target audience." },
    { heading: "Pay-Per-Click (PPC) Advertising", description: "Run targeted ads on platforms like Google Ads to generate leads and increase conversions." },
    { heading: "Email Marketing", description: "Nurture customer relationships through personalized email campaigns that drive engagement." },
    { heading: "Analytics and Reporting", description: "Track your performance with in-depth analytics to refine and improve your strategies." }
  ];

  return (
    <ContentSection>
      <LeftBox>
        <LeftHeading>Why Choose Us?</LeftHeading>
        <ContentPara>
          We combine expertise with a personalized approach to ensure your business achieves its digital marketing goals. With a focus on measurable results, we work to increase your online visibility and drive conversions. Our commitment to transparency, data-driven strategies, and ongoing support sets us apart, helping you grow your business in the digital landscape.
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
  border: 2px solid #5f47e3;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: left;

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
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
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
