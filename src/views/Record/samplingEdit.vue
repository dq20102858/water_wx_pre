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
          :rules="formRules"
          ref="formRulesRef"
          class="el-form-custom"
          label-width="90px"
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
          <el-form-item label="采样人：" prop="user_id" label-width="90px">
            <el-select v-model="formData.user_id" placeholder="请选择采样人">
              <el-option
                v-for="item in this.userList"
                :key="item.id"
                :label="item.name"
                :value="item.id"
              ></el-option>
            </el-select>
          </el-form-item>
          <div class="stitless">进水</div>
          <el-form-item label="PH：" prop="in_ph">
            <el-input v-model="formData.in_ph" maxlength="6"></el-input>
          </el-form-item>
          <el-form-item label="COD：" prop="in_cod">
            <el-input v-model="formData.in_cod" maxlength="6"></el-input>
          </el-form-item>
          <div class="el-form-item-sampd">
            <el-form-item label="TP：" prop="in_tp">
              <el-input v-model="formData.in_tp" maxlength="6"></el-input>
            </el-form-item>
            <el-form-item label="TN：" prop="in_tn">
              <el-input v-model="formData.in_tn" maxlength="6"></el-input>
            </el-form-item>
            <el-form-item label="NH3-N：" prop="in_nh3">
              <el-input v-model="formData.in_nh3" maxlength="6"></el-input>
            </el-form-item>
          </div>
          <div class="stitless">出水</div>
          <el-form-item label="PH：" prop="out_ph">
            <el-input v-model="formData.out_ph" maxlength="6"></el-input>
          </el-form-item>
          <el-form-item label="COD：" prop="out_cod">
            <el-input v-model="formData.out_cod" maxlength="6"></el-input>
          </el-form-item>
          <el-form-item label="TP：" prop="out_tp">
            <el-input v-model="formData.out_tp" maxlength="6"></el-input>
          </el-form-item>
          <el-form-item label="TN：" prop="out_tn">
            <el-input v-model="formData.out_tn" maxlength="6"></el-input>
          </el-form-item>
          <el-form-item label="NH3-N：" prop="out_nh3">
            <el-input v-model="formData.out_nh3" maxlength="6"></el-input>
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
      tabType: 3,
      page_cur: 1,
      page_data_total: 0,
      page_size: 20,
      page_total: 0,
      dataList: [],
      diaLogFormVisible: false,
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
            message: "请选择采样人",
            trigger: "change"
          }
        ],
        in_ph: [
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
        in_cod: [
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
        in_tp: [
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
        in_tn: [
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
        in_nh3: [
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
        out_ph: [
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
        out_cod: [
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
        out_tp: [
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
        out_tn: [
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
        out_nh3: [
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
      this.$refs["formRulesRef"].validate(valid => {
        if (valid) {
          let data = this.formData;
          data.sid = this.formData.sid[1];
          data.type = 3;
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
.el-form-item-samp .samp-item {
  display: flex;
  justify-content: flex-start;
  flex-flow: row wrap;
}
.el-form-item-samp .el-form-item {
  float: left;
  width: 50%;
}
.el-form-item-samp .el-input {
  display: inline-block;
  padding: 0 5px;
  text-align: center;
  border-radius: 0;
  border: 0;
  min-width: 100px;
}
.el-form-item-samp .el-input__inner {
  border-radius: 0;
  border: none;
  border-bottom: 1px #9db9fa solid !important;
  color: #338ff6 !important;
  padding: 0 5px;
}
.el-form-item-samp .el-form-item__label {
  float: none;

  display: inline-block;
  white-space: nowrap;
  padding: 0 0 0 5px;
}
.el-form-item-samp .el-form-item__content {
  display: inline-block;
  vertical-align: top;
}
</style>