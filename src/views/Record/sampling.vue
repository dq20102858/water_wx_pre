<template>
  <div class="app-pages">
    <header class="app-top-bar">
      <h1 class="titles">报表统计</h1>
      <a class="icons icon-add pull-right" @click="addShowEvent"></a>
    </header>
    <div class="app-content">
      <div class="app-tab">
        <div class="item">
          <span @click="tabSelect(1)">维护记录</span>
        </div>
        <div class="item">
          <span @click="tabSelect(2)">运行记录</span>
        </div>
        <div class="item">
          <span @click="tabSelect(3)" class="active">采样化验单</span>
        </div>
      </div>
      <div class="app-content-rows">
        <div class="app-table">
          <el-table :data="dataList" size="mini" @row-click="tableRowDetails">
            <el-table-column label="序号" width="60">
              <template slot-scope="scope">{{scope.$index+(page_cur - 1) * page_size + 1}}</template>
            </el-table-column>
            <el-table-column label="站点名" prop="station_name" class-name="nowrap"></el-table-column>
            <el-table-column label="采样日期"  width="90">
              <template slot-scope="scope">{{scope.row.create_time|formatGetDate}}</template>
            </el-table-column>
            <el-table-column prop="user" label="采样人"></el-table-column>
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
    };
  },
  created() {
    this.getDataList();
  },
  methods: {
    tabSelect(type) {
      if (type == 2) {
        this.$router.push("/record/operation");
      } else if (type == 3) {
        this.$router.push("/record/sampling");
      } else {
        this.$router.push("/record");
      }
    },
    getDataList() {
      let page = this.page_cur;
      let type = this.tabType;
      this.request({
        url: "/record/getRecordRepairPages",
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
    addShowEvent() {
      this.$router.push("/record/samplingedit");
    },
    tableRowDetails(row) {
      this.$router.push({
        path: "/record/samplingdetail",
        query: {
          id: row.id
        }
      });
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
.el-form-item-samp .stitless {
  overflow: hidden;
  text-align: center;
  display: block;
}
.el-form-item-samp .samp-item {
  display: flex;
  justify-content: flex-start;
  flex-flow: row wrap;
}
.el-form-item-samp .el-form-item {
  width: 33.2%;
  display: inherit;
}
.el-form-item-samp .el-input {
  display: inline-block;
  padding: 0 5px;
  min-width: 50px;
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