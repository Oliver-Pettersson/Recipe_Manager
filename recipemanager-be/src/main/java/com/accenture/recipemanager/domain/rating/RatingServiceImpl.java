package com.accenture.recipemanager.domain.rating;

import com.accenture.recipemanager.core.error.InvalidNumberException;
import com.accenture.recipemanager.core.error.MandatoryFieldIsNullException;
import com.accenture.recipemanager.core.generic.AbstractEntityRepository;
import com.accenture.recipemanager.core.generic.AbstractEntityServiceImpl;
import com.accenture.recipemanager.domain.comment.CommentService;
import com.accenture.recipemanager.domain.recipe.RecipeService;
import org.slf4j.Logger;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class RatingServiceImpl extends AbstractEntityServiceImpl<Rating> implements RatingService {
    private CommentService commentService;

    public RatingServiceImpl(AbstractEntityRepository<Rating> repository, Logger logger,
                             CommentService commentService) {
        super(repository, logger);
        this.commentService = commentService;
    }

    @Override
    @Transactional
    protected Rating preSave(Rating newEntity) {
        newEntity.setComment(commentService.createIfNotExist(newEntity.getComment()));

        if(newEntity.getComment() == null) throw new MandatoryFieldIsNullException("Mandatory field is null");
        if(newEntity.getRating() < 1 || newEntity.getRating()>5) throw new InvalidNumberException("Rating can't be above 5 or below 1");

        return newEntity;
    }
}
