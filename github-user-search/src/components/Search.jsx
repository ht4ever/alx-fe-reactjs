import React, { useState } from 'react';
import { fetchAdvancedUserData } from '../services/githubService';  // Import the service

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!searchTerm && !location && !minRepos) return;

    setLoading(true);
    setError('');
    setUsers([]);
    setPage(1);
    setHasMore(true);
    try {
      const data = await fetchAdvancedUserData(searchTerm, location, minRepos, 1);
      setUsers(data.items);
      if (data.items.length === 0) setHasMore(false);
    } catch (err) {
      setError('Looks like we can’t find any users.');
    } finally {
      setLoading(false);
    }
  };

  const loadMore = async () => {
    setLoading(true);
    try {
      const data = await fetchAdvancedUserData(searchTerm, location, minRepos, page + 1);
      setUsers((prevUsers) => [...prevUsers, ...data.items]);
      setPage(page + 1);
      if (data.items.length === 0) setHasMore(false);
    } catch (err) {
      setError('Error loading more results.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="GitHub Username"
            className="border p-2 w-full"
          />
        </div>
        <div>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Location"
            className="border p-2 w-full"
          />
        </div>
        <div>
          <input
            type="number"
            value={minRepos}
            onChange={(e) => setMinRepos(e.target.value)}
            placeholder="Minimum Repositories"
            className="border p-2 w-full"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2">
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      <div className="space-y-4">
        {users.map((user) => (
          <div key={user.id} className="border p-4">
            <img src={user.avatar_url} alt={user.login} width="50" />
            <h3>{user.login}</h3>
            <p>Location: {user.location || 'N/A'}</p>
            <p>Public Repos: {user.public_repos}</p>
            <a href={user.html_url} target="_blank" rel="noopener noreferrer">
              View Profile
            </a>
          </div>
        ))}
      </div>

      {hasMore && !loading && (
        <button onClick={loadMore} className="bg-blue-500 text-white p-2">
          Load More
        </button>
      )}
    </div>
  );
};

export default Search;
