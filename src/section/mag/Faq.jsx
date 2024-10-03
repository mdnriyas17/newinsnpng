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
