// PasswordLoginAuthentication.js
import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./Firebase.js";

function PasswordLoginAuthentication() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleInputChange = (event, setter) => {
    setter(event.target.value);
  }

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <div>
      <input
        type="email"
        value={email}
        onChange={(event) => handleInputChange(event, setEmail)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(event) => handleInputChange(event, setPassword)}
        placeholder="Password"
      />
      <button onClick={handleLogin}>Login</button>
      {error && <p>{error}</p>}
    </div>
  )
}

export default PasswordLoginAuthentication;
