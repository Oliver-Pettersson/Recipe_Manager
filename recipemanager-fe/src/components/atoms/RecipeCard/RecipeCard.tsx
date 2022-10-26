import { Card } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import MuiButton from "../MuiButton/MuiButton";

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
      <CardContent sx={{backgroundColor: "#62727B", color: "white"}} >
        <Typography gutterBottom variant="h6" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" >
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions sx={{backgroundColor: "#62727B"}}>
        <MuiButton style={{margin: "auto"}}>
          Details
        </MuiButton>
      </CardActions>
    </Card>
  );
}
