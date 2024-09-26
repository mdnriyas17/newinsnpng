import React from 'react';
import './Content.css';  

const Content = () => {
  const services = [
    { 
      heading: "Search Engine Optimization (SEO)", 
      description: "Boost your website’s visibility on search engines and drive organic traffic." 
    },
    { 
      heading: "Social Media Marketing", 
      description: "Engage with your audience and build brand loyalty on platforms like Facebook, Instagram, and LinkedIn." 
    },
    { 
      heading: "Content Marketing", 
      description: "Create and distribute valuable content that attracts and engages your target audience." 
    },
    { 
      heading: "Pay-Per-Click (PPC) Advertising", 
      description: "Run targeted ads on platforms like Google Ads to generate leads and increase conversions." 
    },
    { 
      heading: "Email Marketing", 
      description: "Nurture customer relationships through personalized email campaigns that drive engagement." 
    },
    { 
      heading: "Analytics and Reporting", 
      description: "Track your performance with in-depth analytics to refine and improve your strategies." 
    }      
      
  ];

  return (
    <div className="content-section">
      <div className="left-box">
        <h2 className="left-heading">Why Choose Us?</h2>
        <p className="content-para">
        We combine expertise with a personalized approach to ensure your business achieves its digital marketing goals. With a focus on measurable results, we work to increase your online visibility and drive conversions. Our commitment to transparency, data-driven strategies, and ongoing support sets us apart, helping you grow your business in the digital landscape.
        </p>
      </div>    

      <div className="left-box">
        <h2 className="left-heading">What We Offer</h2>
        <div className="box-container">
          {services.map((service, index) => (
            <div className="offer-box" key={index}>
              <h3 className="box-heading">{service.heading}</h3>
              <p className="box-subheading">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Content;
