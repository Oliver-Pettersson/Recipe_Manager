package com.accenture.recipemanager.domain.comment.dto;

import com.accenture.recipemanager.core.generic.AbstractEntityDTO;
import com.accenture.recipemanager.domain.comment.Comment;
import com.accenture.recipemanager.domain.user.User;

import java.time.LocalDateTime;
import java.util.List;

public class CommentReplyDTO extends AbstractEntityDTO {
    private String referenceComment;
    private String comment;
    private LocalDateTime timeStamp;

    private User user;

    private List<Comment> comments;

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

    public LocalDateTime getTimeStamp() {
        return timeStamp;
    }

    public void setTimeStamp(LocalDateTime timeStamp) {
        this.timeStamp = timeStamp;
    }

    public User getUser() {
        return user;
    }

    public CommentReplyDTO setUser(User user) {
        this.user = user;
        return this;
    }

    public List<Comment> getComments() {
        return comments;
    }

    public CommentReplyDTO setComments(List<Comment> comments) {
        this.comments = comments;
        return this;
    }
}
