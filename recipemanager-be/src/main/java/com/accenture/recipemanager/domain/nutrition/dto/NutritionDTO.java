package com.accenture.recipemanager.domain.nutrition.dto;

import com.accenture.recipemanager.core.generic.AbstractEntityDTO;

public class NutritionDTO extends AbstractEntityDTO {
    private int calories;
    private int carbs;
    private int fat;
    private int protein;

    public int getCalories() {
        return calories;
    }

    public NutritionDTO setCalories(int calories) {
        this.calories = calories;
        return this;
    }

    public int getCarbs() {
        return carbs;
    }

    public NutritionDTO setCarbs(int carbs) {
        this.carbs = carbs;
        return this;
    }

    public int getFat() {
        return fat;
    }

    public NutritionDTO setFat(int fat) {
        this.fat = fat;
        return this;
    }

    public int getProtein() {
        return protein;
    }

    public NutritionDTO setProtein(int protein) {
        this.protein = protein;
        return this;
    }
}
