
import React from "react";
import "../components/RecipeCard.scss";

interface Recipe {
  id: number;
  title: string;
  image: string;
}

interface RecipeCardProps {
  recipe: Recipe;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
  return (
    <div className="recipe-card">
      <img src={recipe.image} alt={recipe.title} style={{ width: "300px", height: "300px" }} />
      <span>{recipe.title}</span>
    </div>
  );
};

export default RecipeCard;
