import Blogs from '../components/Blogsingle'
import Navbar from '../components/Navbar'
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo1 from "../../public/large.png";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
    import { useNavigate } from "react-router-dom";
import Footer from '../components/Footer';
const Blog = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

    const location = useLocation();

    useEffect(() => {
        const sectionId = location.state?.sectionId;
        if (sectionId) {
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [location]);

    const navigate = useNavigate();

const handleLinkClick = (event, sectionId) => {
    event.preventDefault();
    console.log(sectionId);
    navigate("/", { state: { sectionId } });
};


    const navlist = [
        { name: "Home", link: "Home" },
        { name: "Blogs", navslink: "Blogs" },
    ];

    return (
        <div style={{ padding: "50px 0", margin: "0 auto" }}>
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
                                {item.link ? (
                                    <a
                                    className=''
                                        href={`#${item.link}`}
                                        onClick={(e) => handleLinkClick(e, item.link)}
                                    >
                                        {item.name}
                                    </a>
                                ) : (
                                    <Link onClick={toggleMenu} to={`/${item.navslink}`}>
                                        {item.name}
                                    </Link>
                                )}
                            </MenuItem>
                        ))}
                    </Menu>
                    <SignupButton>
                        <a
                            href="/signup"
                            style={{ textDecoration: "none", color: "inherit" }}
                        >
                            Sign Up
                        </a>
                    </SignupButton>
                </Container>
            </Nav>
            <Blogs />   
            <Footer />
        </div>
    );
};

export default Blog;

// Styled Components
// (Your styled-components code remains the same)



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
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  box-sizing: border-box;
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