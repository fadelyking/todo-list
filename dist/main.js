/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

body {
	height: 100vh;
}

.container {
	height: 100%;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(6, 1fr);
}

.header {
	grid-row: 1/2;
	grid-column: 1/-1;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 2rem;
	font-family: "Roboto";
	font-weight: 500;
}

.sidebar {
	grid-row: 2/-1;
	grid-column: 1/2;
	display: flex;
	background-color: rgb(0, 149, 255);
}

.projects-list {
		padding: 7px;
	border-radius: 10px;
}

.project-list-header{
	font-family: "Roboto";
    font-size: 1.5rem;
	padding: 5px;
}

.project-list-header:hover {
	cursor: pointer;
	background-color: #ccc;
	padding: 5px;
	border-radius: 10px;
}



.main {
	display: grid;
	margin: 10px;
	grid-template-columns: repeat(8, 1fr);
	grid-column: 2/-1;
}

#hide {
	display: none;
}

.hide {
	display: none;
}


.project {
	display: flex;
	justify-content: space-between;
	gap: 20px;
	font-family: "Roboto";
	align-items: center;
	margin-top: 10px;
    font-size: 0.900rem;
}
.add-task {
	grid-column: 1/5;
	align-items: center;
	font-family: "Roboto";
    font-size: 1.2rem;
}

.task-list > li {
	grid-column: 4/8;
}

h4 {
	padding: 7px;
	border-radius: 10px;
}

h4:hover {
	cursor: pointer;
	background-color: #ccc;
}

.active {
	background-color: #ccc;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;;;CAGC;;AAED;;;;;;;;;;;;;CAaC,SAAS;CACT,UAAU;CACV,SAAS;CACT,eAAe;CACf,aAAa;CACb,wBAAwB;AACzB;AACA,gDAAgD;AAChD;;CAEC,cAAc;AACf;AACA;CACC,cAAc;AACf;AACA;CACC,gBAAgB;AACjB;AACA;CACC,YAAY;AACb;AACA;;CAEC,WAAW;CACX,aAAa;AACd;AACA;CACC,yBAAyB;CACzB,iBAAiB;AAClB;;AAEA;CACC,aAAa;AACd;;AAEA;CACC,YAAY;IACT,aAAa;IACb,qCAAqC;IACrC,kCAAkC;AACtC;;AAEA;CACC,aAAa;CACb,iBAAiB;CACjB,aAAa;CACb,uBAAuB;CACvB,mBAAmB;CACnB,eAAe;CACf,qBAAqB;CACrB,gBAAgB;AACjB;;AAEA;CACC,cAAc;CACd,gBAAgB;CAChB,aAAa;CACb,kCAAkC;AACnC;;AAEA;EACE,YAAY;CACb,mBAAmB;AACpB;;AAEA;CACC,qBAAqB;IAClB,iBAAiB;CACpB,YAAY;AACb;;AAEA;CACC,eAAe;CACf,sBAAsB;CACtB,YAAY;CACZ,mBAAmB;AACpB;;;;AAIA;CACC,aAAa;CACb,YAAY;CACZ,qCAAqC;CACrC,iBAAiB;AAClB;;AAEA;CACC,aAAa;AACd;;AAEA;CACC,aAAa;AACd;;;AAGA;CACC,aAAa;CACb,8BAA8B;CAC9B,SAAS;CACT,qBAAqB;CACrB,mBAAmB;CACnB,gBAAgB;IACb,mBAAmB;AACvB;AACA;CACC,gBAAgB;CAChB,mBAAmB;CACnB,qBAAqB;IAClB,iBAAiB;AACrB;;AAEA;CACC,gBAAgB;AACjB;;AAEA;CACC,YAAY;CACZ,mBAAmB;AACpB;;AAEA;CACC,eAAe;CACf,sBAAsB;AACvB;;AAEA;CACC,sBAAsB;AACvB","sourcesContent":["/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\nbody {\n\theight: 100vh;\n}\n\n.container {\n\theight: 100%;\n    display: grid;\n    grid-template-columns: repeat(6, 1fr);\n    grid-template-rows: repeat(6, 1fr);\n}\n\n.header {\n\tgrid-row: 1/2;\n\tgrid-column: 1/-1;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tfont-size: 2rem;\n\tfont-family: \"Roboto\";\n\tfont-weight: 500;\n}\n\n.sidebar {\n\tgrid-row: 2/-1;\n\tgrid-column: 1/2;\n\tdisplay: flex;\n\tbackground-color: rgb(0, 149, 255);\n}\n\n.projects-list {\n\t\tpadding: 7px;\n\tborder-radius: 10px;\n}\n\n.project-list-header{\n\tfont-family: \"Roboto\";\n    font-size: 1.5rem;\n\tpadding: 5px;\n}\n\n.project-list-header:hover {\n\tcursor: pointer;\n\tbackground-color: #ccc;\n\tpadding: 5px;\n\tborder-radius: 10px;\n}\n\n\n\n.main {\n\tdisplay: grid;\n\tmargin: 10px;\n\tgrid-template-columns: repeat(8, 1fr);\n\tgrid-column: 2/-1;\n}\n\n#hide {\n\tdisplay: none;\n}\n\n.hide {\n\tdisplay: none;\n}\n\n\n.project {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\tgap: 20px;\n\tfont-family: \"Roboto\";\n\talign-items: center;\n\tmargin-top: 10px;\n    font-size: 0.900rem;\n}\n.add-task {\n\tgrid-column: 1/5;\n\talign-items: center;\n\tfont-family: \"Roboto\";\n    font-size: 1.2rem;\n}\n\n.task-list > li {\n\tgrid-column: 4/8;\n}\n\nh4 {\n\tpadding: 7px;\n\tborder-radius: 10px;\n}\n\nh4:hover {\n\tcursor: pointer;\n\tbackground-color: #ccc;\n}\n\n.active {\n\tbackground-color: #ccc;\n}\n"],"sourceRoot":""}]);
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/addproject.js":
/*!***************************!*\
  !*** ./src/addproject.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Project: () => (/* binding */ Project),
/* harmony export */   activeID: () => (/* binding */ activeID),
/* harmony export */   projectMaker: () => (/* binding */ projectMaker),
/* harmony export */   projects: () => (/* binding */ projects),
/* harmony export */   projectsList: () => (/* binding */ projectsList)
/* harmony export */ });
/* harmony import */ var _addtask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addtask */ "./src/addtask.js");


const projects = [];
let activeID = "";

class Project {
	constructor(title, id) {
		this.title = title;
		this.id = id;
		this.tasks = [];
	}

	addTask(newTask) {
		this.tasks.push(newTask);
	}
}

const projectsList = document.querySelector(".projects-list");
const projectsListHeader = document.querySelector(".project-list-header");
const newProjectInput = document.createElement("input");
const addProjectBtn = document.createElement("button");

// Add a new Object, and then push it into the array
addProjectBtn.addEventListener("click", () => {
	let i = projects.length + 1;
	const newProject = new Project(`${newProjectInput.value}`, i);
	projects.push(newProject);

	//Unhide the header
	projectsListHeader.setAttribute("id", "none");

	//Hide input field and button
	newProjectInput.setAttribute("id", "hide");
	addProjectBtn.setAttribute("id", "hide");
});

function projectMaker() {
	function writeNewProjectName() {
		projectsListHeader.addEventListener("click", (e) => {
			//Hide the header
			projectsListHeader.setAttribute("id", "hide");

			// Reveal input field and a submit button on click
			newProjectInput.removeAttribute("id");
			addProjectBtn.removeAttribute("id");
			newProjectInput.classList.toggle("project-input");
			newProjectInput.setAttribute("type", "text");
			addProjectBtn.classList.toggle("project-submit");
			addProjectBtn.textContent = "Add";

			//Append Projects
			projectsList.appendChild(newProjectInput);
			projectsList.appendChild(addProjectBtn);
		});
	}

	// Loop over array and display contents
	function displayArrayContents() {
		addProjectBtn.addEventListener("click", () => {
			// Create a list item with h4 tag inside
			const proj = document.createElement("li");
			const projText = document.createElement("h4");
			// Add the class "project" to each project
			for (let i = 0; i < projects.length; i++) {
				proj.classList.add("project");

				projText.textContent = projects[i].title;
			}
			projectsList.appendChild(proj);
			proj.appendChild(projText);

			// Set a data attribute to each project based on its location in the array
			proj.setAttribute("data-number", `${projects.length}`);

			// Add a button to remove array items
			function deleteEditArrayContents() {
				const proj = document.querySelectorAll(".project");
				const deleteBtn = document.createElement("button");
				deleteBtn.classList.toggle("delete-btn");
				const editBtn = document.createElement("button");
				editBtn.classList.toggle("edit-btn");
				editBtn.textContent = "Edit";
				deleteBtn.textContent = "Delete";

				// Add the button to each project title
				for (let pro of proj) {
					pro.appendChild(editBtn);
					pro.appendChild(deleteBtn);
				}

				editBtn.addEventListener("click", (e) => {
					const editProjectInput = document.createElement("input");
					editProjectInput.classList.toggle("edit-project");
					editProjectInput.setAttribute(
						"value",
						`${e.target.parentNode.firstChild.textContent}`
					);
					const editProjectBtn = document.createElement("button");
					editProjectBtn.classList.toggle("confirm-edit");
					editProjectBtn.textContent = "Edit";
					e.target.parentNode.firstChild.classList.toggle("hide");
					e.target.parentNode.firstChild.nextSibling.classList.toggle("hide");
					e.target.parentNode.firstChild.nextSibling.nextSibling.classList.toggle("hide");
					e.target.parentNode.appendChild(editProjectInput);
					e.target.parentNode.appendChild(editProjectBtn);

					editProjectBtn.addEventListener("click", (e) => {
						const findProjectTask = projects.find(
							(object) => object.title === projText.textContent
						);

						findProjectTask.title = `${editProjectInput.value}`;
						projText.textContent = `${editProjectInput.value}`;
						e.target.parentNode.firstChild.classList.toggle("hide");
						e.target.parentNode.firstChild.nextSibling.classList.toggle("hide");
						e.target.parentNode.firstChild.nextSibling.nextSibling.classList.toggle(
							"hide"
						);
						activeID = projText.parentNode.getAttribute("data-number");

						editProjectInput.remove();
						editProjectBtn.remove();
					});
				});

				deleteBtn.addEventListener("click", (e) => {
					// Find the project index number in the array
					const findProject = projects.findIndex(
						(object) => object.title === projText.textContent
					);

					console.log(findProject);

					// Delete the object from the array and from the DOM
					projects.splice(findProject, 1);
					deleteBtn.parentNode.remove();
					console.log(projects);
				});

				// Set staticValue to match activeID value
				let staticValue = activeID;

				projText.parentNode.addEventListener("click", (e) => {
					const h4 = document.querySelectorAll("h4");
					// On click, add the class active to the object that was clicked, and remove it from any other object
					for (let element of h4) {
						element.classList.remove("active");
						e.target.classList.add("active");
					}

					const findProject = projects.findIndex(
						(object) => object.title === projText.textContent
					);

					activeID = findProject + 1;
					console.log(projects);

					// Clear the DOM and then populate it again with the tasks of each project ID number
					if (staticValue !== activeID && 1 <= _addtask__WEBPACK_IMPORTED_MODULE_0__.tasks.length) {
						const listItem = document.querySelectorAll(".list-item");
						for (let item of listItem) {
							item.remove();
						}

						const findProjectTask = projects.find(
							(object) => object.title === projText.textContent
						);

						if (findProjectTask === undefined) {
							return;
						} else {
							for (let i = 0; i < parseInt(findProjectTask.tasks.length); i++) {
								const listItem = document.createElement("li");
								listItem.classList.add("list-item");
								listItem.textContent = `${findProjectTask.tasks[i].title}, ${findProjectTask.tasks[i].description}, ${findProjectTask.tasks[i].date}, ${findProjectTask.tasks[i].priority}`;
								_addtask__WEBPACK_IMPORTED_MODULE_0__.taskList.appendChild(listItem);
							}
						}
					}
				});
			}

			deleteEditArrayContents();
		});
	}

	writeNewProjectName();
	displayArrayContents();
}


/***/ }),

/***/ "./src/addtask.js":
/*!************************!*\
  !*** ./src/addtask.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Task: () => (/* binding */ Task),
/* harmony export */   taskList: () => (/* binding */ taskList),
/* harmony export */   taskMaker: () => (/* binding */ taskMaker),
/* harmony export */   tasks: () => (/* binding */ tasks)
/* harmony export */ });
/* harmony import */ var _addproject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addproject */ "./src/addproject.js");


class Task {
	constructor(title, description, date, priority) {
		(this.title = title),
			(this.description = description),
			(this.date = date),
			(this.priority = priority);
	}
}

const addTask = document.querySelector(".add-task");
const taskListHeader = document.querySelector("h3");
const taskList = document.querySelector(".task-list");
const form = document.createElement("form");
form.setAttribute("method", "post");
form.setAttribute("id", "hide");

const fieldset = document.createElement("fieldset");
fieldset.textContent = "Fill the fields below";

const taskTitle = document.createElement("input");
taskTitle.setAttribute("type", "text");
taskTitle.setAttribute("name", "Title");
taskTitle.setAttribute("placeholder", "Task Title");

const taskDescription = document.createElement("input");
taskDescription.setAttribute("type", "text");
taskDescription.setAttribute("name", "Description");
taskDescription.setAttribute("placeholder", "Task Description");

const taskDate = document.createElement("input");
taskDate.setAttribute("type", "date");
taskDate.setAttribute("name", "Date");

const taskPriority = document.createElement("input");
taskPriority.setAttribute("type", "range");
taskPriority.setAttribute("name", "Priority");
taskPriority.setAttribute("placeholder", "Task Priority");

const submitBtn = document.createElement("input");
submitBtn.setAttribute("type", "submit");
submitBtn.setAttribute("value", "Submit");

addTask.appendChild(form);
form.appendChild(fieldset);
form.appendChild(taskTitle);
form.appendChild(taskDescription);
form.appendChild(taskDate);
form.appendChild(taskPriority);
form.appendChild(submitBtn);

const tasks = [];

function taskMaker() {
	function writeNewTaskName() {
		taskListHeader.addEventListener("click", (e) => {
			form.setAttribute("id", "unhide");
		});

		submitBtn.addEventListener("click", (e) => {
			e.preventDefault();
			form.setAttribute("id", "hide");

			const newTask = new Task(
				`${taskTitle.value}`,
				`${taskDescription.value}`,
				`${taskDate.value}`,
				`${taskPriority.value}`
			);

			tasks.push(newTask);
			if (_addproject__WEBPACK_IMPORTED_MODULE_0__.projects.length >= 1 && _addproject__WEBPACK_IMPORTED_MODULE_0__.activeID >= 1) {
				_addproject__WEBPACK_IMPORTED_MODULE_0__.projects[_addproject__WEBPACK_IMPORTED_MODULE_0__.activeID - 1].addTask(newTask);
				const ulList = document.createElement("ul");
				taskList.appendChild(ulList);
				const listItem = document.createElement("li");
				listItem.classList.add("list-item");
				listItem.setAttribute("task-title", `${newTask.title}`);
				const h3Tasks = document.createElement("h3");
				listItem.appendChild(h3Tasks);
				h3Tasks.textContent = `${newTask.title}, ${newTask.description}, ${newTask.date}, ${newTask.priority}`;
				ulList.appendChild(listItem);
				form.reset();
			} else {
				alert("Add and select project first!");
			}
		});
	}

	function deleteEditTask() {
		const listItem = document.querySelector(".task-list");
		const deleteBtn = document.createElement("button");
		deleteBtn.classList.toggle("delete-btn-tasks");
		deleteBtn.textContent = "Delete";
		const editBtn = document.createElement("button");
		editBtn.classList.toggle("edit-btn-tasks");
		editBtn.textContent = "Edit";

		for (let task of listItem.children) {
			task.appendChild(editBtn);
			task.appendChild(deleteBtn);
		}

		deleteBtn.addEventListener("click", (e) => {
			// Find the project index number in the array
			for (let i = 0; i < tasks.length; i++) {
				const findTask = tasks.findIndex(
					(object) =>
						object.title === e.target.parentNode.firstChild.getAttribute("task-title")
				);
				tasks.splice(findTask, 1);
				e.target.parentNode.remove();
			}
		});
	}

	writeNewTaskName();

	submitBtn.addEventListener("click", (e) => {
		deleteEditTask();
	});
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _addproject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addproject */ "./src/addproject.js");
/* harmony import */ var _addtask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addtask */ "./src/addtask.js");




(0,_addproject__WEBPACK_IMPORTED_MODULE_1__.projectMaker)();
(0,_addtask__WEBPACK_IMPORTED_MODULE_2__.taskMaker)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUN1QjtBQUNOOztBQUV0Qyx5REFBWTtBQUNaLG1EQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9hZGRwcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9hZGR0YXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC8gXG4gICB2Mi4wIHwgMjAxMTAxMjZcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXG4qL1xuXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxuYiwgdSwgaSwgY2VudGVyLFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xuXHRtYXJnaW46IDA7XG5cdHBhZGRpbmc6IDA7XG5cdGJvcmRlcjogMDtcblx0Zm9udC1zaXplOiAxMDAlO1xuXHRmb250OiBpbmhlcml0O1xuXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG59XG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLCBcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XG5cdGRpc3BsYXk6IGJsb2NrO1xufVxuYm9keSB7XG5cdGxpbmUtaGVpZ2h0OiAxO1xufVxub2wsIHVsIHtcblx0bGlzdC1zdHlsZTogbm9uZTtcbn1cbmJsb2NrcXVvdGUsIHEge1xuXHRxdW90ZXM6IG5vbmU7XG59XG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcbnE6YmVmb3JlLCBxOmFmdGVyIHtcblx0Y29udGVudDogJyc7XG5cdGNvbnRlbnQ6IG5vbmU7XG59XG50YWJsZSB7XG5cdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG5cdGJvcmRlci1zcGFjaW5nOiAwO1xufVxuXG5ib2R5IHtcblx0aGVpZ2h0OiAxMDB2aDtcbn1cblxuLmNvbnRhaW5lciB7XG5cdGhlaWdodDogMTAwJTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDYsIDFmcik7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNiwgMWZyKTtcbn1cblxuLmhlYWRlciB7XG5cdGdyaWQtcm93OiAxLzI7XG5cdGdyaWQtY29sdW1uOiAxLy0xO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0Zm9udC1zaXplOiAycmVtO1xuXHRmb250LWZhbWlseTogXCJSb2JvdG9cIjtcblx0Zm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLnNpZGViYXIge1xuXHRncmlkLXJvdzogMi8tMTtcblx0Z3JpZC1jb2x1bW46IDEvMjtcblx0ZGlzcGxheTogZmxleDtcblx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDE0OSwgMjU1KTtcbn1cblxuLnByb2plY3RzLWxpc3Qge1xuXHRcdHBhZGRpbmc6IDdweDtcblx0Ym9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLnByb2plY3QtbGlzdC1oZWFkZXJ7XG5cdGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuXHRwYWRkaW5nOiA1cHg7XG59XG5cbi5wcm9qZWN0LWxpc3QtaGVhZGVyOmhvdmVyIHtcblx0Y3Vyc29yOiBwb2ludGVyO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xuXHRwYWRkaW5nOiA1cHg7XG5cdGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cblxuXG4ubWFpbiB7XG5cdGRpc3BsYXk6IGdyaWQ7XG5cdG1hcmdpbjogMTBweDtcblx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoOCwgMWZyKTtcblx0Z3JpZC1jb2x1bW46IDIvLTE7XG59XG5cbiNoaWRlIHtcblx0ZGlzcGxheTogbm9uZTtcbn1cblxuLmhpZGUge1xuXHRkaXNwbGF5OiBub25lO1xufVxuXG5cbi5wcm9qZWN0IHtcblx0ZGlzcGxheTogZmxleDtcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRnYXA6IDIwcHg7XG5cdGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRtYXJnaW4tdG9wOiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMC45MDByZW07XG59XG4uYWRkLXRhc2sge1xuXHRncmlkLWNvbHVtbjogMS81O1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRmb250LWZhbWlseTogXCJSb2JvdG9cIjtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbn1cblxuLnRhc2stbGlzdCA+IGxpIHtcblx0Z3JpZC1jb2x1bW46IDQvODtcbn1cblxuaDQge1xuXHRwYWRkaW5nOiA3cHg7XG5cdGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbmg0OmhvdmVyIHtcblx0Y3Vyc29yOiBwb2ludGVyO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xufVxuXG4uYWN0aXZlIHtcblx0YmFja2dyb3VuZC1jb2xvcjogI2NjYztcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7O0NBR0M7O0FBRUQ7Ozs7Ozs7Ozs7Ozs7Q0FhQyxTQUFTO0NBQ1QsVUFBVTtDQUNWLFNBQVM7Q0FDVCxlQUFlO0NBQ2YsYUFBYTtDQUNiLHdCQUF3QjtBQUN6QjtBQUNBLGdEQUFnRDtBQUNoRDs7Q0FFQyxjQUFjO0FBQ2Y7QUFDQTtDQUNDLGNBQWM7QUFDZjtBQUNBO0NBQ0MsZ0JBQWdCO0FBQ2pCO0FBQ0E7Q0FDQyxZQUFZO0FBQ2I7QUFDQTs7Q0FFQyxXQUFXO0NBQ1gsYUFBYTtBQUNkO0FBQ0E7Q0FDQyx5QkFBeUI7Q0FDekIsaUJBQWlCO0FBQ2xCOztBQUVBO0NBQ0MsYUFBYTtBQUNkOztBQUVBO0NBQ0MsWUFBWTtJQUNULGFBQWE7SUFDYixxQ0FBcUM7SUFDckMsa0NBQWtDO0FBQ3RDOztBQUVBO0NBQ0MsYUFBYTtDQUNiLGlCQUFpQjtDQUNqQixhQUFhO0NBQ2IsdUJBQXVCO0NBQ3ZCLG1CQUFtQjtDQUNuQixlQUFlO0NBQ2YscUJBQXFCO0NBQ3JCLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLGNBQWM7Q0FDZCxnQkFBZ0I7Q0FDaEIsYUFBYTtDQUNiLGtDQUFrQztBQUNuQzs7QUFFQTtFQUNFLFlBQVk7Q0FDYixtQkFBbUI7QUFDcEI7O0FBRUE7Q0FDQyxxQkFBcUI7SUFDbEIsaUJBQWlCO0NBQ3BCLFlBQVk7QUFDYjs7QUFFQTtDQUNDLGVBQWU7Q0FDZixzQkFBc0I7Q0FDdEIsWUFBWTtDQUNaLG1CQUFtQjtBQUNwQjs7OztBQUlBO0NBQ0MsYUFBYTtDQUNiLFlBQVk7Q0FDWixxQ0FBcUM7Q0FDckMsaUJBQWlCO0FBQ2xCOztBQUVBO0NBQ0MsYUFBYTtBQUNkOztBQUVBO0NBQ0MsYUFBYTtBQUNkOzs7QUFHQTtDQUNDLGFBQWE7Q0FDYiw4QkFBOEI7Q0FDOUIsU0FBUztDQUNULHFCQUFxQjtDQUNyQixtQkFBbUI7Q0FDbkIsZ0JBQWdCO0lBQ2IsbUJBQW1CO0FBQ3ZCO0FBQ0E7Q0FDQyxnQkFBZ0I7Q0FDaEIsbUJBQW1CO0NBQ25CLHFCQUFxQjtJQUNsQixpQkFBaUI7QUFDckI7O0FBRUE7Q0FDQyxnQkFBZ0I7QUFDakI7O0FBRUE7Q0FDQyxZQUFZO0NBQ1osbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0MsZUFBZTtDQUNmLHNCQUFzQjtBQUN2Qjs7QUFFQTtDQUNDLHNCQUFzQjtBQUN2QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0LyBcXG4gICB2Mi4wIHwgMjAxMTAxMjZcXG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxcbiovXFxuXFxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxuYiwgdSwgaSwgY2VudGVyLFxcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIFxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgXFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRib3JkZXI6IDA7XFxuXFx0Zm9udC1zaXplOiAxMDAlO1xcblxcdGZvbnQ6IGluaGVyaXQ7XFxuXFx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgXFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG59XFxuYm9keSB7XFxuXFx0bGluZS1oZWlnaHQ6IDE7XFxufVxcbm9sLCB1bCB7XFxuXFx0bGlzdC1zdHlsZTogbm9uZTtcXG59XFxuYmxvY2txdW90ZSwgcSB7XFxuXFx0cXVvdGVzOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcXG5xOmJlZm9yZSwgcTphZnRlciB7XFxuXFx0Y29udGVudDogJyc7XFxuXFx0Y29udGVudDogbm9uZTtcXG59XFxudGFibGUge1xcblxcdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuXFx0Ym9yZGVyLXNwYWNpbmc6IDA7XFxufVxcblxcbmJvZHkge1xcblxcdGhlaWdodDogMTAwdmg7XFxufVxcblxcbi5jb250YWluZXIge1xcblxcdGhlaWdodDogMTAwJTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNiwgMWZyKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNiwgMWZyKTtcXG59XFxuXFxuLmhlYWRlciB7XFxuXFx0Z3JpZC1yb3c6IDEvMjtcXG5cXHRncmlkLWNvbHVtbjogMS8tMTtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0Zm9udC1zaXplOiAycmVtO1xcblxcdGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIjtcXG5cXHRmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4uc2lkZWJhciB7XFxuXFx0Z3JpZC1yb3c6IDIvLTE7XFxuXFx0Z3JpZC1jb2x1bW46IDEvMjtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAxNDksIDI1NSk7XFxufVxcblxcbi5wcm9qZWN0cy1saXN0IHtcXG5cXHRcXHRwYWRkaW5nOiA3cHg7XFxuXFx0Ym9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLnByb2plY3QtbGlzdC1oZWFkZXJ7XFxuXFx0Zm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG5cXHRwYWRkaW5nOiA1cHg7XFxufVxcblxcbi5wcm9qZWN0LWxpc3QtaGVhZGVyOmhvdmVyIHtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogI2NjYztcXG5cXHRwYWRkaW5nOiA1cHg7XFxuXFx0Ym9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuXFxuXFxuLm1haW4ge1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0bWFyZ2luOiAxMHB4O1xcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDgsIDFmcik7XFxuXFx0Z3JpZC1jb2x1bW46IDIvLTE7XFxufVxcblxcbiNoaWRlIHtcXG5cXHRkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uaGlkZSB7XFxuXFx0ZGlzcGxheTogbm9uZTtcXG59XFxuXFxuXFxuLnByb2plY3Qge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdGdhcDogMjBweDtcXG5cXHRmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICBmb250LXNpemU6IDAuOTAwcmVtO1xcbn1cXG4uYWRkLXRhc2sge1xcblxcdGdyaWQtY29sdW1uOiAxLzU7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCI7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4udGFzay1saXN0ID4gbGkge1xcblxcdGdyaWQtY29sdW1uOiA0Lzg7XFxufVxcblxcbmg0IHtcXG5cXHRwYWRkaW5nOiA3cHg7XFxuXFx0Ym9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuaDQ6aG92ZXIge1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xcbn1cXG5cXG4uYWN0aXZlIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgdGFza0xpc3QsIHRhc2tzIH0gZnJvbSBcIi4vYWRkdGFza1wiO1xuXG5leHBvcnQgY29uc3QgcHJvamVjdHMgPSBbXTtcbmV4cG9ydCBsZXQgYWN0aXZlSUQgPSBcIlwiO1xuXG5leHBvcnQgY2xhc3MgUHJvamVjdCB7XG5cdGNvbnN0cnVjdG9yKHRpdGxlLCBpZCkge1xuXHRcdHRoaXMudGl0bGUgPSB0aXRsZTtcblx0XHR0aGlzLmlkID0gaWQ7XG5cdFx0dGhpcy50YXNrcyA9IFtdO1xuXHR9XG5cblx0YWRkVGFzayhuZXdUYXNrKSB7XG5cdFx0dGhpcy50YXNrcy5wdXNoKG5ld1Rhc2spO1xuXHR9XG59XG5cbmV4cG9ydCBjb25zdCBwcm9qZWN0c0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RzLWxpc3RcIik7XG5jb25zdCBwcm9qZWN0c0xpc3RIZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtbGlzdC1oZWFkZXJcIik7XG5jb25zdCBuZXdQcm9qZWN0SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG5jb25zdCBhZGRQcm9qZWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblxuLy8gQWRkIGEgbmV3IE9iamVjdCwgYW5kIHRoZW4gcHVzaCBpdCBpbnRvIHRoZSBhcnJheVxuYWRkUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRsZXQgaSA9IHByb2plY3RzLmxlbmd0aCArIDE7XG5cdGNvbnN0IG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdChgJHtuZXdQcm9qZWN0SW5wdXQudmFsdWV9YCwgaSk7XG5cdHByb2plY3RzLnB1c2gobmV3UHJvamVjdCk7XG5cblx0Ly9VbmhpZGUgdGhlIGhlYWRlclxuXHRwcm9qZWN0c0xpc3RIZWFkZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJub25lXCIpO1xuXG5cdC8vSGlkZSBpbnB1dCBmaWVsZCBhbmQgYnV0dG9uXG5cdG5ld1Byb2plY3RJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImhpZGVcIik7XG5cdGFkZFByb2plY3RCdG4uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJoaWRlXCIpO1xufSk7XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9qZWN0TWFrZXIoKSB7XG5cdGZ1bmN0aW9uIHdyaXRlTmV3UHJvamVjdE5hbWUoKSB7XG5cdFx0cHJvamVjdHNMaXN0SGVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuXHRcdFx0Ly9IaWRlIHRoZSBoZWFkZXJcblx0XHRcdHByb2plY3RzTGlzdEhlYWRlci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImhpZGVcIik7XG5cblx0XHRcdC8vIFJldmVhbCBpbnB1dCBmaWVsZCBhbmQgYSBzdWJtaXQgYnV0dG9uIG9uIGNsaWNrXG5cdFx0XHRuZXdQcm9qZWN0SW5wdXQucmVtb3ZlQXR0cmlidXRlKFwiaWRcIik7XG5cdFx0XHRhZGRQcm9qZWN0QnRuLnJlbW92ZUF0dHJpYnV0ZShcImlkXCIpO1xuXHRcdFx0bmV3UHJvamVjdElucHV0LmNsYXNzTGlzdC50b2dnbGUoXCJwcm9qZWN0LWlucHV0XCIpO1xuXHRcdFx0bmV3UHJvamVjdElucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuXHRcdFx0YWRkUHJvamVjdEJ0bi5jbGFzc0xpc3QudG9nZ2xlKFwicHJvamVjdC1zdWJtaXRcIik7XG5cdFx0XHRhZGRQcm9qZWN0QnRuLnRleHRDb250ZW50ID0gXCJBZGRcIjtcblxuXHRcdFx0Ly9BcHBlbmQgUHJvamVjdHNcblx0XHRcdHByb2plY3RzTGlzdC5hcHBlbmRDaGlsZChuZXdQcm9qZWN0SW5wdXQpO1xuXHRcdFx0cHJvamVjdHNMaXN0LmFwcGVuZENoaWxkKGFkZFByb2plY3RCdG4pO1xuXHRcdH0pO1xuXHR9XG5cblx0Ly8gTG9vcCBvdmVyIGFycmF5IGFuZCBkaXNwbGF5IGNvbnRlbnRzXG5cdGZ1bmN0aW9uIGRpc3BsYXlBcnJheUNvbnRlbnRzKCkge1xuXHRcdGFkZFByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0XHRcdC8vIENyZWF0ZSBhIGxpc3QgaXRlbSB3aXRoIGg0IHRhZyBpbnNpZGVcblx0XHRcdGNvbnN0IHByb2ogPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG5cdFx0XHRjb25zdCBwcm9qVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKTtcblx0XHRcdC8vIEFkZCB0aGUgY2xhc3MgXCJwcm9qZWN0XCIgdG8gZWFjaCBwcm9qZWN0XG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdHByb2ouY2xhc3NMaXN0LmFkZChcInByb2plY3RcIik7XG5cblx0XHRcdFx0cHJvalRleHQudGV4dENvbnRlbnQgPSBwcm9qZWN0c1tpXS50aXRsZTtcblx0XHRcdH1cblx0XHRcdHByb2plY3RzTGlzdC5hcHBlbmRDaGlsZChwcm9qKTtcblx0XHRcdHByb2ouYXBwZW5kQ2hpbGQocHJvalRleHQpO1xuXG5cdFx0XHQvLyBTZXQgYSBkYXRhIGF0dHJpYnV0ZSB0byBlYWNoIHByb2plY3QgYmFzZWQgb24gaXRzIGxvY2F0aW9uIGluIHRoZSBhcnJheVxuXHRcdFx0cHJvai5zZXRBdHRyaWJ1dGUoXCJkYXRhLW51bWJlclwiLCBgJHtwcm9qZWN0cy5sZW5ndGh9YCk7XG5cblx0XHRcdC8vIEFkZCBhIGJ1dHRvbiB0byByZW1vdmUgYXJyYXkgaXRlbXNcblx0XHRcdGZ1bmN0aW9uIGRlbGV0ZUVkaXRBcnJheUNvbnRlbnRzKCkge1xuXHRcdFx0XHRjb25zdCBwcm9qID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9qZWN0XCIpO1xuXHRcdFx0XHRjb25zdCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXHRcdFx0XHRkZWxldGVCdG4uY2xhc3NMaXN0LnRvZ2dsZShcImRlbGV0ZS1idG5cIik7XG5cdFx0XHRcdGNvbnN0IGVkaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXHRcdFx0XHRlZGl0QnRuLmNsYXNzTGlzdC50b2dnbGUoXCJlZGl0LWJ0blwiKTtcblx0XHRcdFx0ZWRpdEJ0bi50ZXh0Q29udGVudCA9IFwiRWRpdFwiO1xuXHRcdFx0XHRkZWxldGVCdG4udGV4dENvbnRlbnQgPSBcIkRlbGV0ZVwiO1xuXG5cdFx0XHRcdC8vIEFkZCB0aGUgYnV0dG9uIHRvIGVhY2ggcHJvamVjdCB0aXRsZVxuXHRcdFx0XHRmb3IgKGxldCBwcm8gb2YgcHJvaikge1xuXHRcdFx0XHRcdHByby5hcHBlbmRDaGlsZChlZGl0QnRuKTtcblx0XHRcdFx0XHRwcm8uYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGVkaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG5cdFx0XHRcdFx0Y29uc3QgZWRpdFByb2plY3RJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcblx0XHRcdFx0XHRlZGl0UHJvamVjdElucHV0LmNsYXNzTGlzdC50b2dnbGUoXCJlZGl0LXByb2plY3RcIik7XG5cdFx0XHRcdFx0ZWRpdFByb2plY3RJbnB1dC5zZXRBdHRyaWJ1dGUoXG5cdFx0XHRcdFx0XHRcInZhbHVlXCIsXG5cdFx0XHRcdFx0XHRgJHtlLnRhcmdldC5wYXJlbnROb2RlLmZpcnN0Q2hpbGQudGV4dENvbnRlbnR9YFxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0Y29uc3QgZWRpdFByb2plY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXHRcdFx0XHRcdGVkaXRQcm9qZWN0QnRuLmNsYXNzTGlzdC50b2dnbGUoXCJjb25maXJtLWVkaXRcIik7XG5cdFx0XHRcdFx0ZWRpdFByb2plY3RCdG4udGV4dENvbnRlbnQgPSBcIkVkaXRcIjtcblx0XHRcdFx0XHRlLnRhcmdldC5wYXJlbnROb2RlLmZpcnN0Q2hpbGQuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGVcIik7XG5cdFx0XHRcdFx0ZS50YXJnZXQucGFyZW50Tm9kZS5maXJzdENoaWxkLm5leHRTaWJsaW5nLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRlXCIpO1xuXHRcdFx0XHRcdGUudGFyZ2V0LnBhcmVudE5vZGUuZmlyc3RDaGlsZC5uZXh0U2libGluZy5uZXh0U2libGluZy5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZVwiKTtcblx0XHRcdFx0XHRlLnRhcmdldC5wYXJlbnROb2RlLmFwcGVuZENoaWxkKGVkaXRQcm9qZWN0SW5wdXQpO1xuXHRcdFx0XHRcdGUudGFyZ2V0LnBhcmVudE5vZGUuYXBwZW5kQ2hpbGQoZWRpdFByb2plY3RCdG4pO1xuXG5cdFx0XHRcdFx0ZWRpdFByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG5cdFx0XHRcdFx0XHRjb25zdCBmaW5kUHJvamVjdFRhc2sgPSBwcm9qZWN0cy5maW5kKFxuXHRcdFx0XHRcdFx0XHQob2JqZWN0KSA9PiBvYmplY3QudGl0bGUgPT09IHByb2pUZXh0LnRleHRDb250ZW50XG5cdFx0XHRcdFx0XHQpO1xuXG5cdFx0XHRcdFx0XHRmaW5kUHJvamVjdFRhc2sudGl0bGUgPSBgJHtlZGl0UHJvamVjdElucHV0LnZhbHVlfWA7XG5cdFx0XHRcdFx0XHRwcm9qVGV4dC50ZXh0Q29udGVudCA9IGAke2VkaXRQcm9qZWN0SW5wdXQudmFsdWV9YDtcblx0XHRcdFx0XHRcdGUudGFyZ2V0LnBhcmVudE5vZGUuZmlyc3RDaGlsZC5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZVwiKTtcblx0XHRcdFx0XHRcdGUudGFyZ2V0LnBhcmVudE5vZGUuZmlyc3RDaGlsZC5uZXh0U2libGluZy5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZVwiKTtcblx0XHRcdFx0XHRcdGUudGFyZ2V0LnBhcmVudE5vZGUuZmlyc3RDaGlsZC5uZXh0U2libGluZy5uZXh0U2libGluZy5jbGFzc0xpc3QudG9nZ2xlKFxuXHRcdFx0XHRcdFx0XHRcImhpZGVcIlxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdGFjdGl2ZUlEID0gcHJvalRleHQucGFyZW50Tm9kZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLW51bWJlclwiKTtcblxuXHRcdFx0XHRcdFx0ZWRpdFByb2plY3RJbnB1dC5yZW1vdmUoKTtcblx0XHRcdFx0XHRcdGVkaXRQcm9qZWN0QnRuLnJlbW92ZSgpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHRkZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG5cdFx0XHRcdFx0Ly8gRmluZCB0aGUgcHJvamVjdCBpbmRleCBudW1iZXIgaW4gdGhlIGFycmF5XG5cdFx0XHRcdFx0Y29uc3QgZmluZFByb2plY3QgPSBwcm9qZWN0cy5maW5kSW5kZXgoXG5cdFx0XHRcdFx0XHQob2JqZWN0KSA9PiBvYmplY3QudGl0bGUgPT09IHByb2pUZXh0LnRleHRDb250ZW50XG5cdFx0XHRcdFx0KTtcblxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKGZpbmRQcm9qZWN0KTtcblxuXHRcdFx0XHRcdC8vIERlbGV0ZSB0aGUgb2JqZWN0IGZyb20gdGhlIGFycmF5IGFuZCBmcm9tIHRoZSBET01cblx0XHRcdFx0XHRwcm9qZWN0cy5zcGxpY2UoZmluZFByb2plY3QsIDEpO1xuXHRcdFx0XHRcdGRlbGV0ZUJ0bi5wYXJlbnROb2RlLnJlbW92ZSgpO1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKHByb2plY3RzKTtcblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0Ly8gU2V0IHN0YXRpY1ZhbHVlIHRvIG1hdGNoIGFjdGl2ZUlEIHZhbHVlXG5cdFx0XHRcdGxldCBzdGF0aWNWYWx1ZSA9IGFjdGl2ZUlEO1xuXG5cdFx0XHRcdHByb2pUZXh0LnBhcmVudE5vZGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG5cdFx0XHRcdFx0Y29uc3QgaDQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiaDRcIik7XG5cdFx0XHRcdFx0Ly8gT24gY2xpY2ssIGFkZCB0aGUgY2xhc3MgYWN0aXZlIHRvIHRoZSBvYmplY3QgdGhhdCB3YXMgY2xpY2tlZCwgYW5kIHJlbW92ZSBpdCBmcm9tIGFueSBvdGhlciBvYmplY3Rcblx0XHRcdFx0XHRmb3IgKGxldCBlbGVtZW50IG9mIGg0KSB7XG5cdFx0XHRcdFx0XHRlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG5cdFx0XHRcdFx0XHRlLnRhcmdldC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGNvbnN0IGZpbmRQcm9qZWN0ID0gcHJvamVjdHMuZmluZEluZGV4KFxuXHRcdFx0XHRcdFx0KG9iamVjdCkgPT4gb2JqZWN0LnRpdGxlID09PSBwcm9qVGV4dC50ZXh0Q29udGVudFxuXHRcdFx0XHRcdCk7XG5cblx0XHRcdFx0XHRhY3RpdmVJRCA9IGZpbmRQcm9qZWN0ICsgMTtcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhwcm9qZWN0cyk7XG5cblx0XHRcdFx0XHQvLyBDbGVhciB0aGUgRE9NIGFuZCB0aGVuIHBvcHVsYXRlIGl0IGFnYWluIHdpdGggdGhlIHRhc2tzIG9mIGVhY2ggcHJvamVjdCBJRCBudW1iZXJcblx0XHRcdFx0XHRpZiAoc3RhdGljVmFsdWUgIT09IGFjdGl2ZUlEICYmIDEgPD0gdGFza3MubGVuZ3RoKSB7XG5cdFx0XHRcdFx0XHRjb25zdCBsaXN0SXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubGlzdC1pdGVtXCIpO1xuXHRcdFx0XHRcdFx0Zm9yIChsZXQgaXRlbSBvZiBsaXN0SXRlbSkge1xuXHRcdFx0XHRcdFx0XHRpdGVtLnJlbW92ZSgpO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRjb25zdCBmaW5kUHJvamVjdFRhc2sgPSBwcm9qZWN0cy5maW5kKFxuXHRcdFx0XHRcdFx0XHQob2JqZWN0KSA9PiBvYmplY3QudGl0bGUgPT09IHByb2pUZXh0LnRleHRDb250ZW50XG5cdFx0XHRcdFx0XHQpO1xuXG5cdFx0XHRcdFx0XHRpZiAoZmluZFByb2plY3RUYXNrID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBwYXJzZUludChmaW5kUHJvamVjdFRhc2sudGFza3MubGVuZ3RoKTsgaSsrKSB7XG5cdFx0XHRcdFx0XHRcdFx0Y29uc3QgbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG5cdFx0XHRcdFx0XHRcdFx0bGlzdEl0ZW0uY2xhc3NMaXN0LmFkZChcImxpc3QtaXRlbVwiKTtcblx0XHRcdFx0XHRcdFx0XHRsaXN0SXRlbS50ZXh0Q29udGVudCA9IGAke2ZpbmRQcm9qZWN0VGFzay50YXNrc1tpXS50aXRsZX0sICR7ZmluZFByb2plY3RUYXNrLnRhc2tzW2ldLmRlc2NyaXB0aW9ufSwgJHtmaW5kUHJvamVjdFRhc2sudGFza3NbaV0uZGF0ZX0sICR7ZmluZFByb2plY3RUYXNrLnRhc2tzW2ldLnByaW9yaXR5fWA7XG5cdFx0XHRcdFx0XHRcdFx0dGFza0xpc3QuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblxuXHRcdFx0ZGVsZXRlRWRpdEFycmF5Q29udGVudHMoKTtcblx0XHR9KTtcblx0fVxuXG5cdHdyaXRlTmV3UHJvamVjdE5hbWUoKTtcblx0ZGlzcGxheUFycmF5Q29udGVudHMoKTtcbn1cbiIsImltcG9ydCB7IFByb2plY3QsIGFjdGl2ZUlELCBwcm9qZWN0TWFrZXIsIHByb2plY3RzIH0gZnJvbSBcIi4vYWRkcHJvamVjdFwiO1xuXG5leHBvcnQgY2xhc3MgVGFzayB7XG5cdGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZGF0ZSwgcHJpb3JpdHkpIHtcblx0XHQodGhpcy50aXRsZSA9IHRpdGxlKSxcblx0XHRcdCh0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb24pLFxuXHRcdFx0KHRoaXMuZGF0ZSA9IGRhdGUpLFxuXHRcdFx0KHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eSk7XG5cdH1cbn1cblxuY29uc3QgYWRkVGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXRhc2tcIik7XG5jb25zdCB0YXNrTGlzdEhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoM1wiKTtcbmV4cG9ydCBjb25zdCB0YXNrTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1saXN0XCIpO1xuY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuZm9ybS5zZXRBdHRyaWJ1dGUoXCJtZXRob2RcIiwgXCJwb3N0XCIpO1xuZm9ybS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImhpZGVcIik7XG5cbmNvbnN0IGZpZWxkc2V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZpZWxkc2V0XCIpO1xuZmllbGRzZXQudGV4dENvbnRlbnQgPSBcIkZpbGwgdGhlIGZpZWxkcyBiZWxvd1wiO1xuXG5jb25zdCB0YXNrVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG50YXNrVGl0bGUuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG50YXNrVGl0bGUuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcIlRpdGxlXCIpO1xudGFza1RpdGxlLnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiVGFzayBUaXRsZVwiKTtcblxuY29uc3QgdGFza0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xudGFza0Rlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xudGFza0Rlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJEZXNjcmlwdGlvblwiKTtcbnRhc2tEZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIlRhc2sgRGVzY3JpcHRpb25cIik7XG5cbmNvbnN0IHRhc2tEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xudGFza0RhdGUuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImRhdGVcIik7XG50YXNrRGF0ZS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwiRGF0ZVwiKTtcblxuY29uc3QgdGFza1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xudGFza1ByaW9yaXR5LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJyYW5nZVwiKTtcbnRhc2tQcmlvcml0eS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwiUHJpb3JpdHlcIik7XG50YXNrUHJpb3JpdHkuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJUYXNrIFByaW9yaXR5XCIpO1xuXG5jb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG5zdWJtaXRCdG4uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInN1Ym1pdFwiKTtcbnN1Ym1pdEJ0bi5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIlN1Ym1pdFwiKTtcblxuYWRkVGFzay5hcHBlbmRDaGlsZChmb3JtKTtcbmZvcm0uYXBwZW5kQ2hpbGQoZmllbGRzZXQpO1xuZm9ybS5hcHBlbmRDaGlsZCh0YXNrVGl0bGUpO1xuZm9ybS5hcHBlbmRDaGlsZCh0YXNrRGVzY3JpcHRpb24pO1xuZm9ybS5hcHBlbmRDaGlsZCh0YXNrRGF0ZSk7XG5mb3JtLmFwcGVuZENoaWxkKHRhc2tQcmlvcml0eSk7XG5mb3JtLmFwcGVuZENoaWxkKHN1Ym1pdEJ0bik7XG5cbmV4cG9ydCBjb25zdCB0YXNrcyA9IFtdO1xuXG5leHBvcnQgZnVuY3Rpb24gdGFza01ha2VyKCkge1xuXHRmdW5jdGlvbiB3cml0ZU5ld1Rhc2tOYW1lKCkge1xuXHRcdHRhc2tMaXN0SGVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuXHRcdFx0Zm9ybS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInVuaGlkZVwiKTtcblx0XHR9KTtcblxuXHRcdHN1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdGZvcm0uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJoaWRlXCIpO1xuXG5cdFx0XHRjb25zdCBuZXdUYXNrID0gbmV3IFRhc2soXG5cdFx0XHRcdGAke3Rhc2tUaXRsZS52YWx1ZX1gLFxuXHRcdFx0XHRgJHt0YXNrRGVzY3JpcHRpb24udmFsdWV9YCxcblx0XHRcdFx0YCR7dGFza0RhdGUudmFsdWV9YCxcblx0XHRcdFx0YCR7dGFza1ByaW9yaXR5LnZhbHVlfWBcblx0XHRcdCk7XG5cblx0XHRcdHRhc2tzLnB1c2gobmV3VGFzayk7XG5cdFx0XHRpZiAocHJvamVjdHMubGVuZ3RoID49IDEgJiYgYWN0aXZlSUQgPj0gMSkge1xuXHRcdFx0XHRwcm9qZWN0c1thY3RpdmVJRCAtIDFdLmFkZFRhc2sobmV3VGFzayk7XG5cdFx0XHRcdGNvbnN0IHVsTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcblx0XHRcdFx0dGFza0xpc3QuYXBwZW5kQ2hpbGQodWxMaXN0KTtcblx0XHRcdFx0Y29uc3QgbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG5cdFx0XHRcdGxpc3RJdGVtLmNsYXNzTGlzdC5hZGQoXCJsaXN0LWl0ZW1cIik7XG5cdFx0XHRcdGxpc3RJdGVtLnNldEF0dHJpYnV0ZShcInRhc2stdGl0bGVcIiwgYCR7bmV3VGFzay50aXRsZX1gKTtcblx0XHRcdFx0Y29uc3QgaDNUYXNrcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcblx0XHRcdFx0bGlzdEl0ZW0uYXBwZW5kQ2hpbGQoaDNUYXNrcyk7XG5cdFx0XHRcdGgzVGFza3MudGV4dENvbnRlbnQgPSBgJHtuZXdUYXNrLnRpdGxlfSwgJHtuZXdUYXNrLmRlc2NyaXB0aW9ufSwgJHtuZXdUYXNrLmRhdGV9LCAke25ld1Rhc2sucHJpb3JpdHl9YDtcblx0XHRcdFx0dWxMaXN0LmFwcGVuZENoaWxkKGxpc3RJdGVtKTtcblx0XHRcdFx0Zm9ybS5yZXNldCgpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0YWxlcnQoXCJBZGQgYW5kIHNlbGVjdCBwcm9qZWN0IGZpcnN0IVwiKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG5cdGZ1bmN0aW9uIGRlbGV0ZUVkaXRUYXNrKCkge1xuXHRcdGNvbnN0IGxpc3RJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWxpc3RcIik7XG5cdFx0Y29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblx0XHRkZWxldGVCdG4uY2xhc3NMaXN0LnRvZ2dsZShcImRlbGV0ZS1idG4tdGFza3NcIik7XG5cdFx0ZGVsZXRlQnRuLnRleHRDb250ZW50ID0gXCJEZWxldGVcIjtcblx0XHRjb25zdCBlZGl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblx0XHRlZGl0QnRuLmNsYXNzTGlzdC50b2dnbGUoXCJlZGl0LWJ0bi10YXNrc1wiKTtcblx0XHRlZGl0QnRuLnRleHRDb250ZW50ID0gXCJFZGl0XCI7XG5cblx0XHRmb3IgKGxldCB0YXNrIG9mIGxpc3RJdGVtLmNoaWxkcmVuKSB7XG5cdFx0XHR0YXNrLmFwcGVuZENoaWxkKGVkaXRCdG4pO1xuXHRcdFx0dGFzay5hcHBlbmRDaGlsZChkZWxldGVCdG4pO1xuXHRcdH1cblxuXHRcdGRlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcblx0XHRcdC8vIEZpbmQgdGhlIHByb2plY3QgaW5kZXggbnVtYmVyIGluIHRoZSBhcnJheVxuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0YXNrcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRjb25zdCBmaW5kVGFzayA9IHRhc2tzLmZpbmRJbmRleChcblx0XHRcdFx0XHQob2JqZWN0KSA9PlxuXHRcdFx0XHRcdFx0b2JqZWN0LnRpdGxlID09PSBlLnRhcmdldC5wYXJlbnROb2RlLmZpcnN0Q2hpbGQuZ2V0QXR0cmlidXRlKFwidGFzay10aXRsZVwiKVxuXHRcdFx0XHQpO1xuXHRcdFx0XHR0YXNrcy5zcGxpY2UoZmluZFRhc2ssIDEpO1xuXHRcdFx0XHRlLnRhcmdldC5wYXJlbnROb2RlLnJlbW92ZSgpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cblx0d3JpdGVOZXdUYXNrTmFtZSgpO1xuXG5cdHN1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcblx0XHRkZWxldGVFZGl0VGFzaygpO1xuXHR9KTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgeyBwcm9qZWN0TWFrZXIgfSBmcm9tIFwiLi9hZGRwcm9qZWN0XCI7XG5pbXBvcnQgeyB0YXNrTWFrZXIgfSBmcm9tIFwiLi9hZGR0YXNrXCI7XG5cbnByb2plY3RNYWtlcigpO1xudGFza01ha2VyKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=