package com.accenture.recipemanager.domain.ingredient;

import com.accenture.recipemanager.core.generic.AbstractEntityController;
import com.accenture.recipemanager.core.generic.AbstractEntityService;
import com.accenture.recipemanager.core.generic.DTOMapper;
import com.accenture.recipemanager.domain.comment.Comment;
import com.accenture.recipemanager.domain.comment.dto.CommentDTO;
import com.accenture.recipemanager.domain.ingredient.dto.IngredientDTO;
import com.accenture.recipemanager.domain.recipe.Recipe;
import com.accenture.recipemanager.domain.recipe.RecipeService;
import com.accenture.recipemanager.domain.recipe.dto.RecipeDTO;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collection;
import java.util.List;

@RestController
@RequestMapping("/ingredient")
public class IngredientController extends AbstractEntityController<Ingredient, IngredientDTO> {

    public IngredientController(AbstractEntityService<Ingredient> service, DTOMapper<Ingredient, IngredientDTO> mapper) {
        super(service, mapper);
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<Collection<IngredientDTO>> getAllFromUser(@PathVariable String userId) {
        List<Ingredient> ingredients = ((IngredientService) service).getAllFromUser(userId);

        return new ResponseEntity<>(mapper.toDTOs(ingredients), HttpStatus.CREATED);
    }
}
