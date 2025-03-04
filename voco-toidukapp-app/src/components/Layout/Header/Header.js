import React from 'react';
import './Header.css';

const Header = ({ onMenuClick }) => {
  return (
    <header className="App-header">
      <img src='/assets/logos/logo.svg' className="App-logo" alt="logo" />
      <button className="menu-button" onClick={onMenuClick}>
        <i className="fas fa-bars"></i>
      </button>
    </header>
  );
};

export default Header;