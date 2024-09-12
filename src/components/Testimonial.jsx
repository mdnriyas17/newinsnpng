import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import image1 from "../../public/Ever.jpg";
import image2 from "../assets/image2.png";
import Book from "../assets/book.png";
import { Link } from "react-router-dom";
import Seoimage from "../assets/seo.png";
import { useNavigate } from "react-router-dom";
const Blogsingle = () => {
  const data = [
    {
      id: 1,
      title: "The Importance of Continuous Learning in the Tech Industry",
      description:
        "In the fast-paced world of technology, standing still is not an option. The tech industry is characterized by rapid advancements, evolving tools, and shifting paradigms, making continuous learning an essential practice for tech professionals. Whether you're a software developer, data analyst, or IT specialist, staying updated with the latest trends and skills is crucial for career growth and success.",
      images: image1,
    },
    {
      id: 2,
      title: "Digital marketing",
      description:
        "Digital marketing refers to the use of digital channels, platforms, and technologies to promote products, services, or brands to potential customers. It encompasses a wide range of online marketing activities, including",
      images: Seoimage,
    },
    {
      id: 3,
      title: "Why Reading Books Can Transform Your Life",
      description:"In today's fast-paced world, where information is available at our fingertips, many people underestimate the power of reading books. But here's the truth: countless billionaires, leaders, and successful entrepreneurs credit much of their success to reading. Bill Gates, Warren Buffett, Elon Musk, and Oprah Winfrey, to name just a few, all have one thing in common—an insatiable thirst for knowledge through reading.",
      images: Book,
    }
  ];

  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  const navigate = useNavigate();

  const handleClick = (id) => {
    console.log(id);
    navigate(`/blog/${id}`);
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const truncateText = (text, wordLimit) => {
    const words = text.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + "...";
    }
    return text;
  };

  return (
    <div className="bg-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="mt-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-orange-600 sm:text-4xl">
              Our Blogs
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Dive into a collection of insightful articles, updates, and expert perspectives on various topics. Stay informed and inspired with our latest posts, featuring rich content, engaging visuals, and valuable information to keep you ahead in your field.
            </p>
          </div>
          <div className="mt-10">
            {data.map((section) => (
              <Link to={`/blogs/${section.id}`} key={section.id}>
                <div
                  className="flex flex-col md:flex-row md:items-center mb-12"
                  data-aos="fade-up"
                >
                  <div className="md:w-1/2 md:pr-8 mt-8 md:mt-0">
                    <img
                      src={section.images}
                      alt={section.title}
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                  <div className="md:w-1/2 md:pl-8">
                    <h3 className="text-4xl text-blue-950  font-bold mb-4">
                      {section.title}
                    </h3>
                    <p className="mt-4 text-lg text-gray-500">
                      {truncateText(section.description, 30)}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogsingle;
