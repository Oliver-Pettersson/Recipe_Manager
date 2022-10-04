package com.accenture.recipemanager.domain.ingredient;

import com.accenture.recipemanager.core.generic.AbstractEntityRepository;
import com.accenture.recipemanager.core.generic.AbstractEntityServiceImpl;
import org.slf4j.Logger;
import org.springframework.stereotype.Service;

@Service
public class IngredientServiceImpl extends AbstractEntityServiceImpl<Ingredient> {
    public IngredientServiceImpl(AbstractEntityRepository<Ingredient> repository, Logger logger) {
        super(repository, logger);
    }
}
