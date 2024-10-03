import React from 'react';
import styled from 'styled-components';
import Logo from '../../../public/digi.jpg';

// Styled Components
const BannerContainer = styled.div`
  margin-top: 50px; /* Adjusted margin for better appearance */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: rgba(10, 13, 80, 1);
  color: #fff;
  text-align: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 40px;
    text-align: left;
  }
`;

const BannerContent = styled.div`
  max-width: 600px;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    margin-bottom: 0;
    max-width: 50%;
  }
`;

const BannerTitle = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 10px;

  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

const BannerDetails = styled.h3`
  font-size: 1rem;
  margin-bottom: 12px;

  @media (min-width: 768px) {
    font-size: 1.4rem;
  }
`;

const BannerDescription = styled.p`
  font-size: 1rem;
  margin-bottom: 20px;
  text-align: left;
  @media (min-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 25px;
  }
`;

const BannerImage = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 100%; /* Ensure image stays within the container */
    border-radius: 10px;
    
    @media (min-width: 768px) {
      max-width: 80%; /* Adjust image size on larger screens */
    }
  }
`;

// Banner Component
const Banner = () => {
  return (
    <BannerContainer>
      <BannerContent>
        <BannerTitle>Digital Marketing</BannerTitle>
        <BannerDetails>Welcome to Our Digital Marketing Services!</BannerDetails>
        <BannerTitle>Maximize Your Online Presence with Our Digital Marketing Services</BannerTitle>
        <BannerDescription>
          At NPNG Tech, our digital marketing solutions are designed to help businesses grow by reaching the right audience online. From search engine optimization (SEO) to social media marketing, we offer a range of services tailored to your business goals. Our data-driven approach ensures that you connect with potential customers, increase brand visibility, and achieve measurable results in the digital space.
        </BannerDescription>
      </BannerContent>
      <BannerImage>
        <img src={Logo} alt="Digital Marketing Graphic" />
      </BannerImage>
    </BannerContainer>
  );
};

export default Banner;
