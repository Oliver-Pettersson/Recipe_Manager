package com.accenture.recipemanager.core.security;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.interfaces.DecodedJWT;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.User;
import org.springframework.stereotype.Component;

import java.util.Date;

@Component
public class JWTManager {
    @Value("${jwt.secret}")
    private String secret;
    @Value("${jwt.expirationInMillis}")
    private long accessTokenExp;
    @Value("${jwt.refresh.expirationInMillis}")
    private long refreshTokenExp;
    private final JWTVerifier verifier;

    public JWTManager(@Value("${jwt.secret}")
                       String secret) {
        Algorithm algorithm = Algorithm.HMAC256(secret.getBytes());
        this.verifier = JWT.require(algorithm).build();
    }

    public String createAccessToken(String username) {
        return JWT.create().withSubject(username).withExpiresAt(new Date(System.currentTimeMillis() + accessTokenExp))
                .sign(Algorithm.HMAC256(secret.getBytes()));
    }

    public String createRefreshToken(String username) {
        return JWT.create().withSubject(username).withExpiresAt(new Date(System.currentTimeMillis() + refreshTokenExp))
                .sign(Algorithm.HMAC256(secret.getBytes()));
    }

    public DecodedJWT verifyToken(String token) {
        return verifier.verify(token);
    }
}
