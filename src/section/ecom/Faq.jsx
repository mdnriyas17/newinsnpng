import React, { useState } from 'react';
import './Faq.css'; 

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const faqData = [
    { 
      question: "Why is having an e-commerce application important?", 
      answer: "An e-commerce application helps you reach more customers, streamline sales processes, and manage your online store efficiently, which can boost sales and grow your business." 
    },
    { 
      question: "How do I get started?", 
      answer: "Contact us to discuss your e-commerce needs. We’ll set up an initial consultation to understand your requirements and provide a plan to get started." 
    },
    { 
      question: "How long does it take to develop an e-commerce application?", 
      answer: "Development time varies based on the complexity of the project. Generally, it takes a few weeks to several months from initial consultation to launch." 
    },
    { 
      question: "How much does it cost to develop an e-commerce application?", 
      answer: "Costs depend on the scope and complexity of the application. We provide a detailed quote based on your specific requirements." 
    },
    { 
      question: "Can I update my e-commerce application after it’s launched?", 
      answer: "Yes, we offer ongoing support and maintenance to update and improve your application as needed." 
    }
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
