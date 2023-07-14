import React, { useState, useContext, useEffect } from 'react';
import { getAuth, sendSignInLinkToEmail, isSignInWithEmailLink, signInWithEmailLink } from "firebase/auth";
import { UserContext } from './App';

const actionCodeSettings = {
    url: 'http://localhost:3000/', 
    handleCodeInApp: true,
  };

function LoginWithEmailLink() {
    const [showInput, setShowInput] = useState(false);
    const [email, setEmail] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const { setUser } = useContext(UserContext);
    const auth = getAuth();
  
    useEffect(() => {
      const performSignIn = async () => {
        if (isSignInWithEmailLink(auth, window.location.href)) {
          const emailFromStorage = window.localStorage.getItem('emailForSignIn');
          if (emailFromStorage) {
            try {
              const result = await signInWithEmailLink(auth, emailFromStorage, window.location.href);
              setUser(result.user);
              window.localStorage.removeItem('emailForSignIn');
              alert("User has been successfully logged in!");  // Alert message for successful login
            } catch (error) {
              const errorCode = error.code;
              const errorMessage = error.message;
              setErrorMessage(`Error code: ${errorCode}, Error message: ${errorMessage}`);
            }
          }
        }
      }
      performSignIn();
    }, [auth, setUser]);

    const sendLink = () => {
      sendSignInLinkToEmail(auth, email, actionCodeSettings)
        .then(() => {
          window.localStorage.setItem('emailForSignIn', email);
          setShowInput(false);
          setEmail("");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(`Error code: ${errorCode}, Error message: ${errorMessage}`);
        });
    };

    const handleClick = () => {
      if (!showInput) {
        setShowInput(true);
      } else {
        sendLink();
      }
    };

    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };

    return (
      <div>
        {!showInput && 
          <button className="transparent-purple-button google-button" onClick={handleClick}>
            Login with email link
          </button>
        }
        {showInput &&
          <div>
            <input type="email" value={email} onChange={handleEmailChange} />
            <button className="transparent-purple-button google-button" onClick={handleClick}>
              Send link
            </button>
          </div>
        }
        {errorMessage &&
          <div>{errorMessage}</div>
        }
      </div>
    );
};

export default LoginWithEmailLink;
