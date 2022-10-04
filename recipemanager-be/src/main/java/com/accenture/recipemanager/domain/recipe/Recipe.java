package com.accenture.recipemanager.domain.recipe;

import com.accenture.recipemanager.core.generic.AbstractEntity;
import com.accenture.recipemanager.domain.ingredient.Ingredient;
import com.accenture.recipemanager.domain.user.User;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;
@Entity
@Table(name = "recipe")
public class Recipe extends AbstractEntity {
    @Column(name = "description", nullable = false, unique = false)
    private String description;

    @ManyToMany
    @JoinTable(
            name = "ingredients_recipe",
            joinColumns = @JoinColumn(name = "recipe_id"),
            inverseJoinColumns = @JoinColumn(name = "ingredient_id"))
    private List<Ingredient> ingredients;

    public Recipe(String description, List<Ingredient> ingredients) {
        this.description = description;
        this.ingredients = ingredients;
    }

    public Recipe() {
    }

    public String getDescription() {
        return description;
    }

    public Recipe setDescription(String description) {
        this.description = description;
        return this;
    }

    public List<Ingredient> getIngredients() {
        return ingredients;
    }

    public Recipe setIngredients(List<Ingredient> ingredients) {
        this.ingredients = ingredients;
        return this;
    }
}
