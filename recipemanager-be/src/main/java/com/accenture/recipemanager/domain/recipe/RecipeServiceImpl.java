package com.accenture.recipemanager.domain.recipe;

import com.accenture.recipemanager.core.generic.AbstractEntityRepository;
import com.accenture.recipemanager.core.generic.AbstractEntityServiceImpl;
import org.slf4j.Logger;
import org.springframework.stereotype.Service;

@Service
public class RecipeServiceImpl extends AbstractEntityServiceImpl<Recipe> implements RecipeService {
    public RecipeServiceImpl(AbstractEntityRepository<Recipe> repository, Logger logger) {
        super(repository, logger);
    }
}
