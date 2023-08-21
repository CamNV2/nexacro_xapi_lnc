package com.example.nexacro_xapi.api.mapper;

import com.example.nexacro_xapi.entity.employee.TaskEntity;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface TaskMapper {
    int createTask(TaskEntity taskEntity);
}
