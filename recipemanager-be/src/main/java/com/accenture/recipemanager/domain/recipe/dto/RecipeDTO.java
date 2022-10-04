package com.accenture.recipemanager.domain.recipe.dto;

import com.accenture.recipemanager.core.generic.AbstractEntityDTO;
import com.accenture.recipemanager.domain.ingredient.Ingredient;
import com.accenture.recipemanager.domain.user.User;

import javax.persistence.Column;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import java.time.LocalDateTime;
import java.util.List;

public class RecipeDTO extends AbstractEntityDTO {
    private String description;

    private List<Ingredient> ingredients;

    public String getDescription() {
        return description;
    }

    public RecipeDTO setDescription(String description) {
        this.description = description;
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
