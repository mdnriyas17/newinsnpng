import React, { useEffect } from "react";
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
      title: "UI/UX Designs",
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
    <div id="Services" className="max-w-5xl mx-auto px-4 py-8">
      <div className="text-center mb-10">
        <h2 className="text-2xl text-orange-500 mb-4">
          Popul<span className="border-b-2 border-gray-900">ar Se</span>rvices
        </h2>
        <h1 className="text-4xl mb-4">Services to your business growth</h1>
        <p className="text-lg leading-relaxed max-w-3xl mx-auto">
          Discover how our personalized solutions can help your business thrive.
          From strategic planning to execution, make your journey to success
          smoother and more rewarding.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {ourservices.map((ourservice, index) => (
          <div
            key={ourservice.id}
            className="bg-gray-100 p-6 border border-rgpa(0,0,0,0.1) rounded-lg hover:border-gray-900 text-center shadow-sm hover:shadow-lg transition-shadow duration-300"
            data-aos="fade-up"
            data-aos-duration={(index + 1) * 1000}
          >
            <div className="flex justify-center items-center mb-6 text-5xl text-orange-500">
              {ourservice.image}
            </div>
            <div>
              <h3 className="text-2xl text-gray-900 mb-4">{ourservice.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {ourservice.describtion}
              </p>
            </div>
            {/* <Link
              to={ourservice.button.link}
              className="inline-block mt-6 px-4 py-2 text-white bg-blue-500 border border-blue-500 rounded hover:bg-blue-500 hover:text-white transition-colors duration-300"
            >
              {ourservice.button.text}
            </Link> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ourservicepage;
