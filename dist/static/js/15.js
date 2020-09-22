webpackJsonp([15],{

/***/ "4ENC":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/Attendance/qrcode.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var qrcode = ({
  data: function data() {
    return {
      dialogVisible: false,
      diaLogDetailVisible: false,
      formDetailData: []
    };
  },
  created: function created() {
    //this.getSign();
    this.getDataList();
  },

  methods: {
    backURL: function backURL() {
      this.$router.go(-1); //返回上一层
    },
    addDialogEvent: function addDialogEvent() {
      // this.request({
      //   url: "/clock/isCard",
      //   method: "get",
      //   params: { sid: 6 }
      // }).then(response => {
      //   var res = response.data;
      //   console.log(res.data.is_card);
      //   // if (== 1) {
      //   // }
      //   // else
      //   // {
      //   // }
      // });
    },
    addEvent: function addEvent() {
      var _this = this;

      //this.dialogVisible = true;
      var datas = {
        sid: 7,
        user_id: 17,
        // start_time: "2020-08-21 8:00:00",
        //end_time: "2020-08-21 11:20:30",
        is_end: 0,
        is_recard: 0
      };
      var data = datas;
      this.request({
        url: "/clock/addClock",
        method: "post",
        data: data
      }).then(function (response) {
        var data = response.data;
        if (data.status == 1) {
          _this.$message({
            type: "success",
            message: "保存成功！"
          });
          _this.getDataList();
        }
      });
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-42415055","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/Attendance/qrcode.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"app-pages"},[_c('header',{staticClass:"app-top-bar"},[_c('span',{staticClass:"icons icon-back pull-left",on:{"click":_vm.backURL}}),_vm._v(" "),_c('h1',{staticClass:"titles"},[_vm._v("考勤打卡")])]),_vm._v(" "),_c('div',{staticClass:"app-content",staticStyle:{"background":"#fff","height":"100vh"}},[_c('div',{staticClass:"app-content-rows"},[_c('div',{staticClass:"qrcode"},[_c('i',{staticClass:"el-icon el-icon-success"}),_vm._v(" "),_vm._m(0),_vm._v(" "),_c('div',{staticClass:"daka"},[_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){_vm.dialogVisible = false}}},[_vm._v("确定")]),_vm._v(" "),_c('el-button',{attrs:{"type":"info","plain":""},on:{"click":function($event){_vm.dialogVisible = false}}},[_vm._v("重新开始")])],1)])])]),_vm._v(" "),_c('el-dialog',{attrs:{"width":"90%","top":"40%","title":"提示","visible":_vm.dialogVisible,"modal-append-to-body":false,"close-on-click-modal":false,"show-close":false,"center":""},on:{"update:visible":function($event){_vm.dialogVisible=$event}}},[_c('span',{staticClass:"dialiginfoa"},[_vm._v("是否打卡后结束任务")]),_vm._v(" "),_c('span',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){_vm.dialogVisible = false}}},[_vm._v("确定")]),_vm._v(" "),_c('el-button',{attrs:{"type":"info","plain":""},on:{"click":function($event){_vm.dialogVisible = false}}},[_vm._v("重新开始")])],1)])],1)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"txts"},[_c('h3',[_vm._v("扫码成功")]),_vm._v(" "),_c('p',[_vm._v("XXX村地方村地方村地方村地方")])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var Attendance_qrcode = (esExports);
// CONCATENATED MODULE: ./src/views/Attendance/qrcode.vue
function injectStyle (ssrContext) {
  __webpack_require__("bFSc")
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
  qrcode,
  Attendance_qrcode,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var views_Attendance_qrcode = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "bFSc":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("r7ok");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("3be60b12", content, true);

/***/ }),

/***/ "r7ok":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, "\n.qrcode {\r\n  text-align: center;\r\n  padding-top: 50px;\n}\n.qrcode .el-icon {\r\n  text-align: center;\r\n  display: block;\r\n  margin: 0 auto;\r\n  font-size: 120px;\r\n  color: #09ba08;\n}\n.qrcode .txts {  \r\n  color: #09ba08;\r\n  margin: 10px 30px 30px 30px;\r\n  font-size: 16px;\r\n  text-align: center;\r\n  line-height: 33px;\n}\n.qrcode .txts p {\r\n  color: #666;\n}\n.qrcode .daka {\r\n  margin-top: 100px;\n}\n.qrcode button{width: 100px;\n}\r\n", ""]);

// exports


/***/ })

});