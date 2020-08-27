<template>
  <div class="app-pages">
    <header class="app-top-bar">
      <span class="icons icon-back pull-left" @click="backURL"></span>
      <h1 class="titles">污水处理站维护记录表</h1>
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
          <el-form-item label="选择站点：" prop="sid" label-width="90px">
            <el-cascader
              popper-class="app-cascader"
              v-model="formData.sid"
              :options="stationOptions"
              :props="stationOptionsProps"
              placeholder="请选择站点"
            ></el-cascader>
          </el-form-item>
          <el-form-item label="维护人：" prop="user_id" label-width="90px" ref="user_id">
            <el-select v-model="formData.user_id" placeholder="请选择维护人">
              <el-option
                v-for="item in userList"
                :key="item.id"
                :label="item.name"
                :value="item.id"
              ></el-option>
            </el-select>
          </el-form-item>
          <div class="stitless">设备巡检内容、情况、及处理情况说明</div>
          <div class="el-checks">
            <el-form-item label="1.维护预备：" prop="prepare">
              <el-checkbox-group v-model="formData.prepare">
                <el-checkbox
                  v-for="item in prepareList"
                  :label="item.id"
                  :key="item.id"
                  name="prepare"
                >{{item.value}}</el-checkbox>
              </el-checkbox-group>
            </el-form-item>
            <el-form-item label="2.系统检查：" prop="sys_check">
              <el-checkbox-group v-model="formData.sys_check">
                <el-checkbox
                  v-for="item in sysCheckList"
                  :label="item.id"
                  :key="item.id"
                  name="sys_check"
                >{{item.value}}</el-checkbox>
              </el-checkbox-group>
            </el-form-item>
            <el-form-item label="3.仪器检查：" prop="device_check">
              <el-checkbox-group v-model="formData.device_check">
                <el-checkbox
                  v-for="item in deviceCheckkList"
                  :label="item.id"
                  :key="item.id"
                  name="device_check"
                >{{item.value}}</el-checkbox>
              </el-checkbox-group>
            </el-form-item>
            <el-form-item label="4.周期维护：" prop="period_check">
              <el-checkbox-group v-model="formData.period_check">
                <el-checkbox
                  v-for="item in periodCheck"
                  :label="item.id"
                  :key="item.id"
                  name="period_check"
                >{{item.value}}</el-checkbox>
              </el-checkbox-group>
            </el-form-item>
          </div>
          <div class="samptitles">5.其他情况</div>
          <el-form-item label="更换耗材：">
            <el-input v-model="formData.replace_material" maxlength="50"></el-input>
          </el-form-item>
          <el-form-item label="离站时间：" prop="leave_time">
            <el-date-picker v-model="formData.leave_time" type="datetime" placeholder="选择日期"></el-date-picker>
          </el-form-item>
          <el-form-item label="服务耗时：" prop="keep_time">
            <el-input  v-model="formData.keep_time" maxlength="6">
              <template slot="append">小时</template>
            </el-input>
          </el-form-item>
            <el-form-item label="异常情况：">
            <el-input v-model="formData.exception" maxlength="50"></el-input>
          </el-form-item>
          <el-form-item label="备注：">
            <el-input type="textarea" v-model="formData.remark" maxlength="200"></el-input>
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
      stationOptions: [],
      stationOptionsProps: {
        value: "id",
        label: "name",
        children: "child"
      },
      userList: [],
      formData: {
        prepare: [],
        sys_check: [],
        device_check: [],
        period_check: []
      },
      formRules: {
        sid: [
          {
            required: true,
            message: "请选择站点",
            trigger: "change"
          }
        ],
        user_id: [
          {
            required: true,
            message: "请选择维护人",
            trigger: "change"
          }
        ],
        prepare: [
          {
            type: "array",
            required: true,
            message: "请至少选择一个",
            trigger: "change"
          }
        ],
        sys_check: [
          {
            type: "array",
            required: true,
            message: "请至少选择一个",
            trigger: "change"
          }
        ],
        type: "array",
        device_check: [
          {
            required: true,
            message: "请至少选择一个",
            trigger: "change"
          }
        ],
        period_check: [
          {
            type: "array",
            required: true,
            message: "请至少选择一个",
            trigger: "change"
          }
        ],
        leave_time: [
          {
            required: true,
            message: "请选择离站时间",
            trigger: "change"
          }
        ],
        keep_time: [
          {
            required: true,
            message: "请输入1-6位数字",
            trigger: "blur"
          },
          {
            pattern: /^[0-9]+([.]{1}[0-9]+){0,1}$/,
            message: "请输入1-6位数字",
            trigger: "blur"
          }
        ]
      },
      prepareList: [],
      sysCheckList: [],
      deviceCheckkList: [],
      periodCheck: []
    };
  },
  created() {
    this.getConfig();
    this.getStationList();
    this.getUsersList();
  },
  methods: {
    backURL() {
      this.$router.go(-1); //返回上一层
    },
    diaLogFormShowEvent() {
      this.diaLogFormVisible = true;
      this.getStationList();
      this.getUsersList();
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
    addEvent() {
      this.$refs["formRulesRef"].validate((valid, object) => {
        if (valid) {
          let data = this.formData;
          data.sid = this.formData.sid[1];
          data.type = 1;
          console.log(this.formData);
          this.request({
            url: "/record/addRecord",
            method: "post",
            data
          }).then(response => {
            var data = response.data;
            if (data.status == 1) {
              this.$message({
                type: "success",
                message: "保存成功！"
              });
              this.backURL();
            }
          });
        } else {
          //console.log(object);
          // let errorlen = Object.keys(object);
          let that = this;
          that.$nextTick(() => {
            let isError = document.getElementsByClassName("is-error");
            isError[0].querySelector("input").focus();
          });
          return false;
        }
      });
    },
    getConfig() {
      this.request({
        url: "/record/getConfig",
        method: "get"
      }).then(response => {
        let data = response.data;
        if (data.status == 1) {
          this.prepareList = data.data.prepare; //维护预备
          this.sysCheckList = data.data.sys_check; //系统检查
          this.deviceCheckkList = data.data.device_check; //仪器检查
          this.periodCheck = data.data.period_check; //周期维护

          console.log(this.prepareList);
        }
      });
    }
  }
};
</script>
<style>
.stitless {
  overflow: hidden;
  text-align: center;
  display: block;
  color: #1386ff;
  font-size: 16px;
  font-weight: 700;
  padding-top: 20px;
  padding-bottom: 20px;
}
.el-checks .el-form-item {
  margin-bottom: 16px;
}
.samptitles {
  padding: 20px 0 15px 15px;
  color: #1d397a;
}
</style>