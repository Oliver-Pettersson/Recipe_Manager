package com.accenture.recipemanager.domain.comment;

import com.accenture.recipemanager.core.error.InvalidStringException;
import com.accenture.recipemanager.core.error.MandatoryFieldIsNullException;
import com.accenture.recipemanager.core.generic.AbstractEntityRepository;
import com.accenture.recipemanager.core.generic.AbstractEntityServiceImpl;
import org.slf4j.Logger;
import org.springframework.stereotype.Service;
import com.accenture.recipemanager.core.error.UsernameAlreadyExistsException;
import com.accenture.recipemanager.core.security.user.User;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.ArrayList;


@Service
public class CommentServiceImpl extends AbstractEntityServiceImpl<Comment> implements CommentService {
    public CommentServiceImpl(AbstractEntityRepository<Comment> repository, Logger logger) {
        super(repository, logger);
    }


    @Override
    @Transactional
    public Comment createReply(Comment comment, String referenceCommentId) {
        //save comment
        comment.setComments(new ArrayList<>());
        comment.setTimeStamp(LocalDateTime.now() );
        comment.setUser((User) SecurityContextHolder.getContext().getAuthentication().getPrincipal());

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
    @Transactional
    protected Comment preSave(Comment newEntity) {
        newEntity.setUser((User) SecurityContextHolder.getContext().getAuthentication().getPrincipal());
        newEntity.setTimeStamp(LocalDateTime.now());

        if(newEntity.getComment() == null)throw new MandatoryFieldIsNullException("Mandatory field is null");
        if(newEntity.getComment().length() < 255) throw new InvalidStringException("Input for field comment is to long");

        return newEntity;
    }
}
