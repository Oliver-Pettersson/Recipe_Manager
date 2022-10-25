package com.accenture.recipemanager.domain.activitylog.dto;

import com.accenture.recipemanager.core.generic.DTOMapper;
import com.accenture.recipemanager.domain.activitylog.ActivityLog;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface ActivityLogMapper extends DTOMapper<ActivityLog, ActivityLogDTO> {
}
