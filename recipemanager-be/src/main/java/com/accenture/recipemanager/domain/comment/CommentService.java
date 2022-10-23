package com.accenture.recipemanager.domain.comment;

import com.accenture.recipemanager.core.generic.AbstractEntityService;

public interface CommentService extends AbstractEntityService<Comment> {
    Comment createReply(Comment comment, String referenceComment);
}
