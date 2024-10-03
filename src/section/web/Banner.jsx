import React from 'react';
import styled from 'styled-components';
import web from '../../../public/webappd.jpg';

const BannerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  margin-top: 70px;
  border-radius: 10px;
  background-color: rgba(10, 13, 80, 1);

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const BannerContent = styled.div`
  text-align: center;
  padding: 1rem;

  @media (min-width: 768px) {
    text-align: left;
    flex: 1;
    padding: 2rem;
  }
`;

const BannerTitle = styled.h1`
  font-size: 2rem;
  color: #fff;

  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

const BannerDetails = styled.div`
  font-size: 1.2rem;
  margin-top: 1rem;
  color: #fff;

  span {
    display: block;
    text-align: left;
  }

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

const BannerDescription = styled.p`
  margin-top: 1.5rem;
  font-size: 1rem;
  color: #fff;
  text-align: left;
  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
`;

const BannerButton = styled.a`
  display: inline-block;
  margin-top: 2rem;
  padding: 0.8rem 2rem;
  background-color: #fff;
  color: rgba(10, 13, 80, 1);
  text-decoration: none;
  font-weight: bold;
  border-radius: 4px;

  &:hover {
    background-color: #ff6347;
  }
`;

const BannerImage = styled.div`
  margin-top: 2rem;
  img {
    width: 100%;
    max-width: 400px;
    height: auto;
    border-radius: 8px;
  }

  @media (min-width: 768px) {
    margin-top: 0;
  }
`;

const Banner = () => {
  return (
    <BannerWrapper>
      <BannerContent>
        <BannerTitle>WEB APP DEVELOPMENT</BannerTitle>
        <BannerDetails>
          <span>Welcome to Our Web Development Services!<br /> Transform Your Ideas Into Reality</span>
        </BannerDetails>
        <BannerDescription>
          At NPNG Tech, we are dedicated to helping you build a powerful online presence with our top-notch web development services. Whether you’re launching a new website or revamping an existing one, our team of experts is here to deliver customized solutions that meet your unique business needs. Explore how we can assist you in creating a website that stands out and drives success.
        </BannerDescription>
        <BannerButton href="#contact">LET'S GET IN TOUCH</BannerButton>
      </BannerContent>
      <BannerImage>
        <img src={web} alt="Technology background" />
      </BannerImage>
    </BannerWrapper>
  );
};

export default Banner;
