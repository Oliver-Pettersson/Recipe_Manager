import Ingredient from "../Ingredient/Ingredient";

export default interface Recipe {
    coverImage: string,
    name: string,
    ingredients: Ingredient[]
}