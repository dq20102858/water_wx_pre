webpackJsonp([13],{

/***/ "IsfQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/Record/operation.vue
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

/* harmony default export */ var operation = ({
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
    tabSelect: function tabSelect(type) {
      if (type == 2) {
        this.$router.push("/record/operation");
      } else if (type == 3) {
        this.$router.push("/record/sampling");
      } else {
        this.$router.push("/record");
      }
      // this.tabType = type;
      // this.getDataList();
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
    },
    addShowEvent: function addShowEvent() {
      this.$router.push("/record/operationedit");
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-4976bad3","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/Record/operation.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"app-pages"},[_c('header',{staticClass:"app-top-bar"},[_c('h1',{staticClass:"titles"},[_vm._v("报表统计")]),_vm._v(" "),_c('a',{staticClass:"icons icon-add pull-right",on:{"click":_vm.addShowEvent}})]),_vm._v(" "),_c('div',{staticClass:"app-content"},[_c('div',{staticClass:"app-tab"},[_c('div',{staticClass:"item"},[_c('span',{on:{"click":function($event){_vm.tabSelect(1)}}},[_vm._v("维护记录")])]),_vm._v(" "),_c('div',{staticClass:"item"},[_c('span',{staticClass:"active",on:{"click":function($event){_vm.tabSelect(2)}}},[_vm._v("运行记录")])]),_vm._v(" "),_c('div',{staticClass:"item"},[_c('span',{on:{"click":function($event){_vm.tabSelect(3)}}},[_vm._v("采样化验单")])])]),_vm._v(" "),_c('div',{staticClass:"app-content-rows"},[_c('div',{staticClass:"app-table"},[_c('el-table',{attrs:{"data":_vm.dataList,"size":"mini"}},[_c('el-table-column',{attrs:{"label":"序号"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_vm._v("\n               "+_vm._s(scope.$index+(_vm.page_cur - 1) * _vm.page_size + 1)+"\n            ")]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"站点名","prop":"station_name"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"electricity","label":"电表读数"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"巡检日期","class-name":"linewrap"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_vm._v(_vm._s(_vm._f("formatGetDate")(scope.row.create_time)))]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"user","label":"巡检人"}})],1),_vm._v(" "),_c('div',{staticClass:"app-pagers"},[(_vm.dataList.length !== 0)?_c('el-pagination',{attrs:{"background":"","layout":"prev, pager, next","page-size":this.page_size,"current-page":this.page_cur,"total":this.page_data_total},on:{"current-change":_vm.pageChange}}):_vm._e()],1)],1)])])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var Record_operation = (esExports);
// CONCATENATED MODULE: ./src/views/Record/operation.vue
function injectStyle (ssrContext) {
  __webpack_require__("M7LN")
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
  operation,
  Record_operation,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var views_Record_operation = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "M7LN":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("XPDM");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("471af364", content, true);

/***/ }),

/***/ "XPDM":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, "\n.nums {\r\n  padding: 3px 5px;\n}\n.cirshow {\r\n  background: #ff3856;\r\n  color: #fff;\r\n  padding: 3px 5px;\r\n  border-radius: 3px;\n}\r\n\r\n", ""]);

// exports


/***/ })

});