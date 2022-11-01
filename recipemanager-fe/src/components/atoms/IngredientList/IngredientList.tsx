import { List, ListItem, Typography } from "@mui/material";
import RecipeIngredient from "../../../types/RecipeIngredient/RecipeIngredients";

interface PropsType {
  recipeIngredients: RecipeIngredient[];
}

export default function IngredientList({ recipeIngredients }: PropsType) {
  return (
    <List sx={{ listStyleType: "disc", pl: 4 }} >
      {recipeIngredients.map((recipeIngredient) => (
        <ListItem sx={{ display: "list-item" }}>
          <Typography variant="body1">{recipeIngredient.ingredient.name}, {recipeIngredient.weightInGram}g</Typography>
        </ListItem>
      ))}
    </List>
  );
}
