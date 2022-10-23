package com.accenture.recipemanager.domain.comment.dto;

import com.accenture.recipemanager.core.generic.AbstractEntityDTO;
import com.accenture.recipemanager.domain.comment.Comment;
import com.accenture.recipemanager.domain.ingredient.Ingredient;
import com.accenture.recipemanager.domain.recipe.dto.RecipeDTO;
import com.accenture.recipemanager.domain.user.User;
import com.accenture.recipemanager.domain.user.dto.LimitedUserDTO;

import javax.persistence.Column;
import java.time.LocalDateTime;
import java.util.List;

public class CommentDTO extends AbstractEntityDTO {
    private List<Comment> comments;

    private String comment;

    private LimitedUserDTO user;

    private LocalDateTime timeStamp;

    public List<Comment> getComments() {
        return comments;
    }

    public CommentDTO setComments(List<Comment> comments) {
        this.comments = comments;
        return this;
    }

    public String getComment() {
        return comment;
    }

    public CommentDTO setComment(String comment) {
        this.comment = comment;
        return this;
    }

    public LocalDateTime getTimeStamp() {
        return timeStamp;
    }

    public CommentDTO setTimeStamp(LocalDateTime timeStamp) {
        this.timeStamp = timeStamp;
        return this;
    }
    public LimitedUserDTO getUser() {
        return user;
    }

    public CommentDTO setUser(User user) {
        this.user = (LimitedUserDTO) new LimitedUserDTO().setUsername(user.getUsername()).setId(user.getId());
        return this;
    }
}
