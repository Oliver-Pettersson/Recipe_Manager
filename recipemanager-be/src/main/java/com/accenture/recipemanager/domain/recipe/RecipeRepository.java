package com.accenture.recipemanager.domain.recipe;

import com.accenture.recipemanager.core.generic.AbstractEntityRepository;

import com.accenture.recipemanager.domain.user.User;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RecipeRepository extends AbstractEntityRepository<Recipe> {
    List<Recipe> findByUser(User user);

}
