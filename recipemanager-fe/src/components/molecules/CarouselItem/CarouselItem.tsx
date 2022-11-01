import React from "react";
import Recipe from "../../../types/Recipe/Recipe";
import RecipeCard from "../../atoms/RecipeCard/RecipeCard";

interface PropsType {
  recipes: Recipe[];
}

export default function CarouselItem({ recipes }: PropsType) {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      {recipes.map((recipe) => (
        <div style={{ width: "30%", margin: "auto" }}>
          <RecipeCard recipe={recipe} />
        </div>
      ))}
    </div>
  );
}
