package com.accenture.recipemanager.domain.activitylog.dto;

import com.accenture.recipemanager.core.generic.AbstractEntityDTO;
import com.accenture.recipemanager.domain.user.User;

import com.accenture.recipemanager.domain.user.dto.LimitedUserDTO;

import java.time.LocalDateTime;

public class ActivityLogDTO extends AbstractEntityDTO {
    private LimitedUserDTO user;
    private String action;
    private LocalDateTime timeStamp;

    public LimitedUserDTO getUser() {
        return user;
    }

    public ActivityLogDTO setUser(User user) {
        this.user =  (LimitedUserDTO) new LimitedUserDTO().setUsername(user.getUsername()).setId(user.getId());
        return this;
    }

    public String getAction() {
        return action;
    }

    public ActivityLogDTO setAction(String action) {
        this.action = action;
        return this;
    }

    public LocalDateTime getTimeStamp() {
        return timeStamp;
    }

    public ActivityLogDTO setTimeStamp(LocalDateTime timeStamp) {
        this.timeStamp = timeStamp;
        return this;
    }
}
