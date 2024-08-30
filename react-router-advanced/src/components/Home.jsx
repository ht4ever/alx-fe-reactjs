// src/components/Home.jsx
import React from 'react';
import { useAuth } from '../context/AuthContext';

const Home = () => {
  const { isAuthenticated, login, logout } = useAuth();

  return (
    <div>
      <h1>Home</h1>
      {isAuthenticated ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <button onClick={login}>Login</button>
      )}
    </div>
  );
};

export default Home;
