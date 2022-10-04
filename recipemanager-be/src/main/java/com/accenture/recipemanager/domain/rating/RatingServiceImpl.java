package com.accenture.recipemanager.domain.rating;

import com.accenture.recipemanager.core.generic.AbstractEntityRepository;
import com.accenture.recipemanager.core.generic.AbstractEntityServiceImpl;
import org.slf4j.Logger;
import org.springframework.stereotype.Service;

@Service
public class RatingServiceImpl extends AbstractEntityServiceImpl<Rating> implements RatingService {
    public RatingServiceImpl(AbstractEntityRepository<Rating> repository, Logger logger) {
        super(repository, logger);
    }
}
