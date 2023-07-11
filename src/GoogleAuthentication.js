import './Buttons.css';
import './GoogleAuthentication.css';
import React, { useEffect, useState } from "react";
import { auth, googleProvider } from "./Firebase.js";
import { signInWithRedirect, getRedirectResult, signOut, onAuthStateChanged } from "firebase/auth";

function GoogleAuthentication() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();

  }, []); 

  useEffect(() => {
    const fetchRedirectResult = async () => {
      try {
        const result = await getRedirectResult(auth);
        setUser(result.user);
        console.log(user);
      } catch (error) {
        console.log(error.message);
      }
    }
    
    fetchRedirectResult();
    
  }, []); 

  return (
    <div>
      { !user ?
      <button className="transparent-button" onClick={() => signInWithRedirect(auth, googleProvider)}>
        Sign in with Google
      </button> :
      <>
        <div className="welcome-div">Welcome, {user.displayName}</div>
        <button className="transparent-button" onClick={() => {
          signOut(auth);
        }}>Logout</button>
      </>
       }
    </div>
  );
};

export default GoogleAuthentication;
