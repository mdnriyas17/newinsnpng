import React from "react";
import styled from "styled-components";
import Logo from "../../../public/mobile.jpg"; // Update the path based on your project structure

// Styled Components
const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  color: #333;
  margin-bottom: 20px;
  text-align: center;
`;

const Description = styled.p`
  font-size: 1.1rem;
  color: #555;
  text-align: left;
  margin-bottom: 30px;
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr; /* 1 column by default */
  gap: 20px; /* Space between items */

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr); /* 2 columns for tablets */
  }

  @media (min-width: 1200px) {
    grid-template-columns: 2fr 1fr; /* 2:1 ratio for desktop */
  }
`;

const LeftContent = styled.div`
  padding: 20px;
`;

const Feature = styled.div`
  margin-bottom: 20px;

  h3 {
    font-size: 1.5rem;
    color: rgba(10, 13, 80, 1); /* Accent color */
    margin-bottom: 10px;
  }

  p {
    font-size: 1rem;
    color: #666;
    text-align: left;
  }
`;

const RightContent = styled.div`
  display: flex;
  justify-content: center; /* Center the image */
  align-items: center;
`;

const ResponsiveImg = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 8px;
`;

const OfferingsContainer = styled.div`
  margin-top: 40px;
`;

const OfferingBox = styled.div`
  background: #f8f9fa; /* Light background for offerings */
  border: 1px solid #ddd; /* Light border */
  border-radius: 8px;
  padding: 15px;
  margin: 10px 0;

  h3 {
    font-size: 1.5rem;
    color: rgba(10, 13, 80, 1);
  }

  p {
    font-size: 1rem;
    color: #666;
    text-align: left;
  }
`;

// Content Component
const Content = () => {
  return (
    <Container>
      <SectionTitle>WHY CHOOSE US?</SectionTitle>
      <Description>
        Our expert team delivers high-quality, user-centric mobile applications
        across platforms, utilizing cutting-edge technologies tailored to your
        unique business needs, with ongoing support for lasting success.
      </Description>
      <ContentWrapper>
        <LeftContent>
          <Feature>
            <h3>EXPERTISE ACROSS PLATFORMS</h3>
            <p>
              Whether iOS, Android, or cross-platform, our team has expertise in
              delivering high-quality mobile applications for a range of
              industries.
            </p>
          </Feature>
          <Feature>
            <h3>CUSTOMIZED SOLUTIONS</h3>
            <p>
              We tailor each project to meet your unique requirements, ensuring
              that the app is both scalable and adaptable as your business
              grows.
            </p>
          </Feature>
          <Feature>
            <h3>USER-CENTRIC DESIGN</h3>
            <p>
              Our design process emphasizes user experience, ensuring your app
              is not only functional but also enjoyable for users to interact
              with.
            </p>
          </Feature>
          <Feature>
            <h3>CUTTING-EDGE TECHNOLOGIES</h3>
            <p>
              We stay updated with the latest trends and tools, enabling us to
              offer state-of-the-art solutions like AI, AR/VR, and Blockchain
              integration.
            </p>
          </Feature>
          <Feature>
            <h3>ONGOING SUPPORT</h3>
            <p>
              We’re here for the long haul, providing continuous maintenance,
              updates, and support even after your app has launched.
            </p>
          </Feature>
        </LeftContent>
        <RightContent>
          <ResponsiveImg src={Logo} alt="mobile" />
        </RightContent>
      </ContentWrapper>

      {/* What We Offer Section */}
      <OfferingsContainer>
        <SectionTitle>WHAT WE OFFER</SectionTitle>
        <OfferingBox>
          <h3>CONCEPT & PLANNING</h3>
          <p>
            Every successful app begins with a clear idea. We collaborate
            closely with you to define your app’s core purpose, target audience,
            and key features.
          </p>
        </OfferingBox>
        <OfferingBox>
          <h3>UI/UX Design</h3>
          <p>
            Our focus is on creating a visually appealing and user-friendly app
            experience, ensuring seamless navigation and alignment with your
            brand’s identity.
          </p>
        </OfferingBox>
        <OfferingBox>
          <h3>Development</h3>
          <p>
            Using the latest technologies, we build your app to suit your needs,
            whether it's native, cross-platform, or hybrid development.
          </p>
        </OfferingBox>
        <OfferingBox>
          <h3>Testing</h3>
          <p>
            We run extensive tests to ensure functionality, performance, and
            usability before the app launch.
          </p>
        </OfferingBox>
        <OfferingBox>
          <h3>Deployment</h3>
          <p>
            Once testing is complete, we submit the app to app stores and
            conduct final checks for a smooth launch.
          </p>
        </OfferingBox>
        <OfferingBox>
          <h3>Maintenance & Updates</h3>
          <p>
            Post-launch, we provide ongoing support, implementing updates and
            fixes to keep your app running efficiently.
          </p>
        </OfferingBox>
      </OfferingsContainer>
    </Container>
  );
};

export default Content;
