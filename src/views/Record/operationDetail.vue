<template>
  <div class="app-pages">
    <header class="app-top-bar">
      <span class="icons icon-back pull-left" @click="backURL"></span>
      <h1 class="titles">污水处理站运行记录</h1>
    </header>
    <div class="app-content">
      <div class="app-form">
        <el-form
          :model="formData"
          :rules="formRules"
          ref="formRulesRef"
          class="el-form-custom"
          label-width="110px"
        >
          <el-form-item label="选择站点：" prop="sid" label-width="90px">
            <el-input v-model="formData.station_name" disabled></el-input>
          </el-form-item>
          <el-form-item label="巡查人：" prop="user_id" label-width="90px">
            <el-input v-model="formData.user" disabled></el-input>
          </el-form-item>
          <div class="el-radioed app-dis-radio">
            <div class="stitless">设备运行状况</div>
            <div class="el-form-item-inline">
              <el-form-item label="风机：" prop="fan">
                <el-radio-group v-model="formData.fan+''" disabled>
                  <el-radio label="1">正常</el-radio>
                  <el-radio label="2">异常</el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="紫外消毒机：" prop="disinfect">
                <el-radio-group v-model="formData.disinfect+''" disabled>
                  <el-radio label="1">正常</el-radio>
                  <el-radio label="2">异常</el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="湿地情况：" prop="wetland">
                <el-radio-group v-model="formData.wetland+''" disabled>
                  <el-radio label="1">正常</el-radio>
                  <el-radio label="2">异常</el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="各水泵：" prop="water_pump">
                <el-radio-group v-model="formData.water_pump+''" disabled>
                  <el-radio label="1">正常</el-radio>
                  <el-radio label="2">异常</el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="电控柜：" prop="cabinet">
                <el-radio-group v-model="formData.cabinet+''" disabled>
                  <el-radio label="1">正常</el-radio>
                  <el-radio label="2">异常</el-radio>
                </el-radio-group>
              </el-form-item>
            </div>
            <div class="stitless">主要处理单元</div>
            <el-form-item label="预处理：" prop="pretreatment">
              <el-radio-group v-model="formData.pretreatment+''" disabled>
                <el-radio label="1">正常</el-radio>
                <el-radio label="2">异常</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="沉淀情况：" prop="precipitate">
              <el-radio-group v-model="formData.precipitate+''" disabled>
                <el-radio label="1">正常</el-radio>
                <el-radio label="2">异常</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="生化处理：" prop="biochemistry">
              <el-radio-group v-model="formData.biochemistry+''" disabled>
                <el-radio label="1">正常</el-radio>
                <el-radio label="2">异常</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="出水情况：" prop="out_water">
              <el-radio-group v-model="formData.out_water+''" disabled>
                <el-radio label="1">正常</el-radio>
                <el-radio label="2">异常</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="电表读数：" prop="electricity">
              <el-input v-model="formData.electricity" disabled></el-input>
            </el-form-item>
            <el-form-item label="累积读数：" prop="electricity_sum">
              <el-input v-model="formData.electricity_sum" disabled></el-input>
            </el-form-item>
            <el-form-item label="异常情况：">
              <div class="el-contents">{{formData.exception}}</div>
            </el-form-item>
          </div>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      formData: {}
    };
  },
  created() {
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
        params: { id: this.$route.query.id, type: 2 }
      }).then(res => {
        let data = res.data;
        if (data.status == 1) {
          this.formData = data.data;
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
</style>