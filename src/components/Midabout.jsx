import React, { useEffect } from "react";
import styled from "styled-components";
import Image1 from "../../public/Marketing.png";
import Aos from "aos";
import "aos/dist/aos.css";
const Banner = () => {
  
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <AboutUsContainer data-aos="fade-up"  data-aos-duration="1000">
      <Content>
        <SectionTitle>
          {" "}
          <Highlighted>Digi</Highlighted>tal Marketing
        </SectionTitle>
        <MainTitle>Save time & Generate Results</MainTitle>
        <Description>
          Social networking sites act as or more precisely, e-word of mouth. The
          Internet's ability to reach billions across the globe has given online
          word of mouth a powerful voice and far reach. buying patterns and
          product.
        </Description>
        <UnorderList>
          <ListItem>Expert trainers</ListItem>
          <ListItem>Lifetime accesss</ListItem>
        </UnorderList>
        <ActionButton>Get a Quote</ActionButton>
      </Content>
      <ImageContainer data-aos="fade-down"   data-aos-easing="linear"
     data-aos-duration="1500">
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
  width: 100%;
  max-width: 1200px;
  padding: 20px 0px;
  margin: 0 auto;
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

const SectionTitle = styled.h2`
  font-size: 2rem;
  color: #f98866;
  margin-bottom: 10px;
`;

const Highlighted = styled.span`
  border-bottom: 2px solid rgba(10, 13, 80, 1);
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

const UnorderList = styled.ul`
  
 =
`;

const ListItem = styled.li`
  margin-bottom: 10px;
  font-size: 1.2rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
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
