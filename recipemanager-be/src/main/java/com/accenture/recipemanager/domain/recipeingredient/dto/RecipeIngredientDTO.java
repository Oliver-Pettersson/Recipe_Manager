package com.accenture.recipemanager.domain.recipeingredient.dto;

import com.accenture.recipemanager.core.generic.AbstractEntityDTO;
import com.accenture.recipemanager.domain.ingredient.Ingredient;

public class RecipeIngredientDTO extends AbstractEntityDTO  {
    private Ingredient ingredient;
    private int weightInGram;

    public Ingredient getIngredient() {
        return ingredient;
    }

    public RecipeIngredientDTO setIngredient(Ingredient ingredient) {
        this.ingredient = ingredient;
        return this;
    }

    public int getWeightInGram() {
        return weightInGram;
    }

    public RecipeIngredientDTO setWeightInGram(int weightInGram) {
        this.weightInGram = weightInGram;
        return this;
    }
}
