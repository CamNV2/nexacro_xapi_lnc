package com.example.nexacro_xapi.api.service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.nexacro_xapi.api.mapper.GroupMapper;
import com.example.nexacro_xapi.common.NexacroConvert;
import com.example.nexacro_xapi.entity.GroupEntity;

@Service
public class GroupService {

    @Autowired
    private GroupMapper groupMapper;

    public List<Map<String, String>> getList(Map<String, String> data) {
        List<Map<String, String>> rows = new ArrayList<>();
        GroupEntity groupEntity = new GroupEntity();

        if (data != null) {
        	groupEntity.setTitle(data.get("title"));
        }

        List<GroupEntity> groupEntities = groupMapper.getList(groupEntity);
        for (GroupEntity groups : groupEntities) {
            Map<String, String> row = NexacroConvert.convertObjectToMap(groups);
            rows.add(row);
        }

        return rows;
    }
    
    public Map<String, String> create(Map<String, String> data) {
        GroupEntity groupEntity = new GroupEntity();

        if (data != null) {
        	groupEntity.setTitle(data.get("title"));
        	groupEntity.setDeleted(Boolean.parseBoolean(data.get("deleted")));
        	groupEntity.setCreated_at(new Date());
        	groupEntity.setUpdated_at(new Date());
        	groupEntity.setCreated_by("Admin");
        	groupEntity.setUpdated_by("Admin");
        }

        GroupEntity result = groupMapper.create(groupEntity);
        Map<String, String> row = NexacroConvert.convertObjectToMap(result);

        return row;
    }
}
