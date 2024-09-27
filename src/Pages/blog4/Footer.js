import React from 'react';
import './Footer.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Importing Font Awesome

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <div className="logo-container">
            <img src="/images/logo.png" alt="NPNG Tech Logo" className="footer-logo-img" />
            <h3>NPNG Tech</h3>
          </div>
          <p>
            Have an idea or an epic project in mind? Talk to us. Let's work together and make something great. Drop us a line at
          </p>
          <div className="footer-social">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Blogs</a></li>
          </ul>
        </div>
        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>Email: hello@npng.in</p>
          <p>Phone: +91 7200168369</p>
          <p>Address: No 18, 2nd St, Balakrishnapuram, Adambakkam, Ramapuram, Chennai, Tamil Nadu 600088</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 NPNG Tech. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;