(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/list/list"],{

/***/ "../../../../Github/colorUI-for-uniApp/main.js?{\"page\":\"pages%2Flist%2Flist\"}":
/*!***************************************************************************!*\
  !*** D:/Github/colorUI-for-uniApp/main.js?{"page":"pages%2Flist%2Flist"} ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
__webpack_require__(/*! uni-pages */ "../../../../Github/colorUI-for-uniApp/pages.json");
var _mpvuePageFactory = _interopRequireDefault(__webpack_require__(/*! mpvue-page-factory */ "./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mpvue-page-factory/index.js"));
var _list = _interopRequireDefault(__webpack_require__(/*! ./pages/list/list.vue */ "../../../../Github/colorUI-for-uniApp/pages/list/list.vue"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
Page((0, _mpvuePageFactory.default)(_list.default));

/***/ }),

/***/ "../../../../Github/colorUI-for-uniApp/pages/list/list.vue":
/*!********************************************************!*\
  !*** D:/Github/colorUI-for-uniApp/pages/list/list.vue ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _list_vue_vue_type_template_id_f221c4a4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list.vue?vue&type=template&id=f221c4a4& */ "../../../../Github/colorUI-for-uniApp/pages/list/list.vue?vue&type=template&id=f221c4a4&");
/* harmony import */ var _list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list.vue?vue&type=script&lang=js& */ "../../../../Github/colorUI-for-uniApp/pages/list/list.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _list_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list.vue?vue&type=style&index=0&lang=css& */ "../../../../Github/colorUI-for-uniApp/pages/list/list.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../HBuilderX.1.6.2.20190220.full/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _list_vue_vue_type_template_id_f221c4a4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _list_vue_vue_type_template_id_f221c4a4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "Github/colorUI-for-uniApp/pages/list/list.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "../../../../Github/colorUI-for-uniApp/pages/list/list.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** D:/Github/colorUI-for-uniApp/pages/list/list.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX.1.6.2.20190220.full/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../HBuilderX.1.6.2.20190220.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../HBuilderX.1.6.2.20190220.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!../../../../HBuilderX.1.6.2.20190220.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../HBuilderX.1.6.2.20190220.full/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!./list.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!../../../../Github/colorUI-for-uniApp/pages/list/list.vue?vue&type=script&lang=js&");
/* harmony import */ var _HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "../../../../Github/colorUI-for-uniApp/pages/list/list.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************!*\
  !*** D:/Github/colorUI-for-uniApp/pages/list/list.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX.1.6.2.20190220.full/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../HBuilderX.1.6.2.20190220.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!../../../../HBuilderX.1.6.2.20190220.full/HBuilderX/plugins/uniapp-cli/node_modules/css-loader??ref--6-oneOf-1-2!../../../../HBuilderX.1.6.2.20190220.full/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../HBuilderX.1.6.2.20190220.full/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../HBuilderX.1.6.2.20190220.full/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!./list.vue?vue&type=style&index=0&lang=css& */ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!../../../../Github/colorUI-for-uniApp/pages/list/list.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "../../../../Github/colorUI-for-uniApp/pages/list/list.vue?vue&type=template&id=f221c4a4&":
/*!***************************************************************************************!*\
  !*** D:/Github/colorUI-for-uniApp/pages/list/list.vue?vue&type=template&id=f221c4a4& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_template_id_f221c4a4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX.1.6.2.20190220.full/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../HBuilderX.1.6.2.20190220.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../HBuilderX.1.6.2.20190220.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../HBuilderX.1.6.2.20190220.full/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!./list.vue?vue&type=template&id=f221c4a4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!../../../../Github/colorUI-for-uniApp/pages/list/list.vue?vue&type=template&id=f221c4a4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_template_id_f221c4a4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_template_id_f221c4a4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!../../../../Github/colorUI-for-uniApp/pages/list/list.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!D:/Github/colorUI-for-uniApp/pages/list/list.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default =


























































































































































































































































































{
  data: function data() {
    return {
      iconList: [{
        icon: 'cardboardfill',
        color: 'red',
        badge: 120,
        name: 'VR' },
      {
        icon: 'recordfill',
        color: 'orange',
        badge: 1,
        name: '录像' },
      {
        icon: 'picfill',
        color: 'yellow',
        badge: 0,
        name: '图像' },
      {
        icon: 'noticefill',
        color: 'olive',
        badge: 22,
        name: '通知' },
      {
        icon: 'upstagefill',
        color: 'cyan',
        badge: 0,
        name: '排行榜' },
      {
        icon: 'clothesfill',
        color: 'blue',
        badge: 0,
        name: '皮肤' },
      {
        icon: 'discoverfill',
        color: 'purple',
        badge: 0,
        name: '发现' },
      {
        icon: 'questionfill',
        color: 'mauve',
        badge: 0,
        name: '帮助' },
      {
        icon: 'commandfill',
        color: 'purple',
        badge: 0,
        name: '问答' },
      {
        icon: 'brandfill',
        color: 'mauve',
        badge: 0,
        name: '版权' }],

      gridCol: 3,
      skin: false,
      modalName: '',
      gridBorder: '',
      menuBorder: '',
      menuArrow: '',
      menuCard: '',
      ListTouchStart: '',
      ListTouchDirection: '' };


  },
  methods: {
    showModal: function showModal(e) {
      this.modalName = e.currentTarget.dataset.target;
    },
    hideModal: function hideModal(e) {
      this.modalName = null;
    },
    gridchange: function gridchange(e) {
      this.gridCol = e.detail.value;
    },
    gridswitch: function gridswitch(e) {
      this.gridBorder = e.detail.value;
    },
    menuBorders: function menuBorders(e) {
      this.menuBorder = e.detail.value;
    },
    menuArrows: function menuArrows(e) {
      this.menuArrow = e.detail.value;
    },
    menuCards: function menuCards(e) {
      this.menuCard = e.detail.value;
    },
    switchSex: function switchSex(e) {
      this.skin = e.detail.value;
    },

    // ListTouch触摸开始
    ListTouchStarts: function ListTouchStarts(e) {
      console.log('aaaa');
      this.ListTouchStart = e.touches[0].pageX;
    },

    // ListTouch计算方向
    ListTouchMove: function ListTouchMove(e) {
      this.ListTouchDirection = e.touches[0].pageX - this.ListTouchStart > 0 ? 'right' : 'left';
    },

    // ListTouch计算滚动
    ListTouchEnd: function ListTouchEnd(e) {
      if (this.ListTouchDirection == 'left') {
        this.modalName = e.currentTarget.dataset.target;
      } else {
        this.modalName = null;
      }
      this.ListTouchDirection = null;
    } } };exports.default = _default;

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!../../../../Github/colorUI-for-uniApp/pages/list/list.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!D:/Github/colorUI-for-uniApp/pages/list/list.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!../../../../Github/colorUI-for-uniApp/pages/list/list.vue?vue&type=template&id=f221c4a4&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!D:/Github/colorUI-for-uniApp/pages/list/list.vue?vue&type=template&id=f221c4a4& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    _c("view", { staticClass: "cu-bar bg-white solid-bottom margin-top" }, [
      _vm._m(0),
      _c(
        "view",
        { staticClass: "action" },
        [
          _c(
            "button",
            {
              staticClass: "cu-btn bg-green shadow",
              attrs: { "data-target": "gridModal", eventid: "1938314c-0" },
              on: { tap: _vm.showModal }
            },
            [_vm._v("设置")]
          )
        ],
        1
      )
    ]),
    _c(
      "view",
      {
        staticClass: "cu-modal",
        class: _vm.modalName == "gridModal" ? "show" : "",
        attrs: { eventid: "1938314c-4" },
        on: { tap: _vm.hideModal }
      },
      [
        _c(
          "view",
          {
            staticClass: "cu-dialog",
            attrs: { eventid: "1938314c-3" },
            on: {
              click: function($event) {
                $event.stopPropagation()
              }
            }
          },
          [
            _c(
              "radio-group",
              {
                staticClass: "block",
                attrs: { eventid: "1938314c-1", mpcomid: "1938314c-0" },
                on: { change: _vm.gridchange }
              },
              [
                _c(
                  "view",
                  { staticClass: "cu-list menu text-left" },
                  _vm._l(3, function(item, index) {
                    return _c(
                      "view",
                      { key: index, staticClass: "cu-item" },
                      [
                        _c(
                          "label",
                          {
                            staticClass:
                              "flex justify-between align-center flex-sub"
                          },
                          [
                            _c("view", { staticClass: "flex-sub" }, [
                              _vm._v(_vm._s(index + 3) + " 列")
                            ]),
                            _c("radio", {
                              staticClass: "round",
                              attrs: {
                                value: index + 3,
                                checked: _vm.gridCol == index + 3
                              }
                            })
                          ],
                          1
                        )
                      ],
                      1
                    )
                  })
                )
              ]
            ),
            _c("view", { staticClass: "cu-list menu text-left solid-top" }, [
              _c("view", { staticClass: "cu-item" }, [
                _vm._m(1),
                _c("view", { staticClass: "action" }, [
                  _c("switch", {
                    attrs: { eventid: "1938314c-2" },
                    on: { change: _vm.gridswitch }
                  })
                ])
              ])
            ])
          ],
          1
        )
      ]
    ),
    _c(
      "view",
      {
        staticClass: "cu-list grid",
        class: [_vm.gridBorder ? "" : "no-border", "col-" + _vm.gridCol]
      },
      _vm._l(_vm.iconList, function(item, index) {
        return index < _vm.gridCol * 2
          ? _c("view", { key: index, staticClass: "cu-item" }, [
              _c(
                "view",
                { class: ["icon-" + item.icon, "text-" + item.color] },
                [
                  item.badge != 0
                    ? _c(
                        "view",
                        { staticClass: "cu-tag badge" },
                        [
                          item.badge != 1
                            ? _c("block", [
                                _vm._v(
                                  _vm._s(item.badge > 99 ? "99+" : item.badge)
                                )
                              ])
                            : _vm._e()
                        ],
                        1
                      )
                    : _vm._e()
                ]
              ),
              _c("text", [_vm._v(_vm._s(item.name))])
            ])
          : _vm._e()
      })
    ),
    _c("view", { staticClass: "cu-bar bg-white solid-bottom margin-top" }, [
      _vm._m(2),
      _c(
        "view",
        { staticClass: "action" },
        [
          _c(
            "button",
            {
              staticClass: "cu-btn bg-green shadow",
              attrs: { "data-target": "menuModal", eventid: "1938314c-5" },
              on: { tap: _vm.showModal }
            },
            [_vm._v("设置")]
          )
        ],
        1
      )
    ]),
    _c(
      "view",
      {
        staticClass: "cu-modal",
        class: _vm.modalName == "menuModal" ? "show" : "",
        attrs: { eventid: "1938314c-9" },
        on: { tap: _vm.hideModal }
      },
      [
        _c("view", { staticClass: "cu-dialog", attrs: { catchtap: "" } }, [
          _c("view", { staticClass: "cu-list menu text-left solid-top" }, [
            _c("view", { staticClass: "cu-item" }, [
              _vm._m(3),
              _c("view", { staticClass: "action" }, [
                _c("switch", {
                  attrs: { eventid: "1938314c-6" },
                  on: { change: _vm.menuBorders }
                })
              ])
            ]),
            _c("view", { staticClass: "cu-item" }, [
              _vm._m(4),
              _c("view", { staticClass: "action" }, [
                _c("switch", {
                  attrs: { eventid: "1938314c-7" },
                  on: { change: _vm.menuArrows }
                })
              ])
            ]),
            _c("view", { staticClass: "cu-item" }, [
              _vm._m(5),
              _c("view", { staticClass: "action" }, [
                _c("switch", {
                  attrs: { eventid: "1938314c-8" },
                  on: { change: _vm.menuCards }
                })
              ])
            ])
          ])
        ])
      ]
    ),
    _c(
      "view",
      {
        staticClass: "cu-list menu",
        class: [
          _vm.menuBorder ? "sm-border" : "",
          _vm.menuCard ? "card-menu margin-top" : ""
        ]
      },
      [
        _c(
          "view",
          { staticClass: "cu-item", class: _vm.menuArrow ? "arrow" : "" },
          [_vm._m(6)]
        ),
        _c(
          "view",
          { staticClass: "cu-item", class: _vm.menuArrow ? "arrow" : "" },
          [_vm._m(7)]
        ),
        _c(
          "view",
          { staticClass: "cu-item", class: _vm.menuArrow ? "arrow" : "" },
          [
            _c(
              "button",
              {
                staticClass: "cu-btn content",
                attrs: { "open-type": "contact" }
              },
              [
                _c("text", { staticClass: "icon-btn text-olive" }),
                _c("text", { staticClass: "text-grey" }, [
                  _vm._v("Open-type 按钮")
                ])
              ]
            )
          ],
          1
        ),
        _c(
          "view",
          { staticClass: "cu-item", class: _vm.menuArrow ? "arrow" : "" },
          [
            _c(
              "navigator",
              {
                staticClass: "content",
                attrs: {
                  "hover-class": "none",
                  url: "../list/list",
                  "open-type": "redirect"
                }
              },
              [
                _c("text", { staticClass: "icon-discoverfill text-orange" }),
                _c("text", { staticClass: "text-grey" }, [
                  _vm._v("Navigator 跳转")
                ])
              ]
            )
          ],
          1
        ),
        _c(
          "view",
          { staticClass: "cu-item", class: _vm.menuArrow ? "arrow" : "" },
          [_vm._m(8), _vm._m(9)]
        ),
        _c(
          "view",
          { staticClass: "cu-item", class: _vm.menuArrow ? "arrow" : "" },
          [
            _vm._m(10),
            _c(
              "view",
              { staticClass: "action" },
              [
                _c("button", { staticClass: "cu-btn round bg-green shadow" }, [
                  _c("text", { staticClass: "icon-upload" }),
                  _vm._v("上传")
                ])
              ],
              1
            )
          ]
        ),
        _c(
          "view",
          { staticClass: "cu-item", class: _vm.menuArrow ? "arrow" : "" },
          [_vm._m(11), _vm._m(12)]
        ),
        _c(
          "view",
          { staticClass: "cu-item", class: _vm.menuArrow ? "arrow" : "" },
          [_vm._m(13), _vm._m(14)]
        ),
        _c("view", { staticClass: "cu-item" }, [
          _vm._m(15),
          _c("view", { staticClass: "action" }, [
            _c("switch", {
              staticClass: "switch-sex sm",
              attrs: { eventid: "1938314c-10" },
              on: { change: _vm.switchSex }
            })
          ])
        ])
      ]
    ),
    _vm._m(16),
    _vm._m(17),
    _vm._m(18),
    _c(
      "view",
      { staticClass: "cu-list menu menu-avatar" },
      _vm._l(4, function(item, index) {
        return _c(
          "view",
          {
            key: index,
            staticClass: "cu-item",
            class: _vm.modalName == "move-box-" + index ? "move-cur" : "",
            attrs: {
              "data-target": "move-box-" + index,
              eventid: "1938314c-11-" + index
            },
            on: {
              touchstart: _vm.ListTouchStart,
              touchmove: _vm.ListTouchMove,
              touchend: _vm.ListTouchEnd
            }
          },
          [
            _c("view", {
              staticClass: "cu-avatar round lg",
              style:
                "background-image:url(https://image.weilanwl.com/img/square-" +
                (index + 1) +
                ".jpg);"
            }),
            _vm._m(19, true),
            _vm._m(20, true),
            _vm._m(21, true)
          ]
        )
      })
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("view", { staticClass: "action" }, [
      _c("text", { staticClass: "icon-title text-orange " }),
      _vm._v("宫格列表")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("view", { staticClass: "content" }, [
      _c("text", { staticClass: "text-grey" }, [_vm._v("边框")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("view", { staticClass: "action" }, [
      _c("text", { staticClass: "icon-title text-orange " }),
      _vm._v("菜单列表")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("view", { staticClass: "content" }, [
      _c("text", { staticClass: "text-grey" }, [_vm._v("短边框")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("view", { staticClass: "content" }, [
      _c("text", { staticClass: "text-grey" }, [_vm._v("箭头")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("view", { staticClass: "content" }, [
      _c("text", { staticClass: "text-grey" }, [_vm._v("卡片")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("view", { staticClass: "content" }, [
      _c("text", { staticClass: "icon-circlefill text-grey" }),
      _c("text", { staticClass: "text-grey" }, [_vm._v("图标 + 标题")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("view", { staticClass: "content" }, [
      _c("image", {
        staticClass: "png",
        attrs: { src: "../../static/images/logo.png", mode: "aspectFit" }
      }),
      _c("text", { staticClass: "text-grey" }, [_vm._v("图片 + 标题")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("view", { staticClass: "content" }, [
      _c("text", { staticClass: "icon-emojiflashfill text-pink" }),
      _c("text", { staticClass: "text-grey" }, [_vm._v("头像组")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("view", { staticClass: "action" }, [
      _c("view", { staticClass: "cu-avatar-group" }, [
        _c("view", {
          staticClass: "cu-avatar round sm",
          staticStyle: {
            "background-image":
              "url(https://image.weilanwl.com/img/square-4.jpg)"
          }
        }),
        _c("view", {
          staticClass: "cu-avatar round sm",
          staticStyle: {
            "background-image":
              "url(https://image.weilanwl.com/img/square-3.jpg)"
          }
        }),
        _c("view", {
          staticClass: "cu-avatar round sm",
          staticStyle: {
            "background-image":
              "url(https://image.weilanwl.com/img/square-2.jpg)"
          }
        }),
        _c("view", {
          staticClass: "cu-avatar round sm",
          staticStyle: {
            "background-image":
              "url(https://image.weilanwl.com/img/square-1.jpg)"
          }
        })
      ]),
      _c("text", { staticClass: "text-grey text-sm" }, [_vm._v("4 人")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("view", { staticClass: "content" }, [
      _c("text", { staticClass: "icon-btn text-green" }),
      _c("text", { staticClass: "text-grey" }, [_vm._v("按钮")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("view", { staticClass: "content" }, [
      _c("text", { staticClass: "icon-tagfill text-red" }),
      _c("text", { staticClass: "text-grey" }, [_vm._v("标签")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("view", { staticClass: "action" }, [
      _c("view", { staticClass: "cu-tag round bg-orange light" }, [
        _vm._v("音乐")
      ]),
      _c("view", { staticClass: "cu-tag round bg-olive light" }, [
        _vm._v("电影")
      ]),
      _c("view", { staticClass: "cu-tag round bg-blue light" }, [
        _vm._v("旅行")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("view", { staticClass: "content" }, [
      _c("text", { staticClass: "icon-warn text-green" }),
      _c("text", { staticClass: "text-grey" }, [_vm._v("文本")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("view", { staticClass: "action" }, [
      _c("text", { staticClass: "text-grey text-sm" }, [
        _vm._v("小目标还没有实现！")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("view", { staticClass: "content padding-tb-sm" }, [
      _c("view", [
        _c("text", { staticClass: "icon-clothesfill text-blue" }),
        _vm._v("多行Item")
      ]),
      _c("view", { staticClass: "text-gray text-sm" }, [
        _c("text", { staticClass: "icon-infofill" }),
        _vm._v("小目标还没有实现！")
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
          _c("text", { staticClass: "icon-title text-orange " }),
          _vm._v("消息列表")
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("view", { staticClass: "cu-list menu menu-avatar" }, [
      _c("view", { staticClass: "cu-item" }, [
        _c("view", {
          staticClass: "cu-avatar round lg",
          staticStyle: {
            "background-image":
              "url(https://image.weilanwl.com/img/square-1.jpg)"
          }
        }),
        _c("view", { staticClass: "content" }, [
          _c("view", { staticClass: "text-grey" }, [_vm._v("文晓港")]),
          _c("view", { staticClass: "text-gray text-sm" }, [
            _c("text", { staticClass: "icon-infofill text-red" }),
            _vm._v("消息未送达")
          ])
        ]),
        _c("view", { staticClass: "action" }, [
          _c("view", { staticClass: "text-grey text-xs" }, [_vm._v("22:20")]),
          _c("view", { staticClass: "cu-tag round bg-grey sm" }, [_vm._v("5")])
        ])
      ]),
      _c("view", { staticClass: "cu-item" }, [
        _c(
          "view",
          {
            staticClass: "cu-avatar round lg",
            staticStyle: {
              "background-image":
                "url(https://image.weilanwl.com/img/square-2.jpg)"
            }
          },
          [_c("view", { staticClass: "cu-tag badge" }, [_vm._v("99+")])]
        ),
        _c("view", { staticClass: "content" }, [
          _c("view", { staticClass: "text-grey" }, [
            _vm._v("文晓港"),
            _c("view", { staticClass: "cu-tag round bg-orange sm" }, [
              _vm._v("SVIP")
            ])
          ]),
          _c("view", { staticClass: "text-gray text-sm" }, [
            _c("text", { staticClass: "icon-redpacket_fill text-red" }),
            _vm._v("收到红包")
          ])
        ]),
        _c("view", { staticClass: "action" }, [
          _c("view", { staticClass: "text-grey text-xs" }, [_vm._v("22:20")]),
          _c("view", { staticClass: "icon-notice_forbid_fill text-gray" })
        ])
      ]),
      _c("view", { staticClass: "cu-item " }, [
        _c("view", {
          staticClass: "cu-avatar radius lg",
          staticStyle: {
            "background-image":
              "url(https://image.weilanwl.com/img/square-3.jpg)"
          }
        }),
        _c("view", { staticClass: "content" }, [
          _c("view", [_vm._v("喵星人互动群")]),
          _c("view", { staticClass: "text-gray text-sm" }, [
            _vm._v("喵星酱：喵喵喵！")
          ])
        ]),
        _c("view", { staticClass: "action" }, [
          _c("view", { staticClass: "text-grey text-xs" }, [_vm._v("22:20")]),
          _c("view", { staticClass: "cu-tag round bg-red sm" }, [_vm._v("5")])
        ])
      ]),
      _c("view", { staticClass: "cu-item grayscale" }, [
        _c("view", {
          staticClass: "cu-avatar radius lg",
          staticStyle: {
            "background-image":
              "url(https://image.weilanwl.com/img/square-3.jpg)"
          }
        }),
        _c("view", { staticClass: "content" }, [
          _c("view", [_vm._v("喵星人互动群")]),
          _c("view", { staticClass: "text-gray text-sm" }, [
            _vm._v("喵星酱：喵喵喵！")
          ])
        ]),
        _c("view", { staticClass: "action" }, [
          _c("view", { staticClass: "text-grey text-xs" }, [_vm._v("22:20")]),
          _c("view", { staticClass: "cu-tag round bg-red sm" }, [_vm._v("5")])
        ])
      ]),
      _c("view", { staticClass: "cu-item cur" }, [
        _c(
          "view",
          {
            staticClass: "cu-avatar radius lg",
            staticStyle: {
              "background-image":
                "url(https://image.weilanwl.com/img/square-4.jpg)"
            }
          },
          [_c("view", { staticClass: "cu-tag badge" })]
        ),
        _c("view", { staticClass: "content" }, [
          _c("view", [
            _vm._v("喵星人互动群"),
            _c("view", { staticClass: "cu-tag round bg-orange sm" }, [
              _vm._v("6人")
            ])
          ]),
          _c("view", { staticClass: "text-gray text-sm" }, [
            _vm._v("喵星酱："),
            _c("text", { staticClass: "icon-picfill text-orange" }),
            _vm._v("图片传输中...")
          ])
        ]),
        _c("view", { staticClass: "action" }, [
          _c("view", { staticClass: "text-grey text-xs" }, [_vm._v("22:20")]),
          _c("view", { staticClass: "icon-notice_forbid_fill text-gray" })
        ])
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
          _c("text", { staticClass: "icon-title text-orange " }),
          _vm._v("列表左滑")
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("view", { staticClass: "content" }, [
      _c("view", { staticClass: "text-grey" }, [_vm._v("文晓港")]),
      _c("view", { staticClass: "text-gray text-sm" }, [
        _c("text", { staticClass: "icon-infofill text-red" }),
        _vm._v("消息未送达")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("view", { staticClass: "action" }, [
      _c("view", { staticClass: "text-grey text-xs" }, [_vm._v("22:20")]),
      _c("view", { staticClass: "cu-tag round bg-grey sm" }, [_vm._v("5")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("view", { staticClass: "move" }, [
      _c("view", { staticClass: "bg-grey" }, [_vm._v("置顶")]),
      _c("view", { staticClass: "bg-red" }, [_vm._v("删除")])
    ])
  }
]
render._withStripped = true



/***/ })

},[["../../../../Github/colorUI-for-uniApp/main.js?{\"page\":\"pages%2Flist%2Flist\"}","common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/list/list.js.map