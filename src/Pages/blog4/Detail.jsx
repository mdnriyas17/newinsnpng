import React from 'react';
import './Detail.css';
import digiimg from "../../../public/images/digii.png"
import imimg from "../../../public/images/im.png"
import partern from "../../../public/images/patner.png"
import buss from "../../../public/images/buss.png"
import bus from "../../../public/images/bus.png"
import pic11 from "../../../public/images/pic11.png.jpg"
import market from "../../../public/images/market.png"
import new1 from "../../../public/images/new1.png"
import new2 from "../../../public/images/new.png"
const BlogDetail = () => {
    return (
        <div className="blog-detail">
            
     
    <section className="why-choose-us">
            <h5>OUR SERVICES</h5>
            <h1>0 To 1000cr</h1>
        <div className="features-grid">
            <div className="image-container">
            <img src={digiimg} alt="Feature Image"/>
            </div>
        <div className="feature-box">
            <h3>01</h3>
            <h2>Digital Marketing and Online Platforms</h2>
          <ul>
             <li><strong>E-Commerce Platforms:</strong> Set up an online store or leverage platforms like Amazon and Flipkart to reach a larger audience.</li>
             <li><strong>Social Media Marketing:</strong> Use targeted ads on Facebook, LinkedIn, Instagram, and Twitter.</li>
             <li><strong>Content Marketing:</strong> Create blogs, videos, and infographics to attract leads.</li>
             <li><strong>Email Marketing:</strong> Automate email campaigns for regular communication with prospects and customers.</li>
          </ul>
            <a href="#detail-one">
                 <button className="learn-more-btn">Learn more</button>
            </a>
           
        </div>
          <div className="image-container">
          <img src={imimg} alt="Feature Image"/>
          </div>
       <div className="feature-box">
           <h3>02</h3>
           <h2>Sales and Lead Generation Platforms</h2>
          <ul>
            <li><strong>CRM Software:</strong> Manage interactions and track progress with tools like Salesforce or HubSpot.</li>
            <li><strong>Lead Generation Tools:</strong>  Utilize platforms like LinkedIn Sales Navigator, ZoomInfo, or Hunter.io to find prospects.</li>
            <li><strong>Webinars and Workshops: </strong>  Host online events to showcase expertise and gather leads.</li>

         </ul>
          <a href="#detail-two">
             <button className="learn-more-btn">Learn more</button>
            </a>
       </div>
        <div className="image-container">
        <img src={partern} alt="Feature Image"/>
        </div>
      <div className="feature-box">
          <h3>03</h3>
          <h2>Business Models and Strategies</h2>
         <ul>
           <li><strong>B2B Sales:</strong> Focus on high-value deals and form partnerships.</li>
           <li><strong>Subscription Models:</strong> Offer recurring revenue options through subscriptions.</li>
           <li><strong>Franchising:</strong> Expand through franchising to increase reach.</li>
           <li><strong>Enterprise Sales:</strong> Target large contracts with enterprise-level clients.</li>
         </ul>
          <a href="#detail-three">
                 <button className="learn-more-btn">Learn more</button>
            </a>
      </div>
        <div className="image-container">
        <img src={buss} alt="Feature Image"/>
        </div>
      <div className="feature-box">
          <h3>04</h3>
          <h2>Networking and Partnerships</h2>
        <ul>
            <li><strong>Industry Events: </strong> Attend trade shows and conferences to network.</li>
            <li><strong>Partnerships: </strong> Build alliances with complementary businesses.</li>
            <li><strong>Referrals:</strong> Create referral programs to generate new business.</li>
             
        </ul>
           <a href="#detail-four">
                 <button className="learn-more-btn">Learn more</button>
            </a>
      </div>
          <div className="image-container">
          <img src={bus} alt="Feature Image"/>
          </div>
      <div className="feature-box">
          <h3>05</h3>
          <h2> Sales and Business Development</h2>
      <ul>
          <li><strong>Sales Team: </strong> Build a skilled team focused on high-value targets.</li>
          <li><strong>Outbound Sales: </strong> Use cold calling and outreach to drive leads.</li>
          <li><strong>Account-Based Marketing:</strong>  Focus marketing on key, high-value accounts.</li>
                    
      </ul>
          <a href="#detail-five">
              <button className="learn-more-btn">Learn more</button>
          </a>
      </div>
          <div className="image-container">
          <img src={pic11} alt="Feature Image"/>
           </div>
      <div className="feature-box">
          <h3>06</h3>
          <h2>Technology and Innovation</h2>
        <ul>
          <li><strong>AI and Automation:</strong>  Use AI and automation to streamline sales and marketing.</li>
          <li><strong>Data Analytics: </strong>Analyze data to understand customer behavior and trends.</li>
          <li><strong>App Development: </strong>  Develop apps that solve specific market needs.</li>
        </ul>
          <a href="#detail-six">
              <button className="learn-more-btn">Learn more</button>
          </a>
      </div>
           <div className="image-container">
            <img src={market} alt="Feature Image"/>
           </div>
      <div className="feature-box">
             <h3>07</h3>
             <h2>Market Expansion</h2>
           <ul>
             <li><strong>Geographical Expansion:</strong> Explore both domestic and international markets.</li>
             <li><strong>Product Diversification:</strong> Expand product or service lines to attract more customers.</li>
           </ul>
            <a href="#detail-seven">
                 <button className="learn-more-btn">Learn more</button>
            </a>
      </div>
          <div className="image-container">
          <img src={new1} alt="Feature Image"/>
          </div>
      <div className="feature-box">
          <h3>08</h3>
          <h2>Customer Experience</h2>
       <ul>
          <li><strong>Customer Support:</strong>  Ensure excellent customer service for retention.</li>
          <li><strong>Feedback Systems: </strong>  Implement feedback loops to improve offerings.</li>
       </ul>
         <a href="#detail-eight">
             <button className="learn-more-btn">Learn more</button>
         </a>
      </div>
          <div className="image-container">
          <img src={new2} alt="Feature Image"/>
          </div>
      <div className="feature-box">
           <h3>09</h3>
           <h2>Financial Planning and Investment</h2>
        <ul>
            <li><strong>Investor Relations:</strong>  Seek investments to drive growth.</li>
            <li><strong>Funding:</strong>Explore funding sources like venture capital, loans, or grants.</li>
        </ul>
           <a href="#detail-nine">
                 <button className="learn-more-btn">Learn more</button>
            </a>
      </div>
    </div>
  </section>
 </div>
 );
};
export default BlogDetail;