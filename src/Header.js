import React from 'react';
import './Header.css';
import { Button } from 'flowbite-react';
import HeaderImage from './static/images/site_logo.png';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src={HeaderImage} alt="Logo" />
      </div>
      <Button className="border-white hover:border-white hover:bg-landing-page bg-transparent">Login</Button>
    </header>
  );
};

export default Header;
