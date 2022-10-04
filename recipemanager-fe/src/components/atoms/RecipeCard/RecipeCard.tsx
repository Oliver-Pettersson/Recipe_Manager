import { Card } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import React from "react";

export default function RecipeCard() {
  return (
    <Card>
      <CardMedia
        sx={{
          backgroundColor: "#62727B",
          height: "4em",
          display: "block",
          margin: "auto",
          objectFit: "cover",
        }}
        image="/images/placeholder-image.png"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button sx={{ margin: "auto" }} size="small">
          Details
        </Button>
      </CardActions>
    </Card>
  );
}
