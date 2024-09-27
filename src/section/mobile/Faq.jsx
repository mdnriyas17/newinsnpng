import React, { useState } from 'react';
import './Faq.css'; 

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const faqData = [    
      { 
        "question": "Why is mobile app development important for my business?", 
        "answer": "Mobile apps provide a direct connection to your customers, increase brand visibility, improve customer engagement, and create additional revenue streams through in-app purchases and ads." 
      },
      { 
        "question": "How long does it take to develop a mobile app?", 
        "answer": "Development time depends on the complexity of the app. Simple apps may take 2-3 months, while more complex ones can take 6-12 months or longer." 
      },
      { 
        "question": "What are the different types of mobile app development?", 
        "answer": "The three main types are native development (specific to iOS or Android), cross-platform development (using a single codebase for multiple platforms), and hybrid development (a combination of native and web technologies)." 
      },
      { 
        "question": "How much does it cost to develop a mobile app?", 
        "answer": "The cost varies depending on the app's complexity, features, and platform requirements. We can provide a detailed quote once we understand your specific needs." 
      },
      { 
        "question": "What kind of post-launch support do you offer?", 
        "answer": "We offer ongoing maintenance and updates to ensure that your app remains compatible with new platform updates, bug fixes, and feature enhancements." 
      }
    ]
    ;
  

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
