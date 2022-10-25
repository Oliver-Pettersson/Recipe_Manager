import Food from "./Food";

export default interface FoodDisplayDTO extends Omit<Food, 'id'> {

} 