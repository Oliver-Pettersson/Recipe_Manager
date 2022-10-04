package com.accenture.recipemanager.domain.user;

import com.accenture.recipemanager.core.generic.AbstractEntity;
import com.accenture.recipemanager.domain.ingredient.Ingredient;

import javax.persistence.*;
import java.util.List;
import java.util.UUID;

@Entity
@Table(name = "users")
public class User extends AbstractEntity {
    @Column(unique = true, name = "username", nullable = false)
    private String username;

    @Column(name = "password", nullable = false)
    private String password;

    @ManyToMany
    @JoinTable(
            name = "userRegisteredIngredient",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "ingredient_id"))
    private List<Ingredient> userRegisteredIngredients;

    public User(String username, String password, List<Ingredient> userRegisteredIngredients) {
        this.username = username;
        this.password = password;
        this.userRegisteredIngredients = userRegisteredIngredients;
    }

    public User() {
    }

    @Override
    public User setId(UUID id) {
        this.id = id;
        return this;
    }

    @Override
    public String toString() {
        return "User{" +
                "username='" + username + '\'' +
                '}';
    }

    public String getUsername() {
        return username;
    }

    public User setUsername(String username) {
        this.username = username;
        return this;
    }

    public String getPassword() {
        return password;
    }

    public User setPassword(String password) {
        this.password = password;
        return this;
    }

    public List<Ingredient> getUserRegisteredIngredients() {
        return userRegisteredIngredients;
    }

    public User setUserRegisteredIngredients(List<Ingredient> userRegisteredIngredients) {
        this.userRegisteredIngredients = userRegisteredIngredients;
        return this;
    }
}
