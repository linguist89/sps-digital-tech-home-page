import './Buttons.css';
import './GoogleAuthentication.css';
import React, { useEffect, useContext } from "react";
import { auth, googleProvider } from "./Firebase.js";
import { signInWithRedirect, getRedirectResult } from "firebase/auth";
import { UserContext } from './App';

function GoogleAuthentication() {
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
        <button className="transparent-button" onClick={() => signInWithRedirect(auth, googleProvider)}>
          Sign in with Google
        </button>
      }
    </div>
  );
};

export default GoogleAuthentication;
