import IngredientEntity from "../Ingredient/IngredientEntity";

export default interface RecipeIngredient {
    weightInGram: number,
    ingredient: IngredientEntity
}