import React from 'react';

const Header = ({ onMenuClick }) => {
  return (
    <header className="App-header">
      <img src='/assets/logos/logo.svg' className="App-logo" alt="logo" />
      <h1 className="app-title">Food Sharing VOCO</h1>
      <button className="menu-button" onClick={onMenuClick}>Menu</button>
    </header>
  );
};

export default Header;