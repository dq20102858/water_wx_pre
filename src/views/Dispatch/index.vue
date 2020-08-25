<template>
  <div class="app-pages">
    <header class="app-top-bar">
      <h1 class="titles">运维派单</h1>
      <a class="icons icon-add pull-right" @click="addShowDialog"></a>
    </header>
    <div class="app-content">
      <el-card class="dis-box-card box-card">
        <div slot="header" class="clearfix">
          <span style="font-size:14px;">已完成</span>
          <el-button class="mores" type="text" @click="getListDetail(2)">
            查看更多
            <i class="icon-rights"></i>
          </el-button>
        </div>
        <div class="items">
          <div class="item" v-for="item in statusOkList" :key="item.id">
            <p>
              <span class="pull-left">{{item.station_name}}</span>
              <span v-if="item.type==1" class="type type1">设备维修</span>
              <span v-if="item.type==2" class="type type2">例行维保</span>
              <span v-if="item.type==3" class="type type3">运行检查</span>
            </p>
            <p>
              <em class="pull-left">完成时间：{{item.assign_time}}</em>
              <em class="pull-right">维保人：</em>
            </p>
          </div>
        </div>
        <div v-if="statusOkList.length==0" class="app-nodata">暂无信息</div>
      </el-card>
      <el-card class="dis-box-card box-card">
        <div slot="header" class="clearfix">
          <span style="font-size:14px;">未完成</span>
          <el-button class="mores" type="text" @click="getListDetail(1)">
            查看更多
            <i class="icon-rights"></i>
          </el-button>
        </div>
        <div class="items">
          <div class="item" v-for="item in statusNoList" :key="item.id">
            <p>
              <span class="pull-left">{{item.station_name}}</span>
              <span v-if="item.type==1" class="type type1">设备维修</span>
              <span v-if="item.type==2" class="type type2">例行维保</span>
              <span v-if="item.type==3" class="type type3">运行检查</span>
            </p>
            <p>
              <em class="pull-left">完成时间：{{item.assign_time}}</em>
              <em class="pull-right">维保人：</em>
            </p>
          </div>
        </div>
        <div v-if="statusNoList.length==0" class="app-nodata">暂无信息</div>
      </el-card>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      statusOkList: [],
      statusNoList: []
    };
  },
  created() {
    this.getAssignPages(1, 3);
    this.getAssignPages(2, 3);
  },
  methods: {
    getAssignPages(status, limit) {
      this.request({
        url: "/assign/getAssignPages",
        method: "get",
        params: { status, limit }
      }).then(response => {
        let data = response.data;
        if (data.status == 1) {
          if (status == 1) {
            this.statusNoList = data.data;
          } else {
            this.statusOkList = data.data;
          }
        }
      });
    },
    addShowDialog() {
      this.$router.push({
        path: "/dispatch/edit"
      });
    },
    getListDetail(val) {
      this.$router.push({
        path: "/dispatch/list",
        query: {
          status: val
        }
      });
    }
  }
};
</script>

<style>
.dis-box-card {
  margin: 15px;
  border-radius: 6px;
}
.dis-box-card .el-card__header {
  background: #2b8cf9;
  color: #fff;
  padding: 8px 10px 8px 15px;
}
.dis-box-card .mores {
  float: right;
  padding: 3px 0;
  color: #fff;
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
  background: #3a91f1;
}
.dis-box-card .type2 {
  background: #00dd86;
}
.dis-box-card .type3 {
  background: #ffa000;
}
</style>