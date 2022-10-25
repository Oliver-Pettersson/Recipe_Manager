package com.accenture.recipemanager.domain.comment.dto;

import com.accenture.recipemanager.core.generic.AbstractEntityDTO;
import com.accenture.recipemanager.domain.comment.Comment;
import com.accenture.recipemanager.domain.user.User;

import java.time.LocalDateTime;
import java.util.List;

public class CommentReplyDTO extends AbstractEntityDTO {
    private String referenceComment;
    private String comment;

    public String getReferenceComment() {
        return referenceComment;
    }

    public void setReferenceComment(String referenceComment) {
        this.referenceComment = referenceComment;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

}
