package com.accenture.recipemanager.core.error;

import org.springframework.security.core.AuthenticationException;

public class UserNotFoundException extends AuthenticationException {
    private static final String DEFAULT_MESSAGE = "User couldn't be found, please check the credentials";

    public UserNotFoundException() {
        super(DEFAULT_MESSAGE);
    }
}
