package com.accenture.recipemanager.domain.nutrition;

import com.accenture.recipemanager.core.generic.AbstractEntityService;

public interface NutritionService extends AbstractEntityService<Nutrition> {
    Nutrition findByValue(Nutrition nutrition);
}