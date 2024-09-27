import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import styled from "styled-components";
import Logo1 from "../../public/large.png";
import Logow from "../../public/whatsapp.png"

import {
  FacebookOutlined,
  InstagramOutlined,
  TwitterOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";
import Banner from "./web/Banner";
import Content from "./web/Content";
import HowWeWork from "./web/HowWeWork";
import Technology from "./web/Technology";
import FAQs from "./web/Faq";
const MobileApp = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navlist = [
    { name: "Home", link: "/" },
    // Add more navigation items here
  ];

  const data = {
    id: 1,
    title: "Mobile App Development",
    Subtitle: "Transform Your Ideas into Reality",
    description:
      "Welcome to our Mobile App Development page! Here, we turn innovative ideas into fully functional mobile applications that delight users and achieve your business goals.",
    listitem: [
      {
        id: 1,
        title: "What is Mobile App Development?",
        listi: [
          {
            id: 1,
            describe:
              "Mobile app development refers to the process of designing and creating software applications that run on mobile devices such as smartphones and tablets.",
          },
          {
            id: 2,
            describe:
              "These apps can be designed for various platforms, such as iOS (Apple devices like iPhones) or Android (Google’s operating system), or they can be developed to work across multiple platforms.",
          },
        ],
      },
      {
        id: 2,
        title: "Benefits of Mobile App Development",
        listi: [
          {
            id: 1,
            describe:
              "Increased Accessibility: Mobile apps provide users with a convenient way to access services and information on the go.",
          },
          {
            id: 2,
            describe:
              "Enhanced User Engagement: Apps can engage users through notifications and personalized content.",
          },
          {
            id: 3,
            describe:
              "Offline Functionality: Many apps offer features that can be used offline, providing a better user experience.",
          },
        ],
      },
      {
        id: 3,
        title: "Our Development Process",
        listi: [
          {
            id: 1,
            describe:
              "Discovery: We start by understanding your business needs and goals to create a detailed project plan.",
          },
          {
            id: 2,
            describe:
              "Design: Our design team creates user-friendly and visually appealing interfaces.",
          },
          {
            id: 3,
            describe:
              "Development: We use the latest technologies to build a robust and scalable app.",
          },
          {
            id: 4,
            describe:
              "Testing: Rigorous testing ensures that your app functions seamlessly across all devices.",
          },
          {
            id: 5,
            describe:
              "Launch: We assist with app store submissions and launch strategies.",
          },
          {
            id: 6,
            describe:
              "Maintenance: Ongoing support and updates to keep your app performing at its best.",
          },
        ],
      },
      {
        id: 4,
        title: "Case Studies",
        listi: [
          {
            id: 1,
            describe:
              "E-Commerce App: Developed a user-friendly app for a leading e-commerce platform, resulting in a 30% increase in sales.",
          },
          {
            id: 2,
            describe:
              "Fitness App: Created a fitness tracking app that gained 50,000 downloads within the first three months.",
          },
          {
            id: 3,
            describe:
              "Travel App: Designed an app for a travel agency that streamlined booking and increased customer engagement.",
          },
        ],
      },
      {
        id: 5,
        title: "Why Choose Us?",
        listi: [
          {
            id: 1,
            describe:
              "Experienced Team: Our team has years of experience in mobile app development.",
          },
          {
            id: 2,
            describe:
              "Custom Solutions: We provide tailored solutions to meet your specific needs.",
          },
          {
            id: 3,
            describe:
              "Quality Assurance: We ensure high-quality standards in every project we undertake.",
          },
          {
            id: 4,
            describe:
              "Timely Delivery: We adhere to deadlines and deliver projects on time.",
          },
        ],
      },
    ],
  };

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
                <Link to={item.link} onClick={toggleMenu}>
                  {item.name}
                </Link>
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
      {/* <WebDevContainer>
      <Title>Web Development</Title>
      <Subtitle>Welcome to Our Web Development Services</Subtitle>
      <Text>
        At NPNG Tech, we are dedicated to helping you build a powerful online presence with our top-notch web development services. Whether you’re launching a new website or revamping an existing one, our team of experts is here to deliver customized solutions that meet your unique business needs. Explore how we can assist you in creating a website that stands out and drives success.
      </Text>

      <SectionTitle>What are web development services?</SectionTitle>
      <Text>
        Web development includes creating custom websites, responsive designs, e-commerce platforms, and content management systems. We also offer website redesigns and build custom web applications tailored to your business needs.
      </Text>

      <SectionTitle>How We Work</SectionTitle>
      <WorkProcessSection>
        <Text>
          Our web development process is designed to ensure a smooth and successful project. It starts with a consultation to understand your business objectives and project requirements. We then create a detailed plan and timeline to guide the development process.
        </Text>
        <Text>
          The design phase focuses on crafting a user-friendly and visually appealing layout that aligns with your brand. Once the design is approved, we move on to development, where we build the site using the latest technology to ensure reliability and performance.
        </Text>
        <Text>
          After thorough testing to fix any issues, we launch your website and monitor its performance. Our commitment doesn’t end there; we provide ongoing support and maintenance to keep your site updated and running smoothly.
        </Text>
      </WorkProcessSection>

      <SectionTitle>Why Choose Us?</SectionTitle>
      <WhyChooseUsSection>
        <Text>
          Choosing us means you’re getting a dedicated team that focuses on delivering high-quality results. We use the latest technology to create custom websites and applications that fit your specific needs. Our process is designed to be efficient and transparent, from planning to launch, and we provide ongoing support to ensure everything runs smoothly. With us, you get a partner committed to understanding your goals and helping you achieve them.
        </Text>
      </WhyChooseUsSection>

      <SectionTitle>Technologies We Use</SectionTitle>
      <TechnologySection>
        <Text>
          We use modern technologies to build high-quality websites. For creating the site’s design and structure, we use HTML, CSS, and JavaScript. To make websites interactive and dynamic, we use frameworks like React or Angular. For the backend, we work with tools like Node.js or PHP to handle data and functionality. We also use WordPress and other content management systems (CMS) to make it easy for you to update your site. For online stores, we rely on platforms like Shopify. We ensure your site is secure with the latest security measures and keep everything organized with Git for version control.
        </Text>
      </TechnologySection>

      <SectionTitle>FAQs Related to Web Development</SectionTitle>
      <FAQSection>
        <FAQItem>
          <FAQQuestion>Why is having a website important for my business?</FAQQuestion>
          <FAQAnswer>
            A website helps establish your online presence, attract potential customers, and provide information about your products or services. It also improves your credibility and allows you to reach a wider audience.
          </FAQAnswer>
        </FAQItem>

        <FAQItem>
          <FAQQuestion>How long does it take to build a website?</FAQQuestion>
          <FAQAnswer>
            The timeline for building a website depends on its complexity and the features you want. A basic website might take a few weeks, while more complex sites with custom features can take several months.
          </FAQAnswer>
        </FAQItem>

        <FAQItem>
          <FAQQuestion>How much does web development cost?</FAQQuestion>
          <FAQAnswer>
            The cost of web development varies based on the size and complexity of the project. Factors such as design, functionality, and the need for custom features can influence the price. We provide a detailed quote after discussing your requirements.
          </FAQAnswer>
        </FAQItem>

        <FAQItem>
          <FAQQuestion>Will my website be mobile-friendly?</FAQQuestion>
          <FAQAnswer>
            Yes, we ensure that all websites are designed to be responsive, meaning they will look and work well on smartphones, tablets, and desktops.
          </FAQAnswer>
        </FAQItem>

        <FAQItem>
          <FAQQuestion>How can I improve my website’s search engine ranking?</FAQQuestion>
          <FAQAnswer>
            We use search engine optimization (SEO) techniques to help improve your website's visibility on search engines. This includes optimizing content, using relevant keywords, and ensuring good site structure.
          </FAQAnswer>
        </FAQItem>
      </FAQSection>
    </WebDevContainer> */}
      <Banner  />
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
          <FooterSection>
            <FooterTitle>Quick Links</FooterTitle>
            <FooterLinks>
              <FooterLink href="#">
                <Link to={"/"} onClick={() => window.scrollTo({ top: 0 })}>
                  Home
                </Link>
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
                <ContactItem>Email: hello@npng.in</ContactItem>
              </a>
              <a
                href="tel:+917200168369"
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

const WebDevContainer = styled.div`
  margin-top: 70px;
  background-color: #f4f4f4;
  color: #333;
  line-height: 1.6;
`;

// Subtitle or heading

// Paragraph for general text
const Text = styled.p`
  font-size: 1.1rem;
  margin-bottom: 20px;
  text-align: left;
  color: #333;
`;

// Section for "What are web development services?"

// Unordered list for the services

// Section for "How We Work"
const WorkProcessSection = styled.div`
  margin-top: 40px;
`;

// "Why Choose Us?" section
const WhyChooseUsSection = styled.div`
  background-color: #fff;
`;

// Technology section
const TechnologySection = styled.div``;

// FAQ section
const FAQSection = styled.div`
  margin-top: 40px;
`;

// Individual FAQ item
const FAQItem = styled.div`
  margin-bottom: 20px;
`;

// Styled FAQ question
const FAQQuestion = styled.h4`
  font-size: 1.2rem;
  color: rgba(10, 13, 80, 1);
  text-align: left;
`;

// Styled FAQ answer
const FAQAnswer = styled.p`
  font-size: 1.1rem;
  color: #333;
  text-align: left;
`;
// Styled Components
const Container = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 70px;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: orange;
  margin-bottom: 20px;
  text-align: center;
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  color: rgba(10, 13, 80, 1);
  margin-bottom: 20px;
  text-align: left;
`;

const Description = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  text-align: left;
  color: black;
`;

const Section = styled.section`
  margin-bottom: 40px;
`;

const SectionTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 5px;
  color: rgba(10, 13, 80, 1);
  font-weight: 600;
  text-align: left;
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ListItem = styled.li`
  font-size: 1rem;
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

    &:hover {
      color: orange;
      background-color: rgba(10, 13, 80, 0.1);
    }
  }

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const SignupButton = styled.button`
  background-color: rgba(10, 13, 80, 1);
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;

  a {
    text-decoration: none;
    color: white;
  }
    @media (max-width: 768px) {
    display: none;
}
`;

const FooterContainer = styled.footer`
  background-color: white;
  padding: 40px 20px;
  margin-top: 40px;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
`;

const FooterSection = styled.div`
  flex: 1;
  padding: 20px;
  min-width: 200px;
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
`;

const CompanyName = styled.span`
  font-size: 1.5rem;
  color: rgba(10, 13, 80, 1);
`;

const FooterDescription = styled.p`
  font-size: 0.9rem;
  margin-bottom: 20px;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 10px;
`;

const SocialIcon = styled.a`
  font-size: 1.5rem;
  color: rgba(10, 13, 80, 1);
  transition: color 0.3s ease;

  &:hover {
    color: orange;
  }
`;

const FooterTitle = styled.h4`
  font-size: 1.2rem;
  margin-bottom: 15px;
  color: rgba(10, 13, 80, 1);
`;

const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterLink = styled.a`
  font-size: 1rem;
  color: black;
  text-decoration: none;
  // margin-bottom: 10px;

  &:hover {
    color: orange;
  }
`;

const FooterContact = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContactItem = styled.p`
  font-size: 1rem;
  color: black;
  // margin-bottom: 10px;
`;

const FooterBottom = styled.div`
  text-align: center;
  border-top: 1px solid #ddd;

  p {
    font-size: 0.8rem;
    color: black;
  }
`;

export default MobileApp;
