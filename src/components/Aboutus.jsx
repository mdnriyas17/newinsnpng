import React, { useEffect } from "react";
import styled from "styled-components";
import Image1 from "../../public/about.jpeg";
import Aos from "aos";
import 'aos/dist/aos.css';

const AboutUs = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <AboutUsContainer id="About" data-aos="fade-up"  data-aos-duration="1000">
      <ImageContainer data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" >
        <img src={Image1} alt="About Us" />
      </ImageContainer>
      <Content>
        <SectionTitle> <Highlighted>A</Highlighted>bout Us</SectionTitle>
        <MainTitle>Get Started Easily With NPNG</MainTitle>
        <Description>
          NPNG we are your trusted partner for all your IT needs. Our expert
          team specializes in crafting custom website solutions that are bot
          visually stunning and highly functional.
        </Description>
        <Maindiv>
          <UnorderList>
            <ListItem>Expert trainers</ListItem>
            <ListItem>Lifetime accesss</ListItem>
          </UnorderList>
          <UnorderList>
            <ListItem>Online Learning</ListItem>
            <ListItem>Great Results</ListItem>
          </UnorderList>
        </Maindiv>
        <ActionButton>Learn More</ActionButton>
      </Content>
    </AboutUsContainer>
  );
};

export default AboutUs;

export const AboutUsContainer = styled.div`
  display: flex;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  justify-content: space-between;
  padding: 50px 20px;
  box-sizing: border-box;
  color: #f98866;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const ImageContainer = styled.div`
  flex: 1;
  img {
    width: 100%;
    height: auto;
    max-width: 500px;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

    image-resolution: 500px;
    @media (max-width: 768px) {
      margin-bottom: 20px;
    }
  }
`;

export const Content = styled.div`
  flex: 1;
  padding-left: 50px;

  @media (max-width: 768px) {
    padding-left: 0;
  }
`;

export const SectionTitle = styled.h4`
  font-size: 1.5rem;
  color: ;
  margin-bottom: 10px;
`;

export const Highlighted = styled.span`
  border-bottom: 2px solid #0a0d50;
`;

export const MainTitle = styled.h1`
  font-size: 2.5rem;
  color: #0a0d50;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const Description = styled.p`
  font-size: 1rem;
  color: #666;
  margin-bottom: 30px;
  line-height: 1.6;
`;

export const Maindiv = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 30px;
`;

export const UnorderList = styled.ul`
  padding: 0;
  margin: 0;
`;

export const ListItem = styled.li`
  margin-bottom: 10px;
  font-size: 1rem;
  color: #666;
  line-height: 1.6;
`;

export const ActionButton = styled.button`
  padding: 10px 30px;
  background-color: #0a0d50;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #070b3d;
  }
`;
