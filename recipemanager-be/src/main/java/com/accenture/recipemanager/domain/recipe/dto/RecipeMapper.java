package com.accenture.recipemanager.domain.recipe.dto;

import com.accenture.recipemanager.core.generic.DTOMapper;
import com.accenture.recipemanager.domain.recipe.Recipe;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface RecipeMapper extends DTOMapper<Recipe, RecipeDTO> {
}
