webpackJsonp([23],{

/***/ "D7H8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/Record/operationDetail.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var operationDetail = ({
  data: function data() {
    return {
      formData: {}
    };
  },
  created: function created() {
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
        params: { id: this.$route.query.id, type: 2 }
      }).then(function (res) {
        var data = res.data;
        if (data.status == 1) {
          _this.formData = data.data;
        }
      });
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-04242271","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/Record/operationDetail.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"app-pages"},[_c('header',{staticClass:"app-top-bar"},[_c('span',{staticClass:"icons icon-back pull-left",on:{"click":_vm.backURL}}),_vm._v(" "),_c('h1',{staticClass:"titles"},[_vm._v("污水处理站运行记录")])]),_vm._v(" "),_c('div',{staticClass:"app-content"},[_c('div',{staticClass:"app-form"},[_c('el-form',{staticClass:"el-form-custom",attrs:{"model":_vm.formData,"label-width":"110px"}},[_c('el-form-item',{attrs:{"label":"站点名：","prop":"sid","label-width":"90px"}},[_c('el-input',{attrs:{"disabled":""},model:{value:(_vm.formData.station_name),callback:function ($$v) {_vm.$set(_vm.formData, "station_name", $$v)},expression:"formData.station_name"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"巡查人：","prop":"user_id","label-width":"90px"}},[_c('el-input',{attrs:{"disabled":""},model:{value:(_vm.formData.user),callback:function ($$v) {_vm.$set(_vm.formData, "user", $$v)},expression:"formData.user"}})],1),_vm._v(" "),_c('div',{staticClass:"el-radioed app-dis-radio"},[_c('div',{staticClass:"stitless"},[_vm._v("设备运行状况")]),_vm._v(" "),_c('div',{staticClass:"el-form-item-inline"},[_c('el-form-item',{attrs:{"label":"风机：","prop":"fan"}},[_c('el-radio-group',{attrs:{"disabled":""},model:{value:(_vm.formData.fan+''),callback:function ($$v) {_vm.$set(_vm.formData, "fan+''", $$v)},expression:"formData.fan+''"}},[_c('el-radio',{attrs:{"label":"1"}},[_vm._v("正常")]),_vm._v(" "),_c('el-radio',{attrs:{"label":"2"}},[_vm._v("异常")])],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"紫外消毒机：","prop":"disinfect"}},[_c('el-radio-group',{attrs:{"disabled":""},model:{value:(_vm.formData.disinfect+''),callback:function ($$v) {_vm.$set(_vm.formData, "disinfect+''", $$v)},expression:"formData.disinfect+''"}},[_c('el-radio',{attrs:{"label":"1"}},[_vm._v("正常")]),_vm._v(" "),_c('el-radio',{attrs:{"label":"2"}},[_vm._v("异常")])],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"湿地情况：","prop":"wetland"}},[_c('el-radio-group',{attrs:{"disabled":""},model:{value:(_vm.formData.wetland+''),callback:function ($$v) {_vm.$set(_vm.formData, "wetland+''", $$v)},expression:"formData.wetland+''"}},[_c('el-radio',{attrs:{"label":"1"}},[_vm._v("正常")]),_vm._v(" "),_c('el-radio',{attrs:{"label":"2"}},[_vm._v("异常")])],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"各水泵：","prop":"water_pump"}},[_c('el-radio-group',{attrs:{"disabled":""},model:{value:(_vm.formData.water_pump+''),callback:function ($$v) {_vm.$set(_vm.formData, "water_pump+''", $$v)},expression:"formData.water_pump+''"}},[_c('el-radio',{attrs:{"label":"1"}},[_vm._v("正常")]),_vm._v(" "),_c('el-radio',{attrs:{"label":"2"}},[_vm._v("异常")])],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"电控柜：","prop":"cabinet"}},[_c('el-radio-group',{attrs:{"disabled":""},model:{value:(_vm.formData.cabinet+''),callback:function ($$v) {_vm.$set(_vm.formData, "cabinet+''", $$v)},expression:"formData.cabinet+''"}},[_c('el-radio',{attrs:{"label":"1"}},[_vm._v("正常")]),_vm._v(" "),_c('el-radio',{attrs:{"label":"2"}},[_vm._v("异常")])],1)],1)],1),_vm._v(" "),_c('div',{staticClass:"stitless"},[_vm._v("主要处理单元")]),_vm._v(" "),_c('el-form-item',{attrs:{"label":"预处理：","prop":"pretreatment"}},[_c('el-radio-group',{attrs:{"disabled":""},model:{value:(_vm.formData.pretreatment+''),callback:function ($$v) {_vm.$set(_vm.formData, "pretreatment+''", $$v)},expression:"formData.pretreatment+''"}},[_c('el-radio',{attrs:{"label":"1"}},[_vm._v("正常")]),_vm._v(" "),_c('el-radio',{attrs:{"label":"2"}},[_vm._v("异常")])],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"沉淀情况：","prop":"precipitate"}},[_c('el-radio-group',{attrs:{"disabled":""},model:{value:(_vm.formData.precipitate+''),callback:function ($$v) {_vm.$set(_vm.formData, "precipitate+''", $$v)},expression:"formData.precipitate+''"}},[_c('el-radio',{attrs:{"label":"1"}},[_vm._v("正常")]),_vm._v(" "),_c('el-radio',{attrs:{"label":"2"}},[_vm._v("异常")])],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"生化处理：","prop":"biochemistry"}},[_c('el-radio-group',{attrs:{"disabled":""},model:{value:(_vm.formData.biochemistry+''),callback:function ($$v) {_vm.$set(_vm.formData, "biochemistry+''", $$v)},expression:"formData.biochemistry+''"}},[_c('el-radio',{attrs:{"label":"1"}},[_vm._v("正常")]),_vm._v(" "),_c('el-radio',{attrs:{"label":"2"}},[_vm._v("异常")])],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"出水情况：","prop":"out_water"}},[_c('el-radio-group',{attrs:{"disabled":""},model:{value:(_vm.formData.out_water+''),callback:function ($$v) {_vm.$set(_vm.formData, "out_water+''", $$v)},expression:"formData.out_water+''"}},[_c('el-radio',{attrs:{"label":"1"}},[_vm._v("正常")]),_vm._v(" "),_c('el-radio',{attrs:{"label":"2"}},[_vm._v("异常")])],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"电表读数：","prop":"electricity"}},[_c('el-input',{attrs:{"disabled":""},model:{value:(_vm.formData.electricity),callback:function ($$v) {_vm.$set(_vm.formData, "electricity", $$v)},expression:"formData.electricity"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"累积读数：","prop":"electricity_sum"}},[_c('el-input',{attrs:{"disabled":""},model:{value:(_vm.formData.electricity_sum),callback:function ($$v) {_vm.$set(_vm.formData, "electricity_sum", $$v)},expression:"formData.electricity_sum"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"异常情况："}},[_c('div',{staticClass:"el-contents"},[_vm._v(_vm._s(_vm.formData.exception))])])],1)],1)],1)])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var Record_operationDetail = (esExports);
// CONCATENATED MODULE: ./src/views/Record/operationDetail.vue
function injectStyle (ssrContext) {
  __webpack_require__("ml9d")
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
  operationDetail,
  Record_operationDetail,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var views_Record_operationDetail = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "jXwv":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, "\n.stitless {\r\n  overflow: hidden;\r\n  text-align: center;\r\n  display: block;\r\n  color: #1386ff;\r\n  font-size: 16px;\r\n  font-weight: 700;\r\n  padding-top: 20px;\r\n  padding-bottom: 20px;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "ml9d":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("jXwv");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("3f44b9fe", content, true);

/***/ })

});