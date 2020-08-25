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
          <el-table :data="dataList" size="mini">
            <el-table-column label="序号" width="60">
                  <template slot-scope="scope">
                  <span
                    :class="[scope.row.is_read!=1? 'cirshow' : 'nums']"
                  >{{scope.$index+(page_cur - 1) * page_size + 1}}</span>
                </template>
            </el-table-column>
            <el-table-column label="设备" class-name="nowrap"  v-if="this.tabType==2" width="70">
              <template slot-scope="scope">
                <span v-if="scope.row.type==1">风机</span>
                <span v-if="scope.row.type==2">水泵</span>
                <span v-if="scope.row.type==3">紫外灯</span>
                <span v-if="scope.row.type==4">PLC</span>
              </template>
            </el-table-column>
                <el-table-column prop="type" label="类型" v-if="this.tabType==1" width="40">
                <template slot-scope="scope">
                  <span v-if="scope.row.type==1">PH</span>
                  <span v-else-if="scope.row.type==2">DO</span>
                  <span v-else>液位</span>
                </template>
              </el-table-column>
            <el-table-column label="发生位置" prop="address" class-name="nowrap"></el-table-column>
            <el-table-column label="告警时间" class-name="linewrap">
              <template slot-scope="scope">
                <span>{{scope.row.create_time|formatDateTime}}</span>
              </template>
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
  </div>
</template>
<script>
export default {
  data() {
    return {
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
    }
  }
};
</script>
<style>
.nums {
  padding: 3px 5px;
}
.cirshow {
  background: #FF3856;
  color: #fff;
  padding: 3px 5px;
  border-radius: 3px;
}
</style>