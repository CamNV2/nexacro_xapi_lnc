package com.example.nexacro_xapi.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;

@Entity
@Table(name = "TB_SUBTASK")
@Data
public class SubTask {
    @Id
    private String SUBTASK_ID;
    private String ST_NM;
    private String ST_STT;
    private Date START_DT;
    private Date END_DT;
    private Date ST_RESOLVE_DT;
    private String ST_PRIORITY;
    private String ST_TAG;
    @ManyToOne
    @JoinColumn(name = "USER_ID")
    private User user;

    @ManyToOne
    @JoinColumn(name = "TASK_ID")
    private Task task;
}
