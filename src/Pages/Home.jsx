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
import Enquiry from "../components/Enquiry";
import Testimonials from "../components/Testimonial";
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
          <h1 style={{ textAlign: "center", marginBottom: "20px", color: "#f98866", fontWeight: "bold", fontSize: "30px" }}>Contact Us</h1>
          <Enquiry/>
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
