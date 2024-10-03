import React from 'react';
import styled from 'styled-components';
import Logo from "../../../public/ui.jpg";

const BannerContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  margin-top: 70px;
  display: flex;
  flex-direction: row; /* Default layout */
  align-items: center; /* Center content vertically */
  padding: 20px; /* Add padding for spacing */

  @media (max-width: 768px) {
    flex-direction: column; /* Stack vertically on smaller screens */
    text-align: center; /* Center text for smaller screens */
  }
`;

const TopHeading = styled.h1`
  font-size: 2.5rem;
  margin: 0;

  .services {
    color: rgba(10, 13, 80, 1); /* Change to your desired color */
  }

  @media (max-width: 768px) {
    font-size: 2rem; /* Adjust font size on smaller screens */
  }
`;

const BottomHeading = styled.h3`
  font-size: 1.5rem;
  margin: 20px 0;

  @media (max-width: 768px) {
    font-size: 1.2rem; /* Adjust font size on smaller screens */
  }
`;

const BannerContent = styled.div`
  flex: 1; /* Allow content to take available space */
  padding-right: 20px; /* Add space between content and image */
  text-align: left; /* Align text to the left */

  @media (max-width: 768px) {
    padding-right: 0; /* Remove right padding on smaller screens */
    margin-bottom: 20px; /* Add margin at the bottom when stacked */
  }
`;

const BannerTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 15px;

  @media (max-width: 768px) {
    font-size: 1.5rem; /* Adjust font size on smaller screens */
  }
`;

const BannerText = styled.p`
  font-size: 1rem;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 0.9rem; /* Adjust font size on smaller screens */
  }
`;

const BannerGraphic = styled.div`
  flex: 1; /* Allow image to take available space */
  max-width: 50%; /* Limit width for image */

  img {
    max-width: 100%;
    height: auto; /* Ensures the image scales properly */
  }

  @media (max-width: 768px) {
    max-width: 100%; /* Full width on smaller screens */
  }
`;

const Banner = () => {
  return (
    <BannerContainer>      
      <BannerContent>
        <TopHeading><span className="services">SERVICES</span> <br />UI/UX DESIGNS</TopHeading>
        <BottomHeading>Welcome to Our UI/UX Design Services!<br /></BottomHeading>
        <BannerTitle>Discover Our UI/UX Solutions</BannerTitle>          
        <BannerText>
          At NPNG Tech, we focus on creating intuitive, user-friendly, and visually appealing interfaces that improve user experience and meet your business goals. Our team combines creativity with research-driven design principles to deliver solutions that engage and retain users.
        </BannerText>
      </BannerContent>
      <BannerGraphic>
        <img
          src={Logo}
          alt="Web Development Graphic"
        />
      </BannerGraphic>
    </BannerContainer>
  );
};

export default Banner;
