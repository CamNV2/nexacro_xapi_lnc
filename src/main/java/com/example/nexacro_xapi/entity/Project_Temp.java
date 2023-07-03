package com.example.nexacro_xapi.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Entity
@Table(name = "TB_PROJECT_TEMP")
@Data
public class Project_Temp {
    @Id
    private String TEMP_ID;
    private String TEMP_NM;

    @OneToMany(mappedBy = "projectTemp", fetch = FetchType.LAZY)
    List<Project> projectList;
}
