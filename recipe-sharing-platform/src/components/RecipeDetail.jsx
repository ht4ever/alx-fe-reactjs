import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import data from '../data.json';

const RecipeDetail = () => {
  const { id } = useParams(); // Get recipe ID from URL parameters
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    // Fetch the recipe details based on the ID
    const selectedRecipe = data.find((r) => r.id === parseInt(id));
    setRecipe(selectedRecipe);
  }, [id]);

  if (!recipe) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">{recipe.title}</h1>
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-80 object-cover rounded-lg mb-6"
      />
      <h2 className="text-2xl font-semibold mb-4">Ingredients</h2>
      <ul className="list-disc list-inside mb-6">
        {recipe.ingredients?.map((ingredient, index) => (
          <li key={index} className="text-gray-700">{ingredient}</li>
        ))}
      </ul>
      <h2 className="text-2xl font-semibold mb-4">Cooking Instructions</h2>
      <p className="text-gray-700">{recipe.instructions}</p>
    </div>
  );
};

export default RecipeDetail;
