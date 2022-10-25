package com.accenture.recipemanager.domain.activitylog;

import com.accenture.recipemanager.core.generic.AbstractEntityController;
import com.accenture.recipemanager.core.generic.AbstractEntityService;
import com.accenture.recipemanager.core.generic.DTOMapper;
import com.accenture.recipemanager.domain.activitylog.dto.ActivityLogDTO;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/activityLog")
public class ActivityLogController extends AbstractEntityController<ActivityLog, ActivityLogDTO> {
    public ActivityLogController(AbstractEntityService<ActivityLog> service, DTOMapper<ActivityLog, ActivityLogDTO> mapper) {
        super(service, mapper);
    }
}
