import React, { useState } from 'react';
import './Faq.css'; 

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const faqData = [
    { 
      question: "Why is having a website important for my business?", 
      answer: "A website helps establish your online presence, attract potential customers, and provide information about your products or services. It also improves your credibility and allows you to reach a wider audience."
    },
    { 
      question: "How long does it take to build a website?", 
      answer: "The timeline for building a website depends on its complexity and the features you want. A basic website might take a few weeks, while more complex sites with custom features can take several months."
    },
    { 
      question: "How much does web development cost?", 
      answer: "The cost of web development varies based on the size and complexity of the project. Factors such as design, functionality, and the need for custom features can influence the price. We provide a detailed quote after discussing your requirements."
    },
    { 
      question: "Will my website be mobile-friendly?", 
      answer: "Yes, we ensure that all websites are designed to be responsive, meaning they will look and work well on smartphones, tablets, and desktops."
    },
    { 
      question: "How can I improve my website’s search engine ranking?", 
      answer: "We use search engine optimization (SEO) techniques to help improve your website's visibility on search engines. This includes optimizing content, using relevant keywords, and ensuring good site structure."
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
