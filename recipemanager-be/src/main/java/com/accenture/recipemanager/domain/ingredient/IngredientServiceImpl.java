package com.accenture.recipemanager.domain.ingredient;

import com.accenture.recipemanager.core.generic.AbstractEntityRepository;
import com.accenture.recipemanager.core.generic.AbstractEntityServiceImpl;
import com.accenture.recipemanager.domain.nutrition.Nutrition;
import com.accenture.recipemanager.domain.nutrition.NutritionService;
import com.accenture.recipemanager.domain.recipe.RecipeRepository;
import com.accenture.recipemanager.domain.user.User;
import com.accenture.recipemanager.domain.user.UserService;
import org.slf4j.Logger;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class IngredientServiceImpl extends AbstractEntityServiceImpl<Ingredient> implements IngredientService {
    private NutritionService nutritionService;
private UserService userService;
    public IngredientServiceImpl(AbstractEntityRepository<Ingredient> repository, Logger logger, NutritionService nutritionService, UserService userService) {
        super(repository, logger);
        this.nutritionService = nutritionService;
        this.userService = userService;
    }

    @Override
    public Ingredient findByValue(Ingredient ingredient) {
        Nutrition nutrition = ingredient.getNutrition();
        if (nutrition.getId() != null) nutrition = nutritionService.findById(nutrition.getId().toString());
        else nutrition = nutritionService.findByValue(ingredient.getNutrition());

        if (nutrition == null) nutrition = nutritionService.save(ingredient.getNutrition());

        return ((IngredientRepository) repository).findByNameAndWeightInGramAndNutrition(
                ingredient.getName(), ingredient.getWeightInGram(), nutritionService.findByValue(nutrition));
    }

    @Override
    protected Ingredient preSave(Ingredient newEntity) {
        newEntity.setUser((User) SecurityContextHolder.getContext().getAuthentication().getPrincipal());
        newEntity.setNutrition(nutritionService.createIfNotExist(newEntity.getNutrition()));
        return super.preSave(newEntity);
    }

    @Override
    public List<Ingredient> getAllFromUser(String userId) {
        User fromUser = null;
        try {
            fromUser = userService.findById(userId);
        } catch (IllegalArgumentException ignore) {
        }
        if (fromUser == null) fromUser = userService.findByUsername(userId);
        if (fromUser == null) return null;

        return ((IngredientRepository) repository).findByUser(fromUser);

    }
}
