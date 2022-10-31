package com.accenture.recipemanager.domain.recipe.dto;

import com.accenture.recipemanager.core.generic.AbstractEntityDTO;
import com.accenture.recipemanager.domain.ingredient.Ingredient;
import com.accenture.recipemanager.domain.rating.Rating;
import com.accenture.recipemanager.domain.user.User;

import java.util.List;

public class RecipeDTO extends AbstractEntityDTO {
    private String description;
    private String name;
    private String image;
    private User user;
    private List<Ingredient> ingredients;
    private List<Rating> ratings;


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

    public List<Ingredient> getIngredients() {
        return ingredients;
    }

    public RecipeDTO setIngredients(List<Ingredient> ingredients) {
        this.ingredients = ingredients;
        return this;
    }
}
