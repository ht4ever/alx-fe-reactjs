<<<<<<< HEAD
=======
// import { Link } from 'react-router-dom';
// import { useRecipeStore } from '../recipeStore';

// const RecipeList = () => {
//   const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);

//   return (
//     <div>
//       {filteredRecipes.map((recipe) => (
//         <div key={recipe.id}>
//           <h3>{recipe.title}</h3>
//           <p>{recipe.description}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default RecipeList;

>>>>>>> 11ae7a8f16068155588a3fcd5bf5063a30095ae5
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

