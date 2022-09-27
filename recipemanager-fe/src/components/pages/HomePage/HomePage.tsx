import React from "react";
import CoverImage from "../../organisms/CoverImage/CoverImage";
import RecipeCarousel from "../../organisms/RecipeCarousel/RecipeCarousel";

export default function HomePage() {
  const centerStyle = { height: "50vh", display: "flex", justifyContent: "center" }
  return (
    <div style={{ textAlign: "center" }}>
      <div
        style={centerStyle}
      >
        <CoverImage />
      </div>
      <div
        style={centerStyle}
      >
        <RecipeCarousel />
      </div>
    </div>
  );
}
