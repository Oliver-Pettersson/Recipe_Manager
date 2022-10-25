import Ingredient from '../types/Ingredient/Ingredient';
import ApiService from './ApiService';

const baseURL = "/ingredient/"

const IngredientsService = () => ({
  getAll: async () => {
      const {data} = await ApiService.get(baseURL);
      return data;
  },
  getAllFromUser: async (username: string) => {
    const params = new URLSearchParams();
    params.append("username", username);
    const {data} = await ApiService.get(baseURL + "user/" + username);
    return data;
    },
  create:async (ingredient:Ingredient) => {
    console.log({...ingredient})
    return ApiService.post(baseURL, {...ingredient})
  }
})

export default IngredientsService
