import Ingredient from "../Ingredient/Ingredient";
import RatingType from "../RatingType/RatingType";

export default interface RecipeEntity {
    id: string,
    image: string,
    name: string,
    description: string,
    ingredients: Ingredient[],
    ratings: RatingType[]
}