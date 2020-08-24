webpackJsonp([9],{

/***/ "/o1/":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, "\n.login-container {\r\n  height: 100%;\r\n  background-color: #2d3a4b;\n}\n.login-container .login-form {\r\n  padding: 35px 50px 30px 50px;\n}\n.login-container .corpname {\r\n  text-align: center;\r\n  font-size: 24px;\r\n  font-weight: 700;\r\n  color: #fff;\r\n  margin-bottom: 30px;\n}\n.login-container .title-container {\r\n  text-align: center;\r\n  margin-bottom: 35px;\n}\n.login-container .title-container img {\r\n  margin: 0 auto;\r\n  width: 88px;\n}\n.login-container .el-form-item {\r\n  margin-bottom: 40px;\n}\n.login-container .el-input-group__prepend {\r\n  border: 1px #338ff6 solid;\r\n  background: #fff;\r\n  padding: 0 5px;\r\n  border-right: 0;\n}\n.login-container .el-input-group__prepend img {\r\n  width: 32px;\n}\n.login-container .is-error .el-input-group__prepend {\r\n  border: 1px #f56c6c solid;\r\n  border-right: 0;\n}\n.login-container .el-input__inner {\r\n  background: #fff !important;\r\n  border: 6px;\r\n  padding: 0 5px 0 1px;\r\n  color: #338ff6;\r\n  height: 45px;\r\n  border: 1px #338ff6 solid;\r\n  border-left: none;\n}\n.login-container input:-webkit-autofill {\r\n  -webkit-box-shadow: 0 0 0px 1000px white inset !important;\r\n          box-shadow: 0 0 0px 1000px white inset !important;\n}\n.login-container .el-form-item__error {\r\n  padding-top: 5px;\n}\n.login-container .el-button {\r\n  font-size: 18px;\n}\n.login-container .el-button:hover {\r\n  background: #338ff6;\r\n  border-color: #338ff6;\n}\n.login-container .el-button:focus {\r\n  background: #338ff6;\r\n  border-color: #338ff6;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "T+/8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/login/index.vue
//
//
//

/* harmony default export */ var login = ({
  name: "login",
  data: function data() {
    return {};
  },
  created: function created() {
    this.getSign();
  },

  methods: {
    //扫码
    getSign: function getSign() {
      var url = location.href.split("#")[0];
      this.request({
        url: "/weixin/getWeixinConfig",
        method: "get"
      }).then(function (res) {
        var jdata = res.data;
        if (jdata.status == 1) {
          var a = jdata.data;
          wx.config({
            debug: false,
            appId: jdata.appid,
            timestamp: jdata.timestamp,
            noncestr: jdata.noncestr,
            signature: jdata.signature,
            jsApiList: ["scanQRCode"]
          });
          wx.ready(function () {
            console.log("微信js-sdk配置成功");
          });
          wx.error(function (res) {
            console.log("微信js-sdk配置失败");
          });

          // timestamp	number

          // noncestr	string

          // jsapi_ticket	string

          // signature	string

          // appid	string
        }
      });
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-9a2cf698","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/login/index.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._v("dsfsdf")])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var views_login = (esExports);
// CONCATENATED MODULE: ./src/views/login/index.vue
function injectStyle (ssrContext) {
  __webpack_require__("XAJj")
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
  login,
  views_login,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_views_login = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "XAJj":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("/o1/");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("7ae21162", content, true);

/***/ })

});