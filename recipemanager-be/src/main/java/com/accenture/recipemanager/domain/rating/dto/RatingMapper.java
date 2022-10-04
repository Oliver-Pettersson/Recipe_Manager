package com.accenture.recipemanager.domain.rating.dto;

import com.accenture.recipemanager.core.generic.DTOMapper;
import com.accenture.recipemanager.domain.rating.Rating;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface RatingMapper extends DTOMapper<Rating, RatingDTO> {
}
