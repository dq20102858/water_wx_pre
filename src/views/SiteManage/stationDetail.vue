<template>
  <div class="app-pages">
    <header class="app-top-bar">
      <span class="icons icon-back pull-left" @click="backURL"></span>
      <h1 class="titles">站点详情</h1>
    </header>
    <div class="app-content">
      <div class="app-content-rows">
        <div class="app-station-one">
          <div class="ones">
            <h3>{{stationDetail.name}}</h3>
            <span @click="mainDetail">站点运行图</span>
          </div>
          <p>入网时间：{{stationDetail.create_time}}</p>
          <p>日排污量：{{stationDetail.number}}吨</p>
          <p>详细地址：{{stationDetail.address}}</p>
        </div>
        <div class="app-station-two">
          <div class="items">
            <div class="numbox" style="border-right: 1px solid #ddd;">
              <span class="names">当前液位（厘米）</span>
              <span class="nums">{{stationRealData.level}}</span>
            </div>
            <div class="numbox">
              <span class="names">当日进水量（吨）</span>
              <span class="nums">{{stationRealData.enter}}</span>
            </div>
          </div>
          <div class="items">
            <div class="numbox" style="border-right: 1px solid #ddd;">
              <span class="names">当日出水量（吨）</span>
              <span class="nums">{{stationRealData.outer}}</span>
            </div>
            <div class="numbox">
              <span class="names">PH值</span>
              <span class="nums">{{stationRealData.ph}}</span>
            </div>
          </div>
          <div class="items noborder">
            <div class="numbox" style="border-right: 1px solid #ddd;">
              <span class="names">电导率</span>
              <span class="nums">{{stationRealData.ec}}</span>
            </div>
            <div class="numbox">
              <span class="names">控制室温度（℃)</span>
              <span class="nums">{{stationRealData.temp}}</span>
            </div>
          </div>
        </div>

        <div class="app-station-three" v-if="deviceLists.length>0">
          <div class="ones">
            <h3>设备列表</h3>
            <!-- <span @click="deviceDetailEvent(0)">查看详情</span> -->
          </div>
          <div
            class="twos"
            v-for="item in deviceLists"
            :key="item.id"
            @click="getDeviceDetail(item.id)"
          >
            <img class="bd-img" :src="item.img" />
            <div class="bd-body">
              <p v-if="item.type==1">设备类型：风机</p>
              <p v-if="item.type==2">设备类型：水泵</p>
              <p v-if="item.type==3">设备类型：紫外灯</p>
              <p v-if="item.type==4">设备类型：PLC</p>
              <p>运行状态：{{item.work_status==1?"正常":"异常"}}</p>
              <p>设备编号：{{item.number}}</p>
              <p>设备型号：{{item.model}}</p>
              <p>运行时长：{{item.days}}小时</p>
              <p>最近维保：{{item.latest_time|formatGetDate}}</p>
            </div>
          </div>
        </div>
        <!-- // -->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      stationDetail: [],
      stationRealData: [],
      deviceLists: []
    };
  },
  created() {
    this.getStationDetail();
    this.getStationRealData();
    this.getDeviceList();
  },
  methods: {
    backURL() {
      this.$router.go(-1); //返回上一层
    },
    getStationDetail() {
      this.request({
        url: "/station/getStation",
        method: "get",
        params: { id: this.$route.query.sid }
      }).then(res => {
        let data = res.data;
        if (data.status == 1) {
          this.stationDetail = data.data;
        }
      });
    },
    getStationRealData() {
      this.request({
        url: "/station/getStationRealData",
        method: "get",
        params: { sid: this.$route.query.sid }
      }).then(res => {
        let data = res.data;
        if (data.status == 1) {
          this.stationRealData = data.data;
        }
      });
    },
    getDeviceList() {
      this.request({
        url: "/device/getDeviceLists",
        method: "get",
        params: { sid: this.$route.query.sid }
      }).then(res => {
        let data = res.data;
        if (data.status == 1) {
          this.deviceLists = data.data;
        }
      });
    },
    getDeviceDetail(id) {
      this.$router.push({
        path: "/sitemanage/devicedetail",
        query: { id: id }
      });
    } ,   mainDetail() {
      this.$router.push({
        path: "/sitemanage/main",
        query: { id: id }
      });
    }
    //
  }
};
</script>
<style>
.app-station-one {
  background: #fff;
  border-radius: 6px;
  padding: 15px;
}
.app-station-one .ones {
  display: block;
  overflow: hidden;
}
.app-station-one .ones h3 {
  font-size: 18px;
  font-weight: 700;
  float: left;  width: 60%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.app-station-one .ones span {
  cursor: pointer;
  float: right;
  background: #1386ff;
  color: #fff;
  border-radius: 30px;
  padding: 5px 15px;
}
.app-station-one p {
  margin-top: 5px;
  display: block;
  color: #7e7e7e;
  line-height: 22px;
}
.app-station-two {
  background: #fff;
  border-radius: 6px;
  padding: 15px;
  margin: 15px 0;
}
.app-station-two .items {
  width: 100%;
  border-bottom: 1px solid #ddd;
  overflow: hidden;
}
.app-station-two .numbox {
  float: left;
  width: 49.9%;
  text-align: center;
  padding: 15px 0;
}
.app-station-two .items .names {
  display: block;
  text-align: center;
  margin-top: 8px;
  font-size: 14px;
  color: #303030;
  height: 40px;
}
.app-station-two .items .nums {
  display: block;
  text-align: center;
  color: #3a91f1;
  font-size: 18px;
}

.app-station-three .ones {
  background: #fff;
  border-radius: 6px;
  padding: 15px 20px;
  overflow: hidden;
}
.app-station-three .ones h3 {
  font-size: 18px;
  font-weight: 700;
  float: left;
}
.app-station-three .ones span {
  cursor: pointer;
  float: right;
  background: #1386ff;
  color: #fff;
  border-radius: 30px;
  padding: 5px 15px;
}
.app-station-three .twos {
  border-radius: 6px;
  padding: 15px;
  margin-top: 15px;
  display: flex;
  align-items: center;
  background: #fff url("~@/assets/image/icon-right.png") no-repeat center right
    20px;
  background-size: 10px;
}
.app-station-three .bd-img {
  background: #fafafa;
  max-width: 100px;
  height: 130px;
  border-radius: 3px;
  float: left;
  margin-right: 14px;
  align-items: center;
}
.app-station-three .bd-body {
  overflow: hidden;
}
.app-station-three .bd-body p {
  color: #747373;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 24px;
}
</style>