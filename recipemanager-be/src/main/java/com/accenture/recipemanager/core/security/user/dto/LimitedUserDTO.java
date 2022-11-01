package com.accenture.recipemanager.core.security.user.dto;

import com.accenture.recipemanager.core.generic.AbstractEntityDTO;

public class LimitedUserDTO extends AbstractEntityDTO {
    private String username;

    public String getUsername() {
        return username;
    }

    public LimitedUserDTO setUsername(String username) {
        this.username = username;
        return this;
    }
}
