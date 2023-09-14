package com.web.nexacro.controller;

import com.web.nexacro.Utils.NexacroUtils;
import com.web.nexacro.service.GroupService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

@Controller
@RequestMapping("/group")
public class GroupController {

    @Autowired
    GroupService groupService;

    @PostMapping("/addNewGroup")
    public ModelAndView addNewGroup(HttpServletRequest request, ModelAndView modelAndView) throws IOException {
        NexacroUtils nexacroUtils = new NexacroUtils();
        Map params = nexacroUtils.getParamDataSet(request);
        Map param = (Map) params.get("ds_group");
        groupService.insert(param);
        modelAndView.addObject("data",nexacroUtils);
        modelAndView.setViewName("nexacroView");
        return modelAndView;
    }

    @PostMapping("/selectListGroup")
    public ModelAndView selectListGroup(HttpServletRequest request, ModelAndView modelAndView) throws IOException {
        NexacroUtils nexacroUtils = new NexacroUtils();
        Map params = nexacroUtils.getParamDataSet(request);
        Map param = (Map) params.get("ds_cond");

        nexacroUtils.setDataset("ds_owner",groupService.select(param));
        modelAndView.addObject("data",nexacroUtils);
        modelAndView.setViewName("nexacroView");
        return modelAndView;
    }

    @PostMapping("/updateGroup")
    public ModelAndView updateGroup(HttpServletRequest request, ModelAndView modelAndView) throws IOException {
        NexacroUtils nexacroUtils = new NexacroUtils();
        Map params = nexacroUtils.getParamDataSet(request);
        Map param = (Map) params.get("ds_group");
        groupService.update(param);
        modelAndView.addObject("data",nexacroUtils);
        modelAndView.setViewName("nexacroView");
        return modelAndView;
    }

    @PostMapping("/deleteGroup")
    public ModelAndView deleteGroup(HttpServletRequest request, ModelAndView modelAndView) throws IOException {
        NexacroUtils nexacroUtils = new NexacroUtils();
        Map params = nexacroUtils.getParamDataSet(request);
        Map param = (Map) params.get("ds_group");
        groupService.delete(param);
        modelAndView.addObject("data",nexacroUtils);
        modelAndView.setViewName("nexacroView");
        return modelAndView;
    }
}
