package com.example.nexacro_xapi.entity;


import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;
import java.util.List;

@Entity
@Table(name = "TB_USER")
@Data
public class User {
    @Id
    private String USR_ID;
    private String USR_NM;
    private String PWD;
    private String ADDRESS;
    private String USR_YN;
    private Date CREATE_ID;
    private Date CREATE_DT;
    private String LAST_CHG_ID;
    private Date LAST_CHG_DT;
    private Date LAST_LOGIN;

    @ManyToOne
    @JoinColumn(name = "GROUP_ID")
    private Group group;
    @ManyToOne
    @JoinColumn(name = "ROLE_ID")
    private Role role;

    @OneToMany(mappedBy = "user", fetch = FetchType.LAZY)
    private List<SubTask> taskList;


}