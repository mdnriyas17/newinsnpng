import React, { useState } from "react";
import './General.css';
import pic1 from "../../../public/images/pic1.png.jpg"
import pic2 from "../../../public/images/pic2.png.jpg"
import blo3 from "../../../public/images/blo3.png.jpg"
import pic4 from "../../../public/images/pic4.png"
const ExpandableSection = ({ title, content }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="section-container">
      <div className="section-header" onClick={toggleExpand}>
        <h2>{title}</h2>
        <span className="toggle-icon">{isExpanded ? "-" : "+"}</span>
      </div>
      {isExpanded && <div className="section-content">{content}</div>}
    </div>
  );
};

const DetailOne = () => {
  return (
    <div className="blog-page">
      {/* Provided section content */}
      <section>
        <h1 className="blog-title">Digital Marketing and Online Platforms</h1>
        
         <h2 className="blog-subtitle">1. E-Commerce Platforms: Expanding Your Reach</h2>
         <p className="my-paragraph">E-commerce platforms are essential for reaching a broad audience and scaling your sales.
           By setting up an online store or leveraging existing platforms
           like Amazon and Flipkart, you can tap into vast customer bases without geographical limitations.</p>
        
        

        <img src={pic1} alt="Digital Marketing" className="blog-image" />

       </section>

         {/* Expandable sections */}
      <ExpandableSection
  title="More-Info"
  content={
    <div className="more-info-section">
      <h2 className="heading key-considerations-heading">Key Considerations</h2>
      <ul className="key-considerations-list">
        <li><strong>Optimize Your Store:</strong> Ensure that your online store is user-friendly, mobile-responsive, and optimized for search engines (SEO).</li>
        <li><strong>Leverage Marketplace Features:</strong> Utilize tools and features offered by e-commerce platforms, such as promotional deals, sponsored listings, and customer reviews, to enhance visibility and credibility.</li>
        <li><strong>Data Analytics:</strong> Use analytics tools to track customer behavior, sales trends, and inventory management, allowing you to make data-driven decisions.</li>
      </ul>
      

      <h2 className="heading benefit-heading">Benefit</h2>
      <ul className="benefit-list">
        <li><strong>Wide Reach:</strong> Access to a large number of potential customers.</li>
        <li><strong>Ease of Setup:</strong> User-friendly tools for setting up and managing your store.</li>
        <li><strong>Scalability:</strong> Ability to handle a growing number of transactions as your business expands.</li>
      </ul>
      
    </div>
  }
/>

        <h2 className="blog-subtitle">2.  Social Media Marketing: Engaging with Your Audience</h2>
        <p className="my-paragraph">Social media platforms are powerful tools for targeted advertising 
          and building brand presence. To maximize your social media efforts:</p>
     
      
      <img 
        src={pic2}
        alt="Digital Marketing" 
        className="blog-image" 
      />

       

      {/* Expandable sections */}
      <ExpandableSection
        title="More-Info"
        content={
             <div className="more-info-section">
                <h1 className="heading key-considerations-heading">Key Considerations</h1>
                 <ul  className="key-considerations-list">
        <li><strong>Choose the Right Platforms:</strong> Identify which platforms (Facebook, LinkedIn, Instagram, Twitter) align with your target audience and focus your efforts there.</li>
        <li><strong>Targeted Advertising:</strong> Use advanced targeting options to reach specific demographics, interests, and behaviors. This ensures your ads are seen by the most relevant audience.</li>
        <li><strong>Engagement and Interaction:</strong> Foster relationships with your audience through regular posts, interactive content, and prompt responses to inquiries. Building a strong social media presence can enhance brand loyalty and drive sales.</li>
      </ul>
      <h1 className="heading benefit-heading">Benefits</h1>
          <ul className="benefit-list">
            <li><strong>Brand Awareness:</strong> Increase visibility and brand recognition.</li>
            <li><strong>Engagement:</strong> Build a community around your brand and foster relationships.</li>
            <li><strong>Cost-Effective:</strong> Flexible budgeting options and precise targeting capabilities.</li>
          </ul>
          
          </div>
        }
      />

       <h2 className="blog-subtitle">3. Content Marketing: Attracting and Nurturing Leads</h2>
       <p className="my-paragraph">Content marketing focuses on attracting and nurturing leads through valuable, relevant content. 
        By providing informative articles, engaging videos, and helpful resources, businesses can establish authority and trust. 
       </p>
      
      
      <img 
        src={blo3} 
        alt="Digital Marketing" 
        className="blog-image" 
      />

       {/* Expandable sections */}
      <ExpandableSection
        title="More-Info"
        content={
            <div className="more-info-section">
                <h1 className="heading key-considerations-heading" >Key Considerations</h1>
                <ul className="key-considerations-list">
        <li><strong>Create Valuable Content: </strong>  Develop high-quality content that addresses your audience's
         needs and interests. This can include blog posts, videos, infographics, and more.</li>
        <li><strong>SEO Optimization: </strong> Ensure that your content is optimized for search engines 
        to increase organic traffic. Use relevant keywords, meta descriptions, and backlinks.</li>
        <li><strong>Content Distribution:</strong> Share your content across various channels, 
        including social media, email newsletters, and industry forums, to reach a wider audience and drive engagement.</li>
      </ul>
  
      <h1 className="heading benefit-heading">Benefits</h1>
          <ul className="benefit-list">
            <li><strong>Build Trust:</strong>  Establish your authority and expertise in your industry.</li>
            <li><strong>Attract Leads: </strong> Draw in potential customers who are interested in your content.</li>
            <li><strong>SEO Benefits:</strong>  Improve your search engine rankings through optimized content.</li>
          </ul>
          
          </div>
        }
      />

       <h2 className="blog-subtitle">4. Email Marketing: Maintaining Customer Relationships</h2>
       <p className="my-paragraph">Email marketing is essential for maintaining customer relationships by delivering personalized, 
        relevant content directly to subscribers. Through regular newsletters, special offers, and updates, businesses 
        can keep customers informed and engaged. </p>
     
      
      <img 
        src={pic4}
        alt="Digital Marketing" 
        className="blog-image" 
      />


       {/* Expandable sections */}
      <ExpandableSection
        title="More-info"
        content={
             <div className="more-info-section">
                <h1 className="heading key-considerations-heading">Key Considerations</h1>
             <ul className="key-considerations-list">
        <li><strong>Automated Campaigns:</strong> Set up automated email campaigns for different stages of the 
        customer journey, such as welcome emails, abandoned cart reminders, and follow-up offers.</li>
        <li><strong>Personalization:</strong>  Tailor your emails to individual preferences and behaviors to increase engagement and 
        conversion rates.</li>
        <li><strong>Performance Tracking:</strong>  Monitor open rates, click-through rates, and conversion metrics to 
        continually refine and improve your email marketing efforts.</li>
      </ul>
      <h1 className="heading benefit-heading">Benefits</h1>
          <ul className="benefit-list">
            <li><strong>Direct Communication:</strong>  Reach your audience directly in their inbox.</li>
            <li><strong>Personalization:</strong>  Tailor messages based on user behavior and preferences.</li>
            <li><strong>High ROI:</strong>  Email marketing often provides a high return on investment due to its targeted nature and cost-effectiveness.</li>
          </ul>
          </div>
        }
      />
      </div>
      );
      };
      export default DetailOne;