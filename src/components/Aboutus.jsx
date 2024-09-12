import React, { useEffect } from "react";
import styled from "styled-components";
import Image1 from "../../public/VI1.png";
import Image2 from "../../public/Aboutback.png";
import Aos from "aos";
import 'aos/dist/aos.css';

const AboutUs = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <AboutUsContainer id="About" data-aos="fade-up" data-aos-duration="1000">
      <ImageContainer data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
        <img src={Image1} alt="About Us" />
      </ImageContainer>
      <Content>
        <SectionTitle>
          <Highlighted>A</Highlighted>bout Us
        </SectionTitle>
        <MainTitle>Get Started Easily With NPNG</MainTitle>
        <Description>
          At NPNG, we're more than just a web design and development company - we're pioneers of exceptional digital experiences. With a steadfast commitment to quality and service, we've assembled a dedicated team of experts who consistently exceed expectations and deliver outstanding results.
        </Description>
        <Maindiv>
          <UnorderList>
            <ListItem><i className="fa-regular fa-circle-check"></i>Innovation and Collaborations</ListItem>
            <ListItem><i className="fa-regular fa-circle-check"></i>Tailored Strategies</ListItem>
          </UnorderList>
          <UnorderList>
            <ListItem><i className="fa-regular fa-circle-check"></i>Transparency and Communication</ListItem>
            <ListItem><i className="fa-regular fa-circle-check"></i>Community Engagement and Sustainability</ListItem>
          </UnorderList>
        </Maindiv>
        <a href="#Home">
          <ActionButton>Learn More</ActionButton>
        </a>
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
  background-color: rgba(10, 13, 80, 1);
  background-image: url(${Image2});
  background-blend-mode: multiply; /* or overlay, screen, etc. */
  justify-content: space-between;
  padding: 20px;
  box-sizing: border-box;
  color: rgba(255, 72, 2, 1);

  @media (max-width: 1200px) {
    padding: 15px;
  }

  @media (max-width: 992px) {
    flex-direction: column;
  }

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    max-width: 541.48px;
    height: auto;
    border-radius: 20px;

    @media (max-width: 1200px) {
      max-width: 480px;
    }

    @media (max-width: 992px) {
      max-width: 400px;
    }

    @media (max-width: 768px) {
      max-width: 300px;
      transform: none;
    }
  }
`;

export const Content = styled.div`
  flex: 1;
  padding-left: 50px;
  max-width: 600px;

  @media (max-width: 1200px) {
    padding-left: 30px;
  }

  @media (max-width: 992px) {
    padding-left: 0;
    text-align: center;
  }

  @media (max-width: 768px) {
    padding: 0;
  }
`;

export const SectionTitle = styled.h4`
  font-size: 1.5rem;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const Highlighted = styled.span`
  border-bottom: 2px solid #fff;
`;

export const MainTitle = styled.h1`
  font-size: 2.5rem;
  color: white;
  margin-bottom: 20px;

  @media (max-width: 1200px) {
    font-size: 2rem;
  }

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

export const Description = styled.p`
  font-size: 1rem;
  color: white;
  margin-bottom: 30px;
  text-align: left;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    text-align: center;
  }
`;

export const Maindiv = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 30px;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const UnorderList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  text-align: left;

  @media (max-width: 768px) {
    margin-bottom: 20px;
    font-size: 1.2rem;
    line-height: 1.6;
    margin-left: 0;
  }
`;

export const ListItem = styled.li`
  margin-bottom: 10px;
  font-size: 1rem;
  color: white;
  line-height: 1.6;

  i {
    color: #FF4802;
    margin-right: 10px;
  }
`;


export const ActionButton = styled.button`
  padding: 10px 30px;
  background-color: #fff;
  color: #0a0d50;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #070b3d;
    color: #fff;
  }

  @media (max-width: 768px) {
    padding: 8px 20px;
    font-size: 0.9rem;
  }
`;
