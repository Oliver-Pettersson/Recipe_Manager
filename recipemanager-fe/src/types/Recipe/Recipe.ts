import Ingredient from "../Ingredient/Ingredient";

export default interface Recipe {
    image: string,
    name: string,
    description: string,
    ingredients: Ingredient[]
}