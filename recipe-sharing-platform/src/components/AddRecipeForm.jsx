// src/components/AddRecipeForm.js
import React, { useState } from 'react';

const AddRecipeForm = ({ onAddRecipe }) => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [preparation, setPreparation] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Basic validation
    if (!title || !ingredients || !preparation) {
      setError('All fields are required.');
      return;
    }

    const ingredientsArray = ingredients.split(',').map(item => item.trim());
    if (ingredientsArray.length < 2) {
      setError('Please provide at least two ingredients.');
      return;
    }

    const newRecipe = {
      title,
      ingredients: ingredientsArray,
      preparation,
    };

    onAddRecipe(newRecipe); // Call the function passed as a prop to add the recipe
    setTitle('');
    setIngredients('');
    setPreparation('');
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Add New Recipe</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="title">Recipe Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="ingredients">Ingredients (comma-separated)</label>
          <textarea
            id="ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-500"
            rows="4"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="preparation">Preparation Steps</label>
          <textarea
            id="preparation"
            value={preparation}
            onChange={(e) => setPreparation(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-500"
            rows="4"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Add Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;