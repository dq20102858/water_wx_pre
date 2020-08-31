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
            <el-cascader
              popper-class="app-cascader"
              v-model="formData.sid"
              :options="stationOptions"
              :props="stationOptionsProps"
              placeholder="请选择站点"
            ></el-cascader>
          </el-form-item>
          <el-form-item label="巡查人：" prop="user_id" label-width="90px">
            <el-select v-model="formData.user_id" placeholder="请选择巡查人">
              <el-option
                v-for="item in this.userList"
                :key="item.id"
                :label="item.name"
                :value="item.id"
              ></el-option>
            </el-select>
          </el-form-item>
          <div class="el-radioed">
            <div class="stitless">设备运行状况</div>
            <div class="el-form-item-inline">
              <el-form-item label="风机：" prop="fan">
                <el-radio-group v-model="formData.fan">
                  <el-radio label="1">正常</el-radio>
                  <el-radio label="2">异常</el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="紫外消毒机：" prop="disinfect">
                <el-radio-group v-model="formData.disinfect">
                  <el-radio label="1">正常</el-radio>
                  <el-radio label="2">异常</el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="湿地情况：" prop="wetland">
                <el-radio-group v-model="formData.wetland">
                  <el-radio label="1">正常</el-radio>
                  <el-radio label="2">异常</el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="各水泵：" prop="water_pump">
                <el-radio-group v-model="formData.water_pump">
                  <el-radio label="1">正常</el-radio>
                  <el-radio label="2">异常</el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="电控柜：" prop="cabinet">
                <el-radio-group v-model="formData.cabinet">
                  <el-radio label="1">正常</el-radio>
                  <el-radio label="2">异常</el-radio>
                </el-radio-group>
              </el-form-item>
            </div>
            <div class="stitless">主要处理单元</div>
            <el-form-item label="预处理：" prop="pretreatment">
              <el-radio-group v-model="formData.pretreatment">
                <el-radio label="1">正常</el-radio>
                <el-radio label="2">异常</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="沉淀情况：" prop="precipitate">
              <el-radio-group v-model="formData.precipitate">
                <el-radio label="1">正常</el-radio>
                <el-radio label="2">异常</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="生化处理：" prop="biochemistry">
              <el-radio-group v-model="formData.biochemistry">
                <el-radio label="1">正常</el-radio>
                <el-radio label="2">异常</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="出水情况：" prop="out_water">
              <el-radio-group v-model="formData.out_water">
                <el-radio label="1">正常</el-radio>
                <el-radio label="2">异常</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="电表读数：" prop="electricity">
              <el-input v-model="formData.electricity" maxlength="6"></el-input>
            </el-form-item>
            <el-form-item label="累积读数：" prop="electricity_sum">
              <el-input v-model="formData.electricity_sum" maxlength="6"></el-input>
            </el-form-item>
            <el-form-item label="异常情况：" prop="exception">
              <el-input type="textarea" v-model="formData.exception" maxlength="200"></el-input>
            </el-form-item>
          </div>
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
      formData: {},
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
            message: "请选择巡查人",
            trigger: "change"
          }
        ],
        fan: [
          {
            required: true,
            message: "请选择",
            trigger: "change"
          }
        ],
        water_pump: [
          {
            required: true,
            message: "请选择",
            trigger: "change"
          }
        ],
        disinfect: [
          {
            required: true,
            message: "请选择",
            trigger: "change"
          }
        ],
        cabinet: [
          {
            required: true,
            message: "请选择",
            trigger: "change"
          }
        ],
        wetland: [
          {
            required: true,
            message: "请选择",
            trigger: "change"
          }
        ],
        pretreatment: [
          {
            required: true,
            message: "请选择",
            trigger: "change"
          }
        ],
        biochemistry: [
          {
            required: true,
            message: "请选择",
            trigger: "change"
          }
        ],
        precipitate: [
          {
            required: true,
            message: "请选择",
            trigger: "change"
          }
        ],
        out_water: [
          {
            required: true,
            message: "请选择",
            trigger: "change"
          }
        ],
        electricity: [
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
        ],
        electricity_sum: [
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
        ],
        exception: [
          { min: 2, max: 200, message: "长度在2到200个字符", trigger: "blur" },
          {
            pattern: /(^\S+).*(\S+$)/,
            message: "开始和结尾不能有空格",
            trigger: "blur"
          }
        ]
      }
    };
  },
  created() {
    this.getStationList();
    this.getUsersList();
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
      this.$refs["formRulesRef"].validate(valid => {
        if (valid) {
          let data = this.formData;
          data.sid = this.formData.sid[1];
          data.type = 2;
          //console.log(this.formData);
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
          let that = this;
          that.$nextTick(() => {
            let isError = document.getElementsByClassName("is-error");
            isError[0].querySelector("input").focus();
          });
          return false;
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