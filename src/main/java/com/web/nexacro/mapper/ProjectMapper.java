package com.web.nexacro.mapper;

import com.web.nexacro.Utils.Project;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Map;

@Component
public class ProjectMapper extends CommonSql implements Project {
    @Override
    public List<Map<String, Object>> select(Map map) {
          return null;
    }

    @Override
    public int insert(Map map) {
        return insert("insertProject",map);
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
