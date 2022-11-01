package com.accenture.recipemanager.core.security.user;

import com.accenture.recipemanager.core.generic.AbstractEntityService;

public interface UserService extends AbstractEntityService<User> {
    User findByUsername(String username);
    User preSave(User entity);
}

