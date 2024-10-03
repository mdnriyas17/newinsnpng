import React from 'react';
import styled from 'styled-components';
import Logo from "../../../public/mam.jpg"; 

// Styled Components
const BannerContainer = styled.div`
  padding: 20px;
  margin-top: 70px;
  background-color: rgba(10, 13, 80, 1);
  text-align: center;

  @media (min-width: 768px) {
    padding: 40px;
  }
`;

const TopHeading = styled.h1`
  font-size: 1.8rem;
  color: #fff;
  margin-bottom: 20px;
  text-transform: uppercase;

  .services {
    color: #fff; /* Highlighted orange color */
  }

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

const BottomHeading = styled.h3`
  font-size: 1.2rem;
  color: #fff;
  margin-bottom: 40px;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

const BannerContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-bottom: 40px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    gap: 40px;
  }
`;

const BannerTitle = styled.h1`
  font-size: 1.8rem;
  color: #fff;
  margin-bottom: 20px;
  text-align: left;

  @media (min-width: 768px) {
    font-size: 2.4rem;
    margin-bottom: 30px;
  }
`;

const BannerText = styled.p`
  font-size: 1rem;
  color: #fff;
  line-height: 1.6;
  text-align: left;
  max-width: 600px;

  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
`;

const BannerGraphic = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;

  img {
    max-width: 100%;
    height: auto;
    border-radius: 10px;
  }

  @media (min-width: 768px) {
    margin-top: 0;
    max-width: 400px;
  }
`;

// Banner Component
const Banner = () => {
  return (
    <BannerContainer>
      <TopHeading>
        
        Management Systems
      </TopHeading>
      <BottomHeading>
        Welcome to Our Management Systems Solutions!
      </BottomHeading>
      <BannerContent>
        <div>
          <BannerTitle>Transform Your Business with Our Management Systems</BannerTitle>
          <BannerText>
            At NPNG Tech, Our management systems are designed to streamline and optimize your business operations. From inventory management to employee tracking and customer relationship management (CRM), our tailored solutions help businesses improve efficiency, reduce manual work, and make informed decisions based on real-time data.

            Whether you need a simple tool or a complex integrated system, we offer the right solution for your needs.
          </BannerText>
        </div>
        <BannerGraphic>
          <img
            src={Logo}
            alt="Web Development Graphic"
            className="right-img"
          />
        </BannerGraphic>
      </BannerContent>
    </BannerContainer>
  );
};

export default Banner;
