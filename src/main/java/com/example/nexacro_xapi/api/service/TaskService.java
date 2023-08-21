package com.example.nexacro_xapi.api.service;

import com.example.nexacro_xapi.api.mapper.TaskMapper;
import com.example.nexacro_xapi.entity.employee.TaskEntity;
import com.nexacro.java.xapi.tx.PlatformException;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.stereotype.Service;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.io.IOException;

@Service
public class TaskService {
    @Autowired
    private TaskMapper taskMapper;

    public int createTask(TaskEntity taskEntity) {
        return taskMapper.createTask(taskEntity);
    }
}
