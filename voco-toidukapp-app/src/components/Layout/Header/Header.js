import React from 'react';

const Header = ({ onMenuClick }) => {
  return (
    <header className="App-header">
      <img src='/assets/logos/logo.svg' className="App-logo" alt="logo" />
      <button className="menu-button" onClick={onMenuClick}>Menu</button>
    </header>
  );
};

export default Header;