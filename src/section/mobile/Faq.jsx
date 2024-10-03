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
