package com.accenture.recipemanager.core.exceptionhandler;

import com.accenture.recipemanager.core.error.*;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class ValidationError {
    @ExceptionHandler({NotFoundException.class, RecipeManagerError.class, InvalidStringException.class,
            MandatoryFieldIsNullException.class, InvalidNumberException.class, RatingAlreadyExistsException.class})
    public ResponseEntity<String> notFoundException(NotFoundException e) {
        return ResponseEntity.badRequest().body(e.getMessage());
    }
}

