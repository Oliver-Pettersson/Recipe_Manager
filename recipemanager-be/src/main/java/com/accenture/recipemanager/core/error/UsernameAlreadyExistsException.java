package com.accenture.recipemanager.core.error;

public class UsernameAlreadyExistsException extends Exception {
    private static final String DEFAULT_MESSAGE = "Username already exists";

    public UsernameAlreadyExistsException() {
        super(DEFAULT_MESSAGE);
    }
}
