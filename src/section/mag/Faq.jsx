import React, { useState } from 'react';
import './Faq.css'; 

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const faqData = [
    { 
      question: "What is a management system?", 
      answer: "A management system is a software tool that helps businesses organize, manage, and track their operations, such as inventory, employees, and customers."
    },
    { 
      question: "How will a management system benefit my business?", 
      answer: "It streamlines operations, reduces manual work, and provides real-time data, allowing you to make informed decisions and improve efficiency."
    },
    { 
      question: "Can I customize the system to fit my specific needs?", 
      answer: "Yes, we provide fully customizable management systems that can be tailored to your business processes."
    },
    { 
      question: "Is training provided for using the system?", 
      answer: "Yes, we offer comprehensive training to ensure your team can use the system effectively."
    },
    { 
      question: "Do you offer ongoing support?", 
      answer: "Yes, we provide continuous support, including maintenance and updates, to keep your system running smoothly."
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
