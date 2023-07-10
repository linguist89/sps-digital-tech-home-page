import React from 'react';
import './Header.css';
import HeaderImage from './static/images/site_logo.png';
import './Buttons.css';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import ProfileDialog from './ProfileDialog';
import { useAuth0 } from "@auth0/auth0-react";

function Header() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  React.useEffect(() => {
    console.log(isAuthenticated);
  })
  
  return (
    <header className="header">
      <div className="logo">
        <img src={HeaderImage} alt="Logo" />
      </div>
      {
        isAuthenticated ?
        <>
          <LogoutButton></LogoutButton> 
          <ProfileDialog></ProfileDialog>
        </> :
        <LoginButton></LoginButton>
          
        
      }      
    </header>
  );
};

export default Header;
