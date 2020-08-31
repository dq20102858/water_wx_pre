<template>
  <div class="app-pages">
    <header class="app-top-bar">
      <h1 class="titles">报表统计</h1>
      <a class="icons icon-add pull-right" @click="addShowEvent"></a>
    </header>
    <div class="app-content">
      <div class="app-tab">
        <div class="item">
          <span @click="tabSelect(1)" class="active">维护记录</span>
        </div>
        <div class="item">
          <span @click="tabSelect(2)">运行记录</span>
        </div>
        <div class="item">
          <span @click="tabSelect(3)">采样化验单</span>
        </div>
      </div>
      <div class="app-content-rows">
        <div class="app-table">
          <el-table :data="dataList" size="mini" @row-click="tableRowDetails">
            <el-table-column label="序号" width="50" class-name="nowrap">
              <template slot-scope="scope">{{scope.$index+(page_cur - 1) * page_size + 1}}</template>
            </el-table-column>
            <el-table-column label="站点名" prop="station_name" class-name="nowrap"></el-table-column>
            <!-- <el-table-column prop="is_problem" label="是否异常">
              <template slot-scope="scope">
                <span v-if="scope.row.is_problem==1">是</span>
                <span v-if="scope.row.is_problem==0">否</span>
              </template>
            </el-table-column>-->
            <el-table-column prop="user" label="维保人"></el-table-column>
            <el-table-column label="维保日期" width="90">
              <template slot-scope="scope">{{scope.row.create_time|formatGetDate}}</template>
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

    <el-drawer
      title="我是标题"
      :visible.sync="drawer"
      ref="drawer"
      :withHeader="false"
      size="100%"
      direction="rtl"
    >
      <div class="app-pages">
        <header class="app-top-bar">
          <span class="icons icon-back pull-left" @click="$refs.drawer.closeDrawer()"></span>
          <h1 class="titles">污水处理站维护记录表</h1>
        </header>
        <div class="app-content">
          <div class="app-form" style="margin:0;">
            <el-form :model="formData" class="el-form-custom" label-width="100px">
              <el-form-item label="选择站点：" prop="sid" label-width="90px">
                <el-input v-model="formData.station_name" disabled></el-input>
              </el-form-item>
              <el-form-item label="维护人：" prop="user_id" label-width="90px" ref="user_id">
                <el-input v-model="formData.user" disabled></el-input>
              </el-form-item>
              <div class="stitless">设备巡检内容、情况、及处理情况说明</div>
              <div class="el-checks app-dis-checkbox">
                <el-form-item label="1.维护预备：" prop="prepare">
                  <el-checkbox-group v-model="formData.prepare">
                    <el-checkbox
                      v-for="item in prepareList"
                      :label="item.id+''"
                      :key="item.id"
                      disabled
                    >{{item.value}}</el-checkbox>
                  </el-checkbox-group>
                </el-form-item>
                <el-form-item label="2.系统检查：" prop="sys_check">
                  <el-checkbox-group v-model="formData.sys_check">
                    <el-checkbox
                      v-for="item in sysCheckList"
                      :label="item.id+''"
                      :key="item.id"
                      disabled
                    >{{item.value}}</el-checkbox>
                  </el-checkbox-group>
                </el-form-item>
                <el-form-item label="3.仪器检查：" prop="device_check">
                  <el-checkbox-group v-model="formData.device_check">
                    <el-checkbox
                      v-for="item in deviceCheckkList"
                      :label="item.id+''"
                      :key="item.id"
                      disabled
                    >{{item.value}}</el-checkbox>
                  </el-checkbox-group>
                </el-form-item>
                <el-form-item label="4.周期维护：" prop="period_check">
                  <el-checkbox-group v-model="formData.period_check">
                    <el-checkbox
                      v-for="item in periodCheck"
                      :label="item.id+''"
                      :key="item.id"
                      disabled
                    >{{item.value}}</el-checkbox>
                  </el-checkbox-group>
                </el-form-item>
              </div>
              <div class="samptitles">5.其他情况</div>
              <el-form-item label="更换耗材：">
                <div class="el-contents">{{formData.replace_material}}</div>
              </el-form-item>
              <el-form-item label="离站时间：" prop="leave_time">
                <el-date-picker
                  v-model="formData.leave_time"
                  type="datetime"
                  placeholder="选择日期"
                  disabled
                ></el-date-picker>
              </el-form-item>
              <el-form-item label="服务耗时：" prop="keep_time" class="keeptime">
                <el-input v-model="formData.keep_time" disabled>
                  <template slot="append">小时</template>
                </el-input>
              </el-form-item>
              <el-form-item label="异常情况：">
                <div class="el-contents">{{formData.exception}}</div>
              </el-form-item>
              <el-form-item label="备注：">
                <div class="el-contents">{{formData.remark}}</div>
              </el-form-item>
            </el-form>
          </div>
        </div>
      </div>
    </el-drawer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      drawer: false,
      tabType: 1,
      page_cur: 1,
      page_data_total: 0,
      page_size: 20,
      page_total: 0,
      dataList: [],

      formData: [],
      prepareList: [],
      sysCheckList: [],
      deviceCheckkList: [],
      periodCheck: []
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
      this.$router.push("/record/edit");
    },
    tableRowDetails(row) {
      this.drawer = true;
      this.getConfig();
      this.detailEvent(row.id);
      // this.$router.push({
      //   path: "/record/detail",
      //   query: {
      //     id: row.id
      //   }
      // });
    },
    detailEvent(id) {
      this.request({
        url: "/record/getRecordDetail",
        method: "get",
        params: { id: id, type: 1 }
      }).then(res => {
        let data = res.data;
        if (data.status == 1) {
          this.formData = data.data;
        }
      });
    },
    getConfig() {
      this.request({
        url: "/record/getConfig",
        method: "get"
      }).then(response => {
        let data = response.data;
        if (data.status == 1) {
          this.prepareList = data.data.prepare; //维护预备
          this.sysCheckList = data.data.sys_check; //系统检查
          this.deviceCheckkList = data.data.device_check; //仪器检查
          this.periodCheck = data.data.period_check; //周期维护
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
.el-drawer {
  overflow: scroll;
}
.el-drawer .stitless {
  overflow: hidden;
  text-align: center;
  display: block;
  color: #1386ff;
  font-size: 16px;
  font-weight: 700;
  padding-top: 20px;
  padding-bottom: 20px;
}
.el-drawer .el-checks .el-form-item {
  margin-bottom: 16px;
}
.el-drawer .samptitles {
  padding: 20px 0 15px 15px;
  color: #1d397a;
}
.el-drawer .keeptime .el-input-group__append {
  border-color: #e4e7ed;
}
</style>