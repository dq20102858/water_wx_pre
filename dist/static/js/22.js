webpackJsonp([22],{

/***/ "1FqB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/Dispatch/edit.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      formData: {},
      formRules: {
        sid: [{
          required: true,
          message: "请选择站点名",
          trigger: "change"
        }],
        role_id: [{
          required: true,
          message: "请选择人员职位",
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
        assign_time: [{
          required: true,
          message: "请选择指派时间",
          trigger: "change"
        }],
        content: [{
          required: true,
          message: "请输入指派内容",
          trigger: "blur"
        }, { min: 2, max: 200, message: "长度在2到200个字符", trigger: "blur" }, {
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
      },
      userList: []
    };
  },
  created: function created() {
    this.getStationList();
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
    changeRoleEvent: function changeRoleEvent(roleid) {
      this.$set(this.formData, "assigner_id", "");
      this.getUsersList(roleid);
    },
    getUsersList: function getUsersList(roleid) {
      var _this2 = this;

      this.request({
        url: "/assign/getUsersLists",
        method: "get",
        params: { role_id: roleid }
      }).then(function (response) {
        var data = response.data;
        if (data.status == 1) {
          _this2.userList = data.data;
        }
      });
    },
    userChange: function userChange(e) {
      var _this3 = this;

      this.userList.forEach(function (ele) {
        if (ele.id == e) {
          _this3.formData.phone = ele.phone;
        }
      });
    },
    addEvent: function addEvent() {
      var _this4 = this;

      this.$refs["formRulesRef"].validate(function (valid) {
        if (valid) {
          var data = _this4.formData;
          data.sid = _this4.formData.sid[1];
          _this4.request({
            url: "assign/addAssign",
            method: "post",
            data: data
          }).then(function (response) {
            var res = response.data;
            if (res.status == 1) {
              _this4.$message({
                type: "success",
                message: "保存成功！"
              });
              _this4.$router.push("/dispatch/");
            }
          });
        } else {
          return false;
        }
      });
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-06defebe","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/Dispatch/edit.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"app-pages"},[_c('header',{staticClass:"app-top-bar"},[_c('span',{staticClass:"icons icon-back pull-left",on:{"click":_vm.backURL}}),_vm._v(" "),_c('h1',{staticClass:"titles"},[_vm._v("发起派单")])]),_vm._v(" "),_c('div',{staticClass:"app-content"},[_c('div',{staticClass:"app-form"},[_c('el-form',{ref:"formRulesRef",staticClass:"el-form-custom",attrs:{"model":_vm.formData,"rules":_vm.formRules,"label-width":"100px"}},[_c('el-form-item',{attrs:{"label":"站点名：","prop":"sid"}},[_c('el-cascader',{attrs:{"popper-class":"app-cascader","options":_vm.stationOptions,"props":_vm.stationOptionsProps,"placeholder":"请选择站点"},model:{value:(_vm.formData.sid),callback:function ($$v) {_vm.$set(_vm.formData, "sid", $$v)},expression:"formData.sid"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"派单事项：","prop":"type"}},[_c('el-select',{attrs:{"placeholder":"请选择派单事项"},model:{value:(_vm.formData.type),callback:function ($$v) {_vm.$set(_vm.formData, "type", $$v)},expression:"formData.type"}},[_c('el-option',{attrs:{"label":"设备维修","value":1}}),_vm._v(" "),_c('el-option',{attrs:{"label":"例行维保","value":2}}),_vm._v(" "),_c('el-option',{attrs:{"label":"运行检查","value":3}})],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"人员职位：","prop":"role_id"}},[_c('el-select',{attrs:{"placeholder":"请选择职位"},on:{"change":function($event){_vm.changeRoleEvent($event)}},model:{value:(_vm.formData.role_id),callback:function ($$v) {_vm.$set(_vm.formData, "role_id", $$v)},expression:"formData.role_id"}},[_c('el-option',{attrs:{"label":"管理员","value":1}}),_vm._v(" "),_c('el-option',{attrs:{"label":"维修人员","value":2}}),_vm._v(" "),_c('el-option',{attrs:{"label":"巡检人员","value":3}}),_vm._v(" "),_c('el-option',{attrs:{"label":"分析人员","value":4}})],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"指派人员：","prop":"assigner_id"}},[_c('el-select',{attrs:{"filterable":"","placeholder":"请选择指派人员"},on:{"change":function($event){_vm.userChange($event)}},model:{value:(_vm.formData.assigner_id),callback:function ($$v) {_vm.$set(_vm.formData, "assigner_id", $$v)},expression:"formData.assigner_id"}},_vm._l((this.userList),function(item){return _c('el-option',{key:item.id,attrs:{"label":item.name,"value":item.id}})}))],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"手机号码："}},[_c('el-input',{attrs:{"autocomplete":"off","disabled":""},model:{value:(_vm.formData.phone),callback:function ($$v) {_vm.$set(_vm.formData, "phone", $$v)},expression:"formData.phone"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"指派内容：","prop":"content"}},[_c('el-input',{attrs:{"type":"textarea","rows":"3"},model:{value:(_vm.formData.content),callback:function ($$v) {_vm.$set(_vm.formData, "content", $$v)},expression:"formData.content"}})],1),_vm._v(" "),_c('el-form-item',{staticClass:"app-form-save"},[_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.addEvent}},[_vm._v("确 定")])],1)],1)],1)])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var Dispatch_edit = (esExports);
// CONCATENATED MODULE: ./src/views/Dispatch/edit.vue
function injectStyle (ssrContext) {
  __webpack_require__("JK51")
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
  Dispatch_edit,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var views_Dispatch_edit = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "JK51":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("NRDa");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("50fa1988", content, true);

/***/ }),

/***/ "NRDa":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, "\n.dis-box-card {\r\n  margin: 15px;\r\n  border-radius: 6px;\n}\n.dis-box-card .el-card__header {\r\n  background: #2b8cf9;\r\n  color: #fff;\r\n  padding: 8px 10px 8px 15px;\n}\n.dis-box-card .mores {\r\n  float: right;\r\n  padding: 3px 0;\r\n  color: #fff;\n}\n.dis-box-card .item {\r\n  border-bottom: 1px #ddd solid;\r\n  overflow: hidden;\r\n  padding: 20px 0 15px 0;\n}\n.dis-box-card .item:last-child {\r\n  border: 0;\n}\n.dis-box-card .el-card__body {\r\n  padding: 0 20px;\n}\n.dis-box-card .item p {\r\n  display: block;\r\n  padding-bottom: 5px;\r\n  overflow: hidden;\n}\n.dis-box-card .item span {\r\n  color: #333;\r\n  font-size: 14px;\n}\n.dis-box-card .item em {\r\n  color: #999;\r\n  font-size: 12px;\n}\n.dis-box-card .type {\r\n  float: right;\r\n  cursor: pointer;\r\n  color: #fff !important;\r\n  padding: 3px 8px;\r\n  border-radius: 3px;\r\n  font-size: 12px !important;\n}\n.dis-box-card .type1 {\r\n  background: #3a91f1;\n}\n.dis-box-card .type2 {\r\n  background: #00dd86;\n}\n.dis-box-card .type3 {\r\n  background: #ffa000;\n}\r\n", ""]);

// exports


/***/ })

});