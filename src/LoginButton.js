import React from "react";
import './Buttons.css';
import { useAuth0 } from "@auth0/auth0-react";

function LoginButton() {
  const { loginWithRedirect } = useAuth0();

  return <button className="transparent-button" onClick={() => loginWithRedirect()}>Login</button>;
};

export default LoginButton;