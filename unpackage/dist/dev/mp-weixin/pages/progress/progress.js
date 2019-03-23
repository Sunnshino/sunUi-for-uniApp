(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/progress/progress"],{

/***/ "../../../../Github/colorUI-for-uniApp/main.js?{\"page\":\"pages%2Fprogress%2Fprogress\"}":
/*!***********************************************************************************!*\
  !*** D:/Github/colorUI-for-uniApp/main.js?{"page":"pages%2Fprogress%2Fprogress"} ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
__webpack_require__(/*! uni-pages */ "../../../../Github/colorUI-for-uniApp/pages.json");
var _mpvuePageFactory = _interopRequireDefault(__webpack_require__(/*! mpvue-page-factory */ "./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mpvue-page-factory/index.js"));
var _progress = _interopRequireDefault(__webpack_require__(/*! ./pages/progress/progress.vue */ "../../../../Github/colorUI-for-uniApp/pages/progress/progress.vue"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
Page((0, _mpvuePageFactory.default)(_progress.default));

/***/ }),

/***/ "../../../../Github/colorUI-for-uniApp/pages/progress/progress.vue":
/*!****************************************************************!*\
  !*** D:/Github/colorUI-for-uniApp/pages/progress/progress.vue ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _progress_vue_vue_type_template_id_018f570e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./progress.vue?vue&type=template&id=018f570e& */ "../../../../Github/colorUI-for-uniApp/pages/progress/progress.vue?vue&type=template&id=018f570e&");
/* harmony import */ var _progress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./progress.vue?vue&type=script&lang=js& */ "../../../../Github/colorUI-for-uniApp/pages/progress/progress.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _progress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _progress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../HBuilderX.1.6.2.20190220.full/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _progress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _progress_vue_vue_type_template_id_018f570e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _progress_vue_vue_type_template_id_018f570e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "Github/colorUI-for-uniApp/pages/progress/progress.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "../../../../Github/colorUI-for-uniApp/pages/progress/progress.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** D:/Github/colorUI-for-uniApp/pages/progress/progress.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_progress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX.1.6.2.20190220.full/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../HBuilderX.1.6.2.20190220.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../HBuilderX.1.6.2.20190220.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!../../../../HBuilderX.1.6.2.20190220.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../HBuilderX.1.6.2.20190220.full/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!./progress.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!../../../../Github/colorUI-for-uniApp/pages/progress/progress.vue?vue&type=script&lang=js&");
/* harmony import */ var _HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_progress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_progress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_progress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_progress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_progress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "../../../../Github/colorUI-for-uniApp/pages/progress/progress.vue?vue&type=template&id=018f570e&":
/*!***********************************************************************************************!*\
  !*** D:/Github/colorUI-for-uniApp/pages/progress/progress.vue?vue&type=template&id=018f570e& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_progress_vue_vue_type_template_id_018f570e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX.1.6.2.20190220.full/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../HBuilderX.1.6.2.20190220.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../HBuilderX.1.6.2.20190220.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../HBuilderX.1.6.2.20190220.full/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!./progress.vue?vue&type=template&id=018f570e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!../../../../Github/colorUI-for-uniApp/pages/progress/progress.vue?vue&type=template&id=018f570e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_progress_vue_vue_type_template_id_018f570e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_progress_vue_vue_type_template_id_018f570e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!../../../../Github/colorUI-for-uniApp/pages/progress/progress.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!D:/Github/colorUI-for-uniApp/pages/progress/progress.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default =


























































































































{
  data: function data() {
    return {
      color: 'red',
      modalName: '',
      loading: false,
      active: '',
      ColorList: [{
        title: '嫣红',
        name: 'red',
        color: '#e54d42' },

      {
        title: '桔橙',
        name: 'orange',
        color: '#f37b1d' },

      {
        title: '明黄',
        name: 'yellow',
        color: '#fbbd08' },

      {
        title: '橄榄',
        name: 'olive',
        color: '#8dc63f' },

      {
        title: '森绿',
        name: 'green',
        color: '#39b54a' },

      {
        title: '天青',
        name: 'cyan',
        color: '#1cbbb4' },

      {
        title: '海蓝',
        name: 'blue',
        color: '#0081ff' },

      {
        title: '姹紫',
        name: 'purple',
        color: '#6739b6' },

      {
        title: '木槿',
        name: 'mauve',
        color: '#9c26b0' },

      {
        title: '桃粉',
        name: 'pink',
        color: '#e03997' },

      {
        title: '棕褐',
        name: 'brown',
        color: '#a5673f' },

      {
        title: '玄灰',
        name: 'grey',
        color: '#8799a3' },

      {
        title: '草灰',
        name: 'gray',
        color: '#aaaaaa' },

      {
        title: '墨黑',
        name: 'black',
        color: '#333333' },

      {
        title: '雅白',
        name: 'white',
        color: '#ffffff' }] };



  },
  onLoad: function onLoad() {var _this = this;
    setTimeout(function () {
      _this.loading = true;
    }, 500);
  },
  methods: {
    showModal: function showModal(e) {
      this.modalName = e.currentTarget.dataset.target;
    },
    hideModal: function hideModal(e) {
      this.modalName = null;
    },
    SetColor: function SetColor(e) {
      this.color = e.currentTarget.dataset.color;
      this.modalName = null;
    },
    SetActive: function SetActive(e) {
      this.active = e.detail.value;
    } } };exports.default = _default;

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!../../../../Github/colorUI-for-uniApp/pages/progress/progress.vue?vue&type=template&id=018f570e&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!D:/Github/colorUI-for-uniApp/pages/progress/progress.vue?vue&type=template&id=018f570e& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("view", [
    _vm._m(0),
    _c("view", { staticClass: "padding bg-white" }, [
      _c("view", { staticClass: "cu-progress" }, [
        _c(
          "view",
          { staticClass: "bg-red", style: _vm.loading ? "width:61.8%" : "" },
          [_vm._v("61.8%")]
        )
      ]),
      _c("view", { staticClass: "cu-progress radius margin-top" }, [
        _c(
          "view",
          { staticClass: "bg-red", style: _vm.loading ? "width:61.8%" : "" },
          [_vm._v("61.8%")]
        )
      ]),
      _c("view", { staticClass: "cu-progress round margin-top" }, [
        _c(
          "view",
          { staticClass: "bg-red", style: _vm.loading ? "width:61.8%" : "" },
          [_vm._v("61.8%")]
        )
      ])
    ]),
    _vm._m(1),
    _c("view", { staticClass: "padding bg-white" }, [
      _c("view", { staticClass: "cu-progress round" }, [
        _c("view", {
          staticClass: "bg-red",
          style: _vm.loading ? "width:61.8%" : ""
        })
      ]),
      _c("view", { staticClass: "cu-progress round margin-top sm" }, [
        _c("view", {
          staticClass: "bg-red",
          style: _vm.loading ? "width:61.8%" : ""
        })
      ]),
      _c("view", { staticClass: "cu-progress round margin-top xs" }, [
        _c("view", {
          staticClass: "bg-red",
          style: _vm.loading ? "width:61.8%" : ""
        })
      ])
    ]),
    _c(
      "view",
      {
        staticClass: "cu-bar bg-white solid-bottom margin-top",
        attrs: { "data-target": "ColorModal", eventid: "3217668c-0" },
        on: { click: _vm.showModal }
      },
      [
        _vm._m(2),
        _c("view", { staticClass: "action" }, [
          _c("view", {
            staticClass: "padding-sm solid radius shadow-blur",
            class: "bg-" + _vm.color
          })
        ])
      ]
    ),
    _c(
      "view",
      {
        staticClass: "padding",
        class: _vm.color == "white" ? "bg-grey" : "bg-white"
      },
      [
        _c("view", { staticClass: "cu-progress round" }, [
          _c("view", {
            class: "bg-" + _vm.color,
            style: _vm.loading ? "width:61.8%" : ""
          })
        ])
      ]
    ),
    _c("view", { staticClass: "cu-bar bg-white solid-bottom margin-top" }, [
      _vm._m(3),
      _c("switch", {
        staticClass: "sm margin-right-sm",
        attrs: { eventid: "3217668c-1" },
        on: { change: _vm.SetActive }
      })
    ]),
    _c("view", { staticClass: "padding bg-white" }, [
      _c(
        "view",
        {
          staticClass: "cu-progress round sm striped",
          class: _vm.active ? "active" : ""
        },
        [
          _c("view", {
            staticClass: "bg-green",
            style: _vm.loading ? "width:60%" : ""
          })
        ]
      ),
      _c(
        "view",
        {
          staticClass: "cu-progress round sm margin-top-sm striped",
          class: _vm.active ? "active" : ""
        },
        [
          _c("view", {
            staticClass: "bg-black",
            style: _vm.loading ? "width:40%" : ""
          })
        ]
      )
    ]),
    _vm._m(4),
    _c("view", { staticClass: "padding bg-white" }, [
      _c("view", { staticClass: "cu-progress radius striped active" }, [
        _c(
          "view",
          { staticClass: "bg-red", style: _vm.loading ? "width:30%" : "" },
          [_vm._v("30%")]
        ),
        _c(
          "view",
          { staticClass: "bg-olive", style: _vm.loading ? "width:45%" : "" },
          [_vm._v("45%")]
        ),
        _c(
          "view",
          { staticClass: "bg-cyan", style: _vm.loading ? "width:25%" : "" },
          [_vm._v("25%")]
        )
      ])
    ]),
    _vm._m(5),
    _c("view", { staticClass: "padding bg-white " }, [
      _c("view", { staticClass: "flex" }, [
        _c("view", { staticClass: "cu-progress round" }, [
          _c("view", {
            staticClass: "bg-green",
            style: _vm.loading ? "width:100%" : ""
          })
        ]),
        _c("text", {
          staticClass: "icon-roundcheckfill text-green margin-left-sm"
        })
      ]),
      _c("view", { staticClass: "flex margin-top" }, [
        _c("view", { staticClass: "cu-progress round" }, [
          _c("view", {
            staticClass: "bg-green",
            style: _vm.loading ? "width:80%" : ""
          })
        ]),
        _c("text", { staticClass: "margin-left" }, [_vm._v("80%")])
      ])
    ]),
    _c(
      "view",
      {
        staticClass: "cu-modal",
        class: _vm.modalName == "ColorModal" ? "show" : ""
      },
      [
        _c("view", { staticClass: "cu-dialog" }, [
          _c("view", { staticClass: "cu-bar justify-end" }, [
            _c("view", { staticClass: "content" }, [_vm._v("选择颜色")]),
            _c(
              "view",
              {
                staticClass: "action",
                attrs: { eventid: "3217668c-2" },
                on: { click: _vm.hideModal }
              },
              [_c("text", { staticClass: "icon-close text-red" })]
            )
          ]),
          _c(
            "view",
            { staticClass: "grid col-5 padding" },
            _vm._l(_vm.ColorList, function(item, index) {
              return item.name != "gray"
                ? _c(
                    "view",
                    {
                      key: index,
                      staticClass: "padding-xs",
                      attrs: {
                        "data-color": item.name,
                        eventid: "3217668c-3-" + index
                      },
                      on: { tap: _vm.SetColor }
                    },
                    [
                      _c(
                        "view",
                        {
                          staticClass: "padding-tb radius",
                          class: "bg-" + item.name
                        },
                        [_vm._v(_vm._s(item.title))]
                      )
                    ]
                  )
                : _vm._e()
            })
          )
        ])
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("view", { staticClass: "cu-bar bg-white solid-bottom" }, [
      _c("view", { staticClass: "action" }, [
        _c("text", { staticClass: "icon-title text-blue" }),
        _vm._v("进度条形状")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "view",
      { staticClass: "cu-bar bg-white solid-bottom margin-top" },
      [
        _c("view", { staticClass: "action" }, [
          _c("text", { staticClass: "icon-title text-blue" }),
          _vm._v("进度条尺寸")
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("view", { staticClass: "action" }, [
      _c("text", { staticClass: "icon-title text-blue" }),
      _vm._v("进度条颜色")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("view", { staticClass: "action" }, [
      _c("text", { staticClass: "icon-title text-blue" }),
      _vm._v("进度条条纹")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "view",
      { staticClass: "cu-bar bg-white solid-bottom margin-top" },
      [
        _c("view", { staticClass: "action" }, [
          _c("text", { staticClass: "icon-title text-blue" }),
          _vm._v("进度条比例")
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "view",
      { staticClass: "cu-bar bg-white solid-bottom margin-top" },
      [
        _c("view", { staticClass: "action" }, [
          _c("text", { staticClass: "icon-title text-blue" }),
          _vm._v("进度条布局")
        ])
      ]
    )
  }
]
render._withStripped = true



/***/ })

},[["../../../../Github/colorUI-for-uniApp/main.js?{\"page\":\"pages%2Fprogress%2Fprogress\"}","common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/progress/progress.js.map