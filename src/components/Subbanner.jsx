import React, { useEffect } from 'react';
import styled from 'styled-components';
import Aos from 'aos';
import 'aos/dist/aos.css';
const Subbanner = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <Mainbanner data-aos="fade-up" data-aos-duration="1000">
      <Stat>
        <Number>140+</Number>
        <Text>Current Clients</Text>
      </Stat>
      <Stat>
        <Number>80+</Number>
        <Text>Employees</Text>
      </Stat>
      <Stat>
        <Number>200+</Number>
        <Text>Task Completed</Text>
      </Stat>
      <Stat>
        <Number>30K</Number>
        <Text>New Followers</Text>
      </Stat>
    </Mainbanner>
  );
};

export default Subbanner;

const Mainbanner = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 250px;
  width: 100%;
  background: linear-gradient(91.62deg, #3F43A7 14.01%, #787DE6 74.38%, #888CD5 125.76%);
  color: white;
  padding: 20px;
  text-align: center;
  max-width: 1200px;
  margin: 20px auto 0 auto;
  box-sizing: border-box;
  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }

  @media (max-width: 425px) {
    height: auto;
  }
`;

const Stat = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Number = styled.p`
  font-size: 2rem;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }

  @media (max-width: 425px) {
    font-size: 1.5rem;
  }
`;

const Text = styled.p`
  font-size: 1.2rem;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 425px) {
    font-size: 0.9rem;
  }
`;
