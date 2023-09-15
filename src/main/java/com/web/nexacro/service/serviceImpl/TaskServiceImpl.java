package com.web.nexacro.service.serviceImpl;


import com.web.nexacro.mapper.CommSql;
import com.web.nexacro.mapper.ProjectMapper;
import com.web.nexacro.mapper.TaskMapper;
import com.web.nexacro.service.ProjectService;
import com.web.nexacro.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class TaskServiceImpl implements TaskService {

    @Autowired
    TaskMapper taskMapper;

    @Autowired
    CommSql commSql;

    @Override
    public List<Map<String, Object>> select(Map map) {
        return commSql.selectList("selectTask",map);
    }

    @Override
    public int insert(Map map) {
        return taskMapper.insert(map);
    }

    @Override
    public int update(Map map) {
        return 0;
    }

    @Override
    public int delete(Map map) {
        return 0;
    }
}
