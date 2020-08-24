webpackJsonp([5],{

/***/ "4Ec1":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ "BXBM":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("4Ec1");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("6bb2e7d6", content, true);

/***/ }),

/***/ "J4TC":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/Dispatch/list.vue
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

/* harmony default export */ var list = ({
  data: function data() {
    return {
      pageTitle: "已完成",
      page_cur: 1,
      page_data_total: 0,
      page_size: 20,
      page_total: 0,
      dataList: []
    };
  },
  created: function created() {
    var getStatus = this.$route.query.status;
    if (getStatus == 1) {
      this.pageTitle = "未完成";
    }
    this.getDataList();
  },

  methods: {
    backURL: function backURL() {
      this.$router.go(-1); //返回上一层
    },
    getDataList: function getDataList() {
      var _this = this;

      var page = this.page_cur;
      var status = this.$route.query.status;
      var limit = 20;
      this.request({
        url: "/assign/getAssignPages",
        method: "get",
        params: { page: page, status: status }
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
    //end

  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-e8ae46a0","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/Dispatch/list.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"app-pages"},[_c('header',{staticClass:"app-top-bar"},[_c('a',{staticClass:"icons icon-back pull-left",on:{"click":_vm.backURL}}),_vm._v(" "),_c('h1',{staticClass:"titles"},[_vm._v(_vm._s(_vm.pageTitle))])]),_vm._v(" "),_c('div',{staticClass:"app-content"},[_c('div',{staticClass:"app-content-rows"},[_c('div',{staticClass:"app-table"},[_c('el-table',{attrs:{"data":_vm.dataList,"size":"mini"}},[_c('el-table-column',{attrs:{"label":"序号","type":"index"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"station_name","label":"维保站点","class-name":"nowrap"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"type","label":"维保事项"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [(scope.row.type==1)?_c('span',[_vm._v("设备维修")]):(scope.row.type==2)?_c('span',[_vm._v("例行维保")]):_c('span',[_vm._v("运行检查")])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"指派时间","class-name":"linewrap"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('span',[_vm._v(_vm._s(_vm._f("formatGetDate")(scope.row.assign_time)))])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"assigner","label":"指派人","class-name":"nowrap"}})],1),_vm._v(" "),_c('div',{staticClass:"app-pagination"},[(_vm.dataList.length !== 0)?_c('el-pagination',{staticClass:"pagination",attrs:{"layout":"prev, pager, next","page-size":this.page_size,"current-page":this.page_cur,"total":this.page_data_total},on:{"current-change":_vm.pageChange}}):_vm._e()],1)],1)])])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var Dispatch_list = (esExports);
// CONCATENATED MODULE: ./src/views/Dispatch/list.vue
function injectStyle (ssrContext) {
  __webpack_require__("BXBM")
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
  list,
  Dispatch_list,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var views_Dispatch_list = __webpack_exports__["default"] = (Component.exports);


/***/ })

});