package com.accenture.recipemanager.domain.recipe;

import com.accenture.recipemanager.core.generic.AbstractEntity;
import com.accenture.recipemanager.domain.ingredient.Ingredient;

import com.accenture.recipemanager.domain.rating.Rating;
import com.accenture.recipemanager.domain.user.User;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;
import javax.persistence.*;
import java.util.List;
@Entity
@Table(name = "recipe")
public class Recipe extends AbstractEntity {
    @Column(name = "description", nullable = false)
    private String description;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "image", columnDefinition = "text")
    private String image;

    @ManyToOne(cascade = CascadeType.DETACH,fetch=FetchType.EAGER)
    @JoinColumn(name = "user_id", nullable = false)
    @Fetch(value = FetchMode.SELECT)
    private User user;

    @ManyToMany(fetch=FetchType.EAGER)
    @Fetch(value = FetchMode.SELECT)
    @JoinTable(
            name = "ingredients_recipe",
            joinColumns = @JoinColumn(name = "recipe_id"),
            inverseJoinColumns = @JoinColumn(name = "ingredient_id"))
    private List<Ingredient> ingredients;

    @OneToMany(cascade = CascadeType.DETACH,fetch=FetchType.EAGER)
    @JoinColumn(name = "recipe_id")
    @Fetch(value = FetchMode.SELECT)
    private List<Rating> ratings;

    public Recipe(String description, String image, User user, List<Ingredient> ingredients, List<Rating> ratings) {
        this.description = description;
        this.image = image;
        this.user = user;
        this.ingredients = ingredients;
        this.ratings = ratings;
    }

    public Recipe() {
    }

    public String getDescription() {
        return description;
    }

    public Recipe setDescription(String description) {
        this.description = description;
        return this;
    }

    public List<Ingredient> getIngredients() {
        return ingredients;
    }

    public Recipe setIngredients(List<Ingredient> ingredients) {
        this.ingredients = ingredients;
        return this;
    }

    public String getImage() {
        return image;
    }

    public Recipe setImage(String image) {
        this.image = image;
        return this;
    }

    public User getUser() {
        return user;
    }

    public Recipe setUser(User user) {
        this.user = user;
        return this;
    }

    public List<Rating> getRatings() {
        return ratings;
    }

    public Recipe setRatings(List<Rating> ratings) {
        this.ratings = ratings;
        return this;
    }

    public String getName() {
        return name;
    }

    public Recipe setName(String name) {
        this.name = name;
        return this;
    }
}
