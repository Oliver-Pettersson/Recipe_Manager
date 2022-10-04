package com.accenture.recipemanager.domain.ingredient;

import com.accenture.recipemanager.core.generic.AbstractEntityController;
import com.accenture.recipemanager.core.generic.AbstractEntityService;
import com.accenture.recipemanager.core.generic.DTOMapper;
import com.accenture.recipemanager.domain.comment.Comment;
import com.accenture.recipemanager.domain.comment.dto.CommentDTO;
import com.accenture.recipemanager.domain.ingredient.dto.IngredientDTO;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/ingredient")
public class IngredientController extends AbstractEntityController<Ingredient, IngredientDTO> {

    public IngredientController(AbstractEntityService<Ingredient> service, DTOMapper<Ingredient, IngredientDTO> mapper) {
        super(service, mapper);
    }
}
