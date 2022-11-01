import Nutrition from "../Nutrition/Nutrition";

export default interface IngredientEntity {
    id: string,
    name: string,
    nutrition: Nutrition
}