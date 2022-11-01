package com.accenture.recipemanager.domain.ingredient;

import com.accenture.recipemanager.core.generic.AbstractEntity;
import com.accenture.recipemanager.domain.nutrition.Nutrition;

import com.accenture.recipemanager.core.security.user.User;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

import javax.persistence.*;

@Entity
@Table(name = "ingredient")
public class Ingredient extends AbstractEntity {
    @ManyToOne(fetch=FetchType.EAGER)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @Column(name = "name", nullable = false)
    private String name;

    @ManyToOne(cascade = CascadeType.DETACH,fetch=FetchType.EAGER)
    @JoinColumn(name = "nutrition_id")
    @Fetch(value = FetchMode.SELECT)
    private Nutrition nutrition;

    public Ingredient() {
    }


    public Ingredient(User user, String name, Nutrition nutrition) {
        this.user = user;
        this.name = name;
        this.nutrition = nutrition;
    }

    public String getName() {
        return name;
    }

    public Ingredient setName(String name) {
        this.name = name;
        return this;
    }

    public Nutrition getNutrition() {
        return nutrition;
    }

    public Ingredient setNutrition(Nutrition nutrition) {
        this.nutrition = nutrition;
        return this;
    }

    public User getUser() {
        return user;
    }

    public Ingredient setUser(User user) {
        this.user = user;
        return this;
    }
}
