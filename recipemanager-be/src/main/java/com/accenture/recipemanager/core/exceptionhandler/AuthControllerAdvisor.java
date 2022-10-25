package com.accenture.recipemanager.core.exceptionhandler;

import com.accenture.recipemanager.core.error.UsernameAlreadyExistsException;
import com.accenture.recipemanager.core.security.AuthController;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class AuthControllerAdvisor {
    @ExceptionHandler({UsernameAlreadyExistsException.class})
    public ResponseEntity<String> usernameAlreadyExistsException(UsernameAlreadyExistsException e) {
        return ResponseEntity.badRequest().body(e.getMessage());
    }
}
