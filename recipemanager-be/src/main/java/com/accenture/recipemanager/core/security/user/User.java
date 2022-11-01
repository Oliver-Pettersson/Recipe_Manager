package com.accenture.recipemanager.core.security.user;

import com.accenture.recipemanager.core.generic.AbstractEntity;

import javax.persistence.*;
import java.util.UUID;

@Entity
@Table(name = "users")
public class User extends AbstractEntity {
    @Column(unique = true, name = "username", nullable = false)
    private String username;

    @Column(name = "password", nullable = false)
    private String password;

    public User(String username, String password) {
        this.username = username;
        this.password = password;
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
}
