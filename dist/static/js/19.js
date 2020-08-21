webpackJsonp([19],{

/***/ "+Fuy":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, "\n.nums {\r\n  padding: 3px 5px;\n}\n.cirshow {\r\n  background: #FF3856;\r\n  color: #fff;\r\n  padding: 3px 5px;\r\n  border-radius: 3px;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "Qou/":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("+Fuy");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("9d075caa", content, true);

/***/ }),

/***/ "WdIq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/Warning/index.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Warning = ({
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
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-0234f85d","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/Warning/index.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"app-pages"},[_vm._m(0),_vm._v(" "),_c('div',{staticClass:"app-content"},[_c('div',{staticClass:"app-tab"},[_c('div',{staticClass:"item"},[_c('span',{class:_vm.tabType == 2 ? 'active':'',on:{"click":function($event){_vm.tabSelect(2)}}},[_vm._v("设备告警")])]),_vm._v(" "),_c('div',{staticClass:"item"},[_c('span',{class:_vm.tabType == 1 ? 'active':'',on:{"click":function($event){_vm.tabSelect(1)}}},[_vm._v("水质告警")])]),_vm._v(" "),_c('div',{staticClass:"item"},[_c('span',{class:_vm.tabType == 3 ? 'active':'',on:{"click":function($event){_vm.tabSelect(3)}}},[_vm._v("入侵告警")])])]),_vm._v(" "),_c('div',{staticClass:"app-content-rows"},[_c('div',{staticClass:"app-table"},[_c('el-table',{attrs:{"data":_vm.dataList,"size":"mini"}},[_c('el-table-column',{attrs:{"label":"序号","type":"index"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('span',{class:[scope.row.is_read!=1? 'cirshow' : 'nums']},[_vm._v(_vm._s(scope.$index+(_vm.page_cur - 1) * _vm.page_size + 1))])]}}])}),_vm._v(" "),(this.tabType==2)?_c('el-table-column',{attrs:{"label":"告警设备","class-name":"nowrap"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [(scope.row.type==1)?_c('span',[_vm._v("风机")]):_vm._e(),_vm._v(" "),(scope.row.type==2)?_c('span',[_vm._v("水泵")]):_vm._e(),_vm._v(" "),(scope.row.type==3)?_c('span',[_vm._v("紫外灯")]):_vm._e(),_vm._v(" "),(scope.row.type==4)?_c('span',[_vm._v("PLC")]):_vm._e()]}}])}):_vm._e(),_vm._v(" "),(this.tabType==1)?_c('el-table-column',{attrs:{"prop":"type","label":"水质类型"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [(scope.row.type==1)?_c('span',[_vm._v("PH")]):(scope.row.type==2)?_c('span',[_vm._v("DO")]):_c('span',[_vm._v("液位")])]}}])}):_vm._e(),_vm._v(" "),_c('el-table-column',{attrs:{"label":"发生位置","prop":"address"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"告警时间"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('span',[_vm._v(_vm._s(_vm._f("formatDateTime")(scope.row.create_time)))])]}}])})],1),_vm._v(" "),_c('div',{staticClass:"app-pagination"},[(_vm.dataList.length !== 0)?_c('el-pagination',{staticClass:"pagination",attrs:{"layout":"prev, pager, next","page-size":this.page_size,"current-page":this.page_cur,"total":this.page_data_total},on:{"current-change":_vm.pageChange}}):_vm._e()],1)],1)])])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('header',{staticClass:"app-top-bar"},[_c('h1',{staticClass:"titles"},[_vm._v("告警列表")])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var views_Warning = (esExports);
// CONCATENATED MODULE: ./src/views/Warning/index.vue
function injectStyle (ssrContext) {
  __webpack_require__("Qou/")
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
  Warning,
  views_Warning,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_views_Warning = __webpack_exports__["default"] = (Component.exports);


/***/ })

});