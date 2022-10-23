package com.accenture.recipemanager.domain.ingredient.dto;

import com.accenture.recipemanager.core.generic.AbstractEntityDTO;
import com.accenture.recipemanager.domain.nutrition.Nutrition;
import com.accenture.recipemanager.domain.user.User;

public class IngredientDTO extends AbstractEntityDTO {
    private String name;
    private int weightInGram;
    private Nutrition nutrition;
    private User user;

    public String getName() {
        return name;
    }

    public int getWeightInGram() {
        return weightInGram;
    }

    public IngredientDTO setWeightInGram(int weightInGram) {
        this.weightInGram = weightInGram;
        return this;
    }

    public IngredientDTO setName(String name) {
        this.name = name;
        return this;
    }

    public Nutrition getNutrition() {
        return nutrition;
    }

    public IngredientDTO setNutrition(Nutrition nutrition) {
        this.nutrition = nutrition;
        return this;
    }

    public User getUser() {
        return user;
    }

    public IngredientDTO setUser(User user) {
        this.user = user;
        return this;
    }
}
