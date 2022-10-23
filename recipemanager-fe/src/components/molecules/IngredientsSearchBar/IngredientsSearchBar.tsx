import * as React from "react";
import Box from "@mui/material/Box";
import Autocomplete from "@mui/material/Autocomplete";
import Food from "../../../types/Food/Food";
import Typography from "@mui/material/Typography";
import MuiTextField from "../../atoms/MuiTextField/MuiTextField";
import { TextFieldProps, SxProps } from "@mui/material";
interface PropsType {
  onSelection: (value: Food) => void;
  textFieldProps?: TextFieldProps;
  sx?: SxProps;
}

export default function IngredientsSearchBar({
  onSelection,
  textFieldProps,
  sx,
}: PropsType) {
  const Ingredients: Food[] = [
    {
      id: "1",
      calories: "150",
      carbs: "60",
      fat: "15",
      protein: "18",
      name: "lasagna",
    },
    {
      id: "2",
      calories: "150",
      carbs: "60",
      fat: "15",
      protein: "18",
      name: "bread",
    },
    {
      id: "3",
      calories: "150",
      carbs: "60",
      fat: "15",
      protein: "18",
      name: "breadcrumbs",
    },
    {
      id: "4",
      calories: "150",
      carbs: "60",
      fat: "15",
      protein: "18",
      name: "protein bar",
    },
    {
      id: "5",
      calories: "150",
      carbs: "60",
      fat: "15",
      protein: "18",
      name: "pudding",
    },
    {
      id: "6",
      calories: "150",
      carbs: "60",
      fat: "15",
      protein: "18",
      name: "carrot",
    },
    {
      id: "7",
      calories: "150",
      carbs: "60",
      fat: "15",
      protein: "18",
      name: "cake",
    },
  ];

  return (
    <Autocomplete
      sx={sx}
      onChange={(event, value) => value && onSelection(value)}
      options={Ingredients}
      disablePortal
      autoHighlight
      isOptionEqualToValue={(option, value) => option.id === value.id}
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
            <div
              style={{
                justifyContent: "center",
                textAlign: "center",
                display: "table-caption",
              }}
            >
              <Typography variant="h4">{option.name}</Typography>
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
          {...textFieldProps}
        />
      )}
    />
  );
}
