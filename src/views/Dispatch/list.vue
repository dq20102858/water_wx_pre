<template>
  <div class="app-pages">
         <header class="app-top-bar">
      <a class="icons icon-back pull-left"></a>
      <h1 class="titles">已完成</h1>
    </header>
    <div class="app-content">
        <div class="app-content-rows">
          <div class="app-table">
            <el-table :data="dataList" size="mini">
              <el-table-column label="序号" type="index">
                <!-- <template slot-scope="scope">{{scope.$index+(page_cur - 1) * page_size + 1}}</template> -->
              </el-table-column>
              <el-table-column prop="station_name" label="维保站点" class-name="nowrap"></el-table-column>
              <el-table-column prop="type" label="维保事项">
                <template slot-scope="scope">
                  <span v-if="scope.row.type==1">设备维修</span>
                  <span v-else-if="scope.row.type==2">例行维保</span>
                  <span v-else>运行检查</span>
                </template>
              </el-table-column>
              <el-table-column label="指派时间"  class-name="linewrap">
                <template slot-scope="scope">
                  <span>{{scope.row.assign_time|formatGetDate}}</span>
                </template>
              </el-table-column>
              <el-table-column prop="assigner" label="指派人" class-name="nowrap"></el-table-column>
            </el-table>
            <div class="app-pagination">
              <el-pagination
                class="pagination"
                v-if="dataList.length !== 0"
              layout="prev, pager, next"
                :page-size="this.page_size"
                :current-page="this.page_cur"
                :total="this.page_data_total"
                @current-change="pageChange"
              >
              </el-pagination>
            </div>
          </div>
        </div></div>
   </div>
</template>
<script>
export default {
  data() {
    return {
      diaLogFormVisible: false,
      diaLogTitle: "添加信息",
      diaLogFormDetailVisible: false,
      formData: {},
      formRules: {
        sid: [
          {
            required: true,
            message: "请选择站点名",
            trigger: "change"
          }
        ],
        assigner_id: [
          {
            required: true,
            message: "请选择指派人",
            trigger: "change"
          }
        ],
        type: [
          {
            required: true,
            message: "请选择派单事项",
            trigger: "change"
          }
        ],
        content: [
          { min: 2, max: 200, message: "长度在2到200个字符", trigger: "blur" },
          {
            pattern: /(^\S+).*(\S+$)/,
            message: "开始和结尾不能有空格",
            trigger: "blur"
          }
        ]
      },
      page_cur: 1,
      page_data_total: 0,
      page_size: 20,
      page_total: 0,
      dataList: [],
      userList: [],
      stationOptions: [],
      stationOptionsProps: {
        value: "id",
        label: "name",
        children: "child"
      },
      fatherStationList: [],
      childStationList: [],
      fatherStationId: 0,
      chlidStationId: 0,
      chlidStationName: "",
      searchKeyword: "",
      searchAssignerId: "0",
      searchType: "0",
      searchStatus: "0",
      pickerStartTime: {
        disabledDate: time => {
          if (this.searchEndTime) {
            return time.getTime() > new Date(this.searchEndTime).getTime();
          }
        }
      },
      pickerEndTime: {
        disabledDate: time => {
          if (this.searchStartTime) {
            return time.getTime() < new Date(this.searchStartTime).getTime();
          }
        }
      },
      searchStartTime: "",
      searchEndTime: ""
    };
  },
  created() {
    this.getFatherStationList();
    this.getDataList();
    this.getUsersList();
  },
  methods: {
    getDataList() {
      let page = this.page_cur;
      let type = this.searchType;
      let status = this.searchStatus;
      let sid = this.chlidStationId;
      let assigner_id = this.searchAssignerId;
      let start_time = this.searchStartTime;
      let end_time = this.searchEndTime;
      this.request({
        url: "/assign/getAssignPages",
        method: "get",
        params: { page, sid, assigner_id, type, status, start_time, end_time }
      }).then(res => {
        let data = res.data;
        if (data.status == 1) {
          this.dataList = data.data.data;
          this.page_cur = parseInt(data.data.current_page);
          this.page_total = data.data.last_page;
          this.page_data_total = data.data.total;
          this.page_size = data.data.per_page;
        }
      });
    },
    pageChange(value) {
      this.page_cur = value;
      this.getDataList();
    },
    pageToFirst() {
      this.page_cur = 1;
      this.getDataList();
    },
    pageToLast() {
      this.page_cur = this.page_total;
      this.getDataList();
    },
    searchAssignerEvent(item) {
      this.searchAssignerId = item;
      this.getDataList();
    },
    searchStatusEvent(val) {
      this.searchStatus = val;
      this.getDataList();
    },
    searchTypeEvent(val) {
      this.searchType = val;
      this.getDataList();
    },
    searchStartTimeEvent() {
      console.log(this.searchEndTime);
      if (this.searchEndTime != "") {
        this.page_cur = 1;
        this.getDataList();
      }
    },
    searchEndTimeEvent() {
      if (this.searchStartTime != "") {
        this.page_cur = 1;
        this.getDataList();
      }
    },
    searchAllEvent() {
      this.page_cur = 1;
      this.searchStatus = "0";
      this.searchType = "0";
      this.searchAssignerId = "0";
      this.chlidStationId = 0;
      this.searchStartTime = "";
      this.searchEndTime = "";
      this.getDataList();
    },
    getStationList() {
      this.request({
        url: "/station/getStationLists",
        method: "get"
      }).then(response => {
        let data = response.data;
        if (data.status == 1) {
          this.stationOptions = data.data;
        }
      });
    },
    getUsersList() {
      this.request({
        url: "/assign/getUsersLists",
        method: "get"
      }).then(response => {
        let data = response.data;
        if (data.status == 1) {
          this.userList = data.data;
        }
      });
    },
    userChange(e) {
      this.userList.forEach(ele => {
        if (ele.id == e) {
          // if (ele.role_id == 1) {
          //   this.formData.role = "管理员";
          // } else if (ele.role_id == 2) {
          //   this.formData.role = "维修人员";
          // } else if (ele.role_id == 3) {
          //   this.formData.role = "巡检人员";
          // } else if (ele.role_id == 4) {
          //   this.formData.role = "分析人员";
          // }
          this.formData.phone = ele.phone;
        }
      });
    },
    //添加编辑
    addShowDialog() {
      this.getStationList();

      this.diaLogFormVisible = true;
      this.diaLogTitle = "发起派单";
      this.$nextTick(() => {
        this.$refs["formRulesRef"].clearValidate();
      });
      this.formData = {
        // title: "",
        // description: "",
        // recept_type: []
      };
    },
    addEvent() {
      const that = this;
      this.$refs["formRulesRef"].validate(valid => {
        if (valid) {
          let data = that.formData;
          data.sid = that.formData.sid[1];
          this.request({
            url: "/assign/addAssign",
            method: "post",
            data
          }).then(response => {
            var data = response.data;
            if (data.status == 1) {
              this.diaLogFormVisible = false;
              this.searchType = "0";
              this.getDataList();
              this.$message({
                type: "success",
                message: "保存成功！"
              });
            }
          });
        } else {
          console.log("操作失败！");
          return false;
        }
      });
    },
    detailEvent(id) {
      this.diaLogFormDetailVisible = true;
      this.request({
        url: "/assign/getAssignDetail",
        method: "get",
        params: { id: id }
      }).then(res => {
        let data = res.data;
        if (data.status == 1) {
          this.formData = data.data;
        }
      });
    },
    applyEvent(id) {
      this.$confirm("请确认派单是否完成？", "提示", {
        confirmButtonText: "已完成",
        cancelButtonText: "未完成",
        type: "warning",
        customClass: "el-message-box-new"
      })
        .then(() => {
          this.request({
            url: "/assign/checkAssign",
            method: "post",
            data: { id: id, status: 2 }
          }).then(res => {
            let data = res.data;
            if (data.status == 1) {
              this.getDataList();
            }
          });
        })
        .catch(() => {});
    },
    deleteEvent(id) {
      this.$confirm("您确定要删除？删除后不能恢复！", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
        customClass: "el-message-box-new"
      })
        .then(() => {
          this.request({
            url: "/assign/deleteAssign",
            method: "post",
            data: { id: id, type: parseInt(this.searchType) }
          }).then(res => {
            let data = res.data;
            if (data.status == 1) {
              if (this.dataList.length == 1) {
                this.page_cur = this.page_cur - 1;
                this.getDataList();
              } else {
                this.getDataList();
              }
              this.$message({
                type: "success",
                message: "删除成功！"
              });
            }
          });
        })
        .catch(() => {});
    },
    //station
    getFatherStationList() {
      let name = this.chlidName;
      this.request({
        url: "/station/getStationLists",
        method: "get",
        params: { name }
      }).then(response => {
        let data = response.data;
        if (data.status == 1) {
          this.fatherStationList = data.data;
          if (this.fatherStationId == 0) {
            this.getChildStationList();
          }
        }
      });
    },
    getChildStationList() {
      let name = "";
      this.request({
        url: "/station/getChildStationLists",
        method: "get",
        params: { name }
      }).then(response => {
        let data = response.data;
        if (data.status == 1) {
          let results = data.data;
          this.childStationList = results;
        }
      });
    },
    fatherStationEvent(val) {
      if (val == 0) {
        this.getChildStationList();
        this.page_cur = 1;
        this.chlidStationId = 0;
        this.getDataList();
      }
      this.fatherStationId = val;
      this.fatherStationList.map(ele => {
        if (ele.id == val) {
          this.childStationList = ele.child;
        }
      });
    },
    chlidStationEvent(val) {
      this.page_cur = 1;
      this.chlidStationId = val;
      this.getDataList();
    },
    searchStationCallBack(queryString, cb) {
      this.request({
        url: "/station/getChildStationLists",
        method: "get",
        params: { name: queryString }
      }).then(response => {
        let data = response.data;
        if (data.status == 1) {
          let results = data.data;
          let list = [];
          if (results.length == 0) {
            list.push({
              id: 0,
              value: "未查询到站名"
            });
          }
          for (let item of results) {
            list.push({
              id: item.id,
              pid: item.pid,
              value: item.name
            });
          }
          console.log(list);
          cb(list);
        }
      });
    },
    searchStationEvent(item) {
      this.page_cur = 1;
      this.fatherStationEvent(item.pid);
      this.fatherStationId = item.pid;
      this.chlidStationId = item.id;
      this.chlidStationName = "";
      this.getDataList();
    }
    //end station
  }
};
</script>
<style>
.dialog-dispatch .el-select {
  width: 100%;
}
.dialog-dispatch .el-form-item-inline {
  display: inline-block;
}
.dialog-dispatch .el-form-item-inline .el-form-item {
  display: inline-block;
}
.dialog-dispatch .el-form-item-block {
  display: block;
}
.dialog-dispatch .el-form-item-inline .el-checkbox-group {
  margin-left: 110px;
}
.dialog-dispatch .el-form-item-inline .el-input__inner {
  width: 220px;
}

.el-form-item-detail .el-form-item {
  margin-bottom: 5px;
}
.el-form-item-detail .disp-info {
  line-height: 28px;
  margin-top: 5px;
}
.dd {
  display: inline-block;
  overflow-y: auto;
}
</style>