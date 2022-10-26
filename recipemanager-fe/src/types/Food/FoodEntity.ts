import Food from "./Food";

export default interface FoodEntity {
    id: string,
    name: string,
    nutrition: Omit<Food, 'id'|'name'>
}