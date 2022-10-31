package com.accenture.recipemanager.domain.recipe;

import com.accenture.recipemanager.core.generic.AbstractEntityRepository;
import com.accenture.recipemanager.core.generic.AbstractEntityServiceImpl;

import com.accenture.recipemanager.domain.comment.Comment;
import com.accenture.recipemanager.domain.ingredient.Ingredient;
import com.accenture.recipemanager.domain.ingredient.IngredientService;
import com.accenture.recipemanager.domain.nutrition.Nutrition;
import com.accenture.recipemanager.domain.rating.Rating;
import com.accenture.recipemanager.domain.rating.RatingService;
import com.accenture.recipemanager.domain.recipe.dto.SimpleRecipeDTO;
import com.accenture.recipemanager.domain.recipe.dto.RateRecipeDTO;
import com.accenture.recipemanager.domain.user.User;
import com.accenture.recipemanager.domain.user.UserService;
import org.slf4j.Logger;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class RecipeServiceImpl extends AbstractEntityServiceImpl<Recipe> implements RecipeService {
    private IngredientService ingredientService;
    private RatingService ratingService;
    private UserService userService;

    public RecipeServiceImpl(AbstractEntityRepository<Recipe> repository, Logger logger, IngredientService ingredientService, RatingService ratingService, UserService userService) {
        super(repository, logger);
        this.ingredientService = ingredientService;
        this.ratingService = ratingService;
        this.userService = userService;
    }

    @Override
    protected Recipe preSave(Recipe newEntity) {
        //remove additional id
        newEntity.setId(null);

        //set user to logged in user
        newEntity.setUser((User) SecurityContextHolder.getContext().getAuthentication().getPrincipal());

        //lookup ingredients
        List<Ingredient> ingredients = new ArrayList<>();
        for (Ingredient ingredient : newEntity.getIngredients()) {
            ingredient = ingredientService.createIfNotExist(ingredient);
            if (ingredient != null) ingredients.add(ingredient);
        }

        newEntity.setIngredients(ingredients);

        return super.preSave(newEntity);
    }

    @Override
    public Recipe addRatingToRecipe(RateRecipeDTO dto) {
        Recipe recipe = findById(dto.getRecipe());

        recipe.getRatings().add(ratingService.createIfNotExist(
                new Rating().setRating(dto.getRating()).setComment(
                        new Comment().setComment(dto.getComment()).setComments(new ArrayList<>()))));

        return repository.save(recipe);
    }

    @Override
    public List<Recipe> getAllFromUser(String userId) {
        User fromUser = null;
        try {
            fromUser = userService.findById(userId);
        } catch (IllegalArgumentException ignore) {
        }
        if (fromUser == null) fromUser = userService.findByUsername(userId);
        if (fromUser == null) return null;

        return ((RecipeRepository) repository).findByUser(fromUser);
    }

    @Override
    public List<SimpleRecipeDTO> getAllRecipes() {
        List<Recipe> recipes = findAll();
        if (recipes == null) return null;
        List<SimpleRecipeDTO> simpleRecipeDTOS = new ArrayList<>();
        for (Recipe recipe : recipes) {
            SimpleRecipeDTO dto = new SimpleRecipeDTO().setName(recipe.getName()).setNutrition(new Nutrition().setCalories(0).setCarbs(0).setFat(0).setProtein(0));
            dto.setId(recipe.getId());
            for (Ingredient ingredient : recipe.getIngredients()) {
                dto.getNutrition().setCalories(dto.getNutrition().getCalories() + (ingredient.getWeightInGram() / 100) * ingredient.getNutrition().getCalories());
                dto.getNutrition().setFat(dto.getNutrition().getFat() + (ingredient.getWeightInGram() / 100) * ingredient.getNutrition().getFat());
                dto.getNutrition().setCarbs(dto.getNutrition().getCarbs() + (ingredient.getWeightInGram() / 100) * ingredient.getNutrition().getCarbs());
                dto.getNutrition().setProtein(dto.getNutrition().getProtein() + (ingredient.getWeightInGram() / 100) * ingredient.getNutrition().getProtein());
            }
            simpleRecipeDTOS.add(dto);
        }

        return simpleRecipeDTOS;
    }
}
