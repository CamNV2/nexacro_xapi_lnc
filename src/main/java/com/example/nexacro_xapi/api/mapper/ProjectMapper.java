package com.example.nexacro_xapi.api.mapper;

import com.example.nexacro_xapi.entity.ProjectEntity;
import com.example.nexacro_xapi.entity.employee.EmployeeEntity;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
@Mapper
public interface ProjectMapper {
    List<ProjectEntity> getAllProject(ProjectEntity projectEntity);
}
