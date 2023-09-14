package com.web.nexacro.mapper;

import com.web.nexacro.Utils.Group;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Map;
@Component
public class GroupMapper extends CommonSql implements Group {

    @Override
    public List<Map<String, Object>> select(Map map) {
        return selectList("getGroup",map);
    }

    @Override
    public int insert(Map map) {
        return insert("addNewGroup",map);
    }

    @Override
    public int update(Map map) {
        return update("updateGroup",map);
    }

    @Override
    public int delete(Map map) {
        return update("deleteGroup",map);
    }
}
