package com.accenture.recipemanager.domain.user.dto;

import com.accenture.recipemanager.core.generic.DTOMapper;
import com.accenture.recipemanager.domain.user.User;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface UserMapper extends DTOMapper<User, UserDTO> {
    User fromSignUpDTO(UserSignUpDTO dto);
}
