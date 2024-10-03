
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Logo1 from "../../public/large.png";
import Logow from "../../public/whatsapp.png"
import {
  FacebookOutlined,
  InstagramOutlined,
  TwitterOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";
import Banner from "./digital/Banner";
import Content from "./digital/Content";
import HowWeWork from "./digital/HowWeWork";
import Technology from "./digital/Technology";
import FAQs from "./digital/Faq";

const Mobileapp = () => {
  const data = {
    id: 1,
    title: "Digital Marketing",
    Subtitle: "Maximize Your Online Presence with Our Digital Marketing Services",
    description: "Our digital marketing solutions are designed to help businesses grow by reaching the right audience online. From search engine optimization (SEO) to social media marketing, we offer a range of services tailored to your business goals. Our data-driven approach ensures that you connect with potential customers, increase brand visibility, and achieve measurable results in the digital space.",
    listitem: [
      {
        id: 1,
        title: "Why Your Business Needs Digital Marketing Services?",
        listi: [
          { id: 1, item: "Reach More Customers – Connect with people online where they spend most of their time" },
          { id: 2, item: "Increase Visibility – Make your brand easier to find through search engines and social media." },
          { id: 3, item: "Boost Sales – Drive more traffic to your website and convert visitors into customers." },
          { id: 4, item: "Target the Right Audience – Reach the people most likely to be interested in your products or services." },
          { id: 5, item: "Stay Competitive – Keep up with competitors by using modern marketing strategies." }
        ]
      },
      {
        id: 2,
        title: "What We Offer",
        listi: [
          { id: 1, item: "Search Engine Optimization (SEO)", describe: "Boost your website’s visibility on search engines and drive organic traffic." },
          { id: 2, item: "Social Media Marketing", describe: "Engage with your audience and build brand loyalty on platforms like Facebook, Instagram, and LinkedIn." },
          { id: 3, item: "Content Marketing", describe: "Create and distribute valuable content that attracts and engages your target audience." },
          { id: 4, item: "Pay-Per-Click (PPC) Advertising", describe: "Run targeted ads on platforms like Google Ads to generate leads and increase conversions." },
          { id: 5, item: "Email Marketing", describe: "Nurture customer relationships through personalized email campaigns that drive engagement." },
          { id: 6, item: "Analytics and Reporting", describe: "Track your performance with in-depth analytics to refine and improve your strategies." }
        ]
      },
      {
        id: 3,
        title: "How We Work",
        listi: [
          { id: 1, item: "Consultation", describe: "We start by understanding your business goals and target audience." },
          { id: 2, item: "Strategy", describe: "We develop a custom digital marketing plan to suit your objectives." },
          { id: 3, item: "Implementation", describe: "Our team executes the strategy across various digital channels." },
          { id: 4, item: "Optimization", describe: "We continuously monitor and optimize campaigns to ensure maximum effectiveness." },
          { id: 5, item: "Reporting", describe: "We provide regular reports to keep you informed of your campaign’s success and areas for improvement." },
          { id: 6, item: "Support", describe: "We offer ongoing support to adjust strategies and help you stay ahead in the market." }
        ]
      },
      {
        id: 4,
        title: "Why Choose Us?",
        describe: "We combine expertise with a personalized approach to ensure your business achieves its digital marketing goals. With a focus on measurable results, we work to increase your online visibility and drive conversions. Our commitment to transparency, data-driven strategies, and ongoing support sets us apart, helping you grow your business in the digital landscape."
      },
      {
        id: 5,
        title: "Technologies We Use",
        listi: [
          { id: 1, item: "Google Analytics", describe: "Track and analyze website traffic and user behavior." },
          { id: 2, item: "SEO Tools", describe: "We use advanced tools like Ahrefs and SEMrush to optimize your site’s SEO." },
          { id: 3, item: "Social Media Platforms", describe: "Engage with audiences on platforms like Facebook, Instagram, and LinkedIn." },
          { id: 4, item: "PPC Platforms", describe: "Run targeted ads through platforms like Google Ads and Facebook Ads." },
          { id: 5, item: "Email Marketing Tools", describe: "Manage campaigns through platforms like Mailchimp and HubSpot." },
          { id: 6, item: "CRM Systems", describe: "Integrate with tools like Salesforce to streamline marketing efforts and manage leads." }
        ]
      },
      {
        id: 6,
        title: "FAQ",
        listi: [
          { id: 1, item: "How can digital marketing benefit my business?", describe: "Digital marketing helps increase brand awareness, drive website traffic, generate leads, and improve customer engagement, all leading to higher sales." },
          { id: 2, item: "What types of digital marketing services do you offer?", describe: "We offer SEO, social media marketing, content marketing, PPC advertising, email marketing, and more to help your business succeed online." },
          { id: 3, item: "Can I track the results of my digital marketing campaigns?", describe: "Yes, we provide detailed analytics and reporting, allowing you to see the performance of your campaigns and make data-driven decisions." },
          { id: 4, item: "How do you ensure my digital marketing strategy is effective?", describe: "We continuously monitor, analyze, and optimize your campaigns to ensure they meet your business goals and deliver the best possible results." }
        ]
      }
    ]
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const sections = document.querySelectorAll("section");
  //     const navLinks = document.querySelectorAll("nav div ul li a");
  //     let current = "";

  //     sections.forEach((section) => {
  //       const sectionTop = section.offsetTop - 70; // Adjust for fixed navbar height
  //       const sectionHeight = section.clientHeight;
  //       if (
  //         window.scrollY >= sectionTop &&
  //         window.scrollY < sectionTop + sectionHeight
  //       ) {
  //         current = section.getAttribute("id");
  //       }
  //     });

  //     navLinks.forEach((link) => {
  //       link.classList.remove("active");
  //       if (link.getAttribute("href").includes(current)) {
  //         link.classList.add("active");
  //       }
  //     });
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

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
        <MainTitle>{data.title}</MainTitle>
        <Subtitle>{data?.Subtitle}</Subtitle>
        <Description>{data?.description}</Description>
        {data?.listitem?.map((item) => (
          <Section key={item.id}>
            <SectionTitle>{item?.title}</SectionTitle>
            <Description>{item?.describe}</Description>

            <List>
              {item?.listi?.map((listItem) => (
                <ListItem key={listItem.id}>
                  {listItem?.item}
                  {listItem?.describe && <Description>{listItem?.describe}</Description>}
                </ListItem>
              ))}
            </List>
          </Section>
        ))}
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

// Styled Components
const Container = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 70px;
`;

const ContentWrapper = styled.div`
  text-align: left;
  margin: 70px auto;
  padding: 0 20px;
`;

const MainTitle = styled.h1`
  color: orange;
  font-size: 2.5rem;
  margin-bottom: 10px;
  text-align: center;
`;

const Subtitle = styled.h2`
  color: rgba(10, 13, 80, 1);
  font-size: 1.5rem;
  margin-bottom: 20px;
  font-weight: 600;
  font-weight: bold;
  text-align: left;
`;

const Description = styled.p`
  font-size: 1rem;
  margin-bottom: 20px;
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
  font-weight: bold;
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


export default Mobileapp;
