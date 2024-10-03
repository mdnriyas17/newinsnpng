import React from 'react';
import styled from 'styled-components';

const ContentSection = styled.div`
  display: flex;
  flex-direction: column; /* Column layout for headings */
  align-items: center; /* Center items */
  padding: 20px; /* Add padding for spacing */
`;

const LeftBox = styled.div`
  width: 100%; /* Full width for the box */
  max-width: 800px; /* Limit width for larger screens */
  margin: 20px 0; /* Vertical margin for spacing */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Add shadow for depth */
  border-radius: 8px; /* Rounded corners */
  padding: 20px; /* Add padding inside the box */
  background-color: rgba(10, 13, 80, 0.1); /* Light background color */
`;

const LeftHeading = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 15px; /* Space below heading */
  color: rgba(10, 13, 80, 1); /* Heading color */
`;

const ContentPara = styled.p`
  font-size: 1rem;
  text-align: left;
  line-height: 1.6; /* Line height for readability */
  color: #333; /* Text color */
`;

const BoxContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); /* Responsive grid */
  gap: 20px; /* Space between boxes */
`;

const OfferBox = styled.div`
  background-color: #fff; /* White background for service boxes */
  padding: 15px; /* Padding inside each box */
  border-radius: 5px; /* Rounded corners */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Light shadow for depth */
`;

const BoxHeading = styled.h3`
  font-size: 1.2rem; /* Heading size for service */
  margin: 0; /* Remove default margin */
  color: #333; /* Text color */
`;

const BoxSubheading = styled.p`
  font-size: 0.9rem; /* Smaller size for description */
  color: #666; /* Lighter color for description */
  margin-top: 5px; /* Space above description */
  text-align: left;
`;

const Content = () => {
  const services = [
    { heading: "User Research", description: "We gather insights to understand your users and their needs." },
    { heading: "Wireframing", description: "We create structural blueprints for your website or app." },
    { heading: "Prototyping", description: "We build interactive mockups to visualize the final product." },
    { heading: "UI Design", description: "We craft visually appealing interfaces that are easy to use." },
    { heading: "UX Strategy", description: "We ensure a smooth and enjoyable user experience." },
    { heading: "Usability Testing", description: "We test the design to ensure it meets user expectations." }
  ];

  return (
    <ContentSection>
      <LeftBox>
        <LeftHeading>Why Choose Us?</LeftHeading>
        <ContentPara>
          We focus on creating intuitive, user-friendly, and visually appealing interfaces that improve user experience and meet your business goals. Our team combines creativity with research-driven design principles to deliver solutions that engage and retain users.
        </ContentPara>
      </LeftBox>

      <LeftBox>
        <LeftHeading>What We Offer</LeftHeading>
        <BoxContainer>
          {services.map((service, index) => (
            <OfferBox key={index}>
              <BoxHeading>{service.heading}</BoxHeading>
              <BoxSubheading>{service.description}</BoxSubheading>
            </OfferBox>
          ))}
        </BoxContainer>
      </LeftBox>
    </ContentSection>
  );
};

export default Content;
