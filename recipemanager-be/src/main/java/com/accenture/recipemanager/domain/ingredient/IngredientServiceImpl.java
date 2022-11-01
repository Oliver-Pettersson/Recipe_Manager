package com.accenture.recipemanager.domain.ingredient;

import com.accenture.recipemanager.core.error.*;
import com.accenture.recipemanager.core.generic.AbstractEntityRepository;
import com.accenture.recipemanager.core.generic.AbstractEntityServiceImpl;
import com.accenture.recipemanager.domain.comment.Comment;
import com.accenture.recipemanager.domain.nutrition.Nutrition;
import com.accenture.recipemanager.domain.nutrition.NutritionService;
import com.accenture.recipemanager.core.security.user.User;
import com.accenture.recipemanager.core.security.user.UserService;
import com.accenture.recipemanager.domain.recipe.Recipe;
import org.slf4j.Logger;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

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
    @Transactional
    public Ingredient findByValue(Ingredient ingredient) {
        Nutrition nutrition = ingredient.getNutrition();
        if (nutrition.getId() != null) nutrition = nutritionService.findById(nutrition.getId().toString());
        else nutrition = nutritionService.findByValue(ingredient.getNutrition());

        if (nutrition == null) nutrition = nutritionService.save(ingredient.getNutrition());

        return ((IngredientRepository) repository).findByNameAndNutrition(
                ingredient.getName(), nutritionService.findByValue(nutrition));
    }

    @Override
    @Transactional
    protected Ingredient preSave(Ingredient newEntity) throws RecipeManagerError {
        newEntity.setUser((User) SecurityContextHolder.getContext().getAuthentication().getPrincipal());
        newEntity.setNutrition(nutritionService.createIfNotExist(newEntity.getNutrition()));

        if(newEntity.getNutrition() == null || newEntity.getName() == null) throw new MandatoryFieldIsNullException("Mandatory field is null");
        if(newEntity.getName().length() > 255) throw new InvalidStringException("Name of ingredient to long");

        return super.preSave(newEntity);
    }

    @Override
    @Transactional
    public List<Ingredient> getAllFromUser(String userId) throws RecipeManagerError{
        User fromUser = null;
        try {
            fromUser = userService.findById(userId);
        } catch (IllegalArgumentException ignore) {
        }
        if (fromUser == null) fromUser = userService.findByUsername(userId);
        if (fromUser == null) throw new UserNotFoundException();

        return ((IngredientRepository) repository).findByUser(fromUser);
    }

    @Override
    public void preDelete(String id) {
        Ingredient ingredient = findById(id);
        if (ingredient.getUser().getId().equals(((User) SecurityContextHolder.getContext().getAuthentication().getPrincipal()).getId()))
            throw new UnauthorizedAccessException("Unauthorized user access");
    }
}
