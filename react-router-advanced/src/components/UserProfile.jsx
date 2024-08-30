// src/components/UserProfile.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const UserProfile = () => {
  const { userId } = useParams();
  return (
    <div>
      <h3>User Profile</h3>
      <p>Viewing profile of user with ID: {userId}</p>
    </div>
  );
};

export default UserProfile;
