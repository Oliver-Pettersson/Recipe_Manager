package com.accenture.recipemanager.domain.ingredient;

import com.accenture.recipemanager.core.generic.AbstractEntity;
import com.accenture.recipemanager.domain.nutrition.Nutrition;

import com.accenture.recipemanager.domain.user.User;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

import javax.persistence.*;

@Entity
@Table(name = "ingredient")
public class Ingredient extends AbstractEntity {


    @ManyToOne(fetch=FetchType.EAGER)
    @JoinColumn(name = "user_id")
    private User user;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "weight_in_gram", nullable = false)
    private int weightInGram;

    @ManyToOne(cascade = CascadeType.DETACH,fetch=FetchType.EAGER)
    @JoinColumn(name = "nutrition_id", nullable = false)
    @Fetch(value = FetchMode.SELECT)
    private Nutrition nutrition;

    public Ingredient() {
    }


    public Ingredient(User user, String name, int weightInGram, Nutrition nutrition) {
        this.user = user;
        this.name = name;
        this.weightInGram = weightInGram;
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

    public int getWeightInGram() {
        return weightInGram;
    }

    public Ingredient setWeightInGram(int weightInGram) {
        this.weightInGram = weightInGram;
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
