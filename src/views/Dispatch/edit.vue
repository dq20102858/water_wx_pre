<template>
  <div class="app-pages">
    <header class="app-top-bar">
      <span class="icons icon-back pull-left" @click="backURL"></span>
      <h1 class="titles">运维派单</h1>
    </header>
    <div class="app-content">
      <div class="app-form">
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
          <el-form-item label="人员职位：" prop="role_id">
            <el-select
              v-model="formData.role_id"
              placeholder="请选择职位"
              @change="changeRoleEvent($event)"
            >
              <el-option label="管理员" :value="1"></el-option>
              <el-option label="维修人员" :value="2"></el-option>
              <el-option label="巡检人员" :value="3"></el-option>
              <el-option label="分析人员" :value="4"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="指派人员：" prop="assigner_id">
            <el-select v-model="formData.assigner_id" filterable placeholder="请选择指派人员">
              <el-option
                v-for="item in this.userList"
                :key="item.id"
                :label="item.name"
                :value="item.id"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="指派内容：" prop="content">
            <el-input type="textarea" v-model="formData.content" rows="3"></el-input>
          </el-form-item>
          <el-form-item class="app-form-save">
            <el-button type="primary" @click="addEvent">确 定</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      formData: {},
      formRules: {
        sid: [
          {
            required: true,
            message: "请选择站点名",
            trigger: "change"
          }
        ],
        role_id: [
          {
            required: true,
            message: "请选择人员职位",
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
          {
            required: true,
            message: "请输入指派内容",
            trigger: "blur"
          },
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
      userList: []
    };
  },
  created() {
    this.getStationList();
  },
  methods: {
    backURL() {
      this.$router.go(-1); //返回上一层
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
    changeRoleEvent(roleid) {
      this.$set(this.formData, "assigner_id", "");
      this.getUsersList(roleid);
    },
    getUsersList(roleid) {
      this.request({
        url: "/assign/getUsersLists",
        method: "get",
        params: { role_id: roleid }
      }).then(response => {
        let data = response.data;
        if (data.status == 1) {
          this.userList = data.data;
        }
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