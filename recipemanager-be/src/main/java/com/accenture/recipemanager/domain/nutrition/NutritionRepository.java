package com.accenture.recipemanager.domain.nutrition;

import com.accenture.recipemanager.core.generic.AbstractEntityRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface NutritionRepository extends AbstractEntityRepository<Nutrition> {
    Nutrition findByCaloriesAndCarbsAndFatAndProtein(int calories, int carbs, int fat, int protein);
}
