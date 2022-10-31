import Recipe from '../types/Recipe/Recipe';
import SimpleRecipeDTO from '../types/Recipe/SimpleRecipeDTO';
import ApiService from './ApiService';

const baseURL = "/recipe/"

const RecipesService = () => ({
  getAll: async () => {
      const {data} = await ApiService.get(baseURL + "all");
      console.log(data)
      console.log(data.map((item: SimpleRecipeDTO) => {return {...item.nutrition, id: item.id, name: item.name}}))
      return data.map((item: SimpleRecipeDTO) => {return {...item.nutrition, id: item.id, name: item.name}});
  },
  getById: async (id: string) => {
    const {data} = await ApiService.get(baseURL + id);
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
