import Nutrition from "../Nutrition/Nutrition";

export default interface IngredientEntity {
    id: string,
    name: string,
    weightInGram: number,
    nutrition: Nutrition
}