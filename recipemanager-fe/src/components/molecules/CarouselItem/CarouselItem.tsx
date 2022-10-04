import React from "react";
import RecipeCard from "../../atoms/RecipeCard/RecipeCard";

export default function CarouselItem() {
  return (
    <div style={{display: "flex", justifyContent: "center"}}>
      <div style={{  width: "30%", margin: "auto" }}>
        <RecipeCard />
      </div>
      <div style={{ width: "30%", margin: "auto" }}>
        <RecipeCard />
      </div>
      <div style={{  width: "30%", margin: "auto" }}>
        <RecipeCard />
      </div>
    </div>
  );
}
