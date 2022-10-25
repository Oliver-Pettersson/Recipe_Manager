package com.accenture.recipemanager.domain.rating;

import com.accenture.recipemanager.core.generic.AbstractEntityController;
import com.accenture.recipemanager.core.generic.AbstractEntityService;
import com.accenture.recipemanager.core.generic.DTOMapper;
import com.accenture.recipemanager.domain.rating.dto.RatingDTO;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/rating")
public class RatingController extends AbstractEntityController<Rating, RatingDTO> {
    public RatingController(AbstractEntityService<Rating> service, DTOMapper<Rating, RatingDTO> mapper) {
        super(service, mapper);
    }
}
