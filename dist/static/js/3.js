webpackJsonp([3],{

/***/ "AWFw":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/SiteManage/deviceDetail.vue
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
//
//

/* harmony default export */ var deviceDetail = ({
  data: function data() {
    return {
      tabType: 2,
      page_cur: 1,
      page_data_total: 0,
      page_size: 20,
      page_total: 0,
      dataList: []
    };
  },
  mounted: function mounted() {
    this.getEcharts();
  },
  created: function created() {},

  methods: {
    backURL: function backURL() {
      this.$router.go(-1); //返回上一层
    },
    getEcharts: function getEcharts() {
      //let dataxAxis = data.data.x;
      //let dataSeries = data.data.data;
      var dataxAxis = [12, 13, 14, 15];
      var dataSeries = [20, 70, 50, 90];
      //
      var myChart = this.$echarts.init(document.getElementById("oneChart"));
      // if (data.data.length == 0) {
      //   myChart.showLoading({
      //     text: "暂无数据",
      //     color: "#fff",
      //     textColor: "#8a8e91",
      //     maskColor: "rgba(255, 255, 255, 0.8)"
      //   });
      // }
      var option = {
        backgroundColor: "#fff",
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        grid: {
          left: "1%",
          right: "2%",
          bottom: "2%",
          top: "10%",
          containLabel: true
        },
        // legend: {
        //   data: ["总能耗"],
        //   textStyle: {
        //     color: ["#00D98B"],
        //     fontSize: 15
        //   },
        //   itemWidth: 32,
        //   itemHeight: 15
        // },
        xAxis: {
          type: "category",
          data: dataxAxis,
          axisLine: {
            show: true,
            lineStyle: {
              color: "#869ec6"
            }
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: "#eff4f6"
            }
          },
          axisLabel: {
            textStyle: {
              fontFamily: "Microsoft YaHei"
            }
          }
        },
        yAxis: {
          type: "value",
          // max: "1200",
          axisLine: {
            show: true,
            lineStyle: {
              color: "#869ec6"
            }
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: "#eff4f6"
            }
          },
          axisLabel: {}
        },
        series: [{
          name: "总能耗",
          type: "line",
          barWidth: "12",
          label: {
            normal: {
              show: true,
              fontSize: 12,
              color: "#00D98B",
              position: "top"
            }
          },
          itemStyle: {
            normal: {
              color: "#00D98B"
            }
          },

          data: dataSeries
        }]
      };
      myChart.setOption(option);
      myChart.resize();
      window.addEventListener("resize", function () {
        myChart.resize();
      });
    },
    getDataList: function getDataList() {
      var _this = this;

      var page = this.page_cur;
      var type = this.tabType;
      this.request({
        url: "/alert/getAlertPages",
        method: "get",
        params: { page: page, type: type }
      }).then(function (res) {
        var data = res.data;
        if (data.status == 1) {
          _this.dataList = data.data.data;
          _this.page_cur = parseInt(data.data.current_page);
          _this.page_total = data.data.last_page;
          _this.page_data_total = data.data.total;
          _this.page_size = data.data.per_page;
        }
      });
    },
    pageChange: function pageChange(value) {
      this.page_cur = value;
      this.getDataList();
    },
    pageToFirst: function pageToFirst() {
      this.page_cur = 1;
      this.getDataList();
    },
    pageToLast: function pageToLast() {
      this.page_cur = this.page_total;
      this.getDataList();
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-fdff1a02","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/SiteManage/deviceDetail.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"app-pages"},[_c('header',{staticClass:"app-top-bar"},[_c('span',{staticClass:"icons icon-back pull-left",on:{"click":_vm.backURL}}),_vm._v(" "),_c('h1',{staticClass:"titles"},[_vm._v("设备详情")])]),_vm._v(" "),_c('div',{staticClass:"app-content"},[_c('div',{staticClass:"app-content-rows"},[_c('div',{staticClass:"app-device-detail"},[_vm._m(0),_vm._v(" "),_c('div',{staticClass:"twos"},[_c('div',{staticClass:"bd-img"},[_c('img',{attrs:{"src":__webpack_require__("FO02")}}),_vm._v(" "),_c('p',[_vm._v("运行状态：正常")])]),_vm._v(" "),_vm._m(1)])]),_vm._v(" "),_vm._m(2)])])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ones"},[_c('h3',[_vm._v("风机")]),_vm._v(" "),_c('span',[_vm._v("编号：3215461464")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"bd-body"},[_c('p',[_vm._v("设备型号：FJ1231462")]),_vm._v(" "),_c('p',[_vm._v("运行时长：16小时")]),_vm._v(" "),_c('p',[_vm._v("最近维保：2020-08-17")]),_vm._v(" "),_c('p',[_vm._v("品牌：XXX")]),_vm._v(" "),_c('p',[_vm._v("质保期：XXXX")]),_vm._v(" "),_c('p',[_vm._v("今日能耗：XXXX")]),_vm._v(" "),_c('p',[_vm._v("累计能耗：XXXX")]),_vm._v(" "),_c('p',[_vm._v("采购人：XXXX")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"app-device-chart"},[_c('div',{staticClass:"ones"},[_c('h3',[_vm._v("设备耗能图")]),_vm._v(" "),_c('span',[_vm._v("单位：度")])]),_vm._v(" "),_c('div',{staticClass:"echartbox"},[_c('div',{staticClass:"echarts",attrs:{"id":"oneChart"}})])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var SiteManage_deviceDetail = (esExports);
// CONCATENATED MODULE: ./src/views/SiteManage/deviceDetail.vue
function injectStyle (ssrContext) {
  __webpack_require__("k5QK")
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
  deviceDetail,
  SiteManage_deviceDetail,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var views_SiteManage_deviceDetail = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "FO02":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/avatar.d25a6cc.gif";

/***/ }),

/***/ "k5QK":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("m3e5");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("2d253504", content, true);

/***/ }),

/***/ "m3e5":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, "\n.app-device-detail {\r\n  background: #fff;\r\n  border-radius: 6px;\n}\n.app-device-detail .ones {\r\n  background: #2b8cf9;\r\n  display: block;\r\n  overflow: hidden;\r\n  border-radius: 6px 6px 0 0;\r\n  padding: 10px 15px;\n}\n.app-device-detail .ones h3 {\r\n  font-size: 16px;\r\n  font-weight: 700;\r\n  float: left;\r\n  color: #fff;\n}\n.app-device-detail .ones span {\r\n  float: right;\r\n  font-size: 16px;\r\n  color: #fff;\n}\n.app-device-detail .twos {\r\n  padding: 13px 15px 15px 15px;\n}\n.app-device-detail .bd-img {\r\n  float: left;\r\n  margin-right: 14px;\n}\n.app-device-detail .bd-img img {\r\n  background: #fafafa;\r\n  max-width: 100px;\r\n  height: 110px;\r\n  border-radius: 3px;\r\n  display: block;\r\n  margin-top: 5px;\r\n  margin-bottom: 20px;\n}\n.app-device-detail .bd-body {\r\n  overflow: hidden;\n}\n.app-device-detail p {\r\n  color: #747373;\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  line-height: 24px;\n}\n.app-device-chart {\r\n  background: #fff;\r\n  border-radius: 6px;\r\n  padding: 15px;\r\n  margin-top: 15px;\n}\n.app-device-chart .ones h3 {\r\n  font-size: 16px;\r\n  font-weight: 700;\r\n  float: left;\r\n  color: #303030;\n}\n.app-device-chart .ones span {\r\n  float: right;\r\n  font-size: 14px;\r\n  color: #747373;\n}\n.app-device-chart .echartbox {\r\n  margin-top: 20px;\r\n  overflow: hidden;\r\n  width: 100%;\n}\n.app-device-chart .echarts {\r\n  height: 300px;\r\n  width: 100%;\n}\r\n", ""]);

// exports


/***/ })

});