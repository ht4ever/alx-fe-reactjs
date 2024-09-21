import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import data from '../data.json';

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch('/data.json')
      .then(response => response.json())
      .then(data => {
        const selectedRecipe = data.find(item => item.id === parseInt(id));
        setRecipe(selectedRecipe);
      })
      .catch(error => console.error('Error loading recipe:', error));
  }, [id]);

  if (!recipe) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-6">
     <div className="bg-white shadow-lg rounded-lg overflow-hidden">
     <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
      <img className="w-full h-60 object-cover mb-4 rounded-lg" src={recipe.image} alt={recipe.title} />
      <p className="text-gray-700 mb-6">{recipe.summary}</p>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Ingredients</h2>
        <ul className="list-disc list-inside">
          {recipe.ingredients && recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">Instructions</h2>
        <ol className="list-decimal list-inside">
          {recipe.instructions && recipe.instructions.map((step, index) => (
            <li key={index} className="mb-2">{step}</li>
          ))}
        </ol>
      </div>
     </div>
    </div>
  );
};

export default RecipeDetail;
