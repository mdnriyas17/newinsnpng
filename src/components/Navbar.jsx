import React, { useState } from "react";
import styled from "styled-components";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo1 from "../../public/large.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (index) => {
    setActiveIndex(index);
    setIsOpen(false); // Close the mobile menu after clicking a link
  };

  const navlist = [
    { name: "Home", link: "#" },
    { name: "About", link: "#About" },
    { name: "Services", link: "#Services" },
    { name: "Contact", link: "#Contact" },
  ];

  return (
    <Nav>
      <Link to="/" style={{ textDecoration: "none" }}>
        <Logo>
          <img src={Logo1} alt="logo" />
          <span style={{fontFamily:"JejuGothic"}}>NPNG Tech</span>
        </Logo>
      </Link>
      <Hamburger onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </Hamburger>
      <Menu isOpen={isOpen}>
        {navlist.map((item, index) => (
          <MenuItem key={index}>
            <a
              href={item.link}
              className={activeIndex === index ? "active" : ""}
              onClick={() => handleLinkClick(index)}
            >
              {item.name}
            </a>
          </MenuItem>
        ))}
      </Menu>
      <SignupButton>
        <Link style={{ textDecoration: "none", color: "inherit" }} to="/signup">
          Sign Up
        </Link>
      </SignupButton>
    </Nav>
  );
};

export default Navbar;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: black;
  height: 60px;
  font-style: normal;
  width: 100%;
  padding: 0 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  background-color: white;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  img {
    height: 40px;
    width: 40px;
    margin-right: 10px;
  }
  span {
    font-size: 1.2rem;
    font-weight: bold;
    color: black;
  }
`;

const Hamburger = styled.div`
  display: none;
  font-size: 1.5rem;
  cursor: pointer;
  @media (max-width: 768px) {
    display: block;
  }
`;

const Menu = styled.ul`
  display: flex;
  gap: 20px;
  color: black;
  list-style: none;
  padding: 0;
  margin: 0;

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? "block" : "none")};
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    background: white;
    padding: 20px;
    text-align: center;
    z-index: 999;
  }
`;

const MenuItem = styled.li`
  list-style: none;

  a {
    text-decoration: none;
    font-size: 1rem;
    color: black;
    position: relative;
    padding-bottom: 2px;

    &:hover {
      color: #f98866;
    }

    &:after {
      content: "";
      display: block;
      width: 0;
      height: 2px;
      // background-color: #f98866;
      transition: width 0.3s;
      position: absolute;
      bottom: 0;
      left: 0;
    }

    &:hover:after {
      width: 100%;
    }

    &.active {
      color: #f98866;
      border-bottom: 1px solid rgba(10, 13, 80, 1);
    }

    &.active:after {
      width: 100%;
    }

    @media (max-width: 768px) {
      display: block;
      padding: 10px 0;
    }
  }
`;

const SignupButton = styled.button`
  background-color: transparent;
  border: 1px solid rgba(10, 13, 80, 1);
  padding: 10px 20px;
  color: rgba(10, 13, 80, 1);
  border-radius: 5px;
  margin-left: 20px;
  cursor: pointer;

  &:hover {
    background-color: rgba(10, 13, 80, 1);
    color: white;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
