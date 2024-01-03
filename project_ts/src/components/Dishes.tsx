// Dishes.tsx
import React, { useEffect, useState } from "react";
import "../components/Dishes.scss";
import RecipeCard from "./RecipeCard"; // Update the path based on your project structure

interface Recipe {
  id: number;
  title: string;
  image: string;
}

interface ApiResponse {
  recipes: Recipe[];
}

interface DishesProps {
  searchQuery: string;
}

const Dishes: React.FC<DishesProps> = ({ searchQuery }) => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    getDishes();
  }, []);

  const getDishes = async () => {
    try {
      const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=30`);
      if (!api.ok) {
        throw new Error(`Error fetching data. Status: ${api.status}`);
      }

      const data: ApiResponse = await api.json();
      setRecipes(data.recipes);
      console.log("Fetched data:", data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const filteredRecipes = recipes.filter(recipe =>
    recipe.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="dishes">
      <h2>Popular Recipes</h2>
      <div className="recipe-card-container">
        {filteredRecipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default Dishes;
