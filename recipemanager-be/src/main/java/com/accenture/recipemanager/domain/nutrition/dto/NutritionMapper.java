package com.accenture.recipemanager.domain.nutrition.dto;

import com.accenture.recipemanager.core.generic.DTOMapper;
import com.accenture.recipemanager.domain.nutrition.Nutrition;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface NutritionMapper extends DTOMapper<Nutrition, NutritionDTO> {
}
