import React from "react";
import image1 from "../../public/large.png";
import { useNavigate } from "react-router-dom";
const TestimonialData = [
  {
    id: 1,
    name: "The Ever-Evolving Tech Landscape",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Technology is advancing at an unprecedented rate. New programming languages, frameworks, and tools are constantly emerging, while older technologies become obsolete. For example, the rise of cloud computing has transformed how we approach software development, while AI and machine learning are redefining data analytics and automation. To remain relevant and competitive, tech professionals must continuously update their knowledge and adapt to these changes.",
  },
  // Add more testimonials here if needed
];

const truncateText = (text, wordLimit) => {
  const words = text.split(" ");
  if (words.length > wordLimit) {
    return words.slice(0, wordLimit).join(" ") + "...";
  }
  return text;
};
const Testimonials = () => {

    const navigate = useNavigate();

    const handleClick = (id) => {
      navigate(`/blogs/${id}`);
    };

  return (
    <div className="py-10">
      <div className="container">
        <div className="text-center mb-10 max-w-md mx-auto">
          <p className="text-sm text-primary">What our customers are saying</p>
          <h1 className="text-3xl font-bold">Blogs</h1>
          {/* <p className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit asperiores modi.
          </p> */}
        </div>

        <div className="grid gap-8">
          {TestimonialData.map((data) => (
            <div className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl bg-primary/10 relative" key={data.id}
              onClick={() => handleClick(data.id)}
            >
              <div className="mb-4">
                <img
                  src={image1}
                  alt={data.name}
                  className="rounded-full w-20 h-20"
                />
              </div>
              <div className="flex flex-col items-center gap-4">
                <div className="space-y-3">
                  <p className="text-xs text-gray-500 clamp-3-lines">
                    {truncateText(data.description, 30)}
                  </p>
                  <h1 className="text-xl font-bold text-black/80 dark:text-light">
                    {data.name}
                  </h1>
                </div>
              </div>
              <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                ,,
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
