package com.accenture.recipemanager.domain.rating;

import com.accenture.recipemanager.core.generic.AbstractEntity;
import com.accenture.recipemanager.domain.comment.Comment;
import com.accenture.recipemanager.domain.ingredient.Ingredient;
import com.accenture.recipemanager.domain.recipe.Recipe;
import com.accenture.recipemanager.domain.user.User;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name = "rating")
public class Rating extends AbstractEntity {

    @OneToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User userId;

    @OneToOne
    @JoinColumn(name = "comment_id", nullable = false)
    private Comment commentId;

    @OneToOne
    @JoinColumn(name = "recipe_id", nullable = false)
    private Recipe recipeId;

    @Column(name = "timeStamp", nullable = false)
    private LocalDateTime timeStamp;

    @Column(name = "rating", nullable = false)
    private int rating;

    public Rating() {
    }

    public Rating(User userId, Comment commentId, Recipe recipeId, LocalDateTime timeStamp, int rating) {
        this.userId = userId;
        this.commentId = commentId;
        this.recipeId = recipeId;
        this.timeStamp = timeStamp;
        this.rating = rating;
    }

    public User getUserId() {
        return userId;
    }

    public Rating setUserId(User userId) {
        this.userId = userId;
        return this;
    }

    public Comment getCommentId() {
        return commentId;
    }

    public Rating setCommentId(Comment commentId) {
        this.commentId = commentId;
        return this;
    }

    public Recipe getRecipeId() {
        return recipeId;
    }

    public Rating setRecipeId(Recipe recipeId) {
        this.recipeId = recipeId;
        return this;
    }

    public LocalDateTime getTimeStamp() {
        return timeStamp;
    }

    public Rating setTimeStamp(LocalDateTime timeStamp) {
        this.timeStamp = timeStamp;
        return this;
    }

    public int getRating() {
        return rating;
    }

    public Rating setRating(int rating) {
        this.rating = rating;
        return this;
    }
}
