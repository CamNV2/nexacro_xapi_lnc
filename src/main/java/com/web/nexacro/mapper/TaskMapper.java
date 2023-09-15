package com.web.nexacro.mapper;

import com.web.nexacro.Utils.Group;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Map;

@Component
public class TaskMapper extends CommonSql implements Group {

    @Override
    public List<Map<String, Object>> select(Map map) {
        return selectList("getTask",map);
    }

    @Override
    public int insert(Map map) {
        return insert("createTask",map);
    }

    @Override
    public int update(Map map) {
        return update("updateTask",map);
    }

    @Override
    public int delete(Map map) {
        return update("deleteTask",map);
    }
}
