webpackJsonp([4],{

/***/ "GFL4":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("J2V4");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("13c94d90", content, true);

/***/ }),

/***/ "J2V4":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, "\n.dis-box-card {\r\n  margin: 15px;\r\n  border-radius: 6px;\n}\n.dis-box-card .mores {\r\n  float: right;\r\n  padding: 3px 0;\r\n  color: #666;\n}\n.dis-box-card .item {\r\n  border-bottom: 1px #ddd solid;\r\n  overflow: hidden;\r\n  padding: 20px 0 15px 0;\n}\n.dis-box-card .item:last-child {\r\n  border: 0;\n}\n.dis-box-card .el-card__body {\r\n  padding: 0 20px;\n}\n.dis-box-card .item p {\r\n  display: block;\r\n  padding-bottom: 5px;\r\n  overflow: hidden;\n}\n.dis-box-card .item span {\r\n  color: #333;\r\n  font-size: 14px;\n}\n.dis-box-card .item em {\r\n  color: #999;\r\n  font-size: 12px;\n}\n.dis-box-card .type {\r\n  float: right;\r\n  cursor: pointer;\r\n  color: #fff !important;\r\n  padding: 3px 8px;\r\n  border-radius: 3px;\r\n  font-size: 12px !important;\n}\n.dis-box-card .type1 {\r\n  background: #40d2fd;\n}\n.dis-box-card .type2 {\r\n  background: #66cc00;\n}\n.dis-box-card .type3 {\r\n  background: #cc9900;\n}\n.dialog-dispatch{margin: 15px;\n}\n.dialog-dispatch .el-dialog__footer{text-align: center; overflow: hidden;\n}\n.dialog-dispatch .el-dialog__footer button:first-child{margin-right:30px ;\n}\r\n", ""]);

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var login = ({
  data: function data() {
    return {
      diaLogFormVisible: false,
      diaLogTitle: "添加信息",
      diaLogFormDetailVisible: false,
      formData: {},
      formRules: {
        sid: [{
          required: true,
          message: "请选择站点名",
          trigger: "change"
        }],
        assigner_id: [{
          required: true,
          message: "请选择指派人",
          trigger: "change"
        }],
        type: [{
          required: true,
          message: "请选择派单事项",
          trigger: "change"
        }],
        content: [{ min: 2, max: 200, message: "长度在2到200个字符", trigger: "blur" }, {
          pattern: /(^\S+).*(\S+$)/,
          message: "开始和结尾不能有空格",
          trigger: "blur"
        }]
      },
      stationOptions: [],
      stationOptionsProps: {
        value: "id",
        label: "name",
        children: "child"
      }
    };
  },
  created: function created() {},

  methods: {
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
    addShowDialog: function addShowDialog() {
      var _this2 = this;

      this.getStationList();
      this.diaLogFormVisible = true;
      this.diaLogTitle = "发起派单";
      this.$nextTick(function () {
        _this2.$refs["formRulesRef"].clearValidate();
      });
      this.formData = {
        // title: "",
        // description: "",
        // recept_type: []
      };
    },
    getListDetail: function getListDetail(val) {
      this.$router.push({
        path: "/dispatch/list",
        query: {
          id: val
        }
      });
    }
    // getChildStationList() {
    //   let name = this.searchVillageName;
    //   this.request({
    //     url: "/station/getChildStationLists",
    //     method: "get",
    //     params: { name }
    //   }).then(response => {
    //     let data = response.data;
    //     if (data.status == 1) {
    //       this.childStationList = data.data;
    //     }
    //   });

  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-89768b76","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/login/index.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"app-pages"},[_c('header',{staticClass:"app-top-bar"},[_c('a',{staticClass:"icons icon-back pull-left"}),_vm._v(" "),_c('h1',{staticClass:"titles"},[_vm._v("运维派单")]),_vm._v(" "),_c('a',{staticClass:"icons icon-add pull-right",on:{"click":_vm.addShowDialog}})]),_vm._v(" "),_c('div',{staticClass:"app-content"},[_c('el-card',{staticClass:"dis-box-card box-card"},[_c('div',{staticClass:"clearfix",attrs:{"slot":"header"},slot:"header"},[_c('span',{staticStyle:{"font-size":"18px"}},[_vm._v("已完成")]),_vm._v(" "),_c('el-button',{staticClass:"mores",attrs:{"type":"text"},on:{"click":function($event){_vm.getListDetail(1)}}},[_vm._v("\n          查看更多\n          "),_c('i',{staticClass:"icon-rights"})])],1),_vm._v(" "),_c('div',{staticClass:"items"},[_c('div',{staticClass:"item"},[_c('p',[_c('span',{staticClass:"pull-left"},[_vm._v("东陈镇汤湾村站")]),_vm._v(" "),_c('span',{staticClass:"type type1"},[_vm._v("设备维修")])]),_vm._v(" "),_c('p',[_c('em',{staticClass:"pull-left"},[_vm._v("完成时间：2020-08-20")]),_vm._v(" "),_c('em',{staticClass:"pull-right"},[_vm._v("维保人：张三")])])]),_vm._v(" "),_c('div',{staticClass:"item"},[_c('p',[_c('span',{staticClass:"pull-left"},[_vm._v("东陈镇汤湾村站")]),_vm._v(" "),_c('span',{staticClass:"type type2"},[_vm._v("例行维保")])]),_vm._v(" "),_c('p',[_c('em',{staticClass:"pull-left"},[_vm._v("完成时间：2020-08-20")]),_vm._v(" "),_c('em',{staticClass:"pull-right"},[_vm._v("维保人：张三")])])]),_vm._v(" "),_c('div',{staticClass:"item"},[_c('p',[_c('span',{staticClass:"pull-left"},[_vm._v("东陈镇汤湾村站")]),_vm._v(" "),_c('span',{staticClass:"type type3"},[_vm._v("运行检查")])]),_vm._v(" "),_c('p',[_c('em',{staticClass:"pull-left"},[_vm._v("完成时间：2020-08-20")]),_vm._v(" "),_c('em',{staticClass:"pull-right"},[_vm._v("维保人：张三")])])])])]),_vm._v(" "),_c('el-card',{staticClass:"dis-box-card box-card"},[_c('div',{staticClass:"clearfix",attrs:{"slot":"header"},slot:"header"},[_c('span',{staticStyle:{"font-size":"18px"}},[_vm._v("已完成")]),_vm._v(" "),_c('el-button',{staticClass:"mores",attrs:{"type":"text"},on:{"click":function($event){_vm.getListDetail(0)}}},[_vm._v("\n          查看更多\n          "),_c('i',{staticClass:"icon-rights"})])],1),_vm._v(" "),_c('div',{staticClass:"items"},[_c('div',{staticClass:"item"},[_c('p',[_c('span',{staticClass:"pull-left"},[_vm._v("东陈镇汤湾村站")]),_vm._v(" "),_c('span',{staticClass:"type type1"},[_vm._v("日常巡检")])]),_vm._v(" "),_c('p',[_c('em',{staticClass:"pull-left"},[_vm._v("完成时间：2020-08-20")]),_vm._v(" "),_c('em',{staticClass:"pull-right"},[_vm._v("维保人：张三")])])]),_vm._v(" "),_c('div',{staticClass:"item"},[_c('p',[_c('span',{staticClass:"pull-left"},[_vm._v("东陈镇汤湾村站")]),_vm._v(" "),_c('span',{staticClass:"type type3"},[_vm._v("日常巡检")])]),_vm._v(" "),_c('p',[_c('em',{staticClass:"pull-left"},[_vm._v("完成时间：2020-08-20")]),_vm._v(" "),_c('em',{staticClass:"pull-right"},[_vm._v("维保人：张三")])])]),_vm._v(" "),_c('div',{staticClass:"item"},[_c('p',[_c('span',{staticClass:"pull-left"},[_vm._v("东陈镇汤湾村站")]),_vm._v(" "),_c('span',{staticClass:"type type2"},[_vm._v("日常巡检")])]),_vm._v(" "),_c('p',[_c('em',{staticClass:"pull-left"},[_vm._v("完成时间：2020-08-20")]),_vm._v(" "),_c('em',{staticClass:"pull-right"},[_vm._v("维保人：张三")])])]),_vm._v(" "),_c('div',{staticClass:"item"},[_c('p',[_c('span',{staticClass:"pull-left"},[_vm._v("东陈镇汤湾村站")]),_vm._v(" "),_c('span',{staticClass:"type type2"},[_vm._v("日常巡检")])]),_vm._v(" "),_c('p',[_c('em',{staticClass:"pull-left"},[_vm._v("完成时间：2020-08-20")]),_vm._v(" "),_c('em',{staticClass:"pull-right"},[_vm._v("维保人：张三")])])])])])],1),_vm._v(" "),_c('el-dialog',{staticClass:"dialog-dispatch",attrs:{"width":"100%","title":this.diaLogTitle,"close-on-click-modal":false,"visible":_vm.diaLogFormVisible},on:{"update:visible":function($event){_vm.diaLogFormVisible=$event}}},[_c('el-form',{ref:"formRulesRef",staticClass:"el-form-custom",attrs:{"model":_vm.formData,"rules":_vm.formRules,"label-width":"90px"}},[_c('div',{staticClass:"el-form-item-inlines"},[_c('el-form-item',{attrs:{"label":"选择站点：","prop":"sid"}},[_c('el-cascader',{attrs:{"options":_vm.stationOptions,"props":_vm.stationOptionsProps},model:{value:(_vm.formData.sid),callback:function ($$v) {_vm.$set(_vm.formData, "sid", $$v)},expression:"formData.sid"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"派单事项：","prop":"type"}},[_c('el-select',{attrs:{"placeholder":"请选择设备类型"},model:{value:(_vm.formData.type),callback:function ($$v) {_vm.$set(_vm.formData, "type", $$v)},expression:"formData.type"}},[_c('el-option',{attrs:{"label":"设备维修","value":1}}),_vm._v(" "),_c('el-option',{attrs:{"label":"例行维保","value":2}}),_vm._v(" "),_c('el-option',{attrs:{"label":"运行检查","value":3}})],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"指派人员：","prop":"assigner_id"}},[_c('el-select',{attrs:{"filterable":"","placeholder":"请选择 或搜索"},on:{"change":function($event){_vm.userChange($event)}},model:{value:(_vm.formData.assigner_id),callback:function ($$v) {_vm.$set(_vm.formData, "assigner_id", $$v)},expression:"formData.assigner_id"}},_vm._l((_vm.userList),function(item){return _c('el-option',{key:item.id,attrs:{"label":item.name,"value":item.id}})}))],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"手机号码："}},[_c('el-input',{attrs:{"autocomplete":"off","disabled":""},model:{value:(_vm.formData.phone),callback:function ($$v) {_vm.$set(_vm.formData, "phone", $$v)},expression:"formData.phone"}})],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"维修内容：","prop":"content"}},[_c('el-input',{attrs:{"type":"textarea","rows":"3"},model:{value:(_vm.formData.content),callback:function ($$v) {_vm.$set(_vm.formData, "content", $$v)},expression:"formData.content"}})],1)],1),_vm._v(" "),_c('div',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.addEvent}},[_vm._v("确 定")]),_vm._v(" "),_c('el-button',{on:{"click":function($event){_vm.diaLogFormVisible = false}}},[_vm._v("取 消")])],1)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var views_login = (esExports);
// CONCATENATED MODULE: ./src/views/login/index.vue
function injectStyle (ssrContext) {
  __webpack_require__("GFL4")
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


/***/ })

});