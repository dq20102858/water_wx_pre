<template>
  <div class="app-pages">
    <header class="app-top-bar">
      <span class="icons icon-back pull-left" @click="backURL"></span>
      <h1 class="titles">污水处理站采样化验记录表</h1>
    </header>
    <div class="app-content">
      <div class="app-form">
        <el-form
          :model="formData"
          class="el-form-custom"
          label-width="90px"
        >
          <el-form-item label="选择站点：" prop="sid">
            <el-input v-model="formData.station_name" disabled></el-input>
          </el-form-item>
          <el-form-item label="采样人：" prop="user_id" label-width="90px">
            <el-input v-model="formData.user" disabled></el-input>
          </el-form-item>
          <div class="stitlesss">进水</div>
          <el-form-item label="PH：" prop="in_ph">
            <el-input v-model="formData.in_ph" disabled></el-input>
          </el-form-item>
          <el-form-item label="COD：" prop="in_cod">
            <el-input v-model="formData.in_cod" disabled></el-input>
          </el-form-item>
          <div class="el-form-item-sampd">
            <el-form-item label="TP：" prop="in_tp">
              <el-input v-model="formData.in_tp" disabled></el-input>
            </el-form-item>
            <el-form-item label="TN：" prop="in_tn">
              <el-input v-model="formData.in_tn" disabled></el-input>
            </el-form-item>
            <el-form-item label="NH3-N：" prop="in_nh3">
              <el-input v-model="formData.in_nh3" disabled></el-input>
            </el-form-item>
          </div>
          <div class="stitlesss">出水</div>
          <el-form-item label="PH：" prop="out_ph">
            <el-input v-model="formData.out_ph" disabled></el-input>
          </el-form-item>
          <el-form-item label="COD：" prop="out_cod">
            <el-input v-model="formData.out_cod" disabled></el-input>
          </el-form-item>
          <el-form-item label="TP：" prop="out_tp">
            <el-input v-model="formData.out_tp"  disabled></el-input>
          </el-form-item>
          <el-form-item label="TN：" prop="out_tn">
            <el-input v-model="formData.out_tn" disabled></el-input>
          </el-form-item>
          <el-form-item label="NH3-N：" prop="out_nh3">
            <el-input v-model="formData.out_nh3" disabled></el-input>
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
        params: { id: this.$route.query.id, type: 3 }
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
.stitlesss {
  overflow: hidden;
  text-align: center;
  display: block;
  color: #1386ff;
  font-size: 16px;
  font-weight: 700;
  padding-top: 0px;
  padding-bottom: 20px;
}

</style>