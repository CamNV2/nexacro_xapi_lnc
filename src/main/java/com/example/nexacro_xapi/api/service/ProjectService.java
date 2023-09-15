package com.example.nexacro_xapi.api.service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.nexacro_xapi.api.mapper.ProjectMapper;
import com.example.nexacro_xapi.common.NexacroConvert;
import com.example.nexacro_xapi.entity.ProjectEntity;

@Service
public class ProjectService {

    @Autowired
    private ProjectMapper projectMapper;

    public List<Map<String, String>> getList(Map<String, String> data) {
        List<Map<String, String>> rows = new ArrayList<>();
        ProjectEntity projectEntity = new ProjectEntity();

        if (data != null) {
        	projectEntity.setTitle(data.get("title"));
        }

        List<ProjectEntity> projectEntities = projectMapper.getList(projectEntity);
        for (ProjectEntity project : projectEntities) {
            Map<String, String> row = NexacroConvert.convertObjectToMap(project);
            rows.add(row);
        }

        return rows;
    }
    
    public Map<String, String> create(Map<String, String> data) {
    	ProjectEntity projectEntity = new ProjectEntity();
        if (data != null) {
        	projectEntity.setTitle(data.get("title"));
        	projectEntity.setOwner(data.get("owner"));
        	projectEntity.setStrtDate(data.get("strtDate"));
        	projectEntity.setProgress(Integer.parseInt(data.get("progress")));
        	projectEntity.setProgressTask(Integer.parseInt(data.get("progressTask")));
        	projectEntity.setEndDate(data.get("endDate"));
        	projectEntity.setDescription(data.get("description"));
        	projectEntity.setTagName(data.get("tagName"));
        	projectEntity.setTightPrj(Boolean.parseBoolean(data.get("isTightPrj")));
        	projectEntity.setAccessPrivate(Boolean.parseBoolean(data.get("isAccessPrivate")));
        	projectEntity.setGroupId(Integer.parseInt(data.get("groupId")));
        	projectEntity.setDeleted(Boolean.parseBoolean(data.get("deleted")));
        	projectEntity.setCreatedAt(new Date());
        	projectEntity.setUpdatedAt(new Date());
        	projectEntity.setCreatedBy("Admin");
        	projectEntity.setUpdatedBy("Admin");
        }

        ProjectEntity result = projectMapper.create(projectEntity);
        Map<String, String> row = NexacroConvert.convertObjectToMap(result);

        return row;
    }
}
