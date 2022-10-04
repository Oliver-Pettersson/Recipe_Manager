package com.accenture.recipemanager.domain.activitylog;

import com.accenture.recipemanager.core.generic.AbstractEntity;
import com.accenture.recipemanager.domain.user.User;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "activity_log")
public class ActivityLog extends AbstractEntity {
    @ManyToOne
    @JoinColumn(name = "user_id", nullable = true)
    private User userId;

    @Column(name = "action", nullable = false, unique = false)
    private String action;

    @Column(name = "timeStamp", nullable = false)
    private LocalDateTime timeStamp;

    public ActivityLog(User userId, String action, LocalDateTime timeStamp) {
        this.userId = userId;
        this.action = action;
        this.timeStamp = timeStamp;
    }

    public ActivityLog() {
    }

    public User getUserId() {
        return userId;
    }

    public ActivityLog setUserId(User userId) {
        this.userId = userId;
        return this;
    }

    public String getAction() {
        return action;
    }

    public ActivityLog setAction(String action) {
        this.action = action;
        return this;
    }

    public LocalDateTime getTimeStamp() {
        return timeStamp;
    }

    public ActivityLog setTimeStamp(LocalDateTime timeStamp) {
        this.timeStamp = timeStamp;
        return this;
    }
}
