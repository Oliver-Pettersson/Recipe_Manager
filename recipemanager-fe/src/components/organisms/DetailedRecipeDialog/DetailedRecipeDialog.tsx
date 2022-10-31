import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import RecipeEntity from "../../../types/Recipe/RecipeEntityDTO";
import IngredientList from "../../atoms/IngredientList/IngredientList";
import MuiButton from "../../atoms/MuiButton/MuiButton";
import CommentSection from "../CommentSection/CommentSection";

interface PropsType {
  open: boolean;
  setOpen: (value: boolean) => void;
  recipeEntity?: RecipeEntity;
}

export default function DetailedRecipeDialog({
  open,
  setOpen,
  recipeEntity,
}: PropsType) {
  console.log("detail", recipeEntity)
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Dialog open={open} onClose={handleClose}>
      <div style={{ backgroundColor: "#37474F" }}>
        <DialogTitle sx={{ color: "white" }}><Typography variant="h2">{recipeEntity?.name}</Typography></DialogTitle>
        <DialogContent sx={{ color: "white" }}>
          <Typography variant="h4">Ingredients</Typography>
          {recipeEntity && <IngredientList ingredients={recipeEntity.ingredients} />}
          <Typography variant="h4">Description</Typography>
          <Typography variant="body1">{recipeEntity?.description || "Lorem Ipsum"}</Typography>
          <CommentSection
            recipeID={recipeEntity?.id || ""}
            defaultRatings={
              recipeEntity
                ? recipeEntity.ratings
                : [
                    { 
                      rating: 3,
                      comment: {
                        comment: "Lores Ipsum",
                        user: {username: "Reviewer Ronald"},
                        timeStamp: "today",
                        comments: [
                          {
                            comment: "Lores Ipsum",
                            user: {username: "Commenter Carl"},
                            timeStamp: "today",
                            comments: [],
                          },
                        ],
                      },
                    },
                    {
                      rating: 5,
                      comment: {
                        comment: "Ipsum Lorem",
                        user: {username: "Reviewer Ronaldo"},
                        timeStamp: "today",
                        comments: [
                          {
                            comment: "Ipsum",
                            user: {username: "Commenter Carlos"},
                            timeStamp: "today",
                            comments: [],
                          },
                        ],
                      },
                    },
                  ]
            }
          />
        </DialogContent>
        <DialogActions>
          <MuiButton onClick={handleClose}>Close</MuiButton>
        </DialogActions>
      </div>
    </Dialog>
  );
}
