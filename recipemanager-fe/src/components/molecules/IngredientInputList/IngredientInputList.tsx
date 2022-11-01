import { IconButton } from "@mui/material";
import React, { useState, useEffect } from "react";
import MuiTextField from "../../atoms/MuiTextField/MuiTextField";
import IngredientsSearchBar from "../IngredientsSearchBar/IngredientsSearchBar";
import DeleteIcon from "@mui/icons-material/Delete";
import MuiButton from "../../atoms/MuiButton/MuiButton";
import CreateRecipeIngredientDTO from "../../../types/RecipeIngredient/CreateRecipeIngredientDTO";

interface PropsType {
  setFormikFieldValue: (value: CreateRecipeIngredientDTO[]) => void,
}

export default function IngredientInputList({setFormikFieldValue} : PropsType) {
  const defaultItem = {
    food: {
      id: "",
      calories: 0,
      carbs: 0,
      fat: 0,
      protein: 0,
      name: "",
    },
    amount: 0,
  };
  const [ingredientList, setIngredientList] = useState([defaultItem]);
  useEffect(() => {
    setFormikFieldValue(ingredientList.map((ingredient) => {return {ingredient: {id: ingredient.food.id}, weightInGram: ingredient.amount}}))
  }, [ingredientList])
  
  return (
    <div style={{ justifyContent: "center" }}>
      {ingredientList.map((row, index) => (
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <IngredientsSearchBar
            sx={{ width: "70%" }}
            textFieldProps={{ style: { width: "100%" }, fullWidth: false }}
            value={row.food}
            useOwnIngredients
            onSelection={(value) => {
              const newArray = [...ingredientList];
              newArray[index] = {
                food: value,
                amount: row.amount,
              };
              setIngredientList(newArray);
            }}
          />
          <MuiTextField
            style={{ width: "20%" }}
            label="amount in g"
            fullWidth={false}
            value={row.amount === 0 ? "" : row.amount}
            onChange={(event) => {
              const newArray = [...ingredientList];
              newArray[index] = {
                food: row.food,
                amount: +event.currentTarget.value,
              };
              setIngredientList(newArray);
            }}
          />
          {ingredientList.length > 1 && (
            <IconButton
              sx={{ marginTop: "16px" }}
              onClick={() => {
                const newArray = [...ingredientList];
                newArray.splice(index, 1);
                setIngredientList(newArray);
              }}
            >
              <DeleteIcon sx={{ color: "#63A4FF" }} />
            </IconButton>
          )}
        </div>
      ))}
      <MuiButton
        sx={{ width: "100%" }}
        fullWidth
        onClick={() => setIngredientList([...ingredientList, defaultItem])}
      >
        + Add Ingredient
      </MuiButton>
    </div>
  );
}
