import './Buttons.css';
import './FacebookAuthentication.css';
import React, { useEffect, useContext } from "react";
import { auth, facebookProvider } from "./Firebase.js";
import { getRedirectResult, signInWithPopup } from "firebase/auth";
import { UserContext } from './App';
import FacebookLogo from './static/images/f_logo_RGB-Blue_114.png';

function FacebookAuthentication() {
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    const fetchRedirectResult = async () => {
      try {
        const result = await getRedirectResult(auth);
        setUser(result.user);
      } catch (error) {
        console.log(error.message);
      }
    }
    
    fetchRedirectResult();
  }, []); 

  return (
    <div>
      { !user &&
        <button className="transparent-purple-button google-button" onClick={() => signInWithPopup(facebookProvider)}>
          <img src={FacebookLogo} alt="Facebook Logo" className="facebook-logo" />
          Sign in with Facebook
        </button>
      }
    </div>
  );
};

export default FacebookAuthentication;
