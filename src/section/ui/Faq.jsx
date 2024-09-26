import React, { useState } from 'react';
import './Faq.css'; 

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const faqData = [
    {
      question: "Why is UI/UX design important for my business?",
      answer: "Good UI/UX design helps attract and retain users by making your website or app easy to navigate, improving user satisfaction, and boosting engagement."
    },
    {
      question: "How long does the design process take?",
      answer: "The timeline depends on the complexity of the project. Typically, it can take a few weeks for a small project or several months for larger, more complex designs."
    },
    {
      question: "Can I provide feedback during the design process?",
      answer: "Yes, we value your input and work collaboratively with you to ensure the final design aligns with your vision and goals."
    },
    {
      question: "How does UI/UX design improve my product?",
      answer: "A well-designed UI/UX ensures your product is user-friendly, leading to increased user satisfaction, better retention, and improved business outcomes."    },
   
  ];

  return (
    <div className="faq-section">
      <h2 className="faq-heading">Frequently Asked Questions</h2>
      <div className="faq-container">
        {faqData.map((faq, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => handleClick(index)}>
              <h3>{faq.question}</h3>
              <span className={activeIndex === index ? 'icon rotate' : 'icon'}>▼</span>
            </div>
            <div className={`faq-answer ${activeIndex === index ? 'active' : ''}`}>
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
