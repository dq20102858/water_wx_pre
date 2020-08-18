webpackJsonp([10],{

/***/ "Ay5N":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("FXie");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("52ff79b8", content, true);

/***/ }),

/***/ "FXie":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, "\n.dialog-dispatch .el-select {\r\n  width: 100%;\n}\n.dialog-dispatch .el-form-item-inline {\r\n  display: inline-block;\n}\n.dialog-dispatch .el-form-item-inline .el-form-item {\r\n  display: inline-block;\n}\n.dialog-dispatch .el-form-item-block {\r\n  display: block;\n}\n.dialog-dispatch .el-form-item-inline .el-checkbox-group {\r\n  margin-left: 110px;\n}\n.dialog-dispatch .el-form-item-inline .el-input__inner {\r\n  width: 220px;\n}\n.el-form-item-detail .el-form-item {\r\n  margin-bottom: 5px;\n}\n.el-form-item-detail .disp-info {\r\n  line-height: 28px;\r\n  margin-top: 5px;\n}\n.dd {\r\n  display: inline-block;\r\n  overflow-y: auto;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "xqn6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/get-iterator.js
var get_iterator = __webpack_require__("BO1k");
var get_iterator_default = /*#__PURE__*/__webpack_require__.n(get_iterator);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/Record/index.vue

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Record = ({
  data: function data() {
    var _this = this;

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
      page_cur: 1,
      page_data_total: 0,
      page_size: 20,
      page_total: 0,
      dataList: [],
      userList: [],
      stationOptions: [],
      stationOptionsProps: {
        value: "id",
        label: "name",
        children: "child"
      },
      fatherStationList: [],
      childStationList: [],
      fatherStationId: 0,
      chlidStationId: 0,
      chlidStationName: "",
      searchKeyword: "",
      searchAssignerId: "0",
      searchType: "0",
      searchStatus: "0",
      pickerStartTime: {
        disabledDate: function disabledDate(time) {
          if (_this.searchEndTime) {
            return time.getTime() > new Date(_this.searchEndTime).getTime();
          }
        }
      },
      pickerEndTime: {
        disabledDate: function disabledDate(time) {
          if (_this.searchStartTime) {
            return time.getTime() < new Date(_this.searchStartTime).getTime();
          }
        }
      },
      searchStartTime: "",
      searchEndTime: ""
    };
  },
  created: function created() {
    this.getFatherStationList();
    this.getDataList();
    this.getUsersList();
  },

  methods: {
    getDataList: function getDataList() {
      var _this2 = this;

      var page = this.page_cur;
      var type = this.searchType;
      var status = this.searchStatus;
      var sid = this.chlidStationId;
      var assigner_id = this.searchAssignerId;
      var start_time = this.searchStartTime;
      var end_time = this.searchEndTime;
      this.request({
        url: "/assign/getAssignPages",
        method: "get",
        params: { page: page, sid: sid, assigner_id: assigner_id, type: type, status: status, start_time: start_time, end_time: end_time }
      }).then(function (res) {
        var data = res.data;
        if (data.status == 1) {
          _this2.dataList = data.data.data;
          _this2.page_cur = parseInt(data.data.current_page);
          _this2.page_total = data.data.last_page;
          _this2.page_data_total = data.data.total;
          _this2.page_size = data.data.per_page;
        }
      });
    },
    pageChange: function pageChange(value) {
      this.page_cur = value;
      this.getDataList();
    },
    pageToFirst: function pageToFirst() {
      this.page_cur = 1;
      this.getDataList();
    },
    pageToLast: function pageToLast() {
      this.page_cur = this.page_total;
      this.getDataList();
    },
    searchAssignerEvent: function searchAssignerEvent(item) {
      this.searchAssignerId = item;
      this.getDataList();
    },
    searchStatusEvent: function searchStatusEvent(val) {
      this.searchStatus = val;
      this.getDataList();
    },
    searchTypeEvent: function searchTypeEvent(val) {
      this.searchType = val;
      this.getDataList();
    },
    searchStartTimeEvent: function searchStartTimeEvent() {
      console.log(this.searchEndTime);
      if (this.searchEndTime != "") {
        this.page_cur = 1;
        this.getDataList();
      }
    },
    searchEndTimeEvent: function searchEndTimeEvent() {
      if (this.searchStartTime != "") {
        this.page_cur = 1;
        this.getDataList();
      }
    },
    searchAllEvent: function searchAllEvent() {
      this.page_cur = 1;
      this.searchStatus = "0";
      this.searchType = "0";
      this.searchAssignerId = "0";
      this.chlidStationId = 0;
      this.searchStartTime = "";
      this.searchEndTime = "";
      this.getDataList();
    },
    getStationList: function getStationList() {
      var _this3 = this;

      this.request({
        url: "/station/getStationLists",
        method: "get"
      }).then(function (response) {
        var data = response.data;
        if (data.status == 1) {
          _this3.stationOptions = data.data;
        }
      });
    },
    getUsersList: function getUsersList() {
      var _this4 = this;

      this.request({
        url: "/assign/getUsersLists",
        method: "get"
      }).then(function (response) {
        var data = response.data;
        if (data.status == 1) {
          _this4.userList = data.data;
        }
      });
    },
    userChange: function userChange(e) {
      var _this5 = this;

      this.userList.forEach(function (ele) {
        if (ele.id == e) {
          // if (ele.role_id == 1) {
          //   this.formData.role = "管理员";
          // } else if (ele.role_id == 2) {
          //   this.formData.role = "维修人员";
          // } else if (ele.role_id == 3) {
          //   this.formData.role = "巡检人员";
          // } else if (ele.role_id == 4) {
          //   this.formData.role = "分析人员";
          // }
          _this5.formData.phone = ele.phone;
        }
      });
    },

    //添加编辑
    addShowDialog: function addShowDialog() {
      var _this6 = this;

      this.getStationList();

      this.diaLogFormVisible = true;
      this.diaLogTitle = "发起派单";
      this.$nextTick(function () {
        _this6.$refs["formRulesRef"].clearValidate();
      });
      this.formData = {
        // title: "",
        // description: "",
        // recept_type: []
      };
    },
    addEvent: function addEvent() {
      var _this7 = this;

      var that = this;
      this.$refs["formRulesRef"].validate(function (valid) {
        if (valid) {
          var data = that.formData;
          data.sid = that.formData.sid[1];
          _this7.request({
            url: "/assign/addAssign",
            method: "post",
            data: data
          }).then(function (response) {
            var data = response.data;
            if (data.status == 1) {
              _this7.diaLogFormVisible = false;
              _this7.searchType = "0";
              _this7.getDataList();
              _this7.$message({
                type: "success",
                message: "保存成功！"
              });
            }
          });
        } else {
          console.log("操作失败！");
          return false;
        }
      });
    },
    detailEvent: function detailEvent(id) {
      var _this8 = this;

      this.diaLogFormDetailVisible = true;
      this.request({
        url: "/assign/getAssignDetail",
        method: "get",
        params: { id: id }
      }).then(function (res) {
        var data = res.data;
        if (data.status == 1) {
          _this8.formData = data.data;
        }
      });
    },
    applyEvent: function applyEvent(id) {
      var _this9 = this;

      this.$confirm("请确认派单是否完成？", "提示", {
        confirmButtonText: "已完成",
        cancelButtonText: "未完成",
        type: "warning",
        customClass: "el-message-box-new"
      }).then(function () {
        _this9.request({
          url: "/assign/checkAssign",
          method: "post",
          data: { id: id, status: 2 }
        }).then(function (res) {
          var data = res.data;
          if (data.status == 1) {
            _this9.getDataList();
          }
        });
      }).catch(function () {});
    },
    deleteEvent: function deleteEvent(id) {
      var _this10 = this;

      this.$confirm("您确定要删除？删除后不能恢复！", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
        customClass: "el-message-box-new"
      }).then(function () {
        _this10.request({
          url: "/assign/deleteAssign",
          method: "post",
          data: { id: id, type: parseInt(_this10.searchType) }
        }).then(function (res) {
          var data = res.data;
          if (data.status == 1) {
            if (_this10.dataList.length == 1) {
              _this10.page_cur = _this10.page_cur - 1;
              _this10.getDataList();
            } else {
              _this10.getDataList();
            }
            _this10.$message({
              type: "success",
              message: "删除成功！"
            });
          }
        });
      }).catch(function () {});
    },

    //station
    getFatherStationList: function getFatherStationList() {
      var _this11 = this;

      var name = this.chlidName;
      this.request({
        url: "/station/getStationLists",
        method: "get",
        params: { name: name }
      }).then(function (response) {
        var data = response.data;
        if (data.status == 1) {
          _this11.fatherStationList = data.data;
          if (_this11.fatherStationId == 0) {
            _this11.getChildStationList();
          }
        }
      });
    },
    getChildStationList: function getChildStationList() {
      var _this12 = this;

      var name = "";
      this.request({
        url: "/station/getChildStationLists",
        method: "get",
        params: { name: name }
      }).then(function (response) {
        var data = response.data;
        if (data.status == 1) {
          var results = data.data;
          _this12.childStationList = results;
        }
      });
    },
    fatherStationEvent: function fatherStationEvent(val) {
      var _this13 = this;

      if (val == 0) {
        this.getChildStationList();
        this.page_cur = 1;
        this.chlidStationId = 0;
        this.getDataList();
      }
      this.fatherStationId = val;
      this.fatherStationList.map(function (ele) {
        if (ele.id == val) {
          _this13.childStationList = ele.child;
        }
      });
    },
    chlidStationEvent: function chlidStationEvent(val) {
      this.page_cur = 1;
      this.chlidStationId = val;
      this.getDataList();
    },
    searchStationCallBack: function searchStationCallBack(queryString, cb) {
      this.request({
        url: "/station/getChildStationLists",
        method: "get",
        params: { name: queryString }
      }).then(function (response) {
        var data = response.data;
        if (data.status == 1) {
          var results = data.data;
          var list = [];
          if (results.length == 0) {
            list.push({
              id: 0,
              value: "未查询到站名"
            });
          }
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = get_iterator_default()(results), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var item = _step.value;

              list.push({
                id: item.id,
                pid: item.pid,
                value: item.name
              });
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }

          console.log(list);
          cb(list);
        }
      });
    },
    searchStationEvent: function searchStationEvent(item) {
      this.page_cur = 1;
      this.fatherStationEvent(item.pid);
      this.fatherStationId = item.pid;
      this.chlidStationId = item.id;
      this.chlidStationName = "";
      this.getDataList();
    }
    //end station

  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-32aee906","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/Record/index.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"app-pages"},[_c('header',{staticClass:"app-top-bar"},[_c('h1',{staticClass:"titles"},[_vm._v("考勤统计")]),_vm._v(" "),_c('a',{staticClass:"icons icon-add pull-right",on:{"click":_vm.addShowDialog}})]),_vm._v(" "),_c('div',{staticClass:"app-content"},[_c('div',{staticClass:"app-content-rows"},[_c('div',{staticClass:"app-table"},[_c('el-table',{attrs:{"data":_vm.dataList,"size":"mini"}},[_c('el-table-column',{attrs:{"label":"序号","type":"index"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"station_name","label":"站点名","class-name":"nowrap"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"开始时间","prop":"assign_time","class-name":"linewrap"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"结束时间","prop":"assign_time","class-name":"linewrap"}})],1),_vm._v(" "),_c('div',{staticClass:"app-pagination"},[(_vm.dataList.length !== 0)?_c('el-pagination',{staticClass:"pagination",attrs:{"layout":"prev, pager, next","page-size":this.page_size,"current-page":this.page_cur,"total":this.page_data_total},on:{"current-change":_vm.pageChange}}):_vm._e()],1)],1)])])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var views_Record = (esExports);
// CONCATENATED MODULE: ./src/views/Record/index.vue
function injectStyle (ssrContext) {
  __webpack_require__("Ay5N")
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
  Record,
  views_Record,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_views_Record = __webpack_exports__["default"] = (Component.exports);


/***/ })

});