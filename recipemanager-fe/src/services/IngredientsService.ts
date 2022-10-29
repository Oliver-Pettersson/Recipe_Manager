import CreateIngredientDTO from '../types/Ingredient/CreateIngredientDTO';
import ApiService from './ApiService';

const baseURL = "/ingredient/"

const IngredientsService = () => ({
  getAll: async () => {
      const {data} = await ApiService.get(baseURL);
      return data;
  },
  getAllFromUser: async (username: string) => {
    const {data} = await ApiService.get(baseURL + "user/" + username);
    return data;
    },
  create:async (ingredient:CreateIngredientDTO) => {
    console.log({...ingredient})
    return ApiService.post(baseURL, {...ingredient})
  }
})

export default IngredientsService
