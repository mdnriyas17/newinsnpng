import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Aboutus from "../components/Aboutus";
import Services from "../components/Services";
import Midabout from "../components/Midabout";
import Footer from "../components/Footer";
import { Route, Routes } from "react-router-dom";
import Subbanner from "../components/Subbanner";
import styled from "styled-components";
const Home = () => {
  return (
    <>
        <Navbar />
        <Section id="Home">
          <Banner />
        </Section>
        <Section id="About">
          <Aboutus />
        </Section>
        <Section id="Services">
          <Services />
          <Subbanner />
          <Midabout />
        </Section>
        <Section id="Contact">
          <Footer />
        </Section>
    </>
  );
};
const Section = styled.section`
  padding: 60px 20px;
  @media screen and (min-width: 768px) {
    padding: 60px 40px;
  }
`;


export default Home;
