package com.accenture.recipemanager.domain.nutrition;

import com.accenture.recipemanager.core.error.InvalidNumberException;
import com.accenture.recipemanager.core.error.RecipeManagerError;
import com.accenture.recipemanager.core.generic.AbstractEntityServiceImpl;
import org.slf4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class NutritionServiceImpl extends AbstractEntityServiceImpl<Nutrition> implements NutritionService {

    @Autowired
    public NutritionServiceImpl(NutritionRepository repository, Logger logger) {
        super(repository, logger);
    }

    /**
     * This method searches for an entry with the same value
     *
     * @param nutrition the object to be searched for
     * @return is ether the found object or null
     */
    @Override
    @Transactional
    public Nutrition findByValue(Nutrition nutrition) {
        return ((NutritionRepository) repository).findByCaloriesAndCarbsAndFatAndProtein(
                nutrition.getCalories(),
                nutrition.getCarbs(),
                nutrition.getFat(),
                nutrition.getProtein());
    }

    @Override
    @Transactional
    protected Nutrition preSave(Nutrition newEntity) throws RecipeManagerError {
        if (newEntity.getProtein() < 0 || newEntity.getCarbs() < 0 || newEntity.getCalories() < 0 || newEntity.getFat() < 0)
            throw new InvalidNumberException("Number can't be negative");

        return newEntity;
    }
}
