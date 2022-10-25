import React, { createContext, useContext, useState } from "react";
import Ingredient from "../types/Ingredient/Ingredient";
import Recipe from "../types/Recipe/Recipe";

type DataProviderProps = {
  children: React.ReactNode;
};

export type DataContextProps = {
  loadIngredients: () => void
  loadRecipes: () => void
  loadUserIngredients: () => void
  loadUserRecipes: () => void
  ingredients: Ingredient[]
  userIngredients: Ingredient[]
  recipes: Recipe[]
  userRecipes: Recipe[]
};

const DataContext = createContext<DataContextProps>(
  {} as DataContextProps
);

export const useAuth = () => useContext(DataContext);

export const DataContextProvider = ({
  children,
}: DataProviderProps) => {
    const [ingredients, setIngredients] = useState<Ingredient[]>([])
    const [recipes, setRecipes] = useState<Recipe[]>([])
    const [userIngredients, setUserIngredients] = useState<Ingredient[]>([])
    const [userRecipes, setUserRecipes] = useState<Recipe[]>([])

    const loadIngredients = () => {

    }

    const loadUserIngredients = () => {

    }
    const loadRecipes = () => {
        
    }
    const loadUserRecipes = () => {
        
    }

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
        userRecipes: userRecipes
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
