import React from 'react';
import styled from 'styled-components';
import Logo from "../../../public/mobileappdev.png";

// Styled Components
const BannerContainer = styled.div`
  display: flex;
  flex-direction: column; /* Stack on smaller screens */
  align-items: center; 
  justify-content: center;
  padding: 20px; /* Adjust padding for smaller screens */
  background-color: rgba(10, 13, 80, 1);
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center; /* Center text for better readability */
  
  @media (min-width: 768px) {
    flex-direction: row; /* Change to row on larger screens */
    padding: 40px 20px; /* Increase padding on larger screens */
  }
`;

const BannerContent = styled.div`
  max-width: 500px;
  width: 100%; /* Allow it to take full width on smaller screens */
`;

const BannerTitle = styled.h1`
  font-size: 2rem; /* Adjust font size for smaller screens */
  color: #fff;
  margin-bottom: 10px;
  text-transform: uppercase;
  text-align: left;
  @media (min-width: 768px) {
    font-size: 2.5rem; /* Increase font size for larger screens */
  }
`;

const BannerDetails = styled.div`
  font-size: 1rem; /* Adjust font size for smaller screens */
  margin-bottom: 15px;
  color: #fff;
  text-align: left;
  span {
    display: block; 
  }
`;

const BannerDescription = styled.p`
  font-size: 0.9rem; /* Adjust font size for smaller screens */
  color: #fff;
  margin-bottom: 20px;
  text-align: left;
  @media (min-width: 768px) {
    font-size: 1rem; /* Increase font size for larger screens */
  }
`;

const BannerButton = styled.a`
  display: inline-block;
  padding: 10px 20px;
  font-size: 0.9rem; /* Adjust font size for smaller screens */
  color: rgba(10, 13, 80, 1);
  background-color: #fff;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s;
  text-align: left;
  @media (min-width: 768px) {
    font-size: 1rem; /* Increase font size for larger screens */
  }
`;

const BannerImage = styled.div`
  flex: 1;
  display: flex;
  justify-content: center; 
  align-items: center;
  margin-top: 20px; /* Add margin for spacing on small screens */

  img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
  }

  @media (min-width: 768px) {
    margin-top: 0; /* Remove margin on larger screens */
  }
`;

// Banner Component
const Banner = () => {
  return (
    <BannerContainer>
      <BannerContent>
        <BannerTitle>MOBILE APP DEVELOPMENT</BannerTitle>
        <BannerDetails>
          <span>Welcome to our Mobile App Development services!<br /> Transform Your Ideas Into Reality</span>
        </BannerDetails>
        <BannerDescription>
          We turn your innovative ideas into fully functional mobile applications that captivate users and meet your business goals.
        </BannerDescription>
        <BannerButton href="#contact">LET'S GET IN TOUCH</BannerButton>
      </BannerContent>
      <BannerImage>
        <img src={Logo} alt="Technology background" />
      </BannerImage>
    </BannerContainer>
  );
};

export default Banner;
