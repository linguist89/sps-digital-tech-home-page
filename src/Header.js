import React, { useContext } from 'react';
import './Header.css';
import HeaderImage from './static/images/site_logo.png';
import './Buttons.css';
import { auth } from './Firebase.js';
import { signOut, onAuthStateChanged } from "firebase/auth";
import { UserContext } from './App';
import LoginDialog from './LoginDialog';

function Header() {
  const { user, setUser } = useContext(UserContext);

  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []); 

  return (
    <header className="header">
      <div className="logo">
        <img src={HeaderImage} alt="Logo" />
      </div>
      { 
        user ? 
        <>
          <div className="welcome-div">Welcome, {user.displayName ? user.displayName : user.email}</div>
          <button className="transparent-button" onClick={() => signOut(auth)}>Logout</button>
        </> :
        <LoginDialog />
      }
    </header>
  );
};

export default Header;
