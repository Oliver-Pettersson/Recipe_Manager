import Ingredient from "../Ingredient/Ingredient";
import RatingType from "../RatingType/RatingType";

export default interface RecipeEntity {
    image: string,
    name: string,
    description: string,
    ingredients: Ingredient[],
    ratings: RatingType[]
}