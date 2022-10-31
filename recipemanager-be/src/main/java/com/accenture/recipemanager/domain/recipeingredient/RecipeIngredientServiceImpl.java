package com.accenture.recipemanager.domain.recipeingredient;

import com.accenture.recipemanager.core.generic.AbstractEntityRepository;
import com.accenture.recipemanager.core.generic.AbstractEntityServiceImpl;
import com.accenture.recipemanager.domain.ingredient.Ingredient;
import com.accenture.recipemanager.domain.ingredient.IngredientService;
import org.slf4j.Logger;
import org.springframework.stereotype.Service;

@Service
public class RecipeIngredientServiceImpl extends AbstractEntityServiceImpl<RecipeIngredient> implements RecipeIngredientService {
    private IngredientService ingredientService;

    public RecipeIngredientServiceImpl(AbstractEntityRepository<RecipeIngredient> repository, Logger logger, IngredientService ingredientService) {
        super(repository, logger);
        this.ingredientService = ingredientService;
    }

    @Override
    public RecipeIngredient findByValue(RecipeIngredient recipeIngredient) {
        Ingredient ingredient = recipeIngredient.getIngredient();

        if (ingredient.getId() != null) ingredient = ingredientService.findById(ingredient.getId().toString());
        else ingredient = ingredientService.findByValue(ingredient);

        if (ingredient == null) ingredient = ingredientService.save(recipeIngredient.getIngredient());

        return ((RecipeIngredientRepository) repository).findByIngredientAndWeightInGram(
                ingredientService.findByValue(ingredient), recipeIngredient.getWeightInGram());
    }
}
