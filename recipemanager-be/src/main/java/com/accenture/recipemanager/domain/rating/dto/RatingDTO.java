package com.accenture.recipemanager.domain.rating.dto;

import com.accenture.recipemanager.core.generic.AbstractEntityDTO;
import com.accenture.recipemanager.domain.comment.Comment;

import com.accenture.recipemanager.domain.recipe.Recipe;

public class RatingDTO extends AbstractEntityDTO {
    private Comment comment;

    private Recipe recipe;

    private int rating;

    public Comment getComment() {
        return comment;
    }

    public RatingDTO setComment(Comment comment) {
        this.comment = comment;
        return this;
    }

    public Recipe getRecipe() {
        return recipe;
    }

    public RatingDTO setRecipe(Recipe recipe) {
        this.recipe = recipe;
        return this;
    }

    public int getRating() {
        return rating;
    }

    public RatingDTO setRating(int rating) {
        this.rating = rating;
        return this;
    }
}
