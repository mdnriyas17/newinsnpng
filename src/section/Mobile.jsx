
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
import Logow from "../../public/whatsapp.png"
import Banner from "./mobile/Banner"
import Content from "./mobile/Content"
import HowWeWork from "./mobile/HowWeWork"
import Technology from "./mobile/Technology"
import FAQs from "./mobile/Faq"
const MobileApp = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
    const navlist = [
        { name: "Home", link: "/" },
      ];
  const data = {
    id: 1,
    title: "Mobile App Development",
    Subtitle: "Transform Your Ideas into Reality",
    description: "Welcome to our Mobile App Development page! Here, we turn innovative ideas into fully functional mobile applications that delight users and achieve your business goals.",
    listitem: [
      {
        id: 1,
        title: "What is Mobile App Development?",
        listi: [
          { id: 1, describe: "Mobile app development refers to the process of designing and creating software applications that run on mobile devices such as smartphones and tablets." },
          { id: 2, describe: "These apps can be designed for various platforms, such as iOS (Apple devices like iPhones) or Android (Google’s operating system), or they can be developed to work across multiple platforms." }
        ]
      },
      {
        id: 2,
        title: "Mobile App Development: Bringing Your Vision to Life",
        listi: [
          { id: 1, describe: "Concept and Planning: Define Your Vision - Every great app starts with a clear idea. We work with you to understand the core purpose of your app, identify the target audience, and outline key features." },
          { id: 2, describe: "UI/UX Design: Crafting an Engaging Experience - Our design process focuses on creating a user-friendly and visually appealing app. From wireframes to the final design, we ensure that the app is intuitive and visually aligned with your brand." },
          { id: 3, describe: "Development: Building Your App - With the design in place, we move on to development. Whether you need a native, cross-platform, or hybrid app, our team uses the latest technologies and coding practices to bring your app to life." },
          { id: 4, describe: "Testing: Ensuring Quality and Reliability - Thorough testing is essential to deliver a flawless app. We conduct various tests to check functionality, performance, and usability." },
          { id: 5, describe: "Deployment: Launching with Confidence - Once testing is complete, we prepare your app for launch. This involves submission to app stores and final checks." },
          { id: 6, describe: "Maintenance and Updates: Ongoing Support and Enhancement - Post-launch, we provide continuous support to address any issues and implement updates." }
        ]
      },
      {
        id: 3,
        title: "What is a Mobile App Development Framework?",
        listi: [
          { id: 1, describe: "Native Frameworks: Used to build apps for specific platforms like iOS or Android (e.g., Swift for iOS, Kotlin for Android)." },
          { id: 2, describe: "Cross-Platform Frameworks: Allow developers to build apps for multiple platforms using a single codebase (e.g., React Native, Flutter)." }
        ]
      },
      {
        id: 4,
        title: "Causes of Mobile App Development",
        listi: [
          { id: 1, describe: "Enhanced User Engagement: Connect directly with customers and keep them engaged with personalized content and notifications." },
          { id: 2, describe: "Better Customer Service: Offer support through features like chat and FAQs, improving customer satisfaction." },
          { id: 3, describe: "Increased Brand Visibility: Boost your brand’s presence by making your products or services easily accessible on mobile devices." },
          { id: 4, describe: "Revenue Opportunities: Generate income through in-app purchases, subscriptions, or ads." },
          { id: 5, describe: "Competitive Edge: Stand out from competitors by providing a convenient and accessible user experience." },
          { id: 6, describe: "Valuable Data Insights: Collect and analyze user data to refine your services and marketing strategies." }
        ]
      },
      {
        id: 5,
        title: "Latest Trends in Mobile App Development",
        listi: [
          { id: 1, describe: "AI and Machine Learning: Smart apps that personalize experiences and automate tasks." },
          { id: 2, describe: "5G Technology: Faster connectivity for improved app performance and real-time interactions." },
          { id: 3, describe: "AR and VR: Immersive experiences in gaming, shopping, and education." },
          { id: 4, describe: "Cross-Platform Tools: Building apps for multiple platforms with a single codebase (e.g., Flutter, React Native)." },
          { id: 5, describe: "IoT Integration: Connecting apps to smart devices and wearables." },
          { id: 6, describe: "Blockchain: Enhanced security and transparency in transactions." },
          { id: 7, describe: "Advanced Security: Features like biometric authentication and encryption." },
          { id: 8, describe: "Voice and Chat Interfaces: Using voice assistants and chatbots for easier interactions." }
        ]
      },
      {
        id: 6,
        title: "FAQs Related to Mobile App Development",
        listi: [
          { id: 1, item: "Why is mobile app development important for my business?", describe: "Mobile apps give direct access to your products or services, boost customer engagement, and increase brand visibility." },
          { id: 2, item: "How long does it take to develop a mobile app?", describe: "The development time varies based on the app's complexity. Simple apps may take 2-3 months, while more complex apps can take 6-12 months or longer." },
          { id: 3, item: "What are the main types of mobile app development?", describe: "The main types are native development, cross-platform development, and hybrid development." },
          { id: 4, item: "How much does it cost to develop a mobile app?", describe: "The cost depends on the app’s complexity, features, and platform. It's best to discuss your specific needs to get an accurate estimate." }
        ]
      }
    ]
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
        <Title>{data.title}</Title>
        <Subtitle>{data.Subtitle}</Subtitle>
        <Description>{data.description}</Description>

        {data.listitem.map((item) => (
          <Section key={item.id}>
            <SectionTitle>{item.title}</SectionTitle>
            <List>
              {item.listi.map((listItem) => (
                <ListItem key={listItem.id}>
                  <strong style={{ marginRight: "10px" }}>{listItem.item}</strong>
                  {listItem.describe && <Description>{listItem.describe}</Description>}
                </ListItem>
              ))}
            </List>
          </Section>
        ))}
      </Container> */}
      <Container>
      <Banner />
      <Content />
      <HowWeWork />
      <Technology />
      <FAQs />
      </Container>
     
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
  color:black
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


export default MobileApp;
