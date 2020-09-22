webpackJsonp([17],{

/***/ "Mx+Y":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("h9mC");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("20e6d410", content, true);

/***/ }),

/***/ "V9tV":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/Record/samplingDetail.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var samplingDetail = ({
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
        params: { id: this.$route.query.id, type: 3 }
      }).then(function (res) {
        var data = res.data;
        if (data.status == 1) {
          _this.formData = data.data;
        }
      });
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-3c3811ec","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/Record/samplingDetail.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"app-pages"},[_c('header',{staticClass:"app-top-bar"},[_c('span',{staticClass:"icons icon-back pull-left",on:{"click":_vm.backURL}}),_vm._v(" "),_c('h1',{staticClass:"titles"},[_vm._v("污水处理站采样化验记录表")])]),_vm._v(" "),_c('div',{staticClass:"app-content"},[_c('div',{staticClass:"app-form"},[_c('el-form',{staticClass:"el-form-custom",attrs:{"model":_vm.formData,"label-width":"90px"}},[_c('el-form-item',{attrs:{"label":"站点名：","prop":"sid"}},[_c('el-input',{attrs:{"disabled":""},model:{value:(_vm.formData.station_name),callback:function ($$v) {_vm.$set(_vm.formData, "station_name", $$v)},expression:"formData.station_name"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"采样人：","prop":"user_id","label-width":"90px"}},[_c('el-input',{attrs:{"disabled":""},model:{value:(_vm.formData.user),callback:function ($$v) {_vm.$set(_vm.formData, "user", $$v)},expression:"formData.user"}})],1),_vm._v(" "),_c('div',{staticClass:"stitlesss"},[_vm._v("进水")]),_vm._v(" "),_c('el-form-item',{attrs:{"label":"PH：","prop":"in_ph"}},[_c('el-input',{attrs:{"disabled":""},model:{value:(_vm.formData.in_ph),callback:function ($$v) {_vm.$set(_vm.formData, "in_ph", $$v)},expression:"formData.in_ph"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"COD：","prop":"in_cod"}},[_c('el-input',{attrs:{"disabled":""},model:{value:(_vm.formData.in_cod),callback:function ($$v) {_vm.$set(_vm.formData, "in_cod", $$v)},expression:"formData.in_cod"}})],1),_vm._v(" "),_c('div',{staticClass:"el-form-item-sampd"},[_c('el-form-item',{attrs:{"label":"TP：","prop":"in_tp"}},[_c('el-input',{attrs:{"disabled":""},model:{value:(_vm.formData.in_tp),callback:function ($$v) {_vm.$set(_vm.formData, "in_tp", $$v)},expression:"formData.in_tp"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"TN：","prop":"in_tn"}},[_c('el-input',{attrs:{"disabled":""},model:{value:(_vm.formData.in_tn),callback:function ($$v) {_vm.$set(_vm.formData, "in_tn", $$v)},expression:"formData.in_tn"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"NH3-N：","prop":"in_nh3"}},[_c('el-input',{attrs:{"disabled":""},model:{value:(_vm.formData.in_nh3),callback:function ($$v) {_vm.$set(_vm.formData, "in_nh3", $$v)},expression:"formData.in_nh3"}})],1)],1),_vm._v(" "),_c('div',{staticClass:"stitlesss"},[_vm._v("出水")]),_vm._v(" "),_c('el-form-item',{attrs:{"label":"PH：","prop":"out_ph"}},[_c('el-input',{attrs:{"disabled":""},model:{value:(_vm.formData.out_ph),callback:function ($$v) {_vm.$set(_vm.formData, "out_ph", $$v)},expression:"formData.out_ph"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"COD：","prop":"out_cod"}},[_c('el-input',{attrs:{"disabled":""},model:{value:(_vm.formData.out_cod),callback:function ($$v) {_vm.$set(_vm.formData, "out_cod", $$v)},expression:"formData.out_cod"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"TP：","prop":"out_tp"}},[_c('el-input',{attrs:{"disabled":""},model:{value:(_vm.formData.out_tp),callback:function ($$v) {_vm.$set(_vm.formData, "out_tp", $$v)},expression:"formData.out_tp"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"TN：","prop":"out_tn"}},[_c('el-input',{attrs:{"disabled":""},model:{value:(_vm.formData.out_tn),callback:function ($$v) {_vm.$set(_vm.formData, "out_tn", $$v)},expression:"formData.out_tn"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"NH3-N：","prop":"out_nh3"}},[_c('el-input',{attrs:{"disabled":""},model:{value:(_vm.formData.out_nh3),callback:function ($$v) {_vm.$set(_vm.formData, "out_nh3", $$v)},expression:"formData.out_nh3"}})],1)],1)],1)])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var Record_samplingDetail = (esExports);
// CONCATENATED MODULE: ./src/views/Record/samplingDetail.vue
function injectStyle (ssrContext) {
  __webpack_require__("Mx+Y")
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
  samplingDetail,
  Record_samplingDetail,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var views_Record_samplingDetail = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "h9mC":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, "\n.stitlesss {\r\n  overflow: hidden;\r\n  text-align: center;\r\n  display: block;\r\n  color: #1386ff;\r\n  font-size: 16px;\r\n  font-weight: 700;\r\n  padding-top: 0px;\r\n  padding-bottom: 20px;\n}\r\n\r\n", ""]);

// exports


/***/ })

});