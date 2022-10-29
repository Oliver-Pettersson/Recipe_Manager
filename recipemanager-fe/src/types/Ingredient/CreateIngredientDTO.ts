export default interface CreateIngredientDTO {
    name: string,
    nutrition : {calories: number,
    fat: number,
    carbs: number,
    protein: number}
}