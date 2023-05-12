"use strict";
(self["webpackChunktodo_list"] = self["webpackChunktodo_list"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./src/style.css":
/*!*****************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./src/style.css ***!
  \*****************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/pencil.svg */ "./src/assets/pencil.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/trash.svg */ "./src/assets/trash.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  --primary-dark: #3A7CFF;\n  --primary-color: #77A4FF;\n  --secondary-color: #F5F6F8;\n  --dark-grey: #2F3437;\n  --light-grey: #8D8E8F;\n  --border-grey: #CCCED1;\n\n  font-family: 'Roboto', Arial, Helvetica, sans-serif;\n  color: var(--dark-grey);\n  box-sizing: border-box;\n  height: 100vh;\n\n  display: grid;\n  grid-template-columns: 350px 1fr;\n  grid-template-rows: 82px 1fr;\n}\n\na, button {\n  cursor: pointer;\n  font-family: inherit;\n}\n\nheader {\n  grid-column: span 2;\n  align-self: center;\n  height: 100%;\n\n  padding-inline: 20px;\n  background-color: var(--primary-color);\n  color: white;\n}\n\nheader > * {\n  height: 100%;\n}\n\n.logo {\n  display: flex;\n  align-items: center;\n  gap: 15px;\n}\n\n.logo span {\n  font-family: 'RocknRoll One', sans-serif;\n  font-size: 32px;\n  letter-spacing: 0.05em;\n}\n\nnav {\n  background-color: var(--secondary-color);\n  padding: 15px 30px 0 30px;\n  font-weight: 500;\n\n  display: grid;\n  grid-template-rows: min-content 1fr 50px;\n}\n\nnav ul {\n  list-style: none;\n  font-size: 18px;\n\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\nnav ul.default-projects {\n  padding-bottom: 15px;\n}\n\nnav ul.user-defined-projects {\n  padding-top: 15px;\n}\n\nnav li a {\n  padding: 14px 16px;\n\n  display: flex;\n  gap: 15px;\n}\n\nnav li a:hover {\n  background-color: #e4e6ed;\n}\n\nnav li a .icon {\n  height: 20px;\n  \n}\n\n.icon.all {\n  filter: brightness(0) saturate(100%) invert(61%) sepia(14%) saturate(3532%) hue-rotate(195deg) brightness(103%) contrast(101%);;\n}\n\n.icon.today {\n  filter: brightness(0) saturate(100%) invert(70%) sepia(48%) saturate(761%) hue-rotate(317deg) brightness(100%) contrast(101%);\n}\n\n.icon.upcoming {\n  filter: brightness(0) saturate(100%) invert(83%) sepia(12%) saturate(2187%) hue-rotate(69deg) brightness(103%) contrast(101%);\n}\n\nnav li a .task-total {\n  margin-left: auto;\n  color: var(--light-grey);\n}\n\n.nav-footer {\n  height: 100%;\n  border-top: 1px solid var(--border-grey);\n\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\nbutton.add-btn {\n  margin-right: auto;\n  background-color: unset;\n  color: var(--dark-grey);\n  border: none;\n  font-size: 18px;\n  font-weight: 500;\n\n  display: flex;\n  align-items: center;\n}\n\nimg.add {\n  height: 18px;\n  filter: invert(17%) sepia(11%) saturate(519%) hue-rotate(159deg) brightness(90%) contrast(86%); /* match dark-grey */\n}\n\nbutton.add-btn:hover {\n  color: black;\n}\n\nbutton.add-btn:hover img.add {\n  filter: none;\n}\n\nmain {\n  padding: 55px;\n}\n\n.project-details .header-container {\n  position: relative;\n  width: min-content;\n\n  display: flex;\n  align-items: center;\n}\n\n.ellipsis-menu {\n  padding: 5px;\n  height: 30px;  \n  cursor: pointer;\n}\n\n.ellipsis-menu:hover {\n  background-color: #ECEEF3;\n}\n\n.dropdown {\n  position: absolute;\n  top: 100%;\n  left: calc(100% - 40px);\n  list-style: none;\n  box-shadow: 2px 2px 10px #00000025;\n\n  display: flex;\n  flex-direction: column;\n  min-width: 125px;\n}\n\n.dropdown-option {\n  cursor: pointer;\n  padding: 14px 20px;\n}\n\n.dropdown-option:hover {\n  background-color: #ECEEF3;\n}\n\n.dropdown-option.edit::marker {\n  content: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n.dropdown-option.delete::marker {\n  content: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n\n.dropdown-option.delete {\n  color: #FF4747;\n}\n\n.dropdown-option.danger img {\n  filter: brightness(0) saturate(100%) invert(52%) sepia(50%) saturate(7493%) hue-rotate(336deg) brightness(107%) contrast(103%);\n}\n\ninput.title {\n  border: none;\n  outline: none;\n  font-size: 32px;\n  font-weight: bold;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,uBAAuB;EACvB,wBAAwB;EACxB,0BAA0B;EAC1B,oBAAoB;EACpB,qBAAqB;EACrB,sBAAsB;;EAEtB,mDAAmD;EACnD,uBAAuB;EACvB,sBAAsB;EACtB,aAAa;;EAEb,aAAa;EACb,gCAAgC;EAChC,4BAA4B;AAC9B;;AAEA;EACE,eAAe;EACf,oBAAoB;AACtB;;AAEA;EACE,mBAAmB;EACnB,kBAAkB;EAClB,YAAY;;EAEZ,oBAAoB;EACpB,sCAAsC;EACtC,YAAY;AACd;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,wCAAwC;EACxC,eAAe;EACf,sBAAsB;AACxB;;AAEA;EACE,wCAAwC;EACxC,yBAAyB;EACzB,gBAAgB;;EAEhB,aAAa;EACb,wCAAwC;AAC1C;;AAEA;EACE,gBAAgB;EAChB,eAAe;;EAEf,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;;EAElB,aAAa;EACb,SAAS;AACX;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,YAAY;;AAEd;;AAEA;EACE,8HAA8H;AAChI;;AAEA;EACE,6HAA6H;AAC/H;;AAEA;EACE,6HAA6H;AAC/H;;AAEA;EACE,iBAAiB;EACjB,wBAAwB;AAC1B;;AAEA;EACE,YAAY;EACZ,wCAAwC;;EAExC,aAAa;EACb,sBAAsB;EACtB,uBAAuB;AACzB;;AAEA;EACE,kBAAkB;EAClB,uBAAuB;EACvB,uBAAuB;EACvB,YAAY;EACZ,eAAe;EACf,gBAAgB;;EAEhB,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,8FAA8F,EAAE,oBAAoB;AACtH;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,kBAAkB;EAClB,kBAAkB;;EAElB,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,kBAAkB;EAClB,SAAS;EACT,uBAAuB;EACvB,gBAAgB;EAChB,kCAAkC;;EAElC,aAAa;EACb,sBAAsB;EACtB,gBAAgB;AAClB;;AAEA;EACE,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,gDAAmC;AACrC;;AAEA;EACE,gDAAkC;AACpC;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,8HAA8H;AAChI;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,eAAe;EACf,iBAAiB;AACnB","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  --primary-dark: #3A7CFF;\n  --primary-color: #77A4FF;\n  --secondary-color: #F5F6F8;\n  --dark-grey: #2F3437;\n  --light-grey: #8D8E8F;\n  --border-grey: #CCCED1;\n\n  font-family: 'Roboto', Arial, Helvetica, sans-serif;\n  color: var(--dark-grey);\n  box-sizing: border-box;\n  height: 100vh;\n\n  display: grid;\n  grid-template-columns: 350px 1fr;\n  grid-template-rows: 82px 1fr;\n}\n\na, button {\n  cursor: pointer;\n  font-family: inherit;\n}\n\nheader {\n  grid-column: span 2;\n  align-self: center;\n  height: 100%;\n\n  padding-inline: 20px;\n  background-color: var(--primary-color);\n  color: white;\n}\n\nheader > * {\n  height: 100%;\n}\n\n.logo {\n  display: flex;\n  align-items: center;\n  gap: 15px;\n}\n\n.logo span {\n  font-family: 'RocknRoll One', sans-serif;\n  font-size: 32px;\n  letter-spacing: 0.05em;\n}\n\nnav {\n  background-color: var(--secondary-color);\n  padding: 15px 30px 0 30px;\n  font-weight: 500;\n\n  display: grid;\n  grid-template-rows: min-content 1fr 50px;\n}\n\nnav ul {\n  list-style: none;\n  font-size: 18px;\n\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\nnav ul.default-projects {\n  padding-bottom: 15px;\n}\n\nnav ul.user-defined-projects {\n  padding-top: 15px;\n}\n\nnav li a {\n  padding: 14px 16px;\n\n  display: flex;\n  gap: 15px;\n}\n\nnav li a:hover {\n  background-color: #e4e6ed;\n}\n\nnav li a .icon {\n  height: 20px;\n  \n}\n\n.icon.all {\n  filter: brightness(0) saturate(100%) invert(61%) sepia(14%) saturate(3532%) hue-rotate(195deg) brightness(103%) contrast(101%);;\n}\n\n.icon.today {\n  filter: brightness(0) saturate(100%) invert(70%) sepia(48%) saturate(761%) hue-rotate(317deg) brightness(100%) contrast(101%);\n}\n\n.icon.upcoming {\n  filter: brightness(0) saturate(100%) invert(83%) sepia(12%) saturate(2187%) hue-rotate(69deg) brightness(103%) contrast(101%);\n}\n\nnav li a .task-total {\n  margin-left: auto;\n  color: var(--light-grey);\n}\n\n.nav-footer {\n  height: 100%;\n  border-top: 1px solid var(--border-grey);\n\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\nbutton.add-btn {\n  margin-right: auto;\n  background-color: unset;\n  color: var(--dark-grey);\n  border: none;\n  font-size: 18px;\n  font-weight: 500;\n\n  display: flex;\n  align-items: center;\n}\n\nimg.add {\n  height: 18px;\n  filter: invert(17%) sepia(11%) saturate(519%) hue-rotate(159deg) brightness(90%) contrast(86%); /* match dark-grey */\n}\n\nbutton.add-btn:hover {\n  color: black;\n}\n\nbutton.add-btn:hover img.add {\n  filter: none;\n}\n\nmain {\n  padding: 55px;\n}\n\n.project-details .header-container {\n  position: relative;\n  width: min-content;\n\n  display: flex;\n  align-items: center;\n}\n\n.ellipsis-menu {\n  padding: 5px;\n  height: 30px;  \n  cursor: pointer;\n}\n\n.ellipsis-menu:hover {\n  background-color: #ECEEF3;\n}\n\n.dropdown {\n  position: absolute;\n  top: 100%;\n  left: calc(100% - 40px);\n  list-style: none;\n  box-shadow: 2px 2px 10px #00000025;\n\n  display: flex;\n  flex-direction: column;\n  min-width: 125px;\n}\n\n.dropdown-option {\n  cursor: pointer;\n  padding: 14px 20px;\n}\n\n.dropdown-option:hover {\n  background-color: #ECEEF3;\n}\n\n.dropdown-option.edit::marker {\n  content: url('./assets/pencil.svg');\n}\n\n.dropdown-option.delete::marker {\n  content: url('./assets/trash.svg');\n}\n\n.dropdown-option.delete {\n  color: #FF4747;\n}\n\n.dropdown-option.danger img {\n  filter: brightness(0) saturate(100%) invert(52%) sepia(50%) saturate(7493%) hue-rotate(336deg) brightness(107%) contrast(103%);\n}\n\ninput.title {\n  border: none;\n  outline: none;\n  font-size: 32px;\n  font-weight: bold;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./style.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/account.js":
/*!************************!*\
  !*** ./src/account.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const accountFactory = () => {
  let projects = [];

  const projectList = () => [...projects];
  const addProject = (project) => projects.push(project);
  const removeProject = (projectId) => {
    projects = projects.filter((project) => project.id !== projectId);
  };

  return {
    projectList,
    addProject,
    removeProject,
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (accountFactory);


/***/ }),

/***/ "./src/dom-util.js":
/*!*************************!*\
  !*** ./src/dom-util.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _dropdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dropdown */ "./src/dropdown.js");


const rectangleSvg = __webpack_require__(/*! ./assets/rectangle.svg */ "./src/assets/rectangle.svg");
const ellipsisSvg = __webpack_require__(/*! ./assets/ellipsis.svg */ "./src/assets/ellipsis.svg");

const main = document.querySelector('main');
const userDefinedProjects = document.querySelector('nav ul.user-defined-projects');

const formatNavTitle = (inputValue) => inputValue || 'New Project';

function blurKeyEventHandler(event) {
  if (event.code === 'Enter') {
    this.blur();
  }
}

const removeProject = (project) => {
  console.log('remove project');
  // removeProjectNavItem(project);
  // renderProjectView(project);
  // remove project from account ... ?
};

const updateProjectTitle = (titleInput, project) => {
  const navItemTitle = document.querySelector(`nav li#project-${project.id} span.title`);
  navItemTitle.textContent = formatNavTitle(titleInput.value);
  project.title = titleInput.value;
};

const renderProjectView = (project) => {
  const projectDetails = document.createElement('div');
  const headerContainer = document.createElement('div');
  const titleInput = document.createElement('input');
  const ellipsisMenu = document.createElement('img');

  projectDetails.classList.add('project-details');
  headerContainer.classList.add('header-container');

  titleInput.classList.add('title');
  titleInput.placeholder = 'New Project';
  titleInput.value = project.title;

  titleInput.addEventListener('focusout', () => updateProjectTitle(titleInput, project));
  titleInput.addEventListener('keypress', blurKeyEventHandler);

  ellipsisMenu.classList.add('ellipsis-menu');
  ellipsisMenu.src = ellipsisSvg;

  const ellipsisOptions = [
    {
      text: 'Rename', icon: 'edit', action: () => titleInput.focus(),
    },
    {
      text: 'Delete', icon: 'delete', action: () => removeProject(project),
    },
  ];

  ellipsisMenu.addEventListener('click', (event) => _dropdown__WEBPACK_IMPORTED_MODULE_0__["default"].open(event, ellipsisOptions, ellipsisMenu));

  headerContainer.append(titleInput, ellipsisMenu);
  projectDetails.appendChild(headerContainer);
  main.replaceChild(projectDetails, main.querySelector('main > *'));

  if (!project.title) {
    titleInput.focus();
  }
};

const addProjectNavItem = (project) => {
  if (!userDefinedProjects.hasChildNodes()) {
    userDefinedProjects.style.borderTop = '1px solid var(--border-grey)';
  }

  const li = document.createElement('li');
  li.id = `project-${project.id}`;

  const a = document.createElement('a');
  a.classList.add('project');
  a.addEventListener('click', () => renderProjectView(project));

  const icon = document.createElement('img');
  icon.classList.add('icon', 'custom');
  icon.src = rectangleSvg;
  icon.alt = 'project icon';

  const title = document.createElement('span');
  title.classList.add('title');
  title.textContent = formatNavTitle(project.title);

  const taskTotal = document.createElement('span');
  taskTotal.classList.add('task-total');
  taskTotal.textContent = 0;

  a.append(icon, title, taskTotal);
  li.appendChild(a);
  userDefinedProjects.appendChild(li);
};

const addProject = (project) => {
  addProjectNavItem(project);
  renderProjectView(project);
};

const setAddProjectEvent = (event) => {
  const addProjectBtn = document.querySelector('.nav-footer .add-btn');
  addProjectBtn.addEventListener('click', event);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  addProject,
  setAddProjectEvent,
});


/***/ }),

/***/ "./src/dropdown.js":
/*!*************************!*\
  !*** ./src/dropdown.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const closeOpenDropdown = (event) => {
  const dropdown = document.querySelector('.dropdown');
  if (dropdown && dropdown !== event.target && !dropdown.contains(event.target)) {
    dropdown.remove();
  }
};

(() => {
  const body = document.querySelector('body');
  body.addEventListener('click', closeOpenDropdown);
})();

const dropdownAction = (action, dropdown) => {
  action();
  dropdown.remove();
};

const open = (event, options, adjacentElement) => {
  if (document.querySelector('.dropdown')) {
    return; // defer to body event to close the open dropdown
  }

  const dropdownMenu = document.createElement('div');
  dropdownMenu.classList.add('dropdown');

  const optionList = document.createElement('li');

  options.forEach((option) => {
    const listItem = document.createElement('li');

    listItem.classList.add('dropdown-option', option.icon);
    listItem.textContent = option.text;
    listItem.addEventListener('click', () => dropdownAction(option.action, dropdownMenu));

    optionList.append(listItem);
  });

  dropdownMenu.append(optionList);
  adjacentElement.insertAdjacentElement('afterend', dropdownMenu);

  event.stopPropagation();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  open,
});


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dom_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-util */ "./src/dom-util.js");
/* harmony import */ var _account__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./account */ "./src/account.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todo */ "./src/todo.js");





(() => {
  const account = (0,_account__WEBPACK_IMPORTED_MODULE_1__["default"])();

  const addProject = () => {
    const newProject = (0,_project__WEBPACK_IMPORTED_MODULE_2__["default"])();

    account.addProject(newProject);
    _dom_util__WEBPACK_IMPORTED_MODULE_0__["default"].addProject(newProject);
  };

  const addTodo = (projectId) => {
    const newTodo = (0,_todo__WEBPACK_IMPORTED_MODULE_3__["default"])('New Task');
    const project = account.projectList().filter((proj) => proj.id === projectId);

    project.addTodo(newTodo);
    _dom_util__WEBPACK_IMPORTED_MODULE_0__["default"].addTodo(newTodo.id);
  };

  _dom_util__WEBPACK_IMPORTED_MODULE_0__["default"].setAddProjectEvent(addProject);
  // domUtil.setAddTodoEvent(addProject);
})();


/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _sequence__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sequence */ "./src/sequence.js");


const idSequence = (0,_sequence__WEBPACK_IMPORTED_MODULE_0__["default"])();

const projectFactory = (title, description, initialTodos) => {
  const id = idSequence.getNext();
  let todos = initialTodos || [];

  const todoList = () => [...todos];
  const addTodo = (todo) => todos.push(todo);
  const removeTodo = (todoId) => {
    todos = todos.filter((todo) => todo.id !== todoId);
  };
  const clearTodos = () => {
    todos = [];
  };

  return {
    get id() {
      return id;
    },
    title: title || '',
    description: description || '',
    todoList,
    addTodo,
    removeTodo,
    clearTodos,
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projectFactory);


/***/ }),

/***/ "./src/sequence.js":
/*!*************************!*\
  !*** ./src/sequence.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const DEFAULT_INITIAL = 1000;
const DEFAULT_INCREMENT = 1;

const sequenceFactory = (initVal, incrVal) => {
  let value = initVal || DEFAULT_INITIAL;
  const increment = incrVal || DEFAULT_INCREMENT;

  const getNext = () => {
    const tempVal = value;
    value += increment;
    return tempVal;
  };

  return {
    getNext,
    increment,
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sequenceFactory);


/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _sequence__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sequence */ "./src/sequence.js");


const PRIORITY = {
  none: 0,
  low: 1,
  medium: 2,
  high: 3,
};

const STATUS = {
  incomplete: 0,
  complete: 1,
};

const idSequence = (0,_sequence__WEBPACK_IMPORTED_MODULE_0__["default"])();

const todoFactory = (title, description, dueDate, priority, status) => ({
  get id() {
    return idSequence.getNext();
  },
  title,
  description,
  dueDate,
  priority: priority || PRIORITY.none,
  status: status || STATUS.incomplete,
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (todoFactory);


/***/ }),

/***/ "./src/assets/ellipsis.svg":
/*!*********************************!*\
  !*** ./src/assets/ellipsis.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e8206f1aad76980a2396.svg";

/***/ }),

/***/ "./src/assets/pencil.svg":
/*!*******************************!*\
  !*** ./src/assets/pencil.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b1eb632583ba203d62d3.svg";

/***/ }),

/***/ "./src/assets/rectangle.svg":
/*!**********************************!*\
  !*** ./src/assets/rectangle.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1a88430268362450e83e.svg";

/***/ }),

/***/ "./src/assets/trash.svg":
/*!******************************!*\
  !*** ./src/assets/trash.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3832d829ec7c0b236847.svg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"), __webpack_exec__("./src/style.css"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZSxXQUFXLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzUzZTMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvYWNjb3VudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZG9tLXV0aWwuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Ryb3Bkb3duLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc2VxdWVuY2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvZG8uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL3BlbmNpbC5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy90cmFzaC5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gIC0tcHJpbWFyeS1kYXJrOiAjM0E3Q0ZGO1xcbiAgLS1wcmltYXJ5LWNvbG9yOiAjNzdBNEZGO1xcbiAgLS1zZWNvbmRhcnktY29sb3I6ICNGNUY2Rjg7XFxuICAtLWRhcmstZ3JleTogIzJGMzQzNztcXG4gIC0tbGlnaHQtZ3JleTogIzhEOEU4RjtcXG4gIC0tYm9yZGVyLWdyZXk6ICNDQ0NFRDE7XFxuXFxuICBmb250LWZhbWlseTogJ1JvYm90bycsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICBjb2xvcjogdmFyKC0tZGFyay1ncmV5KTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBoZWlnaHQ6IDEwMHZoO1xcblxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzUwcHggMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA4MnB4IDFmcjtcXG59XFxuXFxuYSwgYnV0dG9uIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgZ3JpZC1jb2x1bW46IHNwYW4gMjtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGhlaWdodDogMTAwJTtcXG5cXG4gIHBhZGRpbmctaW5saW5lOiAyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbmhlYWRlciA+ICoge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4ubG9nbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTVweDtcXG59XFxuXFxuLmxvZ28gc3BhbiB7XFxuICBmb250LWZhbWlseTogJ1JvY2tuUm9sbCBPbmUnLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAzMnB4O1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcXG59XFxuXFxubmF2IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxuICBwYWRkaW5nOiAxNXB4IDMwcHggMCAzMHB4O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG5cXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50IDFmciA1MHB4O1xcbn1cXG5cXG5uYXYgdWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG5uYXYgdWwuZGVmYXVsdC1wcm9qZWN0cyB7XFxuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcXG59XFxuXFxubmF2IHVsLnVzZXItZGVmaW5lZC1wcm9qZWN0cyB7XFxuICBwYWRkaW5nLXRvcDogMTVweDtcXG59XFxuXFxubmF2IGxpIGEge1xcbiAgcGFkZGluZzogMTRweCAxNnB4O1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTVweDtcXG59XFxuXFxubmF2IGxpIGE6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U0ZTZlZDtcXG59XFxuXFxubmF2IGxpIGEgLmljb24ge1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgXFxufVxcblxcbi5pY29uLmFsbCB7XFxuICBmaWx0ZXI6IGJyaWdodG5lc3MoMCkgc2F0dXJhdGUoMTAwJSkgaW52ZXJ0KDYxJSkgc2VwaWEoMTQlKSBzYXR1cmF0ZSgzNTMyJSkgaHVlLXJvdGF0ZSgxOTVkZWcpIGJyaWdodG5lc3MoMTAzJSkgY29udHJhc3QoMTAxJSk7O1xcbn1cXG5cXG4uaWNvbi50b2RheSB7XFxuICBmaWx0ZXI6IGJyaWdodG5lc3MoMCkgc2F0dXJhdGUoMTAwJSkgaW52ZXJ0KDcwJSkgc2VwaWEoNDglKSBzYXR1cmF0ZSg3NjElKSBodWUtcm90YXRlKDMxN2RlZykgYnJpZ2h0bmVzcygxMDAlKSBjb250cmFzdCgxMDElKTtcXG59XFxuXFxuLmljb24udXBjb21pbmcge1xcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDApIHNhdHVyYXRlKDEwMCUpIGludmVydCg4MyUpIHNlcGlhKDEyJSkgc2F0dXJhdGUoMjE4NyUpIGh1ZS1yb3RhdGUoNjlkZWcpIGJyaWdodG5lc3MoMTAzJSkgY29udHJhc3QoMTAxJSk7XFxufVxcblxcbm5hdiBsaSBhIC50YXNrLXRvdGFsIHtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgY29sb3I6IHZhcigtLWxpZ2h0LWdyZXkpO1xcbn1cXG5cXG4ubmF2LWZvb3RlciB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWdyZXkpO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuYnV0dG9uLmFkZC1idG4ge1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdW5zZXQ7XFxuICBjb2xvcjogdmFyKC0tZGFyay1ncmV5KTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuaW1nLmFkZCB7XFxuICBoZWlnaHQ6IDE4cHg7XFxuICBmaWx0ZXI6IGludmVydCgxNyUpIHNlcGlhKDExJSkgc2F0dXJhdGUoNTE5JSkgaHVlLXJvdGF0ZSgxNTlkZWcpIGJyaWdodG5lc3MoOTAlKSBjb250cmFzdCg4NiUpOyAvKiBtYXRjaCBkYXJrLWdyZXkgKi9cXG59XFxuXFxuYnV0dG9uLmFkZC1idG46aG92ZXIge1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG5idXR0b24uYWRkLWJ0bjpob3ZlciBpbWcuYWRkIHtcXG4gIGZpbHRlcjogbm9uZTtcXG59XFxuXFxubWFpbiB7XFxuICBwYWRkaW5nOiA1NXB4O1xcbn1cXG5cXG4ucHJvamVjdC1kZXRhaWxzIC5oZWFkZXItY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiBtaW4tY29udGVudDtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZWxsaXBzaXMtbWVudSB7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBoZWlnaHQ6IDMwcHg7ICBcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmVsbGlwc2lzLW1lbnU6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VDRUVGMztcXG59XFxuXFxuLmRyb3Bkb3duIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMTAwJTtcXG4gIGxlZnQ6IGNhbGMoMTAwJSAtIDQwcHgpO1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIGJveC1zaGFkb3c6IDJweCAycHggMTBweCAjMDAwMDAwMjU7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1pbi13aWR0aDogMTI1cHg7XFxufVxcblxcbi5kcm9wZG93bi1vcHRpb24ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcGFkZGluZzogMTRweCAyMHB4O1xcbn1cXG5cXG4uZHJvcGRvd24tb3B0aW9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNFQ0VFRjM7XFxufVxcblxcbi5kcm9wZG93bi1vcHRpb24uZWRpdDo6bWFya2VyIHtcXG4gIGNvbnRlbnQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxufVxcblxcbi5kcm9wZG93bi1vcHRpb24uZGVsZXRlOjptYXJrZXIge1xcbiAgY29udGVudDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG59XFxuXFxuLmRyb3Bkb3duLW9wdGlvbi5kZWxldGUge1xcbiAgY29sb3I6ICNGRjQ3NDc7XFxufVxcblxcbi5kcm9wZG93bi1vcHRpb24uZGFuZ2VyIGltZyB7XFxuICBmaWx0ZXI6IGJyaWdodG5lc3MoMCkgc2F0dXJhdGUoMTAwJSkgaW52ZXJ0KDUyJSkgc2VwaWEoNTAlKSBzYXR1cmF0ZSg3NDkzJSkgaHVlLXJvdGF0ZSgzMzZkZWcpIGJyaWdodG5lc3MoMTA3JSkgY29udHJhc3QoMTAzJSk7XFxufVxcblxcbmlucHV0LnRpdGxlIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBmb250LXNpemU6IDMycHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsd0JBQXdCO0VBQ3hCLDBCQUEwQjtFQUMxQixvQkFBb0I7RUFDcEIscUJBQXFCO0VBQ3JCLHNCQUFzQjs7RUFFdEIsbURBQW1EO0VBQ25ELHVCQUF1QjtFQUN2QixzQkFBc0I7RUFDdEIsYUFBYTs7RUFFYixhQUFhO0VBQ2IsZ0NBQWdDO0VBQ2hDLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLFlBQVk7O0VBRVosb0JBQW9CO0VBQ3BCLHNDQUFzQztFQUN0QyxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFNBQVM7QUFDWDs7QUFFQTtFQUNFLHdDQUF3QztFQUN4QyxlQUFlO0VBQ2Ysc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usd0NBQXdDO0VBQ3hDLHlCQUF5QjtFQUN6QixnQkFBZ0I7O0VBRWhCLGFBQWE7RUFDYix3Q0FBd0M7QUFDMUM7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTs7RUFFZixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGtCQUFrQjs7RUFFbEIsYUFBYTtFQUNiLFNBQVM7QUFDWDs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFlBQVk7O0FBRWQ7O0FBRUE7RUFDRSw4SEFBOEg7QUFDaEk7O0FBRUE7RUFDRSw2SEFBNkg7QUFDL0g7O0FBRUE7RUFDRSw2SEFBNkg7QUFDL0g7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHdDQUF3Qzs7RUFFeEMsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osZUFBZTtFQUNmLGdCQUFnQjs7RUFFaEIsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7RUFDWiw4RkFBOEYsRUFBRSxvQkFBb0I7QUFDdEg7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCOztFQUVsQixhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCx1QkFBdUI7RUFDdkIsZ0JBQWdCO0VBQ2hCLGtDQUFrQzs7RUFFbEMsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsZ0RBQW1DO0FBQ3JDOztBQUVBO0VBQ0UsZ0RBQWtDO0FBQ3BDOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLDhIQUE4SDtBQUNoSTs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbmJvZHkge1xcbiAgLS1wcmltYXJ5LWRhcms6ICMzQTdDRkY7XFxuICAtLXByaW1hcnktY29sb3I6ICM3N0E0RkY7XFxuICAtLXNlY29uZGFyeS1jb2xvcjogI0Y1RjZGODtcXG4gIC0tZGFyay1ncmV5OiAjMkYzNDM3O1xcbiAgLS1saWdodC1ncmV5OiAjOEQ4RThGO1xcbiAgLS1ib3JkZXItZ3JleTogI0NDQ0VEMTtcXG5cXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gIGNvbG9yOiB2YXIoLS1kYXJrLWdyZXkpO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGhlaWdodDogMTAwdmg7XFxuXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzNTBweCAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDgycHggMWZyO1xcbn1cXG5cXG5hLCBidXR0b24ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxufVxcblxcbmhlYWRlciB7XFxuICBncmlkLWNvbHVtbjogc3BhbiAyO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgaGVpZ2h0OiAxMDAlO1xcblxcbiAgcGFkZGluZy1pbmxpbmU6IDIwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuaGVhZGVyID4gKiB7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5sb2dvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxNXB4O1xcbn1cXG5cXG4ubG9nbyBzcGFuIHtcXG4gIGZvbnQtZmFtaWx5OiAnUm9ja25Sb2xsIE9uZScsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDMycHg7XFxuICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xcbn1cXG5cXG5uYXYge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG4gIHBhZGRpbmc6IDE1cHggMzBweCAwIDMwcHg7XFxuICBmb250LXdlaWdodDogNTAwO1xcblxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogbWluLWNvbnRlbnQgMWZyIDUwcHg7XFxufVxcblxcbm5hdiB1bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbm5hdiB1bC5kZWZhdWx0LXByb2plY3RzIHtcXG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xcbn1cXG5cXG5uYXYgdWwudXNlci1kZWZpbmVkLXByb2plY3RzIHtcXG4gIHBhZGRpbmctdG9wOiAxNXB4O1xcbn1cXG5cXG5uYXYgbGkgYSB7XFxuICBwYWRkaW5nOiAxNHB4IDE2cHg7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxNXB4O1xcbn1cXG5cXG5uYXYgbGkgYTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTRlNmVkO1xcbn1cXG5cXG5uYXYgbGkgYSAuaWNvbiB7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICBcXG59XFxuXFxuLmljb24uYWxsIHtcXG4gIGZpbHRlcjogYnJpZ2h0bmVzcygwKSBzYXR1cmF0ZSgxMDAlKSBpbnZlcnQoNjElKSBzZXBpYSgxNCUpIHNhdHVyYXRlKDM1MzIlKSBodWUtcm90YXRlKDE5NWRlZykgYnJpZ2h0bmVzcygxMDMlKSBjb250cmFzdCgxMDElKTs7XFxufVxcblxcbi5pY29uLnRvZGF5IHtcXG4gIGZpbHRlcjogYnJpZ2h0bmVzcygwKSBzYXR1cmF0ZSgxMDAlKSBpbnZlcnQoNzAlKSBzZXBpYSg0OCUpIHNhdHVyYXRlKDc2MSUpIGh1ZS1yb3RhdGUoMzE3ZGVnKSBicmlnaHRuZXNzKDEwMCUpIGNvbnRyYXN0KDEwMSUpO1xcbn1cXG5cXG4uaWNvbi51cGNvbWluZyB7XFxuICBmaWx0ZXI6IGJyaWdodG5lc3MoMCkgc2F0dXJhdGUoMTAwJSkgaW52ZXJ0KDgzJSkgc2VwaWEoMTIlKSBzYXR1cmF0ZSgyMTg3JSkgaHVlLXJvdGF0ZSg2OWRlZykgYnJpZ2h0bmVzcygxMDMlKSBjb250cmFzdCgxMDElKTtcXG59XFxuXFxubmF2IGxpIGEgLnRhc2stdG90YWwge1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBjb2xvcjogdmFyKC0tbGlnaHQtZ3JleSk7XFxufVxcblxcbi5uYXYtZm9vdGVyIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItZ3JleSk7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG5idXR0b24uYWRkLWJ0biB7XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB1bnNldDtcXG4gIGNvbG9yOiB2YXIoLS1kYXJrLWdyZXkpO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5pbWcuYWRkIHtcXG4gIGhlaWdodDogMThweDtcXG4gIGZpbHRlcjogaW52ZXJ0KDE3JSkgc2VwaWEoMTElKSBzYXR1cmF0ZSg1MTklKSBodWUtcm90YXRlKDE1OWRlZykgYnJpZ2h0bmVzcyg5MCUpIGNvbnRyYXN0KDg2JSk7IC8qIG1hdGNoIGRhcmstZ3JleSAqL1xcbn1cXG5cXG5idXR0b24uYWRkLWJ0bjpob3ZlciB7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcblxcbmJ1dHRvbi5hZGQtYnRuOmhvdmVyIGltZy5hZGQge1xcbiAgZmlsdGVyOiBub25lO1xcbn1cXG5cXG5tYWluIHtcXG4gIHBhZGRpbmc6IDU1cHg7XFxufVxcblxcbi5wcm9qZWN0LWRldGFpbHMgLmhlYWRlci1jb250YWluZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IG1pbi1jb250ZW50O1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5lbGxpcHNpcy1tZW51IHtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGhlaWdodDogMzBweDsgIFxcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZWxsaXBzaXMtbWVudTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUNFRUYzO1xcbn1cXG5cXG4uZHJvcGRvd24ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAxMDAlO1xcbiAgbGVmdDogY2FsYygxMDAlIC0gNDBweCk7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgYm94LXNoYWRvdzogMnB4IDJweCAxMHB4ICMwMDAwMDAyNTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWluLXdpZHRoOiAxMjVweDtcXG59XFxuXFxuLmRyb3Bkb3duLW9wdGlvbiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBwYWRkaW5nOiAxNHB4IDIwcHg7XFxufVxcblxcbi5kcm9wZG93bi1vcHRpb246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VDRUVGMztcXG59XFxuXFxuLmRyb3Bkb3duLW9wdGlvbi5lZGl0OjptYXJrZXIge1xcbiAgY29udGVudDogdXJsKCcuL2Fzc2V0cy9wZW5jaWwuc3ZnJyk7XFxufVxcblxcbi5kcm9wZG93bi1vcHRpb24uZGVsZXRlOjptYXJrZXIge1xcbiAgY29udGVudDogdXJsKCcuL2Fzc2V0cy90cmFzaC5zdmcnKTtcXG59XFxuXFxuLmRyb3Bkb3duLW9wdGlvbi5kZWxldGUge1xcbiAgY29sb3I6ICNGRjQ3NDc7XFxufVxcblxcbi5kcm9wZG93bi1vcHRpb24uZGFuZ2VyIGltZyB7XFxuICBmaWx0ZXI6IGJyaWdodG5lc3MoMCkgc2F0dXJhdGUoMTAwJSkgaW52ZXJ0KDUyJSkgc2VwaWEoNTAlKSBzYXR1cmF0ZSg3NDkzJSkgaHVlLXJvdGF0ZSgzMzZkZWcpIGJyaWdodG5lc3MoMTA3JSkgY29udHJhc3QoMTAzJSk7XFxufVxcblxcbmlucHV0LnRpdGxlIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBmb250LXNpemU6IDMycHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1swXS51c2VbMV0hLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1swXS51c2VbMV0hLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IGFjY291bnRGYWN0b3J5ID0gKCkgPT4ge1xuICBsZXQgcHJvamVjdHMgPSBbXTtcblxuICBjb25zdCBwcm9qZWN0TGlzdCA9ICgpID0+IFsuLi5wcm9qZWN0c107XG4gIGNvbnN0IGFkZFByb2plY3QgPSAocHJvamVjdCkgPT4gcHJvamVjdHMucHVzaChwcm9qZWN0KTtcbiAgY29uc3QgcmVtb3ZlUHJvamVjdCA9IChwcm9qZWN0SWQpID0+IHtcbiAgICBwcm9qZWN0cyA9IHByb2plY3RzLmZpbHRlcigocHJvamVjdCkgPT4gcHJvamVjdC5pZCAhPT0gcHJvamVjdElkKTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIHByb2plY3RMaXN0LFxuICAgIGFkZFByb2plY3QsXG4gICAgcmVtb3ZlUHJvamVjdCxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGFjY291bnRGYWN0b3J5O1xuIiwiaW1wb3J0IGRyb3Bkb3duIGZyb20gJy4vZHJvcGRvd24nO1xuXG5jb25zdCByZWN0YW5nbGVTdmcgPSByZXF1aXJlKCcuL2Fzc2V0cy9yZWN0YW5nbGUuc3ZnJyk7XG5jb25zdCBlbGxpcHNpc1N2ZyA9IHJlcXVpcmUoJy4vYXNzZXRzL2VsbGlwc2lzLnN2ZycpO1xuXG5jb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xuY29uc3QgdXNlckRlZmluZWRQcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ25hdiB1bC51c2VyLWRlZmluZWQtcHJvamVjdHMnKTtcblxuY29uc3QgZm9ybWF0TmF2VGl0bGUgPSAoaW5wdXRWYWx1ZSkgPT4gaW5wdXRWYWx1ZSB8fCAnTmV3IFByb2plY3QnO1xuXG5mdW5jdGlvbiBibHVyS2V5RXZlbnRIYW5kbGVyKGV2ZW50KSB7XG4gIGlmIChldmVudC5jb2RlID09PSAnRW50ZXInKSB7XG4gICAgdGhpcy5ibHVyKCk7XG4gIH1cbn1cblxuY29uc3QgcmVtb3ZlUHJvamVjdCA9IChwcm9qZWN0KSA9PiB7XG4gIGNvbnNvbGUubG9nKCdyZW1vdmUgcHJvamVjdCcpO1xuICAvLyByZW1vdmVQcm9qZWN0TmF2SXRlbShwcm9qZWN0KTtcbiAgLy8gcmVuZGVyUHJvamVjdFZpZXcocHJvamVjdCk7XG4gIC8vIHJlbW92ZSBwcm9qZWN0IGZyb20gYWNjb3VudCAuLi4gP1xufTtcblxuY29uc3QgdXBkYXRlUHJvamVjdFRpdGxlID0gKHRpdGxlSW5wdXQsIHByb2plY3QpID0+IHtcbiAgY29uc3QgbmF2SXRlbVRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgbmF2IGxpI3Byb2plY3QtJHtwcm9qZWN0LmlkfSBzcGFuLnRpdGxlYCk7XG4gIG5hdkl0ZW1UaXRsZS50ZXh0Q29udGVudCA9IGZvcm1hdE5hdlRpdGxlKHRpdGxlSW5wdXQudmFsdWUpO1xuICBwcm9qZWN0LnRpdGxlID0gdGl0bGVJbnB1dC52YWx1ZTtcbn07XG5cbmNvbnN0IHJlbmRlclByb2plY3RWaWV3ID0gKHByb2plY3QpID0+IHtcbiAgY29uc3QgcHJvamVjdERldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgaGVhZGVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBjb25zdCBlbGxpcHNpc01lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcblxuICBwcm9qZWN0RGV0YWlscy5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWRldGFpbHMnKTtcbiAgaGVhZGVyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlci1jb250YWluZXInKTtcblxuICB0aXRsZUlucHV0LmNsYXNzTGlzdC5hZGQoJ3RpdGxlJyk7XG4gIHRpdGxlSW5wdXQucGxhY2Vob2xkZXIgPSAnTmV3IFByb2plY3QnO1xuICB0aXRsZUlucHV0LnZhbHVlID0gcHJvamVjdC50aXRsZTtcblxuICB0aXRsZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3Vzb3V0JywgKCkgPT4gdXBkYXRlUHJvamVjdFRpdGxlKHRpdGxlSW5wdXQsIHByb2plY3QpKTtcbiAgdGl0bGVJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIGJsdXJLZXlFdmVudEhhbmRsZXIpO1xuXG4gIGVsbGlwc2lzTWVudS5jbGFzc0xpc3QuYWRkKCdlbGxpcHNpcy1tZW51Jyk7XG4gIGVsbGlwc2lzTWVudS5zcmMgPSBlbGxpcHNpc1N2ZztcblxuICBjb25zdCBlbGxpcHNpc09wdGlvbnMgPSBbXG4gICAge1xuICAgICAgdGV4dDogJ1JlbmFtZScsIGljb246ICdlZGl0JywgYWN0aW9uOiAoKSA9PiB0aXRsZUlucHV0LmZvY3VzKCksXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiAnRGVsZXRlJywgaWNvbjogJ2RlbGV0ZScsIGFjdGlvbjogKCkgPT4gcmVtb3ZlUHJvamVjdChwcm9qZWN0KSxcbiAgICB9LFxuICBdO1xuXG4gIGVsbGlwc2lzTWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4gZHJvcGRvd24ub3BlbihldmVudCwgZWxsaXBzaXNPcHRpb25zLCBlbGxpcHNpc01lbnUpKTtcblxuICBoZWFkZXJDb250YWluZXIuYXBwZW5kKHRpdGxlSW5wdXQsIGVsbGlwc2lzTWVudSk7XG4gIHByb2plY3REZXRhaWxzLmFwcGVuZENoaWxkKGhlYWRlckNvbnRhaW5lcik7XG4gIG1haW4ucmVwbGFjZUNoaWxkKHByb2plY3REZXRhaWxzLCBtYWluLnF1ZXJ5U2VsZWN0b3IoJ21haW4gPiAqJykpO1xuXG4gIGlmICghcHJvamVjdC50aXRsZSkge1xuICAgIHRpdGxlSW5wdXQuZm9jdXMoKTtcbiAgfVxufTtcblxuY29uc3QgYWRkUHJvamVjdE5hdkl0ZW0gPSAocHJvamVjdCkgPT4ge1xuICBpZiAoIXVzZXJEZWZpbmVkUHJvamVjdHMuaGFzQ2hpbGROb2RlcygpKSB7XG4gICAgdXNlckRlZmluZWRQcm9qZWN0cy5zdHlsZS5ib3JkZXJUb3AgPSAnMXB4IHNvbGlkIHZhcigtLWJvcmRlci1ncmV5KSc7XG4gIH1cblxuICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGxpLmlkID0gYHByb2plY3QtJHtwcm9qZWN0LmlkfWA7XG5cbiAgY29uc3QgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgYS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0Jyk7XG4gIGEuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiByZW5kZXJQcm9qZWN0Vmlldyhwcm9qZWN0KSk7XG5cbiAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBpY29uLmNsYXNzTGlzdC5hZGQoJ2ljb24nLCAnY3VzdG9tJyk7XG4gIGljb24uc3JjID0gcmVjdGFuZ2xlU3ZnO1xuICBpY29uLmFsdCA9ICdwcm9qZWN0IGljb24nO1xuXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICB0aXRsZS5jbGFzc0xpc3QuYWRkKCd0aXRsZScpO1xuICB0aXRsZS50ZXh0Q29udGVudCA9IGZvcm1hdE5hdlRpdGxlKHByb2plY3QudGl0bGUpO1xuXG4gIGNvbnN0IHRhc2tUb3RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgdGFza1RvdGFsLmNsYXNzTGlzdC5hZGQoJ3Rhc2stdG90YWwnKTtcbiAgdGFza1RvdGFsLnRleHRDb250ZW50ID0gMDtcblxuICBhLmFwcGVuZChpY29uLCB0aXRsZSwgdGFza1RvdGFsKTtcbiAgbGkuYXBwZW5kQ2hpbGQoYSk7XG4gIHVzZXJEZWZpbmVkUHJvamVjdHMuYXBwZW5kQ2hpbGQobGkpO1xufTtcblxuY29uc3QgYWRkUHJvamVjdCA9IChwcm9qZWN0KSA9PiB7XG4gIGFkZFByb2plY3ROYXZJdGVtKHByb2plY3QpO1xuICByZW5kZXJQcm9qZWN0Vmlldyhwcm9qZWN0KTtcbn07XG5cbmNvbnN0IHNldEFkZFByb2plY3RFdmVudCA9IChldmVudCkgPT4ge1xuICBjb25zdCBhZGRQcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdi1mb290ZXIgLmFkZC1idG4nKTtcbiAgYWRkUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgYWRkUHJvamVjdCxcbiAgc2V0QWRkUHJvamVjdEV2ZW50LFxufTtcbiIsImNvbnN0IGNsb3NlT3BlbkRyb3Bkb3duID0gKGV2ZW50KSA9PiB7XG4gIGNvbnN0IGRyb3Bkb3duID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRyb3Bkb3duJyk7XG4gIGlmIChkcm9wZG93biAmJiBkcm9wZG93biAhPT0gZXZlbnQudGFyZ2V0ICYmICFkcm9wZG93bi5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG4gICAgZHJvcGRvd24ucmVtb3ZlKCk7XG4gIH1cbn07XG5cbigoKSA9PiB7XG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gIGJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZU9wZW5Ecm9wZG93bik7XG59KSgpO1xuXG5jb25zdCBkcm9wZG93bkFjdGlvbiA9IChhY3Rpb24sIGRyb3Bkb3duKSA9PiB7XG4gIGFjdGlvbigpO1xuICBkcm9wZG93bi5yZW1vdmUoKTtcbn07XG5cbmNvbnN0IG9wZW4gPSAoZXZlbnQsIG9wdGlvbnMsIGFkamFjZW50RWxlbWVudCkgPT4ge1xuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRyb3Bkb3duJykpIHtcbiAgICByZXR1cm47IC8vIGRlZmVyIHRvIGJvZHkgZXZlbnQgdG8gY2xvc2UgdGhlIG9wZW4gZHJvcGRvd25cbiAgfVxuXG4gIGNvbnN0IGRyb3Bkb3duTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkcm9wZG93bk1lbnUuY2xhc3NMaXN0LmFkZCgnZHJvcGRvd24nKTtcblxuICBjb25zdCBvcHRpb25MaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcblxuICBvcHRpb25zLmZvckVhY2goKG9wdGlvbikgPT4ge1xuICAgIGNvbnN0IGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcblxuICAgIGxpc3RJdGVtLmNsYXNzTGlzdC5hZGQoJ2Ryb3Bkb3duLW9wdGlvbicsIG9wdGlvbi5pY29uKTtcbiAgICBsaXN0SXRlbS50ZXh0Q29udGVudCA9IG9wdGlvbi50ZXh0O1xuICAgIGxpc3RJdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gZHJvcGRvd25BY3Rpb24ob3B0aW9uLmFjdGlvbiwgZHJvcGRvd25NZW51KSk7XG5cbiAgICBvcHRpb25MaXN0LmFwcGVuZChsaXN0SXRlbSk7XG4gIH0pO1xuXG4gIGRyb3Bkb3duTWVudS5hcHBlbmQob3B0aW9uTGlzdCk7XG4gIGFkamFjZW50RWxlbWVudC5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2FmdGVyZW5kJywgZHJvcGRvd25NZW51KTtcblxuICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgb3Blbixcbn07XG4iLCJpbXBvcnQgZG9tVXRpbCBmcm9tICcuL2RvbS11dGlsJztcbmltcG9ydCBhY2NvdW50RmFjdG9yeSBmcm9tICcuL2FjY291bnQnO1xuaW1wb3J0IHByb2plY3RGYWN0b3J5IGZyb20gJy4vcHJvamVjdCc7XG5pbXBvcnQgdG9kb0ZhY3RvcnkgZnJvbSAnLi90b2RvJztcblxuKCgpID0+IHtcbiAgY29uc3QgYWNjb3VudCA9IGFjY291bnRGYWN0b3J5KCk7XG5cbiAgY29uc3QgYWRkUHJvamVjdCA9ICgpID0+IHtcbiAgICBjb25zdCBuZXdQcm9qZWN0ID0gcHJvamVjdEZhY3RvcnkoKTtcblxuICAgIGFjY291bnQuYWRkUHJvamVjdChuZXdQcm9qZWN0KTtcbiAgICBkb21VdGlsLmFkZFByb2plY3QobmV3UHJvamVjdCk7XG4gIH07XG5cbiAgY29uc3QgYWRkVG9kbyA9IChwcm9qZWN0SWQpID0+IHtcbiAgICBjb25zdCBuZXdUb2RvID0gdG9kb0ZhY3RvcnkoJ05ldyBUYXNrJyk7XG4gICAgY29uc3QgcHJvamVjdCA9IGFjY291bnQucHJvamVjdExpc3QoKS5maWx0ZXIoKHByb2opID0+IHByb2ouaWQgPT09IHByb2plY3RJZCk7XG5cbiAgICBwcm9qZWN0LmFkZFRvZG8obmV3VG9kbyk7XG4gICAgZG9tVXRpbC5hZGRUb2RvKG5ld1RvZG8uaWQpO1xuICB9O1xuXG4gIGRvbVV0aWwuc2V0QWRkUHJvamVjdEV2ZW50KGFkZFByb2plY3QpO1xuICAvLyBkb21VdGlsLnNldEFkZFRvZG9FdmVudChhZGRQcm9qZWN0KTtcbn0pKCk7XG4iLCJpbXBvcnQgc2VxdWVuY2VGYWN0b3J5IGZyb20gJy4vc2VxdWVuY2UnO1xuXG5jb25zdCBpZFNlcXVlbmNlID0gc2VxdWVuY2VGYWN0b3J5KCk7XG5cbmNvbnN0IHByb2plY3RGYWN0b3J5ID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgaW5pdGlhbFRvZG9zKSA9PiB7XG4gIGNvbnN0IGlkID0gaWRTZXF1ZW5jZS5nZXROZXh0KCk7XG4gIGxldCB0b2RvcyA9IGluaXRpYWxUb2RvcyB8fCBbXTtcblxuICBjb25zdCB0b2RvTGlzdCA9ICgpID0+IFsuLi50b2Rvc107XG4gIGNvbnN0IGFkZFRvZG8gPSAodG9kbykgPT4gdG9kb3MucHVzaCh0b2RvKTtcbiAgY29uc3QgcmVtb3ZlVG9kbyA9ICh0b2RvSWQpID0+IHtcbiAgICB0b2RvcyA9IHRvZG9zLmZpbHRlcigodG9kbykgPT4gdG9kby5pZCAhPT0gdG9kb0lkKTtcbiAgfTtcbiAgY29uc3QgY2xlYXJUb2RvcyA9ICgpID0+IHtcbiAgICB0b2RvcyA9IFtdO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgZ2V0IGlkKCkge1xuICAgICAgcmV0dXJuIGlkO1xuICAgIH0sXG4gICAgdGl0bGU6IHRpdGxlIHx8ICcnLFxuICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbiB8fCAnJyxcbiAgICB0b2RvTGlzdCxcbiAgICBhZGRUb2RvLFxuICAgIHJlbW92ZVRvZG8sXG4gICAgY2xlYXJUb2RvcyxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHByb2plY3RGYWN0b3J5O1xuIiwiY29uc3QgREVGQVVMVF9JTklUSUFMID0gMTAwMDtcbmNvbnN0IERFRkFVTFRfSU5DUkVNRU5UID0gMTtcblxuY29uc3Qgc2VxdWVuY2VGYWN0b3J5ID0gKGluaXRWYWwsIGluY3JWYWwpID0+IHtcbiAgbGV0IHZhbHVlID0gaW5pdFZhbCB8fCBERUZBVUxUX0lOSVRJQUw7XG4gIGNvbnN0IGluY3JlbWVudCA9IGluY3JWYWwgfHwgREVGQVVMVF9JTkNSRU1FTlQ7XG5cbiAgY29uc3QgZ2V0TmV4dCA9ICgpID0+IHtcbiAgICBjb25zdCB0ZW1wVmFsID0gdmFsdWU7XG4gICAgdmFsdWUgKz0gaW5jcmVtZW50O1xuICAgIHJldHVybiB0ZW1wVmFsO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgZ2V0TmV4dCxcbiAgICBpbmNyZW1lbnQsXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzZXF1ZW5jZUZhY3Rvcnk7XG4iLCJpbXBvcnQgc2VxdWVuY2VGYWN0b3J5IGZyb20gJy4vc2VxdWVuY2UnO1xuXG5jb25zdCBQUklPUklUWSA9IHtcbiAgbm9uZTogMCxcbiAgbG93OiAxLFxuICBtZWRpdW06IDIsXG4gIGhpZ2g6IDMsXG59O1xuXG5jb25zdCBTVEFUVVMgPSB7XG4gIGluY29tcGxldGU6IDAsXG4gIGNvbXBsZXRlOiAxLFxufTtcblxuY29uc3QgaWRTZXF1ZW5jZSA9IHNlcXVlbmNlRmFjdG9yeSgpO1xuXG5jb25zdCB0b2RvRmFjdG9yeSA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBzdGF0dXMpID0+ICh7XG4gIGdldCBpZCgpIHtcbiAgICByZXR1cm4gaWRTZXF1ZW5jZS5nZXROZXh0KCk7XG4gIH0sXG4gIHRpdGxlLFxuICBkZXNjcmlwdGlvbixcbiAgZHVlRGF0ZSxcbiAgcHJpb3JpdHk6IHByaW9yaXR5IHx8IFBSSU9SSVRZLm5vbmUsXG4gIHN0YXR1czogc3RhdHVzIHx8IFNUQVRVUy5pbmNvbXBsZXRlLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHRvZG9GYWN0b3J5O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9