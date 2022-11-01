import RatingType from "../RatingType/RatingType";
import RecipeIngredient from "../RecipeIngredient/RecipeIngredients";

export default interface Recipe {
    id: string,
    image: string,
    name: string,
    description: string,
    recipeIngredients: RecipeIngredient[],
    ratings: RatingType[]
}