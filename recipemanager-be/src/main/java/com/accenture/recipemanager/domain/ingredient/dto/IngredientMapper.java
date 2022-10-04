package com.accenture.recipemanager.domain.ingredient.dto;

import com.accenture.recipemanager.core.generic.DTOMapper;
import com.accenture.recipemanager.domain.ingredient.Ingredient;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;
@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface IngredientMapper extends DTOMapper<Ingredient, IngredientDTO> {
}
