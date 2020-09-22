webpackJsonp([20],{

/***/ "Cuha":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/Record/samplingEdit.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var samplingEdit = ({
  data: function data() {
    return {
      stationOptions: [],
      stationOptionsProps: {
        value: "id",
        label: "name",
        children: "child"
      },
      userList: [],
      formData: {},
      formRules: {
        sid: [{
          required: true,
          message: "请选择站点",
          trigger: "change"
        }],
        user_id: [{
          required: true,
          message: "请选择采样人",
          trigger: "change"
        }],
        in_ph: [{
          required: true,
          message: "请输入1-8位数字",
          trigger: "blur"
        }, {
          pattern: /^(|[1-9]\d{0,7})(\.\d{1,2})?$/,
          message: "请输入数字并可保留两位小数点",
          trigger: "blur"
        }],
        in_cod: [{
          required: true,
          message: "请输入1-8位数字",
          trigger: "blur"
        }, {
          pattern: /^(|[1-9]\d{0,7})(\.\d{1,2})?$/,
          message: "请输入数字并可保留两位小数点",
          trigger: "blur"
        }],
        in_tp: [{
          required: true,
          message: "请输入1-8位数字",
          trigger: "blur"
        }, {
          pattern: /^(|[1-9]\d{0,7})(\.\d{1,2})?$/,
          message: "请输入数字并可保留两位小数点",
          trigger: "blur"
        }],
        in_tn: [{
          required: true,
          message: "请输入1-8位数字",
          trigger: "blur"
        }, {
          pattern: /^(|[1-9]\d{0,7})(\.\d{1,2})?$/,
          message: "请输入数字并可保留两位小数点",
          trigger: "blur"
        }],
        in_nh3: [{
          required: true,
          message: "请输入1-8位数字",
          trigger: "blur"
        }, {
          pattern: /^(|[1-9]\d{0,7})(\.\d{1,2})?$/,
          message: "请输入数字并可保留两位小数点",
          trigger: "blur"
        }],
        out_ph: [{
          required: true,
          message: "请输入1-8位数字",
          trigger: "blur"
        }, {
          pattern: /^(|[1-9]\d{0,7})(\.\d{1,2})?$/,
          message: "请输入数字并可保留两位小数点",
          trigger: "blur"
        }],
        out_cod: [{
          required: true,
          message: "请输入1-8位数字",
          trigger: "blur"
        }, {
          pattern: /^(|[1-9]\d{0,7})(\.\d{1,2})?$/,
          message: "请输入数字并可保留两位小数点",
          trigger: "blur"
        }],
        out_tp: [{
          required: true,
          message: "请输入1-8位数字",
          trigger: "blur"
        }, {
          pattern: /^(|[1-9]\d{0,7})(\.\d{1,2})?$/,
          message: "请输入数字并可保留两位小数点",
          trigger: "blur"
        }],
        out_tn: [{
          required: true,
          message: "请输入1-8位数字",
          trigger: "blur"
        }, {
          pattern: /^(|[1-9]\d{0,7})(\.\d{1,2})?$/,
          message: "请输入数字并可保留两位小数点",
          trigger: "blur"
        }],
        out_nh3: [{
          required: true,
          message: "请输入1-8位数字",
          trigger: "blur"
        }, {
          pattern: /^(|[1-9]\d{0,7})(\.\d{1,2})?$/,
          message: "请输入数字并可保留两位小数点",
          trigger: "blur"
        }]
      }
    };
  },
  created: function created() {
    this.getStationList();
    this.getUsersList();
  },

  methods: {
    backURL: function backURL() {
      this.$router.go(-1); //返回上一层
    },
    getStationList: function getStationList() {
      var _this = this;

      this.request({
        url: "/station/getStationLists",
        method: "get"
      }).then(function (response) {
        var data = response.data;
        if (data.status == 1) {
          _this.stationOptions = data.data;
        }
      });
    },
    getUsersList: function getUsersList() {
      var _this2 = this;

      this.request({
        url: "/assign/getUsersLists",
        method: "get"
      }).then(function (response) {
        var data = response.data;
        if (data.status == 1) {
          _this2.userList = data.data;
        }
      });
    },
    addEvent: function addEvent() {
      var _this3 = this;

      this.$refs["formRulesRef"].validate(function (valid) {
        if (valid) {
          var data = _this3.formData;
          data.sid = _this3.formData.sid[1];
          data.type = 3;
          _this3.request({
            url: "/record/addRecord",
            method: "post",
            data: data
          }).then(function (response) {
            var data = response.data;
            if (data.status == 1) {
              _this3.$message({
                type: "success",
                message: "保存成功！"
              });
              _this3.backURL();
            }
          });
        } else {
          var that = _this3;
          that.$nextTick(function () {
            var isError = document.getElementsByClassName("is-error");
            isError[0].querySelector("input").focus();
          });
          return false;
        }
      });
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-19d5133f","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/Record/samplingEdit.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"app-pages"},[_c('header',{staticClass:"app-top-bar"},[_c('span',{staticClass:"icons icon-back pull-left",on:{"click":_vm.backURL}}),_vm._v(" "),_c('h1',{staticClass:"titles"},[_vm._v("污水处理站采样化验记录表")])]),_vm._v(" "),_c('div',{staticClass:"app-content"},[_c('div',{staticClass:"app-form"},[_c('el-form',{ref:"formRulesRef",staticClass:"el-form-custom",attrs:{"model":_vm.formData,"rules":_vm.formRules,"label-width":"90px"}},[_c('el-form-item',{attrs:{"label":"站点名：","prop":"sid"}},[_c('el-cascader',{attrs:{"popper-class":"app-cascader","options":_vm.stationOptions,"props":_vm.stationOptionsProps,"placeholder":"请选择站点名"},model:{value:(_vm.formData.sid),callback:function ($$v) {_vm.$set(_vm.formData, "sid", $$v)},expression:"formData.sid"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"采样人：","prop":"user_id","label-width":"90px"}},[_c('el-select',{attrs:{"placeholder":"请选择采样人"},model:{value:(_vm.formData.user_id),callback:function ($$v) {_vm.$set(_vm.formData, "user_id", $$v)},expression:"formData.user_id"}},_vm._l((this.userList),function(item){return _c('el-option',{key:item.id,attrs:{"label":item.name,"value":item.id}})}))],1),_vm._v(" "),_c('div',{staticClass:"stitless"},[_vm._v("进水")]),_vm._v(" "),_c('el-form-item',{attrs:{"label":"PH：","prop":"in_ph"}},[_c('el-input',{attrs:{"maxlength":"8"},model:{value:(_vm.formData.in_ph),callback:function ($$v) {_vm.$set(_vm.formData, "in_ph", $$v)},expression:"formData.in_ph"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"COD：","prop":"in_cod"}},[_c('el-input',{attrs:{"maxlength":"8"},model:{value:(_vm.formData.in_cod),callback:function ($$v) {_vm.$set(_vm.formData, "in_cod", $$v)},expression:"formData.in_cod"}})],1),_vm._v(" "),_c('div',{staticClass:"el-form-item-sampd"},[_c('el-form-item',{attrs:{"label":"TP：","prop":"in_tp"}},[_c('el-input',{attrs:{"maxlength":"8"},model:{value:(_vm.formData.in_tp),callback:function ($$v) {_vm.$set(_vm.formData, "in_tp", $$v)},expression:"formData.in_tp"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"TN：","prop":"in_tn"}},[_c('el-input',{attrs:{"maxlength":"8"},model:{value:(_vm.formData.in_tn),callback:function ($$v) {_vm.$set(_vm.formData, "in_tn", $$v)},expression:"formData.in_tn"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"NH3-N：","prop":"in_nh3"}},[_c('el-input',{attrs:{"maxlength":"8"},model:{value:(_vm.formData.in_nh3),callback:function ($$v) {_vm.$set(_vm.formData, "in_nh3", $$v)},expression:"formData.in_nh3"}})],1)],1),_vm._v(" "),_c('div',{staticClass:"stitless"},[_vm._v("出水")]),_vm._v(" "),_c('el-form-item',{attrs:{"label":"PH：","prop":"out_ph"}},[_c('el-input',{attrs:{"maxlength":"8"},model:{value:(_vm.formData.out_ph),callback:function ($$v) {_vm.$set(_vm.formData, "out_ph", $$v)},expression:"formData.out_ph"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"COD：","prop":"out_cod"}},[_c('el-input',{attrs:{"maxlength":"8"},model:{value:(_vm.formData.out_cod),callback:function ($$v) {_vm.$set(_vm.formData, "out_cod", $$v)},expression:"formData.out_cod"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"TP：","prop":"out_tp"}},[_c('el-input',{attrs:{"maxlength":"8"},model:{value:(_vm.formData.out_tp),callback:function ($$v) {_vm.$set(_vm.formData, "out_tp", $$v)},expression:"formData.out_tp"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"TN：","prop":"out_tn"}},[_c('el-input',{attrs:{"maxlength":"8"},model:{value:(_vm.formData.out_tn),callback:function ($$v) {_vm.$set(_vm.formData, "out_tn", $$v)},expression:"formData.out_tn"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"NH3-N：","prop":"out_nh3"}},[_c('el-input',{attrs:{"maxlength":"8"},model:{value:(_vm.formData.out_nh3),callback:function ($$v) {_vm.$set(_vm.formData, "out_nh3", $$v)},expression:"formData.out_nh3"}})],1),_vm._v(" "),_c('el-form-item',{staticClass:"app-form-save"},[_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.addEvent}},[_vm._v("确 定")])],1)],1)],1)])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var Record_samplingEdit = (esExports);
// CONCATENATED MODULE: ./src/views/Record/samplingEdit.vue
function injectStyle (ssrContext) {
  __webpack_require__("Fxhd")
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
  samplingEdit,
  Record_samplingEdit,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var views_Record_samplingEdit = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "Fxhd":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("czR9");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("e86a4748", content, true);

/***/ }),

/***/ "czR9":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, "\n.stitless {\r\n  overflow: hidden;\r\n  text-align: center;\r\n  display: block;\r\n  color: #1386ff;\r\n  font-size: 16px;\r\n  font-weight: 700;\r\n  padding-bottom: 20px;\n}\r\n", ""]);

// exports


/***/ })

});