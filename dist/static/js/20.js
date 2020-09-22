webpackJsonp([20],{

/***/ "8iLd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/SiteManage/station.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var station = ({
  data: function data() {
    return {
      fatherStationId: 0,
      fatherStationName: "",
      fatherStationList: [],
      chlidStationName: "",
      childStationList: []
    };
  },
  created: function created() {
    this.getStationList();
  },

  methods: {
    backURL: function backURL() {
      this.$router.push("/sitemanage");
    },
    getStationList: function getStationList() {
      var _this = this;

      this.request({
        url: "/station/getStationLists",
        method: "get"
      }).then(function (response) {
        var res = response.data;
        if (res.status == 1) {
          var dataList = res.data;
          _this.fatherStationList = dataList;
          var stationid = _this.$route.query.sid;
          console.log(stationid);
          if (typeof stationid == "undefined" || stationid == 0) {
            stationid = 0;
            _this.fatherStationName = "全部";
            var newJson = [];
            for (var i = 0; i < dataList.length; i++) {
              for (var y = 0; y < dataList[i].child.length; y++) {
                var tempJson = {
                  id: dataList[i].child[y].id,
                  name: dataList[i].child[y].name,
                  address: dataList[i].child[y].address
                };
                newJson.push(tempJson);
              }
            }
            _this.childStationList = newJson;
          } else {
            _this.fatherStationId = _this.fatherStationList.find(function (item) {
              return item.id == stationid;
            }).id;
            _this.fatherStationName = _this.fatherStationList.find(function (item) {
              return item.id == stationid;
            }).name;
            _this.fatherStationList.map(function (ele) {
              if (ele.id == stationid) {
                _this.childStationList = ele.child;
              }
            });
          }
        }
      });
    },
    fatherStationEvent: function fatherStationEvent(id) {
      this.$router.push({
        path: "/sitemanage/station",
        query: { sid: id }
      });
    },
    chlidStationNameEvent: function chlidStationNameEvent() {
      var sname = this.chlidStationName;
      if (sname == "" || sname == null) {
        this.getStationList();
      }
    },
    chlidStationEvent: function chlidStationEvent() {
      var sname = this.chlidStationName;
      var json = this.childStationList;
      if (sname == "" || sname == null) {
        return json;
      } else {
        var newJson = [];
        for (var i = 0; i < json.length; i++) {
          if (json[i].name.indexOf(sname) > -1) {
            var tempJson = {
              id: json[i].id,
              name: json[i].name,
              address: json[i].address
            };
            newJson.push(tempJson);
          }
        }
        this.childStationList = newJson;
        return json;
      }
    },
    stationDetail: function stationDetail(id) {
      this.$router.push({
        path: "/sitemanage/stationdetail",
        query: { sid: id }
      });
    }
    //end

  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-253f92bc","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/SiteManage/station.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"app-pages"},[_c('header',{staticClass:"app-top-bar"},[_c('span',{staticClass:"icons icon-back pull-left",on:{"click":_vm.backURL}}),_vm._v(" "),_c('h1',{staticClass:"titles"},[_vm._v("选择站点")])]),_vm._v(" "),_c('div',{staticClass:"app-content"},[_c('div',{staticClass:"station-so"},[_c('el-input',{staticClass:"input-with-select",attrs:{"placeholder":"请输入处理站名称","clearable":""},on:{"change":_vm.chlidStationNameEvent},model:{value:(_vm.chlidStationName),callback:function ($$v) {_vm.chlidStationName=$$v},expression:"chlidStationName"}},[_c('el-select',{attrs:{"slot":"prepend","placeholder":"请选择"},on:{"change":function($event){_vm.fatherStationEvent($event)}},slot:"prepend",model:{value:(_vm.fatherStationId),callback:function ($$v) {_vm.fatherStationId=$$v},expression:"fatherStationId"}},[_c('el-option',{attrs:{"label":"全部","value":0}}),_vm._v(" "),_vm._l((_vm.fatherStationList),function(item){return _c('el-option',{key:item.id+'',attrs:{"label":item.name,"value":item.id}})})],2),_vm._v(" "),_c('el-button',{attrs:{"slot":"append","icon":"el-icon-search"},on:{"click":_vm.chlidStationEvent},slot:"append"})],1)],1),_vm._v(" "),_c('div',{staticClass:"app-content-rows"},[_c('div',{staticClass:"station-list"},[_c('h2',[_vm._v(_vm._s(_vm.fatherStationName))]),_vm._v(" "),_c('div',{staticClass:"warp"},_vm._l((_vm.childStationList),function(item){return _c('div',{key:item.id,staticClass:"item",on:{"click":function($event){_vm.stationDetail(item.id)}}},[_c('div',{staticClass:"text"},[_c('h3',[_vm._v(_vm._s(item.name))])]),_vm._v(" "),_c('h4',[_vm._v(_vm._s(item.address))])])})),_vm._v(" "),(_vm.childStationList.length==0)?_c('div',{staticClass:"app-nodatas"},[_vm._v("暂无数据")]):_vm._e()])])])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var SiteManage_station = (esExports);
// CONCATENATED MODULE: ./src/views/SiteManage/station.vue
function injectStyle (ssrContext) {
  __webpack_require__("H1Rx")
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
  station,
  SiteManage_station,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var views_SiteManage_station = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "H1Rx":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("cS8l");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("1f2157b5", content, true);

/***/ }),

/***/ "cS8l":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, "\n.station-so {\r\n  padding: 15px 15px 1px 15px;\n}\n.station-so .el-input__inner {\r\n  border: none;\n}\n.station-so .el-input-group__prepend {\r\n  background: #dbecfd;\r\n  border-radius: 30px 0 0 30px;\r\n  border: none;\n}\n.station-so .el-input-group__append {\r\n  background: #fff;\r\n  border-radius: 0 30px 30px 0;\r\n  border: none;\n}\n.station-so .el-select .el-input--suffix .el-input__inner {\r\n  padding-right: 30px;\r\n  width: 130px;\r\n  text-align: center;\n}\n.station-so .el-select__caret {\r\n  color: #338ff6 !important;\n}\n.station-so .el-button--medium {\r\n  padding: 10px;\n}\r\n/* list */\n.station-list h2 {\r\n  font-size: 18px;\r\n  color: #333;\r\n  padding-left: 10px;\r\n  margin-bottom: 20px;\n}\n.station-list .warp {\r\n  background: #fff;\r\n  border-radius: 6px;\r\n  overflow: hidden;\n}\n.station-list .item {\r\n  padding-bottom: 20px;\r\n  margin: 20px;\r\n  border-bottom: 1px #ddd solid;\r\n  overflow: hidden;\n}\n.station-list .item:last-child {\r\n  border: none;\r\n  padding-bottom: 0;\n}\n.station-list .item .text {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: justify;\r\n      -ms-flex-pack: justify;\r\n          justify-content: space-between;\r\n  margin-bottom: 6px;\n}\n.station-list .item h3 {\r\n  color: #303030;\r\n  font-size: 15px;\r\n  float: left;\r\n  line-height: 20px;\r\n  margin-top: 5px;\n}\n.station-list .item h4 {\r\n  color: #7e7e7e;\r\n  font-size: 14px;\r\n  font-weight: 400;\n}\n.station-list .item .status {\r\n  margin-top: 0;\r\n  margin-left: 20px;\n}\n.station-list .item span {\r\n  float: right;\r\n  padding: 6px 15px;\r\n  border-radius: 30px;\r\n  color: #fff;\r\n  white-space: nowrap;\n}\n.station-list .item .status1 {\r\n  background: #00dd86;\n}\n.station-list .item .status2 {\r\n  background: #fd3c5a;\n}\r\n", ""]);

// exports


/***/ })

});