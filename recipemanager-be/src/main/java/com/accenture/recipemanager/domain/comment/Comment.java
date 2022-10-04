package com.accenture.recipemanager.domain.comment;

import com.accenture.recipemanager.core.generic.AbstractEntity;
import com.accenture.recipemanager.domain.ingredient.Ingredient;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name = "comment")
public class Comment extends AbstractEntity {
    @OneToMany
    @JoinColumn(name = "comment_id")
    private List<Comment> comments;

    @Column(name = "comment", nullable = false)
    private String comment;

    @Column(name = "timeStamp", nullable = false)
    private LocalDateTime timeStamp;

    public Comment() {
    }

    public Comment(List<Comment> comments, String comment, LocalDateTime timeStamp) {
        this.comments = comments;
        this.comment = comment;
        this.timeStamp = timeStamp;
    }

    public List<Comment> getComments() {
        return comments;
    }

    public Comment setComments(List<Comment> comments) {
        this.comments = comments;
        return this;
    }

    public String getComment() {
        return comment;
    }

    public Comment setComment(String comment) {
        this.comment = comment;
        return this;
    }

    public LocalDateTime getTimeStamp() {
        return timeStamp;
    }

    public Comment setTimeStamp(LocalDateTime timeStamp) {
        this.timeStamp = timeStamp;
        return this;
    }
}
