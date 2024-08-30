import React, { useEffect } from "react";
import image4 from "../../public/Programming.png";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaMobileScreen } from "react-icons/fa6";
import { SiAmazonwebservices } from "react-icons/si";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { LiaIntercom } from "react-icons/lia";
import { TfiCommentAlt } from "react-icons/tfi";
import { RiCustomerService2Line } from "react-icons/ri";
import Aos from "aos";
import "aos/dist/aos.css";
const Ourservicepage = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const ourservices = [
    {
      id: 1,
      title: "Mobile app Development",
      describtion:
        "Elevate your business with our custom mobile applications, engineered for intuitive user experiences, seamless functionality, and lasting impact on the go.",
      image: <FaMobileScreen />,
      button: {
        text: "Read More →",
        link: "/sweeping",
      },
    },
    {
      id: 2,
      title: "Web App Development",
      describtion:
        "Transforming your ideas into powerful web applications with custom development, responsive design, and reliable support, we drive your digital success at NPNG TECH",
      image: <SiAmazonwebservices />,
      button: {
        text: "Read More →",
        link: "/cleaning",
      },
    },
    {
      id: 3,
      title: "Ui/Ux Designs",
      describtion:
        "From sleek and intuitive UI/UX designs to seamless user experiences, we elevate your web applications to captivate and engage users, ensuring optimal digital interaction.",
      image: <HiOutlineBuildingOffice2 />,
      button: {
        text: "Read More →",
        link: "/roofing",
      },
    },
    {
      id: 4,
      title: "E-Commerce Application",
      describtion:
        "Empower your online business with our tailored e-commerce applications, designed for seamless transactions, enhanced customer experiences, and scalable growth.",
      image: <LiaIntercom />,
      button: {
        text: "Read More →",
        link: "/sweeping",
      },
    },
    {
      id: 5,
      title: "POS Softwares",
      describtion:
        "Revolutionize your business operations with our POS software solutions, delivering seamless transactions, robust inventory management, and enhanced customer experiences.",
      image: <TfiCommentAlt />,
      button: {
        text: "Read More →",
        link: "/cleaning",
      },
    },
    {
      id: 6,
      title: "Management Systems",
      describtion:
        "Streamline your business operations with our comprehensive management system, offering efficient workflows, insightful analytics, and seamless collaboration for optimized performance.",
      image: <RiCustomerService2Line />,
      button: {
        text: "Read More →",
        link: "/roofing",
      },
    },
  ];

  return (
    <ServiceContainer id="Services" data-aos="fade-up" data-aos-duration="1000">
      <SectionTitle>
        <h2>
          Popul<Highlighted>ar Se</Highlighted>rvices
        </h2>
        <h1>Services to your business growth</h1>
      </SectionTitle>
      <ServiceList>
        {ourservices.map((ourservice, index) => (
          <ServiceItem
            key={ourservice.id}
            data-aos="fade-up"
            data-aos-duration={index * 1000}
            // Add a delay of 1 second (1000ms) for each item
          >
            {/* <ServiceImage src={ourservice?.image} alt={ourservice.title} /> */}
            <ServiceImage>{ourservice.image}</ServiceImage>
            <ServiceContent>
              <h3>{ourservice.title}</h3>
              <p>{ourservice.describtion}</p>
              <StyledLink to={ourservice.button.link}>
                <ServiceButton>{ourservice.button.text}</ServiceButton>
              </StyledLink>
            </ServiceContent>
          </ServiceItem>
        ))}
      </ServiceList>
    </ServiceContainer>
  );
};

export default Ourservicepage;

const ServiceContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 1024px) {
    width: 100%;
    max-width: 870px;
  }
  @media (max-width: 768px) {
    max-width: 730px;
  }
  @media (max-width: 425px) {
    max-width: 400px;
  }
  @media (max-width: 375px) {
    max-width: 370px;
  }
  @media (max-width: 320px) {
    max-width: 300px;
  }
`;

const SectionTitle = styled.div`
  text-align: center;
  margin-bottom: 40px;

  h2 {
    font-size: 2rem;
    color: #f98866;
    margin-bottom: 10px;
  }

  h1 {
    font-size: 3rem;
    margin: 0;
  }
`;

const Highlighted = styled.span`
  border-bottom: 2px solid rgba(10, 13, 80, 1);
`;

const ServiceList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
`;

const ServiceItem = styled.div`
  background-color: #f9f9f9;
  padding: 20px;
  border: 1px solid rgba(10, 13, 80, 1);
  // border-radius: 8px;
  text-align: center;

  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
`;

const ServiceImage = styled.div`
  font-size: 2rem;
  color: rgba(10, 13, 80, 1);
  background-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  margin-bottom: 20px;
`;

const ServiceContent = styled.div`
  margin-top: 20px;

  h3 {
    font-size: 1.5rem;
    margin-bottom: 10px;
    color: rgba(10, 13, 80, 1);
  }

  p {
    font-size: 1rem;
    color: #666;
    margin-bottom: 20px;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const ServiceButton = styled.button`
  padding: 10px 20px;
  color: #f98866;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  background-color: transparent;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e76f51;
    color: #fff;
  }
`;
