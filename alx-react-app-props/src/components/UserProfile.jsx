// src/components/UserProfile.jsx
import React, { useContext } from 'react';
import UserContext from '../UserContext'; // Adjust path if necessary

function UserProfile() {
  const userData = useContext(UserContext);

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc' }}>
      <h2>User Profile</h2>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserProfile;
