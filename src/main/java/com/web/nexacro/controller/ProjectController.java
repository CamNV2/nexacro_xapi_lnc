package com.web.nexacro.controller;

import com.web.nexacro.Utils.NexacroUtils;
import com.web.nexacro.mapper.CommSql;
import com.web.nexacro.service.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import java.util.Map;

@Controller
@RequestMapping("/project")
public class ProjectController {
    @Autowired
    ProjectService projectService;

    @Autowired
    CommSql commSql;

    @PostMapping("/createProject")
    public ModelAndView createProject(HttpServletRequest request, ModelAndView modelAndView) throws Exception {
        NexacroUtils nexacroUtils = new NexacroUtils();
        Map params = nexacroUtils.getParamDataSet(request);
        Map param = (Map) params.get("ds_In");
        int cnt = projectService.insert(param);
        if(cnt == 0) {
            throw new Exception("Can't create project!");
        }
        modelAndView.addObject("data",nexacroUtils);
        modelAndView.setViewName("nexacroView");
        return modelAndView;
    }


    @PostMapping("/getProjectList")
    public ModelAndView getProjectList(HttpServletRequest request, ModelAndView modelAndView) throws Exception {
        NexacroUtils nexacroUtils = new NexacroUtils();
        Map params = nexacroUtils.getParamDataSet(request);
        Map param = (Map) params.get("ds_project");

        nexacroUtils.setDataset("ds_projectLst", commSql.selectList("selectUserProject",param));
        modelAndView.addObject("data",nexacroUtils);
        modelAndView.setViewName("nexacroView");
        return modelAndView;
    }
}
