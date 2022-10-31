package com.accenture.recipemanager.domain.recipeingredient;

import com.accenture.recipemanager.core.generic.AbstractEntityRepository;
import com.accenture.recipemanager.domain.ingredient.Ingredient;
import org.springframework.stereotype.Repository;

@Repository
public interface RecipeIngredientRepository extends AbstractEntityRepository<RecipeIngredient> {
    RecipeIngredient findByIngredientAndWeightInGram(Ingredient ingredient, int weightInGram);
}
