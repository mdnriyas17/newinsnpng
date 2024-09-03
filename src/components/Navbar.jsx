import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo1 from "../../public/large.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const navLinks = document.querySelectorAll("nav div ul li a");
      let current = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
          current = section.getAttribute("id");
        }
      });

      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(current)) {
          link.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navlist = [
    { name: "Home", link: "Home", className: "active" },
    { name: "About", link: "About" },
    { name: "Services", link: "Services" },
    { name: "Contact", link: "Contact" },
  ];

  return (
    <Nav>
      <Container>
        <a href="#Home" style={{ textDecoration: "none" }}>
          <Logo>
            <img src={Logo1} alt="logo" />
            <span>NPNG Tech</span>
          </Logo>
        </a>
        <Hamburger onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </Hamburger>
        <Menu isOpen={isOpen}>
          {navlist.map((item, index) => (
            <MenuItem key={index}>
              <a className={item?.className} onClick={toggleMenu} href={`#${item.link}`}>
                {item.name}
              </a>
            </MenuItem>
          ))}
        </Menu>
        <SignupButton>
          <a href="/signup" style={{ textDecoration: "none", color: "inherit" }}>
            Sign Up
          </a>
        </SignupButton>
      </Container>
    </Nav>
  );
};

export default Navbar;

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
  padding: 10px 0 0 0;
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
    max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
    overflow: hidden;
    transition: max-height 0.3s ease-in-out;
  }
`;

const MenuItem = styled.li`
  position: relative; /* Ensure that ::after is positioned relative to this li element */
  display: inline-block; /* Makes the li element a block-level element for positioning */
  margin-left: 20px; /* Adjust margin as needed */

  a {
    text-decoration: none;
    color: black;
    font-size: 1rem;
    transition: color 0.3s ease;
    padding: 10px;
    border-radius: 4px;
    display: block; /* Makes the link a block-level element for better padding and positioning */
    
    &.active {
      font-weight: bold; /* Bold text for the active state */
    }

    &:hover {
      color: #f09d51; /* Color change on hover */
    }
  }

  /* Pseudo-element for the border effect */
  a::after {
    content: '';
    position: absolute;
    bottom: -5px; /* Position the border just below the text */
    left: 50%; /* Center horizontally */
    transform: translateX(-50%); /* Offset the left position by half of its own width to center it */
    width: 25px; /* Fixed width for the border */
    height: 2px; /* Border height */
    border-radius: 3px; /* Rounded corners for the border */
    background-color: rgba(10, 13, 80, 1); /* Border color */
    opacity: 0; /* Initially hide the border */
    transition: opacity 0.3s ease; /* Smooth transition for showing/hiding */
  }

  /* Show the border when the menu item is active */
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
