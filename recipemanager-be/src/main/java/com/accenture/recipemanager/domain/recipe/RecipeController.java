package com.accenture.recipemanager.domain.recipe;

import com.accenture.recipemanager.core.generic.AbstractEntityController;
import com.accenture.recipemanager.core.generic.AbstractEntityService;
import com.accenture.recipemanager.core.generic.DTOMapper;
import com.accenture.recipemanager.domain.recipe.dto.RecipeDTO;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/recipe")
public class RecipeController extends AbstractEntityController<Recipe, RecipeDTO> {
    public RecipeController(AbstractEntityService<Recipe> service, DTOMapper<Recipe, RecipeDTO> mapper) {
        super(service, mapper);
    }
}
