// services/githubService.js
import axios from 'axios';

export const fetchAdvancedUserData = async (username, location, minRepos) => {
  const query = [];
  
  if (username) query.push(`user:${username}`);
  if (location) query.push(`location:${location}`);
  if (minRepos) query.push(`repos:>=${minRepos}`);
  
  const queryString = query.join('+');
  const response = await axios.get(`https://api.github.com/search/users?q=${queryString}`);
  return response.data;
};
