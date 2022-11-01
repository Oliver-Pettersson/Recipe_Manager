package com.accenture.recipemanager.core.security.user;

import com.accenture.recipemanager.core.error.NotFoundException;
import com.accenture.recipemanager.core.error.UsernameAlreadyExistsException;
import com.accenture.recipemanager.core.generic.AbstractEntityRepository;
import com.accenture.recipemanager.core.generic.AbstractEntityServiceImpl;
import org.slf4j.Logger;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;

@Service
public class UserServiceImpl extends AbstractEntityServiceImpl<User> implements UserService, UserDetailsService {

    private final UserRepository newRepository;
    private final PasswordEncoder passwordEncoder;

    @Autowired
    public UserServiceImpl(AbstractEntityRepository<User> repository, Logger logger, UserRepository newRepository, PasswordEncoder passwordEncoder) {
        super(repository, logger);
        this.newRepository = newRepository;
        this.passwordEncoder = passwordEncoder;
    }

    /**
     * This method checks if the the body mass with the same value exists to prevent duplicates
     *
     * @param entity is the object, that will be saved
     * @return is the user after searching for existing values
     */
    @Override
    @Transactional
    public User preSave(User entity) {
        return entity;
    }

    /**
     * This method encodes the password of the user before calling the super create method
     *
     * @param entity the user to be created
     * @return the created user
     */
    @Override
    @Transactional
    public User create(User entity) {
        entity.setPassword(passwordEncoder.encode(entity.getPassword()));
        return super.create(entity);
    }

    /**
     * This method updates the logged in user
     *
     * @param id     will be ignored
     * @param entity is the user with the updated data
     * @return the new updated user
     * @throws NotFoundException              will be thrown if the user could not be found
     * @throws UsernameAlreadyExistsException will be thrown if the username is already taken
     */
    @Override
    @Transactional
    public User updateById(String id, User entity) throws NotFoundException, UsernameAlreadyExistsException {
        User user = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        if (user != null) {
            entity.setId(user.getId());
            User foundUser = findByUsername(entity.getUsername());
            if (foundUser != null && !foundUser.getId().equals(user.getId()))
                throw new UsernameAlreadyExistsException();
            BeanUtils.copyProperties(entity, user, getNullPropertyNames(entity));
            entity = save(user);
            return entity;
        } else {
            throw new NotFoundException("User could not be found");
        }
    }

    /**
     * This method tries to find the user by the username
     *
     * @param username the name to be searched for
     * @return ether null or the user security object
     * @throws UsernameNotFoundException will be thrown if the user could not be found
     */
    @Override
    @Transactional
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = newRepository.findByUsername(username);
        if (user == null)
            throw new UsernameNotFoundException("User doesn't exist");
        return new org.springframework.security.core.userdetails.User(user.getUsername(), user.getPassword(), new ArrayList<>());
    }

    /**
     * This method searches for the user by its username
     *
     * @param username the name to be searched for
     * @return the user that was found or null
     */
    @Transactional
    public User findByUsername(String username) {
        return ((UserRepository) repository).findByUsername(username);
    }
}
