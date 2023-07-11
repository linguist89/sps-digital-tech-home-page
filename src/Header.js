import React from 'react';
import './Header.css';
import HeaderImage from './static/images/site_logo.png';
import './Buttons.css';
import GoogleAuthentication from './GoogleAuthentication';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src={HeaderImage} alt="Logo" />
      </div>
      <GoogleAuthentication></GoogleAuthentication>     
    </header>
  );
};

export default Header;
