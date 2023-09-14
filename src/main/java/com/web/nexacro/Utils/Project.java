package com.web.nexacro.Utils;

import java.util.List;
import java.util.Map;

public interface Project {
    List<Map<String,Object>> select(Map map);
    int insert (Map map);

    int update (Map map);

    int delete (Map map);
}
