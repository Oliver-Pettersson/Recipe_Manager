package com.accenture.recipemanager.domain.comment;

import com.accenture.recipemanager.core.error.UsernameAlreadyExistsException;
import com.accenture.recipemanager.core.generic.AbstractEntityRepository;
import com.accenture.recipemanager.core.generic.AbstractEntityServiceImpl;
import com.accenture.recipemanager.domain.user.User;
import org.slf4j.Logger;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Optional;
import java.util.UUID;

@Service
public class CommentServiceImpl extends AbstractEntityServiceImpl<Comment> implements CommentService {
    public CommentServiceImpl(AbstractEntityRepository<Comment> repository, Logger logger) {
        super(repository, logger);
    }

    @Override
    public Comment createReply(Comment comment, String referenceCommentId) {
        //save comment
        comment.setComments(new ArrayList<>());
        save(comment);

        //add comment to referenced comment
        Comment referenceComment = findById(referenceCommentId);
        referenceComment.getComments().add(comment);

        //update referenced comment
        try {
            updateById(referenceCommentId, referenceComment);
        } catch (UsernameAlreadyExistsException e) {
            throw new RuntimeException(e);
        }

        return comment;
    }

    @Override
    protected Comment preSave(Comment newEntity) {
        newEntity.setUser((User) SecurityContextHolder.getContext().getAuthentication().getPrincipal());
        newEntity.setTimeStamp(LocalDateTime.now());
        return newEntity;
    }
}
