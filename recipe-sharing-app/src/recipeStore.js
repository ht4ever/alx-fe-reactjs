// import create from 'zustand';

// const useRecipeStore = create((set) => ({
//   recipes: [],
//   favorites: [],
//   addFavorite: (recipeId) =>
//     set((state) => ({
//       favorites: [...state.favorites, recipeId],
//     })),
//   removeFavorite: (recipeId) =>
//     set((state) => ({
//       favorites: state.favorites.filter((id) => id !== recipeId),
//     })),
//   recommendations: [],
//   generateRecommendations: () =>
//     set((state) => {
//       const recommended = state.recipes.filter((recipe) =>
//         state.favorites.includes(recipe.id) && Math.random() > 0.5
//       );
//       return { recommendations: recommended };
//     }),
// }));

// export { useRecipeStore };

import create from 'zustand';

const useRecipeStore = create((set) => ({
  // State variables
  recipes: [],
  favorites: [],
  recommendations: [],
  searchTerm: '',
  filteredRecipes: [],

  // Actions
  addRecipe: (newRecipe) =>
    set((state) => ({
      recipes: [...state.recipes, newRecipe],
      filteredRecipes: [...state.recipes, newRecipe].filter(recipe =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      ),
    })),
  
  setRecipes: (recipes) =>
    set({
      recipes,
      filteredRecipes: recipes.filter(recipe =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      ),
    }),

  deleteRecipe: (recipeId) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== recipeId),
      filteredRecipes: state.filteredRecipes.filter((recipe) => recipe.id !== recipeId),
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),

  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      ),
      filteredRecipes: state.filteredRecipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      ),
    })),

  addFavorite: (recipeId) =>
    set((state) => ({
      favorites: [...state.favorites, recipeId],
    })),

  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),

  generateRecommendations: () =>
    set((state) => {
      const recommended = state.recipes.filter((recipe) =>
        state.favorites.includes(recipe.id) && Math.random() > 0.5
      );
      return { recommendations: recommended };
    }),

  setSearchTerm: (term) =>
    set((state) => ({
      searchTerm: term,
      filteredRecipes: state.recipes.filter(recipe =>
        recipe.title.toLowerCase().includes(term.toLowerCase())
      ),
    })),

  filterRecipes: () =>
    set((state) => ({
      filteredRecipes: state.recipes.filter(recipe =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      ),
    })),
}));

export { useRecipeStore };
