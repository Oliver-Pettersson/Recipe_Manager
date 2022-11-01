package com.accenture.recipemanager.domain.recipe.dto;

import com.accenture.recipemanager.core.generic.AbstractEntityDTO;
import com.accenture.recipemanager.domain.rating.Rating;
import com.accenture.recipemanager.domain.recipeingredient.RecipeIngredient;
import com.accenture.recipemanager.core.security.user.User;

import java.util.List;

public class RecipeDTO extends AbstractEntityDTO {
    private String description;
    private String name;
    private String image;
    private User user;
    private List<Rating> ratings;

    private List<RecipeIngredient> recipeIngredients;

    public RecipeDTO() {
    }

    public String getDescription() {
        return description;
    }

    public RecipeDTO setDescription(String description) {
        this.description = description;
        return this;
    }

    public String getName() {
        return name;
    }

    public RecipeDTO setName(String name) {
        this.name = name;
        return this;
    }

    public String getImage() {
        return image;
    }

    public RecipeDTO setImage(String image) {
        this.image = image;
        return this;
    }

    public User getUser() {
        return user;
    }

    public RecipeDTO setUser(User user) {
        this.user = user;
        return this;
    }

    public List<Rating> getRatings() {
        return ratings;
    }

    public RecipeDTO setRatings(List<Rating> ratings) {
        this.ratings = ratings;
        return this;
    }

    public List<RecipeIngredient> getRecipeIngredients() {
        return recipeIngredients;
    }

    public RecipeDTO setRecipeIngredients(List<RecipeIngredient> recipeIngredients) {
        this.recipeIngredients = recipeIngredients;
        return this;
    }
}
