package com.example.nexacro_xapi.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.sql.Date;
import java.util.List;

@Entity
@Table(name = "TB_ROLE")
@Data
public class Role {
    @Id
    private String ROLE_ID;
    private String ROLE_NM;
    private Date CREATE_DT;
    private String LAST_CHG_ID;
    private Date LAST_CHG_DT;

    @OneToMany(mappedBy = "role", fetch = FetchType.LAZY)
    List<User> userList;

}
