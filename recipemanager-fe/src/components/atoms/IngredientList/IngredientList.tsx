import { List, ListItem, Typography } from "@mui/material";
import IngredientEntity from "../../../types/Ingredient/IngredientEntity";

interface PropsType {
  ingredients: IngredientEntity[];
}

export default function IngredientList({ ingredients }: PropsType) {
  return (
    <List sx={{ listStyleType: "disc", pl: 4 }} >
      {ingredients.map((ingredient) => (
        <ListItem sx={{ display: "list-item" }}>
          <Typography variant="body1">{ingredient.name}, {ingredient.weightInGram}g</Typography>
        </ListItem>
      ))}
    </List>
  );
}
