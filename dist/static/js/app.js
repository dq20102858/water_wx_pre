webpackJsonp([21],{

/***/ "+g8z":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "/CRi":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "NHnr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
var filters_namespaceObject = {};
__webpack_require__.d(filters_namespaceObject, "formatDate", function() { return formatDate; });
__webpack_require__.d(filters_namespaceObject, "formatDateTime", function() { return formatDateTime; });
__webpack_require__.d(filters_namespaceObject, "formatGetDate", function() { return formatGetDate; });
__webpack_require__.d(filters_namespaceObject, "formatDateTamp", function() { return formatDateTamp; });
__webpack_require__.d(filters_namespaceObject, "dateDifference", function() { return dateDifference; });

// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/object/keys.js
var keys = __webpack_require__("fZjL");
var keys_default = /*#__PURE__*/__webpack_require__.n(keys);

// EXTERNAL MODULE: ./node_modules/babel-polyfill/lib/index.js
var lib = __webpack_require__("j1ja");
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

// EXTERNAL MODULE: external "vue"
var external__vue_ = __webpack_require__("lRwf");
var external__vue__default = /*#__PURE__*/__webpack_require__.n(external__vue_);

// EXTERNAL MODULE: ./node_modules/normalize.css/normalize.css
var normalize = __webpack_require__("uMhA");
var normalize_default = /*#__PURE__*/__webpack_require__.n(normalize);

// EXTERNAL MODULE: external "ElementUI"
var external__ElementUI_ = __webpack_require__("l6IN");
var external__ElementUI__default = /*#__PURE__*/__webpack_require__.n(external__ElementUI_);

// EXTERNAL MODULE: ./node_modules/element-ui/lib/theme-chalk/index.css
var theme_chalk = __webpack_require__("tvR6");
var theme_chalk_default = /*#__PURE__*/__webpack_require__.n(theme_chalk);

// EXTERNAL MODULE: ./src/assets/css/index.scss
var css = __webpack_require__("+g8z");
var css_default = /*#__PURE__*/__webpack_require__.n(css);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/App.vue
//
//
//
//
//

/* harmony default export */ var App = ({
  data: function data() {
    return {
      showLoading: false,
      reload: true
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.globalEvBus.$on("showLoading", function () {
      _this.showLoading = true;
    });
    this.globalEvBus.$on("hideLoading", function () {
      _this.showLoading = false;
    });
    this.globalEvBus.$on("reload", function () {
      _this.reload = false;
      _this.$nextTick(function () {
        _this.reload = true;
      });
    });
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-77cc10e2","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/App.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"loading",rawName:"v-loading.fullscreen",value:(_vm.showLoading),expression:"showLoading",modifiers:{"fullscreen":true}}],attrs:{"id":"app","element-loading-text":"拼命加载中","element-loading-spinner":"el-icon-loading","element-loading-background":"rgba(0, 0, 0, 0.01)"}},[(_vm.reload)?_c('router-view'):_vm._e()],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var selectortype_template_index_0_src_App = (esExports);
// CONCATENATED MODULE: ./src/App.vue
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  App,
  selectortype_template_index_0_src_App,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_App = (Component.exports);

// EXTERNAL MODULE: ./node_modules/vue-router/dist/vue-router.esm.js
var vue_router_esm = __webpack_require__("/ocq");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/layout/Layout.vue
//
//
//
//
//

/* harmony default export */ var Layout = ({
  data: function data() {
    return {};
  },

  methods: {}
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-5f44dbe2","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/layout/Layout.vue
var Layout_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"app-wrapper"},[_c('router-view')],1)}
var Layout_staticRenderFns = []
var Layout_esExports = { render: Layout_render, staticRenderFns: Layout_staticRenderFns }
/* harmony default export */ var layout_Layout = (Layout_esExports);
// CONCATENATED MODULE: ./src/views/layout/Layout.vue
var Layout_normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var Layout___vue_template_functional__ = false
/* styles */
var Layout___vue_styles__ = null
/* scopeId */
var Layout___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var Layout___vue_module_identifier__ = null
var Layout_Component = Layout_normalizeComponent(
  Layout,
  layout_Layout,
  Layout___vue_template_functional__,
  Layout___vue_styles__,
  Layout___vue_scopeId__,
  Layout___vue_module_identifier__
)

/* harmony default export */ var views_layout_Layout = (Layout_Component.exports);

// CONCATENATED MODULE: ./src/router/index.js




external__vue__default.a.use(vue_router_esm["a" /* default */]);

var constantRouterMap = [{
  path: '/login',
  component: function component() {
    return __webpack_require__.e/* import() */(1).then(__webpack_require__.bind(null, "T+/8"));
  },
  hidden: true
}, {
  path: '/404',
  component: function component() {
    return __webpack_require__.e/* import() */(2).then(__webpack_require__.bind(null, "fe7i"));
  },
  hidden: true
}, {
  path: '/401',
  component: function component() {
    return __webpack_require__.e/* import() */(4).then(__webpack_require__.bind(null, "97xN"));
  },
  hidden: true
}, {
  path: '/sitemanage',
  component: views_layout_Layout,
  hidden: true,
  children: [{
    path: '/sitemanage',
    name: 'sitemanage',
    component: function component() {
      return __webpack_require__.e/* import() */(6).then(__webpack_require__.bind(null, "vzEL"));
    }
  }, {
    path: '/sitemanage/station',
    name: 'sitemanage-station',
    component: function component() {
      return __webpack_require__.e/* import() */(8).then(__webpack_require__.bind(null, "8iLd"));
    }
  }, {
    path: '/sitemanage/stationdetail',
    name: 'sitemanage-stationdetail',
    component: function component() {
      return __webpack_require__.e/* import() */(5).then(__webpack_require__.bind(null, "YQSK"));
    }
  }, {
    path: '/sitemanage/main',
    name: 'sitemanage-main',
    component: function component() {
      return __webpack_require__.e/* import() */(0).then(__webpack_require__.bind(null, "pOEK"));
    }
  }, {
    path: '/sitemanage/devicedetail',
    name: 'sitemanage-devicedetail',
    component: function component() {
      return __webpack_require__.e/* import() */(3).then(__webpack_require__.bind(null, "AWFw"));
    }
  }, {
    path: '/sitemanage/statisticsenergy',
    name: 'sitemanage-statisticsenergy',
    component: function component() {
      return __webpack_require__.e/* import() */(7).then(__webpack_require__.bind(null, "Rz0p"));
    }
  }, {
    path: '/sitemanage/statisticswaterquality',
    name: 'sitemanage-statisticswaterquality',
    component: function component() {
      return __webpack_require__.e/* import() */(11).then(__webpack_require__.bind(null, "zcLY"));
    }
  }]
}, {
  path: '/dispatch',
  component: views_layout_Layout,
  hidden: true,
  children: [{
    path: '/dispatch',
    name: 'dispatch',
    component: function component() {
      return __webpack_require__.e/* import() */(15).then(__webpack_require__.bind(null, "IRil"));
    }
  }, {
    path: '/dispatch/list',
    name: 'dispatch-list',
    component: function component() {
      return __webpack_require__.e/* import() */(12).then(__webpack_require__.bind(null, "J4TC"));
    }
  }]
}, {
  path: '/record',
  component: views_layout_Layout,
  hidden: true,
  children: [{
    path: '/record',
    name: 'record',
    component: function component() {
      return __webpack_require__.e/* import() */(18).then(__webpack_require__.bind(null, "xqn6"));
    }
  }, {
    path: '/record/edit',
    name: 'recordedit',
    component: function component() {
      return __webpack_require__.e/* import() */(17).then(__webpack_require__.bind(null, "TXIg"));
    }
  }, {
    path: '/record/operation',
    name: 'operation',
    component: function component() {
      return __webpack_require__.e/* import() */(13).then(__webpack_require__.bind(null, "IsfQ"));
    }
  }, {
    path: '/record/operationedit',
    name: 'operationedit',
    component: function component() {
      return __webpack_require__.e/* import() */(10).then(__webpack_require__.bind(null, "RdRo"));
    }
  }, {
    path: '/record/sampling',
    name: 'sampling',
    component: function component() {
      return __webpack_require__.e/* import() */(9).then(__webpack_require__.bind(null, "3YOD"));
    }
  }, {
    path: '/record/samplingedit',
    name: 'samplingedit',
    component: function component() {
      return __webpack_require__.e/* import() */(14).then(__webpack_require__.bind(null, "Cuha"));
    }
  }]
}, {
  path: '/attendance',
  component: views_layout_Layout,
  hidden: true,
  children: [{
    path: '/attendance',
    name: 'attendance',
    component: function component() {
      return __webpack_require__.e/* import() */(16).then(__webpack_require__.bind(null, "Cxod"));
    }
  }]
}, {
  path: '/warning',
  component: views_layout_Layout,
  hidden: true,
  children: [{
    path: '/warning',
    name: 'warning',
    component: function component() {
      return __webpack_require__.e/* import() */(19).then(__webpack_require__.bind(null, "WdIq"));
    }
  }]
}];

/* harmony default export */ var router = (new vue_router_esm["a" /* default */]({
  scrollBehavior: function scrollBehavior() {
    return { y: 0 };
  },
  routes: constantRouterMap
}));
//路由组件注册
var asyncRouterMap = [];
// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__("NYxO");

// EXTERNAL MODULE: ./node_modules/js-cookie/src/js.cookie.js
var js_cookie = __webpack_require__("lbHh");
var js_cookie_default = /*#__PURE__*/__webpack_require__.n(js_cookie);

// CONCATENATED MODULE: ./src/store/modules/app.js


var app = {
  state: {
    sidebar: {
      opened: !+js_cookie_default.a.get('sidebarStatus'),
      withoutAnimation: false
    },
    device: 'desktop',
    language: js_cookie_default.a.get('language') || 'en'
  },
  mutations: {
    TOGGLE_SIDEBAR: function TOGGLE_SIDEBAR(state) {
      if (state.sidebar.opened) {
        js_cookie_default.a.set('sidebarStatus', 1);
      } else {
        js_cookie_default.a.set('sidebarStatus', 0);
      }
      state.sidebar.opened = !state.sidebar.opened;
      state.sidebar.withoutAnimation = false;
    },
    CLOSE_SIDEBAR: function CLOSE_SIDEBAR(state, withoutAnimation) {
      js_cookie_default.a.set('sidebarStatus', 1);
      state.sidebar.opened = false;
      state.sidebar.withoutAnimation = withoutAnimation;
    },
    TOGGLE_DEVICE: function TOGGLE_DEVICE(state, device) {
      state.device = device;
    },
    SET_LANGUAGE: function SET_LANGUAGE(state, language) {
      state.language = language;
      js_cookie_default.a.set('language', language);
    }
  },
  actions: {
    toggleSideBar: function toggleSideBar(_ref) {
      var commit = _ref.commit;

      commit('TOGGLE_SIDEBAR');
    },
    closeSideBar: function closeSideBar(_ref2, _ref3) {
      var commit = _ref2.commit;
      var withoutAnimation = _ref3.withoutAnimation;

      commit('CLOSE_SIDEBAR', withoutAnimation);
    },
    toggleDevice: function toggleDevice(_ref4, device) {
      var commit = _ref4.commit;

      commit('TOGGLE_DEVICE', device);
    },
    setLanguage: function setLanguage(_ref5, language) {
      var commit = _ref5.commit;

      commit('SET_LANGUAGE', language);
    }
  }
};

/* harmony default export */ var modules_app = (app);
// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/promise.js
var promise = __webpack_require__("//Fk");
var promise_default = /*#__PURE__*/__webpack_require__.n(promise);

// CONCATENATED MODULE: ./src/store/modules/permission.js


/**
 * 通过meta.role判断是否与当前用户权限匹配
 * @param roles
 * @param route
 */
function hasPermission(roles, route) {
  if (route.meta && route.meta.roles) {
    return roles.some(function (role) {
      return route.meta.roles.indexOf(role) >= 0;
    });
  } else {
    return true;
  }
}

/**
 * 递归过滤异步路由表，返回符合用户角色权限的路由表
 * @param asyncRouterMap
 * @param roles
 */
// function filterAsyncRouter(asyncRouterMap, roles) {
//   const accessedRouters = asyncRouterMap.filter(route => {
//     if (hasPermission(roles, route)) {
//       if (route.children && route.children.length) {
//         route.children = filterAsyncRouter(route.children, roles)
//       }
//       return true
//     }
//     return false
//   })
//   return accessedRouters
// }
function mapAsyncRouter(map, routes) {
  var res = [];
  routes.forEach(function (route) {
    var tmp = {
      path: route.moduleUrl,
      component: map[route.moduleActionName],
      hidden: route.moduleHide === 1,
      meta: { title: route.moduleTitle, icon: route.moduleIcon }
    };
    if (route.children && route.children.length > 0) {
      tmp.children = route.children;
      tmp.children = mapAsyncRouter(map, tmp.children);
    }
    if (route.pid !== 0) {
      tmp.name = route.moduleName;
      tmp.meta.noCache = route.noCache === 0 ? false : true;
    }
    if (route.moduleUrl === '') {
      tmp.redirect = 'sitemanage';
    }
    res.push(tmp);
  });
  return res;
}

var permission = {
  state: {
    routers: constantRouterMap,
    addRouters: []
  },
  mutations: {
    SET_ROUTERS: function SET_ROUTERS(state, routers) {
      state.addRouters = routers;
      state.routers = constantRouterMap.concat(routers);
    }
  },
  actions: {
    GenerateRoutes: function GenerateRoutes(_ref, data) {
      var commit = _ref.commit;

      return new promise_default.a(function (resolve) {
        var access = data.access;

        var map = asyncRouterMap;
        // const accessedRouters = mapAsyncRouter(map, access)
        var accessedRouters = asyncRouterMap;
        accessedRouters.push({ path: '*', redirect: '/404', hidden: true });
        commit('SET_ROUTERS', accessedRouters);
        resolve();
      });
    }
  }
};

/* harmony default export */ var modules_permission = (permission);
// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__("Gu7T");
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);

// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/get-iterator.js
var get_iterator = __webpack_require__("BO1k");
var get_iterator_default = /*#__PURE__*/__webpack_require__.n(get_iterator);

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__("d7EF");
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);

// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/object/assign.js
var object_assign = __webpack_require__("woOf");
var assign_default = /*#__PURE__*/__webpack_require__.n(object_assign);

// CONCATENATED MODULE: ./src/store/modules/tagsView.js





var tagsView = {
  state: {
    visitedViews: [],
    cachedViews: []
  },
  mutations: {
    ADD_VISITED_VIEW: function ADD_VISITED_VIEW(state, view) {
      if (state.visitedViews.some(function (v) {
        return v.path === view.path;
      })) return;
      state.visitedViews.push(assign_default()({}, view, {
        title: view.meta.title || 'no-name'
      }));
    },
    ADD_CACHED_VIEW: function ADD_CACHED_VIEW(state, view) {
      if (state.cachedViews.includes(view.name)) return;
      if (!view.meta.noCache) {
        state.cachedViews.push(view.name);
      }
    },

    DEL_VISITED_VIEW: function DEL_VISITED_VIEW(state, view) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = get_iterator_default()(state.visitedViews.entries()), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var _ref = _step.value;

          var _ref2 = slicedToArray_default()(_ref, 2);

          var i = _ref2[0];
          var v = _ref2[1];

          if (v.path === view.path) {
            state.visitedViews.splice(i, 1);
            break;
          }
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
    },
    DEL_CACHED_VIEW: function DEL_CACHED_VIEW(state, view) {
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = get_iterator_default()(state.cachedViews), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var i = _step2.value;

          if (i === view.name) {
            var index = state.cachedViews.indexOf(i);
            state.cachedViews.splice(index, 1);
            break;
          }
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
    },

    DEL_OTHERS_VISITED_VIEWS: function DEL_OTHERS_VISITED_VIEWS(state, view) {
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = get_iterator_default()(state.visitedViews.entries()), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var _ref3 = _step3.value;

          var _ref4 = slicedToArray_default()(_ref3, 2);

          var i = _ref4[0];
          var v = _ref4[1];

          if (v.path === view.path) {
            state.visitedViews = state.visitedViews.slice(i, i + 1);
            break;
          }
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return) {
            _iterator3.return();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }
    },
    DEL_OTHERS_CACHED_VIEWS: function DEL_OTHERS_CACHED_VIEWS(state, view) {
      var _iteratorNormalCompletion4 = true;
      var _didIteratorError4 = false;
      var _iteratorError4 = undefined;

      try {
        for (var _iterator4 = get_iterator_default()(state.cachedViews), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
          var i = _step4.value;

          if (i === view.name) {
            var index = state.cachedViews.indexOf(i);
            state.cachedViews = state.cachedViews.slice(index, index + 1);
            break;
          }
        }
      } catch (err) {
        _didIteratorError4 = true;
        _iteratorError4 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion4 && _iterator4.return) {
            _iterator4.return();
          }
        } finally {
          if (_didIteratorError4) {
            throw _iteratorError4;
          }
        }
      }
    },

    DEL_ALL_VISITED_VIEWS: function DEL_ALL_VISITED_VIEWS(state) {
      state.visitedViews = [];
    },
    DEL_ALL_CACHED_VIEWS: function DEL_ALL_CACHED_VIEWS(state) {
      state.cachedViews = [];
    },

    UPDATE_VISITED_VIEW: function UPDATE_VISITED_VIEW(state, view) {
      var _iteratorNormalCompletion5 = true;
      var _didIteratorError5 = false;
      var _iteratorError5 = undefined;

      try {
        for (var _iterator5 = get_iterator_default()(state.visitedViews), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
          var v = _step5.value;

          if (v.path === view.path) {
            v = assign_default()(v, view);
            break;
          }
        }
      } catch (err) {
        _didIteratorError5 = true;
        _iteratorError5 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion5 && _iterator5.return) {
            _iterator5.return();
          }
        } finally {
          if (_didIteratorError5) {
            throw _iteratorError5;
          }
        }
      }
    }

  },
  actions: {
    addView: function addView(_ref5, view) {
      var dispatch = _ref5.dispatch;

      dispatch('addVisitedView', view);
      dispatch('addCachedView', view);
    },
    addVisitedView: function addVisitedView(_ref6, view) {
      var commit = _ref6.commit;

      commit('ADD_VISITED_VIEW', view);
    },
    addCachedView: function addCachedView(_ref7, view) {
      var commit = _ref7.commit;

      commit('ADD_CACHED_VIEW', view);
    },
    delView: function delView(_ref8, view) {
      var dispatch = _ref8.dispatch,
          state = _ref8.state;

      return new promise_default.a(function (resolve) {
        dispatch('delVisitedView', view);
        dispatch('delCachedView', view);
        resolve({
          visitedViews: [].concat(toConsumableArray_default()(state.visitedViews)),
          cachedViews: [].concat(toConsumableArray_default()(state.cachedViews))
        });
      });
    },
    delVisitedView: function delVisitedView(_ref9, view) {
      var commit = _ref9.commit,
          state = _ref9.state;

      return new promise_default.a(function (resolve) {
        commit('DEL_VISITED_VIEW', view);
        resolve([].concat(toConsumableArray_default()(state.visitedViews)));
      });
    },
    delCachedView: function delCachedView(_ref10, view) {
      var commit = _ref10.commit,
          state = _ref10.state;

      return new promise_default.a(function (resolve) {
        commit('DEL_CACHED_VIEW', view);
        resolve([].concat(toConsumableArray_default()(state.cachedViews)));
      });
    },
    delOthersViews: function delOthersViews(_ref11, view) {
      var dispatch = _ref11.dispatch,
          state = _ref11.state;

      return new promise_default.a(function (resolve) {
        dispatch('delOthersVisitedViews', view);
        dispatch('delOthersCachedViews', view);
        resolve({
          visitedViews: [].concat(toConsumableArray_default()(state.visitedViews)),
          cachedViews: [].concat(toConsumableArray_default()(state.cachedViews))
        });
      });
    },
    delOthersVisitedViews: function delOthersVisitedViews(_ref12, view) {
      var commit = _ref12.commit,
          state = _ref12.state;

      return new promise_default.a(function (resolve) {
        commit('DEL_OTHERS_VISITED_VIEWS', view);
        resolve([].concat(toConsumableArray_default()(state.visitedViews)));
      });
    },
    delOthersCachedViews: function delOthersCachedViews(_ref13, view) {
      var commit = _ref13.commit,
          state = _ref13.state;

      return new promise_default.a(function (resolve) {
        commit('DEL_OTHERS_CACHED_VIEWS', view);
        resolve([].concat(toConsumableArray_default()(state.cachedViews)));
      });
    },
    delAllViews: function delAllViews(_ref14, view) {
      var dispatch = _ref14.dispatch,
          state = _ref14.state;

      return new promise_default.a(function (resolve) {
        dispatch('delAllVisitedViews', view);
        dispatch('delAllCachedViews', view);
        resolve({
          visitedViews: [].concat(toConsumableArray_default()(state.visitedViews)),
          cachedViews: [].concat(toConsumableArray_default()(state.cachedViews))
        });
      });
    },
    delAllVisitedViews: function delAllVisitedViews(_ref15) {
      var commit = _ref15.commit,
          state = _ref15.state;

      return new promise_default.a(function (resolve) {
        commit('DEL_ALL_VISITED_VIEWS');
        resolve([].concat(toConsumableArray_default()(state.visitedViews)));
      });
    },
    delAllCachedViews: function delAllCachedViews(_ref16) {
      var commit = _ref16.commit,
          state = _ref16.state;

      return new promise_default.a(function (resolve) {
        commit('DEL_ALL_CACHED_VIEWS');
        resolve([].concat(toConsumableArray_default()(state.cachedViews)));
      });
    },
    updateVisitedView: function updateVisitedView(_ref17, view) {
      var commit = _ref17.commit;

      commit('UPDATE_VISITED_VIEW', view);
    }
  }
};

/* harmony default export */ var modules_tagsView = (tagsView);
// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/extends.js
var helpers_extends = __webpack_require__("Dd8w");
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/object/define-properties.js
var define_properties = __webpack_require__("HSQo");
var define_properties_default = /*#__PURE__*/__webpack_require__.n(define_properties);

// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__("mtWM");
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);

// CONCATENATED MODULE: ./src/utils/request.js






var host = window.location.host;
// host = 'http://' + host
host =  true ? 'http://' + host : 'http://10.100.103.204:10002';
var service = axios_default.a.create({
  baseURL: host, // api的base_url
  withCredentials: true,
  timeout: 100000 // request timeout
});
// 请求前进行统一处理
service.interceptors.request.use(function (config) {
  external__vue__default.a.globalEvBus.$emit('showLoading');
  return config;
}, function (error) {
  // 对请求错误做些什么
  return promise_default.a.reject(error);
});

// 请求后进行统一处理
service.interceptors.response.use(function (response) {
  external__vue__default.a.globalEvBus.$emit('hideLoading');
  if (response.data.status == 0 && response.data.msg == '校验失败，请重新登录') {
    src_store.dispatch('FedLogOut').then(function () {
      location.reload(); // 为了重新实例化vue-router对象 避免bug
    });
  } else {
    if (response.data.status == 0 && response.data.msg != '') {
      Object(external__ElementUI_["Message"])({
        message: response.data.msg,
        type: 'error',
        duration: 3 * 1000
      });
    }
    return response;
  }
}, function (error) {
  external__vue__default.a.globalEvBus.$emit('hideLoading');
  Object(external__ElementUI_["Message"])({
    message: '请求超时，请重试！',
    type: 'error',
    duration: 3 * 1000
  });
  return promise_default.a.reject(error);
});
define_properties_default()(external__vue__default.a.prototype, {
  hostURL: {
    get: function get() {
      return host;
    }
  },
  request: {
    get: function get() {
      return service;
    }
  }
});
/* harmony default export */ var request = (service);
// CONCATENATED MODULE: ./src/api/login/login.js



function loginByUsername(username, password) {
  var data = {
    username: username,
    password: password
  };
  return request({
    url: '/login/login',
    method: 'post',
    data: data
  });
}

function logout() {
  return request({
    url: '/login/logout',
    method: 'post'
  });
}

function getUserInfo(data) {
  return request({
    url: '/login/userInfo',
    method: 'get',
    params: extends_default()({}, data)
  });
}
// CONCATENATED MODULE: ./src/utils/auth.js

var TokenKey = 'Admin-Token';
var ID = 'ID';
var ModuleType = 'ModuleType';
var UserId = 'UserId';
var CustomId = 'CustomId';
var FreeId = 'FreeId';
var RentalId = 'RentalId';
var QuestionId = 'QuestionId';
var CodeId = 'CodeId';
var System = 'System';
function getToken() {
  return js_cookie_default.a.get(TokenKey);
}
function setToken(token) {
  return js_cookie_default.a.set(TokenKey, token);
}
function removeToken() {
  return js_cookie_default.a.remove(TokenKey);
}
function setId(id) {
  return js_cookie_default.a.set(ID, id);
}
function getId() {
  return js_cookie_default.a.get(ID);
}
function setType(type) {
  return js_cookie_default.a.set(ModuleType, type);
}
function getType() {
  return js_cookie_default.a.get(ModuleType);
}
function setUserId(id) {
  return js_cookie_default.a.set(UserId, id);
}
function getUserId() {
  return js_cookie_default.a.get(UserId);
}
function removeUserId() {
  return js_cookie_default.a.remove(UserId);
}
function setCustomId(customId) {
  return js_cookie_default.a.set(CustomId, customId);
}
function getCustomId() {
  return js_cookie_default.a.get(CustomId);
}
function setFreeId(freeId) {
  return js_cookie_default.a.set(FreeId, freeId);
}
function getFreeId() {
  return js_cookie_default.a.get(FreeId);
}
function setRentalId(rentalId) {
  return js_cookie_default.a.set(RentalId, rentalId);
}
function getRentalId() {
  return js_cookie_default.a.get(RentalId);
}
function setCodeId(codeId) {
  return js_cookie_default.a.set(CodeId, codeId);
}

function getCodeId() {
  return js_cookie_default.a.get(CodeId);
}

function setSystem(system) {
  return js_cookie_default.a.set(System, system);
}
function getSystem() {
  return js_cookie_default.a.get(System);
}
// CONCATENATED MODULE: ./src/store/modules/user.js




var user = {
  state: {
    user: '',
    status: '',
    code: '',
    token: getToken(),
    name: '',
    avatar: '',
    introduction: '',
    roles: [],
    sys_role: '',
    setting: {
      articlePlatform: []
    },
    system: getSystem() || 1
  },

  mutations: {
    SET_CODE: function SET_CODE(state, code) {
      state.code = code;
    },
    SET_TOKEN: function SET_TOKEN(state, token) {
      state.token = token;
    },
    SET_INTRODUCTION: function SET_INTRODUCTION(state, introduction) {
      state.introduction = introduction;
    },
    SET_SETTING: function SET_SETTING(state, setting) {
      state.setting = setting;
    },
    SET_STATUS: function SET_STATUS(state, status) {
      state.status = status;
    },
    SET_NAME: function SET_NAME(state, name) {
      state.name = name;
    },
    SET_AVATAR: function SET_AVATAR(state, avatar) {
      state.avatar = avatar;
    },
    SET_ROLES: function SET_ROLES(state, roles) {
      state.roles = roles;
    },
    SET_SYS_ROLE: function SET_SYS_ROLE(state, sys_role) {
      state.sys_role = sys_role;
    },
    SET_SYSTEMS: function SET_SYSTEMS(state, system) {
      state.system = system;
    }
  },

  actions: {
    // 用户名登录
    LoginByUsername: function LoginByUsername(_ref, userInfo) {
      var commit = _ref.commit;

      var username = userInfo.username.trim();
      return new promise_default.a(function (resolve, reject) {
        loginByUsername(username, userInfo.password).then(function (response) {
          if (response.data.status) {
            var data = response.data.data;
            commit('SET_TOKEN', data.token);
            setToken(data.token);
            setSystem(1);
            resolve();
          } else {
            reject(error);
          }
        }).catch(function (error) {
          reject(error);
        });
      });
    },


    // 获取用户信息
    GetUserInfo: function GetUserInfo(_ref2) {
      var commit = _ref2.commit,
          state = _ref2.state;

      return new promise_default.a(function (resolve, reject) {
        getUserInfo({ token: state.token, systemId: state.system }).then(function (response) {
          if (!response.data) {
            // 由于mockjs 不支持自定义状态码只能这样hack
            reject('error');
          }
          var data = response.data;
          if (data.roles && data.roles.length > 0) {
            // 验证返回的roles是否是一个非空数组
            commit('SET_ROLES', data.roles);
          } else {
            reject('getInfo: roles must be a non-null array !');
          }
          commit('SET_NAME', data.name);
          commit('SET_AVATAR', data.avatar);
          commit('SET_INTRODUCTION', data.introduction);
          commit('SET_SYS_ROLE', data.sys_role);
          resolve(response);
        }).catch(function (error) {
          reject(error);
        });
      });
    },


    // 第三方验证登录
    // LoginByThirdparty({ commit, state }, code) {
    //   return new Promise((resolve, reject) => {
    //     commit('SET_CODE', code)
    //     loginByThirdparty(state.status, state.email, state.code).then(response => {
    //       commit('SET_TOKEN', response.data.token)
    //       setToken(response.data.token)
    //       resolve()
    //     }).catch(error => {
    //       reject(error)
    //     })
    //   })
    // },

    // 登出
    LogOut: function LogOut(_ref3) {
      var commit = _ref3.commit,
          state = _ref3.state;

      return new promise_default.a(function (resolve, reject) {
        logout(state.token).then(function () {
          commit('SET_TOKEN', '');
          commit('SET_ROLES', []);
          removeToken();
          resolve();
        }).catch(function (error) {
          reject(error);
        });
      });
    },


    // 前端 登出
    FedLogOut: function FedLogOut(_ref4) {
      var commit = _ref4.commit;

      return new promise_default.a(function (resolve) {
        commit('SET_TOKEN', '');
        removeToken();
        resolve();
      });
    },


    // 动态修改权限
    ChangeRoles: function ChangeRoles(_ref5, role) {
      var commit = _ref5.commit;

      return new promise_default.a(function (resolve) {
        commit('SET_TOKEN', role);
        setToken(role);
        getUserInfo(role).then(function (response) {
          var data = response.data;
          commit('SET_ROLES', data.roles);
          commit('SET_NAME', data.name);
          commit('SET_AVATAR', data.avatar);
          commit('SET_INTRODUCTION', data.introduction);
          commit('SET_SYS_ROLE', data.sys_role);
          resolve();
        });
      });
    },

    //切换系统动态改变权限
    ChangeSystem: function ChangeSystem(_ref6, system) {
      var commit = _ref6.commit,
          dispatch = _ref6.dispatch,
          state = _ref6.state;

      return new promise_default.a(function (resolve) {
        commit('SET_SYSTEMS', system);
        setSystem(system);
        getUserInfo({ token: state.token, systemId: state.system }).then(function (response) {
          var data = response.data;
          commit('SET_ROLES', data.roles);
          commit('SET_NAME', data.name);
          commit('SET_AVATAR', data.avatar);
          commit('SET_INTRODUCTION', data.introduction);
          commit('SET_SYS_ROLE', data.sys_role);
          dispatch('GenerateRoutes', data); // 动态修改权限后 重绘侧边菜单
          resolve();
        });
      });
    }
  }
};

/* harmony default export */ var modules_user = (user);
// CONCATENATED MODULE: ./src/store/getters.js
var getters = {
  sidebar: function sidebar(state) {
    return state.app.sidebar;
  },
  language: function language(state) {
    return state.app.language;
  },
  device: function device(state) {
    return state.app.device;
  },
  visitedViews: function visitedViews(state) {
    return state.tagsView.visitedViews;
  },
  cachedViews: function cachedViews(state) {
    return state.tagsView.cachedViews;
  },
  token: function token(state) {
    return state.user.token;
  },
  avatar: function avatar(state) {
    return state.user.avatar;
  },
  name: function name(state) {
    return state.user.name;
  },
  introduction: function introduction(state) {
    return state.user.introduction;
  },
  status: function status(state) {
    return state.user.status;
  },
  roles: function roles(state) {
    return state.user.roles;
  },
  sys_role: function sys_role(state) {
    return state.user.sys_role;
  },
  system: function system(state) {
    return state.user.system;
  },
  setting: function setting(state) {
    return state.user.setting;
  },
  permission_routers: function permission_routers(state) {
    return state.permission.routers;
  },
  addRouters: function addRouters(state) {
    return state.permission.addRouters;
  }
};
/* harmony default export */ var store_getters = (getters);
// CONCATENATED MODULE: ./src/store/index.js








external__vue__default.a.use(vuex_esm["a" /* default */]);

var store = new vuex_esm["a" /* default */].Store({
  modules: {
    app: modules_app,
    permission: modules_permission,
    tagsView: modules_tagsView,
    user: modules_user
  },
  getters: store_getters
});

/* harmony default export */ var src_store = (store);
// EXTERNAL MODULE: ./node_modules/nprogress/nprogress.js
var nprogress = __webpack_require__("Y81h");
var nprogress_default = /*#__PURE__*/__webpack_require__.n(nprogress);

// EXTERNAL MODULE: ./node_modules/nprogress/nprogress.css
var nprogress_nprogress = __webpack_require__("UVIz");
var nprogress_nprogress_default = /*#__PURE__*/__webpack_require__.n(nprogress_nprogress);

// CONCATENATED MODULE: ./src/permission.js




 // progress bar
 // progress bar style
 // getToken from cookie

nprogress_default.a.configure({ showSpinner: false }); // NProgress Configuration

// permissiom judge function
function permission_hasPermission(roles, permissionRoles) {
  if (roles.indexOf('admin') >= 0) return true; // admin permission passed directly
  if (!permissionRoles) return true;
  return roles.some(function (role) {
    return permissionRoles.indexOf(role) >= 0;
  });
}

var whiteList = ['/login', '/authredirect']; // no redirect whitelist

router.beforeEach(function (to, from, next) {
  nprogress_default.a.start(); // start progress bar
  if (getToken()) {
    // determine if there has token
    /* has token*/
    if (to.path === '/login') {
      next({ path: '/' });
      nprogress_default.a.done(); // if current page is dashboard will not trigger	afterEach hook, so manually handle it
    } else {
      if (src_store.getters.roles.length === 0) {

        // 判断当前用户是否已拉取完user_info信息
        src_store.dispatch('GetUserInfo').then(function (res) {
          // 拉取user_info
          var access = res.data.access; // note: roles must be a array! such as: ['editor','develop']
          var roles = res.data.roles; // note: roles must be a array! such as: ['editor','develop']
          next({ path: '/sitemanage' });
          src_store.dispatch('GenerateRoutes', { access: access, roles: roles }).then(function () {
            // 根据roles权限生成可访问的路由表
            router.addRoutes(src_store.getters.addRouters); // 动态添加可访问路由表
            next(extends_default()({}, to, { replace: true })); // hack方法 确保addRoutes已完成 ,set the replace: true so the navigation will not leave a history record
          });
          // const roles = res.data.roles // note: roles must be a array! such as: ['editor','develop']
          // store.dispatch('GenerateRoutes', { roles }).then(() => { // 根据roles权限生成可访问的路由表
          //   router.addRoutes(store.getters.addRouters) // 动态添加可访问路由表
          //   next({ ...to, replace: true }) // hack方法 确保addRoutes已完成 ,set the replace: true so the navigation will not leave a history record
          // })
        }).catch(function (err) {
          src_store.dispatch('FedLogOut').then(function () {
            external__ElementUI_["Message"].error(err || 'Verification failed, please login again');
            next({ path: '/' });
          });
        });
      } else {
        // 没有动态改变权限的需求可直接next() 删除下方权限判断 ↓
        if (permission_hasPermission(src_store.getters.roles, to.meta.roles)) {
          next(); //
        } else {
          next({ path: '/401', replace: true, query: { noGoBack: true } });
        }
        // 可删 ↑
      }
    }
  } else {
    /* has no token*/
    if (whiteList.indexOf(to.path) !== -1) {
      // 在免登录白名单，直接进入
      next();
    } else {
      next('/login'); // 否则全部重定向到登录页
      nprogress_default.a.done(); // if current page is login will not trigger afterEach hook, so manually handle it
    }
  }
});
router.afterEach(function () {
  nprogress_default.a.done(); // finish progress bar
});
// CONCATENATED MODULE: ./src/filters/index.js
//格式化时间
function formatDate(val) {
  if (typeof val === 'string') {
    val = val.replace(/-/g, '/');
  }
  var date = new Date(val);
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  month = month < 10 ? "0" + month : month;
  var day = date.getDate();
  day = day < 10 ? "0" + day : day;
  return year + "年" + month + "月" + day + "日";
}
function formatDateTime(time) {
  var date = new Date(time);
  var month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
  var day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
  var hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
  var minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
  return date.getFullYear() + '-' + month + "-" + day + " " + hours + ":" + minutes;
}
//格式化时间
function formatGetDate(val) {
  if (val != "") {
    if (typeof val === 'string') {
      val = val.replace(/-/g, '/');
    }
    var date = new Date(val);
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    month = month < 10 ? "0" + month : month;
    var day = date.getDate();
    day = day < 10 ? "0" + day : day;
    return year + "-" + month + "-" + day;
  }
}

//格式化时间戳
function formatDateTamp(time, type) {
  var timestamp = time;
  var date = new Date(timestamp * 1000); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
  var Y = date.getFullYear() + '-';
  var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
  var D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + ' ';
  var h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
  var m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
  var s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
  return type == 'date' ? Y + M + D : Y + M + D + h + m + s;
}

function dateDifference(sDate1, sDate2) {
  var dateSpan, tempDate, iDays;
  sDate1 = Date.parse(sDate1);
  sDate2 = Date.parse(sDate2);
  dateSpan = sDate2 - sDate1;
  dateSpan = Math.abs(dateSpan);
  iDays = Math.floor(dateSpan / (24 * 3600 * 1000));
  if (dateSpan < 0) {
    iDays = 0;
  }
  return iDays;
};
// EXTERNAL MODULE: ./node_modules/echarts/index.js
var echarts = __webpack_require__("XLwt");
var echarts_default = /*#__PURE__*/__webpack_require__.n(echarts);

// EXTERNAL MODULE: ./node_modules/weixin-jsapi/index.js
var weixin_jsapi = __webpack_require__("SHZo");

// EXTERNAL MODULE: ./node_modules/vue-print-nb/lib/tag-textarea.umd.min.js
var tag_textarea_umd_min = __webpack_require__("32DV");
var tag_textarea_umd_min_default = /*#__PURE__*/__webpack_require__.n(tag_textarea_umd_min);

// EXTERNAL MODULE: ./node_modules/video.js/dist/video.es.js + 3 modules
var video_es = __webpack_require__("63pp");

// EXTERNAL MODULE: ./node_modules/video.js/dist/video-js.css
var video_js = __webpack_require__("g3Gj");
var video_js_default = /*#__PURE__*/__webpack_require__.n(video_js);

// EXTERNAL MODULE: ./node_modules/vue-layer/lib/vue-layer.umd.min.js
var vue_layer_umd_min = __webpack_require__("SV4X");
var vue_layer_umd_min_default = /*#__PURE__*/__webpack_require__.n(vue_layer_umd_min);

// EXTERNAL MODULE: ./node_modules/vue-layer/lib/vue-layer.css
var vue_layer = __webpack_require__("/CRi");
var vue_layer_default = /*#__PURE__*/__webpack_require__.n(vue_layer);

// EXTERNAL MODULE: ./node_modules/vue-baidu-map/index.js
var vue_baidu_map = __webpack_require__("dAEq");
var vue_baidu_map_default = /*#__PURE__*/__webpack_require__.n(vue_baidu_map);

// CONCATENATED MODULE: ./src/utils/eventBus.js

var events = {};
var globalEvBus = {
  install: function install(Vue) {
    Vue.globalEvBus = createEvBus();
    define_properties_default()(Vue.prototype, {
      globalEvBus: {
        get: function get() {
          return createEvBus();
        }
      }
    });
  }
};
function createEvBus() {
  return {
    $on: function $on(type, callBack) {
      if (events[type]) {
        events[type].push(callBack);
        return;
      }
      events[type] = [callBack];
    },
    $onece: function $onece(type, callBack) {
      callBack.isOnce = true;
      this.on(type, callBack);
    },
    $emit: function $emit(type) {
      if (events[type]) {
        events[type].forEach(function (callBack, idx) {
          if (callBack.isOnce) {
            callBack();
            events[type].splice(idx, 1);
            return;
          }
          callBack();
        });
      }
    },
    $remove: function $remove(type, callBack) {
      if (!callBack) {
        events[type] = [];
        return;
      }
      for (var i = 0; i < events[type].length; i++) {
        if (events[type][i] === callBack) {
          events[type].splice(i, 1);
        }
      }
    }
  };
}
/* harmony default export */ var eventBus = (globalEvBus);
// CONCATENATED MODULE: ./src/main.js



 // A modern alternative to CSS resets


 // global css



 // permission control
 // global filters



external__vue__default.a.prototype.$echarts = echarts_default.a;


external__vue__default.a.prototype.wx = weixin_jsapi["a" /* default */];


external__vue__default.a.use(tag_textarea_umd_min_default.a);

// import Video
 //浏览器视频插件

external__vue__default.a.prototype.$video = video_es["a" /* default */];

// import layer;


external__vue__default.a.prototype.$layer = vue_layer_umd_min_default()(external__vue__default.a);
// 
external__vue__default.a.use(external__ElementUI__default.a, {
  size: 'medium'
});
//

external__vue__default.a.use(vue_baidu_map_default.a, {
  ak: 'GsTerPPU46fUXlt09K8840K0HxTvKIIa'
});
//

external__vue__default.a.use(eventBus);
// Vue.use(VueQuillEditor)
// register global utility filters.
keys_default()(filters_namespaceObject).forEach(function (key) {
  external__vue__default.a.filter(key, filters_namespaceObject[key]);
});
// 在man.js中注册 weixin-jsapi

external__vue__default.a.config.productionTip = false;

new external__vue__default.a({
  el: '#app',
  router: router,
  store: src_store,
  template: '<App/>',
  components: { App: src_App }
});

/***/ }),

/***/ "UVIz":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "g3Gj":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "l6IN":
/***/ (function(module, exports) {

module.exports = ElementUI;

/***/ }),

/***/ "lRwf":
/***/ (function(module, exports) {

module.exports = vue;

/***/ }),

/***/ "tvR6":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "uMhA":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},["NHnr"]);