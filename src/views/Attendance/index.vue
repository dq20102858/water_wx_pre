<template>
  <div class="app-pages">
    <header class="app-top-bar">
      <h1 class="titles">考勤统计</h1>
      <a class="icons icon-add pull-right" @click="scan"></a>
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
            <el-table-column label="序号" width="50">
              <template slot-scope="scope">{{scope.$index+(page_cur - 1) * page_size + 1}}</template>
            </el-table-column>
            <el-table-column prop="address" label="站点名" class-name="nowraps"></el-table-column>
            <el-table-column label="开始时间" width="90" align="center">
              <template slot-scope="scope">{{scope.row.start_time|formatDateTime}}</template>
            </el-table-column>
            <el-table-column label="结束时间" width="90" align="center">
              <template slot-scope="scope">{{scope.row.end_time|formatDateTime}}</template>
            </el-table-column>
          </el-table>
          <div class="app-pagers">
            <el-pagination
              background
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
      :modal-append-to-body="false"
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
          <div class="el-contents">{{formDetailData.address}}</div>
          <!-- <el-input type="textarea" v-model="formDetailData.address" rows="3" disabled></el-input> -->
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="diaLogDetailVisible = false">关闭</el-button>
      </div>
    </el-dialog>
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
  mounted() {
  },
  methods: {
    getDataList() {
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
        params: { page, sid, assigner_id, type, status, start_time, end_time }
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
    scan() {
      let url = location.href.split("#")[0];
      this.request({
        url: "/weixin/getWeixinConfig",
        method: "get",
        params: { url: url }
      }).then(res => {
        let jdata = res.data;
        if (jdata.status == 1) {
          let a = jdata.data;
          wx.config({
            debug: true,
            appId: jdata.data.appid,
            timestamp: jdata.data.timestamp,
            nonceStr: jdata.data.noncestr,
            signature: jdata.data.signature,
            jsApiList: ["checkJsApi", "scanQRCode"]
          });
        }
      });
      wx.error(function(res) {
        alert("出错了：" + res.errMsg); //这个地方的好处就是wx.config配置错误，会弹出窗口哪里错误，然后根据微信文档查询即可。
      });
      wx.ready(function() {
        wx.checkJsApi({
          jsApiList: ["scanQRCode"],
          success: function(res) {
            if (res.checkResult.scanQRCode === true) {
              wx.scanQRCode({
                needResult: 1, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
                scanType: ["qrCode", "barCode"], // 可以指定扫二维码还是一维码，默认二者都有
                success: function(res) {
                  let result = res.resultStr; // 当needResult 为 1 时，扫码返回的结果
                  alert(result + "_" + result.id + "_" + result.name);
                  let id = result.id;
                  let name = result.name;
                  if (val === undefined) {
                    this.$message.error("二维码错误");
                  } else {
                    this.$router.push({
                      path: "/attendance/qrcode",
                      query: {
                        id: id,
                        name: name
                      }
                    });
                  }
                }
              });
            } else {
              alert("抱歉，当前客户端版本不支持扫一扫");
            }
          },
          fail: function(res) {
            alert("fail" + res);
          }
        });
      });
    },
    addDialogEvent() {
      this.getSign();
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