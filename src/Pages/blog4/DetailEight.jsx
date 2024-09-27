import React, { useState } from "react";
import './General.css';
import pic16 from "../../../public/images/pic16.png.jpg"
import pic17 from "../../../public/images/pic17.png.jpg"
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

const Detaileight = () => {
  return (
    <div className="blog-page">
        <section>
        <h1 className="blog-title">Customer Experience</h1>
        <h2 className="blog-subtitle">1. Customer Support</h2>
        <p className="my-paragraph"><strong>What is it:</strong>Customer support involves assisting customers throughout their journey with your
           business—before, during, and after a purchase. Effective customer support addresses
            issues, answers questions, and resolves problems to enhance customer satisfaction and loyalty.
 </p>
       
        <img src={pic16} alt="Digital Marketing" className="blog-image" />

       </section>

       <ExpandableSection
        title="More-Info"
        content={
          <div className="more-info-section">
                <h1 className="heading key-considerations-heading">How to Provide Excellent Customer Support:</h1>
                 <ul className="key-considerations-list">
          <li>
            <strong>Accessibility: </strong>  Ensure that support is available
             through multiple channels like phone, email, live chat, 
            and social media. Support should be accessible during hours that are convenient for customers.

          </li>
          <li>
            <strong>Training:</strong>  Equip your support team with comprehensive training. 
            They should be knowledgeable about your products and services, empathetic towards customer concerns, and skilled in problem-solving.


          </li>
          <li>
            <strong>Response Time:</strong> Strive to respond quickly to customer inquiries and issues. 
            Fast response times show that you value the customer’s time and are committed to solving their problems.


          </li>
          <li>
            <strong>Personalization: </strong>Personalize interactions by 
            addressing customers by name and recognizing their previous interactions with your business. Personalized service makes customers feel valued.


          </li>
          <li>
            <strong>Problem Resolution:</strong> Focus on resolving issues effectively and
             ensure that solutions meet customer expectations. Follow up to confirm that customers are satisfied with the resolution.



          </li>
          <li>
            <strong>Proactive Support: </strong>Anticipate common issues and provide
             self-service resources like FAQs, knowledge bases, or tutorial videos. Proactive support helps
              customers find solutions on their own and reduces the demand on your support team.



          </li>
        </ul>
        <h1 className="heading benefit-heading">Benefits</h1>

          <ul className="benefit-list">
            <li><strong>Customer Retention:  </strong> High-quality support fosters customer loyalty and encourages repeat business.</li>
            <li><strong>Brand Reputation:</strong>  Positive support experiences enhance your brand’s reputation, leading to favorable reviews and referrals.</li>
            <li><strong>Increased Sales: </strong> Satisfied customers are more likely to make additional purchases and recommend your business to others.
</li>
          </ul>
          </div>
        }
      />

       <h2 className="blog-subtitle">2. Feedback Systems</h2>
       <p className="my-paragraph"><strong>What It Is:</strong> Feedback systems involve collecting and analyzing customer opinions 
        suggestions to improve your products, services, and overall customer experience. Effective feedback
         systems help you understand customer needs and make informed improvements.
</p>
     
      
      <img 
        src={pic17} 
        alt="Digital Marketing" 
        className="blog-image" 
      />

       <ExpandableSection
        title="More-Info"
        content={
            <div className="more-info-section">
                <h1 className="heading key-considerations-heading">How to Implement Feedback Systems:</h1>
                 <ul className="key-considerations-list">
        <li><strong>Feedback Channels:</strong>  Offer multiple ways for customers to provide feedback, such as surveys, feedback forms, social media, and direct communication. 
        Ensure that providing feedback is straightforward.</li>
        <li><strong>Surveys and Questionnaires:</strong>  Regularly conduct surveys to gather 
        structured feedback on specific aspects of your business, such as product quality, customer service, and overall satisfaction.</li>
        <li><strong>Listening and Analysis:</strong> Listening and Analysis: Actively listen to customer feedback and analyze trends and patterns. 
        Identify recurring issues or areas for improvement and prioritize them based on their potential impact.</li>
         <li><strong>Actionable Insights:</strong> Use feedback to make data-driven decisions and implement changes. Address common 
         issues and enhance features or services based on customer suggestions.</li>
         <li><strong>Closing the Loop:</strong> Inform customers about the improvements made as a result of their feedback. Show appreciation
          for their input and communicate how their suggestions have influenced changes.</li>
         
         <li><strong>Continuous Improvement:</strong>  Regularly review and refine your feedback
          systems to keep them effective and aligned with evolving customer expectations. Foster a culture of ongoing 
          improvement based on customer insights.
          <hr/>
</li>
         

      </ul>
      <h1 className="heading benefit-heading">Benefits</h1>
          <ul className="benefit-list">
            <li><strong> Enhanced Offerings: </strong>Use feedback to improve products or services, leading 
            to greater customer satisfaction and competitive advantage.</li>
            <li><strong>Customer Engagement:  </strong> Engaging customers in the feedback process makes them feel 
            valued and strengthens their connection to your brand.</li>
            <li><strong> Problem Identification:</strong>  Quickly identify and address 
            issues before they become major problems, improving overall customer experience and reducing churn.</li>
          </ul>
          <hr/>

          <h1 className="heading benefit-heading">Summary</h1>
          <ul className="benefit-list">
            <li><strong>Customer Support:  </strong>Customer Support: Provide exceptional service by ensuring accessibility,
             training staff effectively, responding promptly, personalizing interactions, resolving issues efficiently, 
            and offering proactive support. This enhances customer loyalty and encourages repeat business.</li>
            <li><strong> Feedback Systems:  </strong> Implement robust systems to collect
             and analyze customer feedback, use insights for improvements, and communicate changes to customers. This helps in refining offerings,
              engaging customers, and identifying and resolving issues proactively.</li>
            
          </ul>
          </div>
        }
      />

       
    </div>
  );
};
export default Detaileight;