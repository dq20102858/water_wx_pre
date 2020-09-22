webpackJsonp([5],{

/***/ "IZXa":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_baidu_map__ = __webpack_require__("dAEq");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_baidu_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue_baidu_map__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      msgCount: 0,
      center: { lng: 0, lat: 0 },
      zoom: 15,
      childStationList: [],
      markers: []
    };
  },

  components: {
    BaiduMap: __WEBPACK_IMPORTED_MODULE_0_vue_baidu_map__["BaiduMap"],
    BmNavigation: __WEBPACK_IMPORTED_MODULE_0_vue_baidu_map__["BmNavigation"],
    BmMapType: __WEBPACK_IMPORTED_MODULE_0_vue_baidu_map__["BmMapType"],
    BmMarker: __WEBPACK_IMPORTED_MODULE_0_vue_baidu_map__["BmMarker"],
    BmInfoWindow: __WEBPACK_IMPORTED_MODULE_0_vue_baidu_map__["BmInfoWindow"],
    BmOverlay: __WEBPACK_IMPORTED_MODULE_0_vue_baidu_map__["BmOverlay"],
    BmLabel: __WEBPACK_IMPORTED_MODULE_0_vue_baidu_map__["BmLabel"],
    BmLocalSearch: __WEBPACK_IMPORTED_MODULE_0_vue_baidu_map__["BmLocalSearch"]
  },

  created: function created() {
    // this.getAlertNum();
  },

  methods: {
    getAlertNum: function getAlertNum() {
      var _this = this;

      this.request({
        url: "/alert/getAlertNum",
        method: "get"
      }).then(function (res) {
        var data = res.data;
        if (data.status == 1) {
          _this.msgCount = data.data.num;
        }
      });
    },
    getAllStation: function getAllStation() {
      this.$router.push({
        path: "/sitemanage/station"
      });
    },
    getWarm: function getWarm() {
      this.$router.push({
        path: "/warning"
      });
    },
    getChildStationList: function getChildStationList() {
      var _this2 = this;

      var name = this.searchVillageName;
      this.request({
        url: "/station/getChildStationLists",
        method: "get",
        params: { name: name }
      }).then(function (response) {
        var data = response.data;
        if (data.status == 1) {
          _this2.childStationList = data.data;
        }
      });
    },
    getMarkers: function getMarkers() {
      this.markers = this.childStationList;
    },


    // draw({ el, BMap, map }) {
    //   //        let point = new BMap.Point(116.404, 39.915)
    //   //        map.addOverlay(point)
    //   const pixel = map.pointToOverlayPixel(new BMap.Point(116.404, 39.915));
    //   el.style.left = pixel.x - 60 + "px";
    //   el.style.top = pixel.y - 20 + "px";
    // },

    readyHandler: function readyHandler(_ref) {
      var _this3 = this;

      var BMap = _ref.BMap,
          map = _ref.map;

      var name = this.searchVillageName;
      this.request({
        url: "/station/getChildStationLists",
        method: "get",
        params: { name: name }
      }).then(function (response) {
        var data = response.data;
        if (data.status == 1) {
          _this3.markers = data.data;
          // 自动获取展示的比例
          var view = map.getViewport(eval(_this3.markers));
          _this3.zoom = view.zoom;
          _this3.center = view.center;
          console.log(_this3.markers);
        }
      });
    },
    markerClick: function markerClick(e) {
      console.log(e);
      this.show = true;
      this.$router.push({
        path: "/sitemanage/stationdetail",
        query: { sid: e.id }
      });
    },
    getClickInfo: function getClickInfo(e) {
      this.marker.lng = e.point.lng;
      this.marker.lat = e.point.lat;
    },
    syncCenterAndZoom: function syncCenterAndZoom(e) {
      var _e$target$getCenter = e.target.getCenter(),
          lng = _e$target$getCenter.lng,
          lat = _e$target$getCenter.lat;

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
    logout: function logout() {
      var _this4 = this;

      this.$confirm("您确定要退出当前系统？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
        customClass: "el-message-box-new"
      }).then(function () {
        _this4.$store.dispatch("LogOut").then(function () {
          location.reload(); // In order to re-instantiate the vue-router object to avoid bugs
        });
      }).catch(function () {});
    }
  }
});

/***/ }),

/***/ "L0yz":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("UTOY");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("5d370093", content, true);

/***/ }),

/***/ "UTOY":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, "\n.bm-view {\r\n  width: 100%;\r\n  height: calc(100vh - 44px);\n}\n.baidumap {\r\n  position: relative;\n}\n.baidumap-so {\r\n  position: absolute;\r\n  top: 10px;\r\n  left: 10px;\r\n  z-index: 99999;\n}\n.map-so-input .el-button {\r\n  background: #409eff;\r\n  border: 1px #409eff solid;\r\n  padding: 5px 5px 5px 10px;\r\n  color: #fff;\n}\n.map-so-input .el-input-group__append {\r\n  background: #409eff;\r\n  border: 1px #409eff solid;\r\n  color: #fff;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "vzEL":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/SiteManage/index.vue
var SiteManage = __webpack_require__("IZXa");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-db3f27b8","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/SiteManage/index.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"app-pages"},[_c('header',{staticClass:"app-top-bar"},[_c('span',{staticClass:"icons icon-station pull-left",on:{"click":_vm.getAllStation}}),_vm._v(" "),_c('span',{staticClass:"icons icon-msg pull-left",on:{"click":_vm.getWarm}}),_vm._v(" "),_c('h1',{staticClass:"titles"},[_vm._v("南通沿海市政")]),_vm._v(" "),_c('span',{staticClass:"icons icon-logout pull-right",on:{"click":_vm.logout}})]),_vm._v(" "),_c('div',{staticClass:"baidumap"},[_c('baidu-map',{staticClass:"bm-view",attrs:{"center":_vm.center,"zoom":_vm.zoom,"scroll-wheel-zoom":true,"mapClick":false,"ak":"GsTerPPU46fUXlt09K8840K0HxTvKIIa"},on:{"ready":_vm.readyHandler}},[_c('bm-map-type',{attrs:{"map-types":['BMAP_NORMAL_MAP', 'BMAP_HYBRID_MAP'],"anchor":"BMAP_ANCHOR_BOTTOM_RIGHT"}}),_vm._v(" "),_c('bm-navigation',{attrs:{"anchor":"BMAP_ANCHOR_TOP_RIGHT"}}),_vm._v(" "),_vm._l((_vm.markers),function(marker){return _c('div',{key:marker.lng},[_c('bm-marker',{attrs:{"position":{lng: marker.lng, lat: marker.lat}},on:{"click":function($event){_vm.markerClick(marker)}}}),_vm._v(" "),_c('bm-label',{attrs:{"content":marker.name,"offset":{width:-55,height:-45},"position":{lng: marker.lng, lat: marker.lat},"labelStyle":{border:'1px solid #3498DB',background:'#3498DB', color:'#fff', padding:'2px',fontWeight: '600',fontSize:'14px',cursor: 'pointer'},"title":marker.name},on:{"click":function($event){_vm.markerClick(marker)}}})],1)})],2)],1)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var views_SiteManage = (esExports);
// CONCATENATED MODULE: ./src/views/SiteManage/index.vue
function injectStyle (ssrContext) {
  __webpack_require__("L0yz")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  SiteManage["a" /* default */],
  views_SiteManage,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_views_SiteManage = __webpack_exports__["default"] = (Component.exports);


/***/ })

});