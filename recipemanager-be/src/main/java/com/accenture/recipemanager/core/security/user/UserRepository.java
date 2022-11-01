package com.accenture.recipemanager.core.security.user;

import com.accenture.recipemanager.core.generic.AbstractEntityRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends AbstractEntityRepository<User> {
    User findByUsername(String username);
}
