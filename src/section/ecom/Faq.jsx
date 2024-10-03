import React, { useState } from 'react';
import styled from 'styled-components';

// Styled Components
const FaqSection = styled.div`
  padding: 20px;
  background-color: rgba(10, 13, 80, 1);
`;

const FaqHeading = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
  color: #fff;
  text-align: center;
`;

const FaqContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const FaqItem = styled.div`
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
  overflow: hidden;
`;

const FaqQuestion = styled.div`
  background-color: #007BFF;
  color: white;
  padding: 15px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  &:hover {
    background-color: #0056b3;
  }
`;

const Icon = styled.span`
  transition: transform 0.3s;
`;

const FaqAnswer = styled.div`
  padding: 15px;
  background-color: #fff;
  text-align: left;
  display: ${({ active }) => (active ? 'block' : 'none')};
`;

// FAQs Component
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
    <FaqSection>
    <FaqHeading>Frequently Asked Questions</FaqHeading>
    <FaqContainer>
      {faqData.map((faq, index) => (
        <FaqItem key={index}>
          <FaqQuestion onClick={() => handleClick(index)}>
            <h3>{faq.question}</h3>
            <Icon className={activeIndex === index ? 'rotate' : ''}>▼</Icon>
          </FaqQuestion>
          <FaqAnswer active={activeIndex === index}>
            <p>{faq.answer}</p>
          </FaqAnswer>
        </FaqItem>
      ))}
    </FaqContainer>
  </FaqSection>
  );
};

export default FAQs;
