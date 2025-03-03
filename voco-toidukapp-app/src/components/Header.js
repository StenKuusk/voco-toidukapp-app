import React from 'react';
import logo from '../images/logos/logo.svg'; // Asenda õige logofaili teega

const Header = ({ onMenuClick }) => {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <button className="menu-button" onClick={onMenuClick}>Menu</button>
    </header>
  );
};

export default Header;