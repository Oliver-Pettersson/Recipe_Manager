package com.accenture.recipemanager.domain.recipe;

import com.accenture.recipemanager.core.error.*;
import com.accenture.recipemanager.core.generic.AbstractEntityRepository;
import com.accenture.recipemanager.core.generic.AbstractEntityServiceImpl;

import com.accenture.recipemanager.domain.comment.Comment;
import com.accenture.recipemanager.domain.nutrition.Nutrition;
import com.accenture.recipemanager.domain.rating.Rating;
import com.accenture.recipemanager.domain.rating.RatingService;
import com.accenture.recipemanager.domain.recipe.dto.SimpleRecipeDTO;
import com.accenture.recipemanager.domain.recipe.dto.RateRecipeDTO;
import com.accenture.recipemanager.domain.recipeingredient.RecipeIngredient;
import com.accenture.recipemanager.domain.recipeingredient.RecipeIngredientService;
import com.accenture.recipemanager.core.security.user.User;
import com.accenture.recipemanager.core.security.user.UserService;
import org.slf4j.Logger;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
public class RecipeServiceImpl extends AbstractEntityServiceImpl<Recipe> implements RecipeService {
    private RecipeIngredientService recipeIngredientService;
    private RatingService ratingService;
    private UserService userService;

    public RecipeServiceImpl(AbstractEntityRepository<Recipe> repository, Logger logger, RecipeIngredientService recipeIngredientService, RatingService ratingService, UserService userService) {
        super(repository, logger);
        this.recipeIngredientService = recipeIngredientService;
        this.ratingService = ratingService;
        this.userService = userService;
    }

    @Override
    @Transactional
    protected Recipe preSave(Recipe newEntity) {
        //set user to logged in user
        newEntity.setUser((User) SecurityContextHolder.getContext().getAuthentication().getPrincipal());

        newEntity.setRatings(null);

        //lookup ingredients
        List<RecipeIngredient> recipeIngredients = new ArrayList<>();
        for (RecipeIngredient recipeIngredient : newEntity.getRecipeIngredients()) {
            recipeIngredient = recipeIngredientService.createIfNotExist(recipeIngredient);
            if (recipeIngredient != null) recipeIngredients.add(recipeIngredient);
        }
        newEntity.setRecipeIngredients(recipeIngredients);

        validateField(newEntity);

        return super.preSave(newEntity);
    }

    public void validateField(Recipe recipe) throws RecipeManagerError{
        if (recipe.getRecipeIngredients() == null || recipe.getName() == null || recipe.getDescription() == null || recipe.getImage() == null)
            throw new MandatoryFieldIsNullException("Not all mandatory fields set");
        if (recipe.getName().length() == 0 || recipe.getName().length() > 255)
            throw new InvalidStringException("String invalid, ether to long or empty");
        if (recipe.getImage().length() == 0) throw new InvalidStringException("String invalid, ether to long or empty");
        if (recipe.getRecipeIngredients().size() == 0) throw new InvalidListException("List can't be empty");
        if (recipe.getDescription().length() == 0) throw new InvalidStringException("String can't be empty");
    }

    @Override
    @Transactional
    public Recipe addRatingToRecipe(RateRecipeDTO dto) throws RecipeManagerError{
        Recipe recipe = findById(dto.getRecipe());
        recipe.getRatings().forEach(rating -> {
            if(rating.getComment().getUser().getId() == ((User) SecurityContextHolder.getContext().getAuthentication().getPrincipal()).getId()) throw new RatingAlreadyExistsException("This user already created a rating");
        }  );
        recipe.getRatings().add(ratingService.createIfNotExist(
                new Rating().setRating(dto.getRating()).setComment(
                        new Comment().setComment(dto.getComment()).setComments(new ArrayList<>()))));

        return repository.save(recipe);
    }

    @Override
    @Transactional
    public List<SimpleRecipeDTO> getAllFromUser(String userId) throws RecipeManagerError{
        User fromUser = null;
        try {
            fromUser = userService.findById(userId);
        } catch (IllegalArgumentException ignore) {
        }
        if (fromUser == null) fromUser = userService.findByUsername(userId);
        if (fromUser == null) throw new UserNotFoundException();
        List<Recipe> recipes = ((RecipeRepository) repository).findByUser(fromUser);
        if (recipes == null) throw new NotFoundException("Recipes not found");
        return toSimpleRecipeDTO(recipes);
    }

    @Override
    @Transactional
    public List<SimpleRecipeDTO> getAllRecipes()throws RecipeManagerError {
        List<Recipe> recipes = findAll();
        if (recipes == null)  throw new NotFoundException("Recipes not found");
        return toSimpleRecipeDTO(recipes);
    }

    @Transactional
    public List<SimpleRecipeDTO> toSimpleRecipeDTO(List<Recipe> recipes) {
        List<SimpleRecipeDTO> simpleRecipeDTOS = new ArrayList<>();
        for (Recipe recipe : recipes) {
            SimpleRecipeDTO dto = new SimpleRecipeDTO().setName(recipe.getName()).setNutrition(new Nutrition().setCalories(0).setCarbs(0).setFat(0).setProtein(0));
            dto.setId(recipe.getId());
            for (RecipeIngredient recipeIngredient : recipe.getRecipeIngredients()) {
                dto.getNutrition().setCalories(dto.getNutrition().getCalories() + (int) ((recipeIngredient.getWeightInGram() / 100.0) * recipeIngredient.getIngredient().getNutrition().getCalories()));
                dto.getNutrition().setFat(dto.getNutrition().getFat() + (int) ((recipeIngredient.getWeightInGram() / 100.0) * recipeIngredient.getIngredient().getNutrition().getFat()));
                dto.getNutrition().setCarbs(dto.getNutrition().getCarbs() + (int) ((recipeIngredient.getWeightInGram() / 100.0) * recipeIngredient.getIngredient().getNutrition().getCarbs()));
                dto.getNutrition().setProtein(dto.getNutrition().getProtein() + (int) ((recipeIngredient.getWeightInGram() / 100.0) * recipeIngredient.getIngredient().getNutrition().getProtein()));
            }
            simpleRecipeDTOS.add(dto);
        }

        return simpleRecipeDTOS;
    }
}
