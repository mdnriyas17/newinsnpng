import React from 'react';
import styled from 'styled-components';
import web from '../../../public/webappd.jpg';

const Container = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 1.5rem;
  color: #333;

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Description = styled.p`
  text-align: left;
  font-size: 1rem;
  color: #555;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const LeftContent = styled.div`
  flex: 1;
`;

const Feature = styled.div`
  margin-bottom: 1.5rem;

  h3 {
    font-size: 1.2rem;
    color: #333;

    @media (min-width: 768px) {
      font-size: 1.5rem;
    }
  }

  p {
    font-size: 1rem;
    color: #555;
    text-align: left;
    @media (min-width: 768px) {
      font-size: 1.1rem;
    }
  }
`;

const RightContent = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    max-width: 400px;
    max-height: 300px;  /* Set a max height */
    height: auto;
    object-fit: cover;  /* Ensures the image keeps its aspect ratio */
    border-radius: 8px;
  }
`;

const OfferingsContainer = styled.div`
  margin-top: 3rem;
`;

const OfferingBox = styled.div`
  margin-bottom: 1.5rem;
  padding: 1rem;
  border: 1px solid #e0e0e0;
  border-radius: 8px;

  h3 {
    font-size: 1.2rem;
    color: #333;

    @media (min-width: 768px) {
      font-size: 1.5rem;
    }
  }

  p {
    font-size: 1rem;
    color: #555;
    text-align: left;
    @media (min-width: 768px) {
      font-size: 1.1rem;
    }
  }
`;

const Content = () => {
  return (
    <Container>
      <SectionTitle>WHY CHOOSE US?</SectionTitle>
      <Description>
        Choosing us means you’re getting a dedicated team that focuses on delivering high-quality results. We use the latest technology to create custom websites and applications that fit your specific needs. Our process is designed to be efficient and transparent, from planning to launch, and we provide ongoing support to ensure everything runs smoothly. With us, you get a partner committed to understanding your goals and helping you achieve them.
      </Description>
      <ContentWrapper>
        <LeftContent>
          <Feature>
            <h3>TAILORED SOLUTIONS</h3>
            <p>We believe in creating customized websites that align with your unique business goals and vision. Our team works closely with you to understand your requirements and deliver solutions that truly reflect your brand.</p>
          </Feature>
          <Feature>
            <h3>EXPERIENCED TEAM</h3>
            <p>Our skilled developers and designers bring years of experience to the table. We stay updated with the latest trends and technologies, ensuring your website is not only modern but also built to last.</p>
          </Feature>
          <Feature>
            <h3>USER-CENTRIC APPROACH</h3>
            <p>We prioritize user experience in every project. Our designs are intuitive and engaging, focusing on delivering a seamless experience for your visitors, which translates into higher conversion rates.</p>
          </Feature>
          <Feature>
            <h3>SEO-FOCUSED DEVELOPMENT</h3>
            <p>We integrate SEO best practices from the outset, ensuring your website ranks well on search engines. Our goal is to drive organic traffic and enhance your online visibility.</p>
          </Feature>
          <Feature>
            <h3>ROBUST SUPPORT & MAINTENANCE</h3>
            <p>Our commitment doesn’t end with the launch. We provide ongoing support and maintenance, ensuring your website remains up-to-date, secure, and performing optimally.</p>
          </Feature>
        </LeftContent>
        <RightContent>
          <img src={web} alt="mobile" />
        </RightContent>
      </ContentWrapper>

      {/* What We Offer Section */}
      <OfferingsContainer>
        <SectionTitle>WHAT WE OFFER</SectionTitle>
        <OfferingBox>
          <h3>CUSTOM WEBSITE DEVELOPMENT</h3>
          <p>Tailored solutions that reflect your brand identity and meet your specific needs, ensuring a unique online presence.</p>
        </OfferingBox>
        <OfferingBox>
          <h3>RESPONSIVE DESIGN</h3>
          <p>Websites optimized for all devices—desktops, tablets, and smartphones—to enhance user experience and accessibility.</p>
        </OfferingBox>
        <OfferingBox>
          <h3>E-COMMERCE SOLUTIONS</h3>
          <p>Robust online stores with secure payment gateways, inventory management, and user-friendly interfaces to boost your sales.</p>
        </OfferingBox>
        <OfferingBox>
          <h3>CONTENT MANAGEMENT SYSTEMS (CMS)</h3>
          <p>Easy-to-manage platforms that allow you to update your website content effortlessly without technical expertise.</p>
        </OfferingBox>
        <OfferingBox>
          <h3>WEB APPLICATION DEVELOPMENT</h3>
          <p>Interactive web applications that streamline processes, improve efficiency, and enhance user engagement.</p>
        </OfferingBox>
        <OfferingBox>
          <h3>SEO OPTIMIZATION</h3>
          <p>Integrated SEO practices to improve your website’s visibility and ranking on search engines, driving organic traffic to your site.</p>
        </OfferingBox>
        <OfferingBox>
          <h3>ONGOING SUPPORT & MAINTENANCE</h3>
          <p>Comprehensive support to ensure your website runs smoothly, including updates, troubleshooting, and performance optimization.</p>
        </OfferingBox>
      </OfferingsContainer>
    </Container>
  );
};

export default Content;
