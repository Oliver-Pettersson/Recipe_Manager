package com.accenture.recipemanager.domain.activitylog.dto;

import com.accenture.recipemanager.core.generic.AbstractEntityDTO;
import com.accenture.recipemanager.domain.user.User;

import javax.persistence.Column;
import java.time.LocalDateTime;

public class ActivityLogDTO extends AbstractEntityDTO {
    private User userId;
    private String action;
    private LocalDateTime timeStamp;

    public User getUserId() {
        return userId;
    }

    public ActivityLogDTO setUserId(User userId) {
        this.userId = userId;
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
