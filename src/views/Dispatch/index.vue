<template>
  <div class="app-pages">
    <header class="app-top-bar">
      <a class="icons icon-back pull-left"></a>
      <h1 class="titles">运维派单</h1>
      <a class="icons icon-add pull-right" @click="addShowDialog"></a>
    </header>
    <div class="app-content">
      <el-card class="dis-box-card box-card">
        <div slot="header" class="clearfix">
          <span style="font-size:18px;">已完成</span>
          <el-button class="mores" type="text" @click="getListDetail(1)">
            查看更多
            <i class="icon-rights"></i>
          </el-button>
        </div>
        <div class="items">
          <div class="item">
            <p>
              <span class="pull-left">东陈镇汤湾村站</span>
              <span class="type type1">设备维修</span>
            </p>
            <p>
              <em class="pull-left">完成时间：2020-08-20</em>
              <em class="pull-right">维保人：张三</em>
            </p>
          </div>
          <div class="item">
            <p>
              <span class="pull-left">东陈镇汤湾村站</span>
              <span class="type type2">例行维保</span>
            </p>
            <p>
              <em class="pull-left">完成时间：2020-08-20</em>
              <em class="pull-right">维保人：张三</em>
            </p>
          </div>
          <div class="item">
            <p>
              <span class="pull-left">东陈镇汤湾村站</span>
              <span class="type type3">运行检查</span>
            </p>
            <p>
              <em class="pull-left">完成时间：2020-08-20</em>
              <em class="pull-right">维保人：张三</em>
            </p>
          </div>
        </div>
      </el-card>

      <el-card class="dis-box-card box-card">
        <div slot="header" class="clearfix">
          <span style="font-size:18px;">已完成</span>
          <el-button class="mores" type="text" @click="getListDetail(0)">
            查看更多
            <i class="icon-rights"></i>
          </el-button>
        </div>
        <div class="items">
          <div class="item">
            <p>
              <span class="pull-left">东陈镇汤湾村站</span>
              <span class="type type1">日常巡检</span>
            </p>
            <p>
              <em class="pull-left">完成时间：2020-08-20</em>
              <em class="pull-right">维保人：张三</em>
            </p>
          </div>
          <div class="item">
            <p>
              <span class="pull-left">东陈镇汤湾村站</span>
              <span class="type type3">日常巡检</span>
            </p>
            <p>
              <em class="pull-left">完成时间：2020-08-20</em>
              <em class="pull-right">维保人：张三</em>
            </p>
          </div>
          <div class="item">
            <p>
              <span class="pull-left">东陈镇汤湾村站</span>
              <span class="type type2">日常巡检</span>
            </p>
            <p>
              <em class="pull-left">完成时间：2020-08-20</em>
              <em class="pull-right">维保人：张三</em>
            </p>
          </div>     <div class="item">
            <p>
              <span class="pull-left">东陈镇汤湾村站</span>
              <span class="type type2">日常巡检</span>
            </p>
            <p>
              <em class="pull-left">完成时间：2020-08-20</em>
              <em class="pull-right">维保人：张三</em>
            </p>
          </div>
        </div>
      </el-card>
    </div>
    <el-dialog
      width="100%"
      class="dialog-dispatch"
      :title="this.diaLogTitle"
      :close-on-click-modal="false"
      :visible.sync="diaLogFormVisible"
    >
      <el-form
        :model="formData"
        :rules="formRules"
        ref="formRulesRef"
        class="el-form-custom"
        label-width="100px"
      >
        <div class="el-form-item-inlines">
          <el-form-item label="选择站点：" prop="sid">
            <el-cascader
              v-model="formData.sid"
              :options="stationOptions"
              :props="stationOptionsProps"
            ></el-cascader>
          </el-form-item>
          <el-form-item label="派单事项：" prop="type">
            <el-select v-model="formData.type" placeholder="请选择设备类型">
              <el-option label="设备维修" :value="1"></el-option>
              <el-option label="例行维保" :value="2"></el-option>
              <el-option label="运行检查" :value="3"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="指派人员：" prop="assigner_id">
            <el-select
              v-model="formData.assigner_id"
              filterable
              placeholder="请选择 或搜索"
              @change="userChange($event)"
            >
              <el-option
                v-for="item in userList"
                :key="item.id"
                :label="item.name"
                :value="item.id"
              ></el-option>
            </el-select>
          </el-form-item>
          <!-- <el-form-item label="人员职位：">
            <el-input v-model="formData.role" autocomplete="off" disabled></el-input>
          </el-form-item>-->
          <el-form-item label="手机号码：">
            <el-input v-model="formData.phone" autocomplete="off" disabled></el-input>
          </el-form-item>
          <!-- <el-form-item label="指派时间：" prop="assign_time">
            <el-date-picker v-model="formData.assign_time" type="date" placeholder="选择日期"></el-date-picker>
          </el-form-item>-->
        </div>
        <el-form-item label="维修内容：" prop="content">
          <el-input type="textarea" v-model="formData.content" rows="3"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="addEvent">确 定</el-button>
        <el-button type="info" @click="diaLogFormVisible = false" plain>取 消</el-button>
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
    };
  },
  created() {},
  methods: {
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
    getListDetail(val){
          this.$router.push({
        path: "/dispatch/list",
        query: {
          id: val
        }
      });
    }
    // getChildStationList() {
    //   let name = this.searchVillageName;
    //   this.request({
    //     url: "/station/getChildStationLists",
    //     method: "get",
    //     params: { name }
    //   }).then(response => {
    //     let data = response.data;
    //     if (data.status == 1) {
    //       this.childStationList = data.data;
    //     }
    //   });
  }
};
</script>

<style>
.dis-box-card {
  margin: 15px;
  border-radius: 6px;
}
.dis-box-card .mores {
  float: right;
  padding: 3px 0;
  color: #666;
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
  background: #40d2fd;
}
.dis-box-card .type2 {
  background: #66cc00;
}
.dis-box-card .type3 {
  background: #cc9900;
}

.dialog-dispatch{margin: 15px;}
.dialog-dispatch .el-dialog__footer{text-align: center; overflow: hidden;}
.dialog-dispatch .el-dialog__footer button:first-child{margin-right:30px ;}
</style>