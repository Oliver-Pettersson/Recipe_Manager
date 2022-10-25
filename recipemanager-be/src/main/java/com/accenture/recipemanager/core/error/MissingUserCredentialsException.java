package com.accenture.recipemanager.core.error;

import org.springframework.security.core.AuthenticationException;

/**
 * Custom exception which is used for exceptions related to faulty login attempts, based on
 * not providing all necessary attributes.
 */
public class MissingUserCredentialsException extends AuthenticationException {
  private static final String DEFAULT_ERROR_MESSAGE = "Username or password is missing.";

  public MissingUserCredentialsException() {
    super(DEFAULT_ERROR_MESSAGE);
  }

  public MissingUserCredentialsException(String msg) {
    super(msg);
  }
}
