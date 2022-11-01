package com.accenture.recipemanager.domain.comment.dto;

import com.accenture.recipemanager.core.generic.AbstractEntityDTO;

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
