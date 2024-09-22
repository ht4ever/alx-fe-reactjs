import React, { useState } from 'react';
import { fetchUserData } from './githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const data = await fetchUserData(username);
      setUserData(data);
    } catch (err) {
      setError('Looks like we can\'t find the user');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {userData && (
        <div>
          <img src={userData.avatar_url} alt={userData.login} />
          <h2>{userData.name}</h2>
          <p>{userData.login}</p>
          <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
            View on GitHub
          </a>
        </div>
      )}
    </div>
  );
};

export default Search;