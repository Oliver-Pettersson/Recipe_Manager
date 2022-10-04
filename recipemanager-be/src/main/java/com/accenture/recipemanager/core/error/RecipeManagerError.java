package com.accenture.recipemanager.core.error;

public class RecipeManagerError extends RuntimeException{

    public RecipeManagerError(String message) {
        super(message);
    }

    @Override
    public final String getLocalizedMessage() {
        return super.getLocalizedMessage();
    }

    @Override
    public final synchronized Throwable getCause() {
        return super.getCause();
    }

    @Override
    public final StackTraceElement[] getStackTrace() {
        return super.getStackTrace();
    }

}
