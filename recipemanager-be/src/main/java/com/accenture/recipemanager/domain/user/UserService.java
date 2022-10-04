package com.accenture.recipemanager.domain.user;

import com.accenture.recipemanager.core.generic.AbstractEntityService;

public interface UserService extends AbstractEntityService<User> {
    User findByUsername(String username);
    User preSave(User entity);
}

