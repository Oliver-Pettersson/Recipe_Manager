import React, { useEffect, useState } from "react";
import Carousel from "react-material-ui-carousel";
import RecipesService from "../../../services/RecipesService";
import Recipe from "../../../types/Recipe/Recipe";
import CarouselItem from "../../molecules/CarouselItem/CarouselItem";

export default function RecipeCarousel() {
  const [carouselRecipes, setCarouselRecipes] = useState<Recipe[]>([]);
  const splitCarouselItems = () =>
    carouselRecipes.length >= 3
      ? [carouselRecipes.slice(0, 3), carouselRecipes.slice(3)]
      : [];

  useEffect(() => {
    RecipesService()
      .getCarouselItems()
      .then((items) => {
        setCarouselRecipes(items);
      });
  }, []);

  return (
    <Carousel sx={{ width: "80%" }}>
      {splitCarouselItems().map((item, index) => (
        <CarouselItem recipes={item} key={index} />
      ))}
    </Carousel>
  );
}
