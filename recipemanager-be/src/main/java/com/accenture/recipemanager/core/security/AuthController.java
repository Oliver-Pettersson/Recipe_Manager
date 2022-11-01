package com.accenture.recipemanager.core.security;

import com.accenture.recipemanager.core.error.UsernameAlreadyExistsException;
import com.accenture.recipemanager.core.security.user.User;
import com.accenture.recipemanager.core.security.user.dto.UserSignUpDTO;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;
import java.util.Map;

import static org.springframework.http.HttpHeaders.AUTHORIZATION;

@RequestMapping("/auth/")
@Controller
public class AuthController {
    private final AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @GetMapping("refresh-token")
    public ResponseEntity<Map<String, String>> refreshToken(HttpServletRequest request) {
        String authHeader = request.getHeader(AUTHORIZATION);
        return ResponseEntity.ok(authService.refreshToken(authHeader));
    }

    @PostMapping("signup")
    public ResponseEntity<User> signUp(@RequestBody UserSignUpDTO userSignUpDTO) throws UsernameAlreadyExistsException {
        return ResponseEntity.ok(authService.signUp(userSignUpDTO));
    }
}
