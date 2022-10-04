package com.accenture.recipemanager.domain.rating.dto;

import com.accenture.recipemanager.core.generic.AbstractEntityDTO;
import com.accenture.recipemanager.domain.comment.Comment;
import com.accenture.recipemanager.domain.ingredient.Ingredient;
import com.accenture.recipemanager.domain.recipe.Recipe;
import com.accenture.recipemanager.domain.user.User;

import javax.persistence.Column;
import javax.persistence.JoinColumn;
import java.time.LocalDateTime;
import java.util.List;

public class RatingDTO extends AbstractEntityDTO {
    private User userId;

    private Comment commentId;

    private Recipe recipeId;

    private LocalDateTime timeStamp;

    private int rating;

    public User getUserId() {
        return userId;
    }

    public RatingDTO setUserId(User userId) {
        this.userId = userId;
        return this;
    }

    public Comment getCommentId() {
        return commentId;
    }

    public RatingDTO setCommentId(Comment commentId) {
        this.commentId = commentId;
        return this;
    }

    public Recipe getRecipeId() {
        return recipeId;
    }

    public RatingDTO setRecipeId(Recipe recipeId) {
        this.recipeId = recipeId;
        return this;
    }

    public LocalDateTime getTimeStamp() {
        return timeStamp;
    }

    public RatingDTO setTimeStamp(LocalDateTime timeStamp) {
        this.timeStamp = timeStamp;
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
