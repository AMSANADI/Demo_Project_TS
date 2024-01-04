
import React from "react";
import "../components/RecipeCard.scss";
import {Link} from "react-router-dom"

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
      <Link to ={"/recipe/" +recipe.id}>
      <img src={recipe.image} alt={recipe.title} style={{ width: "300px", height: "300px" }} />
      </Link>
      <p>{recipe.title}</p>
    </div>
  );
};

export default RecipeCard;
