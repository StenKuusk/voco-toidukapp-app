import React, { useEffect } from 'react';
import './Burgermenu.css';

const BurgerMenu = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <>
      <div className={`burger-menu-overlay ${isOpen ? 'active' : ''}`} />
      <div className={`burger-menu ${isOpen ? 'open' : ''}`}>
        <div className="burger-menu-header">
          <img src='/assets/logos/logo.svg' className="burger-menu-logo" alt="logo" />
          <button className="close-button" onClick={onClose}>✕</button>
        </div>
        <div className="menu-items">
        <a href="https://www.foodsharing.ee/faq.html#faq" className="menu-item" target="_blank" rel="noopener noreferrer">KKK</a>
          <button className="menu-item">Anna tagasisidet</button>
          <a href="https://www.facebook.com/foodsharingtartu" className="menu-item" target="_blank" rel="noopener noreferrer">Võta ühendust</a>
        </div>
        <div className="heart-icon-container">
            <div className="heart-icon-circle">
                <svg width="135" height="134" viewBox="0 0 135 134" fill="none" xmlns="http://www.w3.org/2000/svg" className="ring-icon">
                  <circle cx="67.5" cy="66.9999" r="67" fill="#00DF82"/>
                </svg>
                <img src="/assets/logos/süda.svg" alt="Heart icon" />
          </div>
        </div>
      </div>
    </>
  );
};

export default BurgerMenu;