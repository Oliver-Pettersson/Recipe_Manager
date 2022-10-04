package com.accenture.recipemanager.domain.ingredient;

import com.accenture.recipemanager.core.generic.AbstractEntity;
import com.accenture.recipemanager.domain.nutrition.Nutrition;

import javax.persistence.*;

@Entity
@Table(name = "ingredient")
public class Ingredient extends AbstractEntity {
    @Column(name = "name", nullable = false)
    private String name;

    @ManyToOne(cascade = CascadeType.DETACH)
    @JoinColumn(name = "nutrition_id", nullable = false)
    private Nutrition nutrition;

    public Ingredient() {
    }

    public Ingredient(String name, Nutrition nutrition) {
        this.name = name;
        this.nutrition = nutrition;
    }

    public String getName() {
        return name;
    }

    public Ingredient setName(String name) {
        this.name = name;
        return this;
    }

    public Nutrition getNutrition() {
        return nutrition;
    }

    public Ingredient setNutrition(Nutrition nutrition) {
        this.nutrition = nutrition;
        return this;
    }
}
