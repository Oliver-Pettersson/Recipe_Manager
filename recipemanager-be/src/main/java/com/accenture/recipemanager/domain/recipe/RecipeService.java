package com.accenture.recipemanager.domain.recipe;

import com.accenture.recipemanager.core.generic.AbstractEntityService;
import com.accenture.recipemanager.domain.recipe.dto.RateRecipeDTO;

import java.util.List;

public interface RecipeService extends AbstractEntityService<Recipe> {
    Recipe addRatingToRecipe(RateRecipeDTO dto);

    List<Recipe> getAllFromUser(String userId);
}
