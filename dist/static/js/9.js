webpackJsonp([9],{

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      diaLogDetailVisible: false,
      formDetailData: [],
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
    },
    tableRowDetails: function tableRowDetails(row) {
      // if (row.is_read == 0) {
      //   this.request({
      //     url: "/alert/updateRead",
      //     method: "post",
      //     data: { id: row.id, type: this.tabType }
      //   }).then(res => {
      //     let data = res.data;
      //     if (data.status == 1) {
      //       this.getDataList();
      //     }
      //   });
      // }
      this.diaLogDetailVisible = true;
      this.formDetailData.address = row.address;
      this.formDetailData.create_time = row.create_time;
      this.formDetailData.reason = row.reason;
      // this.formDetailData.type = row.type;
      if (row.type == 1) {
        this.formDetailData.typeName = "风机";
        this.formDetailData.typeNameB = "PH";
      } else if (row.type == 2) {
        this.formDetailData.typeName = "水泵";
        this.formDetailData.typeNameB = "DO";
      } else if (row.type == 3) {
        this.formDetailData.typeName = "紫外灯";
        this.formDetailData.typeNameB = "液位";
      } else {
        this.formDetailData.typeName = "PLC";
      }
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-6e45506e","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/Warning/index.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"app-pages"},[_vm._m(0),_vm._v(" "),_c('div',{staticClass:"app-content"},[_c('div',{staticClass:"app-tab"},[_c('div',{staticClass:"item"},[_c('span',{class:_vm.tabType == 2 ? 'active':'',on:{"click":function($event){_vm.tabSelect(2)}}},[_vm._v("设备告警")])]),_vm._v(" "),_c('div',{staticClass:"item"},[_c('span',{class:_vm.tabType == 1 ? 'active':'',on:{"click":function($event){_vm.tabSelect(1)}}},[_vm._v("水质告警")])]),_vm._v(" "),_c('div',{staticClass:"item"},[_c('span',{class:_vm.tabType == 3 ? 'active':'',on:{"click":function($event){_vm.tabSelect(3)}}},[_vm._v("入侵告警")])])]),_vm._v(" "),_c('div',{staticClass:"app-content-rows"},[_c('div',{staticClass:"app-table"},[_c('el-table',{attrs:{"data":_vm.dataList,"size":"mini"},on:{"row-click":_vm.tableRowDetails}},[_c('el-table-column',{attrs:{"label":"序号","width":"50"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_vm._v(_vm._s(scope.$index+(_vm.page_cur - 1) * _vm.page_size + 1))]}}])}),_vm._v(" "),(this.tabType==2)?_c('el-table-column',{attrs:{"label":"设备","class-name":"nowrap","width":"60"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [(scope.row.type==1)?_c('span',[_vm._v("风机")]):_vm._e(),_vm._v(" "),(scope.row.type==2)?_c('span',[_vm._v("水泵")]):_vm._e(),_vm._v(" "),(scope.row.type==3)?_c('span',[_vm._v("紫外灯")]):_vm._e(),_vm._v(" "),(scope.row.type==4)?_c('span',[_vm._v("PLC")]):_vm._e()]}}])}):_vm._e(),_vm._v(" "),(this.tabType==1)?_c('el-table-column',{attrs:{"prop":"type","label":"类型","width":"60"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [(scope.row.type==1)?_c('span',[_vm._v("PH")]):(scope.row.type==2)?_c('span',[_vm._v("DO")]):_c('span',[_vm._v("液位")])]}}])}):_vm._e(),_vm._v(" "),_c('el-table-column',{attrs:{"label":"发生位置","prop":"address","class-name":"nowraps"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"告警时间","width":"90","align":"center"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('span',[_vm._v(_vm._s(_vm._f("formatDateTime")(scope.row.create_time)))])]}}])})],1),_vm._v(" "),_c('div',{staticClass:"app-pagers"},[(_vm.dataList.length !== 0)?_c('el-pagination',{attrs:{"background":"","layout":"prev, pager, next","page-size":this.page_size,"current-page":this.page_cur,"total":this.page_data_total},on:{"current-change":_vm.pageChange}}):_vm._e()],1)],1)])]),_vm._v(" "),_c('el-dialog',{attrs:{"width":"90%","title":"告警详情","visible":_vm.diaLogDetailVisible,"modal-append-to-body":false,"close-on-click-modal":false,"show-close":false,"center":""},on:{"update:visible":function($event){_vm.diaLogDetailVisible=$event}}},[_c('el-form',{staticClass:"el-form-custom",attrs:{"label-width":"100px"}},[_c('el-form-item',{attrs:{"label":"告警时间："}},[_c('el-input',{attrs:{"autocomplete":"off","disabled":""},model:{value:(_vm.formDetailData.create_time),callback:function ($$v) {_vm.$set(_vm.formDetailData, "create_time", $$v)},expression:"formDetailData.create_time"}})],1),_vm._v(" "),(_vm.tabType ==1)?_c('el-form-item',{attrs:{"label":"水质类型："}},[_c('el-input',{attrs:{"autocomplete":"off","disabled":""},model:{value:(_vm.formDetailData.typeNameB),callback:function ($$v) {_vm.$set(_vm.formDetailData, "typeNameB", $$v)},expression:"formDetailData.typeNameB"}})],1):_vm._e(),_vm._v(" "),(_vm.tabType ==2)?_c('el-form-item',{attrs:{"label":"设备类型："}},[_c('el-input',{attrs:{"autocomplete":"off","disabled":""},model:{value:(_vm.formDetailData.typeName),callback:function ($$v) {_vm.$set(_vm.formDetailData, "typeName", $$v)},expression:"formDetailData.typeName"}})],1):_vm._e(),_vm._v(" "),_c('el-form-item',{attrs:{"label":"发生位置："}},[_c('el-input',{attrs:{"autocomplete":"off","disabled":""},model:{value:(_vm.formDetailData.address),callback:function ($$v) {_vm.$set(_vm.formDetailData, "address", $$v)},expression:"formDetailData.address"}})],1),_vm._v(" "),(_vm.tabType !=3)?_c('el-form-item',{attrs:{"label":"告警原因："}},[_c('div',{staticClass:"el-contents"},[_vm._v(_vm._s(_vm.formDetailData.reason))])]):_vm._e()],1),_vm._v(" "),_c('div',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){_vm.diaLogDetailVisible = false}}},[_vm._v("关闭")])],1)],1)],1)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('header',{staticClass:"app-top-bar"},[_c('h1',{staticClass:"titles"},[_vm._v("告警列表")])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var views_Warning = (esExports);
// CONCATENATED MODULE: ./src/views/Warning/index.vue
function injectStyle (ssrContext) {
  __webpack_require__("umCM")
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


/***/ }),

/***/ "umCM":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("x4+k");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("792458e1", content, true);

/***/ }),

/***/ "x4+k":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, "\n.nums {\r\n  padding: 3px 5px;\n}\n.cirshow {\r\n  background: #ff3856;\r\n  color: #fff;\r\n  padding: 3px 5px;\r\n  border-radius: 3px;\n}\r\n", ""]);

// exports


/***/ })

});