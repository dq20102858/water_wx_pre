webpackJsonp([10],{

/***/ "N4Qd":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, "\n.stitless {\r\n  overflow: hidden;\r\n  text-align: center;\r\n  display: block;\r\n  color: #1386ff;\r\n  font-size: 16px;\r\n  font-weight: 700;\r\n  padding-top: 20px;\r\n  padding-bottom: 20px;\n}\n.el-checks .el-form-item {\r\n  margin-bottom: 16px;\n}\n.samptitles {\r\n  padding: 20px 0 15px 15px;\r\n  color: #1d397a;\n}\n.keeptime .el-input-group__append {\r\n  border-color: #e4e7ed;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "QGeQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/Record/detail.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var detail = ({
  data: function data() {
    return {
      formData: [],
      prepareList: [],
      sysCheckList: [],
      deviceCheckkList: [],
      periodCheck: []
    };
  },
  created: function created() {
    this.getConfig();
    this.detailEvent();
  },

  methods: {
    backURL: function backURL() {
      this.$router.go(-1); //返回上一层
    },
    detailEvent: function detailEvent() {
      var _this = this;

      this.request({
        url: "/record/getRecordDetail",
        method: "get",
        params: { id: this.$route.query.id, type: 1 }
      }).then(function (res) {
        var data = res.data;
        if (data.status == 1) {
          _this.formData = data.data;
        }
      });
    },
    getConfig: function getConfig() {
      var _this2 = this;

      this.request({
        url: "/record/getConfig",
        method: "get"
      }).then(function (response) {
        var data = response.data;
        if (data.status == 1) {
          _this2.prepareList = data.data.prepare; //维护预备
          _this2.sysCheckList = data.data.sys_check; //系统检查
          _this2.deviceCheckkList = data.data.device_check; //仪器检查
          _this2.periodCheck = data.data.period_check; //周期维护
        }
      });
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-6ce4808e","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/Record/detail.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"app-pages"},[_c('header',{staticClass:"app-top-bar"},[_c('span',{staticClass:"icons icon-back pull-left",on:{"click":_vm.backURL}}),_vm._v(" "),_c('h1',{staticClass:"titles"},[_vm._v("污水处理站维护记录表")])]),_vm._v(" "),_c('div',{staticClass:"app-content"},[_c('div',{staticClass:"app-form"},[_c('el-form',{staticClass:"el-form-custom",attrs:{"model":_vm.formData,"label-width":"100px"}},[_c('el-form-item',{attrs:{"label":"站点名：","prop":"sid","label-width":"90px"}},[_c('el-input',{attrs:{"disabled":""},model:{value:(_vm.formData.station_name),callback:function ($$v) {_vm.$set(_vm.formData, "station_name", $$v)},expression:"formData.station_name"}})],1),_vm._v(" "),_c('el-form-item',{ref:"user_id",attrs:{"label":"维护人：","prop":"user_id","label-width":"90px"}},[_c('el-input',{attrs:{"disabled":""},model:{value:(_vm.formData.user),callback:function ($$v) {_vm.$set(_vm.formData, "user", $$v)},expression:"formData.user"}})],1),_vm._v(" "),_c('div',{staticClass:"stitless"},[_vm._v("设备巡检内容、情况、及处理情况说明")]),_vm._v(" "),_c('div',{staticClass:"el-checks app-dis-checkbox"},[_c('el-form-item',{attrs:{"label":"1.维护预备：","prop":"prepare"}},[_c('el-checkbox-group',{model:{value:(_vm.formData.prepare),callback:function ($$v) {_vm.$set(_vm.formData, "prepare", $$v)},expression:"formData.prepare"}},_vm._l((_vm.prepareList),function(item){return _c('el-checkbox',{key:item.id,attrs:{"label":item.id+'',"disabled":""}},[_vm._v(_vm._s(item.value))])}))],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"2.系统检查：","prop":"sys_check"}},[_c('el-checkbox-group',{model:{value:(_vm.formData.sys_check),callback:function ($$v) {_vm.$set(_vm.formData, "sys_check", $$v)},expression:"formData.sys_check"}},_vm._l((_vm.sysCheckList),function(item){return _c('el-checkbox',{key:item.id,attrs:{"label":item.id+'',"disabled":""}},[_vm._v(_vm._s(item.value))])}))],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"3.仪器检查：","prop":"device_check"}},[_c('el-checkbox-group',{model:{value:(_vm.formData.device_check),callback:function ($$v) {_vm.$set(_vm.formData, "device_check", $$v)},expression:"formData.device_check"}},_vm._l((_vm.deviceCheckkList),function(item){return _c('el-checkbox',{key:item.id,attrs:{"label":item.id+'',"disabled":""}},[_vm._v(_vm._s(item.value))])}))],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"4.周期维护：","prop":"period_check"}},[_c('el-checkbox-group',{model:{value:(_vm.formData.period_check),callback:function ($$v) {_vm.$set(_vm.formData, "period_check", $$v)},expression:"formData.period_check"}},_vm._l((_vm.periodCheck),function(item){return _c('el-checkbox',{key:item.id,attrs:{"label":item.id+'',"disabled":""}},[_vm._v(_vm._s(item.value))])}))],1)],1),_vm._v(" "),_c('div',{staticClass:"samptitles"},[_vm._v("5.其他情况")]),_vm._v(" "),_c('el-form-item',{attrs:{"label":"更换耗材："}},[_c('div',{staticClass:"el-contents"},[_vm._v(_vm._s(_vm.formData.replace_material))])]),_vm._v(" "),_c('el-form-item',{attrs:{"label":"离站时间：","prop":"leave_time"}},[_c('el-date-picker',{attrs:{"type":"datetime","placeholder":"选择日期","disabled":""},model:{value:(_vm.formData.leave_time),callback:function ($$v) {_vm.$set(_vm.formData, "leave_time", $$v)},expression:"formData.leave_time"}})],1),_vm._v(" "),_c('el-form-item',{staticClass:"keeptime",attrs:{"label":"服务耗时：","prop":"keep_time"}},[_c('el-input',{attrs:{"disabled":""},model:{value:(_vm.formData.keep_time),callback:function ($$v) {_vm.$set(_vm.formData, "keep_time", $$v)},expression:"formData.keep_time"}},[_c('template',{slot:"append"},[_vm._v("小时")])],2)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"异常情况："}},[_c('div',{staticClass:"el-contents"},[_vm._v(_vm._s(_vm.formData.exception))])]),_vm._v(" "),_c('el-form-item',{attrs:{"label":"备注："}},[_c('div',{staticClass:"el-contents"},[_vm._v(_vm._s(_vm.formData.remark))])])],1)],1)])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var Record_detail = (esExports);
// CONCATENATED MODULE: ./src/views/Record/detail.vue
function injectStyle (ssrContext) {
  __webpack_require__("nUUB")
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
  detail,
  Record_detail,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var views_Record_detail = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "nUUB":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("N4Qd");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("2faf8529", content, true);

/***/ })

});