import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Logo1 from "../../public/large.png";
import {
  FacebookOutlined,
  InstagramOutlined,
  TwitterOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";
import Banner from "./mag/Banner"
import Content from "./mag/Content"
import HowWeWork from "./mag/HowWeWork"
import Technology from "./mag/Technology"
import FAQs from "./mag/Faq"
import Logow from "../../public/whatsapp.png"

const Container = styled.div`
  padding: 50px;
  background-color: #f9f9f9;
`;

const Title = styled.h1`
  font-size: 3rem;
  color: #ff6600;
  text-align: center;
  margin-bottom: 40px;
`;

const Subtitle = styled.h2`
  font-size: 2rem;
  color: rgba(10, 13, 80, 1);
  text-align: left;
  margin-bottom: 30px;
`;

const Section = styled.div`
  margin-bottom: 40px;
`;

const List = styled.ul`
  list-style-type: none;
  padding-left: 0;
`;

const ListItem = styled.li`
  font-size: 1.2rem;
  margin-bottom: 10px;
  padding-left: 10px;
  text-align: left;
`;

const Paragraph = styled.p`
  font-size: 1.1rem;
  text-align: left;
  line-height: 1.6;
  margin-bottom: 20px;
`;

const FAQItem = styled.div`
  margin-bottom: 30px;
  text-align: left;
`;

const Question = styled.h3`
  font-size: 1.5rem;
  color: #ff6600;
  text-align: left;
`;

const Answer = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  text-align: left;
`;


const Nav = styled.nav`
  width: 100%;
  background-color: white;
  color: black;
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  height: 70px;
  padding: 10px 0;
`;

const Container1 = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    padding: 0 10px;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 50px;
    height: auto;
    margin-right: 10px;
  }

  span {
    font-size: 1.5rem;
    color: rgba(10, 13, 80, 1);
    font-family: "JejuGothic";
  }
`;

const Hamburger = styled.div`
  display: none;
  font-size: 1.8rem;
  color: rgba(10, 13, 80, 1);
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Menu = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  gap: 50px;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    gap: 0;
    background-color: white;
    max-height: ${({ isOpen }) => (isOpen ? "350px" : "0")};
    overflow: hidden;
    transition: max-height 0.3s ease-in-out;
  }
`;

const MenuItem = styled.li`
  position: relative;
  display: inline-block;
  margin-left: 20px;

  a {
    text-decoration: none;
    color: black;
    font-size: 1rem;
    transition: color 0.3s ease;
    padding: 10px;
    border-radius: 4px;
    display: block;

    &.active {
      font-weight: bold;
    }

    &:hover {
      color: #f09d51;
    }
  }

  a::after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 50%;
    transform: translateX(-50%);
    width: 25px;
    height: 2px;
    border-radius: 3px;
    background-color: rgba(10, 13, 80, 1);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  a.active::after {
    opacity: 1;
  }

  @media (max-width: 768px) {
    margin: 10px 0;

    a {
      font-size: 1.2rem;
    }
  }
`;

const SignupButton = styled.div`
  background-color: white;
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 1rem;
  color: rgba(10, 13, 80, 1);
  cursor: pointer;
  transition: background-color 0.3s ease;
  border: 1px solid rgba(10, 13, 80, 1);

  &:hover {
    background-color: rgba(10, 13, 80, 1);
    color: white;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const FooterContainer = styled.footer`
  color: black;
  padding: 20px;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const FooterSection = styled.div`
  flex: 1;
  padding: 10px;
  min-width: 220px;
`;

const FooterLogo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  img {
    width: 50px;
    height: auto;
    margin-right: 10px;
  }

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const CompanyName = styled.h2`
  font-family: "JejuGothic";
  font-size: 24px;
  font-weight: bold;
  color: black;
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const FooterDescription = styled.p`
  font-size: 16px;
  line-height: 1.5;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const FooterTitle = styled.h3`
  font-size: 20px;
  color: rgba(255, 72, 2, 1);
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterLink = styled.a`
  text-decoration: none;
  margin-bottom: 10px;
  transition: color 0.3s;
  color: black;
  &:hover {
    color: #f98866;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 20px;
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const SocialIcon = styled.a`
  font-size: 24px;
  color: black;
  transition: color 0.3s;

  &:hover {
    color: #f98866;
  }

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const FooterContact = styled.div`
  font-size: 16px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const ContactItem = styled.p`
  margin-bottom: 10px;
`;

const FooterBottom = styled.div`
  text-align: center;
  margin-top: 30px;
  border-top: 1px solid #444;
  padding-top: 20px;

  p {
    margin: 0;
    font-size: 14px;
  }
`;



const ManagementSystems = () => {
    
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const navlist = [
    { name: "Home", link: "/" },
  ];
  return (
    <>
    <Nav>
    <a 
  href="https://wa.me/+917200168369?text=Hi%2C%20I%20want%20some%20services" 
  target="_blank" 
  rel="noopener noreferrer"
>
  <img 
    src={Logow} 
    alt="logo" 
    style={{ 
      position: "fixed", 
      width: "50px", 
      height: "50px", 
      bottom: "30px", 
      zIndex: "999", 
      right: "20px", 
      marginTop: "0px" 
    }} 
  />
</a>
        <Container1>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Logo>
              <img src={Logo1} alt="logo" />
              <span>NPNG Tech</span>
            </Logo>
          </Link>
          <Hamburger onClick={toggleMenu}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </Hamburger>
          <Menu isOpen={isOpen}>
            {navlist.map((item, index) => (
              <MenuItem key={index}>
                {item.link ? (
                  <Link
                  
                    to={`${item.link}`}
                  
                  >
                    {item.name}
                  </Link>
                ) : (
                  <Link onClick={toggleMenu} to={`/${item.navslink}`}>
                    {item.name}
                  </Link>
                )}
              </MenuItem>
            ))}
          </Menu>
          <SignupButton>
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
         
         Sign Up
       </Link>
          </SignupButton>
        </Container1>
      </Nav>
    {/* <Container>
      <Title>Management Systems</Title>
      <Section>
        <Subtitle>Transform Your Business with Our Management Systems</Subtitle>
        <Paragraph>
          Our management systems are designed to streamline and optimize your business operations. From inventory
          management to employee tracking and customer relationship management (CRM), our tailored solutions help
          businesses improve efficiency, reduce manual work, and make informed decisions based on real-time data.
        </Paragraph>
        <Paragraph>
          Whether you need a simple tool or a complex integrated system, we offer the right solution for your needs.
        </Paragraph>
      </Section>

      <Section>
        <Subtitle>What is a Management System?</Subtitle>
        <Paragraph>
          A management system is a software tool that helps businesses manage their day-to-day tasks more easily. It
          handles things like tracking inventory, managing employees, and organizing customer data. By using a
          management system, businesses can improve efficiency, reduce mistakes, and make better decisions.
        </Paragraph>
      </Section>

      <Section>
        <Subtitle>What We Offer</Subtitle>
        <List>
          <ListItem>Custom Management Solutions</ListItem>
          <ListItem>Inventory Management</ListItem>
          <ListItem>Employee Management</ListItem>
          <ListItem>Customer Relationship Management (CRM)</ListItem>
          <ListItem>Reporting and Analytics</ListItem>
        </List>
      </Section>

      <Section>
        <Subtitle>How We Work</Subtitle>
        <List>
          <ListItem>Consultation – We start by understanding your business processes and requirements.</ListItem>
          <ListItem>Planning – We develop a plan to create a management system that fits your needs.</ListItem>
          <ListItem>Development – We build and customize the system, ensuring it integrates seamlessly with your existing tools.</ListItem>
          <ListItem>Implementation – We install and configure the system, ensuring everything works smoothly.</ListItem>
          <ListItem>Training – We train your team to use the system effectively.</ListItem>
          <ListItem>Support – We provide ongoing support and maintenance to ensure your system operates at its best.</ListItem>
        </List>
      </Section>

      <Section>
        <Subtitle>Technologies We Use</Subtitle>
        <Paragraph>
          We use a range of cutting-edge technologies, including Custom Software Platforms, Cloud Integration, Data
          Analytics Tools, and API Integrations to deliver high-quality management systems.
        </Paragraph>
      </Section>

      <Section>
        <Subtitle>FAQs Related to Management Systems</Subtitle>
        <FAQItem>
          <Question>What is a management system?</Question>
          <Answer>
            A management system is a software tool that helps businesses organize, manage, and track their operations,
            such as inventory, employees, and customers.
          </Answer>
        </FAQItem>
        <FAQItem>
          <Question>How will a management system benefit my business?</Question>
          <Answer>
            It streamlines operations, reduces manual work, and provides real-time data, allowing you to make informed
            decisions and improve efficiency.
          </Answer>
        </FAQItem>
        <FAQItem>
          <Question>Can I customize the system to fit my specific needs?</Question>
          <Answer>
            Yes, we provide fully customizable management systems that can be tailored to your business processes.
          </Answer>
        </FAQItem>
        <FAQItem>
          <Question>Is training provided for using the system?</Question>
          <Answer>
            Yes, we offer comprehensive training to ensure your team can use the system effectively.
          </Answer>
        </FAQItem>
        <FAQItem>
          <Question>Do you offer ongoing support?</Question>
          <Answer>
            Yes, we provide continuous support, including maintenance and updates, to keep your system running smoothly.
          </Answer>
        </FAQItem>
      </Section>
    </Container> */}
    <Banner />
      <Content />
      <HowWeWork />
      <Technology />
      <FAQs />
    <FooterContainer id="Contact">
      <FooterContent>
        <FooterSection>
          <FooterLogo>
            <img src={Logo1} alt="logo" />
            <a href="#" style={{ textDecoration: "none" }}>
              <CompanyName>NPNG Tech</CompanyName>
            </a>
          </FooterLogo>
          <FooterDescription>
            Have an idea or an epic project in mind? Talk to us. Let's work
            together and make something great. Drop us a line at
          </FooterDescription>
          <SocialIcons>
            <SocialIcon
              href="https://www.facebook.com/profile.php?id=61556940022825&mibextid=ZbWKwL"
              target="_blank"
            >
              <FacebookOutlined />
            </SocialIcon>
            <SocialIcon
              href="https://www.instagram.com/npng_tech?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
            >
              <InstagramOutlined />
            </SocialIcon>
            <SocialIcon
              href="https://www.linkedin.com/company/npng-tech-work"
              target="_blank"
            >
              <LinkedinOutlined />
            </SocialIcon>
          </SocialIcons>
        </FooterSection>
        {/* 
        <FooterSection>
          <FooterTitle>PRODUCTS</FooterTitle>
          <FooterLinks>
            <FooterLink href="/">Categories</FooterLink>
            <FooterLink href="/about">Elements</FooterLink>
            <FooterLink href="/services">Popular</FooterLink>
            <FooterLink href="/contact">Sale</FooterLink>
          </FooterLinks>
        </FooterSection> */}

        <FooterSection>
          <FooterTitle>Quick Links</FooterTitle>
          <FooterLinks>
            <FooterLink href=""><Link to={"/"} onClick={() => window.scrollTo(top, 0)}>Home</Link> </FooterLink>
          </FooterLinks>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Contact Us</FooterTitle>
          <FooterContact>
            <a href="mailto:hello@npng.in" style={{ textDecoration: "none", color: "black" }}>
              <ContactItem>Email:hello@npng.in</ContactItem>
            </a>
            <a href="tel: +91 7200168369" style={{ textDecoration: "none", color: "black" }}>
              <ContactItem>Phone: +91 7200168369</ContactItem>
            </a>
            <ContactItem>
              Address: No 18, 2nd St, Balakrishnapuram, Adambakkam, Ramapuram,
              Chennai, Tamil Nadu 600088
            </ContactItem>
          </FooterContact>
        </FooterSection>
      </FooterContent>

      <FooterBottom>
        <p>&copy; 2024 NPNG Tech. All rights reserved.</p>
      </FooterBottom>
    </FooterContainer>
    </>
  );
};

export default ManagementSystems;
