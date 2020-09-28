<template>
  <div class="app-pages">
    <header class="app-top-bar">
      <h1 class="titles">考勤统计</h1>
      <a class="icons icon-add pull-right" @click="scanQRCodeEvent"></a>
    </header>
    <div class="app-content">
      <div class="app-search"  v-if="this.roles ==1">
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
              <template slot-scope="scope">{{
                scope.$index + (page_cur - 1) * page_size + 1
              }}</template>
            </el-table-column> 
            <el-table-column   v-if="this.roles ==1"
              prop="user"
              label="考勤人"
              class-name="nowraps"
            ></el-table-column>
            <el-table-column
              prop="address"
              label="站点名"
              class-name="nowraps"
            ></el-table-column>
            <el-table-column label="开始时间" width="90" align="center">
              <template slot-scope="scope">{{
                scope.row.start_time | formatDateTime
              }}</template>
            </el-table-column>
            <el-table-column label="结束时间" width="90" align="center">
              <template slot-scope="scope">{{
                scope.row.end_time | formatDateTime
              }}</template>
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
          <el-input
            v-model="formDetailData.user"
            autocomplete="off"
            disabled
          ></el-input>
        </el-form-item>
        <el-form-item label="开始时间：">
          <el-input
            v-model="formDetailData.start_time"
            autocomplete="off"
            disabled
          ></el-input>
        </el-form-item>
        <el-form-item label="结束时间：">
          <el-input
            v-model="formDetailData.end_time"
            autocomplete="off"
            disabled
          ></el-input>
        </el-form-item>
        <el-form-item label="打卡地址：">
          <div class="el-contents">{{ formDetailData.address }}</div>
          <!-- <el-input type="textarea" v-model="formDetailData.address" rows="3" disabled></el-input> -->
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="diaLogDetailVisible = false"
          >关闭</el-button
        >
      </div>
    </el-dialog>
    <el-dialog
      width="90%"
      top="40%"
      :title="stationName"
      :visible.sync="dialogEventVisible"
      :modal-append-to-body="false"
      :close-on-click-modal="false"
      center
    >
      <span class="dialiginfoa">是否打卡后结束任务</span>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="addClockOne(1)">确定</el-button>
        <el-button type="info" plain @click="addClockOne(2)"
          >重新开始</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>
<script>
import Cookies from "js-cookie";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      dialogEventVisible: false,
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
     computed: {
    ...mapGetters(["token", "roles"])
  },
  created() {
    this.getDataList();
  },
  mounted() {},
  methods: {
    getDataList() {
      let page = this.page_cur;
      let name = this.searchName;
      this.request({
        url: "/clock/getClockPages",
        method: "get",
        params: { page, name }
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
    dialogEvent() {
      this.dialogEventVisible = true;
    },
    addClockOne(flag) {
      let sid = this.stationId;
      let user_id = Cookies.get("Admin-Token");
      let is_end = 0;
      let is_recard = 0;
      if (flag == 1) {
        is_end = 1;
      }
      if (flag == 2) {
        is_recard = 1;
      }
      // let jsond = {
      //   sid: sid,
      //   user_id: user_id,
      //   is_end: is_end,
      //   is_recard: is_recard
      // };
      //alert(JSON.stringify(jsond));
      this.request({
        url: "/clock/addClock",
        method: "post",
        data: {
          sid: sid,
          user_id: user_id,
          is_end: is_end,
          is_recard: is_recard
        }
      }).then(response => {
        var data = response.data;
        if (data.status == 1) {
          this.dialogEventVisible = false;
          this.$message({
            type: "success",
            message: "打卡成功！"
          });
          this.getDataList();
        }
      });
    },
    //扫码
    scanQRCodeEvent() {
      let that = this;
      // let sid = 6;
      // let sname = "中南新村";
      // this.request({
      //   url: "/clock/isCard",
      //   method: "get",
      //   params: { sid: sid }
      // }).then(response => {
      //   var data = response.data;
      //   if (data.status == 1) {
      //     if (data.data.is_card == 1) {
      //       that.stationId = sid;
      //       that.stationName = sname;
      //       that.dialogEventVisible = true;
      //     } else {
      //       that.addClockOne(0);
      //     }
      //   }
      // });
      let url = location.href.split("#")[0];
      this.request({
        url: "/weixin/getWeixinConfig",
        method: "get",
        params: { url: url }
      }).then(res => {
        let jdata = res.data;
        if (jdata.status == 1) {
          wx.config({
            debug: false,
            appId: jdata.data.appid,
            timestamp: jdata.data.timestamp,
            nonceStr: jdata.data.noncestr,
            signature: jdata.data.signature,
            jsApiList: ["checkJsApi", "scanQRCode"]
          });
        }
      });
      wx.error(function(res) {
        this.$message.error("配置验证失败: " + JSON.stringify(res));
      });
      wx.ready(function() {
        wx.checkJsApi({
          jsApiList: ["scanQRCode"],
          success: function(res) {
            if (res.checkResult.scanQRCode === true) {
              wx.scanQRCode({
                needResult: 1, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
                scanType: ["qrCode", "barCode"],
                success: function(res) {
                  let data = res.resultStr;
                  if (data.indexOf("nxstationid") != -1) {
                    var obj = eval("(" + data + ")");
                    let sid = obj.nxstationid;
                    let sname = obj.name;
                    that
                      .request({
                        url: "/clock/isCard",
                        method: "get",
                        params: { sid: sid }
                      })
                      .then(response => {
                        var data = response.data;
                        if (data.status == 1) {
                          if (data.data.is_card == 1) {
                            that.stationId = sid;
                            that.stationName = sname;
                            that.dialogEventVisible = true;
                          } else {
                            that.stationId = sid;
                            that.addClockOne(0);
                          }
                        }
                      });
                  } else {
                    that.$message.error("请扫描正确的站点二维码");
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
</style>.
