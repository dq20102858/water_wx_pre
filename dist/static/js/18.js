webpackJsonp([18],{

/***/ "B/Iu":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("UkqF");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("ad99f74e", content, true);

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      diaLogDetailVisible: false,
      formDetailData: [],
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
    },
    tableRowDetails: function tableRowDetails(row) {
      this.diaLogDetailVisible = true;
      this.formDetailData.station_name = row.station_name;
      this.formDetailData.assigner = row.assigner;
      this.formDetailData.assign_time = row.assign_time;
      this.formDetailData.phone = row.phone;
      this.formDetailData.content = row.content;
      if (row.type == 1) {
        this.formDetailData.typeName = "设备维修";
      } else if (row.type == 2) {
        this.formDetailData.typeName = "例行维保";
      } else {
        this.formDetailData.typeName = "例行维保";
      }
    }
    //end

  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-27a81658","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/Dispatch/list.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"app-pages"},[_c('header',{staticClass:"app-top-bar"},[_c('a',{staticClass:"icons icon-back pull-left",on:{"click":_vm.backURL}}),_vm._v(" "),_c('h1',{staticClass:"titles"},[_vm._v(_vm._s(_vm.pageTitle))])]),_vm._v(" "),_c('div',{staticClass:"app-content"},[_c('div',{staticClass:"app-content-rows"},[_c('div',{staticClass:"app-table"},[_c('el-table',{attrs:{"data":_vm.dataList,"size":"mini"},on:{"row-click":_vm.tableRowDetails}},[_c('el-table-column',{attrs:{"label":"序号","width":"50"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_vm._v(_vm._s(scope.$index+(_vm.page_cur - 1) * _vm.page_size + 1))]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"station_name","label":"站点名","class-name":"nowrap"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"指派时间","width":"90"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('span',[_vm._v(_vm._s(_vm._f("formatGetDate")(scope.row.assign_time)))])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"assigner","label":"指派人","width":"80","class-name":"nowrap"}})],1),_vm._v(" "),_c('div',{staticClass:"app-pagers"},[(_vm.dataList.length !== 0)?_c('el-pagination',{attrs:{"background":"","layout":"prev, pager, next","page-size":this.page_size,"current-page":this.page_cur,"total":this.page_data_total},on:{"current-change":_vm.pageChange}}):_vm._e()],1)],1)])]),_vm._v(" "),_c('el-dialog',{attrs:{"width":"90%","title":"派单详情","visible":_vm.diaLogDetailVisible,"modal-append-to-body":false,"close-on-click-modal":false,"show-close":false,"center":""},on:{"update:visible":function($event){_vm.diaLogDetailVisible=$event}}},[_c('el-form',{staticClass:"el-form-custom",attrs:{"label-width":"100px"}},[_c('el-form-item',{attrs:{"label":"站点名："}},[_c('el-input',{attrs:{"autocomplete":"off","disabled":""},model:{value:(_vm.formDetailData.station_name),callback:function ($$v) {_vm.$set(_vm.formDetailData, "station_name", $$v)},expression:"formDetailData.station_name"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"派单事项："}},[_c('el-input',{attrs:{"autocomplete":"off","disabled":""},model:{value:(_vm.formDetailData.typeName),callback:function ($$v) {_vm.$set(_vm.formDetailData, "typeName", $$v)},expression:"formDetailData.typeName"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"指派人员："}},[_c('el-input',{attrs:{"autocomplete":"off","disabled":""},model:{value:(_vm.formDetailData.assigner),callback:function ($$v) {_vm.$set(_vm.formDetailData, "assigner", $$v)},expression:"formDetailData.assigner"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"手机号码："}},[_c('el-input',{attrs:{"autocomplete":"off","disabled":""},model:{value:(_vm.formDetailData.phone),callback:function ($$v) {_vm.$set(_vm.formDetailData, "phone", $$v)},expression:"formDetailData.phone"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"指派时间："}},[_c('el-input',{attrs:{"autocomplete":"off","disabled":""},model:{value:(_vm.formDetailData.assign_time),callback:function ($$v) {_vm.$set(_vm.formDetailData, "assign_time", $$v)},expression:"formDetailData.assign_time"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"指派内容："}},[_c('div',{staticClass:"el-contents"},[_vm._v(_vm._s(_vm.formDetailData.content))])])],1),_vm._v(" "),_c('div',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){_vm.diaLogDetailVisible = false}}},[_vm._v("关闭")])],1)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var Dispatch_list = (esExports);
// CONCATENATED MODULE: ./src/views/Dispatch/list.vue
function injectStyle (ssrContext) {
  __webpack_require__("B/Iu")
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


/***/ }),

/***/ "UkqF":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ })

});