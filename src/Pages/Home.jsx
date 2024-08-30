import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Aboutus from "../components/Aboutus";
import Services from "../components/Services";
import Midabout from "../components/Midabout";
import Footer from "../components/Footer";
import { Route, Routes } from "react-router-dom";
import Subbanner from "../components/Subbanner";
const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Aboutus />
      <Services />
      <Subbanner />
      <Midabout/>
      <Footer />
    </>
  );
};

export default Home;
