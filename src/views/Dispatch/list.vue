<template>
  <div class="app-pages">
    <header class="app-top-bar">
      <a class="icons icon-back pull-left" @click="backURL"></a>
      <h1 class="titles">{{pageTitle}}</h1>
    </header>
    <div class="app-content">
      <div class="app-content-rows">
        <div class="app-table">
          <el-table :data="dataList" size="mini">
            <el-table-column label="序号" type="index">
              <!-- <template slot-scope="scope">{{scope.$index+(page_cur - 1) * page_size + 1}}</template> -->
            </el-table-column>
            <el-table-column prop="station_name" label="维保站点" class-name="nowrap"></el-table-column>
            <el-table-column prop="type" label="维保事项">
              <template slot-scope="scope">
                <span v-if="scope.row.type==1">设备维修</span>
                <span v-else-if="scope.row.type==2">例行维保</span>
                <span v-else>运行检查</span>
              </template>
            </el-table-column>
            <el-table-column label="指派时间" class-name="linewrap">
              <template slot-scope="scope">
                <span>{{scope.row.assign_time|formatGetDate}}</span>
              </template>
            </el-table-column>
            <el-table-column prop="assigner" label="指派人" class-name="nowrap"></el-table-column>
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
      pageTitle: "已完成",
      page_cur: 1,
      page_data_total: 0,
      page_size: 20,
      page_total: 0,
      dataList: []
    };
  },
  created() {
    let getStatus = this.$route.query.status;
    if (getStatus == 1) {
      this.pageTitle = "未完成";
    }
    this.getDataList();
  },
  methods: {
    backURL() {
      this.$router.go(-1); //返回上一层
    },
    getDataList() {
      let page = this.page_cur;
      let status = this.$route.query.status;
      let limit = 20;
      this.request({
        url: "/assign/getAssignPages",
        method: "get",
        params: { page, status }
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
    //end
  }
};
</script>
<style>
</style>