package com.example.nexacro_xapi.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;
import java.util.List;

@Entity
@Table(name = "TB_PROJECT")
@Data
public class Project {
    @Id
    private String PJ_ID;
    private String PJNM;
    private String PJ_OWNER;
    private Date START_DT;
    private Date END_DT;
    private Date PJ_RESOLVE;
    private String PJ_DESC;
    private String PJ_YN;
    private int PJ_PROCESS;
    private int PJ_ACTION;
    private String CREATE_ID;
    private Date CREATE_DT;

    @ManyToOne
    @JoinColumn(name = "TEMP_ID")
    private Project_Temp projectTemp;
    @ManyToOne
    @JoinColumn(name = "GROUP_ID")
    private Group group;

    @OneToMany(mappedBy = "project", fetch = FetchType.LAZY)
    List<Task> taskList;
}
