import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import styled from "styled-components";
import TechinduBlog from "./TechinduBlog";
import Dgitalblog from "./Dgitalblog";
import Booksblog from "./Booksblog";
const Blogsingle = () => {
  const { id } = useParams();
  const blogId = parseInt(id);
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, [id]); // Triggers when `id` changes

  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return blogId == 1 ? (
    <TechinduBlog />
  ) : blogId == 2 ? (
    <Dgitalblog />
  ) : blogId == 3 ? <Booksblog /> : (
    <h2
      style={{
        textAlign: "center",
        marginTop: "7rem",
        paddingBottom: "3rem",
        fontSize: "2rem",
        color: "red",
      }}
    >
      Blog not found
    </h2>
  );
};

export default Blogsingle;

const BlogContainer = styled.div`
  background-color: white;
  padding-bottom: 3rem;
  padding-top: 4rem;
  box-sizing: border-box;
`;

const ContentWrapper = styled.div`
  max-width: 72rem;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;
  box-sizing: border-box;
  overflow: hidden;
  @media (min-width: 640px) {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  @media (min-width: 1024px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
`;

const Title = styled.h1`
  font-size: 2.25rem;
  font-weight: 800;
  color: rgba(255, 72, 2, 1);
  text-align: center;

  @media (min-width: 640px) {
    font-size: 3rem;
  }
`;

const Description = styled.p`
  margin-top: 1rem;
  font-size: 1.125rem;
  color: #4b5563;
  text-align: center;
`;

const SectionContainer = styled.div`
  margin-top: 2.5rem;
`;

const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`;

const ImageWrapper = styled.div`
  flex: 1;
  padding-right: 0;

  @media (min-width: 768px) {
    padding-right: 2rem;
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 0.5rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
`;

const TextWrapper = styled.div`
  margin-top: 1.5rem;

  @media (min-width: 768px) {
    margin-top: 0;
    padding-left: 2rem;
    flex: 1;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  color: rgba(10, 13, 80, 1);
  margin-bottom: 1rem;
`;
const SectionTitlele = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  text-align: left;
  color: rgba(10, 13, 80, 1);
  margin: 1rem 0 0 0;
`;
const SectionTitleleft = styled.h2`
  font-size: 2.1rem;
  font-weight: 700;
  text-align: left;
  color: rgba(255, 72, 2, 1);
  margin: 4.1rem 0 1rem 0;
`;

const SectionSubTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: rgba(10, 13, 80, 1);
  margin-bottom: 1rem;
`;

const SectionList = styled.ul`
  margin: 0;
  padding: 0;
`;

const SectionContent = styled.p`
  font-size: 1rem;
  color: #374151;
`;
const SectionContentleft = styled.p`
  font-size: 1.07rem;
  font-weight: 400;
  text-align: left;
  color: #374151;
`;
