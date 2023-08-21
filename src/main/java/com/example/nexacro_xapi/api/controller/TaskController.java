package com.example.nexacro_xapi.api.controller;

import com.example.nexacro_xapi.api.service.TaskService;
import com.example.nexacro_xapi.entity.employee.TaskEntity;
import com.nexacro.java.xapi.tx.PlatformException;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import java.io.IOException;

@Controller
@RequestMapping("task")
public class TaskController {

    @Autowired
    private TaskService taskService;

    @PostMapping("")
    public String createTask(HttpServletRequest request, Model model, @RequestBody TaskEntity taskEntity) throws IOException, PlatformException {
        int cnt = taskService.createTask(taskEntity);
        return "nexacroView";
    }
}
