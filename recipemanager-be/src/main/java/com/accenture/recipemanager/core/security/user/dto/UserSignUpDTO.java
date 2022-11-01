package com.accenture.recipemanager.core.security.user.dto;

public class UserSignUpDTO {
    private String username;
    private String password;

    public UserSignUpDTO(String username, String password) {
        this.username = username;
        this.password = password;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }
}
