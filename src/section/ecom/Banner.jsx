import React from "react";
import styled from "styled-components";
import Logo from "../../../public/ecom.jpg";

// Styled Components
const BannerContainer = styled.div`
  display: flex;
  flex-direction: column; /* Stack elements vertically */
  align-items: center;
  text-align: center;
  padding: 20px; /* Add some padding for spacing */
  background-color: rgba(10, 13, 80, 1); /* Change background color */
  @media (min-width: 768px) {
    flex-direction: row; /* Change to row on larger screens */
  }
`;

const TopHeading = styled.h1`
  font-size: 2rem; /* Adjust font size */
  color: #333; /* Change color as needed */
  
  .services {
    color: #007bff; /* Customize service color */
  }
`;

const BottomHeading = styled.h3`
  font-size: 1.5rem; /* Adjust font size */
  color: #666; /* Change color as needed */
`;

const BannerContent = styled.div`
  max-width: 500px; /* Set a max width for the content */
  margin: 20px; /* Add margin for spacing */

  @media (min-width: 768px) {
    margin-right: 20px; /* Space out on larger screens */
  }
`;

const BannerTitle = styled.h1`
  font-size: 2rem; /* Adjust font size */
  color: #fff; /* Change color as needed */
  margin-bottom: 10px; /* Space below title */
`;

const BannerText = styled.p`
  font-size: 1rem; /* Adjust font size */
  color: #fff; /* Change color as needed */
  text-align: left;
  line-height: 1.5; /* Add line height for readability */
`;

const BannerGraphic = styled.div`
  display: flex;
  justify-content: center; /* Center the image */
  align-items: center;
  margin-top: 20px; /* Add margin for spacing */

  img {
    max-width: 100%;
    height: auto;
    border-radius: 8px; /* Optional: add border radius */
  }
`;

// Banner Component
const Banner = () => {
  return (
    <div style={{marginTop: "70px"}}>
      <TopHeading>
        
        E-Commerce Applications
      </TopHeading>
      <BottomHeading>
        Welcome to Our E-commerce Solutions!<br />
      </BottomHeading>
      <BannerContainer>
        <BannerContent>
          <BannerTitle>Transform Your Ideas into Reality</BannerTitle>
          <BannerText>
            At NPNG Tech, we create custom e-commerce applications that help
            your business succeed online. Our solutions are designed to be
            user-friendly and effective, with features like secure payment
            options and intuitive shopping experiences. We use the latest
            technology to build online stores that look great and work
            seamlessly, ensuring your customers have a positive shopping
            experience.
          </BannerText>
        </BannerContent>
        <BannerGraphic>
          <img src={Logo} alt="Web Development Graphic" />
        </BannerGraphic>
      </BannerContainer>
    </div>
  );
};

export default Banner;
