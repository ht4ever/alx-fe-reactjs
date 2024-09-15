import React, { useState } from 'react';
import AddRecipeForm from './components/AddRecipeForm';
import HomePage from './components/HomePage';

const App = () => {
  const [recipes, setRecipes] = useState([]);

  const handleAddRecipe = (newRecipe) => {
    setRecipes([...recipes, newRecipe]);
  };

  return (
    <div>
      <AddRecipeForm onAddRecipe={handleAddRecipe} />
      <HomePage recipes={recipes} />
    </div>
  );
};

export default App;