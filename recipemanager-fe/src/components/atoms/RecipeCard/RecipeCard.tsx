import { Card } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import Recipe from "../../../types/Recipe/Recipe";
import DetailedRecipeDialog from "../../organisms/DetailedRecipeDialog/DetailedRecipeDialog";
import MuiButton from "../MuiButton/MuiButton";

interface PropsType {
  recipe: Recipe
}

export default function RecipeCard({recipe} : PropsType) {
  const [open, setOpen] = useState(false)
  console.log(recipe)
  return (
    <>
    <Card>
      <CardMedia
        sx={{
          backgroundColor: "#62727B",
          height: "4em",
          display: "block",
          margin: "auto",
          objectFit: "cover",
        }}
        image={recipe.image}
      />
      <CardContent sx={{backgroundColor: "#62727B", color: "white"}} >
        <Typography gutterBottom variant="h6" component="div">
          {recipe.name}
        </Typography>
        <Typography variant="body2" >
          {recipe.description}
        </Typography>
      </CardContent>
      <CardActions sx={{backgroundColor: "#62727B"}}>
        <MuiButton onClick={() => {setOpen(true)}} style={{margin: "auto"}}>
          Details
        </MuiButton>
      </CardActions>
    </Card>
    <DetailedRecipeDialog open={open} setOpen={setOpen} recipeEntity={recipe}  />
    </>
  );
}
