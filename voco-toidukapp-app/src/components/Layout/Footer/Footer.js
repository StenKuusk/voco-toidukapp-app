import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="App-footer">
      <img src="/assets/icons/ring.svg" className="footer-icon" alt="icon" />
      <div className="circle-container">
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="footer-icon">
          <circle cx="40" cy="40" r="40" fill="#03624C"/>
        </svg>
        <button className="add-button">+</button>
      </div>
      <img src="/assets/icons/gear.svg" className="footer-icon" alt="icon" />
    </footer>
  );
};

export default Footer;