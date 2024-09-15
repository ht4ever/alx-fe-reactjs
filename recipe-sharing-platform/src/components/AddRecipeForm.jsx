import React, { useState } from 'react';

const AddRecipeForm = () => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!title || !ingredients || !instructions) {
      setError('All fields are required.');
      return;
    }

    // Clear error if validation passes
    setError('');

    // Form submission logic here (e.g., sending data to a server)
    const newRecipe = {
      title,
      ingredients: ingredients.split('\n'),
      instructions,
    };
    console.log('Recipe submitted:', newRecipe);

    // Reset the form fields after submission
    setTitle('');
    setIngredients('');
    setInstructions('');
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-6">Add a New Recipe</h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 font-semibold mb-2">Recipe Title</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter the recipe title"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-2">Ingredients</label>
          <textarea
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            placeholder="Enter ingredients, one per line"
            rows="5"
          ></textarea>
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-2">Preparation Steps</label>
          <textarea
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            placeholder="Enter the preparation steps"
            rows="6"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-semibold p-2 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
