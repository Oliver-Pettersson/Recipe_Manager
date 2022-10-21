import FoodReferanceDTO from "../Food/FoodReferanceDTO";

export default interface Recipe {
    coverImage: string,
    name: string,
    ingredients: FoodReferanceDTO[]
}