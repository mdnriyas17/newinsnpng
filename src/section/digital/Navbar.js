import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="images/npnglogo.png" alt="NPNG Tech" />
        <h1> NPNG Tech</h1>
      </div>
      <ul>
        <li>Home</li>        
        <button className="signup-btn">Sign Up</button>
      </ul>
    </nav>
  );
};

export default Navbar;
