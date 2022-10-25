package com.accenture.recipemanager.domain.activitylog;

import com.accenture.recipemanager.core.generic.AbstractEntityRepository;
import com.accenture.recipemanager.core.generic.AbstractEntityServiceImpl;
import org.slf4j.Logger;
import org.springframework.stereotype.Service;

@Service
public class ActivityLogServiceImpl extends AbstractEntityServiceImpl<ActivityLog> implements ActivityLogService {
    public ActivityLogServiceImpl(AbstractEntityRepository<ActivityLog> repository, Logger logger) {
        super(repository, logger);
    }
}
