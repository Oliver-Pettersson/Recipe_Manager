import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import React from "react";
import RecipeEntity from "../../../types/Recipe/RecipeEntityDTO";
import MuiButton from "../../atoms/MuiButton/MuiButton";

interface PropsType {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  recipeEntity?: RecipeEntity;
}

export default function DetailedRecipeDialog({
  open,
  setOpen,
  recipeEntity,
}: PropsType) {
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Dialog open={open} onClose={handleClose}>
      <div style={{ backgroundColor: "#37474F" }}>
        <DialogTitle sx={{ color: "white" }}>placeholder</DialogTitle>
        <DialogContent sx={{ color: "white" }}>
          <Typography variant="h3">Ingredients</Typography>
          <Typography variant="body1">ingredients</Typography>
          <Typography variant="h3">Description</Typography>
          <Typography variant="body1">Lorem Ipsum</Typography>
        </DialogContent>
        <DialogActions>
          <MuiButton onClick={handleClose}>Close</MuiButton>
        </DialogActions>
      </div>
    </Dialog>
  );
}
