package com.example.nexacro_xapi.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.sql.Date;
import java.util.List;

@Entity
@Table(name = "TB_TASK")
@Data
public class Task {
    @Id
    private String TASK_ID;
    private String NM;
    private String TASK_OWNER;
    private String TASK_STT;
    private Date TASK_START_DT;
    private Date TASK_START_END;
    private String TASK_PRIORITY;
    private String TASK_TAG;
    private String TASK_BILL;
    @ManyToOne
    @JoinColumn(name = "PJ_ID")
    private Project project;

    @OneToMany(mappedBy = "task", fetch = FetchType.LAZY)
    private List<SubTask> taskList;
}
