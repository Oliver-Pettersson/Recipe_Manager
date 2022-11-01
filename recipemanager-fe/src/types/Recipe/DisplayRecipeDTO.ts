import Nutrition from "../Nutrition/Nutrition";

export default interface DisplayRecipeDTO extends Nutrition {
    id: string,
    name: string,
}