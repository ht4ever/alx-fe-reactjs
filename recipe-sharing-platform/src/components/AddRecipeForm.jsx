// import React, { useState } from 'react';

// const AddRecipeForm = () => {
//   const [title, setTitle] = useState('');
//   const [ingredients, setIngredients] = useState('');
//   const [instructions, setInstructions] = useState('');
//   const [errors, setErrors] = useState({});

//   // Validation function
//   const validate = () => {
//     let tempErrors = {};
//     if (!title) tempErrors.title = 'Recipe title is required';
//     if (!ingredients) tempErrors.ingredients = 'At least one ingredient is required';
//     if (!instructions) tempErrors.instructions = 'Preparation steps are required';
//     setErrors(tempErrors);

//     // Returns true if no errors
//     return Object.keys(tempErrors).length === 0;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (validate()) {
//       // If validation passes, log the new recipe and clear the form
//       const newRecipe = {
//         title,
//         ingredients: ingredients.split('\n'),
//         instructions,
//       };
//       console.log('Recipe submitted:', newRecipe);

//       // Reset form fields after submission
//       setTitle('');
//       setIngredients('');
//       setInstructions('');
//       setErrors({});
//     }
//   };

//   return (
//     <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
//       <h1 className="text-2xl font-bold mb-6">Add a New Recipe</h1>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div>
//           <label className="block text-gray-700 font-semibold mb-2">Recipe Title</label>
//           <input
//             type="text"
//             className={`w-full p-2 border ${
//               errors.title ? 'border-red-500' : 'border-gray-300'
//             } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             placeholder="Enter the recipe title"
//           />
//           {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
//         </div>
//         <div>
//           <label className="block text-gray-700 font-semibold mb-2">Ingredients</label>
//           <textarea
//             className={`w-full p-2 border ${
//               errors.ingredients ? 'border-red-500' : 'border-gray-300'
//             } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
//             value={ingredients}
//             onChange={(e) => setIngredients(e.target.value)}
//             placeholder="Enter ingredients, one per line"
//             rows="5"
//           ></textarea>
//           {errors.ingredients && <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>}
//         </div>
//         <div>
//           <label className="block text-gray-700 font-semibold mb-2">Preparation Steps</label>
//           <textarea
//             className={`w-full p-2 border ${
//               errors.instructions ? 'border-red-500' : 'border-gray-300'
//             } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
//             value={instructions}
//             onChange={(e) => setInstructions(e.target.value)}
//             placeholder="Enter the preparation steps"
//             rows="6"
//           ></textarea>
//           {errors.instructions && <p className="text-red-500 text-sm mt-1">{errors.instructions}</p>}
//         </div>
//         <button
//           type="submit"
//           className="w-full bg-blue-500 text-white font-semibold p-2 rounded-lg hover:bg-blue-600 transition-colors"
//         >
//           Submit Recipe
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AddRecipeForm;

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
      preparation, // This is where the preparation steps are included
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