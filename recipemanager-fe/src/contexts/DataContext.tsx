import React, { createContext, useContext, useEffect, useState } from "react";
import IngredientsService from "../services/IngredientsService";
import RecipesService from "../services/RecipesService";
import Food from "../types/Food/Food";
import FoodEntity from "../types/Food/FoodEntity";
import DisplayRecipeDTO from "../types/Recipe/DisplayRecipeDTO";
import { useAuth } from "./AuthenticationContext";

type DataProviderProps = {
  children: React.ReactNode;
};

export type DataContextProps = {
  
  refreshIngredients: () => void;
  refreshRecipes: () => void;
  ingredients: Food[];
  userIngredients: Food[];
  recipes: DisplayRecipeDTO[];
  userRecipes: DisplayRecipeDTO[];
};

const DataContext = createContext<DataContextProps>({} as DataContextProps);

export const useData = () => useContext(DataContext);

export const DataContextProvider = ({ children }: DataProviderProps) => {
  const [ingredients, setIngredients] = useState<Food[]>([]);
  const [recipes, setRecipes] = useState<DisplayRecipeDTO[]>([]);
  const [userIngredients, setUserIngredients] = useState<Food[]>([]);
  const [userRecipes, setUserRecipes] = useState<DisplayRecipeDTO[]>([]);
  const { principal } = useAuth();

  const loadIngredients = () => {
    IngredientsService()
      .getAll()
      .then((value) =>
        setIngredients(
          value.map((item: FoodEntity) => {
            return { ...item.nutrition, id: item.id, name: item.name };
          })
        )
      );
  };

  const loadUserIngredients = () => {
    principal &&
      IngredientsService()
        .getAllFromUser(principal.username)
        .then((value) =>
          setUserIngredients(
            value.map((item: FoodEntity) => {
              return { ...item.nutrition, id: item.id, name: item.name};
            })
          )
        );
  };

  const refreshIngredients = () => {
    loadIngredients()
    loadUserIngredients();
  }

  const loadRecipes = () => {
    RecipesService()
      .getAll()
      .then((value) => setRecipes(value));
  };
  const loadUserRecipes = () => {
    principal &&
      RecipesService()
        .getAllFromUser(principal.username)
        .then((value) => setUserRecipes(value));
  };

  const refreshRecipes = () => {
    loadRecipes();
    loadUserRecipes();
  }

  useEffect(() => {
    if (principal) {
      loadIngredients();
      loadUserIngredients();
      loadRecipes();
      loadUserRecipes();
    }
  }, [principal]);

  return (
    <DataContext.Provider
      value={{
        refreshRecipes: refreshRecipes,
        refreshIngredients: refreshIngredients,
        ingredients: ingredients,
        userIngredients: userIngredients,
        recipes: recipes,
        userRecipes: userRecipes,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
