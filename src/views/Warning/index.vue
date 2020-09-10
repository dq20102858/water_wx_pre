<template>
  <div class="app-pages">
    <header class="app-top-bar">
      <h1 class="titles">告警列表</h1>
    </header>
    <div class="app-content">
      <div class="app-tab">
        <div class="item">
          <span @click="tabSelect(2)" :class="tabType == 2 ? 'active':''">设备告警</span>
        </div>
        <div class="item">
          <span @click="tabSelect(1)" :class="tabType == 1 ? 'active':''">水质告警</span>
        </div>
        <div class="item">
          <span @click="tabSelect(3)" :class="tabType == 3 ? 'active':''">入侵告警</span>
        </div>
      </div>
      <div class="app-content-rows">
        <div class="app-table">
          <el-table :data="dataList" size="mini" @row-click="tableRowDetails">
            <el-table-column label="序号" width="50">
              <template slot-scope="scope">{{scope.$index+(page_cur - 1) * page_size + 1}}</template>
            </el-table-column>
            <el-table-column label="设备" class-name="nowrap" v-if="this.tabType==2" width="60">
              <template slot-scope="scope">
                <span v-if="scope.row.type==1">风机</span>
                <span v-if="scope.row.type==2">水泵</span>
                <span v-if="scope.row.type==3">紫外灯</span>
                <span v-if="scope.row.type==4">PLC</span>
              </template>
            </el-table-column>
            <el-table-column prop="type" label="类型" v-if="this.tabType==1" width="60">
              <template slot-scope="scope">
                <span v-if="scope.row.type==1">PH</span>
                <span v-else-if="scope.row.type==2">DO</span>
                <span v-else>液位</span>
              </template>
            </el-table-column>
            <el-table-column label="发生位置" prop="address" class-name="nowraps"></el-table-column>
            <el-table-column label="告警时间" width="90" align="center">
              <template slot-scope="scope">
                <span>{{scope.row.create_time|formatDateTime}}</span>
              </template>
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
      title="告警详情"
      :visible.sync="diaLogDetailVisible"
      :modal-append-to-body="false"
      :close-on-click-modal="false"
      :show-close="false"
      center
    >
      <el-form class="el-form-custom" label-width="100px">
        <el-form-item label="告警时间：">
          <el-input v-model="formDetailData.create_time" autocomplete="off" disabled></el-input>
        </el-form-item>
        <el-form-item label="水质类型：" v-if="tabType ==1">
          <el-input v-model="formDetailData.typeNameB" autocomplete="off" disabled></el-input>
        </el-form-item>
        <el-form-item label="设备类型：" v-if="tabType ==2">
          <el-input v-model="formDetailData.typeName" autocomplete="off" disabled></el-input>
        </el-form-item>
        <el-form-item label="发生位置：">
          <el-input v-model="formDetailData.address" autocomplete="off" disabled></el-input>
        </el-form-item>
        <el-form-item label="告警原因：" v-if="tabType !=3">
          <div class="el-contents">{{formDetailData.reason}}</div>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="diaLogDetailVisible = false">关闭</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      diaLogDetailVisible: false,
      formDetailData: [],
      tabType: 2,
      page_cur: 1,
      page_data_total: 0,
      page_size: 20,
      page_total: 0,
      dataList: []
    };
  },
  created() {
    this.getDataList();
  },
  methods: {
    tabSelect(type) {
      this.tabType = type;
      this.getDataList();
    },
    getDataList() {
      let page = this.page_cur;
      let type = this.tabType;
      this.request({
        url: "/alert/getAlertPages",
        method: "get",
        params: { page, type }
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
    tableRowDetails(row) {
      // if (row.is_read == 0) {
      //   this.request({
      //     url: "/alert/updateRead",
      //     method: "post",
      //     data: { id: row.id, type: this.tabType }
      //   }).then(res => {
      //     let data = res.data;
      //     if (data.status == 1) {
      //       this.getDataList();
      //     }
      //   });
      // }
      this.diaLogDetailVisible = true;
      this.formDetailData.address = row.address;
      this.formDetailData.create_time = row.create_time;
      this.formDetailData.reason = row.reason;
      // this.formDetailData.type = row.type;
      if (row.type == 1) {
        this.formDetailData.typeName = "风机";
        this.formDetailData.typeNameB = "PH";
      } else if (row.type == 2) {
        this.formDetailData.typeName = "水泵";
        this.formDetailData.typeNameB = "DO";
      } else if (row.type == 3) {
        this.formDetailData.typeName = "紫外灯";
        this.formDetailData.typeNameB = "液位";
      } else {
        this.formDetailData.typeName = "PLC";
      }
    }
  }
};
</script>
<style>
.nums {
  padding: 3px 5px;
}
.cirshow {
  background: #ff3856;
  color: #fff;
  padding: 3px 5px;
  border-radius: 3px;
}
</style>