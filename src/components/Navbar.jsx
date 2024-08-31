import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo1 from "../../public/large.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeId, setActiveId] = useState('Home');
  const sectionsRef = useRef([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // Trigger the callback when 50% of the section is visible
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sectionsRef.current.forEach(section => {
      observer.observe(section);
    });

    return () => {
      sectionsRef.current.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (id) => {
    setActiveId(id);
    setIsOpen(false); // Close the mobile menu after clicking a link

    // Smooth scroll to section
    document.getElementById(id).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  const navlist = [
    { name: "Home", link: "Home" },
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
              <a
                href={`#${item.link}`}
                className={activeId === item.link  ? "active" : ""}
                onClick={() => handleLinkClick(item.link)}
              >
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
  margin-left: 20px;
  position: relative; /* Required for the absolute positioning of the ::after pseudo-element */

  a {
    text-decoration: none;
    color: black;
    font-size: 1rem;
    transition: color 0.3s ease;
    padding: 10px;
    border-radius: 4px;

    &:hover {
      color: #f09d51;
    }

    &.active {
      color: rgba(10, 13, 80, 1);
      font-weight: bold;

      &::after {
        content: '';
        position: absolute;
        bottom: -5px; /* Adjust this value to position the border closer or further from the text */
        left: 50%;
        transform: translateX(-50%);
        width: 25px; /* Fixed width for the border */
        height: 2px; /* Border height */
        border-radius: 3px 0 0 0; /* Rounded corners as specified */
        background-color: rgba(10, 13, 80, 1);
        opacity: 1;
        z-index: 1;
      }
    }
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
