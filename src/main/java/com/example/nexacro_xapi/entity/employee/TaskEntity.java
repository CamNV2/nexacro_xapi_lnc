package com.example.nexacro_xapi.entity.employee;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@Setter
@Getter
public class TaskEntity {
    private String taskId;
    private String subTaskId;
    private String taskName;
    private String taskDesc;
    private String taskOwner;
    private String taskStartDt;
    private String taskEndDt;
    private String taskTime; // thời gian làm task
    private String taskPriority; // độ ưu tiên
    private String taskMakers; // danh sách người lamf task
    private String createId;
    private String createDt;
    private String lastChgId;
    private String lastChgDt;

    public TaskEntity(String taskId, String subTaskId, String taskName, String taskDesc,
                      String taskOwner, String taskStartDt, String taskEndDt, String taskTime, String taskPriority, String taskMakers,
                      String createId, String createDt, String lastChgId, String lastChgDt) {
        this.taskId = taskId;
        this.subTaskId = subTaskId;
        this.taskName = taskName;
        this.taskDesc = taskDesc;
        this.taskOwner = taskOwner;
        this.taskStartDt = taskStartDt;
        this.taskEndDt = taskEndDt;
        this.taskTime = taskTime;
        this.taskPriority = taskPriority;
        this.taskMakers = taskMakers;
        this.createId = createId;
        this.createDt = createDt;
        this.lastChgId = lastChgId;
        this.lastChgDt = lastChgDt;
    }
}
