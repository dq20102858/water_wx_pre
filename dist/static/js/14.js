webpackJsonp([14],{

/***/ "3K+v":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, "\n.dis-box-card {\r\n  margin: 15px;\r\n  border-radius: 6px;\n}\n.dis-box-card .el-card__header {\r\n  background: #2b8cf9;\r\n  color: #fff;\r\n  padding: 8px 10px 8px 15px;\n}\n.dis-box-card .mores {\r\n  float: right;\r\n  padding: 3px 0;\r\n  color: #fff;\n}\n.dis-box-card .item {\r\n  border-bottom: 1px #ddd solid;\r\n  overflow: hidden;\r\n  padding: 20px 0 15px 0;\n}\n.dis-box-card .item:last-child {\r\n  border: 0;\n}\n.dis-box-card .el-card__body {\r\n  padding: 0 20px;\n}\n.dis-box-card .item p {\r\n  display: block;\r\n  padding-bottom: 5px;\r\n  overflow: hidden;\n}\n.dis-box-card .item span {\r\n  color: #333;\r\n  font-size: 14px;\n}\n.dis-box-card .item em {\r\n  color: #999;\r\n  font-size: 12px;\n}\n.dis-box-card .type {\r\n  float: right;\r\n  cursor: pointer;\r\n  color: #fff !important;\r\n  padding: 3px 8px;\r\n  border-radius: 3px;\r\n  font-size: 12px !important;\n}\n.dis-box-card .type1 {\r\n  background: #3a91f1;\n}\n.dis-box-card .type2 {\r\n  background: #00dd86;\n}\n.dis-box-card .type3 {\r\n  background: #ffa000;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "IRil":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/Dispatch/index.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Dispatch = ({
  data: function data() {
    return {
      statusOkList: [],
      statusNoList: []
    };
  },
  mounted: function mounted() {
    this.getAssignPages(1);
    this.getAssignPages(2);
  },
  created: function created() {},

  methods: {
    getAssignPages: function getAssignPages(status) {
      var _this = this;

      var limit = 3;
      this.request({
        url: "/assign/getAssignPages",
        method: "get",
        params: { status: status, limit: limit }
      }).then(function (response) {
        var data = response.data;
        if (data.status == 1) {
          if (status == 1) {
            _this.statusNoList = data.data.data;
          } else {
            _this.statusOkList = data.data.data;
          }
        }
      });
    },
    addShowDialog: function addShowDialog() {
      this.$router.push({
        path: "/dispatch/edit"
      });
    },
    getListDetail: function getListDetail(val) {
      this.$router.push({
        path: "/dispatch/list",
        query: {
          status: val
        }
      });
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-49e0e9a0","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/Dispatch/index.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"app-pages"},[_c('header',{staticClass:"app-top-bar"},[_c('h1',{staticClass:"titles"},[_vm._v("运维派单")]),_vm._v(" "),_c('a',{staticClass:"icons icon-add pull-right",on:{"click":_vm.addShowDialog}})]),_vm._v(" "),_c('div',{staticClass:"app-content"},[_c('el-card',{staticClass:"dis-box-card box-card"},[_c('div',{staticClass:"clearfix",attrs:{"slot":"header"},slot:"header"},[_c('span',{staticStyle:{"font-size":"14px"}},[_vm._v("已完成")]),_vm._v(" "),_c('el-button',{staticClass:"mores",attrs:{"type":"text"},on:{"click":function($event){_vm.getListDetail(2)}}},[_vm._v("\n          查看更多\n          "),_c('i',{staticClass:"icon-rights"})])],1),_vm._v(" "),_c('div',{staticClass:"items"},_vm._l((_vm.statusOkList),function(items){return _c('div',{key:items.id,staticClass:"item"},[_c('p',[_c('span',{staticClass:"pull-left"},[_vm._v(_vm._s(items.station_name))]),_vm._v(" "),(items.type==1)?_c('span',{staticClass:"type type1"},[_vm._v("设备维修")]):_vm._e(),_vm._v(" "),(items.type==2)?_c('span',{staticClass:"type type2"},[_vm._v("例行维保")]):_vm._e(),_vm._v(" "),(items.type==3)?_c('span',{staticClass:"type type3"},[_vm._v("运行检查")]):_vm._e()]),_vm._v(" "),_c('p',[_c('em',{staticClass:"pull-left"},[_vm._v("指派时间："+_vm._s(_vm._f("formatGetDate")(items.assign_time)))]),_vm._v(" "),_c('em',{staticClass:"pull-right"},[_vm._v("维保人："+_vm._s(items.assigner))])])])})),_vm._v(" "),(_vm.statusOkList.length==0)?_c('div',{staticClass:"app-nodata"},[_vm._v("暂无信息")]):_vm._e()]),_vm._v(" "),_c('el-card',{staticClass:"dis-box-card box-card"},[_c('div',{staticClass:"clearfix",attrs:{"slot":"header"},slot:"header"},[_c('span',{staticStyle:{"font-size":"14px"}},[_vm._v("未完成")]),_vm._v(" "),_c('el-button',{staticClass:"mores",attrs:{"type":"text"},on:{"click":function($event){_vm.getListDetail(1)}}},[_vm._v("\n          查看更多\n          "),_c('i',{staticClass:"icon-rights"})])],1),_vm._v(" "),_c('div',{staticClass:"items"},_vm._l((_vm.statusNoList),function(item){return _c('div',{key:item.id,staticClass:"item"},[_c('p',[_c('span',{staticClass:"pull-left"},[_vm._v(_vm._s(item.station_name))]),_vm._v(" "),(item.type==1)?_c('span',{staticClass:"type type1"},[_vm._v("设备维修")]):_vm._e(),_vm._v(" "),(item.type==2)?_c('span',{staticClass:"type type2"},[_vm._v("例行维保")]):_vm._e(),_vm._v(" "),(item.type==3)?_c('span',{staticClass:"type type3"},[_vm._v("运行检查")]):_vm._e()]),_vm._v(" "),_c('p',[_c('em',{staticClass:"pull-left"},[_vm._v("指派时间："+_vm._s(_vm._f("formatGetDate")(item.assign_time)))]),_vm._v(" "),_c('em',{staticClass:"pull-right"},[_vm._v("维保人："+_vm._s(item.assigner))])])])})),_vm._v(" "),(_vm.statusNoList.length==0)?_c('div',{staticClass:"app-nodata"},[_vm._v("暂无信息")]):_vm._e()])],1)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var views_Dispatch = (esExports);
// CONCATENATED MODULE: ./src/views/Dispatch/index.vue
function injectStyle (ssrContext) {
  __webpack_require__("SGNj")
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
  Dispatch,
  views_Dispatch,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_views_Dispatch = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "SGNj":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("3K+v");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("0b5a397a", content, true);

/***/ })

});