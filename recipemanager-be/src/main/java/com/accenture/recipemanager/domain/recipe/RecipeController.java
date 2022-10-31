package com.accenture.recipemanager.domain.recipe;

import com.accenture.recipemanager.core.generic.AbstractEntityController;
import com.accenture.recipemanager.core.generic.AbstractEntityService;
import com.accenture.recipemanager.core.generic.DTOMapper;
import com.accenture.recipemanager.domain.recipe.dto.SimpleRecipeDTO;
import com.accenture.recipemanager.domain.recipe.dto.AllRecipesMapper;
import com.accenture.recipemanager.domain.recipe.dto.RecipeDTO;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.accenture.recipemanager.domain.recipe.dto.RateRecipeDTO;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.List;

@RestController
@RequestMapping("/recipe")
public class RecipeController extends AbstractEntityController<Recipe, RecipeDTO> {
    private AllRecipesMapper allRecipesMapper;

    public RecipeController(AbstractEntityService<Recipe> service, DTOMapper<Recipe, RecipeDTO> mapper, AllRecipesMapper allRecipesMapper) {
        super(service, mapper);
        this.allRecipesMapper = allRecipesMapper;
    }

    @PostMapping("/rate")
    public ResponseEntity<RecipeDTO> addRatingToRecipe(@RequestBody RateRecipeDTO dto) {
        if (dto == null || dto.getRecipe() == null) return new ResponseEntity<>(HttpStatus.BAD_REQUEST);

        Recipe recipe = ((RecipeService) service).addRatingToRecipe(dto);

        return new ResponseEntity<>(mapper.toDTO(recipe), HttpStatus.CREATED);
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<Collection<RecipeDTO>> getAllFromUser(@PathVariable String userId) {
        List<Recipe> recipes = ((RecipeService) service).getAllFromUser(userId);

        return new ResponseEntity<>(mapper.toDTOs(recipes), HttpStatus.CREATED);
    }

    @GetMapping("/all")
    public ResponseEntity<Collection<SimpleRecipeDTO>> getAllRecipes() {
        List<SimpleRecipeDTO> recipes = ((RecipeService) service).getAllRecipes();

        return new ResponseEntity<>(recipes, HttpStatus.CREATED);
    }
}
