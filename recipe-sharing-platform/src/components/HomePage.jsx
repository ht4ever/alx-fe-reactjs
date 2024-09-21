import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link
import data from '../data.json';

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch('/data.json')
      .then(response => response.json())
      .then(data => setRecipes(data))
      .catch(error => console.error('Error loading data:', error));
  }, []);

  return (
    // <div className="container mx-auto p-6">
    //   <h1 className="text-3xl font-bold mb-6">Recipe Sharing Platform</h1>
    //   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    //     {recipes.map(recipe => (
    //       <div
    //         key={recipe.id}
    //         className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl hover:scale-105 transition-all duration-300">
    //         <img className="w-full h-40 object-cover mb-4 rounded" src={recipe.image} alt={recipe.title} />
    //         <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
    //         <p className="text-gray-700">{recipe.summary}</p>
    //       </div>
    //     ))}
    //   </div>
    // </div>
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Recipe Sharing Platform</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((recipe) => (
          <div key={recipe.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-32 sm:h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{recipe.title}</h2>
              <p className="mt-2 text-gray-600">{recipe.summary}</p>
              {/* Add the Link component here */}
              <Link
                to={`/recipe/${recipe.id}`}  // Navigate to RecipeDetail using recipe ID
                className="text-blue-500 hover:underline mt-4 block"
              >
                View Recipe
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
