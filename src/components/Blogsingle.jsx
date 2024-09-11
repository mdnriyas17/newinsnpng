import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import styled from "styled-components";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";
import image5 from "../assets/image5.png";
import image6 from "../assets/image6.png";
import image7 from "../assets/image7.png";
import image8 from "../assets/image8.png";
import Seoimage from "../assets/seo.png";
import { GoStarFill } from "react-icons/go";

const Blogsingle = () => {
  const { id } = useParams();
  const blogId = parseInt(id);
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, [id]); // Triggers when `id` changes

  const data = [
    {
      id: 1,
      title: "The Importance of Continuous Learning in the Tech Industry",
      description:
        "In the fast-paced world of technology, standing still is not an option. The tech industry is characterized by rapid advancements, evolving tools, and shifting paradigms, making continuous learning an essential practice for tech professionals. Whether you're a software developer, data analyst, or IT specialist, staying updated with the latest trends and skills is crucial for career growth and success.",
      content: [
        {
          id: 1,
          title: "The Ever-Evolving Tech Landscape",
          content:
            "Technology is advancing at an unprecedented rate. New programming languages, frameworks, and tools are constantly emerging, while older technologies become obsolete. For example, the rise of cloud computing has transformed how we approach software development, while AI and machine learning are redefining data analytics and automation. To remain relevant and competitive, tech professionals must continuously update their knowledge and adapt to these changes.",
          images: image1,
        },
        {
          id: 2,
          title: "Enhancing Skill Sets and Career Opportunities",
          content:
            "Continuous learning not only helps in keeping your existing skills sharp but also opens doors to new opportunities. By learning new technologies and methodologies, you position yourself for career advancement and can explore new roles within the industry. For instance, a front-end developer who acquires skills in back-end development can transition to a full stack role, broadening their career prospects.",
          images: image2,
        },
        {
          id: 3,
          title: "Staying Ahead of the Competition",
          content:
            "In a competitive job market, having up-to-date skills can set you apart from other candidates. Employers value professionals who proactively seek out new knowledge and demonstrate a commitment to their field. Continuous learning can give you an edge over peers who may be less proactive in their professional development.",
          images: image3,
        },
        {
          id: 4,
          title: "Adapting to Industry Changes",
          content:
            "The tech industry is dynamic, with new trends and regulations influencing how we work. Continuous learning helps professionals adapt to these changes effectively. Whether it's understanding new privacy laws, cybersecurity threats, or industry standards, staying informed ensures you can navigate these shifts smoothly.",
          images: image4,
        },
        {
          id: 5,
          title: "Fostering Innovation and Problem-Solving",
          content:
            "A commitment to continuous learning fosters a mindset of curiosity and innovation. By exploring new technologies and methodologies, you can bring fresh ideas and solutions to your work. This not only enhances your problem-solving abilities but also contributes to a culture of innovation within your organization.",
          images: image5,
        },
        {
          id: 6,
          title: "Accessing New Resources and Networks",
          content:
            "Engaging in continuous learning often involves participating in workshops, conferences, webinars, and professional communities. These activities provide access to new resources, industry insights, and valuable networking opportunities. Building connections with other professionals can lead to collaborations, mentorship, and career growth.",
          images: image6,
        },
        {
          id: 7,
          title: "Improving Job Satisfaction and Motivation",
          content:
            "Continuous learning can reignite your passion for technology and keep you motivated in your career. The challenge of mastering new skills and overcoming complex problems can be rewarding and contribute to greater job satisfaction. By setting and achieving learning goals, you maintain a sense of progress and accomplishment.",
          images: image7,
        },
        {
          id: 8,
          title: "Preparing for the Future",
          content:
            "As technology continues to evolve, the skills and knowledge required for tomorrow's jobs may differ significantly from today. Continuous learning helps you anticipate and prepare for future trends, ensuring you are well-positioned for emerging opportunities.",
          images: image8,
        },
      ],
    },
    {
      id: 2,
      title: "Digital marketing",
      description:
        "Digital marketing refers to the use of digital channels, platforms, and technologies to promote products, services, or brands to potential customers. It encompasses a wide range of online marketing activities, including",
      images: Seoimage,
      subheding: [
        {
          id: 1,
          title: "Introduction to Digital Marketing",
          description:
            "Digital marketing refers to the use of digital channels, platforms, and technologies to promote products, services, or brands to potential customers. It encompasses a wide range of online marketing activities, including",
          content: [
            {
              id: 1,
              title: "Search Engine Optimization (SEO)",
              content:
                "SEO focuses on improving the visibility of a website or webpage in search engine results through organic search. By optimizing content and technical aspects of a site, businesses can rank higher on search engines, driving organic traffic and enhancing online visibility.",
            },
            {
              id: 2,
              title: "Search Engine Marketing (SEM)",
              content:
                "SEM involves using paid advertisements on search engines to increase visibility and drive traffic to a website. This typically includes running campaigns through platforms like Google Ads, where businesses pay to appear at the top of search results based on targeted keywords.",
            },
            {
              id: 3,
              title: "Social Media Marketing",
              content:
                "Social media marketing is the process of promoting products or services through social media platforms like Facebook, Instagram, LinkedIn, and Twitter. These platforms allow businesses to engage with their audience directly, build brand awareness, and foster customer relationships.",
            },
            {
              id: 4,
              title: "Content Marketing",
              content:
                "Content marketing focuses on creating and sharing valuable content—whether it be blogs, videos, infographics, or articles—that attracts and engages a target audience. By providing informative, relevant content, businesses can establish authority in their industry and build trust with potential customers.",
            },
            {
              id: 5,
              title: "Email Marketing",
              content:
                "Email marketing involves sending targeted emails to customers and prospects to promote products, services, or build brand awareness. This personalized form of communication helps businesses nurture leads, boost customer retention, and drive conversions.",
            },
            {
              id: 6,
              title: "Pay-Per-Click Advertising (PPC)",
              content:
                "PPC advertising is a paid model where advertisers pay each time a user clicks on their ad. Typically, PPC campaigns are run on platforms like Google Ads and social media sites, providing an immediate way to drive traffic to a site while measuring the effectiveness of the ad spend.",
            },
            {
              id: 7,
              title: "Affiliate Marketing",
              content:
                "Affiliate marketing involves partnering with businesses or individuals who promote your product in exchange for a commission on each sale. It’s a performance-based strategy where affiliates generate leads or conversions for your business through their own marketing efforts.",
            },
            {
              id: 8,
              title: "Influencer Marketing",
              content:
                "Influencer marketing leverages the reach and trust of influencers to promote products to their audience. By collaborating with influencers in your industry, businesses can access new markets and build credibility with potential customers.",
            },
            {
              id: 9,
              title: "Mobile Marketing",
              content:
                "Mobile marketing involves targeting customers through mobile channels like SMS, push notifications, or mobile apps. As more people use smartphones to browse the web, mobile marketing becomes a critical component of any digital marketing strategy.",
            },
            {
              id: 10,
              title: "Analytics and Data Management",
              content:
                "Analytics and data management play a key role in digital marketing by measuring and analyzing data from campaigns to improve performance and understand customer behavior. Tools like Google Analytics offer businesses valuable insights that help optimize campaigns in real-time.",
            },
          ],
        },
        {
          id: 2,
          title: "Steps to Master Digital Marketing",
          description:
            "To build expertise in digital marketing, follow these structured steps",
          content: [
            {
              id: 1,
              title: "Identify Your Goals",
              content:
                "Begin by determining which area of digital marketing interests you most, such as SEO, social media marketing, content marketing, or PPC. Decide if you want to specialize in one particular area or become proficient across multiple digital marketing techniques. This will help you focus your learning efforts and career development.",
            },
            {
              id: 2,
              title: "Take Online Courses",
              content:
                "Enroll in online courses to cover various aspects of digital marketing",
              listitem: [
                {
                  id: 1,
                  description:
                    "Google Digital Garage: Offers free courses on the fundamentals of digital marketing.",
                },
                {
                  id: 2,
                  description:
                    "HubSpot Academy: Provides free certification courses on inbound marketing, email marketing, and more.",
                },
                {
                  id: 3,
                  description:
                    "Coursera/edX/Udemy: Platforms that offer both free and paid courses by industry experts, covering a range of digital marketing topics..",
                },
                {
                  id: 4,
                  description:
                    "LinkedIn Learning: Offers subscription-based learning with a wide selection of digital marketing courses",
                },
              ],
            },
            {
              id: 3,
              title: "Get Certified",
              content:
                "Earning certifications can add credibility to your skills:",
              listitem: [
                {
                  id: 1,
                  description:
                    "Google Analytics & Google Ads Certifications: Validate your proficiency with Google’s tools.",
                },
                {
                  id: 2,
                  description:
                    "Facebook Blueprint Certifications: Demonstrate your expertise in Facebook advertising.",
                },
                {
                  id: 3,
                  description:
                    "HubSpot Content Marketing Certification: Show your knowledge in content marketing strategies.",
                },
              ],
            },
            {
              id: 4,
              title: "Read Blogs and Stay Updated",
              content:
                "The digital marketing field evolves rapidly. Stay informed by following authoritative blogs:",
              listitem: [
                {
                  id: 1,
                  description: "Neil Patel Blog",
                },
                {
                  id: 2,
                  description: "Moz Blog",
                },
                {
                  id: 3,
                  description: "Search Engine Journal",
                },
                {
                  id: 4,
                  description:
                    "HubSpot Blog These sources provide insights into current trends, strategies, and industry news.",
                },
              ],
            },
            {
              id: 5,
              title: "Practice Hands-On",
              content:
                "Apply what you’ve learned through practical experience:",
              listitem: [
                {
                  id: 1,
                  description:
                    "Start a Blog or Website: Use your skills to create and optimize content.",
                },
                {
                  id: 2,
                  description:
                    "Social Media Practice: Run small ad campaigns on platforms like Facebook, Instagram, or LinkedIn to understand ad mechanics.",
                },
                {
                  id: 3,
                  description:
                    "Google Analytics and Ads: Set up Google Analytics on your site to track performance and experiment with Google Ads for paid search.",
                },
              ],
            },
            {
              id: 6,
              title: "Learn Tools and Software",
              content:
                "Familiarize yourself with essential digital marketing tools:",
              listitem: [
                {
                  id: 1,
                  description: "SEO Tools: SEMrush, Ahrefs, Moz",
                },
                {
                  id: 2,
                  description: "Social Media Tools: Buffer, Hootsuite",
                },
                {
                  id: 3,
                  description:
                    "Email Marketing Tools: Mailchimp, ActiveCampaign",
                },
                {
                  id: 4,
                  description:
                    "Analytics Tools: Google Analytics, HubSpot Analytics",
                },
              ],
            },
            {
              id: 7,
              title: "Join Communities and Forums",
              content:
                "Engage with other digital marketers to share experiences and discuss trends:",
              listitem: [
                {
                  id: 1,
                  description: "Reddit (Digital Marketing Subreddits)",
                },
                {
                  id: 2,
                  description: "Quora (Digital Marketing Topics)",
                },
                {
                  id: 3,
                  description: "Inbound.org",
                },
                {
                  id: 4,
                  description: "MarketingProfs",
                },
              ],
            },
            {
              id: 8,
              title: "Experiment and Analyze Results",
              content:
                "Digital marketing involves trial and error. Implement strategies, measure their success, adjust based on data, and learn from your results to continually refine your approach.",
            },
            {
              id: 9,
              title: "Intern or Freelance",
              content: "Gain hands-on experience",
              listitem: [
                {
                  id: 1,
                  description:
                    "Internships: Work with companies or agencies specializing in digital marketing.",
                },
                {
                  id: 2,
                  description:
                    "Freelancing: Offer your services to small businesses to build a portfolio and gain practical experience.",
                },
              ],
            },
            {
              id: 10,
              title: "Stay Consistent",
              content:
                "Consistent learning and experimentation are crucial. Stay curious, adaptable, and committed to improving your skills as digital marketing is a constantly evolving field.",
            },
          ],
        },
        {
          id: 3,
          title: "Digital Marketing Tools",
          description:
            "Digital marketing tools are crucial for automating, analyzing, and optimizing strategies across various channels. Here's a comprehensive list of essential tools categorized by their functions:",
          content: [
            {
              id: 1,
              title: "SEO (Search Engine Optimization) Tools",
              listitem: [
                {
                  id: 1,
                  description:
                    "Google Search Console: Monitors website performance in Google search results and helps with SEO improvements.",
                },
                {
                  id: 2,
                  description:
                    "Ahrefs: A comprehensive tool for backlink analysis, keyword research, and competitive analysis.",
                },
                {
                  id: 3,
                  description:
                    "SEMrush: An all-in-one marketing toolkit for improving SEO, conducting competitor analysis, and researching keywords.",
                },
                {
                  id: 4,
                  description:
                    "Moz: Offers features like site audits, rank tracking, backlink analysis, and keyword research.",
                },
                {
                  id: 5,
                  description:
                    "Yoast SEO (WordPress Plugin): Optimizes content for search engines directly within WordPress.",
                },
              ],
            },
            {
              id: 2,
              title: "Analytics Tools",
              listitem: [
                {
                  id: 1,
                  description:
                    "Google Analytics: Provides detailed insights into website traffic, user behavior, and conversion rates.",
                },
                {
                  id: 2,
                  description:
                    "Hotjar: Tracks user behavior with heatmaps, session recordings, and surveys to optimize the user experience",
                },
                {
                  id: 3,
                  description:
                    "Adobe Analytics: Offers advanced analytics and reporting for deeper insights into digital performance.",
                },
              ],
            },
            {
              id: 3,
              title: "Social Media Marketing Tools",
              listitem: [
                {
                  id: 1,
                  description:
                    "Buffer: Schedules social media posts across multiple platforms and provides analytics on performance.",
                },
                {
                  id: 2,
                  description:
                    "Hootsuite: Manages multiple social media accounts, schedules posts, and tracks engagement and performance",
                },
                {
                  id: 3,
                  description:
                    "Sprout Social: A robust platform with scheduling, monitoring, and reporting features.",
                },
                {
                  id: 4,
                  description:
                    "Later: Focuses on Instagram scheduling and planning with a visual content calendar and analytics.",
                },
                {
                  id: 5,
                  description:
                    "•	Canva: A design tool for creating social media graphics, ads, and posts.",
                },
              ],
            },
            {
              id: 4,
              title: "Email Marketing Tools",
              listitem: [
                {
                  id: 1,
                  description:
                    "Mailchimp: An email marketing platform with automation features, templates, and analytics.",
                },
                {
                  id: 2,
                  description:
                    "ActiveCampaign: Combines email marketing, marketing automation, and CRM tools to enhance customer engagement.",
                },
                {
                  id: 3,
                  description:
                    "ConvertKit: Built for creators, offering easy-to-use email automation and subscriber management.",
                },
                {
                  id: 4,
                  description:
                    "GetResponse: Provides email marketing, automation, landing pages, and webinars.",
                },
              ],
            },
            {
              id: 5,
              title: "PPC (Pay-Per-Click) & Advertising Tools",
              listitem: [
                {
                  id: 1,
                  description:
                    "Google Ads: A platform for creating and managing search ads, display ads, and video ads on Google’s network.",
                },
                {
                  id: 2,
                  description:
                    "Facebook Ads Manager: Manages and optimizes ads on Facebook and Instagram.",
                },
                {
                  id: 3,
                  description:
                    "AdEspresso: Optimizes and A/B tests Facebook, Instagram, and Google Ads campaigns.",
                },
                {
                  id: 4,
                  description:
                    "WordStream: Helps manage PPC campaigns across multiple platforms like Google Ads, Bing, and Facebook.",
                },
              ],
            },
            {
              id: 6,
              title: "Content Marketing Tools",
              listitem: [
                {
                  id: 1,
                  description:
                    "BuzzSumo: Discover popular content, track trends, and identify influencers in your niche.",
                },
                {
                  id: 2,
                  description:
                    "HubSpot: Combines content management, SEO, lead generation, and automation.",
                },
                {
                  id: 3,
                  description:
                    "CoSchedule: An editorial calendar tool for content planning and marketing project management.",
                },
                {
                  id: 4,
                  description:
                    "Grammarly: A writing assistant that helps create error-free, clear, and engaging content.",
                },
              ],
            },
            {
              id: 7,
              title: "Customer Relationship Management (CRM) Tools",
              listitem: [
                {
                  id: 1,
                  description:
                    "Salesforce: Manages sales, marketing, and customer service interactions.",
                },
                {
                  id: 2,
                  description:
                    "HubSpot CRM: A free, user-friendly CRM with marketing automation and sales pipeline management.",
                },
                {
                  id: 3,
                  description:
                    "Zoho CRM: A customizable CRM with features for managing sales, marketing, and customer support.",
                },
              ],
            },
            {
              id: 8,
              title: "Marketing Automation Tools",
              listitem: [
                {
                  id: 1,
                  description:
                    "HubSpot Marketing Hub: Automation features for email marketing, lead nurturing, and social media.",
                },
                {
                  id: 2,
                  description:
                    "Marketo: Focuses on email campaigns, lead nurturing, and customer journeys.",
                },
                {
                  id: 3,
                  description:
                    "Pardot: A B2B marketing automation platform by Salesforce offering email marketing and lead generation.",
                },
              ],
            },
            {
              id: 9,
              title: "Conversion Rate Optimization (CRO) Tools",
              listitem: [
                {
                  id: 1,
                  description:
                    "Optimizely: A platform for A/B testing and experimentation to improve website conversion rates.",
                },
                {
                  id: 2,
                  description:
                    "Unbounce: Helps create, optimize, and test high-converting landing pages.",
                },
                {
                  id: 3,
                  description:
                    "Crazy Egg: Provides heatmaps, scrollmaps, and A/B testing to understand visitor engagement.",
                },
              ],
            },
            {
              id: 10,
              title: "Affiliate Marketing Tools",
              listitem: [
                {
                  id: 1,
                  description:
                    "CJ Affiliate (formerly Commission Junction): Connects advertisers with publishers.",
                },
                {
                  id: 2,
                  description:
                    "ShareASale: Allows advertisers to find affiliates and track commissions.",
                },
                {
                  id: 3,
                  description:
                    "Impact: Manages affiliates, influencers, and strategic partnerships.",
                },
              ],
            },
            {
              id: 11,
              title: "E-commerce Marketing Tools",
              listitem: [
                {
                  id: 1,
                  description:
                    "Shopify: Offers built-in marketing features like email campaigns, SEO, and social media integration.",
                },
                {
                  id: 2,
                  description:
                    "Klaviyo: A powerful email marketing platform for e-commerce with detailed customer segmentation.",
                },
                {
                  id: 3,
                  description:
                    "BigCommerce: Focuses on SEO, multi-channel selling, and marketing integrations.",
                },
              ],
            },
            {
              id: 12,
              title: "Influencer Marketing Tools",
              content:
                "These tools are essential for marketers to efficiently manage their digital marketing activities, automate repetitive tasks, and gain insights into campaign performance to improve results.",
              listitem: [
                {
                  id: 1,
                  description:
                    "Upfluence: Discover, manage, and track influencer marketing campaigns.",
                },
                {
                  id: 2,
                  description:
                    "AspireIQ: Helps brands collaborate with influencers across various platforms.",
                },
                {
                  id: 3,
                  description:
                    "Traackr: Manages influencer relationships, tracks performance, and optimizes campaigns.",
                },
              ],
            },
          ],
        },
        {
          id: 3,
          title: "Top Free Websites to Learn Digital Marketing",
          description:
            "For those looking to dive into digital marketing without breaking the bank, here are five excellent free resources to get started",
          content: [
            {
              id: 1,
              title: "Google Digital Garage",
              listitem: [
                {
                  id: 1,
                  description: "Website: Google Digital Garage",
                },
                {
                  id: 2,
                  description:
                    "Focus: Digital marketing fundamentals, SEO, SEM, social media, and analytics.",
                },
                {
                  id: 3,
                  description:
                    "Details: Offers free courses from Google on a wide range of digital marketing topics, from basic to advanced levels. Courses come with certifications upon completion, making it a valuable resource for foundational learning.",
                },
              ],
            },
            {
              id: 2,
              title: "HubSpot Academy",
              listitem: [
                {
                  id: 1,
                  description: "Website: HubSpot Academy",
                },
                {
                  id: 2,
                  description:
                    "Focus: Inbound marketing, content marketing, email marketing, social media, and sales.",
                },
                {
                  id: 3,
                  description:
                    "Details: Provides a variety of free courses and certifications. Known for its high-quality video lessons and practical exercises, HubSpot Academy is ideal for gaining in-depth knowledge and hands-on experience.",
                },
              ],
            },
            {
              id: 3,
              title: "Coursera",
              listitem: [
                {
                  id: 1,
                  description: "Website: Coursera",
                },
                {
                  id: 2,
                  description:
                    "Focus: Digital marketing, analytics, SEO, content creation, and more.",
                },
                {
                  id: 3,
                  description:
                    "Details: Offers free courses from top universities and companies. While certificates may require payment, you can access course content for free through audit mode, making it a flexible option for learning.",
                },
              ],
            },
            {
              id: 4,
              title: "Facebook Blueprint",
              listitem: [
                {
                  id: 1,
                  description: "Website: Facebook Blueprint",
                },
                {
                  id: 2,
                  description:
                    "Focus: Facebook and Instagram advertising, social media marketing.",
                },
                {
                  id: 3,
                  description:
                    "Details: Provides free online courses focused specifically on Facebook and Instagram advertising. Ideal for those looking to master paid social media strategies and enhance their social media marketing skills.",
                },
              ],
            },
            {
              id: 5,
              title: "Alison",
              listitem: [
                {
                  id: 1,
                  description: "Website: Alison",
                },
                {
                  id: 2,
                  description:
                    "Focus: Digital marketing, content marketing, SEO, Google Analytics, and more.",
                },
                {
                  id: 3,
                  description:
                    "Details: Offers free courses on various aspects of digital marketing, from beginner to advanced levels. While learning is free, certificates may come with a small fee, providing a cost-effective way to demonstrate your skills.",
                },
              ],
            },
          ],
        },
        {
          id: 4,
          title: "Career Opportunities in Digital Marketing",
          description:
            "As you become proficient in digital marketing, a variety of roles become available depending on your skills and expertise. Here are some common positions in the field, along with their average salary ranges in India (INR):",
          content: [
            {
              id: 1,
              title: "Digital Marketing Executive",
              listitem: [
                {
                  id: 1,
                  description:
                    "Role: Implement digital marketing strategies, manage social media accounts, handle email marketing, SEO, and PPC campaigns.",
                },
                {
                  id: 2,
                  description: "Salary: ₹2.5 - ₹4.5 LPA (Lakh per annum)",
                },
              ],
            },
            {
              id: 2,
              title: "SEO Specialist",
              listitem: [
                {
                  id: 1,
                  description:
                    "Role: Optimize website content, manage on-page and off-page SEO, conduct keyword research, and improve search engine rankings.",
                },
                {
                  id: 2,
                  description: "Salary: ₹3 - ₹6 LPA",
                },
              ],
            },
            {
              id: 3,
              title: "Social Media Manager",
              listitem: [
                {
                  id: 1,
                  description:
                    "Role: Manage and grow social media channels, create content strategies, engage with the audience, and run social media ad campaigns.",
                },
                {
                  id: 2,
                  description: "Salary: ₹3 - ₹7 LPA",
                },
              ],
            },
            {
              id: 4,
              title: "Content Marketing Manager",
              listitem: [
                {
                  id: 1,
                  description:
                    "Role: Develop content strategies, create blog posts, videos, and infographics, and optimize content for SEO.",
                },
                {
                  id: 2,
                  description: "Salary: ₹4 - ₹8 LPA",
                },
              ],
            },
            {
              id: 5,
              title: "PPC (Pay-Per-Click) Specialist",
              listitem: [
                {
                  id: 1,
                  description:
                    "Role: Manage paid advertising campaigns on platforms like Google Ads and social media, optimize ad performance and budget.",
                },
                {
                  id: 2,
                  description: "Salary: ₹3.5 - ₹7 LPA",
                },
              ],
            },
            {
              id: 6,
              title: "Email Marketing Specialist",
              listitem: [
                {
                  id: 1,
                  description:
                    "Role: Create and manage email marketing campaigns, build email lists, monitor performance metrics, and increase conversions.",
                },
                {
                  id: 2,
                  description: "Salary: ₹3 - ₹6 LPA",
                },
              ],
            },
            {
              id: 7,
              title: "Digital Marketing Manager",
              listitem: [
                {
                  id: 1,
                  description:
                    "Role: Develop and oversee digital marketing strategies, manage teams, monitor marketing campaigns, analyze metrics, and optimize performance.",
                },
                {
                  id: 2,
                  description: "Salary: ₹6 - ₹12 LPA",
                },
              ],
            },
            {
              id: 8,
              title: "Analytics Manager",
              listitem: [
                {
                  id: 1,
                  description:
                    "Role: Track and analyze performance data from campaigns, create reports, and optimize strategies based on insights.",
                },
                {
                  id: 2,
                  description: "Salary: ₹5 - ₹10 LPA",
                },
              ],
            },
            {
              id: 9,
              title: "E-commerce Manager",
              listitem: [
                {
                  id: 1,
                  description:
                    "Role: Oversee the online sales strategy for e-commerce platforms, optimize user experience, and handle digital marketing and SEO for product listings.",
                },
                {
                  id: 2,
                  description: "Salary: ₹5 - ₹12 LPA",
                },
              ],
            },
            {
              id: 10,
              title: "Affiliate Marketing Manager",
              listitem: [
                {
                  id: 1,
                  description:
                    "Role: Manage affiliate partnerships, track affiliate sales, and optimize the affiliate marketing strategy.",
                },
                {
                  id: 2,
                  description: "Salary: ₹4 - ₹9 LPA",
                },
              ],
            },
            {
              id: 11,
              title: "Influencer Marketing Manager",
              listitem: [
                {
                  id: 1,
                  description:
                    "Role: Identify and collaborate with influencers, manage influencer campaigns, track performance, and optimize strategies.",
                },
                {
                  id: 2,
                  description: "Salary: ₹4 - ₹8 LPA",
                },
              ],
            },
            {
              id: 12,
              title: "Product Marketing Manager",
              listitem: [
                {
                  id: 1,
                  description:
                    "Role: Create strategies to promote and position products in the market, run digital campaigns, and analyze market trends.",
                },
                {
                  id: 2,
                  description: "Salary: ₹8 - ₹15 LPA",
                },
              ],
            },
            {
              id: 13,
              title: "Growth Hacker",
              listitem: [
                {
                  id: 1,
                  description:
                    "Role: Focus on rapid growth through innovative digital marketing techniques, work with data-driven campaigns, and scaling strategies.",
                },
                {
                  id: 2,
                  description: "Salary: ₹5 - ₹15 LPA",
                },
              ],
            },
          ],
        },
        {
          id: 5,
          title:
            "Enhancing Your Digital Marketing Career: Key Aspects to Consider",
          description:
            "To excel in digital marketing, consider these additional aspects to elevate your career:",
          content: [
            {
              id: 1,
              title: "Specialize in a Niche",
              listitem: [
                {
                  id: 1,
                  description:
                    "Why Important: Digital marketing is vast, so specializing in one area (such as SEO, PPC, social media, or email marketing) can make you more competitive in the job market.",
                },
                {
                  id: 2,
                  description:
                    "What You Can Do: Focus on mastering one specific skill while maintaining a foundational understanding of other areas. This approach allows you to become an expert and stand out from generalists.",
                },
              ],
            },
            {
              id: 2,
              title: "Practical Experience",
              listitem: [
                {
                  id: 1,
                  description:
                    "Why Important: Hands-on experience is highly valued by employers. Applying theory in real-world scenarios will set you apart from those with only academic knowledge.",
                },
                {
                  id: 2,
                  description:
                    "What You Can Do: Engage in live projects, internships, freelance work, or even start your own blog or website to gain practical experience and showcase your skills.",
                },
              ],
            },
            {
              id: 3,
              title: "Building a Personal Brand",
              listitem: [
                {
                  id: 1,
                  description:
                    "Why Important: Your online presence reflects your expertise and skills to potential employers or clients.",
                },
                {
                  id: 2,
                  description:
                    "What You Can Do: Develop a strong portfolio, optimize your LinkedIn profile, and regularly share your insights on social media to establish yourself as an authority in the digital marketing space.",
                },
              ],
            },
            {
              id: 4,
              title: "Staying Updated on Industry Trends",
              listitem: [
                {
                  id: 1,
                  description:
                    "Why Important: Digital marketing is constantly evolving, and staying updated helps you adapt to new trends and technologies.",
                },
                {
                  id: 2,
                  description:
                    "o	What You Can Do: Follow industry blogs, attend webinars, and join online communities to keep abreast of the latest developments, such as advancements in AI and voice search.",
                },
              ],
            },
            {
              id: 5,
              title: "Data-Driven Decision Making",
              listitem: [
                {
                  id: 1,
                  description:
                    "Why Important: Effective digital marketing relies heavily on data and analytics for optimizing campaigns and measuring success.",
                },
                {
                  id: 2,
                  description:
                    "What You Can Do: Gain proficiency in analytics tools like Google Analytics and focus on using data to drive decisions and improve campaign performance.",
                },
              ],
            },
            {
              id: 6,
              title: "Networking",
              listitem: [
                {
                  id: 1,
                  description:
                    "Why Important: Networking with other professionals can open doors to job opportunities and provide valuable learning experiences.",
                },
                {
                  id: 2,
                  description:
                    "What You Can Do: Attend industry conferences, join digital marketing groups on LinkedIn, and actively engage in discussions to expand your network and gain insights from peers.",
                },
              ],
            },
            {
              id: 7,
              title: "Certifications & Continuous Learning",
              listitem: [
                {
                  id: 1,
                  description:
                    "Why Important: Certifications demonstrate your commitment to learning and enhance your credibility in the field.",
                },
                {
                  id: 2,
                  description:
                    "What You Can Do: Pursue industry-recognized certifications such as Google Ads, Facebook Blueprint, and HubSpot, and continue learning to stay competitive.",
                },
              ],
            },
            {
              id: 8,
              title: "Soft Skills Development",
              listitem: [
                {
                  id: 1,
                  description:
                    "Why Important: Digital marketing roles often require collaboration, communication, creativity, and problem-solving skills.",
                },
                {
                  id: 2,
                  description:
                    "What You Can Do: Develop your communication and leadership abilities, as well as your creative problem-solving skills, which are essential for success in digital marketing.",
                },
              ],
            },
          ],
        },
        {
          id: 6,
          title: "Mastering Digital Marketing: A Comprehensive Guide",
          content: [
            {
              id: 1,
              title: "Understanding Digital Marketing",
              content:
                "Digital marketing refers to the use of digital channels, platforms, and technologies to promote products, services, or brands. It includes:",
              listitem: [
                {
                  id: 1,
                  description:
                    "Search Engine Optimization (SEO): Improving website visibility in search engine results through organic search.",
                },
                {
                  id: 2,
                  description:
                    "Search Engine Marketing (SEM): Using paid advertisements on search engines to drive traffic (e.g., Google Ads).",
                },
                {
                  id: 3,
                  description:
                    "Social Media Marketing: Promoting products through platforms like Facebook, Instagram, LinkedIn, and Twitter.",
                },
                {
                  id: 4,
                  description:
                    "Content Marketing: Creating valuable content (blogs, videos) to engage a target audience.",
                },
                {
                  id: 5,
                  description:
                    "Email Marketing: Sending targeted emails to customers to promote products or brand awareness.",
                },
                {
                  id: 6,
                  description:
                    "Pay-Per-Click Advertising (PPC): Running paid ads where advertisers pay for each click (e.g., Google Ads).",
                },
                {
                  id: 7,
                  description:
                    "Affiliate Marketing: Partnering with others to promote products and earn commissions.",
                },
                {
                  id: 8,
                  description:
                    "Influencer Marketing: Collaborating with influencers to reach their audience.",
                },
                {
                  id: 9,
                  description:
                    "Mobile Marketing: Targeting customers through mobile channels (SMS, apps).",
                },
                {
                  id: 10,
                  description:
                    "Analytics and Data Management: Measuring and analyzing campaign performance to improve results.",
                },
              ],
            },
            {
              id: 2,
              title: "Enhancing Your Digital Marketing Career",
              content: "To advance in digital marketing, consider the following aspects:",
              listitem: [
                {
                  id: 1,
                  description:
                    "Specialize in a Niche: Focus on mastering one area (e.g., SEO, PPC) to stand out.",
                },
                {
                  id: 2,
                  description:
                    "Practical Experience: Gain hands-on experience through projects, internships, or freelancing.",
                },
                {
                  id: 3,
                  description:
                    "Building a Personal Brand: Create a portfolio, optimize your LinkedIn profile, and share insights on social media.",
                },
                {
                  id: 4,
                  description:
                    "Staying Updated on Industry Trends: Follow industry blogs, attend webinars, and join communities to keep up with new developments.",
                },
                {
                  id: 5,
                  description:
                    "Data-Driven Decision Making: Learn analytics tools and focus on making data-driven decisions.",
                },
                {
                  id: 6,
                  description:
                    "Networking: Connect with professionals at events, online groups, and through LinkedIn.",
                },
                {
                  id: 7,
                  description:
                    "Certifications & Continuous Learning: Earn certifications and keep learning about new tools and techniques",
                },
                {
                  id: 8,
                  description:
                    "Soft Skills Development: Enhance your communication, leadership, and problem-solving skills",
                },
              ],
            },
          ],
        },
        {
          id: 7,
          title: "Roadmap to Mastering Digital Marketing",
          content:[{
            id: 1,
            title:"Phase 1: Foundation (1-2 Months)",
            listitem: [
              {
                id: 1,
                description:"Understand Basics of Digital Marketing: Learn the fundamentals of SEO, SEM, social media, content marketing, PPC, and email marketing.",
              },
              {
                id: 2,
                description:"Tools/Resources: Google Digital Garage, HubSpot Academy, YouTube (Neil Patel, Ahrefs)"
              },
              {
                id: 3,
                description:"Start Building a Website/Blog: Create a blog or website using WordPress to apply your knowledge.",
              },
              {
                id: 4,
                description:"Tools: WordPress, Google Analytics, Yoast SEO"
              },
              {
                id: 5,
                description:"Get Hands-On with Social Media: Set up and manage social media accounts, experiment with posting schedules.",
              },
              {
                id: 6,
                description:"Tools: Buffer, Hootsuite, Canva"
              },
            ]
          },
          {
            id: 2,
            title:"Phase 2: Intermediate Learning (2-4 Months)",
            listitem: [
              {
                id: 1,
                description:"Specialize in a Niche: Focus on a specific digital marketing area and take advanced courses.",
              },
              {
                id: 2,
                description:"Tools/Resources: SEMrush Academy, Ahrefs Blog, Google Skillshop"
              },
              {
                id: 3,
                description:"Learn Analytics and Data: Master data tracking and analysis, complete Google Analytics certification.",
              },
              {
                id: 4,
                description:"Tools: Google Analytics, Google Data Studio, Hotjar"
              },
              {
                id: 5,
                description:"Start Small Projects or Freelance Work: Work on small projects or freelance gigs to gain practical experience.",
              },
              {
                id: 6,
                description:"Platforms: Upwork, Fiverr, LinkedIn Jobs"
              },
            ]
          },
          {
            id: 3,
            title:"Phase 3: Advanced Skills Development (4-6 Months)",
            listitem: [
              {
                id: 1,
                description:"Marketing Automation and CRM: Learn about automating marketing processes and managing CRM systems.",
              },
              {
                id: 2,
                description:"Tools: HubSpot CRM, Mailchimp, ActiveCampaign"
              },
              {
                id: 3,
                description:"Run Real Campaigns: Implement ad campaigns on Google Ads and Facebook Ads, experiment with A/B testing.",
              },
              {
                id: 4,
                description:"Tools: Google Ads, Facebook Ads Manager, AdEspresso"
              },
              {
                id: 5,
                description:"Certifications and Continuous Learning: Obtain certifications and stay updated with the latest trends.",
              },
              {
                id: 6,
                description:"Certifications: Google Ads, HubSpot, Facebook Blueprint"
              },
            ]

          },
          {
            id: 4,
            title:"Phase 4: Job Applications and Personal Branding (6-9 Months)",
            listitem: [
              {
                id: 1,
                description:"Build a Portfolio: Showcase successful campaigns, blog/website, and freelance work.",
              },
              {
                id: 2,
                description:"Enhance Your Personal Brand: Optimize your LinkedIn profile, share insights, and write guest posts."
              },
              {
                id: 3,
                description:"Networking and Job Hunting: Attend networking events, connect with professionals, and apply for relevant jobs.",
              },
            ]

          },
          {
            id: 5,
            title:"Phase 5: Continuous Growth and Career Development (9-12 Months and Beyond)",
            listitem: [
              {
                id: 1,
                description:"Expand to New Channels: Learn new digital marketing channels like influencer and video marketing.",
              },
              {
                id: 2,
                description:"Target Higher-Level Roles: Aim for roles like Digital Marketing Manager or Growth Hacker, focusing on leadership skills."
              },
              {
                id: 3,
                description:"Run Real Campaigns: Implement ad campaigns on Google Ads and Facebook Ads, experiment with A/B testing.",
              },
              {
                id: 4,
                description:"Scale Freelance Work or Start an Agency: Consider taking on larger clients or starting your own agency."
              },
            ]
          },
          
        ]
        },
        {
          
            id: 6,
            title:"Tools/Certifications to Focus On Throughout:", 
            content: [
              {
                id: 1,
                title:"Tools/Certifications",
                listitem: [{
                  id: 1,
                  description:"Tools: Google Analytics, SEMrush, HubSpot, Ahrefs, Hootsuite"
                },
                {
                  id: 2,
                  description:"Certifications: Google Ads, Facebook Blueprint, HubSpot Academy, SEMrush, Analytics Certification"
                }
              ]
              },
              {
                id: 2,
                title:"Additional points",
                listitem: [{
                  id: 1,
                  description:"Google Keyword Planner is an essential tool for digital marketers, offering in-depth insights into keyword search volume, competition, and cost-per-click data. By using Google Keyword Planner, you can effectively plan your SEO and PPC campaigns, ensuring you're targeting the right keywords to drive traffic and conversions."
                },
                {
                  id: 2,
                  description:"If you're looking to kickstart your career in digital marketing, enrolling in a digital marketing course in Chennai, Hyderabad can provide you with the practical knowledge and skills needed to succeed. These courses cover essential topics like SEO, PPC, social media marketing, and more, making them ideal for beginners and professionals alike.",
                },
                {
                  id: 3,
                  description:"A digital marketing course is essential for individuals and professionals aiming to master online marketing strategies. It covers various topics like SEO, content marketing, social media, email marketing, and PPC, helping learners develop skills to promote products and services effectively in the digital world."
                },
                {
                  id:4,
                  description:"The Google Digital Garage Fundamentals of Digital Marketing course is a comprehensive, free certification program that provides a strong foundation in digital marketing. It covers essential topics such as SEO, SEM, social media marketing, and analytics, making it ideal for beginners looking to enhance their online marketing skills."
                },
                {
                  id: 5,
                  description:"A digital marketing agency or digital marketing company specializes in helping businesses enhance their online presence through strategies like SEO, PPC, social media marketing, and content creation. These agencies work to drive traffic, increase conversions, and build brand visibility across various digital channels."
                }
              ]
              }
            ]
    
        },
        {
          id: 7,
          title:"Conclusion",
          content: [
            {
              id: 1,
              title:"Mastering digital marketing",
              listitem: [
                {
                  id: 1,
                  description:'Mastering digital marketing is a journey that combines foundational knowledge with practical experience and continuous learning. By understanding the core areas of digital marketing—SEO, SEM, social media, content marketing, PPC, and analytics—you set a solid base for your career. Specializing in a niche, gaining hands-on experience, and staying updated with industry trends are crucial for advancement.',
                },
                {
                  id: 2,
                  description:"The roadmap provided offers a structured approach to developing your skills, from initial learning to advanced application and career growth. Embrace certifications, utilize essential tools, and focus on building a strong personal brand to stand out in the competitive landscape."
                },{
                  id: 3,
                  description:"Remember, digital marketing is dynamic, and your ability to adapt and innovate will be key to your success. Stay curious, keep experimenting, and continue learning to navigate and excel in this exciting field."
                },{
                  id: 4,
                  description:"With dedication and the right strategies, you’ll be well on your way to achieving your digital marketing goals and advancing your career."
                }
              ]

            }

          ]
        }
      ],
    },
  ];

  const blog = data.find((item) => item.id === blogId);
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  if (!blog) {
    return (
      <h2
        style={{
          textAlign: "center",
          marginTop: "2rem",
          paddingBottom: "3rem",
          fontSize: "2rem",
          color: "red",
        }}
      >
        Blog not found
      </h2>
    );
  }

  return (
    <BlogContainer>
      <ContentWrapper>
        <div style={{ textAlign: "center" }}>
          <Title data-aos="fade-up">{blog?.title}</Title>
          <Description data-aos="fade-up">{blog?.description}</Description>
        </div>
        <SectionContainer>
          {blog?.id == 1 ? (
            blog.content.map((section, index) => (
              <SectionWrapper key={section.id}>
                <ImageWrapper>
                  <Image src={section.images} alt={section.title} />
                </ImageWrapper>
                <TextWrapper>
                  <SectionTitle>{section.title}</SectionTitle>
                  <SectionContent>{section.content}</SectionContent>
                </TextWrapper>
              </SectionWrapper>
            ))
          ) : (
            <>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  width: "100%",
                  height: "auto",
                  maxWidth: "700px",
                  minHeight: "300px",
                  margin: "0 auto",
                }}
              >
                <ImageWrapper style={{ width: "100%", height: "auto" }}>
                  <Image
                    data-aos="fade-up"
                    src={blog?.images}
                    alt={blog?.title}
                    style={{ width: "100%", height: "auto" }}
                  />
                </ImageWrapper>
              </div>
              {blog?.subheding.map((section) => (
                <div key={section.id}>
                  <SectionTitleleft>{section?.title}</SectionTitleleft>
                  <SectionContentleft>
                    {section?.description}
                  </SectionContentleft>
                  {section?.content?.map((subSection) => (
                    <div key={subSection.id}>
                      <SectionTitlele> {subSection?.title}</SectionTitlele>
                      <SectionContentleft>
                        {subSection?.content}
                        {subSection?.listitem
                          ? subSection?.listitem.map((listItem) => (
                              <li
                                key={listItem.id}
                                style={{ marginLeft: "1rem" }}
                              >
                                {listItem?.description}
                              </li>
                            ))
                          : null}
                      </SectionContentleft>
                    </div>
                  ))}
                </div>
              ))}
            </>
          )}
        </SectionContainer>
      </ContentWrapper>
    </BlogContainer>
  );
};

export default Blogsingle;

const BlogContainer = styled.div`
  background-color: white;
  padding-bottom: 3rem;
  padding-top: 4rem;
  box-sizing: border-box;
`;

const ContentWrapper = styled.div`
  max-width: 72rem;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;
  box-sizing: border-box;
  overflow: hidden;
  @media (min-width: 640px) {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  @media (min-width: 1024px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
`;

const Title = styled.h1`
  font-size: 2.25rem;
  font-weight: 800;
  color: rgba(255, 72, 2, 1);
  text-align: center;

  @media (min-width: 640px) {
    font-size: 3rem;
  }
`;

const Description = styled.p`
  margin-top: 1rem;
  font-size: 1.125rem;
  color: #4b5563;
  text-align: center;
`;

const SectionContainer = styled.div`
  margin-top: 2.5rem;
`;

const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`;

const ImageWrapper = styled.div`
  flex: 1;
  padding-right: 0;

  @media (min-width: 768px) {
    padding-right: 2rem;
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 0.5rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
`;

const TextWrapper = styled.div`
  margin-top: 1.5rem;

  @media (min-width: 768px) {
    margin-top: 0;
    padding-left: 2rem;
    flex: 1;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  color: rgba(10, 13, 80, 1);
  margin-bottom: 1rem;
`;
const SectionTitlele = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  text-align: left;
  color: rgba(10, 13, 80, 1);
  margin-bottom: 1rem;
`;
const SectionTitleleft = styled.h2`

  font-size: 2rem;
  font-weight: 600;
  text-align: left;
  color: rgba(255, 72, 2, 1);
  margin: 4rem 0 1rem 0;
`;

const SectionSubTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: rgba(10, 13, 80, 1);
  margin-bottom: 1rem;
`;

const SectionList = styled.ul`
  margin: 0;
  padding: 0;
`;

const SectionContent = styled.p`
  font-size: 1rem;
  color: #374151;
`;
const SectionContentleft = styled.p`
  font-size: 1.07rem;
  font-weight: 400;
  text-align: left;
  color: #374151;
`;
