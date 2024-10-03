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
  text-align: left;
  background-color: #fff;
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
      answer: "A well-designed UI/UX ensures your product is user-friendly, leading to increased user satisfaction, better retention, and improved business outcomes."
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
