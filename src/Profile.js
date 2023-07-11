import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import './Profile.css';

function Profile() {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div className="profile-section">
        <img src={user.picture} alt={user.name} />
        <div>
          <h2>{`Name: ${user.name}`}</h2>
          <p>{`Email: ${user.email}`}</p>
        </div>
      </div>
    )
  );
};

export default Profile;