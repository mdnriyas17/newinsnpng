import React from 'react';
import styled from 'styled-components';

// Styled Components
const ContentSection = styled.section`
  display: flex;
  flex-direction: column;
  padding: 40px 20px;
  background-color: #f9f9f9;
  color: #333;
  text-align: left;

  @media (min-width: 768px) {
    padding: 60px 80px;
  }
`;

const LeftBox = styled.div`
  margin-bottom: 40px;

  @media (min-width: 768px) {
    margin-bottom: 60px;
  }
`;

const LeftHeading = styled.h2`
  font-size: 1.8rem;
  color: #1d3557;
  margin-bottom: 20px;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 2.2rem;
  }
`;

const ContentPara = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #6c757d;
  text-align: left;
  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
`;

const BoxContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr; /* Single column on small screens */
  gap: 20px; /* Gap between items */

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr; /* Two columns on medium screens */
    gap: 40px;
  }

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr; /* Three columns on larger screens */
  }
`;

const OfferBox = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
  }
`;

const BoxHeading = styled.h3`
  font-size: 1.4rem;
  color: #1d3557;
  margin-bottom: 10px;

  @media (min-width: 768px) {
    font-size: 1.6rem;
  }
`;

const BoxSubheading = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  color: #6c757d;
  text-align: left;
  @media (min-width: 768px) {
    font-size: 1.1rem;
  }
`;

// Content Component
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
