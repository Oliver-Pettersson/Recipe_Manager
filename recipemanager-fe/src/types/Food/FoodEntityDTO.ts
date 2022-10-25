import Food from "./Food";

export default interface FoodEntityDTO {
    id: string,
    name: string,
    nutrition: Omit<Food, 'id'|'name'>
}