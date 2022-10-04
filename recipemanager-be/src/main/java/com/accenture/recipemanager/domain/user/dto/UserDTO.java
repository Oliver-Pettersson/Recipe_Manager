package com.accenture.recipemanager.domain.user.dto;

import com.accenture.recipemanager.core.generic.AbstractEntityDTO;
import com.accenture.recipemanager.domain.ingredient.Ingredient;

import java.util.List;

public class UserDTO extends AbstractEntityDTO {
    private String username;
    private List<Ingredient> userRegisteredIngredients;

    public String getUsername() {
        return username;
    }

    public UserDTO setUsername(String username) {
        this.username = username;
        return this;
    }

    public List<Ingredient> getUserRegisteredIngredients() {
        return userRegisteredIngredients;
    }

    public UserDTO setUserRegisteredIngredients(List<Ingredient> userRegisteredIngredients) {
        this.userRegisteredIngredients = userRegisteredIngredients;
        return this;
    }
}
