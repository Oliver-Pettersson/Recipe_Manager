import * as React from "react";
import Box from "@mui/material/Box";
import Autocomplete from "@mui/material/Autocomplete";
import Food from "../../../types/Food/Food";
import Typography from "@mui/material/Typography";
import MuiTextField from "../../atoms/MuiTextField/MuiTextField";

interface PropsType {
  onSelection: (value: Food) => void;
}

export default function IngredientsSearchBar({ onSelection }: PropsType) {
  const Ingredients: Food[] = [
    {
      calories: "150",
      carbs: "60",
      fat: "15",
      protein: "18",
      name: "lasagna",
    },
    {
      calories: "150",
      carbs: "60",
      fat: "15",
      protein: "18",
      name: "bread",
    },
    {
      calories: "150",
      carbs: "60",
      fat: "15",
      protein: "18",
      name: "breadcrumbs",
    },
    {
      calories: "150",
      carbs: "60",
      fat: "15",
      protein: "18",
      name: "protein bar",
    },
    {
      calories: "150",
      carbs: "60",
      fat: "15",
      protein: "18",
      name: "pudding",
    },
    {
      calories: "150",
      carbs: "60",
      fat: "15",
      protein: "18",
      name: "carrot",
    },
    {
      calories: "150",
      carbs: "60",
      fat: "15",
      protein: "18",
      name: "cake",
    },
  ];

  return (
    <Autocomplete
      onChange={(event, value) => value && onSelection(value)}
      options={Ingredients}
      disablePortal
      autoHighlight
      getOptionLabel={(option) => option.name}
      renderOption={(props, option) => (
        <Box
          component="li"
          sx={{
            width: "100%",
          }}
          {...props}
        >
          <div
            style={{
              width: "100%",
              display: "table",
              tableLayout: "fixed",
            }}
          >
            <div style={{ justifyContent: "center", textAlign: "center", display: "table-caption"}}>
            <Typography variant="h4" >
              {option.name}
            </Typography>
          </div>
            <div style={{ display: "table-row" }}>
              <Typography
                sx={{ display: "table-cell", textAlign: "center" }}
                variant="body2"
              >
                Calories: {option.calories}
              </Typography>
              <Typography
                sx={{ display: "table-cell", textAlign: "center" }}
                variant="body2"
              >
                Protein: {option.protein}
              </Typography>
              <Typography
                sx={{ display: "table-cell", textAlign: "center" }}
                variant="body2"
              >
                Carbs: {option.carbs}
              </Typography>
              <Typography
                sx={{ display: "table-cell", textAlign: "center" }}
                variant="body2"
              >
                Fat: {option.protein}
              </Typography>
            </div>
          </div>
        </Box>
      )}
      renderInput={(params) => (
        <MuiTextField
          {...params}
          label="Search for ingredient"
          InputProps={{
            ...params.InputProps,
            disableUnderline: true,
            sx: { color: "white" },
          }}
          sx={{
            color: "white",
            "& .MuiInputLabel-root": { color: "white" },
            borderBottomColor: "white",
            borderColor: "solid white",
            borderBottom: 1,
          }}
        />
      )}
    />
  );
}
