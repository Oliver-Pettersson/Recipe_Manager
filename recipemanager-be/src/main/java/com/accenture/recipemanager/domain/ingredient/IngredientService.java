package com.accenture.recipemanager.domain.ingredient;

import com.accenture.recipemanager.core.generic.AbstractEntityService;

import java.util.List;

public interface IngredientService extends AbstractEntityService<Ingredient> {
    Ingredient findByValue(Ingredient ingredient);
    List<Ingredient> getAllFromUser(String userId);
}
