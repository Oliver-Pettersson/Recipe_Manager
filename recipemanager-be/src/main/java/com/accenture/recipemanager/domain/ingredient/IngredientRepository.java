package com.accenture.recipemanager.domain.ingredient;

import com.accenture.recipemanager.core.generic.AbstractEntityRepository;

import com.accenture.recipemanager.domain.nutrition.Nutrition;
import com.accenture.recipemanager.domain.user.User;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IngredientRepository extends AbstractEntityRepository<Ingredient> {
    Ingredient findByNameAndNutrition(String Name, Nutrition nutrition);
    List<Ingredient> findByUser(User user);

}
