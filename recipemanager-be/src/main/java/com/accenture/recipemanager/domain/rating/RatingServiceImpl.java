package com.accenture.recipemanager.domain.rating;

import com.accenture.recipemanager.core.generic.AbstractEntityRepository;
import com.accenture.recipemanager.core.generic.AbstractEntityServiceImpl;
import com.accenture.recipemanager.domain.comment.CommentService;
import com.accenture.recipemanager.domain.recipe.RecipeService;
import org.slf4j.Logger;
import org.springframework.stereotype.Service;

@Service
public class RatingServiceImpl extends AbstractEntityServiceImpl<Rating> implements RatingService {
    private CommentService commentService;

    public RatingServiceImpl(AbstractEntityRepository<Rating> repository, Logger logger,
                             CommentService commentService) {
        super(repository, logger);
        this.commentService = commentService;
    }

    @Override
    protected Rating preSave(Rating newEntity) {
        newEntity.setComment(commentService.createIfNotExist(newEntity.getComment()));

        return newEntity;
    }
}
