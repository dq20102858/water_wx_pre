<template>
  <div class="app-pages">
    <header class="app-top-bar">
      <span class="icons icon-station pull-left" @click="getAllStation"></span>
      <span class="icons icon-msg pull-left" @click="getWarm">
        <i class="msgnum"></i>
      </span>
      <h1 class="titles">南通沿海市政</h1>
       <span class="icons icon-logout pull-right" @click="logout"></span>
    </header>
    <div class="baidumap">
      <div
        class="map-so-input el-input el-input--medium el-input-group el-input-group--append el-input--suffix"
      >
        <!---->
        <input type="text" autocomplete="off" placeholder="请输入位置关键字" class="el-input__inner" />
        <!---->
        <!---->
        <div class="el-input-group__append">
          <button type="button" class="el-button el-button--primary el-button--medium">
            <!---->
            <i class="el-icon-search"></i>
            <!---->
          </button>
        </div>
        <!---->
      </div>

      <!-- <div class="baidumap-so">
        <el-input
        placeholder="请输入位置关键字"
        v-model="searchAddress"
        @keyup.enter.native="searchEvent"
        class="map-so-input"
        clearable
      >
        <el-button slot="append" type="primary" icon="el-icon-search" @click="searchEvent"></el-button>
      </el-input>
    
      </div>-->
      <baidu-map
        class="bm-view"
        :center="center"
        :zoom="zoom"
        @ready="readyHandler"
        @click="getClickInfo"
        :scroll-wheel-zoom="true"
        :mapClick="false"
        　ak="GsTerPPU46fUXlt09K8840K0HxTvKIIa"
      >
        <!--地图类型-->
        <bm-map-type
          :map-types="['BMAP_NORMAL_MAP', 'BMAP_HYBRID_MAP']"
          anchor="BMAP_ANCHOR_BOTTOM_RIGHT"
        ></bm-map-type>
        <!--地图缩放-->
        <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
        <!--标注点  animation="BMAP_ANIMATION_BOUNCE"-->
        <div v-for="marker in markers" :key="marker.lng">
          <bm-marker :position="{lng: marker.lng, lat: marker.lat}" @click="markerClick(marker)"></bm-marker>
          <bm-label
            :content="marker.name"
            :offset="{width:-55,height:-45}"
            :position="{lng: marker.lng, lat: marker.lat}"
            :labelStyle="{border:'1px solid #3498DB',background:'#3498DB', color:'#fff', padding:'2px',fontWeight: '600',fontSize:'14px',cursor: 'pointer'}"
            :title="marker.name"
            @click="markerClick(marker)"
          />
        </div>
        <bm-local-search
          :keyword="address"
          :location="address"
          :auto-viewport="true"
          style="width:0px;height:0px;overflow: hidden;"
        ></bm-local-search>
      </baidu-map>
    </div>
  </div>
</template>
<script>
import {
  BaiduMap,
  BmNavigation,
  BmMapType,
  BmMarker,
  BmInfoWindow,
  BmOverlay,
  BmLocalSearch,
  BmLabel
} from "vue-baidu-map";
export default {
  data() {
    return {
      searchAddress: "",
      address: "",
      center: { lng: 0, lat: 0 },
      zoom: 15,
      childStationList: [],
      markers: []
    };
  },
  components: {
    BaiduMap,
    BmNavigation,
    BmMapType,
    BmMarker,
    BmInfoWindow,
    BmOverlay,
    BmLabel,
    BmLocalSearch
  },

  created() {},
  methods: {
    getAllStation() {
      this.$router.push({
        path: "/sitemanage/station"
      });
    },
    getWarm() {
      this.$router.push({
        path: "/warning"
      });
    },
    getChildStationList() {
      let name = this.searchVillageName;
      this.request({
        url: "/station/getChildStationLists",
        method: "get",
        params: { name }
      }).then(response => {
        let data = response.data;
        if (data.status == 1) {
          this.childStationList = data.data;
        }
      });
    },
    getMarkers() {
      this.markers = this.childStationList;
    },

    // draw({ el, BMap, map }) {
    //   //        let point = new BMap.Point(116.404, 39.915)
    //   //        map.addOverlay(point)
    //   const pixel = map.pointToOverlayPixel(new BMap.Point(116.404, 39.915));
    //   el.style.left = pixel.x - 60 + "px";
    //   el.style.top = pixel.y - 20 + "px";
    // },

    readyHandler({ BMap, map }) {
      let name = this.searchVillageName;
      this.request({
        url: "/station/getChildStationLists",
        method: "get",
        params: { name }
      }).then(response => {
        let data = response.data;
        if (data.status == 1) {
          this.markers = data.data;
          // 自动获取展示的比例
          var view = map.getViewport(eval(this.markers));
          this.zoom = view.zoom;
          this.center = view.center;
          console.log(this.markers);
        }
      });
    },
    markerClick(e) {
      console.log(e);
      this.show = true;
      this.$router.push({
        path: "/sitemanage/stationdetail",
        query: { sid: e.id }
      });
    },
    getClickInfo(e) {
      this.marker.lng = e.point.lng;
      this.marker.lat = e.point.lat;
    },
    syncCenterAndZoom(e) {
      const { lng, lat } = e.target.getCenter();
      if (this.diaLogEdit == true) {
        this.centerStr.lng = this.formData.lng;
        this.centerStr.lat = this.formData.lat;
      } else {
        this.centerStr.lng = lng;
        this.centerStr.lat = lat;
      }
      this.zoom = e.target.getZoom();
      // console.log(this.centerStr.lng + "__A__" + this.centerStr.lat);
    },
    searchEvent() {
      this.address = this.searchAddress;
    },
    logout() {
      this.$confirm("您确定要退出当前系统？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
        customClass: "el-message-box-new"
      })
        .then(() => {
          this.$store.dispatch("LogOut").then(() => {
            location.reload(); // In order to re-instantiate the vue-router object to avoid bugs
          });
        })
        .catch(() => {});
    }
  }
};
</script>

<style>
.bm-view {
  width: 100%;
  height: calc(100vh - 44px);
}
.baidumap {
  position: relative;
}
.baidumap-so {
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 99999;
}
.map-so-input .el-button {
  background: #409eff;
  border: 1px #409eff solid;
  padding: 5px 5px 5px 10px;
  color: #fff;
}
.map-so-input .el-input-group__append {
  background: #409eff;
  border: 1px #409eff solid;
  color: #fff;
}
</style>