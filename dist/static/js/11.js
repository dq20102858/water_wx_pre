webpackJsonp([11],{

/***/ "FLxV":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, "\n.nums {\r\n  padding: 3px 5px;\n}\n.cirshow {\r\n  background: #ff3856;\r\n  color: #fff;\r\n  padding: 3px 5px;\r\n  border-radius: 3px;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "UE6D":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("FLxV");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("db2c5e5a", content, true);

/***/ }),

/***/ "xqn6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/Record/index.vue
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

/* harmony default export */ var Record = ({
  data: function data() {
    return {
      tabType: 1,
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
    tabSelect: function tabSelect(type) {
      if (type == 2) {
        this.$router.push("/record/operation");
      } else if (type == 3) {
        this.$router.push("/record/sampling");
      } else {
        this.$router.push("/record");
      }
    },
    getDataList: function getDataList() {
      var _this = this;

      var page = this.page_cur;
      var type = this.tabType;
      this.request({
        url: "/record/getRecordRepairPages",
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
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-6c025a2c","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/Record/index.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"app-pages"},[_vm._m(0),_vm._v(" "),_c('div',{staticClass:"app-content"},[_c('div',{staticClass:"app-tab"},[_c('div',{staticClass:"item"},[_c('span',{staticClass:"active",on:{"click":function($event){_vm.tabSelect(1)}}},[_vm._v("维护记录")])]),_vm._v(" "),_c('div',{staticClass:"item"},[_c('span',{on:{"click":function($event){_vm.tabSelect(2)}}},[_vm._v("运行记录")])]),_vm._v(" "),_c('div',{staticClass:"item"},[_c('span',{on:{"click":function($event){_vm.tabSelect(3)}}},[_vm._v("采样化验单")])])]),_vm._v(" "),_c('div',{staticClass:"app-content-rows"},[_c('div',{staticClass:"app-table"},[_c('el-table',{attrs:{"data":_vm.dataList,"size":"mini"}},[_c('el-table-column',{attrs:{"label":"序号"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_vm._v(_vm._s(scope.$index+(_vm.page_cur - 1) * _vm.page_size + 1))]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"站点名","prop":"station_name"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"is_problem","label":"是否异常"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [(scope.row.is_problem==1)?_c('span',[_vm._v("是")]):_vm._e(),_vm._v(" "),(scope.row.is_problem==0)?_c('span',[_vm._v("否")]):_vm._e()]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"维保日期","class-name":"linewrap"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_vm._v(_vm._s(_vm._f("formatGetDate")(scope.row.create_time)))]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"user","label":"维保人"}})],1),_vm._v(" "),_c('div',{staticClass:"app-pagers"},[(_vm.dataList.length !== 0)?_c('el-pagination',{attrs:{"background":"","layout":"prev, pager, next","page-size":this.page_size,"current-page":this.page_cur,"total":this.page_data_total},on:{"current-change":_vm.pageChange}}):_vm._e()],1)],1)])])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('header',{staticClass:"app-top-bar"},[_c('h1',{staticClass:"titles"},[_vm._v("报表统计")]),_vm._v(" "),_c('a',{staticClass:"icons icon-add pull-right"})])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var views_Record = (esExports);
// CONCATENATED MODULE: ./src/views/Record/index.vue
function injectStyle (ssrContext) {
  __webpack_require__("UE6D")
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
  Record,
  views_Record,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_views_Record = __webpack_exports__["default"] = (Component.exports);


/***/ })

});