package com.example.nexacro_xapi.entity;

import java.util.Date;

import com.example.nexacro_xapi.enumeration.StatusEnum;
import com.example.nexacro_xapi.enumeration.TemplateEnum;

import lombok.Data;

@Data
public class ProjectEntity {
    private int id;
    private int groupId;
    private int progressTask;
    private int progress;
    
    private boolean isTightPrj;
    private boolean isAccessPrivate;
    private boolean isDone;
    private boolean deleted;

    private TemplateEnum template;
    private StatusEnum status;
    
    private String title;
    private String owner;
    private String strtDate;
    private String endDate;
    private String description;
    private String tagName;
    private String createdBy;
    private String updatedBy;
    
    private Date createdAt;
    private Date updatedAt;
}
