webpackJsonp([11],{

/***/ "TXIg":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/Record/edit.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var edit = ({
  data: function data() {
    return {
      stationOptions: [],
      stationOptionsProps: {
        value: "id",
        label: "name",
        children: "child"
      },
      userList: [],
      formData: {
        prepare: [],
        sys_check: [],
        device_check: [],
        period_check: []
      },
      formRules: {
        sid: [{
          required: true,
          message: "请选择站点",
          trigger: "change"
        }],
        user_id: [{
          required: true,
          message: "请选择维护人",
          trigger: "change"
        }],
        prepare: [{
          type: "array",
          required: true,
          message: "请至少选择一个",
          trigger: "change"
        }],
        sys_check: [{
          type: "array",
          required: true,
          message: "请至少选择一个",
          trigger: "change"
        }],
        type: "array",
        device_check: [{
          required: true,
          message: "请至少选择一个",
          trigger: "change"
        }],
        period_check: [{
          type: "array",
          required: true,
          message: "请至少选择一个",
          trigger: "change"
        }],
        leave_time: [{
          required: true,
          message: "请选择离站时间",
          trigger: "change"
        }],
        keep_time: [{
          required: true,
          message: "请输入1-6位数字",
          trigger: "blur"
        }, {
          pattern: /^[0-9]+([.]{1}[0-9]+){0,1}$/,
          message: "请输入1-6位数字",
          trigger: "blur"
        }],
        replace_material: [{
          pattern: /(^\S+).*(\S+$)/,
          message: "开始和结尾不能有空格",
          trigger: "blur"
        }],
        exception: [{
          pattern: /(^\S+).*(\S+$)/,
          message: "开始和结尾不能有空格",
          trigger: "blur"
        }],
        remark: [{
          pattern: /(^\S+).*(\S+$)/,
          message: "开始和结尾不能有空格",
          trigger: "blur"
        }]
      },
      prepareList: [],
      sysCheckList: [],
      deviceCheckkList: [],
      periodCheck: []
    };
  },
  created: function created() {
    this.getConfig();
    this.getStationList();
    this.getUsersList();
  },

  methods: {
    backURL: function backURL() {
      this.$router.go(-1); //返回上一层
    },
    diaLogFormShowEvent: function diaLogFormShowEvent() {
      this.diaLogFormVisible = true;
      this.getStationList();
      this.getUsersList();
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

      this.$refs["formRulesRef"].validate(function (valid, object) {
        if (valid) {
          var data = _this3.formData;
          data.sid = _this3.formData.sid[1];
          data.type = 1;
          console.log(_this3.formData);
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
          //console.log(object);
          // let errorlen = Object.keys(object);
          var that = _this3;
          that.$nextTick(function () {
            var isError = document.getElementsByClassName("is-error");
            isError[0].querySelector("input").focus();
          });
          return false;
        }
      });
    },
    getConfig: function getConfig() {
      var _this4 = this;

      this.request({
        url: "/record/getConfig",
        method: "get"
      }).then(function (response) {
        var data = response.data;
        if (data.status == 1) {
          _this4.prepareList = data.data.prepare; //维护预备
          _this4.sysCheckList = data.data.sys_check; //系统检查
          _this4.deviceCheckkList = data.data.device_check; //仪器检查
          _this4.periodCheck = data.data.period_check; //周期维护

          console.log(_this4.prepareList);
        }
      });
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-57023c44","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/Record/edit.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"app-pages"},[_c('header',{staticClass:"app-top-bar"},[_c('span',{staticClass:"icons icon-back pull-left",on:{"click":_vm.backURL}}),_vm._v(" "),_c('h1',{staticClass:"titles"},[_vm._v("污水处理站维护记录表")])]),_vm._v(" "),_c('div',{staticClass:"app-content"},[_c('div',{staticClass:"app-form"},[_c('el-form',{ref:"formRulesRef",staticClass:"el-form-custom",attrs:{"model":_vm.formData,"rules":_vm.formRules,"label-width":"100px"}},[_c('el-form-item',{attrs:{"label":"站点名：","prop":"sid","label-width":"90px"}},[_c('el-cascader',{attrs:{"popper-class":"app-cascader","options":_vm.stationOptions,"props":_vm.stationOptionsProps,"placeholder":"请选择站点名"},model:{value:(_vm.formData.sid),callback:function ($$v) {_vm.$set(_vm.formData, "sid", $$v)},expression:"formData.sid"}})],1),_vm._v(" "),_c('el-form-item',{ref:"user_id",attrs:{"label":"维护人：","prop":"user_id","label-width":"90px"}},[_c('el-select',{attrs:{"placeholder":"请选择维护人"},model:{value:(_vm.formData.user_id),callback:function ($$v) {_vm.$set(_vm.formData, "user_id", $$v)},expression:"formData.user_id"}},_vm._l((_vm.userList),function(item){return _c('el-option',{key:item.id,attrs:{"label":item.name,"value":item.id}})}))],1),_vm._v(" "),_c('div',{staticClass:"stitless"},[_vm._v("设备巡检内容、情况、及处理情况说明")]),_vm._v(" "),_c('div',{staticClass:"el-checks"},[_c('el-form-item',{attrs:{"label":"1.维护预备：","prop":"prepare"}},[_c('el-checkbox-group',{model:{value:(_vm.formData.prepare),callback:function ($$v) {_vm.$set(_vm.formData, "prepare", $$v)},expression:"formData.prepare"}},_vm._l((_vm.prepareList),function(item){return _c('el-checkbox',{key:item.id,attrs:{"label":item.id,"name":"prepare"}},[_vm._v(_vm._s(item.value))])}))],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"2.系统检查：","prop":"sys_check"}},[_c('el-checkbox-group',{model:{value:(_vm.formData.sys_check),callback:function ($$v) {_vm.$set(_vm.formData, "sys_check", $$v)},expression:"formData.sys_check"}},_vm._l((_vm.sysCheckList),function(item){return _c('el-checkbox',{key:item.id,attrs:{"label":item.id,"name":"sys_check"}},[_vm._v(_vm._s(item.value))])}))],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"3.仪器检查：","prop":"device_check"}},[_c('el-checkbox-group',{model:{value:(_vm.formData.device_check),callback:function ($$v) {_vm.$set(_vm.formData, "device_check", $$v)},expression:"formData.device_check"}},_vm._l((_vm.deviceCheckkList),function(item){return _c('el-checkbox',{key:item.id,attrs:{"label":item.id,"name":"device_check"}},[_vm._v(_vm._s(item.value))])}))],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"4.周期维护：","prop":"period_check"}},[_c('el-checkbox-group',{model:{value:(_vm.formData.period_check),callback:function ($$v) {_vm.$set(_vm.formData, "period_check", $$v)},expression:"formData.period_check"}},_vm._l((_vm.periodCheck),function(item){return _c('el-checkbox',{key:item.id,attrs:{"label":item.id,"name":"period_check"}},[_vm._v(_vm._s(item.value))])}))],1)],1),_vm._v(" "),_c('div',{staticClass:"samptitles"},[_vm._v("5.其他情况")]),_vm._v(" "),_c('el-form-item',{attrs:{"label":"更换耗材：","prop":"replace_material"}},[_c('el-input',{attrs:{"maxlength":"50"},model:{value:(_vm.formData.replace_material),callback:function ($$v) {_vm.$set(_vm.formData, "replace_material", $$v)},expression:"formData.replace_material"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"离站时间：","prop":"leave_time"}},[_c('el-date-picker',{attrs:{"type":"datetime","placeholder":"选择日期"},model:{value:(_vm.formData.leave_time),callback:function ($$v) {_vm.$set(_vm.formData, "leave_time", $$v)},expression:"formData.leave_time"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"服务耗时：","prop":"keep_time"}},[_c('el-input',{attrs:{"maxlength":"6"},model:{value:(_vm.formData.keep_time),callback:function ($$v) {_vm.$set(_vm.formData, "keep_time", $$v)},expression:"formData.keep_time"}},[_c('template',{slot:"append"},[_vm._v("小时")])],2)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"异常情况：","prop":"exception"}},[_c('el-input',{attrs:{"maxlength":"50"},model:{value:(_vm.formData.exception),callback:function ($$v) {_vm.$set(_vm.formData, "exception", $$v)},expression:"formData.exception"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"备注：","prop":"remark"}},[_c('el-input',{attrs:{"type":"textarea","maxlength":"200"},model:{value:(_vm.formData.remark),callback:function ($$v) {_vm.$set(_vm.formData, "remark", $$v)},expression:"formData.remark"}})],1),_vm._v(" "),_c('el-form-item',{staticClass:"app-form-save"},[_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.addEvent}},[_vm._v("确 定")])],1)],1)],1)])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var Record_edit = (esExports);
// CONCATENATED MODULE: ./src/views/Record/edit.vue
function injectStyle (ssrContext) {
  __webpack_require__("ewXj")
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
  edit,
  Record_edit,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var views_Record_edit = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "ewXj":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("iKp9");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("f6eb4086", content, true);

/***/ }),

/***/ "iKp9":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, "\n.stitless {\r\n  overflow: hidden;\r\n  text-align: center;\r\n  display: block;\r\n  color: #1386ff;\r\n  font-size: 16px;\r\n  font-weight: 700;\r\n  padding-top: 20px;\r\n  padding-bottom: 20px;\n}\n.el-checks .el-form-item {\r\n  margin-bottom: 16px;\n}\n.samptitles {\r\n  padding: 20px 0 15px 15px;\r\n  color: #1d397a;\n}\r\n", ""]);

// exports


/***/ })

});