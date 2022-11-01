package com.accenture.recipemanager.domain.recipeingredient;

import com.accenture.recipemanager.core.error.InvalidNumberException;
import com.accenture.recipemanager.core.error.MandatoryFieldIsNullException;
import com.accenture.recipemanager.core.generic.AbstractEntityRepository;
import com.accenture.recipemanager.core.generic.AbstractEntityServiceImpl;
import com.accenture.recipemanager.domain.ingredient.Ingredient;
import com.accenture.recipemanager.domain.ingredient.IngredientService;
import org.slf4j.Logger;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class RecipeIngredientServiceImpl extends AbstractEntityServiceImpl<RecipeIngredient> implements RecipeIngredientService {
    private IngredientService ingredientService;

    public RecipeIngredientServiceImpl(AbstractEntityRepository<RecipeIngredient> repository, Logger logger, IngredientService ingredientService) {
        super(repository, logger);
        this.ingredientService = ingredientService;
    }

    @Override
    @Transactional
    public RecipeIngredient findByValue(RecipeIngredient recipeIngredient) {
        Ingredient ingredient = recipeIngredient.getIngredient();

        if (ingredient.getId() != null) ingredient = ingredientService.findById(ingredient.getId().toString());
        else ingredient = ingredientService.findByValue(ingredient);

        if (ingredient == null) ingredient = ingredientService.save(recipeIngredient.getIngredient());

        return ((RecipeIngredientRepository) repository).findByIngredientAndWeightInGram(
                ingredientService.findByValue(ingredient), recipeIngredient.getWeightInGram());
    }

    @Override
    @Transactional
    protected RecipeIngredient preSave(RecipeIngredient newEntity) {
        if(newEntity.getWeightInGram() < 1) throw new InvalidNumberException("Number can't be negative or 0");
        if(newEntity.getIngredient() == null) throw new MandatoryFieldIsNullException("Mandatory field is null");

        return super.preSave(newEntity);
    }
}
