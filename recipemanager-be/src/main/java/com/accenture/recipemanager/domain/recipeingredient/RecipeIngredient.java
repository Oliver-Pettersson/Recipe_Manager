package com.accenture.recipemanager.domain.recipeingredient;

import com.accenture.recipemanager.core.generic.AbstractEntity;
import com.accenture.recipemanager.domain.ingredient.Ingredient;

import javax.persistence.*;

@Entity
@Table(name = "recipe_ingredient")
public class RecipeIngredient extends AbstractEntity {
    @ManyToOne(fetch= FetchType.EAGER)
    @JoinColumn(name = "ingredient_id", nullable = false)
    private Ingredient ingredient;

    @Column(name = "weight_in_gram", nullable = false)
    private int weightInGram;

    public RecipeIngredient() {
    }

    public RecipeIngredient(Ingredient ingredient, int weightInGram) {
        this.ingredient = ingredient;
        this.weightInGram = weightInGram;
    }

    public int getWeightInGram() {
        return weightInGram;
    }

    public RecipeIngredient setWeightInGram(int weightInGram) {
        this.weightInGram = weightInGram;
        return this;
    }

    public Ingredient getIngredient() {
        return ingredient;
    }

    public RecipeIngredient setIngredient(Ingredient ingredient) {
        this.ingredient = ingredient;
        return this;
    }
}
