import React, { createContext, useContext, useEffect, useState } from "react";
import IngredientsService from "../services/IngredientsService";
import RecipesService from "../services/RecipesService";
import Food from "../types/Food/Food";
import FoodEntity from "../types/Food/FoodEntity";
import Ingredient from "../types/Ingredient/Ingredient";
import Recipe from "../types/Recipe/Recipe";
import { useAuth } from "./AuthenticationContext";

type DataProviderProps = {
  children: React.ReactNode;
};

export type DataContextProps = {
  loadIngredients: () => void;
  loadRecipes: () => void;
  loadUserIngredients: () => void;
  loadUserRecipes: () => void;
  ingredients: Food[];
  userIngredients: Food[];
  recipes: Recipe[];
  userRecipes: Recipe[];
};

const DataContext = createContext<DataContextProps>({} as DataContextProps);

export const useData = () => useContext(DataContext);

export const DataContextProvider = ({ children }: DataProviderProps) => {
  const [ingredients, setIngredients] = useState<Food[]>([]);
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [userIngredients, setUserIngredients] = useState<Food[]>([]);
  const [userRecipes, setUserRecipes] = useState<Recipe[]>([]);
  const { principal } = useAuth();

  const loadIngredients = () => {
    IngredientsService()
      .getAll()
      .then((value) =>
        setIngredients(
          value.map((item: FoodEntity) => {
            return { id: item.id, name: item.name, ...item.nutrition };
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
              return { id: item.id, name: item.name, ...item.nutrition };
            })
          )
        );
  };
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
        loadIngredients: loadIngredients,
        loadUserIngredients: loadUserIngredients,
        loadRecipes: loadRecipes,
        loadUserRecipes: loadUserRecipes,
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
