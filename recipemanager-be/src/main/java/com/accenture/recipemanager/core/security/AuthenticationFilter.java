package com.accenture.recipemanager.core.security;

import com.accenture.recipemanager.core.error.MissingUserCredentialsException;
import com.accenture.recipemanager.core.error.UserNotFoundException;
import com.accenture.recipemanager.core.security.user.UserService;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.SneakyThrows;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import javax.servlet.FilterChain;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Map;

import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;

/**
 * The filter which is applied when the user attempts to log in with his credentials.
 */
public class AuthenticationFilter extends UsernamePasswordAuthenticationFilter {
    private final AuthenticationManager authenticationManager;
    private final JWTManager jwtManager;
    private final PasswordEncoder passwordEncoder;
    private final UserService userService;

    /**
     * Initializes the filter
     */
    public AuthenticationFilter(
            AuthenticationManager authenticationManager, JWTManager jwtManager, PasswordEncoder passwordEncoder, UserService userService) {
        this.authenticationManager = authenticationManager;
        this.jwtManager = jwtManager;
        this.passwordEncoder = passwordEncoder;
        this.userService = userService;
    }

    /**
     * Gets the request and extracts the credentials used for authentication.
     *
     * @param request  The HTTP request sent by the frontend.
     * @param response The HTTP response sent by the application.
     * @return The UsernamePasswordAuthenticationToken containing the passed credentials.
     * @throws AuthenticationException The exception thrown by the AuthenticationProvider
     */
    @SneakyThrows
    @Override
    public Authentication attemptAuthentication(HttpServletRequest request,
                                                HttpServletResponse response)
            throws AuthenticationException {
        String username = request.getParameter("username");
        String password = request.getParameter("password");
        if (username == null || password == null) {
            throw new MissingUserCredentialsException();
        }
        UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(username, password);
        try {
            return authenticationManager.authenticate(authenticationToken);
        } catch (BadCredentialsException e) {
            throw new UserNotFoundException();
        }
    }


    /**
     * Is called if the attemptAuthentication method throws an exception.
     *
     * @param request  The HTTP request.
     * @param response The response sent to the user.
     * @param failed   the Exception which was thrown.
     * @throws IOException might be called by the ObjectMapper.
     */
    @Override
    protected void unsuccessfulAuthentication(HttpServletRequest request,
                                              HttpServletResponse response,
                                              AuthenticationException failed)
            throws IOException {
        response.setStatus(400);
        response.setContentType(APPLICATION_JSON_VALUE);
        new ObjectMapper().writeValue(response.getOutputStream(), failed.getMessage());
    }

    /**
     * Creates the access_token and refresh_token, which are then sent back to the frontend.
     *
     * @param response   The HTTP response initially sent by the application.
     * @param chain      The filter chain, which is automatically passed by spring.
     * @param authResult the resulting token, which was created by the AuthenticationProvider
     * @throws IOException Exception thrown by ObjectMapper.writeValue
     */
    @Override
    protected void successfulAuthentication(HttpServletRequest request, HttpServletResponse response,
                                            FilterChain chain, Authentication authResult)
            throws IOException {
        User user = (User) authResult.getPrincipal();
        com.accenture.recipemanager.core.security.user.User userModel = userService.findByUsername(user.getUsername());
        String accessToken = jwtManager.createAccessToken(userModel.getId().toString());
        String refreshToken = jwtManager.createRefreshToken(userModel.getId().toString());
        response.setContentType(APPLICATION_JSON_VALUE);
        response.setStatus(200);
        new ObjectMapper().writeValue(response.getOutputStream(), Map.of("access_token", accessToken, "refresh_token", refreshToken));
    }
}