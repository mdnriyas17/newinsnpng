import React, { useEffect } from "react";
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
import { Link } from "react-router-dom";

const Blogsingle = () => {
  const data = [
    {
      id: 1,
      title: "The Importance of Continuous Learning in the Tech Industry",
      description:
        "In the fast-paced world of technology, standing still is not an option. The tech industry is characterized by rapid advancements, evolving tools, and shifting paradigms, making continuous learning an essential practice for tech professionals. Whether you're a software developer, data analyst, or IT specialist, staying updated with the latest trends and skills is crucial for career growth and success.",
      images: image1,
    },
    // {
    //   id: 2,
    //   title: "The Importance of Continuous Learning in the Tech Industry",
    //   description:
    //     "In the fast-paced world of technology, standing still is not an option. The tech industry is characterized by rapid advancements, evolving tools, and shifting paradigms, making continuous learning an essential practice for tech professionals. Whether you're a software developer, data analyst, or IT specialist, staying updated with the latest trends and skills is crucial for career growth and success.",
    //   images: image2,
    // },
  ];

  useEffect(() => {
    AOS.init({ duration: 1200 });
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
