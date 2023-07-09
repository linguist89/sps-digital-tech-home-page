import React from 'react';
import './Header.css';
import HeaderImage from './static/images/site_logo.png';
import './Buttons.css';
import LoginDialog from './LoginDialog';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src={HeaderImage} alt="Logo" />
      </div>
      <LoginDialog></LoginDialog>
    </header>
  );
};

export default Header;
