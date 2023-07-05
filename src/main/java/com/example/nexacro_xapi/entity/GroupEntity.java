package com.example.nexacro_xapi.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Entity
@Table(name = "TB_GROUP")
@Data
public class GroupEntity {
    @Id
    private String GROUP_ID;
    private String GROUP_NM;

    @OneToMany(mappedBy = "groupEntity", fetch = FetchType.LAZY)
    List<UserEntity> userEntityList;

    @OneToMany(mappedBy = "group", fetch = FetchType.LAZY)
    List<ProjectEntity> projectEntityList;
}
