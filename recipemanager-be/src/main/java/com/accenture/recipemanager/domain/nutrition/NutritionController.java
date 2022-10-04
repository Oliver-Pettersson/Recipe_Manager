package com.accenture.recipemanager.domain.nutrition;

import com.accenture.recipemanager.core.generic.AbstractEntityController;
import com.accenture.recipemanager.core.generic.AbstractEntityService;
import com.accenture.recipemanager.core.generic.DTOMapper;
import com.accenture.recipemanager.domain.nutrition.dto.NutritionDTO;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/nutrition")
public class NutritionController extends AbstractEntityController<Nutrition, NutritionDTO> {

    public NutritionController(AbstractEntityService<Nutrition> service, DTOMapper<Nutrition, NutritionDTO> mapper) {
        super(service, mapper);
    }
}
