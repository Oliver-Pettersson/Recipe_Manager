import CreateRecipeIngredientDTO from "../RecipeIngredient/CreateRecipeIngredientDTO";

export default interface CreateRecipeDTO {
    image: string,
    name: string,
    description: string,
    recipeIngredients: CreateRecipeIngredientDTO[],
}