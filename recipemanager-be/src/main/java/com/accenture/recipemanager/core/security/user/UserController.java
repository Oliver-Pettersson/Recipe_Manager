package com.accenture.recipemanager.core.security.user;

import com.accenture.recipemanager.core.error.UsernameAlreadyExistsException;
import com.accenture.recipemanager.core.generic.AbstractEntityController;
import com.accenture.recipemanager.core.generic.AbstractEntityService;
import com.accenture.recipemanager.core.generic.DTOMapper;
import com.accenture.recipemanager.core.security.user.dto.UserDTO;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
@RequestMapping("/user")
public class UserController extends AbstractEntityController<User, UserDTO> {
    UserService userService;

    public UserController(AbstractEntityService<User> service, DTOMapper<User, UserDTO> mapper, UserService userService) {
        super(service, mapper);
        this.userService = userService;
    }

    /**
     * Since the user should not be allowed to see other users this method is "disabled"
     *
     * @return always null
     */
    @GetMapping("/not-available")
    @Override
    public ResponseEntity<Collection<UserDTO>> findAll() {
        return null;
    }

    /**
     * This endpoint searches for the logged in users entry
     *
     * @param ignore would be the id but is not used therefore its ignored
     * @return is the user entry
     */
    @GetMapping("/")
    @Override
    public ResponseEntity<UserDTO> findById(String ignore) {
        User user = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        return super.findById(user.getId().toString());
    }

    /**
     * This endpoint updates the user data
     *
     * @param ignore would be the id but is not used therefore its ignored
     * @param dto    is the new user data
     * @return is the updated user
     * @throws UsernameAlreadyExistsException is thrown when a user already uses this name
     */
    @PutMapping("/")
    @Override
    public ResponseEntity<UserDTO> updateById(String ignore, @RequestBody UserDTO dto) throws UsernameAlreadyExistsException {
        User user = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        return super.updateById(user.getId().toString(), dto);
    }

    /**
     * The user is not allowed to delete its account
     *
     * @param ignore would be the id but is not used
     * @return is always null
     */
    @Override
    public ResponseEntity<Void> deleteById(String ignore) {
        return null;
    }
}
