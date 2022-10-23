import { IconButton } from "@mui/material";
import React, { useState } from "react";
import MuiTextField from "../../atoms/MuiTextField/MuiTextField";
import IngredientsSearchBar from "../IngredientsSearchBar/IngredientsSearchBar";
import DeleteIcon from "@mui/icons-material/Delete";
import MuiButton from "../../atoms/MuiButton/MuiButton";

export default function IngredientInputList() {
  const defaultItem = {
    food: {
      id: "",
      calories: "",
      carbs: "",
      fat: "",
      protein: "",
      name: "",
    },
    amount: 0,
  };
  const [ingredientList, setIngredientList] = useState([defaultItem]);
  console.log(ingredientList);
  return (
    <div style={{ justifyContent: "center" }}>
      {ingredientList.map((row, index) => (
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <IngredientsSearchBar
            sx={{ width: "70%" }}
            textFieldProps={{ style: { width: "100%" }, fullWidth: false }}
            value={row.food}
            onSelection={(value) => {
              const newArray = [...ingredientList];
              newArray.splice(index, 1, {
                food: value,
                amount: row.amount,
              });
              console.log("newArray", newArray, "index", index);
              setIngredientList(newArray);
            }}
          />
          <MuiTextField
            style={{ width: "20%" }}
            label="amount"
            fullWidth={false}
            onChange={() => {}}
          />
          {ingredientList.length > 1 && (
            <IconButton
              sx={{ marginTop: "16px" }}
              onClick={() => {
                const newArray = [...ingredientList];
                newArray.splice(index, 1);
                console.log("newArray", newArray, "index", index);
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
