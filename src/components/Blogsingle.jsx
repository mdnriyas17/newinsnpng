import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import styled from "styled-components";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";
import image5 from "../assets/image5.png";
import image6 from "../assets/image6.png";
import image7 from "../assets/image7.png";
import image8 from "../assets/image8.png";



const Blogsingle = () => {
  const { id } = useParams();
  const blogId = parseInt(id);

  const data = [
    {
      id: 1,
      title: "The Importance of Continuous Learning in the Tech Industry",
      description:
        "In the fast-paced world of technology, standing still is not an option. The tech industry is characterized by rapid advancements, evolving tools, and shifting paradigms, making continuous learning an essential practice for tech professionals. Whether you're a software developer, data analyst, or IT specialist, staying updated with the latest trends and skills is crucial for career growth and success.",
      content: [
        {
          id: 1,
          title: "The Ever-Evolving Tech Landscape",
          content:
            "Technology is advancing at an unprecedented rate. New programming languages, frameworks, and tools are constantly emerging, while older technologies become obsolete. For example, the rise of cloud computing has transformed how we approach software development, while AI and machine learning are redefining data analytics and automation. To remain relevant and competitive, tech professionals must continuously update their knowledge and adapt to these changes.",
          images: image1,
        },
        {
          id: 2,
          title: "Enhancing Skill Sets and Career Opportunities",
          content:
            "Continuous learning not only helps in keeping your existing skills sharp but also opens doors to new opportunities. By learning new technologies and methodologies, you position yourself for career advancement and can explore new roles within the industry. For instance, a front-end developer who acquires skills in back-end development can transition to a full stack role, broadening their career prospects.",
          images: image2,
        },
        {
          id: 3,
          title: "Staying Ahead of the Competition",
          content:
            "In a competitive job market, having up-to-date skills can set you apart from other candidates. Employers value professionals who proactively seek out new knowledge and demonstrate a commitment to their field. Continuous learning can give you an edge over peers who may be less proactive in their professional development.",
          images: image3,
        },
        {
          id: 4,
          title: "Adapting to Industry Changes",
          content:
            "The tech industry is dynamic, with new trends and regulations influencing how we work. Continuous learning helps professionals adapt to these changes effectively. Whether it's understanding new privacy laws, cybersecurity threats, or industry standards, staying informed ensures you can navigate these shifts smoothly.",
          images: image4,
        },
        {
          id: 5,
          title: "Fostering Innovation and Problem-Solving",
          content:
            "A commitment to continuous learning fosters a mindset of curiosity and innovation. By exploring new technologies and methodologies, you can bring fresh ideas and solutions to your work. This not only enhances your problem-solving abilities but also contributes to a culture of innovation within your organization.",
          images: image5,
        },
        {
          id: 6,
          title: "Accessing New Resources and Networks",
          content:
            "Engaging in continuous learning often involves participating in workshops, conferences, webinars, and professional communities. These activities provide access to new resources, industry insights, and valuable networking opportunities. Building connections with other professionals can lead to collaborations, mentorship, and career growth.",
          images: image6,
        },
        {
          id: 7,
          title: "Improving Job Satisfaction and Motivation",
          content:
            "Continuous learning can reignite your passion for technology and keep you motivated in your career. The challenge of mastering new skills and overcoming complex problems can be rewarding and contribute to greater job satisfaction. By setting and achieving learning goals, you maintain a sense of progress and accomplishment.",
          images: image7,
        },
        {
          id: 8,
          title: "Preparing for the Future",
          content:
            "As technology continues to evolve, the skills and knowledge required for tomorrow's jobs may differ significantly from today. Continuous learning helps you anticipate and prepare for future trends, ensuring you are well-positioned for emerging opportunities.",
          images: image8,
        },
      ],
    },
  ];

  const blog = data.find((item) => item.id === blogId);

  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  if (!blog) {
    return (
      <h2 style={{ textAlign: "center", marginTop: "2rem", paddingBottom: "3rem", fontSize: "2rem", color: "red" }}>
        Blog not found
      </h2>
    );
  }

  return (
    <BlogContainer>
      <ContentWrapper>
        <div style={{ textAlign: "center" }}>
          <Title data-aos="fade-up">{blog?.title}</Title>
          <Description data-aos="fade-up">{blog?.description}</Description>
        </div>
        <SectionContainer>
          {blog.content.length &&
            blog.content.map((section, index) => (
              <SectionWrapper
                key={section.id}
                data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              >
                <ImageWrapper>
                  <Image src={section.images} alt={section.title} />
                </ImageWrapper>
                <TextWrapper>
                  <SectionTitle>{section.title}</SectionTitle>
                  <SectionContent>{section.content}</SectionContent>
                </TextWrapper>
              </SectionWrapper>
            ))}
        </SectionContainer>
      </ContentWrapper>
    </BlogContainer>
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
  color: #1f2937;
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

  &:nth-child(odd) {
    flex-direction: column-reverse;

    @media (min-width: 768px) {
      flex-direction: row;
    }
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
  font-size: 1.5rem;
  font-weight: 600;
  color: #1e3a8a;
  margin-bottom: 1rem;
`;

const SectionContent = styled.p`
  font-size: 1rem;
  color: #374151;
`;