import { Link } from 'react-router-dom';

// Inside the return block of the HomePage component
{recipes.map((recipe) => (
  <div key={recipe.id} className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
    <img
      src={recipe.image}
      alt={recipe.title}
      className="w-full h-40 object-cover rounded-t-lg mb-4"
    />
    <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
    <p className="text-gray-600">{recipe.summary}</p>
    <Link to={`/recipe/${recipe.id}`} className="text-blue-500 hover:underline mt-4 inline-block">View Recipe</Link>
  </div>
))}
