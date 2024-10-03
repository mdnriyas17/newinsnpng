import React, { useState } from 'react';
import styled from 'styled-components';

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
