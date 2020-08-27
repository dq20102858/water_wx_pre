<template>
  <div class="app-pages">
    <header class="app-top-bar">
      <span class="icons icon-back pull-left" @click="backURL"></span>
      <h1 class="titles">污水处理站维护记录</h1>
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
            <el-input v-model="formData.station_name" disabled></el-input>
          </el-form-item>
          <el-form-item label="维护人：" prop="user_id" label-width="90px" ref="user_id">
            <el-input v-model="formData.user" disabled></el-input>
          </el-form-item>
          <div class="stitless">设备巡检内容、情况、及处理情况说明</div>
          <div class="el-checks app-dis-checkbox">
            <el-form-item label="1.活动性质：" prop="prepare">
              <el-checkbox-group v-model="formData.prepare">
                <el-checkbox
                  v-for="item in prepareList"
                  :label="item.id+''"
                  :key="item.id"
                  disabled
                >{{item.value}}</el-checkbox>
              </el-checkbox-group>
            </el-form-item>
            <el-form-item label="2.系统检查：" prop="sys_check">
              <el-checkbox-group v-model="formData.sys_check">
                <el-checkbox
                  v-for="item in sysCheckList"
                  :label="item.id+''"
                  :key="item.id"
                  disabled
                >{{item.value}}</el-checkbox>
              </el-checkbox-group>
            </el-form-item>
            <el-form-item label="3.仪器检查：" prop="device_check">
              <el-checkbox-group v-model="formData.device_check">
                <el-checkbox
                  v-for="item in deviceCheckkList"
                  :label="item.id+''"
                  :key="item.id"
                  disabled
                >{{item.value}}</el-checkbox>
              </el-checkbox-group>
            </el-form-item>
            <el-form-item label="4.周期维护：" prop="period_check">
              <el-checkbox-group v-model="formData.period_check">
                <el-checkbox
                  v-for="item in periodCheck"
                  :label="item.id+''"
                  :key="item.id"
                  disabled
                >{{item.value}}</el-checkbox>
              </el-checkbox-group>
            </el-form-item>
          </div>
          <div class="samptitles">5.其他情况</div>
          <el-form-item label="异常情况：">
            <el-input v-model="formData.exception" disabled></el-input>
          </el-form-item>
          <el-form-item label="更换耗材：">
            <el-input v-model="formData.replace_material" disabled></el-input>
          </el-form-item>
          <el-form-item label="离站时间：" prop="leave_time">
            <el-date-picker v-model="formData.leave_time" type="datetime" placeholder="选择日期" disabled></el-date-picker>
          </el-form-item>
          <el-form-item label="服务耗时：" prop="keep_time" class="keeptime">
            <el-input v-model="formData.keep_time" disabled>
              <template slot="append">小时</template>
            </el-input>
          </el-form-item>
          <el-form-item label="备注：">
            <el-input type="textarea" v-model="formData.remark" disabled></el-input>
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
      formData: [],
      prepareList: [],
      sysCheckList: [],
      deviceCheckkList: [],
      periodCheck: []
    };
  },
  created() {
    this.getConfig();
    this.detailEvent();
  },
  methods: {
    backURL() {
      this.$router.go(-1); //返回上一层
    },
    detailEvent() {
      this.request({
        url: "/record/getRecordDetail",
        method: "get",
        params: { id: this.$route.query.id, type: 1 }
      }).then(res => {
        let data = res.data;
        if (data.status == 1) {
          this.formData = data.data;
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
.keeptime  .el-input-group__append{border-color: #E4E7ED ;}
</style>