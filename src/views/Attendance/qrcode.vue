<template>
  <div class="app-pages">
    <header class="app-top-bar">
      <span class="icons icon-back pull-left" @click="backURL"></span>
      <h1 class="titles">考勤打卡</h1>
    </header>
    <div class="app-content" style="background: #fff;height: 100vh;">
      <div class="app-content-rows">
        <div class="qrcode">
          <i class="el-icon el-icon-success"></i>
          <div class="txts">
            <h3>扫码成功</h3>
            <p>XXX村地方村地方村地方村地方</p>
          </div>
          <div class="daka">
            <el-button type="primary" @click="dialogVisible = false">确定</el-button>
            <el-button type="info" plain @click="dialogVisible = false">重新开始</el-button>
          </div>
        </div>
      </div>
    </div>
    <el-dialog
      width="90%"
      top="40%"
      title="提示"
      :visible.sync="dialogVisible"
      :modal-append-to-body="false"
      :close-on-click-modal="false"
      :show-close="false"
      center
    >
      <span class="dialiginfoa">是否打卡后结束任务</span>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisible = false">确定</el-button>
        <el-button type="info" plain @click="dialogVisible = false">重新开始</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dialogVisible: false,
      diaLogDetailVisible: false,
      formDetailData: []
    };
  },
  created() {
    //this.getSign();
    this.getDataList();
  },
  methods: {
    backURL() {
      this.$router.go(-1); //返回上一层
    },
    addDialogEvent() {
      // this.request({
      //   url: "/clock/isCard",
      //   method: "get",
      //   params: { sid: 6 }
      // }).then(response => {
      //   var res = response.data;
      //   console.log(res.data.is_card);
      //   // if (== 1) {
      //   // }
      //   // else
      //   // {
      //   // }
      // });
    },
    addEvent() {
      //this.dialogVisible = true;
      let datas = {
        sid: 7,
        user_id: 17,
        // start_time: "2020-08-21 8:00:00",
        //end_time: "2020-08-21 11:20:30",
        is_end: 0,
        is_recard: 0
      };
      let data = datas;
      this.request({
        url: "/clock/addClock",
        method: "post",
        data
      }).then(response => {
        var data = response.data;
        if (data.status == 1) {
          this.$message({
            type: "success",
            message: "保存成功！"
          });
          this.getDataList();
        }
      });
    }
  }
};
</script>
<style>
.qrcode {
  text-align: center;
  padding-top: 50px;
}
.qrcode .el-icon {
  text-align: center;
  display: block;
  margin: 0 auto;
  font-size: 120px;
  color: #09ba08;
}
.qrcode .txts {  
  color: #09ba08;
  margin: 10px 30px 30px 30px;
  font-size: 16px;
  text-align: center;
  line-height: 33px;
}
.qrcode .txts p {
  color: #666;
}
.qrcode .daka {
  margin-top: 100px;
}
.qrcode button{width: 100px;}
</style>