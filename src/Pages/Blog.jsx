import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo1 from "../../public/large.png";
import Logow from "../../public/whatsapp.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Blogs from "../components/Testimonial";
import Footer from "../components/Footer";
import {
  FacebookOutlined,
  InstagramOutlined,
  TwitterOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";
const Blog = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const sectionId = location.state?.sectionId;
    if (sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  const handleLinkClick = (event, sectionId) => {
    event.preventDefault();
    navigate("/", { state: { sectionId } });
  };

  const navlist = [
    { name: "Home", link: "Home", path: "/" },
    { name: "Blogs", navslink: "Blogs", path: "/Blogs" },
  ];

  return (
    <div>
      <Nav>
      <a href="https://wa.me/+917200168369" target="_blank" rel="noopener noreferrer">
       <img src={Logow} alt="logo" style={{ position: "fixed", width: "50px", height: "50px", bottom: "30px", zIndex: "999", right: "20px", marginTop: "0px" }} />
       </a>
        <Container>
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
                  <a
                    className={location.pathname === item.path ? "active" : ""}
                    href={`#${item.link}`}
                    onClick={(e) => handleLinkClick(e, item.link)}
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    onClick={toggleMenu}
                    className={
                      location.pathname.startsWith("/Blogs") ? "active" : ""
                    }
                    to={`/${item.navslink}`}
                  >
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
        </Container>
      </Nav>
      <Blogs />
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
            <FooterLink href=""><Link to={"/Blogs"} onClick={() => window.scrollTo(top, 0)}>Blogs</Link></FooterLink>
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
    </div>
  );
};

export default Blog;

// Styled Components
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
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Container = styled.div`
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
    max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
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
  border-top: 1px solid #444;

  p {
    margin: 0;
    font-size: 14px;
  }
`;
