import React, { useEffect } from "react";
import styled from "styled-components";
import Image1 from "../../public/Programming.png";
import Aos from "aos";
import 'aos/dist/aos.css';

const Banner = () => {

  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <AboutUsContainer>
      <Content>
        <StyledTitle>
          <Highlighted>For</Highlighted> the Courses of your explore
        </StyledTitle>
        <MainTitle>A better learning Journey future start</MainTitle>
        <Description>
          NPNG is the best place to learn IT courses in chennai. We having top
          level of mentors, practical classes, 100% placement assistance etc.,
          Join our courses.
        </Description>
        <ActionButton>Get Started</ActionButton>
      </Content>
      <ImageContainer data-aos="fade-up"  data-aos-duration="1000">
        <img src={Image1} alt="About Us" />
      </ImageContainer>
    </AboutUsContainer>
  );
};

export default Banner;

const AboutUsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  padding: 100px 0px;
  margin: 0 auto;
  width: 100%;

  box-sizing: border-box;
  @media (max-width: 1024px) {
    width: 100%;
    max-width: 870px;
  }

  @media (max-width: 768px) {
    flex-direction: column;

    max-width: 730px;
  }
  @media (max-width: 425px) {
    max-width: 400px;
  }
  @media (max-width: 375px) {
    max-width: 370px;
  }
  @media (max-width: 320px) {
    max-width: 300px;
  }
`;

const Content = styled.div`
  flex: 1;
  padding-right: 40px;
  text-align: left;
`;

const StyledTitle = styled.h2`
  font-size: 2rem;
  color: #f98866;
  margin-bottom: 10px;
`;

const Highlighted = styled.span`
  border-bottom: 2px solid rgba(10, 13, 80, 1); /* Adjust the border size and color as needed */
  padding-bottom: 2px; /* This gives some spacing between the text and the border */
`;

const MainTitle = styled.h1`
  color: #0a0d50;

  font-size: 3rem;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 20px;
`;

const ActionButton = styled.button`
  padding: 12px 24px;
  background-color: rgba(10, 13, 80, 1);
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  padding: 20px, 50px, 20px, 50px;
`;

const ImageContainer = styled.div`
  flex: 1;
  padding-left: 40px;

  img {
    width: 100%;
    border-radius: 5px;
    // box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    padding-left: 0;
    margin-top: 40px;
  }
`;
