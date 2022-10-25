package com.accenture.recipemanager.domain.comment;

import com.accenture.recipemanager.core.generic.AbstractEntity;
import com.accenture.recipemanager.domain.ingredient.Ingredient;
import com.accenture.recipemanager.domain.user.User;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name = "comment")
public class Comment extends AbstractEntity {

    @OneToMany(fetch=FetchType.EAGER)
    @JoinColumn(name = "comment_id")
    @Fetch(value = FetchMode.SELECT)

    private List<Comment> comments;

    @Column(name = "comment", nullable = false)
    private String comment;

    @Column(name = "timeStamp", nullable = false)
    private LocalDateTime timeStamp;

    @ManyToOne(cascade = CascadeType.DETACH, fetch=FetchType.EAGER)
    @JoinColumn(name = "user_id", nullable = false)
    @Fetch(value = FetchMode.SELECT)
    private User user;

    public Comment() {
    }

    public Comment(List<Comment> comments, String comment, LocalDateTime timeStamp, User user) {
        this.comments = comments;
        this.comment = comment;
        this.timeStamp = timeStamp;
        this.user = user;

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

    public User getUser() {
        return user;
    }

    public Comment setUser(User user) {
        this.user = user;
        return this;
    }
}
