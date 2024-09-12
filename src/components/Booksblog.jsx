import React from "react";
import styled from "styled-components";
import Bookimg from "../assets/book.png";
import { Link } from "react-router-dom";

const Booksblog = () => {
  const data = [
    {
      id: 1,
      title: "Why Reading Books Can Transform Your Life",
      describtion:
        "In today's fast-paced world, where information is available at our fingertips, many people underestimate the power of reading books. But here's the truth: countless billionaires, leaders, and successful entrepreneurs credit much of their success to reading. Bill Gates, Warren Buffett, Elon Musk, and Oprah Winfrey, to name just a few, all have one thing in common—an insatiable thirst for knowledge through reading.",
      images: Bookimg,
      content: [
        {
          id: 1,
          title: "So, why should you read books, and how can they improve your life?",
          subcontent: [
            {
              id: 1,
              title: "How Does Reading Help You Improve Your Life?",
              description:"Reading is much more than a leisure activity. It’s an investment in yourself. Here’s how:",
              listitem: [
                {
                  id: 1,
                  title: "Enhances Knowledge and Skills",
                  description: "Whether you're reading about personal finance, leadership, or entrepreneurship, each book offers a wealth of knowledge that you can apply to real-life situations.",
                },
                {
                  id: 2,
                  title: "Boosts Creativity and Innovation",
                  description: "Reading opens your mind to new ideas and perspectives, which can spark creativity and innovative thinking—crucial skills in both life and business.",
                },
                {
                  id: 3,
                  title: "Improves Focus and Discipline",
                  description: "When you commit to reading regularly, it develops your attention span and self-discipline, which are vital traits for success.",
                },
                {
                  id: 4,
                  title: "Reduces Stress and Improves Mental Health",
                  description: "Studies have shown that reading can reduce stress levels by up to 68%, making it an excellent way to unwind after a long day.",
                },
              ]
            },
            {
              id: 2,
              title: "Why Should You Read Books Daily?",
              describtion:"Making reading a daily habit can supercharge your personal growth. Here’s why daily reading is key:",
              listitem: [
                {
                  id: 1,
                  title: "Continuous Learning",
                  description: "Reading daily means you are constantly learning new things, gaining fresh insights, and staying informed. Whether it's 10 pages a day or an entire chapter, the accumulation of knowledge over time can be life-changing.",
                },
                {
                  id: 2,
                  title: "Daily Inspiration and Motivation",
                  description: "Books are an endless source of inspiration. Reading every day can give you that daily boost of motivation to stay focused on your goals and dreams.",
                },
                {
                  id: 3,
                  title: "Sharpens the Mind",
                  description: "Reading regularly keeps your brain active and sharp. It improves cognitive functions, expands vocabulary, and enhances analytical thinking skills.",
                },
                {
                  id: 4,
                  title: "Forms a Powerful Habit",
                  description: "Habits shape our lives, and reading is one of the most productive habits you can develop. By incorporating reading into your daily routine, you're training yourself to prioritize self-improvement and growth every single day.",
                },
              ]
            },
            {
              id: 3,
              title: "Can Reading Books Really Make You a Billionaire?",
              describtion:"While reading alone won’t make you a billionaire, it can certainly help you get there. Many successful people use books to learn about strategies, habits, and mindsets that contribute to their success. Here are a few examples:",
              listitem: [
                {
                  id: 1,
                  title: "Bill Gates",
                  description: "Bill Gates reads about 50 books a year. He attributes much of his success to continuous learning through reading.",
                },
                {
                  id: 2,
                  title: "Warren Buffett ",
                  description: "Warren Buffett reportedly spends 80% of his day reading and considers it key to his investment strategy.",
                },
                {
                  id: 3,
                  title: "Elon Musk ",
                  description: "Elon Musk is largely self-taught in areas like rocket science through extensive reading.",
                },
              ]
            },
            {
              id: 4,
              title: "How to Develop the Skill of Reading Books ?",
              describtion:"If you're not a regular reader, don't worry—it’s a skill that can be developed. Here are some tips to help you build a consistent reading habit:",
              listitem: [
                {
                    id:1,
                    title:"Read as many books as you can",
                    description:"If you're new to reading, begin with short books or read for just 10–15 minutes a day. As your interest grows, you'll naturally start to read more.",
                },{
                    id:2,
                    title:"Set Reading Goals",
                    description:"Setting specific goals, like reading a book a month, will keep you on track and motivated. Use apps or join a book club for accountability.",
                },{
                    id:3,
                    title:"Read What Interests You",
                    description:"Don’t force yourself to read topics that bore you. Start with books that genuinely interest you, whether it’s fiction, business, or personal development.",
                },{
                    id:4,
                    title:"Mix It Up",
                    description:"Alternate between different genres or topics to keep things fresh. One week, you might read a self-help book, and the next, you could dive into a biography or novel.",
                }
              ]
            },
            {
              id: 5,
              title: "Top leadership books",
              description:"Top leadership books offer invaluable lessons on guiding teams, inspiring action, and achieving organizational success. These books provide practical strategies and proven principles on leadership, communication, and decision-making. Reading these acclaimed works can enhance your leadership skills and help you drive positive change in your professional and personal life.",
            },{
              id: 6,
              title: "Best Self-Help Books",
              description:"Discovering the best self-help books can be a game-changer for personal growth and self-improvement. These books offer invaluable insights and practical advice to help you overcome challenges, develop a positive mindset, and achieve your goals. Whether you're looking to boost your confidence, manage stress, or cultivate a more fulfilling life, the right self-help book can provide the guidance and motivation you need to transform your life."
            },
            {
              id: 7,
              title: "Must-Read Books for Entrepreneurs",
              description:"Must-read books for entrepreneurs are essential resources for anyone looking to succeed in the competitive world of business. These books provide proven strategies, inspiring success stories, and actionable advice on everything from startup management to leadership and innovation. By diving into these must-reads, entrepreneurs can gain the knowledge and skills necessary to navigate challenges, seize opportunities, and drive their ventures to new heights."
            },{
              id: 8,
              title: "Financial Literacy Books",
              description:"Financial literacy books are crucial for understanding and managing your finances effectively. They offer practical advice on budgeting, investing, and building wealth, helping you make informed financial decisions. By learning from these books, you can gain the knowledge to achieve financial independence and secure a stable financial future."
            },
            {
              id: 9,
              title:"Books for Success",
              description:"Books for success provide valuable strategies and insights to help you achieve your personal and professional goals. They cover a range of topics, including mindset, goal-setting, and productivity, offering actionable advice to overcome obstacles and reach your full potential. Reading these success-oriented books can empower you to turn your aspirations into reality and build a path to lasting achievement."
            },
            {
              id: 10,
              title:"Life challenging books",
              description:'Life-changing books have the power to transform your perspective and inspire profound personal growth. These books often offer deep insights, practical wisdom, and transformative ideas that can significantly impact how you approach life, work, and relationships. By diving into these impactful reads, you can gain valuable lessons that lead to meaningful change and a more fulfilling life.'
            },
            {
              id: 11,
              title:"Business strategy books",
              description:"Business strategy books provide essential frameworks and insights for navigating the complex world of business. They offer guidance on everything from market analysis and competitive positioning to strategic planning and execution. By studying these books, entrepreneurs and business leaders can develop effective strategies to drive growth, manage risks, and achieve long-term success"
            },
          ]
        },
        {
          id: 2,
          title: "Health",
          conttext:[
            {
              id: 1,
              subtitle: "Health and Well-being",
              subcontent: [
                {
                  id: 1,
                  subtitle: "The 5 AM Club (2018) ",
                  authour: "Author: Robin Sharma",
                  description:"This book teaches readers how waking up at 5 AM can transform their lives by boosting productivity, health, and happiness.",
                  booklink:"https://amzn.to/3XAecnw"
                },
                {
                  id: 2,
                  subtitle: "The Road Less Traveled (1978) ",
                  authour: "Author: M. Scott Peck",
                  description:"Peck explores the principles of spiritual growth, self-discipline, and personal responsibility in this life-changing book.",
                  booklink:"https://amzn.to/3B12hGr"
                },{
                  id: 3,
                  subtitle: "The Power of Positive Thinking (1952) ",
                  authour: "Author: Norman Vincent Peale",
                  description:"Peale’s timeless bestseller teaches the importance of maintaining a positive outlook to achieve success and happiness in life.",
                  booklink:"https://amzn.to/3Ti6UC3"
                },{
                  id: 4,
                  subtitle: "The New Business Road Test (2009)",
                  authour: "Author: John Mullins",
                  description:"Mullins provides a framework for evaluating new business ideas and minimizing risk before launching a startup, based on real-world entrepreneurial experience.",
                  booklink:"https://amzn.to/3XkACaX"
                }
            ]
          },
          {
            id: 2,
            subtitle: "Spirituality, Mindfulness, and Personal Fulfillment",
            subcontent: [
              {
                id: 1,
                subtitle: "The Power of Now (1997) ",
                authour: "Author: Eckhart Tolle",
                description:"Tolle’s guide to living in the present moment offers profound lessons on mindfulness, helping readers find peace and happiness.",
                booklink:"https://amzn.to/3TmrjpM"
              },
              {
                id:2,
                subtitle: "The Art of Happiness (1998)",
                authour: "Author: Dalai Lama XIV, Howard C. Cutler",
                description:"The Dalai Lama shares his views on cultivating happiness through compassion, mindfulness, and embracing change in daily life.",
                booklink:"https://amzn.to/4gfTtN1"
              },
              {
                id: 3,
                subtitle: "The Alchemist (1988) ",
                authour: "Author: Paulo Coelho",
                description:"This spiritual guide focuses on developing healthy, loving relationships by overcoming fear-based beliefs and emotions.",
                booklink:"https://amzn.to/3AQRqP9"
              },
            ]
          },
          {
            id: 3,
            subtitle: "Leadership and Influence",
            subcontent: [
              {
                id: 1,
                subtitle: "The Mastery of Love (1999) ",
                authour: "Author: Don Miguel Ruiz",
                description:"This spiritual guide focuses on developing healthy, loving relationships by overcoming fear-based beliefs and emotions.",
                booklink:"https://amzn.to/3AQRqP9"
              },
              {
                id: 2,
                subtitle: "The Real Deal (2010) ",
                authour: "Author: Sandy Weill",
                description:"A memoir from one of Wall Street's top executives, offering leadership lessons and insights into the world of finance.",
                booklink:"https://amzn.to/4eiQ7Ha"
              },

            ]
          },
          {
            id: 4,
            subtitle: "Personal Development and Influence",
            subcontent: [
              {
                id: 1,
                subtitle: "Daring Greatly (2012) ",
                authour: "Author: Brené Brown",
                description:"Brown explores the power of vulnerability, teaching readers how embracing imperfections can lead to stronger relationships, creativity, and leadership.",
                booklink:"https://amzn.to/3ZjWNAH"
              },
              {
                id: 2,
                subtitle: "The Four Agreements (1997) ",
                authour: "Author: Don Miguel Ruiz",
                description:"This spiritual guide outlines four simple principles that can lead to personal freedom and transformation, focusing on integrity and self-awareness.",
                booklink:"https://amzn.to/4dgq1E5"
              }
            ]
          }
            ],
        },
        {
          id: 3,
          title: "Wealth",
          conttext: [
            {
              id: 1,
              subtitle: "Entrepreneurship and Business Strategy",
              subcontent: [
                {
                  id: 1,
                  subtitle: "Good to Great (2001)",
                  description:"What makes some companies great? Jim Collins explores the transition from mediocrity to excellence in this management classic.",
                  booklink:"https://amzn.to/3MDDxGJ"
                },
                {
                  id: 2,
                  subtitle: "Rich Dad Poor Dad (1997)",
                  description:"Robert Kiyosaki’s financial wisdom encourages readers to rethink how they view money, investing, and wealth-building.",
                  booklink:"https://amzn.to/4eeXG1v"
                },
                {
                  id: 3,
                  subtitle: "Zero to One (2014) ",
                  description:"Peter Thiel offers his insights into building truly innovative companies that change the world, a must-read for forward-thinking entrepreneurs.",
                  booklink:"https://amzn.to/3MBKrwa"
                }
              ]
            },
            {
              id: 2,
              subtitle: "Classic Books on Personal Growth and Leadership",
              subcontent: [
                {
                  id: 1,
                  subtitle: "Think and Grow Rich (1937) ",
                  description:"Napoleon Hill's masterpiece teaches the power of mindset and persistence in achieving wealth. A must-read for anyone serious about financial independence.",
                  booklink:"https://amzn.to/4eeWM57"
                },
                {
                  id: 2,
                  subtitle: "How to Win Friends and Influence People (1936) ",
                  description:"Dale Carnegie's timeless principles for building meaningful relationships are just as relevant today. Perfect for professionals and leaders looking to refine their communication skills.",
                  booklink:"https://amzn.to/4guhUGK"
                },
                {
                  id: 3,
                  subtitle: "The 7 Habits of Highly Effective People (1989)",
                  description:"Stephen Covey's practical approach to personal effectiveness has been a game-changer for readers globally, emphasizing habits that drive success in both life and work.",
                  booklink:"https://amzn.to/4gxhorB"
                },
                {
                  id: 4,
                  subtitle: "The Richest Man in Babylon (1926)",
                  description:"Want to understand money management through simple parables? This ancient wisdom offers practical advice on saving and growing your wealth.",
                  booklink:"https://amzn.to/4cVtFTn"
                }
              ]
            },
            {
              id: 3,
              subtitle: "Wealth, Finance, and Investing",
              subcontent: [
                {
                  id: 1,
                  subtitle: "The Millionaire Mindset (2013)",
                  authour: "Author: Gerry Robert",
                  description:"This book offers valuable strategies for developing a mindset focused on wealth creation, and achieving financial freedom.",
                  booklink:"https://amzn.to/3zfEt0V"
                },
                {
                  id: 2,
                  subtitle: "The Cashflow Quadrant (1998) ",
                  authour: "Author: Robert T. Kiyosaki",
                  description:"Kiyosaki explains how different approaches to earning income—through employment, owning a business, or investing—can affect your financial future.",
                  booklink:"https://amzn.to/47pdehg"
                },
                {
                  id: 3,
                  subtitle: "The Little Book of Common Sense Investing (2007) ",
                  authour: "Author: John C. Bogle",
                  description:"Bogle advocates for low-cost index fund investing as a simple and effective way to build wealth over time, offering practical advice for beginners and experienced investors alike.",
                  booklink:"https://amzn.to/4gfOtYL"
                },
              
              ]
            },
            {
              id: 4,
              subtitle: "Self-Improvement and Personal Growth",
              subcontent: [
                {
                  id: 1,
                  subtitle: "The Compound Effect (2010) ",
                  authour: "Author: Darren Hardy",
                  description:"This book explains how small, consistent actions can lead to significant results over time, encouraging readers to focus on gradual progress for long-term success.",
                  booklink:"https://amzn.to/4dWiyem"
                },
                {
                  id: 2,
                  subtitle: "The Psychology of Selling (1985) ",
                  authour: "Author: Brian Tracy",
                  description:"Tracy shares the secrets of successful salespeople, emphasizing the importance of mindset and self-confidence in closing deals.",
                  booklink:"https://amzn.to/3z3K22C"
                },
                {
                  id: 3,
                  subtitle: "The Art of Money Getting (1880)",
                  authour: "Author: P.T. Barnum",
                  description:"A timeless guide to building wealth through ethical means, written by one of history’s most successful showmen.",
                  booklink:"https://amzn.to/47jDucy"
                },
                {
                  id: 4,
                  subtitle: "The Secret (2006) ",
                  authour: "Author: Rhonda Byrne",
                  description:"Byrne popularizes the concept of the law of attraction, teaching readers how positive thinking and visualization can help them achieve their goals.",
                  booklink:"https://amzn.to/3zm8z2M"
                },
                {
                  id: 5,
                  subtitle: "The Rich Dad’s Guide to Becoming Rich (2008) ",
                  authour: "Author: Robert T. Kiyosaki",
                  description:"Kiyosaki provides actionable steps to grow wealth and emphasizes the importance of financial literacy and entrepreneurship for long-term financial success.",
                  booklink:"https://amzn.to/4egORED"
                }
              ]
            },
            {
              id: 5,
              subtitle: "Achieving Financial Success",
              subcontent: [
                {
                  id: 1,
                  subtitle: "The Intelligent Investor (1949) ",
                  description:"Benjamin Graham’s classic on value investing is a must-read for anyone looking to enter the stock market with a long-term, risk-conscious mindset.",
                  booklink:" https://amzn.to/3zcA1Qy"
                },
                {
                  id: 2,
                  subtitle: "The Millionaire Next Door (1996) ",
                  description:"This research-based book reveals the spending and saving habits of millionaires in the U.S., offering a surprising look at how wealth is truly built.",
                  booklink:"https://amzn.to/3XckKag"
                },
                {
                  id: 3,
                  subtitle: "The Wealth of Nations (1776) ",
                  description:"Adam Smith’s foundational work on economics explains the invisible hand that governs markets, making it a vital read for anyone interested in financial systems.",
                  booklink:"https://amzn.to/3XFHH7y"

                }
              ]
            },
            {
              id: 6,
              subtitle: "Mindset, Psychology, and Motivation",
              subcontent: [
                {
                  id: 1,
                  subtitle: "Mindset (2006) ",
                  authour: "Author: Carol S. Dweck",
                  description:"Dweck’s book on the power of mindset explores the importance of a growth mindset in achieving personal and professional success. A must-read for those looking to cultivate resilience and a positive approach to challenges.",
                  booklink:"https://amzn.to/3zoN0yy"
                },
                {
                  id: 2,
                  subtitle: "Outliers (2008) ",
                  authour: "Author: Malcolm Gladwell",
                  description:"Gladwell explores the unseen factors that contribute to high levels of success, revealing the role of opportunity and timing in the achievements of outliers.",
                  booklink:"https://amzn.to/3XCA55G"
                },
                {
                  id: 3,
                  subtitle: "Grit (2016) ",
                  authour: "Author: Angela Duckworth",
                  description:"Duckworth explains how passion and perseverance are often more important than talent in reaching long-term goals, making it an essential read for self-motivation.",
                  booklink:"https://amzn.to/4eezz3a"
                }
              ]
            },
            {
              id: 7,
              subtitle: "Mindset and Psychological Growth",
              subcontent: [
                {
                  id: 1,
                  subtitle: "The Tipping Point (2000) ",
                  authour: "Author: Malcolm Gladwell",
                  description:"Gladwell investigates how small actions can trigger widespread changes, making this a valuable read for those interested in influence and social dynamics.",
                  booklink:"https://amzn.to/47l8CbI"
                },
                {
                  id: 2,
                  subtitle: "How to Stop Worrying and Start Living (1948) ",
                  authour: "Author: Dale Carnegie",
                  description:"Carnegie offers timeless advice on how to overcome worry, manage stress, and live a more fulfilling life.",
                  booklink:"https://amzn.to/4gisf8m"
                },
                
              ]

            },{
              id: 8,
              subtitle: "Wealth Building and Personal Finance",
              subcontent: [
                {
                  id: 1,
                  subtitle: "The Total Money Makeover (2003) ",
                  authour: "Author: Dave Ramsey",
                  description:"Ramsey’s book offers a step-by-step plan for getting out of debt, managing finances, and building wealth, making it essential for personal financial success.",
                  booklink:"https://amzn.to/3ZcPWJk"
                },
                {
                  id: 2,
                  subtitle: "The Millionaire Next Door (1996) ",
                  authour: "Authors: Thomas J. Stanley, William D. Danko",
                  description:"Stanley and Danko reveal the habits of America’s wealthy, showing how frugality and smart money management lead to financial independence.",
                  booklink:"https://amzn.to/4d1e4Sg"
                }
              ]
            },{

            }
          ]
        },
        {
          id: 4,
          title: "Time",
          conttext:[
            {
              id: 1,
              subtitle: "Mastering Productivity and Building Powerful Habits",
              subcontent: [
                {
                  id: 1,
                  subtitle: "Atomic Habits (2018) ",
                  description:"James Clear’s bestselling book provides clear, actionable steps for forming good habits and breaking bad ones, making it a guide for long-term success.",
                  booklink:" https://amzn.to/3MEFenf"
                },
                {
                  id: 2,
                  subtitle: "The 4-Hour Workweek (2007) ",
                  description:"Dreaming of more freedom and flexibility? Tim Ferriss shares how you can design your lifestyle for maximum productivity and enjoyment with minimal time investment.",
                  booklink:"https://amzn.to/3B0SwIj"
                }
              ]
            },{
              id: 2,
              subtitle: "Time Management and Productivity",
              subcontent: [
                {
                  id: 1,
                  subtitle: "The 7 Habits of Highly Effective Families (1997) ",
                  authour: "Author: Stephen R. Covey",
                  description:"Covey adapts his famous 7 Habits for families, teaching principles that can help create a harmonious, successful family life.",
                  booklink:"https://amzn.to/3XkeH3B"
                },
              ]
            },

            {
              id: 3,
              subtitle: "Leadership and Teamwork",
              subcontent: [
                {
                  id: 1,
                  subtitle: "The Goal Setting Handbook (2015) ",
                  authour: "Author: John Maxwell",
                  description:"This book provides a framework for setting and achieving personal and professional goals, making it a must-read for leaders and individuals seeking success.",
                  booklink:"https://amzn.to/4d1g6lm"
                },
              ]
            },
            {
              id: 4,
              subtitle: "Productivity and Time Management",
              subcontent: [
                {
                  id: 1,
                  subtitle: "The 12 Week Year (2013) ",
                  authour: "Author: Brian P. Moran, Michael Lennington",
                  description:"This book helps you maximize productivity by focusing on short-term, 12-week goals rather than annual objectives, helping you achieve more in less time.",
                  booklink:"https://amzn.to/3ZjUk9A"
                }
              ]
            },
            {
              id:5,
              subtitle: "Psychology and Behavioral Science",
              subcontent: [
                {
                  id: 1,
                  subtitle: "The Power of Habit (2012) ",
                  authour: "Author: Charles Duhigg",
                  description:"Duhigg explains how habits are formed and how they can be changed, offering a scientific approach to building better routines and achieving success.",
                  booklink:"https://amzn.to/3TLmXJd"
                },
                {
                  id: 2,
                  subtitle: "The Subtle Art of Not Giving a F*ck (2016) ",
                  authour: "Author: Mark Manson",
                  description:"This counterintuitive self-help guide challenges traditional views on positivity, encouraging readers to focus on what truly matters in life.",
                  booklink:"https://amzn.to/4dUzX7j"
                }
              ]
            },
          ]
        },
        {
          id: 5,
          title: "Knowledge",
          conttext:[
            {
              id:1,
              subtitle: "Classic Books on Personal Growth and Leadership",
              subcontent:[
                {
                  id: 1,
                  subtitle: "Think and Grow Rich (1937) ",
                  description:"Napoleon Hill's masterpiece teaches the power of mindset and persistence in achieving wealth. A must-read for anyone serious about financial independence.",
                  booklink:"https://amzn.to/4eeWM57"
                },
                {
                  id: 2,
                  subtitle: "The Richest Man in Babylon (1926) ",
                  description:"Want to understand money management through simple parables? This ancient wisdom offers practical advice on saving and growing your wealth.",
                  booklink:"  https://amzn.to/4cVtFTn"
                }
              ]
            },
            {
              id: 2,
              subtitle: "Strategy and Innovation",
              subcontent: [
                {
                  id: 1,
                  subtitle: "Blue Ocean Strategy (2005) ",
                  authour: "Authors: W. Chan Kim, Renée Mauborgne",
                  description:"This book presents strategies for creating uncontested market space, allowing businesses to avoid competition and thrive in new markets.",
                  booklink:"https://amzn.to/4cYSgGT"
                },
                {
                  id: 2,
                  subtitle: "The Innovator’s Dilemma (1997) ",
                  authour: "Author: Clayton M. Christensen",
                  description:"Christensen’s groundbreaking book explains why successful companies often fail when they don’t embrace disruptive innovation.",
                  booklink:"https://amzn.to/3zoPQ6G"
                }
              ]
            },
            {
              id: 3,
              subtitle: "Mindset and Influence",
              subcontent: [
                {
                  id: 1,
                  subtitle: "Influence (1984) ",
                  authour: "Author: Robert B. Cialdini",
                  description:"Cialdini explores the psychology of persuasion and influence, revealing how people can be swayed and how individuals can use these principles to their advantage.",
                  booklink:"https://amzn.to/4d2y2fo"
                }
              ]
            },
            {
              id: 4,
              subtitle: "Spirituality, Mindfulness, and Personal Fulfillment",
              subcontent: [
                {
                  id: 1,
                  subtitle: "The Wisdom of Crowds (2004) ",
                  authour: "Author: James Surowiecki",
                  description:"Surowiecki explores how collective intelligence often leads to better decisions than individual expertise, revealing the power of group thinking.",
                  booklink:"https://amzn.to/47nM1v5"
                },{
                  id: 2,
                  subtitle: "The Power of Now (1997) ",
                  authour: "Author: Eckhart Tolle",
                  description:"Tolle’s guide to living in the present moment offers profound lessons on mindfulness, helping readers find peace and happiness.",
                  booklink:"https://amzn.to/3TmrjpM"
                }
              ]
            }
          ]
        },
        {
          id: 6,
          title: "Business",
          conttext:[
            {
              id:1,
              subtitle: "Business and Entrepreneurship",
              subcontent:[
                {
                  id: 1,
                  subtitle: "The Lean Startup (2011) ",
                  authour: "Author: Eric Ries",
                  description:"Ries introduces a scientific approach to launching startups, focusing on innovation and creating value while minimizing risks.",
                  booklink:"https://amzn.to/4dULJhH"
                },{
                  id: 2,
                  subtitle: "The Startup Owner's Manual (2012) ",
                  authour: "Author: Steve Blank",
                  description:"This comprehensive guide provides entrepreneurs with the tools they need to successfully build and scale a startup, using practical and proven methodologies.",
                  booklink:"https://amzn.to/47l5lZY"
                },
              ]
        },
        {
          id: 2,
          subtitle: "Success and Motivation (continued)",
          subcontent: [
            {
              id: 1,
              subtitle: "The Hard Thing About Hard Things (2014) ",
              authour: "Author: Ben Horowitz",
              description:"Horowitz shares candid advice on navigating the challenges of building and leading a startup, offering personal insights and practical strategies.",
              booklink:"https://amzn.to/3MEvlGf"
            },{
              id: 2,
              subtitle: "Delivering Happiness (2010) ",
              authour: "Author: Tony Hsieh",
              description:"Zappos CEO Tony Hsieh explains how delivering excellent customer service and fostering company culture can drive business success and personal fulfillment.",
              booklink:"https://amzn.to/47hIYER"
            },
            {
              id: 3,
              subtitle: "The Big Leap (2009) ",
              authour: "Author: Gay Hendricks",
              description:"Hendricks identifies the hidden barriers to personal success and teaches readers how to overcome them, enabling personal and professional growth.",
              booklink:"https://amzn.to/3TlHhAx"
            }
          ]
        },
        {
          id: 3,
          subtitle: "Health, Wellness, and Happiness",
          subcontent: [
            {
              id: 1,
              subtitle: "The Business of Happiness (2016) ",
              authour: "Author: Ted Leonsis",
              description:"Leonsis explains how success in business doesn’t always guarantee happiness and offers insights on how to balance personal fulfillment with professional achievement.",
              booklink:"https://amzn.to/3MBTpcO"
            },
           
          ]
        },
        {
          id: 4,
          subtitle: "Entrepreneurship and Startups",
          subcontent: [
            {
              id: 1,
              subtitle: "The Startup Playbook (2012) ",
              authour: "Authors: David Kidder",
              description:"Kidder compiles lessons from successful entrepreneurs to guide readers through the challenges and opportunities of building a startup.",
              booklink:"https://amzn.to/4cYJ7hQ"
            }
          ]
        },
        {
          id: 5,
          subtitle: "Success and Achievement",
          subcontent: [
            {
              id: 1,
              subtitle: "The Magic of Thinking Big (1959) ",
              authour: "Author: David J. Schwartz",
              description:"Schwartz shows how having big dreams and believing in yourself can lead to extraordinary success in business and life.",
              booklink:"https://amzn.to/4ef07RQ"
            },
            {
              id: 2,
              subtitle: "The 10X Rule (2011) ",
              authour: "Author: Grant Cardone",
              description:"Cardone encourages readers to set massive goals and take massive action, outlining the mindset needed to achieve extraordinary results.",
              booklink:"https://amzn.to/3XAZrAF"
            }
          ]
        },
        {
          id: 6,
          subtitle: "Leadership and Team Building",
          subcontent: [
            {
              id: 1,
              subtitle: "Leaders Eat Last (2014) ",
              authour: "Author: Simon Sinek",
              description:"Sinek dives into the importance of leadership focused on fostering trust and creating a safe environment for teams to thrive.",
              booklink:"https://amzn.to/3MEJ8MV"
            },
            {
              id: 2,
              subtitle: "The 48 Laws of Power (1998) ",
              authour: "Author: Robert Greene",
              description:"This book explores timeless strategies for gaining and maintaining power, making it a must-read for anyone in leadership positions.",
              booklink:"https://amzn.to/3XnEyro"
            },{
              id: 3,
              subtitle: "The Five Dysfunctions of a Team (2002) ",
              authour: "Author: Patrick Lencioni",
              description:"Lencioni breaks down the common pitfalls that prevent teams from working well together and offers solutions to build cohesive, high-performing teams.",
              booklink:"https://amzn.to/3Tm2oTc"
            },
            
          ]
        },
        {
          id: 7,
          subtitle: "Final Section – Financial Success",
          subcontent: [
            {
              id: 1,
              subtitle: "The Real Estate Wholesaling Bible (2017) ",
              authour: "Author: Than Merrill",
              description:"Merrill provides a step-by-step guide to real estate wholesaling, offering readers a path to financial independence through real estate investments.",
              booklink:"https://amzn.to/3MFUOzi"
            },
            {
              id: 2,
              subtitle: "The Upside of Irrationality (2010) ",
              authour: "Author: Dan Ariely",
              description:"Ariely explores how irrational decision-making can lead to both positive and negative outcomes, offering insights into consumer behavior and financial choices.",
              booklink:"https://amzn.to/47mOaaH"
            }
          ]
        },

      
      ]
      },
      {
        id: 7,
        title: "Conclusion",
        description:"Whether you're focused on building a business, improving your habits, or growing your wealth, these books offer invaluable wisdom. Take your pick and dive into a world of knowledge. Each book has the potential to inspire a breakthrough in your personal or professional life.Don’t wait—grab your copy through the links below and get started on your journey to success!",
      }
        
      ]
    },
  ];
  return (
    <BlogContainer>
      <ContentWrapper>
        <div style={{ textAlign: "center" }}>
          <Title data-aos="fade-up">{data?.[0].title}</Title>
          <Description data-aos="fade-up">{data?.[0].describtion}</Description>
          <ImageWrapper>
            <Image src={data?.[0].images} alt={data?.[0].title} />
          </ImageWrapper>
        </div>
        <SectionContainer>
          {data?.[0].content.map((section, index) => (
            <SectionWrapper key={section.id}>
              <TextWrapper>
                <SectionTitle>{section?.title}</SectionTitle>
                <SubsectionTitle>{section?.mainheading}</SubsectionTitle>
                <SubsectionDescription>
                      {section?.description}
                    </SubsectionDescription>
                {section?.subcontent?.map((subsection, index) => (  
                  <SectionContent key={subsection.id}>
                    <SubsectionTitle>{subsection?.title}</SubsectionTitle>
                    <SubsectionSubtitle>{subsection?.subtitle}</SubsectionSubtitle>
                    <SubsectionAuthour>{subsection?.authour}</SubsectionAuthour>
                    <SubsectionDescription>
                      {subsection?.description}
                    </SubsectionDescription>
                    <SubsectionLink>{subsection?.booklink}{" "}</SubsectionLink>
                    <SubsectionList>
                      {subsection?.listitem?.map((item, index) => (
                        <SubsectionListItem key={item.id}>
                          <SubsectionListItemTitle>
                            {item.title}
                          </SubsectionListItemTitle>
                          <SubsectionListItemDescription>
                            {item.description}
                          </SubsectionListItemDescription>
                        </SubsectionListItem>
                      ))}
                    </SubsectionList>
                  </SectionContent>
                ))}
                {section?.conttext?.map((subsection, index) => (
                  <SectionContent key={subsection.id}>
                  <SubsectionTitle>{subsection?.subtitle}</SubsectionTitle>
                 {subsection?.subcontent?.map((item, index) => (
                  <SubsectionList key={item.id}>
                     <SubsectionSubtitle>{item?.subtitle}</SubsectionSubtitle>
                  <SubsectionAuthour>{item?.authour}</SubsectionAuthour>
                  <SubsectionDescription>
                    {item?.description}
                  </SubsectionDescription>
                  <SubsectionLink>{item?.booklink}{" "}</SubsectionLink>
                  <SubsectionList>
                    {item?.listitem?.map((item, index) => (
                      <SubsectionListItem key={item.id}>
                        <SubsectionListItemTitle>
                          {item.title}
                        </SubsectionListItemTitle>
                        <SubsectionListItemDescription>
                          {item.description}
                        </SubsectionListItemDescription>
                      </SubsectionListItem>
                    ))}
                  </SubsectionList>
                    </SubsectionList>
                 ))}
                </SectionContent>
                ))}
              </TextWrapper>
            </SectionWrapper>
          ))}
        </SectionContainer>
      </ContentWrapper>
    </BlogContainer>
  );
};

export default Booksblog;

const BlogContainer = styled.div`
  background-color: white;
  padding-bottom: 3rem;
  padding-top: 4rem;
  box-sizing: border-box;
`;

const SubsectionList = styled.ul`
  list-style: none;
  padding-left: 0;
`;

const SubsectionListItem = styled.li`
  margin-bottom: 1rem;
`;
const SubsectionSubtitle = styled.h4`
  margin-top: 1.5rem;
  font-size: 1.25rem;
  font-weight: 600;
  text-align: left;
  color: black;
`;

const SubsectionAuthour = styled.p`
  font-size: 1rem;
  font-weight: 400;
  text-align: left;
  color: rgba(0, 0, 0, 1);
`;

const SubsectionLink = styled.a`
  display: block;
  font-size: 1rem;
  font-weight: 400;
  text-align: left;
  color: rgba(0, 0, 0, 1);
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;


const SubsectionDescription = styled.p`
  font-size: 1rem;
  font-weight: 400;
  color: rgba(0, 0, 0, 1);
  text-align: left;
`;

const SubsectionListItemTitle = styled.h4`
  font-size: 1.25rem;
  font-weight: 600;
  text-align: left;
  color: black;
`;

const SubsectionListItemDescription = styled.p`
  font-size: 1rem;
  font-weight: 400;
  text-align: left;
  color: rgba(0, 0, 0, 1);
`;

const SubsectionTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 800;
    color: rgba(10, 13, 80, 1);
  text-align: left;
  margin-top: 1rem;
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
  max-height: 28rem;
  height: 100%;
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
 color: rgba(255, 72, 2, 1);
  margin-bottom: 1rem;
`;
const SectionTitlele = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  text-align: left;
  color: rgba(10, 13, 80, 1);
  margin: 1rem 0 0 0;
`;
const SectionTitleleft = styled.h2`
  font-size: 2.1rem;
  font-weight: 700;
  text-align: left;
  color: rgba(255, 72, 2, 1);
  margin: 4.1rem 0 1rem 0;
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
