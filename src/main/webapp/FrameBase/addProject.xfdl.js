(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("addProject");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,850);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_input", this);
            obj._setContents("<ColumnInfo><Column id=\"id\" type=\"STRING\" size=\"256\" sumtext=\"id\" datapath=\"STRING\"/><Column id=\"title\" type=\"STRING\" size=\"256\" sumtext=\"title\" datapath=\"STRING\"/><Column id=\"progress\" type=\"STRING\" size=\"256\" sumtext=\"progress\" datapath=\"INT\"/><Column id=\"owner\" type=\"STRING\" size=\"256\" sumtext=\"owner\" datapath=\"STRING\"/><Column id=\"status\" type=\"STRING\" size=\"256\" sumtext=\"status\" datapath=\"STRING\"/><Column id=\"strtDate\" type=\"STRING\" size=\"256\" sumtext=\"strtDate\" datapath=\"STRING\"/><Column id=\"endDate\" type=\"STRING\" size=\"256\" sumtext=\"endDate\" datapath=\"STRING\"/><Column id=\"tagName\" type=\"STRING\" size=\"256\" sumtext=\"tag_name\" datapath=\"STRING\"/><Column id=\"progressTask\" type=\"STRING\" size=\"256\" sumtext=\"progress_task\" datapath=\"INT\"/><Column id=\"isDone\" type=\"STRING\" size=\"256\" sumtext=\"_done\" datapath=\"INT\"/><Column id=\"template\" type=\"STRING\" size=\"256\" sumtext=\"template\" datapath=\"STRING\"/><Column id=\"description\" type=\"STRING\" size=\"256\" sumtext=\"description\" datapath=\"STRING\"/><Column id=\"isAccessPrivate\" type=\"STRING\" size=\"256\" sumtext=\"_access_private\" datapath=\"STRING\"/><Column id=\"isTightPrj\" type=\"STRING\" size=\"256\" sumtext=\"_tight_prj\" datapath=\"STRING\"/><Column id=\"groupId\" type=\"STRING\" size=\"256\" sumtext=\"group_id\" datapath=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_add","0","0","100.00%","100.00%",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title","152","56","88","31",null,null,null,null,null,null,this.div_add.form);
            obj.set_taborder("1");
            obj.set_text("Tiêu đề dự án");
            obj.set_usedecorate("true");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_cssclass("label");
            this.div_add.addChild(obj.name, obj);

            obj = new Edit("ipt_title","152","87","78.13%","35",null,null,null,null,null,null,this.div_add.form);
            obj.set_taborder("0");
            obj.set_displaynulltext("Nhập");
            this.div_add.addChild(obj.name, obj);

            obj = new Static("sta_group_nm","151","476","150","27",null,null,null,null,null,null,this.div_add.form);
            obj.set_taborder("2");
            obj.set_text("Tên nhóm");
            obj.set_cssclass("label");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.div_add.addChild(obj.name, obj);

            obj = new Static("sta_description","149","347","150","27",null,null,null,null,null,null,this.div_add.form);
            obj.set_taborder("3");
            obj.set_text("Mô tả");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_cssclass("label");
            this.div_add.addChild(obj.name, obj);

            obj = new Combo("cbx_name_group","151","505","37.19%","35",null,null,null,null,null,null,this.div_add.form);
            obj.set_taborder("4");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_displaynulltext("Select");
            var div_add_form_cbx_name_group_innerdataset = new nexacro.NormalDataset("div_add_form_cbx_name_group_innerdataset", obj);
            div_add_form_cbx_name_group_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">Nhóm A</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">Nhóm B</Col></Row></Rows>");
            obj.set_innerdataset(div_add_form_cbx_name_group_innerdataset);
            obj.set_text("Chọn--");
            obj.set_value("");
            obj.set_index("-1");
            this.div_add.addChild(obj.name, obj);

            obj = new Button("Button00","38.52%","470","141","35",null,null,null,null,null,null,this.div_add.form);
            obj.set_taborder("5");
            obj.set_text("Thêm nhóm mới");
            obj.set_background("transparent");
            obj.set_border("0px none");
            obj.set_cursor("pointer");
            obj.set_color("#fda167");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.div_add.addChild(obj.name, obj);

            obj = new Static("sta_tagnm","150","547","150","27",null,null,null,null,null,null,this.div_add.form);
            obj.set_taborder("6");
            obj.set_text("Tag");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_cssclass("label");
            this.div_add.addChild(obj.name, obj);

            obj = new Edit("ipt_tag_name","150","580","78.13%","35",null,null,null,null,null,null,this.div_add.form);
            obj.set_taborder("7");
            obj.set_displaynulltext("Nhập tên tag");
            this.div_add.addChild(obj.name, obj);

            obj = new TextArea("txt_description","149","377","78.13%","83",null,null,null,null,null,null,this.div_add.form);
            obj.set_taborder("8");
            obj.set_displaynulltext("Nhập mô tả");
            this.div_add.addChild(obj.name, obj);

            obj = new Static("sta_private","176","640","124","20",null,null,null,null,null,null,this.div_add.form);
            obj.set_taborder("2");
            obj.set_text("Truy cập dự án");
            obj.set_font("normal 12pt/normal \"Arial\"");
            this.div_add.addChild(obj.name, obj);

            obj = new Button("CollapseBtn","152","641","20","20",null,null,null,null,null,null,this.div_add.form);
            obj.set_taborder("20");
            obj.set_borderRadius("50%");
            obj.set_background("url(\'theme::blue/images/btn_expand.png\') no-repeat center");
            obj.set_cssclass("isCollap");
            this.div_add.addChild(obj.name, obj);

            obj = new Radio("rdo_code","170","655","110","79",null,null,null,null,null,null,this.div_add.form);
            obj.set_taborder("0");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_font("normal 700 10pt/normal \"Arial\"");
            obj.set_visible("false");
            var div_add_form_rdo_code_innerdataset = new nexacro.NormalDataset("div_add_form_rdo_code_innerdataset", obj);
            div_add_form_rdo_code_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">Riêng tư</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">Công khai</Col></Row></Rows>");
            obj.set_innerdataset(div_add_form_rdo_code_innerdataset);
            this.div_add.addChild(obj.name, obj);

            obj = new Static("subPrivate","190","683","180","17",null,null,null,null,null,null,this.div_add.form);
            obj.set_taborder("1");
            obj.set_text("Chỉ có người dùng dự án mới có thể xem và truy cập dự án này.");
            obj.set_font("normal 8pt/normal \"Arial\"");
            obj.set_visible("false");
            this.div_add.addChild(obj.name, obj);

            obj = new Static("subPublic","190","720","373","43",null,null,null,null,null,null,this.div_add.form);
            obj.set_taborder("3");
            obj.set_text("Người dùng cổng chỉ có thể xem, theo dõi và nhận xét trong khi người dùng dự án sẽ có toàn quyền truy cập.");
            obj.set_font("normal 8pt/normal \"Arial\"");
            obj.set_wordWrap("english");
            obj.set_visible("false");
            this.div_add.addChild(obj.name, obj);

            obj = new Static("Static01_01","153","10","210","40",null,null,null,null,null,null,this.div_add.form);
            obj.set_taborder("10");
            obj.set_text("Thêm dự án mới");
            obj.set_font("normal 600 14pt/normal \"Arial\"");
            this.div_add.addChild(obj.name, obj);

            obj = new Static("Static00","258","61","18","18",null,null,null,null,null,null,this.div_add.form);
            obj.set_taborder("11");
            obj.set_text("i");
            obj.set_font("italic 11pt/normal \"Arial\"");
            obj.set_border("1px solid #fc6304");
            obj.set_borderRadius("50%");
            obj.set_color("#fc6304");
            obj.set_padding("0px 0px 10px 5px");
            obj.set_tooltiptext("Chỗ này điền tên dự án");
            obj.set_tooltiptype("hover,mouseleave");
            obj.set_cursor("pointer");
            this.div_add.addChild(obj.name, obj);

            obj = new Static("Static00_00","220","482","18","18",null,null,null,null,null,null,this.div_add.form);
            obj.set_taborder("12");
            obj.set_text("i");
            obj.set_font("italic 11pt/normal \"Arial\"");
            obj.set_border("1px solid #fc6304");
            obj.set_borderRadius("50%");
            obj.set_color("#fc6304");
            obj.set_padding("0px 0px 10px 5px");
            obj.set_tooltiptext("Chọn 1 nhóm có sẵn hoặc thêm mới");
            obj.set_tooltiptype("hover,mouseleave");
            obj.set_cursor("pointer");
            this.div_add.addChild(obj.name, obj);

            obj = new Button("btn_add","156","790","70","30",null,null,null,null,null,null,this.div_add.form);
            obj.set_taborder("13");
            obj.set_text("Thêm");
            obj.set_cssclass("btnPrimary");
            this.div_add.addChild(obj.name, obj);

            obj = new Button("btn_cancle","245","790","60","30",null,null,null,null,null,null,this.div_add.form);
            obj.set_taborder("14");
            obj.set_text("Hủy");
            obj.set_cssclass("btnPrimaryOutline");
            obj.set_fittocontents("width");
            obj.set_padding("0px 15px");
            this.div_add.addChild(obj.name, obj);

            obj = new Static("sta_str_dt","154","208","385","27",null,null,null,null,null,null,this.div_add.form);
            obj.set_taborder("3");
            obj.set_text("Ngày bắt đầu");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_cssclass("label");
            this.div_add.addChild(obj.name, obj);

            obj = new Calendar("cal_str_dt","149","245","37.42%","35",null,null,null,null,null,null,this.div_add.form);
            obj.set_taborder("2");
            this.div_add.addChild(obj.name, obj);

            obj = new Static("sta_end_dt","50.23%","210","480","27",null,null,null,null,null,null,this.div_add.form);
            obj.set_taborder("4");
            obj.set_text("Ngày kết thúc");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_cssclass("label");
            this.div_add.addChild(obj.name, obj);

            obj = new Calendar("cal_end_dt","50.16%","245","39.61%","35",null,null,null,null,null,null,this.div_add.form);
            obj.set_taborder("5");
            this.div_add.addChild(obj.name, obj);

            obj = new Static("sta_owner","152","130","150","20",null,null,null,null,null,null,this.div_add.form);
            obj.set_taborder("0");
            obj.set_text("Chủ sở hữu");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_cssclass("label");
            this.div_add.addChild(obj.name, obj);

            obj = new Combo("cbx_owner","151","162","37.34%","35",null,null,null,null,null,null,this.div_add.form);
            obj.set_taborder("1");
            obj.set_displaynulltext("Chọn --");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var div_add_form_cbx_owner_innerdataset = new nexacro.NormalDataset("div_add_form_cbx_owner_innerdataset", obj);
            div_add_form_cbx_owner_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">Ngô Khắc Bắc</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">Bắc Ngô Khắc</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">Bắc Khắc Ngô</Col></Row></Rows>");
            obj.set_innerdataset(div_add_form_cbx_owner_innerdataset);
            obj.set_value("");
            obj.set_index("-1");
            this.div_add.addChild(obj.name, obj);

            obj = new Static("sta_template","50.70%","132","150","20",null,null,null,null,null,null,this.div_add.form);
            obj.set_taborder("2");
            obj.set_text("Mẫu");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_cssclass("label");
            this.div_add.addChild(obj.name, obj);

            obj = new Combo("cbx_template","50.16%","160","39.61%","35",null,null,null,null,null,null,this.div_add.form);
            obj.set_taborder("3");
            obj.set_displaynulltext("Chọn --");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var div_add_form_cbx_template_innerdataset = new nexacro.NormalDataset("div_add_form_cbx_template_innerdataset", obj);
            div_add_form_cbx_template_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">Test</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">Agile Scrum</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">Water Fall</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">Fix bug</Col></Row></Rows>");
            obj.set_innerdataset(div_add_form_cbx_template_innerdataset);
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.div_add.addChild(obj.name, obj);

            obj = new CheckBox("cb_tightPrj","154","300",null,"27","636",null,null,null,null,null,this.div_add.form);
            obj.set_taborder("17");
            obj.set_text("Cài đặt nội dung này thành dự án chặt chẽ");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.div_add.addChild(obj.name, obj);

            obj = new Div("div_message","340","19","500","27",null,null,null,null,null,null,this.div_add.form);
            obj.set_taborder("18");
            obj.set_color("red");
            this.div_add.addChild(obj.name, obj);

            obj = new Static("Static01","240","63","18","17",null,null,null,null,null,null,this.div_add.form);
            obj.set_taborder("29");
            obj.set_text("<fc v=\'red\'>*</fc>");
            obj.set_cssclass("label");
            obj.set_usedecorate("true");
            this.div_add.addChild(obj.name, obj);

            obj = new PopupDiv("PopupDiv00","880","660","288","145",null,null,null,null,null,null,this);
            obj.set_visible("false");
            obj.set_background("#fff");
            obj.set_boxShadow("0px 0px 10px 5px RGB(140,140,140)");
            obj.set_borderRadius("4px");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","12","7","100","30",null,null,null,null,null,null,this.PopupDiv00.form);
            obj.set_taborder("0");
            obj.set_text("Tên nhóm");
            obj.set_font("normal 14pt/normal \"Arial\"");
            this.PopupDiv00.addChild(obj.name, obj);

            obj = new Edit("NewGroupName","13","45","260","34",null,null,null,null,null,null,this.PopupDiv00.form);
            obj.set_taborder("1");
            obj.set_displaynulltext("Nhập tên nhóm");
            this.PopupDiv00.addChild(obj.name, obj);

            obj = new Button("Button00","13","92","118","34",null,null,null,null,null,null,this.PopupDiv00.form);
            obj.set_taborder("2");
            obj.set_text("Tạo nhóm");
            obj.set_cssclass("btnPrimary");
            this.PopupDiv00.addChild(obj.name, obj);

            obj = new Button("Button00_00","153","92","118","34",null,null,null,null,null,null,this.PopupDiv00.form);
            obj.set_taborder("3");
            obj.set_text("Hủy");
            obj.set_cssclass("btnPrimaryOutline");
            obj.set_fittocontents("width");
            obj.set_padding("0px 15px");
            this.PopupDiv00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div_add.form.div_message
            obj = new Layout("default","",0,0,this.div_add.form.div_message.form,function(p){});
            this.div_add.form.div_message.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_add.form
            obj = new Layout("default","",0,0,this.div_add.form,function(p){});
            this.div_add.form.addLayout(obj.name, obj);

            //-- Default Layout : this.PopupDiv00.form
            obj = new Layout("default","",0,0,this.PopupDiv00.form,function(p){});
            this.PopupDiv00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1280,850,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("addProject.xfdl","Common::common.xjs");
        this.registerScript("addProject.xfdl", function() {
        this.executeIncludeScript("Common::common.xjs"); /*include "Common::common.xjs"*/;

        var isCollapsed = false;
        this.Div00_Static02_onclick = function(obj,e) {
        	trace(collapse);
            var comp = obj;
            var form = comp.parent; // Đặt tên form tùy ý (đảm bảo trùng với tên form đã tạo)
        	var collapse = form.CollapseBtn;
        	collapse.set_cssclass(isCollapsed ? "isCollapse" : "isNotCollapse");
            // Lấy các thành phần muốn collapse
            var componentsToCollapse = [form.rdo_code, form.subPrivate, form.subPublic];
            if (isCollapsed) {
                // Ẩn các thành phần khi trạng thái collapse
                for (var i = 0; i < componentsToCollapse.length; i++) {
                    componentsToCollapse[i].set_visible(false);
                }
            } else {
                // Hiển thị các thành phần khi trạng thái mở rộng
                for (var i = 0; i < componentsToCollapse.length; i++) {
                    componentsToCollapse[i].set_visible(true);
                }
            }

            // Đảo ngược trạng thái collapse
            isCollapsed = !isCollapsed;
        };


        this.btn_pdiv_onclick = function(obj,e)
        {

        	var nX = parseInt(obj.width);
        	var nY = 0; //parseInt(obj.height);
        	console.log(this);

        	this.PopupDiv00.trackPopupByComponent(obj
        	                                    , nX
        										, nY
        										, null
        										, null
        										, "fn_pDivCallback");


        };

        this.fn_pDivCallback = function(objID, rtnValue)
        {
        	if(rtnValue == ""){
        		return;
        	}
        	if(objID == "PopupDiv00")
        	{
        		this.alert("Return Value: " + rtnValue);
        	}
        };

        this.PopupDiv00_btn_cancle_onclick = function(obj,e)
        {
        	this.PopupDiv00.closePopup("");
        };

        this.PopupDiv00_btn_add_onclick = function(obj,e)
        {
        	var msg = "";
        	var title = this.validEmptyValue(this.div_add.form.sta_title.text, this.div_add.form.ipt_title.value);
        	var owner = this.validEmptyValue(this.div_add.form.sta_owner.text, this.div_add.form.cbx_owner.value);
        	var template = this.validEmptyValue(this.div_add.form.sta_template.text, this.div_add.form.cbx_template.value);
         	var strtDt = this.validEmptyValue(this.div_add.form.sta_str_dt.text, this.div_add.form.cal_str_dt.value);
         	var endDt = this.validEmptyValue(this.div_add.form.sta_end_dt.text, this.div_add.form.cal_end_dt.value);
         	var tightPrj = this.div_add.form.cb_tightPrj.value;
        	var description = this.div_add.form.txt_description.value;
        	var groupName = this.validEmptyValue(this.div_add.form.sta_group_nm.text, this.div_add.form.cbx_name_group.value);
        	var tagName = this.div_add.form.ipt_tag_name.text;
        	var codeRadioValue = this.validEmptyValue(this.div_add.form.sta_private.text, this.div_add.form.rdo_code.value);
         	if(title != '') {
         		this.div_add.form.div_message.set_text(title);
         		return;
         	}
        	if(owner != '') {
         		this.div_add.form.div_message.set_text(owner);
         		return;
         	}
        	if(template != '') {
         		this.div_add.form.div_message.set_text(template);
         		return;
         	}
        	if(strtDt != '') {
         		this.div_add.form.div_message.set_text(strtDt);
         		return;
         	}
        	if(endDt != '') {
         		this.div_add.form.div_message.set_text(endDt);
         		return;
         	}
        	if(groupName != '') {
         		this.div_add.form.div_message.set_text(groupName);
         		return;
         	}
        	var index = 0
        	nexacro.Application.ds_input_project.addRow();
        	//this.ds_input_project.addRow();
        	var index = nexacro.Application.ds_input_project.rowposition;

        	nexacro.Application.ds_input_project.setColumn(index, "title", this.div_add.form.ipt_title.value);
        	nexacro.Application.ds_input_project.setColumn(index, "owner", this.div_add.form.cbx_owner.value);
        	nexacro.Application.ds_input_project.setColumn(index, "status", 'CO_HIEU_LUC');
        	nexacro.Application.ds_input_project.setColumn(index, "progress", 0);
        	nexacro.Application.ds_input_project.setColumn(index, "strtDate", this.div_add.form.cal_str_dt.value);
        	nexacro.Application.ds_input_project.setColumn(index, "endDate", this.div_add.form.cal_end_dt.value);
        	nexacro.Application.ds_input_project.setColumn(index, "tagName", this.div_add.form.ipt_tag_name.value);
        	nexacro.Application.ds_input_project.setColumn(index, "progressTask", 0);
        	nexacro.Application.ds_input_project.setColumn(index, "isDone", false);
        	nexacro.Application.ds_input_project.setColumn(index, "template", this.div_add.form.cbx_template.value);
        	nexacro.Application.ds_input_project.setColumn(index, "description", this.div_add.form.txt_description.value);
        	nexacro.Application.ds_input_project.setColumn(index, "isAccessPrivate", this.div_add.form.rdo_code.value);
        	nexacro.Application.ds_input_project.setColumn(index, "isTightPrj", this.div_add.form.cb_tightPrj.value);
        	nexacro.Application.ds_input_project.setColumn(index, "groupId", this.div_add.form.cbx_name_group.value);
        	nexacro.Application.ds_input_project.setColumn(index, "deleted", 0);
        	this.div_add.form.div_message.set_text('');
        	var message = "";
        	this.ds_input.copyData(nexacro.Application.ds_input_project);
        	trace(nexacro.Application.ds_input_project.getCount());
        	var id = "create";
             var url = "http://localhost:8080/projects/create";
             var reqDs = "dsInput=ds_input_project";
             var respDs = "message=IDDataset";
             var args = "";
             var callback = "received";

             this.transaction(id, url, reqDs, respDs, args, callback, true, 0, false);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.div_add.form.Button00.addEventHandler("onclick",this.btn_pdiv_onclick,this);
            this.div_add.form.sta_private.addEventHandler("onclick",this.Div00_Static02_onclick,this);
            this.div_add.form.CollapseBtn.addEventHandler("onclick",this.Div00_Static02_onclick,this);
            this.div_add.form.btn_add.addEventHandler("onclick",this.PopupDiv00_btn_add_onclick,this);
            this.div_add.form.btn_cancle.addEventHandler("onclick",this.PopupDiv00_btn_cancle_onclick,this);
            this.div_add.form.cb_tightPrj.addEventHandler("onclick",this.Div00_00_01_00_CheckBox00_onclick,this);
            this.PopupDiv00.form.Static00.addEventHandler("onclick",this.Div00_PopupDiv00_Static00_onclick,this);
            this.PopupDiv00.form.Button00.addEventHandler("onclick",this.PopupDiv00_Button00_onclick,this);
            this.PopupDiv00.form.Button00_00.addEventHandler("onclick",this.PopupDiv00_Button00_00_onclick,this);
        };
        this.loadIncludeScript("addProject.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
