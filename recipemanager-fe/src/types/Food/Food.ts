import Nutrition from "../Nutrition/Nutrition";

export default interface Food extends Nutrition {
    id: string,
    name: string,
}