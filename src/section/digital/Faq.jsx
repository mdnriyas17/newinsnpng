import React, { useState } from 'react';
import './Faq.css'; 

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const faqData = [
    { 
      question: "How can digital marketing benefit my business?", 
      answer: "Digital marketing helps increase brand awareness, drive website traffic, generate leads, and improve customer engagement, all leading to higher sales."
    },
    { 
      question: "What types of digital marketing services do you offer?", 
      answer: "We offer SEO, social media marketing, content marketing, PPC advertising, email marketing, and more to help your business succeed online."
    },
    { 
      question: "Can I track the results of my digital marketing campaigns?", 
      answer: "Yes, we provide detailed analytics and reporting, allowing you to see the performance of your campaigns and make data-driven decisions."
    },
    { 
      question: "How do you ensure my digital marketing strategy is effective?", 
      answer: "We continuously monitor, analyze, and optimize your campaigns to ensure they meet your business goals and deliver the best possible results."
    },
    
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
