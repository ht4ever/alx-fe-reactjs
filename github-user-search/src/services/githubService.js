// // services/githubService.js
// import axios from 'axios';

// export const fetchAdvancedUserData = async (username, location, minRepos) => {
//   const query = [];
  
//   if (username) query.push(`user:${username}`);
//   if (location) query.push(`location:${location}`);
//   if (minRepos) query.push(`repos:>=${minRepos}`);
  
//   const queryString = query.join('+');
//   const response = await axios.get(`https://api.github.com/search/users?q=${queryString}`);
//   return response.data;
// };
import axios from 'axios';

// Function to fetch user data based on username, location, and min repo count
export const fetchAdvancedUserData = async (username, location, minRepos, page = 1) => {
  try {
    let query = `q=${username}`;
    
    if (location) {
      query += `+location:${location}`;
    }
    
    if (minRepos) {
      query += `+repos:>=${minRepos}`;
    }

    // GitHub Search API with query parameters and pagination
    const response = await axios.get(
      `https://api.github.com/search/users?${query}&page=${page}&per_page=10`
    );
    
    return response.data; // Returns the search results
  } catch (error) {
    throw new Error(error.response ? error.response.data.message : "API request failed");
  }
};
