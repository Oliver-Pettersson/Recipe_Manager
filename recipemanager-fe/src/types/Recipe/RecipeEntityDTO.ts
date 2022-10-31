import Ingredient from "../Ingredient/Ingredient";
import IngredientEntity from "../Ingredient/IngredientEntity";
import RatingType from "../RatingType/RatingType";

export default interface RecipeEntity {
    id: string,
    image: string,
    name: string,
    description: string,
    ingredients: IngredientEntity[],
    ratings: RatingType[]
}