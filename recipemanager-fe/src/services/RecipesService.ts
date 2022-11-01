import CreateRecipeDTO from '../types/Recipe/CreateRecipeDTO';
import ApiService from './ApiService';

const baseURL = "/recipe/"

const RecipesService = () => ({
  getAll: async () => {
      const {data} = await ApiService.get(baseURL + "all");
      console.log(data)
      return data;
  },
  getById: async (id: string) => {
    const {data} = await ApiService.get(baseURL + id);
    return data;
}, 
  getAllFromUser: async (username: string) => {
    const {data} = await ApiService.get(baseURL + "user/" + username);
    return data;
    },
  create:async (recipe:CreateRecipeDTO) => {
    console.log({...recipe})
    return ApiService.post(baseURL, {...recipe})
  },
  getCarouselItems: async () => {
    const {data} = await ApiService.get(baseURL + "carousel");
      console.log(data)
      return data;
  },
  deleteById: async (id: string) => {
    return (await ApiService.delete(baseURL + id));
  }
})

export default RecipesService
