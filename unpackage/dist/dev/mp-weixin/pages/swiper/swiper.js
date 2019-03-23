(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/swiper/swiper"],{

/***/ "../../../../Github/colorUI-for-uniApp/main.js?{\"page\":\"pages%2Fswiper%2Fswiper\"}":
/*!*******************************************************************************!*\
  !*** D:/Github/colorUI-for-uniApp/main.js?{"page":"pages%2Fswiper%2Fswiper"} ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
__webpack_require__(/*! uni-pages */ "../../../../Github/colorUI-for-uniApp/pages.json");
var _mpvuePageFactory = _interopRequireDefault(__webpack_require__(/*! mpvue-page-factory */ "./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mpvue-page-factory/index.js"));
var _swiper = _interopRequireDefault(__webpack_require__(/*! ./pages/swiper/swiper.vue */ "../../../../Github/colorUI-for-uniApp/pages/swiper/swiper.vue"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
Page((0, _mpvuePageFactory.default)(_swiper.default));

/***/ }),

/***/ "../../../../Github/colorUI-for-uniApp/pages/swiper/swiper.vue":
/*!************************************************************!*\
  !*** D:/Github/colorUI-for-uniApp/pages/swiper/swiper.vue ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _swiper_vue_vue_type_template_id_9be64ea4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./swiper.vue?vue&type=template&id=9be64ea4& */ "../../../../Github/colorUI-for-uniApp/pages/swiper/swiper.vue?vue&type=template&id=9be64ea4&");
/* harmony import */ var _swiper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./swiper.vue?vue&type=script&lang=js& */ "../../../../Github/colorUI-for-uniApp/pages/swiper/swiper.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _swiper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _swiper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../HBuilderX.1.6.2.20190220.full/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _swiper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _swiper_vue_vue_type_template_id_9be64ea4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _swiper_vue_vue_type_template_id_9be64ea4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "Github/colorUI-for-uniApp/pages/swiper/swiper.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "../../../../Github/colorUI-for-uniApp/pages/swiper/swiper.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** D:/Github/colorUI-for-uniApp/pages/swiper/swiper.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_swiper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX.1.6.2.20190220.full/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../HBuilderX.1.6.2.20190220.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../HBuilderX.1.6.2.20190220.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!../../../../HBuilderX.1.6.2.20190220.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../HBuilderX.1.6.2.20190220.full/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!./swiper.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!../../../../Github/colorUI-for-uniApp/pages/swiper/swiper.vue?vue&type=script&lang=js&");
/* harmony import */ var _HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_swiper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_swiper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_swiper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_swiper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_swiper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "../../../../Github/colorUI-for-uniApp/pages/swiper/swiper.vue?vue&type=template&id=9be64ea4&":
/*!*******************************************************************************************!*\
  !*** D:/Github/colorUI-for-uniApp/pages/swiper/swiper.vue?vue&type=template&id=9be64ea4& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_swiper_vue_vue_type_template_id_9be64ea4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX.1.6.2.20190220.full/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../HBuilderX.1.6.2.20190220.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../HBuilderX.1.6.2.20190220.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../HBuilderX.1.6.2.20190220.full/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!./swiper.vue?vue&type=template&id=9be64ea4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!../../../../Github/colorUI-for-uniApp/pages/swiper/swiper.vue?vue&type=template&id=9be64ea4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_swiper_vue_vue_type_template_id_9be64ea4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_swiper_vue_vue_type_template_id_9be64ea4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!../../../../Github/colorUI-for-uniApp/pages/swiper/swiper.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!D:/Github/colorUI-for-uniApp/pages/swiper/swiper.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default =

















































{
  data: function data() {
    return {
      cardCur: 0,
      tower: [{
        id: 0,
        url: 'https://image.weilanwl.com/img/4x3-1.jpg' },
      {
        id: 1,
        url: 'https://image.weilanwl.com/img/4x3-2.jpg' },
      {
        id: 2,
        url: 'https://image.weilanwl.com/img/4x3-3.jpg' },
      {
        id: 3,
        url: 'https://image.weilanwl.com/img/4x3-4.jpg' },
      {
        id: 4,
        url: 'https://image.weilanwl.com/img/4x3-2.jpg' },
      {
        id: 5,
        url: 'https://image.weilanwl.com/img/4x3-4.jpg' },
      {
        id: 6,
        url: 'https://image.weilanwl.com/img/4x3-2.jpg' }],

      DotStyle: '',
      towerList: [],
      towerStart: '',
      direction: '' };

  },
  onLoad: function onLoad() {
    this.towerSwiper(this.tower);
    // 初始化towerSwiper 传已有的数组名即可
  },
  methods: {
    DotStyles: function DotStyles(e) {
      this.DotStyle = e.detail.value;
    },
    // cardSwiper
    cardSwiper: function cardSwiper(e) {
      this.cardCur = e.detail.current;
    },
    // towerSwiper
    // 初始化towerSwiper
    towerSwiper: function towerSwiper(name) {
      var list = name;
      for (var i = 0; i < list.length; i++) {
        list[i].zIndex = parseInt(list.length / 2) + 1 - Math.abs(i - parseInt(list.length / 2));
        list[i].mLeft = i - parseInt(list.length / 2);
      }
      this.towerList = list;
    },

    // towerSwiper触摸开始
    towerStarts: function towerStarts(e) {
      this.towerStart = e.touches[0].pageX;
    },

    // towerSwiper计算方向
    towerMove: function towerMove(e) {
      this.direction = e.touches[0].pageX - this.towerStart > 0 ? 'right' : 'left';
    },

    // towerSwiper计算滚动
    towerEnd: function towerEnd(e) {
      var direction = this.direction;
      var list = this.towerList;
      if (direction == 'right') {
        var mLeft = list[0].mLeft;
        var zIndex = list[0].zIndex;
        for (var i = 1; i < list.length; i++) {
          list[i - 1].mLeft = list[i].mLeft;
          list[i - 1].zIndex = list[i].zIndex;
        }
        list[list.length - 1].mLeft = mLeft;
        list[list.length - 1].zIndex = zIndex;
        this.towerList = list;
      } else {
        var _mLeft = list[list.length - 1].mLeft;
        var _zIndex = list[list.length - 1].zIndex;
        for (var _i = list.length - 1; _i > 0; _i--) {
          list[_i].mLeft = list[_i - 1].mLeft;
          list[_i].zIndex = list[_i - 1].zIndex;
        }
        list[0].mLeft = _mLeft;
        list[0].zIndex = _zIndex;
        this.towerList = list;
      }
    } } };exports.default = _default;

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!../../../../Github/colorUI-for-uniApp/pages/swiper/swiper.vue?vue&type=template&id=9be64ea4&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!D:/Github/colorUI-for-uniApp/pages/swiper/swiper.vue?vue&type=template&id=9be64ea4& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "view",
    [
      _c("view", { staticClass: "cu-bar bg-white" }, [
        _vm._m(0),
        _c("view", { staticClass: "action" }, [
          _c("switch", {
            staticClass: "sm",
            attrs: { eventid: "4f2ce05a-0" },
            on: { change: _vm.DotStyles }
          })
        ])
      ]),
      _c(
        "swiper",
        {
          staticClass: "screen-swiper",
          class: _vm.DotStyle ? "square-dot" : "round-dot",
          attrs: {
            "indicator-dots": "true",
            circular: "true",
            autoplay: "true",
            interval: "5000",
            duration: "500"
          }
        },
        _vm._l(4, function(item, index) {
          return _c(
            "swiper-item",
            { key: index, attrs: { mpcomid: "4f2ce05a-0-" + index } },
            [
              _c("image", {
                attrs: {
                  src:
                    "https://image.weilanwl.com/img/4x3-" +
                    (index + 1) +
                    ".jpg",
                  mode: "aspectFill"
                }
              })
            ]
          )
        })
      ),
      _vm._m(1),
      _c(
        "swiper",
        {
          staticClass: "card-swiper",
          class: _vm.DotStyle ? "square-dot" : "round-dot",
          attrs: {
            "indicator-dots": "true",
            circular: "true",
            autoplay: "true",
            interval: "5000",
            duration: "500",
            "indicator-color": "#8799a3",
            "indicator-active-color": "#0081ff",
            eventid: "4f2ce05a-1"
          },
          on: { change: _vm.cardSwiper }
        },
        _vm._l(4, function(item, index) {
          return _c(
            "swiper-item",
            {
              key: index,
              class: _vm.cardCur == index ? "cur" : "",
              attrs: { mpcomid: "4f2ce05a-1-" + index }
            },
            [
              _c("view", {
                staticClass: "bg-img shadow-blur",
                style:
                  "background-image:url(https://image.weilanwl.com/img/4x3-" +
                  (index + 1) +
                  ".jpg)"
              })
            ]
          )
        })
      ),
      _vm._m(2),
      _c(
        "view",
        {
          staticClass: "tower-swiper",
          attrs: { eventid: "4f2ce05a-2" },
          on: {
            touchmove: _vm.towerMove,
            touchstart: _vm.towerStart,
            touchend: _vm.towerEnd
          }
        },
        _vm._l(_vm.towerList, function(item, index) {
          return _c(
            "view",
            {
              key: index,
              staticClass: "tower-item",
              class: [item.zIndex == 1 ? "none" : ""],
              style:
                "transform: scale(" +
                (0.5 + item.zIndex / 10) +
                ");margin-left:" +
                (item.mLeft * 100 - 150) +
                "upx;z-index:" +
                item.zIndex +
                ""
            },
            [
              _c("view", {
                staticClass: "bg-img shadow-blur",
                style: "background-image:url(" + item.url + ")"
              })
            ]
          )
        })
      )
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("view", { staticClass: "action" }, [
      _c("text", { staticClass: "icon-title text-pink" }),
      _vm._v("全屏限高轮播")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("view", { staticClass: "cu-bar bg-white margin-top" }, [
      _c("view", { staticClass: "action" }, [
        _c("text", { staticClass: "icon-title text-pink" }),
        _vm._v("卡片式轮播")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("view", { staticClass: "cu-bar bg-white margin-top" }, [
      _c("view", { staticClass: "action" }, [
        _c("text", { staticClass: "icon-title text-pink" }),
        _vm._v("堆叠式轮播")
      ])
    ])
  }
]
render._withStripped = true



/***/ })

},[["../../../../Github/colorUI-for-uniApp/main.js?{\"page\":\"pages%2Fswiper%2Fswiper\"}","common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/swiper/swiper.js.map