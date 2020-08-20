webpackJsonp([4],{

/***/ "FO02":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/avatar.d25a6cc.gif";

/***/ }),

/***/ "YQSK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/SiteManage/stationDetail.vue
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

/* harmony default export */ var stationDetail = ({
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
  created: function created() {
    this.getDataList();
  },

  methods: {
    backURL: function backURL() {
      this.$router.go(-1); //返回上一层
    },
    tabSelect: function tabSelect(type) {
      this.tabType = type;
      this.getDataList();
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
    },
    deviceDetailEvent: function deviceDetailEvent(id) {
      this.$router.push({
        path: "/sitemanage/devicedetail",
        query: { id: id }
      });
    }
    //

  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-616d11cf","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/SiteManage/stationDetail.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"app-pages"},[_c('header',{staticClass:"app-top-bar"},[_c('span',{staticClass:"icons icon-back pull-left",on:{"click":_vm.backURL}}),_vm._v(" "),_c('h1',{staticClass:"titles"},[_vm._v("站点概览")])]),_vm._v(" "),_c('div',{staticClass:"app-content"},[_c('div',{staticClass:"app-content-rows"},[_vm._m(0),_vm._v(" "),_vm._m(1),_vm._v(" "),_c('div',{staticClass:"app-station-three"},[_c('div',{staticClass:"ones"},[_c('h3',[_vm._v("设备列表")]),_vm._v(" "),_c('span',{on:{"click":function($event){_vm.deviceDetailEvent(0)}}},[_vm._v("查看详情")])]),_vm._v(" "),_c('div',{staticClass:"twos"},[_c('img',{staticClass:"bd-img",attrs:{"src":__webpack_require__("FO02")}}),_vm._v(" "),_vm._m(2)])])])])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"app-station-one"},[_c('div',{staticClass:"ones"},[_c('h3',[_vm._v("汤湾村站")]),_vm._v(" "),_c('span',[_vm._v("站点运行图")])]),_vm._v(" "),_c('p',[_vm._v("入网时间：2020-08-06")]),_vm._v(" "),_c('p',[_vm._v("日排污量：1.5吨")]),_vm._v(" "),_c('p',[_vm._v("详细地址：如皋市东陈镇汤湾村215号如皋市东陈镇汤湾村215号如皋市东陈镇汤湾村215号")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"app-station-two"},[_c('div',{staticClass:"items"},[_c('div',{staticClass:"numbox",staticStyle:{"border-right":"1px solid #ddd"}},[_c('span',{staticClass:"names"},[_vm._v("当前液位（厘米）")]),_vm._v(" "),_c('span',{staticClass:"nums"},[_vm._v("123")])]),_vm._v(" "),_c('div',{staticClass:"numbox"},[_c('span',{staticClass:"names"},[_vm._v("当日进水量（吨）")]),_vm._v(" "),_c('span',{staticClass:"nums"},[_vm._v("123")])])]),_vm._v(" "),_c('div',{staticClass:"items"},[_c('div',{staticClass:"numbox",staticStyle:{"border-right":"1px solid #ddd"}},[_c('span',{staticClass:"names"},[_vm._v("当日进水量（吨）")]),_vm._v(" "),_c('span',{staticClass:"nums"},[_vm._v("9")])]),_vm._v(" "),_c('div',{staticClass:"numbox"},[_c('span',{staticClass:"names"},[_vm._v("PH值")]),_vm._v(" "),_c('span',{staticClass:"nums"},[_vm._v("6")])])]),_vm._v(" "),_c('div',{staticClass:"items noborder"},[_c('div',{staticClass:"numbox",staticStyle:{"border-right":"1px solid #ddd"}},[_c('span',{staticClass:"names"},[_vm._v("电导率")]),_vm._v(" "),_c('span',{staticClass:"nums"},[_vm._v("9")])]),_vm._v(" "),_c('div',{staticClass:"numbox"},[_c('span',{staticClass:"names"},[_vm._v("控制室温度（℃)")]),_vm._v(" "),_c('span',{staticClass:"nums"},[_vm._v("6")])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"bd-body"},[_c('p',[_vm._v("设备类型：风机")]),_vm._v(" "),_c('p',[_vm._v("运行状态：正常")]),_vm._v(" "),_c('p',[_vm._v("设备编号：24363")]),_vm._v(" "),_c('p',[_vm._v("设备型号：FJ1231462")]),_vm._v(" "),_c('p',[_vm._v("运行时长：16小时")]),_vm._v(" "),_c('p',[_vm._v("最近维保：2020-08-17")])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var SiteManage_stationDetail = (esExports);
// CONCATENATED MODULE: ./src/views/SiteManage/stationDetail.vue
function injectStyle (ssrContext) {
  __webpack_require__("usS/")
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
  stationDetail,
  SiteManage_stationDetail,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var views_SiteManage_stationDetail = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "hx37":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, "\n.app-station-one {\r\n  background: #fff;\r\n  border-radius: 6px;\r\n  padding: 15px;\n}\n.app-station-one .ones {\r\n  display: block;\r\n  overflow: hidden;\n}\n.app-station-one .ones h3 {\r\n  font-size: 18px;\r\n  font-weight: 700;\r\n  float: left;\n}\n.app-station-one .ones span {\r\n  cursor: pointer;\r\n  float: right;\r\n  background: #1386ff;\r\n  color: #fff;\r\n  border-radius: 30px;\r\n  padding: 5px 15px;\n}\n.app-station-one p {\r\n  margin-top: 5px;\r\n  display: block;\r\n  color: #7e7e7e;\r\n  line-height: 22px;\n}\n.app-station-two {\r\n  background: #fff;\r\n  border-radius: 6px;\r\n  padding: 15px;\r\n  margin: 15px 0;\n}\n.app-station-two .items {\r\n  width: 100%;\r\n  border-bottom: 1px solid #ddd;\r\n  overflow: hidden;\n}\n.app-station-two .numbox {\r\n  float: left;\r\n  width: 49.9%;\r\n  text-align: center;\r\n  padding: 15px 0;\n}\n.app-station-two .items .names {\r\n  display: block;\r\n  text-align: center;\r\n  margin-top: 8px;\r\n  font-size: 14px;\r\n  color: #303030;  height: 40px;\n}\n.app-station-two .items .nums {\r\n  display: block;\r\n  text-align: center;\r\n  color: #3a91f1;\r\n  font-size: 18px;\n}\n.app-station-three {\r\n  background: #fff;\r\n  border-radius: 6px;\r\n  padding: 15px;\n}\n.app-station-three .ones {\r\n  display: block;\r\n  overflow: hidden;\n}\n.app-station-three .ones h3 {\r\n  font-size: 18px;\r\n  font-weight: 700;\r\n  float: left;\n}\n.app-station-three .ones span {\r\n  cursor: pointer;\r\n  float: right;\r\n  background: #1386ff;\r\n  color: #fff;\r\n  border-radius: 30px;\r\n  padding: 5px 15px;\n}\n.app-station-three .twos {\r\n  margin-top: 10px;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\n}\n.app-station-three .bd-img {\r\n  background: #fafafa;\r\n  max-width: 100px;\r\n  height: 130px;\r\n  border-radius: 3px;\r\n  float: left;\r\n  margin-right: 14px;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\n}\n.app-station-three .bd-body {\r\n  overflow: hidden;\n}\n.app-station-three .bd-body p {\r\n  color: #747373;\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  line-height: 24px;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "usS/":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("hx37");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("55996460", content, true);

/***/ })

});