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
import Banner from "./ui/Banner";
import Content from "./ui/Content";
import HowWeWork from "./ui/HowWeWork";
import Technology from "./ui/Technology";
import FAQs from "./ui/Faq";
const Mobileapp = () => {
  const data = {
    id: 2,
    title: "UI/UX Designs",
    Subtitle: "Discover Our UI/UX Solutions",
    description:
      "Welcome to our UI/UX design services. We focus on creating intuitive, user-friendly, and visually appealing interfaces that improve user experience and meet your business goals. Our team combines creativity with research-driven design principles to deliver solutions that engage and retain users.",
    sections: [
      {
        id: 1,
        title: "What We Offer",
        listi: [
          {
            id: 1,
            describe:
              "User Research – We gather insights to understand your users and their needs.",
          },
          {
            id: 2,
            describe:
              "Wireframing – We create structural blueprints for your website or app.",
          },
          {
            id: 3,
            describe:
              "Prototyping – We build interactive mockups to visualize the final product.",
          },
          {
            id: 4,
            describe:
              "UI Design – We craft visually appealing interfaces that are easy to use.",
          },
          {
            id: 5,
            describe:
              "UX Strategy – We ensure a smooth and enjoyable user experience.",
          },
          {
            id: 6,
            describe:
              "Usability Testing – We test the design to ensure it meets user expectations.",
          },
        ],
      },
      {
        id: 2,
        title: "How We Work",
        listi: [
          {
            id: 1,
            describe:
              "Discovery – We begin by understanding your business and user needs.",
          },
          {
            id: 2,
            describe:
              "Research – We conduct user research to gather insights and preferences.",
          },
          {
            id: 3,
            describe:
              "Wireframing – We create basic layouts to map out the user journey.",
          },
          {
            id: 4,
            describe:
              "Prototyping – We develop interactive prototypes to visualize the design.",
          },
          {
            id: 5,
            describe:
              "Testing – We perform usability testing to refine the design based on feedback.",
          },
          {
            id: 6,
            describe:
              "Final Design – After revisions, we deliver the final product, ensuring it aligns with your goals.",
          },
        ],
      },
      {
        id: 3,
        title: "Why Choose Us?",
        listi: [
          {
            id: 1,
            describe:
              "We create designs that look great and work perfectly. Our team listens to your needs and makes sure the final product meets your goals.",
          },
          {
            id: 2,
            describe:
              "We focus on making your website or app easy to use and enjoyable for your visitors.",
          },
          {
            id: 3,
            describe:
              "With us, you get a design that stands out and performs well.",
          },
        ],
      },
      {
        id: 4,
        title: "Technologies We Use",
        listi: [
          {
            id: 1,
            describe:
              "Figma – For designing and prototyping, enabling collaborative design and real-time feedback.",
          },
          {
            id: 2,
            describe:
              "Sketch – For creating high-quality UI designs and layouts with a user-friendly interface.",
          },
          {
            id: 3,
            describe:
              "Adobe XD – For building interactive prototypes that demonstrate user flows and interactions.",
          },
          {
            id: 4,
            describe:
              "InVision – For visualizing designs and gathering client feedback with interactive prototypes.",
          },
          {
            id: 5,
            describe:
              "Hotjar – For analyzing user behavior with heatmaps and session recordings to improve user experience.",
          },
          {
            id: 6,
            describe:
              "UsabilityHub – For testing design usability and gathering user opinions to refine our solutions.",
          },
        ],
      },
      {
        id: 5,
        title: "Our Approach to Providing UI/UX Design Services",
        listi: [
          {
            id: 1,
            describe:
              "Understanding Your Needs – We start by learning about your business goals and user needs.",
          },
          {
            id: 2,
            describe:
              "Research and Insights – We conduct research to gather insights about your target audience.",
          },
          {
            id: 3,
            describe:
              "Design and Prototyping – We create wireframes and prototypes to visualize the design and functionality.",
          },
          {
            id: 4,
            describe:
              "User Testing – We test the design with real users to ensure it’s intuitive and effective.",
          },
          {
            id: 5,
            describe:
              "Refinement and Finalization – We refine the design based on feedback and finalize it for delivery.",
          },
          {
            id: 6,
            describe:
              "Launch and Support – We help you launch the design and provide ongoing support to ensure everything runs smoothly.",
          },
        ],
      },
      {
        id: 6,
        title: "FAQs Related to UI/UX Designs",
        listi: [
          {
            id: 1,
            describe:
              "Why is UI/UX design important for my business? Good UI/UX design helps attract and retain users by making your website or app easy to navigate, improving user satisfaction, and boosting engagement.",
          },
          {
            id: 2,
            describe:
              "How long does the design process take? The timeline depends on the complexity of the project. Typically, it can take a few weeks for a small project or several months for larger, more complex designs.",
          },
          {
            id: 3,
            describe:
              "Can I provide feedback during the design process? Yes, we value your input and work collaboratively with you to ensure the final design aligns with your vision and goals.",
          },
          {
            id: 4,
            describe:
              "How does UI/UX design improve my product? A well-designed UI/UX ensures your product is user-friendly, leading to increased user satisfaction, better retention, and improved business outcomes.",
          },
        ],
      },
    ],
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

  const navlist = [{ name: "Home", link: "/" }];

  return (
    <>
      <Nav>
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
      <Title>UI/UX Designs</Title>

      <Section>
        <Subtitle>Discover Our UI/UX Solutions</Subtitle>
        <Paragraph>
          Welcome to our UI/UX design services. We focus on creating intuitive, user-friendly, and visually appealing
          interfaces that improve user experience and meet your business goals. Our team combines creativity with
          research-driven design principles to deliver solutions that engage and retain users.
        </Paragraph>
      </Section>

      <Section>
        <Subtitle>What We Offer</Subtitle>
        <List>
          <ListItem>User Research – We gather insights to understand your users and their needs.</ListItem>
          <ListItem>Wireframing – We create structural blueprints for your website or app.</ListItem>
          <ListItem>Prototyping – We build interactive mockups to visualize the final product.</ListItem>
          <ListItem>UI Design – We craft visually appealing interfaces that are easy to use.</ListItem>
          <ListItem>UX Strategy – We ensure a smooth and enjoyable user experience.</ListItem>
          <ListItem>Usability Testing – We test the design to ensure it meets user expectations.</ListItem>
        </List>
      </Section>

      <Section>
        <Subtitle>How We Work</Subtitle>
        <List>
          <ListItem>Discovery – We begin by understanding your business and user needs.</ListItem>
          <ListItem>Research – We conduct user research to gather insights and preferences.</ListItem>
          <ListItem>Wireframing – We create basic layouts to map out the user journey.</ListItem>
          <ListItem>Prototyping – We develop interactive prototypes to visualize the design.</ListItem>
          <ListItem>Testing – We perform usability testing to refine the design based on feedback.</ListItem>
          <ListItem>Final Design – After revisions, we deliver the final product, ensuring it aligns with your goals.</ListItem>
        </List>
      </Section>

      <Section>
        <Subtitle>Why Choose Us?</Subtitle>
        <Paragraph>
          We create designs that look great and work perfectly. Our team listens to your needs and makes sure the final
          product meets your goals. We focus on making your website or app easy to use and enjoyable for your visitors.
          With us, you get a design that stands out and performs well.
        </Paragraph>
      </Section>

      <Technologies>
        <Subtitle>Technologies We Use</Subtitle>
        <TechList>
          <TechListItem>Figma – For designing and prototyping, enabling collaborative design and real-time feedback.</TechListItem>
          <TechListItem>Sketch – For creating high-quality UI designs and layouts with a user-friendly interface.</TechListItem>
          <TechListItem>Adobe XD – For building interactive prototypes that demonstrate user flows and interactions.</TechListItem>
          <TechListItem>InVision – For visualizing designs and gathering client feedback with interactive prototypes.</TechListItem>
          <TechListItem>Hotjar – For analyzing user behavior with heatmaps and session recordings to improve user experience.</TechListItem>
          <TechListItem>UsabilityHub – For testing design usability and gathering user opinions to refine our solutions.</TechListItem>
        </TechList>
      </Technologies>

      <Section>
        <Subtitle>FAQs Related to UI/UX Designs</Subtitle>
        <FAQItem>
          <Question>Why is UI/UX design important for my business?</Question>
          <Answer>
            Good UI/UX design helps attract and retain users by making your website or app easy to navigate, improving
            user satisfaction, and boosting engagement.
          </Answer>
        </FAQItem>
        <FAQItem>
          <Question>How long does the design process take?</Question>
          <Answer>
            The timeline depends on the complexity of the project. Typically, it can take a few weeks for a small
            project or several months for larger, more complex designs.
          </Answer>
        </FAQItem>
        <FAQItem>
          <Question>Can I provide feedback during the design process?</Question>
          <Answer>
            Yes, we value your input and work collaboratively with you to ensure the final design aligns with your vision
            and goals.
          </Answer>
        </FAQItem>
        <FAQItem>
          <Question>How does UI/UX design improve my product?</Question>
          <Answer>
            A well-designed UI/UX ensures your product is user-friendly, leading to increased user satisfaction, better
            retention, and improved business outcomes.
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

// Styled Components

const Container = styled.div`
  background-color: #f9f9f9;
  text-align: center;
  margin-top: 70px;
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
  text-align: left;
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
  line-height: 1.6;
  margin-bottom: 20px;
`;

const FAQItem = styled.div`
  margin-bottom: 30px;
`;

const Question = styled.h3`
  font-size: 1.5rem;
  color: #ff6600;
`;

const Answer = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
`;

const Technologies = styled.div`
  margin-bottom: 40px;
`;

const TechList = styled.ul`
  list-style-type: none;
  padding-left: 20px;
  font-size: 1.1rem;
`;

const TechListItem = styled.li`
  margin-bottom: 10px;
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

export default Mobileapp;
