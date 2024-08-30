import React from 'react';
import { useRecipeStore } from './recipeStore';

const RecipeList = () => {
  // Correctly access the recipes array from the Zustand store
  const recipes = useRecipeStore((state) => state.recipes);

  return (
    <div>
      <h2>Recipes</h2>
      {recipes.length > 0 ? (
        recipes.map((recipe) => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))
      ) : (
        <p>No recipes available</p>
      )}
    </div>
  );
};

export default RecipeList;
