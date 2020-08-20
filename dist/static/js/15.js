webpackJsonp([15],{

/***/ "7RXp":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("w3vP");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("2f6bcbe3", content, true);

/***/ }),

/***/ "Cxod":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/Attendance/index.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Attendance = ({
  data: function data() {
    return {
      dialogVisible: false,
      diaLogDetailVisible: false,
      formDetailData: [],
      searchName: "",
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
    getDataList: function getDataList() {
      var _this = this;

      var page = this.page_cur;
      var type = this.searchType;
      var status = this.searchStatus;
      var sid = this.chlidStationId;
      var assigner_id = this.searchAssignerId;
      var start_time = this.searchStartTime;
      var end_time = this.searchEndTime;
      this.request({
        url: "/clock/getClockPages",
        method: "get",
        params: { page: page, sid: sid, assigner_id: assigner_id, type: type, status: status, start_time: start_time, end_time: end_time }
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
    searchNameEvent: function searchNameEvent() {
      this.page_cur = this.page_total;
      this.getDataList();
    },

    //添加
    addDialogEvent: function addDialogEvent() {
      this.dialogVisible = true;
    },
    addEvent: function addEvent() {
      var _this2 = this;

      var that = this;
      this.$refs["formRulesRef"].validate(function (valid) {
        if (valid) {
          var data = that.formData;
          data.sid = that.formData.sid[1];
          _this2.request({
            url: "/assign/addAssign",
            method: "post",
            data: data
          }).then(function (response) {
            var data = response.data;
            if (data.status == 1) {
              _this2.diaLogFormVisible = false;
              _this2.searchType = "0";
              _this2.getDataList();
              _this2.$message({
                type: "success",
                message: "保存成功！"
              });
            }
          });
        } else {
          console.log("操作失败！");
          return false;
        }
      });
    },
    tableRowDetails: function tableRowDetails(row) {
      this.diaLogDetailVisible = true;
      this.formDetailData.user = row.user;
      this.formDetailData.start_time = row.start_time;
      this.formDetailData.end_time = row.end_time;
      this.formDetailData.address = row.address;
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-270f04fc","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/Attendance/index.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"app-pages"},[_c('header',{staticClass:"app-top-bar"},[_c('h1',{staticClass:"titles"},[_vm._v("考勤统计")]),_vm._v(" "),_c('a',{staticClass:"icons icon-add pull-right",on:{"click":_vm.addDialogEvent}})]),_vm._v(" "),_c('div',{staticClass:"app-content"},[_c('div',{staticClass:"app-search"},[_c('el-input',{staticClass:"inline-input",attrs:{"prefix-icon":"el-icon-search","placeholder":"请输入打卡人名字","clearable":""},on:{"select":function($event){_vm.searchNameEvent($event)}},model:{value:(_vm.searchName),callback:function ($$v) {_vm.searchName=$$v},expression:"searchName"}})],1),_vm._v(" "),_c('div',{staticClass:"app-content-rows"},[_c('div',{staticClass:"app-table"},[_c('el-table',{attrs:{"data":_vm.dataList,"size":"mini"},on:{"row-click":_vm.tableRowDetails}},[_c('el-table-column',{attrs:{"label":"序号","type":"index"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"address","label":"站点名"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"开始时间"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_vm._v(_vm._s(_vm._f("formatDateTime")(scope.row.start_time)))]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"结束时间"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_vm._v(_vm._s(_vm._f("formatDateTime")(scope.row.end_time)))]}}])})],1),_vm._v(" "),_c('div',{staticClass:"app-pagination"},[(_vm.dataList.length !== 0)?_c('el-pagination',{staticClass:"pagination",attrs:{"layout":"prev, pager, next","page-size":this.page_size,"current-page":this.page_cur,"total":this.page_data_total},on:{"current-change":_vm.pageChange}}):_vm._e()],1)],1)])]),_vm._v(" "),_c('el-dialog',{attrs:{"width":"90%","title":"打卡详情","visible":_vm.diaLogDetailVisible,"close-on-click-modal":false,"show-close":false,"center":""},on:{"update:visible":function($event){_vm.diaLogDetailVisible=$event}}},[_c('el-form',{staticClass:"el-form-custom",attrs:{"label-width":"100px"}},[_c('el-form-item',{attrs:{"label":"打卡人："}},[_c('el-input',{attrs:{"autocomplete":"off","disabled":""},model:{value:(_vm.formDetailData.user),callback:function ($$v) {_vm.$set(_vm.formDetailData, "user", $$v)},expression:"formDetailData.user"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"开始时间："}},[_c('el-input',{attrs:{"autocomplete":"off","disabled":""},model:{value:(_vm.formDetailData.start_time),callback:function ($$v) {_vm.$set(_vm.formDetailData, "start_time", $$v)},expression:"formDetailData.start_time"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"结束时间："}},[_c('el-input',{attrs:{"autocomplete":"off","disabled":""},model:{value:(_vm.formDetailData.end_time),callback:function ($$v) {_vm.$set(_vm.formDetailData, "end_time", $$v)},expression:"formDetailData.end_time"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"打卡地址："}},[_c('el-input',{attrs:{"type":"textarea","rows":"3","disabled":""},model:{value:(_vm.formDetailData.address),callback:function ($$v) {_vm.$set(_vm.formDetailData, "address", $$v)},expression:"formDetailData.address"}})],1)],1),_vm._v(" "),_c('div',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{attrs:{"type":"info","plain":""},on:{"click":function($event){_vm.diaLogDetailVisible = false}}},[_vm._v("关闭")])],1)],1),_vm._v(" "),_c('el-dialog',{attrs:{"width":"90%","top":"40%","title":"提示","visible":_vm.dialogVisible,"close-on-click-modal":false,"show-close":false,"center":""},on:{"update:visible":function($event){_vm.dialogVisible=$event}}},[_c('span',{staticClass:"dialiginfoa"},[_vm._v("是否打卡后结束任务")]),_vm._v(" "),_c('span',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){_vm.dialogVisible = false}}},[_vm._v("确定")]),_vm._v(" "),_c('el-button',{attrs:{"type":"info","plain":""},on:{"click":function($event){_vm.dialogVisible = false}}},[_vm._v("重新开始")])],1)])],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var views_Attendance = (esExports);
// CONCATENATED MODULE: ./src/views/Attendance/index.vue
function injectStyle (ssrContext) {
  __webpack_require__("7RXp")
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
  Attendance,
  views_Attendance,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_views_Attendance = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "w3vP":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, "\n.dialiginfoa {\r\n  font-weight: 700;\r\n  text-align: center;\r\n  display: block;\r\n  margin: 0 auto;\r\n  padding: 20px 0;\n}\r\n", ""]);

// exports


/***/ })

});