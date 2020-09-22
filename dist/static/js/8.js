webpackJsonp([8],{

/***/ "rxBd":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("s0Cp");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("31ff91b1", content, true);

/***/ }),

/***/ "s0Cp":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, "\n.nums {\r\n  padding: 3px 5px;\n}\n.cirshow {\r\n  background: #ff3856;\r\n  color: #fff;\r\n  padding: 3px 5px;\r\n  border-radius: 3px;\n}\n.el-drawer {\r\n  overflow: scroll;\n}\n.el-drawer .stitless {\r\n  overflow: hidden;\r\n  text-align: center;\r\n  display: block;\r\n  color: #1386ff;\r\n  font-size: 16px;\r\n  font-weight: 700;\r\n  padding-top: 20px;\r\n  padding-bottom: 20px;\n}\n.el-drawer .el-checks .el-form-item {\r\n  margin-bottom: 16px;\n}\n.el-drawer .samptitles {\r\n  padding: 20px 0 15px 15px;\r\n  color: #1d397a;\n}\n.el-drawer .keeptime .el-input-group__append {\r\n  border-color: #e4e7ed;\n}\r\n", ""]);

// exports


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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      drawer: false,
      tabType: 1,
      page_cur: 1,
      page_data_total: 0,
      page_size: 20,
      page_total: 0,
      dataList: [],

      formData: [],
      prepareList: [],
      sysCheckList: [],
      deviceCheckkList: [],
      periodCheck: []
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
    },
    addShowEvent: function addShowEvent() {
      this.$router.push("/record/edit");
    },
    tableRowDetails: function tableRowDetails(row) {
      this.drawer = true;
      this.getConfig();
      this.detailEvent(row.id);
      // this.$router.push({
      //   path: "/record/detail",
      //   query: {
      //     id: row.id
      //   }
      // });
    },
    detailEvent: function detailEvent(id) {
      var _this2 = this;

      this.request({
        url: "/record/getRecordDetail",
        method: "get",
        params: { id: id, type: 1 }
      }).then(function (res) {
        var data = res.data;
        if (data.status == 1) {
          _this2.formData = data.data;
        }
      });
    },
    getConfig: function getConfig() {
      var _this3 = this;

      this.request({
        url: "/record/getConfig",
        method: "get"
      }).then(function (response) {
        var data = response.data;
        if (data.status == 1) {
          _this3.prepareList = data.data.prepare; //维护预备
          _this3.sysCheckList = data.data.sys_check; //系统检查
          _this3.deviceCheckkList = data.data.device_check; //仪器检查
          _this3.periodCheck = data.data.period_check; //周期维护
        }
      });
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-73ef20f5","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/Record/index.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"app-pages"},[_c('header',{staticClass:"app-top-bar"},[_c('h1',{staticClass:"titles"},[_vm._v("报表统计")]),_vm._v(" "),_c('a',{staticClass:"icons icon-add pull-right",on:{"click":_vm.addShowEvent}})]),_vm._v(" "),_c('div',{staticClass:"app-content"},[_c('div',{staticClass:"app-tab"},[_c('div',{staticClass:"item"},[_c('span',{staticClass:"active",on:{"click":function($event){_vm.tabSelect(1)}}},[_vm._v("维护记录")])]),_vm._v(" "),_c('div',{staticClass:"item"},[_c('span',{on:{"click":function($event){_vm.tabSelect(2)}}},[_vm._v("运行记录")])]),_vm._v(" "),_c('div',{staticClass:"item"},[_c('span',{on:{"click":function($event){_vm.tabSelect(3)}}},[_vm._v("采样化验单")])])]),_vm._v(" "),_c('div',{staticClass:"app-content-rows"},[_c('div',{staticClass:"app-table"},[_c('el-table',{attrs:{"data":_vm.dataList,"size":"mini"},on:{"row-click":_vm.tableRowDetails}},[_c('el-table-column',{attrs:{"label":"序号","width":"50","class-name":"nowrap"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_vm._v(_vm._s(scope.$index+(_vm.page_cur - 1) * _vm.page_size + 1))]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"站点名","prop":"station_name","class-name":"nowrap"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"user","label":"维保人"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"维保日期","width":"90"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_vm._v(_vm._s(_vm._f("formatGetDate")(scope.row.create_time)))]}}])})],1),_vm._v(" "),_c('div',{staticClass:"app-pagers"},[(_vm.dataList.length !== 0)?_c('el-pagination',{attrs:{"background":"","layout":"prev, pager, next","page-size":this.page_size,"current-page":this.page_cur,"total":this.page_data_total},on:{"current-change":_vm.pageChange}}):_vm._e()],1)],1)])]),_vm._v(" "),_c('el-drawer',{ref:"drawer",attrs:{"title":"我是标题","visible":_vm.drawer,"withHeader":false,"size":"100%","modal-append-to-body":false,"direction":"rtl"},on:{"update:visible":function($event){_vm.drawer=$event}}},[_c('div',{staticClass:"app-pages"},[_c('header',{staticClass:"app-top-bar"},[_c('span',{staticClass:"icons icon-back pull-left",on:{"click":function($event){_vm.$refs.drawer.closeDrawer()}}}),_vm._v(" "),_c('h1',{staticClass:"titles"},[_vm._v("污水处理站维护记录表")])]),_vm._v(" "),_c('div',{staticClass:"app-content"},[_c('div',{staticClass:"app-form",staticStyle:{"margin":"0"}},[_c('el-form',{staticClass:"el-form-custom",attrs:{"model":_vm.formData,"label-width":"100px"}},[_c('el-form-item',{attrs:{"label":"站点名：","prop":"sid","label-width":"90px"}},[_c('el-input',{attrs:{"disabled":""},model:{value:(_vm.formData.station_name),callback:function ($$v) {_vm.$set(_vm.formData, "station_name", $$v)},expression:"formData.station_name"}})],1),_vm._v(" "),_c('el-form-item',{ref:"user_id",attrs:{"label":"维护人：","prop":"user_id","label-width":"90px"}},[_c('el-input',{attrs:{"disabled":""},model:{value:(_vm.formData.user),callback:function ($$v) {_vm.$set(_vm.formData, "user", $$v)},expression:"formData.user"}})],1),_vm._v(" "),_c('div',{staticClass:"stitless"},[_vm._v("设备巡检内容、情况、及处理情况说明")]),_vm._v(" "),_c('div',{staticClass:"el-checks app-dis-checkbox"},[_c('el-form-item',{attrs:{"label":"1.维护预备：","prop":"prepare"}},[_c('el-checkbox-group',{model:{value:(_vm.formData.prepare),callback:function ($$v) {_vm.$set(_vm.formData, "prepare", $$v)},expression:"formData.prepare"}},_vm._l((_vm.prepareList),function(item){return _c('el-checkbox',{key:item.id,attrs:{"label":item.id+'',"disabled":""}},[_vm._v(_vm._s(item.value))])}))],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"2.系统检查：","prop":"sys_check"}},[_c('el-checkbox-group',{model:{value:(_vm.formData.sys_check),callback:function ($$v) {_vm.$set(_vm.formData, "sys_check", $$v)},expression:"formData.sys_check"}},_vm._l((_vm.sysCheckList),function(item){return _c('el-checkbox',{key:item.id,attrs:{"label":item.id+'',"disabled":""}},[_vm._v(_vm._s(item.value))])}))],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"3.仪器检查：","prop":"device_check"}},[_c('el-checkbox-group',{model:{value:(_vm.formData.device_check),callback:function ($$v) {_vm.$set(_vm.formData, "device_check", $$v)},expression:"formData.device_check"}},_vm._l((_vm.deviceCheckkList),function(item){return _c('el-checkbox',{key:item.id,attrs:{"label":item.id+'',"disabled":""}},[_vm._v(_vm._s(item.value))])}))],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"4.周期维护：","prop":"period_check"}},[_c('el-checkbox-group',{model:{value:(_vm.formData.period_check),callback:function ($$v) {_vm.$set(_vm.formData, "period_check", $$v)},expression:"formData.period_check"}},_vm._l((_vm.periodCheck),function(item){return _c('el-checkbox',{key:item.id,attrs:{"label":item.id+'',"disabled":""}},[_vm._v(_vm._s(item.value))])}))],1)],1),_vm._v(" "),_c('div',{staticClass:"samptitles"},[_vm._v("5.其他情况")]),_vm._v(" "),_c('el-form-item',{attrs:{"label":"更换耗材："}},[_c('div',{staticClass:"el-contents"},[_vm._v(_vm._s(_vm.formData.replace_material))])]),_vm._v(" "),_c('el-form-item',{attrs:{"label":"离站时间：","prop":"leave_time"}},[_c('el-date-picker',{attrs:{"type":"datetime","placeholder":"选择日期","disabled":""},model:{value:(_vm.formData.leave_time),callback:function ($$v) {_vm.$set(_vm.formData, "leave_time", $$v)},expression:"formData.leave_time"}})],1),_vm._v(" "),_c('el-form-item',{staticClass:"keeptime",attrs:{"label":"服务耗时：","prop":"keep_time"}},[_c('el-input',{attrs:{"disabled":""},model:{value:(_vm.formData.keep_time),callback:function ($$v) {_vm.$set(_vm.formData, "keep_time", $$v)},expression:"formData.keep_time"}},[_c('template',{slot:"append"},[_vm._v("小时")])],2)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"异常情况："}},[_c('div',{staticClass:"el-contents"},[_vm._v(_vm._s(_vm.formData.exception))])]),_vm._v(" "),_c('el-form-item',{attrs:{"label":"备注："}},[_c('div',{staticClass:"el-contents"},[_vm._v(_vm._s(_vm.formData.remark))])])],1)],1)])])])],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var views_Record = (esExports);
// CONCATENATED MODULE: ./src/views/Record/index.vue
function injectStyle (ssrContext) {
  __webpack_require__("rxBd")
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