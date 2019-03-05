(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["iv-table"] = factory(require("vue"));
	else
		root["iv-table"] = factory(root["Vue"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__8bbf__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__8bbf__;

/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");
var external_commonjs_vue_commonjs2_vue_root_Vue_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_vue_commonjs2_vue_root_Vue_);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/compoents/iv-table.vue?vue&type=script&lang=js&
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var isIvTableColumn = function isIvTableColumn(slot) {
  return slot.componentOptions && slot.componentOptions.Ctor && slot.componentOptions.Ctor.extendOptions && slot.componentOptions.Ctor.extendOptions.$ivTableColumn;
};

var iv_tablevue_type_script_lang_js_makeColumn = function makeColumn(slot) {
  var column = _objectSpread({}, slot.data.attrs);

  var label = slot.componentOptions.propsData.label;
  var prop = slot.componentOptions.propsData.prop;

  if (prop) {
    column.key = prop;
  }

  if (label) {
    column.title = label;
  } // 如果width是string，自动转成number:


  if (typeof column.width === 'string') {
    column.width = parseFloat(column.width);
  }

  if (typeof column.minWidth === 'string') {
    column.minWidth = parseFloat(column.minWidth);
  }

  if (typeof column.maxWidth === 'string') {
    column.maxWidth = parseFloat(column.maxWidth);
  }

  if (slot.data.scopedSlots) {
    if (typeof slot.data.scopedSlots.default === 'function') {
      column.render = function (h, scope) {
        return slot.data.scopedSlots.default(scope);
      };
    }

    if (typeof slot.data.scopedSlots.head === 'function') {
      column.renderHeader = function (h, scope) {
        return slot.data.scopedSlots.head(scope);
      };
    }

    if (external_commonjs_vue_commonjs2_vue_root_Vue_default.a.config.devtools) {
      column.name = 'slot-template'; // 在vue devtools显示正常，不会显示unknown components
    }
  }

  if (slot.componentOptions.children) {
    slot.componentOptions.children.forEach(function (child) {
      if (isIvTableColumn(child)) {
        if (!column.children) {
          column.children = [];
        }

        column.children.push(makeColumn(child));
      }
    });
  }

  return column;
};

/* harmony default export */ var iv_tablevue_type_script_lang_js_ = ({
  name: 'IvTable',
  props: {
    data: Array,
    columnMethod: Function
  },
  computed: {
    columns: function columns() {
      var columns = this.$slots.default.filter(isIvTableColumn).map(iv_tablevue_type_script_lang_js_makeColumn);

      if (this.columnMethod) {
        return this.columnMethod(columns);
      }

      return columns;
    }
  },
  render: function render(h) {
    return h('i-table', {
      props: _objectSpread({}, this.$attrs, {
        data: this.data,
        columns: this.columns
      }),
      ref: 'table',
      on: _objectSpread({}, this.$listeners)
    });
  },
  methods: {
    exportCsv: function exportCsv(params) {
      return this.$refs.table.exportCsv(params);
    },
    clearCurrentRow: function clearCurrentRow() {
      return this.$refs.table.clearCurrentRow();
    }
  }
});
// CONCATENATED MODULE: ./src/compoents/iv-table.vue?vue&type=script&lang=js&
 /* harmony default export */ var compoents_iv_tablevue_type_script_lang_js_ = (iv_tablevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/compoents/iv-table.vue
var render, staticRenderFns




/* normalize component */

var component = normalizeComponent(
  compoents_iv_tablevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var iv_table = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/compoents/iv-table-column.vue?vue&type=script&lang=js&
/* harmony default export */ var iv_table_columnvue_type_script_lang_js_ = ({
  name: 'IvTableColumn',
  props: {
    label: String,
    prop: String
  },
  $ivTableColumn: true
});
// CONCATENATED MODULE: ./src/compoents/iv-table-column.vue?vue&type=script&lang=js&
 /* harmony default export */ var compoents_iv_table_columnvue_type_script_lang_js_ = (iv_table_columnvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/compoents/iv-table-column.vue
var iv_table_column_render, iv_table_column_staticRenderFns




/* normalize component */

var iv_table_column_component = normalizeComponent(
  compoents_iv_table_columnvue_type_script_lang_js_,
  iv_table_column_render,
  iv_table_column_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var iv_table_column = (iv_table_column_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/compoents/iv-table-input.vue?vue&type=script&lang=js&
function iv_table_inputvue_type_script_lang_js_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { iv_table_inputvue_type_script_lang_js_defineProperty(target, key, source[key]); }); } return target; }

function iv_table_inputvue_type_script_lang_js_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
/* harmony default export */ var iv_table_inputvue_type_script_lang_js_ = ({
  name: 'IvTableInput',
  props: {
    data: {
      type: Array,
      required: true
    },
    scope: {
      type: Object,
      required: true
    },
    attr: {
      type: String,
      required: true
    }
  },
  render: function render(h) {
    var _this = this;

    return h('i-input', {
      props: iv_table_inputvue_type_script_lang_js_objectSpread({}, this.$attrs, {
        value: this.scope.row[this.attr]
      }),
      on: iv_table_inputvue_type_script_lang_js_objectSpread({}, this.$listeners, {
        'on-change': function onChange(e) {
          _this.scope.row[_this.attr] = e.target.value;
          _this.data[_this.scope.index] = _this.scope.row;
        }
      })
    });
  }
});
// CONCATENATED MODULE: ./src/compoents/iv-table-input.vue?vue&type=script&lang=js&
 /* harmony default export */ var compoents_iv_table_inputvue_type_script_lang_js_ = (iv_table_inputvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/compoents/iv-table-input.vue
var iv_table_input_render, iv_table_input_staticRenderFns




/* normalize component */

var iv_table_input_component = normalizeComponent(
  compoents_iv_table_inputvue_type_script_lang_js_,
  iv_table_input_render,
  iv_table_input_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var iv_table_input = (iv_table_input_component.exports);
// CONCATENATED MODULE: ./src/plugin.js




/* harmony default export */ var src_plugin = ({
  install: function install(options) {
    external_commonjs_vue_commonjs2_vue_root_Vue_default.a.component('IvTable', iv_table);
    external_commonjs_vue_commonjs2_vue_root_Vue_default.a.component('IvTableColumn', iv_table_column);
    external_commonjs_vue_commonjs2_vue_root_Vue_default.a.component('IvTableInput', iv_table_input);
  }
});
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (src_plugin);



/***/ })

/******/ });
});
//# sourceMappingURL=iv-table.umd.js.map