(() => {
  var __webpack_modules__ = {
    605: () => {},
    137: () => {},
    864: (module, __unused_webpack_exports, __webpack_require__) => {
      var content = __webpack_require__(605);
      if (content.__esModule) content = content.default;
      if ("string" === typeof content) content = [ [ module.id, content, "" ] ];
      if (content.locals) module.exports = content.locals;
      var add = __webpack_require__(23).Z;
      add("cd7e1bbe", content, false, {});
      if (false) ;
    },
    764: (module, __unused_webpack_exports, __webpack_require__) => {
      var content = __webpack_require__(137);
      if (content.__esModule) content = content.default;
      if ("string" === typeof content) content = [ [ module.id, content, "" ] ];
      if (content.locals) module.exports = content.locals;
      var add = __webpack_require__(23).Z;
      add("9dc1d9fa", content, false, {});
      if (false) ;
    },
    758: (__unused_webpack___webpack_module__, __unused_webpack___webpack_exports__, __webpack_require__) => {
      "use strict";
      __webpack_require__(864);
      __webpack_require__(944);
      window["FLS"] = false;
      var runtime_dom_esm_bundler = __webpack_require__(341);
      var runtime_core_esm_bundler = __webpack_require__(229);
      var _hoisted_1 = (0, runtime_core_esm_bundler._)("header", null, null, -1);
      var _hoisted_2 = (0, runtime_core_esm_bundler._)("main", null, null, -1);
      function render(_ctx, _cache, $props, $setup, $data, $options) {
        var _component_aside_bar = (0, runtime_core_esm_bundler.up)("aside-bar");
        return (0, runtime_core_esm_bundler.wg)(), (0, runtime_core_esm_bundler.iD)(runtime_core_esm_bundler.HY, null, [ _hoisted_1, (0, 
        runtime_core_esm_bundler.Wm)(_component_aside_bar), _hoisted_2 ], 64);
      }
      var AsideBarvue_type_template_id_07f4cca5_scoped_true_lang_pug_hoisted_1 = {
        class: "aside"
      };
      var AsideBarvue_type_template_id_07f4cca5_scoped_true_lang_pug_hoisted_2 = (0, runtime_core_esm_bundler.uE)('<div class="aside__logo" data-v-07f4cca5><svg class="i-logo" aria-hidden data-v-07f4cca5><use xlink:href="img/icons/icons.svg#svg-logo" data-v-07f4cca5></use></svg></div><div class="aside__menu" data-v-07f4cca5><div class="aside__burger" data-v-07f4cca5><button class="burger" type="button" data-v-07f4cca5><span data-v-07f4cca5></span></button></div><a class="aside__search" href="#" data-v-07f4cca5><svg class="i-search" style="fill:currentColor;" aria-hidden data-v-07f4cca5><use xlink:href="img/icons/icons.svg#svg-search" data-v-07f4cca5></use></svg></a><a class="aside__edit active" href="#" data-v-07f4cca5><svg class="i-pencil" style="fill:currentColor;" aria-hidden data-v-07f4cca5><use xlink:href="img/icons/icons.svg#svg-pencil" data-v-07f4cca5></use></svg></a><a class="aside__avatar" href="#" data-v-07f4cca5><picture data-v-07f4cca5><source srcset="img/avatar.avif" type="image/avif" data-v-07f4cca5><source srcset="img/avatar.webp" type="image/webp" data-v-07f4cca5><img src="img/avatar.jpg" alt="аватар" width="41" height="41" loading="lazy" data-v-07f4cca5></picture></a></div>', 2);
      var _hoisted_4 = [ AsideBarvue_type_template_id_07f4cca5_scoped_true_lang_pug_hoisted_2 ];
      function AsideBarvue_type_template_id_07f4cca5_scoped_true_lang_pug_render(_ctx, _cache, $props, $setup, $data, $options) {
        return (0, runtime_core_esm_bundler.wg)(), (0, runtime_core_esm_bundler.iD)("aside", AsideBarvue_type_template_id_07f4cca5_scoped_true_lang_pug_hoisted_1, _hoisted_4);
      }
      const AsideBarvue_type_script_lang_js = {};
      __webpack_require__(764);
      var exportHelper = __webpack_require__(21);
      const __exports__ = (0, exportHelper.Z)(AsideBarvue_type_script_lang_js, [ [ "render", AsideBarvue_type_template_id_07f4cca5_scoped_true_lang_pug_render ], [ "__scopeId", "data-v-07f4cca5" ] ]);
      const AsideBar = __exports__;
      const Appvue_type_script_lang_js = {
        components: {
          AsideBar
        },
        data: function data() {
          return {};
        },
        methods: {}
      };
      const App_exports_ = (0, exportHelper.Z)(Appvue_type_script_lang_js, [ [ "render", render ] ]);
      const App = App_exports_;
      const UI = [];
      var app = (0, runtime_dom_esm_bundler.ri)(App);
      if (null === !UI) UI.forEach((function(component) {
        app.component(component.name, component);
      }));
      app.mount("#app");
    }
  };
  var __webpack_module_cache__ = {};
  function __webpack_require__(moduleId) {
    var cachedModule = __webpack_module_cache__[moduleId];
    if (void 0 !== cachedModule) return cachedModule.exports;
    var module = __webpack_module_cache__[moduleId] = {
      id: moduleId,
      exports: {}
    };
    __webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    return module.exports;
  }
  __webpack_require__.m = __webpack_modules__;
  (() => {
    var deferred = [];
    __webpack_require__.O = (result, chunkIds, fn, priority) => {
      if (chunkIds) {
        priority = priority || 0;
        for (var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
        deferred[i] = [ chunkIds, fn, priority ];
        return;
      }
      var notFulfilled = 1 / 0;
      for (i = 0; i < deferred.length; i++) {
        var [chunkIds, fn, priority] = deferred[i];
        var fulfilled = true;
        for (var j = 0; j < chunkIds.length; j++) if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key => __webpack_require__.O[key](chunkIds[j])))) chunkIds.splice(j--, 1); else {
          fulfilled = false;
          if (priority < notFulfilled) notFulfilled = priority;
        }
        if (fulfilled) {
          deferred.splice(i--, 1);
          var r = fn();
          if (void 0 !== r) result = r;
        }
      }
      return result;
    };
  })();
  (() => {
    __webpack_require__.d = (exports, definition) => {
      for (var key in definition) if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) Object.defineProperty(exports, key, {
        enumerable: true,
        get: definition[key]
      });
    };
  })();
  (() => {
    __webpack_require__.g = function() {
      if ("object" === typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" === typeof window) return window;
      }
    }();
  })();
  (() => {
    __webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);
  })();
  (() => {
    var installedChunks = {
      179: 0
    };
    __webpack_require__.O.j = chunkId => 0 === installedChunks[chunkId];
    var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
      var [chunkIds, moreModules, runtime] = data;
      var moduleId, chunkId, i = 0;
      if (chunkIds.some((id => 0 !== installedChunks[id]))) {
        for (moduleId in moreModules) if (__webpack_require__.o(moreModules, moduleId)) __webpack_require__.m[moduleId] = moreModules[moduleId];
        if (runtime) var result = runtime(__webpack_require__);
      }
      if (parentChunkLoadingFunction) parentChunkLoadingFunction(data);
      for (;i < chunkIds.length; i++) {
        chunkId = chunkIds[i];
        if (__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) installedChunks[chunkId][0]();
        installedChunks[chunkId] = 0;
      }
      return __webpack_require__.O(result);
    };
    var chunkLoadingGlobal = self["webpackChunkgulp_vue"] = self["webpackChunkgulp_vue"] || [];
    chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
    chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
  })();
  var __webpack_exports__ = __webpack_require__.O(void 0, [ 216 ], (() => __webpack_require__(758)));
  __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();