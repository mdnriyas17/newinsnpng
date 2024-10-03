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
