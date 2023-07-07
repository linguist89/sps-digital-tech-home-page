import React from 'react';
import './Header.css';
import HeaderImage from './static/images/site_logo.png';
import './Buttons.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src={HeaderImage} alt="Logo" />
      </div>
      <button className="transparent-button">Login</button>
    </header>
  );
};

export default Header;
