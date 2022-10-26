import Ingredient from "../Ingredient/Ingredient";
import Rating from "../Rating/Rating";

export default interface RecipeEntity {
    image: string,
    name: string,
    description: string,
    ingredients: Ingredient[],
    ratings: Rating[]
}