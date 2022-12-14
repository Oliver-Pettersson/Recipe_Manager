package com.accenture.recipemanager.domain.ingredient.dto;

import com.accenture.recipemanager.core.generic.AbstractEntityDTO;
import com.accenture.recipemanager.domain.nutrition.Nutrition;

public class IngredientDTO extends AbstractEntityDTO {
    private String name;
    private Nutrition nutrition;

    public String getName() {
        return name;
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
}
