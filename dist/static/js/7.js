webpackJsonp([7],{

/***/ "/ltw":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, "\n.app-device-detail {\r\n  background: #fff;\r\n  border-radius: 6px;\n}\n.app-device-detail .ones {\r\n  background: #2b8cf9;\r\n  display: block;\r\n  overflow: hidden;\r\n  border-radius: 6px 6px 0 0;\r\n  padding: 10px 15px;\n}\n.app-device-detail .ones h3 {\r\n  font-size: 16px;\r\n  font-weight: 700;\r\n  float: left;\r\n  color: #fff;\r\n  width: 80%;\r\n  overflow: hidden;\r\n  white-space: nowrap;\r\n  text-overflow: ellipsis;\n}\n.app-device-detail .ones span {\r\n  float: right;\r\n  font-size: 16px;\r\n  color: #fff;\n}\n.app-device-detail .twos {\r\n  padding: 13px 15px 15px 15px;\n}\n.app-device-detail .bd-img {\r\n  float: left;\r\n  margin-right: 14px;\n}\n.app-device-detail .bd-img img {\r\n  background: #fafafa;\r\n  max-width: 100px;\r\n  height: 110px;\r\n  border-radius: 3px;\r\n  display: block;\r\n  margin-top: 5px;\r\n  margin-bottom: 20px;\n}\n.app-device-detail .bd-body {\r\n  overflow: hidden;\n}\n.app-device-detail p {\r\n  color: #747373;\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  line-height: 24px;\n}\n.app-device-chart {\r\n  background: #fff;\r\n  border-radius: 6px;\r\n  padding: 15px;\r\n  margin-top: 15px;\n}\n.app-device-chart .ones h3 {\r\n  font-size: 16px;\r\n  font-weight: 700;\r\n  float: left;\r\n  color: #303030;\n}\n.app-device-chart .ones span {\r\n  float: right;\r\n  font-size: 14px;\r\n  color: #747373;\n}\n.app-device-chart .echartbox {\r\n  margin-top: 20px;\r\n  overflow: hidden;\r\n  width: 100%;\n}\n.app-device-chart .echarts {\r\n  height: 300px;\r\n  width: 100%;\n}\r\n", ""]);

// exports


/***/ }),

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
//
//
//
//

/* harmony default export */ var deviceDetail = ({
  data: function data() {
    return {
      deviceDetailData: []
    };
  },
  mounted: function mounted() {
    this.getEcharts();
  },
  created: function created() {
    this.getDeviceDetailData();
  },

  methods: {
    backURL: function backURL() {
      this.$router.go(-1); //返回上一层
    },
    getEcharts: function getEcharts() {
      var _this = this;

      this.request({
        url: "/device/getDeviceData",
        method: "get",
        params: { did: this.$route.query.id }
      }).then(function (res) {
        var data = res.data;
        if (data.status == 1) {
          _this.deviceDetailData = data.data;
          var dataxAxis = data.data.x;
          var dataSeries = data.data.result;
          //  let dataxAxis = [12, 13, 14, 15];
          //   let dataSeries = [20, 70, 50, 90];
          //
          var myChart = _this.$echarts.init(document.getElementById("oneChart"));
          if (data.data.x.length == 0) {
            myChart.showLoading({
              text: "暂无数据",
              color: "#fff",
              textColor: "#8a8e91",
              maskColor: "rgba(255, 255, 255, 0.8)"
            });
          }
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
          //
        }
      });
    },
    getDeviceDetailData: function getDeviceDetailData() {
      var _this2 = this;

      this.request({
        url: "/device/getDeviceDetail",
        method: "get",
        params: { id: this.$route.query.id }
      }).then(function (res) {
        var data = res.data;
        if (data.status == 1) {
          data.data.latest_time = data.data.latest_time.replace("00:00:00", "");
          data.data.warranty_time = data.data.warranty_time.replace("00:00:00", "");
          _this2.deviceDetailData = data.data;
        }
      });
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-ba2ee340","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/SiteManage/deviceDetail.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"app-pages"},[_c('header',{staticClass:"app-top-bar"},[_c('span',{staticClass:"icons icon-back pull-left",on:{"click":_vm.backURL}}),_vm._v(" "),_c('h1',{staticClass:"titles"},[_vm._v("设备详情")])]),_vm._v(" "),_c('div',{staticClass:"app-content"},[_c('div',{staticClass:"app-content-rows"},[_c('div',{staticClass:"app-device-detail"},[_c('div',{staticClass:"ones"},[_c('h3',[_vm._v(_vm._s(_vm.deviceDetailData.name))]),_vm._v(" "),(_vm.deviceDetailData.type==1)?_c('span',[_vm._v("风机")]):_vm._e(),_vm._v(" "),(_vm.deviceDetailData.type==2)?_c('span',[_vm._v("水泵")]):_vm._e(),_vm._v(" "),(_vm.deviceDetailData.type==3)?_c('span',[_vm._v("紫外灯")]):_vm._e(),_vm._v(" "),(_vm.deviceDetailData.type==4)?_c('span',[_vm._v("PLC")]):_vm._e()]),_vm._v(" "),_c('div',{staticClass:"twos"},[_c('div',{staticClass:"bd-img"},[_c('img',{attrs:{"src":_vm.deviceDetailData.img}}),_vm._v(" "),_c('p',[_vm._v("设备状态："+_vm._s(_vm.deviceDetailData.work_status==1?"正常":"异常"))])]),_vm._v(" "),_c('div',{staticClass:"bd-body"},[_c('p',[_vm._v("设备编号："+_vm._s(_vm.deviceDetailData.number))]),_vm._v(" "),_c('p',[_vm._v("设备型号："+_vm._s(_vm.deviceDetailData.model))]),_vm._v(" "),_c('p',[_vm._v("运行时长："+_vm._s(_vm.deviceDetailData.days))]),_vm._v(" "),_c('p',[_vm._v("最近维保："+_vm._s(_vm.deviceDetailData.latest_time))]),_vm._v(" "),_c('p',[_vm._v("设备品牌："+_vm._s(_vm.deviceDetailData.brand))]),_vm._v(" "),_c('p',[_vm._v("质保日期："+_vm._s(_vm.deviceDetailData.warranty_time))]),_vm._v(" "),_c('p',[_vm._v("今日能耗："+_vm._s(_vm.deviceDetailData.energy))]),_vm._v(" "),_c('p',[_vm._v("累计能耗："+_vm._s(_vm.deviceDetailData.total_energy))]),_vm._v(" "),_c('p',[_vm._v("采购人："+_vm._s(_vm.deviceDetailData.purchaser))])])])]),_vm._v(" "),_vm._m(0)])])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"app-device-chart"},[_c('div',{staticClass:"ones"},[_c('h3',[_vm._v("设备耗能图")])]),_vm._v(" "),_c('div',{staticClass:"echartbox"},[_c('div',{staticClass:"echarts",attrs:{"id":"oneChart"}})])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var SiteManage_deviceDetail = (esExports);
// CONCATENATED MODULE: ./src/views/SiteManage/deviceDetail.vue
function injectStyle (ssrContext) {
  __webpack_require__("JfV9")
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

/***/ "JfV9":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("/ltw");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("c6355510", content, true);

/***/ })

});