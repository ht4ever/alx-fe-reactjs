import React, { useState } from 'react';

const AddRecipeForm = () => {
  // State to manage form input values
  const [formData, setFormData] = useState({
    title: '',
    ingredients: '',
    steps: '',
  });

  // State to manage errors
  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Validation function
  const validate = () => {
    let validationErrors = {};

    // Check if the title is empty
    if (!formData.title) {
      validationErrors.title = 'Recipe title is required';
    }

    // Check if ingredients are provided
    if (!formData.ingredients) {
      validationErrors.ingredients = 'Please list the ingredients';
    }

    // Check if steps are provided
    if (!formData.steps) {
      validationErrors.steps = 'Please provide the preparation steps';
    }

    setErrors(validationErrors);
    
    // Return true if no validation errors, false otherwise
    return Object.keys(validationErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Run validation
    const isValid = validate();

    if (isValid) {
      // Submit form data (you can implement the submission logic here)
      console.log('Form Submitted:', formData);

      // Clear the form after submission
      setFormData({
        title: '',
        ingredients: '',
        steps: '',
      });
      setErrors({});
    }
  };

  return (
    <div className="max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-4">Add a New Recipe</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 font-semibold mb-2">
            Recipe Title:
          </label>
          <input
            type="text"
            name="title"
            id="title"
            value={formData.title}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded ${
              errors.title ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="ingredients" className="block text-gray-700 font-semibold mb-2">
            Ingredients:
          </label>
          <textarea
            name="ingredients"
            id="ingredients"
            value={formData.ingredients}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded ${
              errors.ingredients ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.ingredients && <p className="text-red-500 text-sm">{errors.ingredients}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="steps" className="block text-gray-700 font-semibold mb-2">
            Preparation Steps:
          </label>
          <textarea
            name="steps"
            id="steps"
            value={formData.steps}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded ${
              errors.steps ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.steps && <p className="text-red-500 text-sm">{errors.steps}</p>}
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
