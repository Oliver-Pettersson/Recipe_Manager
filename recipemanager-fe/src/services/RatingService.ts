import CreateRatingDTO from '../types/RatingType/CreateRatingDTO';
import ApiService from './ApiService';

const baseURL = "/rating/"

const RatingService = () => ({
  getAll: async () => {
      const {data} = await ApiService.get(baseURL);
      return data;
  },
  getAllFromUser: async (username: string) => {
    
    const {data} = await ApiService.get(baseURL + "user/" + username);
    return data;
    },
  create:async (rating:CreateRatingDTO) => {
    return ApiService.post("/recipe" + baseURL, {...rating})
  }
})

export default RatingService
