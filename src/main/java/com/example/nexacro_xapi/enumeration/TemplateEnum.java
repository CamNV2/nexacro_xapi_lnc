package com.example.nexacro_xapi.enumeration;

public enum TemplateEnum {

	BO_CUC_TIEU_CHUAN("Bố cục tiêu chuẩn"),
	BO_CUC_TRAI("Bố cục trái"),
	BO_CUC_PHAI("Bố cục phải");
    
	TemplateEnum(String text) {
        this.text = text;
    }
	
	public String getText() {
        return text;
    }
	
    private String text;
}
