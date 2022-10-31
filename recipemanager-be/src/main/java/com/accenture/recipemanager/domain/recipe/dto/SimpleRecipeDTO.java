package com.accenture.recipemanager.domain.recipe.dto;

import com.accenture.recipemanager.core.generic.AbstractEntityDTO;
import com.accenture.recipemanager.domain.nutrition.Nutrition;

public class SimpleRecipeDTO extends AbstractEntityDTO {
    private String name;

    private Nutrition nutrition;

    public String getName() {
        return name;
    }

    public SimpleRecipeDTO setName(String name) {
        this.name = name;
        return this;
    }

    public Nutrition getNutrition() {
        return nutrition;
    }

    public SimpleRecipeDTO setNutrition(Nutrition nutrition) {
        this.nutrition = nutrition;
        return this;
    }
}
