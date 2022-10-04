package com.accenture.recipemanager.domain.recipe;

import com.accenture.recipemanager.core.generic.AbstractEntityRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RecipeRepository extends AbstractEntityRepository<Recipe> {
}
