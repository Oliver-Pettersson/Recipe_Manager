package com.accenture.recipemanager.core.error;

public class UnauthorizedAccessException extends RecipeManagerError{
    public UnauthorizedAccessException(String message) {
        super(message);
    }
}
