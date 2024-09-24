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
import Logo from "../../public/whatsapp.png";
const Home = () => {
  return (
    <>
        <Navbar />
       <a href="https://wa.me/+917200168369" target="_blank" rel="noopener noreferrer">
       <img src={Logo} alt="logo" style={{ position: "fixed", width: "50px", height: "50px", bottom: "30px", zIndex: "999", right: "20px", marginTop: "0px" }} />
       </a>
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
  padding: 60px 20px 0px 20px;
  @media screen and (min-width: 768px) {
    padding: 60px 20px 0px 20px;
  }
`;


export default Home;
