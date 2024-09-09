import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
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
    //   image:
    //     "https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description:
        "In the fast-paced world of technology, standing still is not an option. The tech industry is characterized by rapid advancements, evolving tools, and shifting paradigms, making continuous learning an essential practice for tech professionals. Whether you're a software developer, data analyst, or IT specialist, staying updated with the latest trends and skills is crucial for career growth and success.",
      content: [
        {
          id: 1,
          title: "The Ever-Evolving Tech Landscape",
          content:
            "Technology is advancing at an unprecedented rate. New programming languages, frameworks, and tools are constantly emerging, while older technologies become obsolete. For example, the rise of cloud computing has transformed how we approach software development, while AI and machine learning are redefining data analytics and automation. To remain relevant and competitive, tech professionals must continuously update their knowledge and adapt to these changes.",
          images:image1,
        },
        {
          id: 2,
          title: "Enhancing Skill Sets and Career Opportunities",
          content:
            "Continuous learning not only helps in keeping your existing skills sharp but also opens doors to new opportunities. By learning new technologies and methodologies, you position yourself for career advancement and can explore new roles within the industry. For instance, a front-end developer who acquires skills in back-end development can transition to a full stack role, broadening their career prospects.",
          images:image2,
        },
        {
          id: 3,
          title: ". Staying Ahead of the Competition",
          content:
            "In a competitive job market, having up-to-date skills can set you apart from other candidates. Employers value professionals who proactively seek out new knowledge and demonstrate a commitment to their field. Continuous learning can give you an edge over peers who may be less proactive in their professional development.",
          images:image3,
        },
        {
          id: 4,
          title: "Adapting to Industry Changes",
          content:
            "The tech industry is dynamic, with new trends and regulations influencing how we work. Continuous learning helps professionals adapt to these changes effectively. Whether it's understanding new privacy laws, cybersecurity threats, or industry standards, staying informed ensures you can navigate these shifts smoothly.",
          images:image4,
        },
        {
          id: 5,
          title: "Fostering Innovation and Problem-Solving",
          content:"A commitment to continuous learning fosters a mindset of curiosity and innovation. By exploring new technologies and methodologies, you can bring fresh ideas and solutions to your work. This not only enhances your problem-solving abilities but also contributes to a culture of innovation within your organization.",
          images:image5,
        },
        {
          id: 6,
          title: "Accessing New Resources and Networks",
          content:"Engaging in continuous learning often involves participating in workshops, conferences, webinars, and professional communities. These activities provide access to new resources, industry insights, and valuable networking opportunities. Building connections with other professionals can lead to collaborations, mentorship, and career growth.",
          images:image6,
        },
        {
          id: 7,
          title: "Improving Job Satisfaction and Motivation",
          content:"Continuous learning can reignite your passion for technology and keep you motivated in your career. The challenge of mastering new skills and overcoming complex problems can be rewarding and contribute to greater job satisfaction. By setting and achieving learning goals, you maintain a sense of progress and accomplishment. •Example: Exploring a new technology or achieving a certification can boost your confidence and enthusiasm for your role, leading to increased job satisfaction.",
          images:image7,
        },
        {
          id: 8,
          title: "Preparing for the Future",
          content:"As technology continues to evolve, the skills and knowledge required for tomorrow's jobs may differ significantly from today. Continuous learning helps you anticipate and prepare for future trends, ensuring you are well-positioned for emerging opportunities. •Example: Investing time in learning about quantum computing or blockchain technology could prepare you for future roles in these cutting-edge fields.Additional points : Tech Industry Education is the backbone of continuous learning for professionals. It equips individuals with the latest skills, tools, and knowledge needed to stay competitive in a fast-evolving field. From online courses to certifications, education ensures tech workers are always prepared for industry changes. Embracing lifelong learning through tech education is key to career growth and innovation.Lifelong learning in technology is essential for staying relevant in an ever-changing industry. As new tools and innovations emerge, continuous skill development ensures that tech professionals keep pace with advancements. It fosters adaptability and opens doors to new opportunities. Committing to lifelong learning allows individuals to thrive in the dynamic tech landscape. Tech skills development is key to staying competitive in a rapidly evolving industry. Regularly upgrading skills ensures adaptability and opens up new career opportunities. Continuous learning helps tech professionals excel and stay ahead of industry trends.he importance of continuous learning lies in staying updated with evolving technologies and industry trends. It helps professionals remain relevant, adaptable, and competitive in their careers. Embracing lifelong learning drives innovation and growth in the tech sector. Ongoing education in tech ensures that professionals keep pace with the rapid advancements in technology. It promotes the development of new skills and knowledge, allowing individuals to stay competitive. Regular learning is essential for career growth and innovation in the tech industry.Tech industry training programs provide targeted education to help professionals master emerging technologies and improve their skills. These programs offer practical, up-to-date knowledge essential for staying competitive. They play a crucial role in career development and industry advancement.Learning and development in tech focus on acquiring and refining skills to keep pace with industry advancements. These initiatives support career growth and innovation by providing up-to-date knowledge and practical experience. Investing in continuous learning is essential for staying competitive in the tech field.Tech professionals' skill development is crucial for adapting to evolving technologies and maintaining career growth. Regularly enhancing technical abilities helps professionals stay competitive and relevant. Continuous skill development fosters innovation and expertise in the tech industry.Career advancement in the tech industry depends on continuous learning and staying updated with emerging technologies. Professionals who regularly enhance their skills are more likely to secure leadership roles and new opportunities. Ongoing development is key to long-term success in tech careers.Professional development for tech professionals is essential for staying competitive in a rapidly changing industry. It involves continuous learning, skill enhancement, and staying informed about the latest trends. This ongoing growth ensures career progression and long-term success in tech",
          images:image8,
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
      <h2 className="text-center text-2xl text-red-500">Blog not found</h2>
    );
  }

  return (
    <div className="relative bg-gray-100 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      >
        <div className="absolute inset-0opacity-30"></div>
      </div>
      <div className="relative px-4 py-12 max-w-6xl mx-auto">
        <div className="text-center mb-12 relative z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent opacity-60"></div>
          <h1
            data-aos="fade-up"
            className="text-4xl md:text-5xl font-extrabold text-white leading-tight"
          >
            {blog?.title}
          </h1>
          {/* <img
            src={blog?.image}
            alt={blog?.title}
            className="w-full max-w-2xl mx-auto mt-8 rounded-lg shadow-xl"
            style={{ maxHeight: "300px", objectFit: "cover" }}
          /> */}
          <p
            data-aos="fade-up"
            className="mt-6 text-lg md:text-xl"
          >
            {blog?.description}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {blog.content &&
            blog.content.map((section, index) => (
              <div
                key={section.id}
                data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                className="flex flex-col rounded-lg p-6 transform transition-transform hover:scale-105"
              >
                 <img
                  src={section?.images}
                  alt={section?.title}
                  className="w-full rounded-lg shadow-md"
                  style={{ maxHeight: "200px", objectFit: "cover" }}
                />
                <h2 className="text-2xl font-semibold text-blue-700 mb-4">
                  {section?.title}
                </h2>
                <p className=" mb-4">{section?.content}</p>
               
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Blogsingle;
