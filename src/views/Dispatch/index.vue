<template>
  <div class="app-pages">
    <header class="app-top-bar">
      <h1 class="titles">运维派单</h1>
      <a class="icons icon-add pull-right" @click="addShowDialog"></a>
    </header>
    <div class="app-content">
      <el-card class="dis-box-card box-card">
        <div slot="header" class="clearfix">
          <span style="font-size:18px;">已完成</span>
          <el-button class="mores" type="text" @click="getListDetail(2)">
            查看更多
            <i class="icon-rights"></i>
          </el-button>
        </div>
        <div class="items">
          <div class="item" v-for="item in statusOkList" :key="item.id">
            <p>
              <span class="pull-left">{{item.station_name}}</span>
              <span v-if="item.type==1" class="type type1">设备维修</span>
              <span v-if="item.type==2" class="type type2">例行维保</span>
              <span v-if="item.type==3" class="type type3">运行检查</span>
            </p>
            <p>
              <em class="pull-left">完成时间：{{item.assign_time}}</em>
              <em class="pull-right">维保人：</em>
            </p>
          </div>
        </div>
        <div v-if="statusOkList.length==0" class="app-nodata">暂无信息</div>
      </el-card>

      <el-card class="dis-box-card box-card">
        <div slot="header" class="clearfix">
          <span style="font-size:18px;">未完成</span>
          <el-button class="mores" type="text" @click="getListDetail(1)">
            查看更多
            <i class="icon-rights"></i>
          </el-button>
        </div>
        <div class="items">
          <div class="item" v-for="item in statusNoList" :key="item.id">
            <p>
              <span class="pull-left">{{item.station_name}}</span>
              <span v-if="item.type==1" class="type type1">设备维修</span>
              <span v-if="item.type==2" class="type type2">例行维保</span>
              <span v-if="item.type==3" class="type type3">运行检查</span>
            </p>
            <p>
              <em class="pull-left">完成时间：{{item.assign_time}}</em>
              <em class="pull-right">维保人：</em>
            </p>
          </div>
        </div>
        <div v-if="statusNoList.length==0" class="app-nodata">暂无信息</div>
      </el-card>
    </div>
    <el-dialog
      width="90%"
      :title="this.diaLogTitle"
      :visible.sync="diaLogFormVisible"
      :close-on-click-modal="false"
      :show-close="false"
      center
    >
      <el-form
        :model="formData"
        :rules="formRules"
        ref="formRulesRef"
        class="el-form-custom"
        label-width="100px"
      >
        <el-form-item label="选择站点：" prop="sid">
          <el-cascader
            popper-class="app-cascader"
            v-model="formData.sid"
            :options="stationOptions"
            :props="stationOptionsProps"
            placeholder="请选择站点"
          ></el-cascader>
        </el-form-item>
        <el-form-item label="派单事项：" prop="type">
          <el-select v-model="formData.type" placeholder="请选择派单事项">
            <el-option label="设备维修" :value="1"></el-option>
            <el-option label="例行维保" :value="2"></el-option>
            <el-option label="运行检查" :value="3"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="指派人员：" prop="assigner_id">
          <el-select v-model="formData.assigner_id" filterable placeholder="请选择 或搜索">
            <el-option v-for="item in userList" :key="item.id" :label="item.name" :value="item.id"></el-option>
          </el-select>
        </el-form-item>
        <!-- <el-form-item label="指派时间：" prop="assign_time">
          <el-date-picker v-model="formData.assign_time" type="datetime" placeholder="选择日期"></el-date-picker>
        </el-form-item> -->
        <el-form-item label="维修内容：" prop="content">
          <el-input type="textarea" v-model="formData.content" rows="3"></el-input>
        </el-form-item>
      </el-form>

      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="addEvent">确 定</el-button>
        <el-button type="info" plain @click="diaLogFormVisible = false">取 消</el-button>
      </div>
    </el-dialog>
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
        assign_time: [
          {
            required: true,
            message: "请选择指派时间",
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
      stationOptions: [],
      stationOptionsProps: {
        value: "id",
        label: "name",
        children: "child"
      },
      userList: [],
      statusOkList: [],
      statusNoList: []
    };
  },
  created() {
    this.getAssignPages(1, 3);
    this.getAssignPages(2, 3);
  },
  methods: {
    getAssignPages(status, limit) {
      this.request({
        url: "/assign/getAssignPages",
        method: "get",
        params: { status, limit }
      }).then(response => {
        let data = response.data;
        if (data.status == 1) {
          if (status == 1) {
            this.statusNoList = data.data;
          } else {
            this.statusOkList = data.data;
          }
        }
      });
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
    addShowDialog() {
      this.getStationList();
      this.getUsersList();
      this.diaLogFormVisible = true;
      this.diaLogTitle = "发起派单";
      this.$nextTick(() => {
        this.$refs["formRulesRef"].clearValidate();
      });
    },
    addEvent() {
      this.$refs["formRulesRef"].validate(valid => {
        if (valid) {
          let data = this.formData;
          data.sid = this.formData.sid[1];
          this.request({
            url: "assign/addAssign",
            method: "post",
            data
          }).then(response => {
            var res = response.data;
            if (res.status == 1) {
              this.$message({
                type: "success",
                message: "保存成功！"
              });
              window.location.reload();
            }
          });
        } else {
          return false;
        }
      });
    },
    getListDetail(val) {
      this.$router.push({
        path: "/dispatch/list",
        query: {
          status: val
        }
      });
    }
  }
};
</script>

<style>
.dis-box-card {
  margin: 15px;
  border-radius: 6px;
}
.dis-box-card .el-card__header {
  background: #2b8cf9;
  color: #fff;
  padding: 8px 10px 8px 15px;
}
.dis-box-card .mores {
  float: right;
  padding: 3px 0;
  color: #fff;
}

.dis-box-card .item {
  border-bottom: 1px #ddd solid;
  overflow: hidden;
  padding: 20px 0 15px 0;
}
.dis-box-card .item:last-child {
  border: 0;
}
.dis-box-card .el-card__body {
  padding: 0 20px;
}
.dis-box-card .item p {
  display: block;
  padding-bottom: 5px;
  overflow: hidden;
}
.dis-box-card .item span {
  color: #333;
  font-size: 14px;
}
.dis-box-card .item em {
  color: #999;
  font-size: 12px;
}
.dis-box-card .type {
  float: right;
  cursor: pointer;
  color: #fff !important;
  padding: 3px 8px;
  border-radius: 3px;
  font-size: 12px !important;
}
.dis-box-card .type1 {
  background: #3a91f1;
}
.dis-box-card .type2 {
  background: #00dd86;
}
.dis-box-card .type3 {
  background: #ffa000;
}
</style>