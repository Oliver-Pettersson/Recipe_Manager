import Recipe from '../types/Recipe/Recipe';
import ApiService from './ApiService';

const baseURL = "/recipe/"

const RecipesService = () => ({
  getAll: async () => {
      const {data} = await ApiService.get(baseURL);
      return data;
  },
  getAllFromUser: async (username: string) => {
    const {data} = await ApiService.get(baseURL + "user/" + username);
    return data;
    },
  create:async (recipe:Recipe) => {
    console.log({...recipe})
    return ApiService.post(baseURL, {...recipe})
  }
})

export default RecipesService
