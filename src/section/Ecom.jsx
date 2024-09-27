import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo1 from "../../public/large.png";
import { useLocation } from "react-router-dom";
import {
  FacebookOutlined,
  InstagramOutlined,
  TwitterOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";
import Logow from "../../public/whatsapp.png"

import Banner from "./ecom/Banner";
import Content from "./ecom/Content";
import HowWeWork from "./ecom/HowWeWork";
import Technology from "./ecom/Technology";
import FAQs from "./ecom/Faq";

const ecomData = {
  title: "E-Commerce Applications",
  subtitle: "Welcome to Our E-commerce Solutions",
  description:
    "We create custom e-commerce applications that help your business succeed online. Our solutions are designed to be user-friendly and effective, with features like secure payment options and intuitive shopping experiences. We use the latest technology to build online stores that look great and work seamlessly, ensuring your customers have a positive shopping experience.",
  faqDescription:
    "An e-commerce application is a software platform that allows businesses to sell products or services online. It provides features for managing product listings, processing transactions, handling payments, and tracking orders. E-commerce applications are designed to offer a seamless shopping experience for users, making it easy to browse, select, and purchase items from any device.",
  sections: [
    {
      id: 1,
      title: "What We Offer",
      listItems: [
        "Custom E-commerce Solutions – Tailored platforms to fit your business needs.",
        "Shopping Cart Integration – User-friendly and secure carts for smooth transactions.",
        "Payment Gateway Setup – Integration with various payment methods for secure transactions.",
        "Product Catalog Management – Easy management of product listings and organization.",
        "Mobile Optimization – Designs optimized for seamless mobile shopping experiences.",
        "Order Management System – Tools to track and manage orders and inventory.",
        "User Account Management – Features for customers to create accounts and save preferences.",
        "Security Features – SSL certificates and encryption to protect data and transactions.",
        "Analytics and Reporting – Insights into sales and customer behavior to guide decisions.",
        "Ongoing Support and Maintenance – Regular updates and support to keep your application running smoothly.",
      ],
    },
    {
      id: 2,
      title: "How We Work",
      steps: [
        "Discovery and Planning – We begin by understanding your business requirements and goals. We then create a detailed plan outlining the project scope, timeline, and key features.",
        "Design – Our team designs user-friendly and visually appealing e-commerce interfaces. We create wireframes and prototypes to illustrate the layout and functionality.",
        "Development – We build the e-commerce application, integrating essential features like shopping carts, payment gateways, and product management systems.",
        "Testing – We rigorously test the application to ensure it is functional, secure, and provides a seamless user experience. We identify and fix any issues before launch.",
        "Launch – We assist with the launch of your e-commerce application, ensuring it is live and fully operational. We provide support to handle any immediate post-launch concerns.",
        "Ongoing Support – After launch, we offer continued support and maintenance to keep your application running smoothly. We make updates, fix issues, and implement improvements based on user feedback.",
      ],
    },
    {
      id: 3,
      title: "Why Choose Us?",
      listItems: [
        "We create custom e-commerce solutions that fit your needs perfectly. Our team uses the latest technologies to build secure and high-performing online stores.",
        "We work closely with you throughout the process to ensure everything meets your expectations.",
        "With our focus on quality and customer satisfaction, we help you stand out and succeed online.",
      ],
    },
    {
      id: 4,
      title: "Technologies We Use",
      listItems: [
        "Shopify, Magento, WooCommerce, and BigCommerce for creating online stores.",
        "Stripe and PayPal for secure payment processing.",
        "Google Analytics for tracking user behavior and sales performance.",
        "AWS for scalable cloud hosting and storage.",
        "React for dynamic user interfaces.",
        "Node.js for efficient server-side operations.",
      ],
    },
    {
      id: 5,
      title: "FAQs Related to E-Commerce Applications",
      faqs: [
        {
          question: "Why is having an e-commerce application important?",
          answer:
            "An e-commerce application helps you reach more customers, streamline sales processes, and manage your online store efficiently, which can boost sales and grow your business.",
        },
        {
          question: "How do I get started?",
          answer:
            "Contact us to discuss your e-commerce needs. We’ll set up an initial consultation to understand your requirements and provide a plan to get started.",
        },
        {
          question:
            "How long does it take to develop an e-commerce application?",
          answer:
            "Development time varies based on the complexity of the project. Generally, it takes a few weeks to several months from initial consultation to launch.",
        },
        {
          question:
            "How much does it cost to develop an e-commerce application?",
          answer:
            "Costs depend on the scope and complexity of the application. We provide a detailed quote based on your specific requirements.",
        },
        {
          question:
            "Can I update my e-commerce application after it’s launched?",
          answer:
            "Yes, we offer ongoing support and maintenance to update and improve your application as needed.",
        },
      ],
    },
  ],
};

const Container = styled.div`
  padding: 40px;
  margin-top: 70px;
  background-color: #f9f9f9;
  font-family: "Arial", sans-serif;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #f97316; /* Orange color for title */
  margin-bottom: 10px;
`;

const Subtitle = styled.h2`
  text-align: left;
  font-size: 2rem;
  color: rgba(10, 13, 80, 1); /* Blue color for subtitle */
  margin-bottom: 20px;
`;

const Description = styled.p`
  text-align: left;
  font-size: 1.2rem;
  color: #333;
  line-height: 1.8;
  margin-bottom: 30px;
`;

const Section = styled.div`
  text-align: left;
  margin-bottom: 40px;
`;

const SectionTitle = styled.h3`
  text-align: left;
  font-size: 1.8rem;
  color: #111;
  margin-bottom: 20px;
`;

const List = styled.ul`
  text-align: left;
  list-style-type: none;
  margin-left: 20px;
`;

const ListItem = styled.li`
  text-align: left;
  font-size: 1.2rem;
  margin-bottom: 10px;
  color: #555;
`;

const Step = styled.div`
  font-size: 1.2rem;
  margin-bottom: 15px;
`;

const FAQsContainer = styled.div`
  margin-top: 30px;
`;

const FAQ = styled.div`
  margin-bottom: 20px;
`;

const Question = styled.h4`
  text-align: left;
  font-size: 1.5rem;
  color: #222;
`;

const Answer = styled.p`
  text-align: left;
  font-size: 1.2rem;
  color: #444;
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

const EcommerceApplications = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navlist = [{ name: "Home", link: "/" }];
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
                  <Link to={`${item.link}`}>{item.name}</Link>
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
      <Title>{ecomData.title}</Title>
      <Subtitle>{ecomData.subtitle}</Subtitle>
      <Description>{ecomData.description}</Description>

      {ecomData.sections.map((section) => (
        <Section key={section.id}>
          <SectionTitle>{section.title}</SectionTitle>

          {section.listItems ? (
            <List>
              {section.listItems.map((item, index) => (
                <ListItem key={index}>{item}</ListItem>
              ))}
            </List>
          ) : (
            section.steps &&
            section.steps.map((step, index) => (
              <Step key={index}>{step}</Step>
            ))
          )}
        </Section>
      ))}

      <FAQsContainer>
        {ecomData.sections[4].faqs.map((faq, index) => (
          <FAQ key={index}>
            <Question>{faq.question}</Question>
            <Answer>{faq.answer}</Answer>
          </FAQ>
        ))}
      </FAQsContainer>
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
              <FooterLink href="">
                <Link to={"/"} onClick={() => window.scrollTo(top, 0)}>
                  Home
                </Link>{" "}
              </FooterLink>
            </FooterLinks>
          </FooterSection>

          <FooterSection>
            <FooterTitle>Contact Us</FooterTitle>
            <FooterContact>
              <a
                href="mailto:hello@npng.in"
                style={{ textDecoration: "none", color: "black" }}
              >
                <ContactItem>Email:hello@npng.in</ContactItem>
              </a>
              <a
                href="tel: +91 7200168369"
                style={{ textDecoration: "none", color: "black" }}
              >
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

export default EcommerceApplications;
