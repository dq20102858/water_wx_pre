<template>
  <div class="app-pages">
    <header class="app-top-bar">
      <h1 class="titles">考勤统计</h1>
      <a class="icons icon-add pull-right" @click="addDialogEvent"></a>
    </header>
    <div class="app-content">
      <div class="app-search">
        <el-input
          v-model="searchName"
          prefix-icon="el-icon-search"
          class="inline-input"
          placeholder="请输入打卡人名字"
          @select="searchNameEvent($event)"
          clearable
        ></el-input>
      </div>
      <div class="app-content-rows">
        <div class="app-table">
          <el-table :data="dataList" size="mini" @row-click="tableRowDetails">
            <el-table-column label="序号" type="index"></el-table-column>
            <el-table-column prop="address" label="站点名"></el-table-column>
            <el-table-column label="开始时间">
              <template slot-scope="scope">{{scope.row.start_time|formatDateTime}}</template>
            </el-table-column>
            <el-table-column label="结束时间">
              <template slot-scope="scope">{{scope.row.end_time|formatDateTime}}</template>
            </el-table-column>
          </el-table>
          <div class="app-pagination">
            <el-pagination
              class="pagination"
              v-if="dataList.length !== 0"
              layout="prev, pager, next"
              :page-size="this.page_size"
              :current-page="this.page_cur"
              :total="this.page_data_total"
              @current-change="pageChange"
            ></el-pagination>
          </div>
        </div>
      </div>
    </div>
    <el-dialog
      width="90%"
      title="打卡详情"
      :visible.sync="diaLogDetailVisible"
      :close-on-click-modal="false"
      :show-close="false"
      center
    >
      <el-form class="el-form-custom" label-width="100px">
        <el-form-item label="打卡人：">
          <el-input v-model="formDetailData.user" autocomplete="off" disabled></el-input>
        </el-form-item>
        <el-form-item label="开始时间：">
          <el-input v-model="formDetailData.start_time" autocomplete="off" disabled></el-input>
        </el-form-item>
        <el-form-item label="结束时间：">
          <el-input v-model="formDetailData.end_time" autocomplete="off" disabled></el-input>
        </el-form-item>
        <el-form-item label="打卡地址：">
          <el-input type="textarea" v-model="formDetailData.address" rows="3" disabled></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="info" plain @click="diaLogDetailVisible = false">关闭</el-button>
      </div>
    </el-dialog>
    <el-dialog
      width="90%"
      top="40%"
      title="提示"
      :visible.sync="dialogVisible"
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
      formDetailData: [],
      searchName: "",
      page_cur: 1,
      page_data_total: 0,
      page_size: 20,
      page_total: 0,
      dataList: []
    };
  },
  created() {
    //this.getSign();
    this.getDataList();
  },
  methods: {
    getDataList() {
              debugger
              let ss=window.localStorage.getItem('sessionCode');
      let page = this.page_cur;
      let type = this.searchType;
      let status = this.searchStatus;
      let sid = this.chlidStationId;
      let assigner_id = this.searchAssignerId;
      let start_time = this.searchStartTime;
      let end_time = this.searchEndTime;
      this.request({
        url: "/clock/getClockPages",
        method: "get",
        params: { page, sid, assigner_id, type, status, start_time, end_time, sessionCode:window.localStorage.getItem('sessionCode')}
      }).then(res => {

        let data = res.data;
        if (data.status == 1) {
          this.dataList = data.data.data;
          this.page_cur = parseInt(data.data.current_page);
          this.page_total = data.data.last_page;
          this.page_data_total = data.data.total;
          this.page_size = data.data.per_page;
        }
      });
    },
    pageChange(value) {
      this.page_cur = value;
      this.getDataList();
    },
    pageToFirst() {
      this.page_cur = 1;
      this.getDataList();
    },
    pageToLast() {
      this.page_cur = this.page_total;
      this.getDataList();
    },
    searchNameEvent() {
      this.page_cur = this.page_total;
      this.getDataList();
    },
    addTest() {},
    //扫码
    getSign() {
      let url = location.href.split("#")[0];
      this.request({
        url: "/weixin/getWeixinConfig",
        method: "get"
      }).then(res => {
        let jdata = res.data;
        if (jdata.status == 1) {
          let a = jdata.data;
          wx.config({
            debug: false,
            appId: jdata.appid,
            timestamp: jdata.timestamp,
            noncestr: jdata.noncestr,
            signature: jdata.signature,
            jsApiList: ["scanQRCode"]
          });
          wx.ready(() => {
            console.log("微信js-sdk配置成功");
          });
          wx.error(function(res) {
            console.log("微信js-sdk配置失败");
          });

          // timestamp	number

          // noncestr	string

          // jsapi_ticket	string

          // signature	string

          // appid	string
        }
      });
    },
    addDialogEvent() {
      this.request({
        url: "/clock/isCard",
        method: "get",
        params: { sid: 6 }
      }).then(response => {
        var res = response.data;
        console.log(res.data.is_card);
        // if (== 1) {

        // }
        // else
        // {

        // }
      });
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
    },
    tableRowDetails(row) {
      this.diaLogDetailVisible = true;
      this.formDetailData.user = row.user;
      this.formDetailData.start_time = row.start_time;
      this.formDetailData.end_time = row.end_time;
      this.formDetailData.address = row.address;
    }
  }
};
</script>
<style>
.dialiginfoa {
  font-weight: 700;
  text-align: center;
  display: block;
  margin: 0 auto;
  padding: 20px 0;
}
</style>