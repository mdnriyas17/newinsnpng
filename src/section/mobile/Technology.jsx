import React from 'react';
import './Technology.css';

const Technology = () => {
  const technologies = [
    { heading: 'Native Development', subheading: 'Swift, Kotlin' },
    { heading: 'Cross-Platform Development', subheading: 'React Native, Flutter' },
    { heading: 'Backend & APIs', subheading: 'Node.js, Python, Ruby' },
    { heading: 'Cloud & Hosting', subheading: 'AWS, Google Cloud, Azure' },
    { heading: 'Databases', subheading: 'MySQL, MongoDB, Firebase' },
    { heading: 'Latest Trends', subheading: 'AI, ML, AR/VR, Blockchain' }
  ];

  return (
    <div>
      <h2 className="main-heading">TECHNOLOGIES WE USE</h2> 
      <div className="circle-container">
        {technologies.map((tech, index) => (
          <div className="circle" key={index}>
            <h3>{tech.heading}</h3>
            <p>{tech.subheading}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technology;
