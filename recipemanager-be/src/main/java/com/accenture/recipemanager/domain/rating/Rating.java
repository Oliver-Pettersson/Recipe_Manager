package com.accenture.recipemanager.domain.rating;

import com.accenture.recipemanager.core.generic.AbstractEntity;
import com.accenture.recipemanager.domain.comment.Comment;
import com.accenture.recipemanager.domain.recipe.Recipe;

import javax.persistence.*;

@Entity
@Table(name = "rating")
public class Rating extends AbstractEntity {
    @OneToOne(fetch=FetchType.EAGER)
    @JoinColumn(name = "comment_id")
    private Comment comment;


    @Column(name = "rating", nullable = false)
    private int rating;

    public Rating() {
    }


    public Rating(Comment comment, int rating) {
        this.comment = comment;
        this.rating = rating;
    }

    public Comment getComment() {
        return comment;
    }

    public Rating setComment(Comment comment) {
        this.comment = comment;
        return this;
    }

    public int getRating() {
        return rating;
    }

    public Rating setRating(int rating) {
        this.rating = rating;
        return this;
    }
}
