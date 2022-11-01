import Nutrition from "../Nutrition/Nutrition";

export default interface SimpleRecipeDTO {
    id: string,
    name: string,
    nutrition: Nutrition
}