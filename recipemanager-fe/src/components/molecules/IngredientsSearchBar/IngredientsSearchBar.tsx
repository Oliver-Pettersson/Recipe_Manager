import * as React from "react";
import Box from "@mui/material/Box";
import Autocomplete from "@mui/material/Autocomplete";
import Food from "../../../types/Food/Food";
import Typography from "@mui/material/Typography";
import MuiTextField from "../../atoms/MuiTextField/MuiTextField";
import { TextFieldProps, SxProps } from "@mui/material";
import { useData } from "../../../contexts/DataContext";
interface PropsType {
  onSelection: (value: Food) => void;
  textFieldProps?: TextFieldProps;
  sx?: SxProps;
  value?: Food;
  useOwnIngredients?: boolean,
}

export default function IngredientsSearchBar({
  onSelection,
  textFieldProps,
  sx,
  useOwnIngredients,
  value
}: PropsType) {
  const {ingredients, userIngredients} = useData()

  return (
    <Autocomplete
    value={value}
      sx={sx}
      onChange={(event, value) => value && onSelection(value)}
      options={useOwnIngredients ? userIngredients : ingredients}
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
