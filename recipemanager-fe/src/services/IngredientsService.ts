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
    return ApiService.post(baseURL, {...ingredient})
  },
  deleteById: async (id: string) => {
    return (await ApiService.delete(baseURL + id));
  }
})

export default IngredientsService
