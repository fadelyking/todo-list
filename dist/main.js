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
					/* 					console.log(findProject + 1);
					console.log(e.target.parentNode.getAttribute("data-number")); */
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
				const listItem = document.createElement("li");
				listItem.classList.add("list-item");
				listItem.textContent = `${newTask.title}, ${newTask.description}, ${newTask.date}, ${newTask.priority}`;
				taskList.appendChild(listItem);
				form.reset();
			} else {
				alert("Add and select project first!");
			}
		});
	}

	function deleteEditTask() {
		const taskItems = document.querySelectorAll(".list-item");
		console.log(taskItems);
		const deleteBtn = document.createElement("button");
		deleteBtn.classList.toggle("delete-btn-tasks");
		deleteBtn.textContent = "Delete";
		const editBtn = document.createElement("button");
		editBtn.classList.toggle("edit-btn-tasks");
		editBtn.textContent = "Edit";
		for (let task of taskItems) {
			console.log(task);
			tasks.appendChild(editBtn);
			tasks.appendChild(deleteBtn);
		}
	}
	submitBtn.addEventListener("click", (e) => {
		deleteEditTask();
	});

	writeNewTaskName();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDdUI7QUFDTjs7QUFFdEMseURBQVk7QUFDWixtREFBUyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvYWRkcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvYWRkdGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxuICAgdjIuMCB8IDIwMTEwMTI2XG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxuKi9cblxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcbmIsIHUsIGksIGNlbnRlcixcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcblx0bWFyZ2luOiAwO1xuXHRwYWRkaW5nOiAwO1xuXHRib3JkZXI6IDA7XG5cdGZvbnQtc2l6ZTogMTAwJTtcblx0Zm9udDogaW5oZXJpdDtcblx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xufVxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xuXHRkaXNwbGF5OiBibG9jaztcbn1cbmJvZHkge1xuXHRsaW5lLWhlaWdodDogMTtcbn1cbm9sLCB1bCB7XG5cdGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5ibG9ja3F1b3RlLCBxIHtcblx0cXVvdGVzOiBub25lO1xufVxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXG5xOmJlZm9yZSwgcTphZnRlciB7XG5cdGNvbnRlbnQ6ICcnO1xuXHRjb250ZW50OiBub25lO1xufVxudGFibGUge1xuXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuXHRib3JkZXItc3BhY2luZzogMDtcbn1cblxuYm9keSB7XG5cdGhlaWdodDogMTAwdmg7XG59XG5cbi5jb250YWluZXIge1xuXHRoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg2LCAxZnIpO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDYsIDFmcik7XG59XG5cbi5oZWFkZXIge1xuXHRncmlkLXJvdzogMS8yO1xuXHRncmlkLWNvbHVtbjogMS8tMTtcblx0ZGlzcGxheTogZmxleDtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGZvbnQtc2l6ZTogMnJlbTtcblx0Zm9udC1mYW1pbHk6IFwiUm9ib3RvXCI7XG5cdGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5zaWRlYmFyIHtcblx0Z3JpZC1yb3c6IDIvLTE7XG5cdGdyaWQtY29sdW1uOiAxLzI7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAxNDksIDI1NSk7XG59XG5cbi5wcm9qZWN0cy1saXN0IHtcblx0XHRwYWRkaW5nOiA3cHg7XG5cdGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5wcm9qZWN0LWxpc3QtaGVhZGVye1xuXHRmb250LWZhbWlseTogXCJSb2JvdG9cIjtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcblx0cGFkZGluZzogNXB4O1xufVxuXG4ucHJvamVjdC1saXN0LWhlYWRlcjpob3ZlciB7XG5cdGN1cnNvcjogcG9pbnRlcjtcblx0YmFja2dyb3VuZC1jb2xvcjogI2NjYztcblx0cGFkZGluZzogNXB4O1xuXHRib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG5cblxuLm1haW4ge1xuXHRkaXNwbGF5OiBncmlkO1xuXHRtYXJnaW46IDEwcHg7XG5cdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDgsIDFmcik7XG5cdGdyaWQtY29sdW1uOiAyLy0xO1xufVxuXG4jaGlkZSB7XG5cdGRpc3BsYXk6IG5vbmU7XG59XG5cbi5oaWRlIHtcblx0ZGlzcGxheTogbm9uZTtcbn1cblxuXG4ucHJvamVjdCB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0Z2FwOiAyMHB4O1xuXHRmb250LWZhbWlseTogXCJSb2JvdG9cIjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0bWFyZ2luLXRvcDogMTBweDtcbiAgICBmb250LXNpemU6IDAuOTAwcmVtO1xufVxuLmFkZC10YXNrIHtcblx0Z3JpZC1jb2x1bW46IDEvNTtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0Zm9udC1mYW1pbHk6IFwiUm9ib3RvXCI7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG59XG5cbi50YXNrLWxpc3QgPiBsaSB7XG5cdGdyaWQtY29sdW1uOiA0Lzg7XG59XG5cbmg0IHtcblx0cGFkZGluZzogN3B4O1xuXHRib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG5oNDpob3ZlciB7XG5cdGN1cnNvcjogcG9pbnRlcjtcblx0YmFja2dyb3VuZC1jb2xvcjogI2NjYztcbn1cblxuLmFjdGl2ZSB7XG5cdGJhY2tncm91bmQtY29sb3I6ICNjY2M7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7OztDQUdDOztBQUVEOzs7Ozs7Ozs7Ozs7O0NBYUMsU0FBUztDQUNULFVBQVU7Q0FDVixTQUFTO0NBQ1QsZUFBZTtDQUNmLGFBQWE7Q0FDYix3QkFBd0I7QUFDekI7QUFDQSxnREFBZ0Q7QUFDaEQ7O0NBRUMsY0FBYztBQUNmO0FBQ0E7Q0FDQyxjQUFjO0FBQ2Y7QUFDQTtDQUNDLGdCQUFnQjtBQUNqQjtBQUNBO0NBQ0MsWUFBWTtBQUNiO0FBQ0E7O0NBRUMsV0FBVztDQUNYLGFBQWE7QUFDZDtBQUNBO0NBQ0MseUJBQXlCO0NBQ3pCLGlCQUFpQjtBQUNsQjs7QUFFQTtDQUNDLGFBQWE7QUFDZDs7QUFFQTtDQUNDLFlBQVk7SUFDVCxhQUFhO0lBQ2IscUNBQXFDO0lBQ3JDLGtDQUFrQztBQUN0Qzs7QUFFQTtDQUNDLGFBQWE7Q0FDYixpQkFBaUI7Q0FDakIsYUFBYTtDQUNiLHVCQUF1QjtDQUN2QixtQkFBbUI7Q0FDbkIsZUFBZTtDQUNmLHFCQUFxQjtDQUNyQixnQkFBZ0I7QUFDakI7O0FBRUE7Q0FDQyxjQUFjO0NBQ2QsZ0JBQWdCO0NBQ2hCLGFBQWE7Q0FDYixrQ0FBa0M7QUFDbkM7O0FBRUE7RUFDRSxZQUFZO0NBQ2IsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0MscUJBQXFCO0lBQ2xCLGlCQUFpQjtDQUNwQixZQUFZO0FBQ2I7O0FBRUE7Q0FDQyxlQUFlO0NBQ2Ysc0JBQXNCO0NBQ3RCLFlBQVk7Q0FDWixtQkFBbUI7QUFDcEI7Ozs7QUFJQTtDQUNDLGFBQWE7Q0FDYixZQUFZO0NBQ1oscUNBQXFDO0NBQ3JDLGlCQUFpQjtBQUNsQjs7QUFFQTtDQUNDLGFBQWE7QUFDZDs7QUFFQTtDQUNDLGFBQWE7QUFDZDs7O0FBR0E7Q0FDQyxhQUFhO0NBQ2IsOEJBQThCO0NBQzlCLFNBQVM7Q0FDVCxxQkFBcUI7Q0FDckIsbUJBQW1CO0NBQ25CLGdCQUFnQjtJQUNiLG1CQUFtQjtBQUN2QjtBQUNBO0NBQ0MsZ0JBQWdCO0NBQ2hCLG1CQUFtQjtDQUNuQixxQkFBcUI7SUFDbEIsaUJBQWlCO0FBQ3JCOztBQUVBO0NBQ0MsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0MsWUFBWTtDQUNaLG1CQUFtQjtBQUNwQjs7QUFFQTtDQUNDLGVBQWU7Q0FDZixzQkFBc0I7QUFDdkI7O0FBRUE7Q0FDQyxzQkFBc0I7QUFDdkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC8gXFxuICAgdjIuMCB8IDIwMTEwMTI2XFxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcXG4qL1xcblxcbmh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcbmIsIHUsIGksIGNlbnRlcixcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIFxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0Ym9yZGVyOiAwO1xcblxcdGZvbnQtc2l6ZTogMTAwJTtcXG5cXHRmb250OiBpbmhlcml0O1xcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIFxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxufVxcbmJvZHkge1xcblxcdGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5vbCwgdWwge1xcblxcdGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGUsIHEge1xcblxcdHF1b3Rlczogbm9uZTtcXG59XFxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xcblxcdGNvbnRlbnQ6ICcnO1xcblxcdGNvbnRlbnQ6IG5vbmU7XFxufVxcbnRhYmxlIHtcXG5cXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcblxcdGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG5cXHRoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDYsIDFmcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDYsIDFmcik7XFxufVxcblxcbi5oZWFkZXIge1xcblxcdGdyaWQtcm93OiAxLzI7XFxuXFx0Z3JpZC1jb2x1bW46IDEvLTE7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGZvbnQtc2l6ZTogMnJlbTtcXG5cXHRmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCI7XFxuXFx0Zm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuLnNpZGViYXIge1xcblxcdGdyaWQtcm93OiAyLy0xO1xcblxcdGdyaWQtY29sdW1uOiAxLzI7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMTQ5LCAyNTUpO1xcbn1cXG5cXG4ucHJvamVjdHMtbGlzdCB7XFxuXFx0XFx0cGFkZGluZzogN3B4O1xcblxcdGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5wcm9qZWN0LWxpc3QtaGVhZGVye1xcblxcdGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIjtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuXFx0cGFkZGluZzogNXB4O1xcbn1cXG5cXG4ucHJvamVjdC1saXN0LWhlYWRlcjpob3ZlciB7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcblxcdGJhY2tncm91bmQtY29sb3I6ICNjY2M7XFxuXFx0cGFkZGluZzogNXB4O1xcblxcdGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcblxcblxcbi5tYWluIHtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdG1hcmdpbjogMTBweDtcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg4LCAxZnIpO1xcblxcdGdyaWQtY29sdW1uOiAyLy0xO1xcbn1cXG5cXG4jaGlkZSB7XFxuXFx0ZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmhpZGUge1xcblxcdGRpc3BsYXk6IG5vbmU7XFxufVxcblxcblxcbi5wcm9qZWN0IHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXHRnYXA6IDIwcHg7XFxuXFx0Zm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0bWFyZ2luLXRvcDogMTBweDtcXG4gICAgZm9udC1zaXplOiAwLjkwMHJlbTtcXG59XFxuLmFkZC10YXNrIHtcXG5cXHRncmlkLWNvbHVtbjogMS81O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0Zm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuLnRhc2stbGlzdCA+IGxpIHtcXG5cXHRncmlkLWNvbHVtbjogNC84O1xcbn1cXG5cXG5oNCB7XFxuXFx0cGFkZGluZzogN3B4O1xcblxcdGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbmg0OmhvdmVyIHtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogI2NjYztcXG59XFxuXFxuLmFjdGl2ZSB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogI2NjYztcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IHRhc2tMaXN0LCB0YXNrcyB9IGZyb20gXCIuL2FkZHRhc2tcIjtcblxuZXhwb3J0IGNvbnN0IHByb2plY3RzID0gW107XG5leHBvcnQgbGV0IGFjdGl2ZUlEID0gXCJcIjtcblxuZXhwb3J0IGNsYXNzIFByb2plY3Qge1xuXHRjb25zdHJ1Y3Rvcih0aXRsZSwgaWQpIHtcblx0XHR0aGlzLnRpdGxlID0gdGl0bGU7XG5cdFx0dGhpcy5pZCA9IGlkO1xuXHRcdHRoaXMudGFza3MgPSBbXTtcblx0fVxuXG5cdGFkZFRhc2sobmV3VGFzaykge1xuXHRcdHRoaXMudGFza3MucHVzaChuZXdUYXNrKTtcblx0fVxufVxuXG5leHBvcnQgY29uc3QgcHJvamVjdHNMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0cy1saXN0XCIpO1xuY29uc3QgcHJvamVjdHNMaXN0SGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWxpc3QtaGVhZGVyXCIpO1xuY29uc3QgbmV3UHJvamVjdElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuY29uc3QgYWRkUHJvamVjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cbi8vIEFkZCBhIG5ldyBPYmplY3QsIGFuZCB0aGVuIHB1c2ggaXQgaW50byB0aGUgYXJyYXlcbmFkZFByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0bGV0IGkgPSBwcm9qZWN0cy5sZW5ndGggKyAxO1xuXHRjb25zdCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QoYCR7bmV3UHJvamVjdElucHV0LnZhbHVlfWAsIGkpO1xuXHRwcm9qZWN0cy5wdXNoKG5ld1Byb2plY3QpO1xuXG5cdC8vVW5oaWRlIHRoZSBoZWFkZXJcblx0cHJvamVjdHNMaXN0SGVhZGVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibm9uZVwiKTtcblxuXHQvL0hpZGUgaW5wdXQgZmllbGQgYW5kIGJ1dHRvblxuXHRuZXdQcm9qZWN0SW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJoaWRlXCIpO1xuXHRhZGRQcm9qZWN0QnRuLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaGlkZVwiKTtcbn0pO1xuXG5leHBvcnQgZnVuY3Rpb24gcHJvamVjdE1ha2VyKCkge1xuXHRmdW5jdGlvbiB3cml0ZU5ld1Byb2plY3ROYW1lKCkge1xuXHRcdHByb2plY3RzTGlzdEhlYWRlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcblx0XHRcdC8vSGlkZSB0aGUgaGVhZGVyXG5cdFx0XHRwcm9qZWN0c0xpc3RIZWFkZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJoaWRlXCIpO1xuXG5cdFx0XHQvLyBSZXZlYWwgaW5wdXQgZmllbGQgYW5kIGEgc3VibWl0IGJ1dHRvbiBvbiBjbGlja1xuXHRcdFx0bmV3UHJvamVjdElucHV0LnJlbW92ZUF0dHJpYnV0ZShcImlkXCIpO1xuXHRcdFx0YWRkUHJvamVjdEJ0bi5yZW1vdmVBdHRyaWJ1dGUoXCJpZFwiKTtcblx0XHRcdG5ld1Byb2plY3RJbnB1dC5jbGFzc0xpc3QudG9nZ2xlKFwicHJvamVjdC1pbnB1dFwiKTtcblx0XHRcdG5ld1Byb2plY3RJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcblx0XHRcdGFkZFByb2plY3RCdG4uY2xhc3NMaXN0LnRvZ2dsZShcInByb2plY3Qtc3VibWl0XCIpO1xuXHRcdFx0YWRkUHJvamVjdEJ0bi50ZXh0Q29udGVudCA9IFwiQWRkXCI7XG5cblx0XHRcdC8vQXBwZW5kIFByb2plY3RzXG5cdFx0XHRwcm9qZWN0c0xpc3QuYXBwZW5kQ2hpbGQobmV3UHJvamVjdElucHV0KTtcblx0XHRcdHByb2plY3RzTGlzdC5hcHBlbmRDaGlsZChhZGRQcm9qZWN0QnRuKTtcblx0XHR9KTtcblx0fVxuXG5cdC8vIExvb3Agb3ZlciBhcnJheSBhbmQgZGlzcGxheSBjb250ZW50c1xuXHRmdW5jdGlvbiBkaXNwbGF5QXJyYXlDb250ZW50cygpIHtcblx0XHRhZGRQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdFx0XHQvLyBDcmVhdGUgYSBsaXN0IGl0ZW0gd2l0aCBoNCB0YWcgaW5zaWRlXG5cdFx0XHRjb25zdCBwcm9qID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuXHRcdFx0Y29uc3QgcHJvalRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDRcIik7XG5cdFx0XHQvLyBBZGQgdGhlIGNsYXNzIFwicHJvamVjdFwiIHRvIGVhY2ggcHJvamVjdFxuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRwcm9qLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0XCIpO1xuXG5cdFx0XHRcdHByb2pUZXh0LnRleHRDb250ZW50ID0gcHJvamVjdHNbaV0udGl0bGU7XG5cdFx0XHR9XG5cdFx0XHRwcm9qZWN0c0xpc3QuYXBwZW5kQ2hpbGQocHJvaik7XG5cdFx0XHRwcm9qLmFwcGVuZENoaWxkKHByb2pUZXh0KTtcblxuXHRcdFx0Ly8gU2V0IGEgZGF0YSBhdHRyaWJ1dGUgdG8gZWFjaCBwcm9qZWN0IGJhc2VkIG9uIGl0cyBsb2NhdGlvbiBpbiB0aGUgYXJyYXlcblx0XHRcdHByb2ouc2V0QXR0cmlidXRlKFwiZGF0YS1udW1iZXJcIiwgYCR7cHJvamVjdHMubGVuZ3RofWApO1xuXG5cdFx0XHQvLyBBZGQgYSBidXR0b24gdG8gcmVtb3ZlIGFycmF5IGl0ZW1zXG5cdFx0XHRmdW5jdGlvbiBkZWxldGVFZGl0QXJyYXlDb250ZW50cygpIHtcblx0XHRcdFx0Y29uc3QgcHJvaiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvamVjdFwiKTtcblx0XHRcdFx0Y29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblx0XHRcdFx0ZGVsZXRlQnRuLmNsYXNzTGlzdC50b2dnbGUoXCJkZWxldGUtYnRuXCIpO1xuXHRcdFx0XHRjb25zdCBlZGl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblx0XHRcdFx0ZWRpdEJ0bi5jbGFzc0xpc3QudG9nZ2xlKFwiZWRpdC1idG5cIik7XG5cdFx0XHRcdGVkaXRCdG4udGV4dENvbnRlbnQgPSBcIkVkaXRcIjtcblx0XHRcdFx0ZGVsZXRlQnRuLnRleHRDb250ZW50ID0gXCJEZWxldGVcIjtcblxuXHRcdFx0XHQvLyBBZGQgdGhlIGJ1dHRvbiB0byBlYWNoIHByb2plY3QgdGl0bGVcblx0XHRcdFx0Zm9yIChsZXQgcHJvIG9mIHByb2opIHtcblx0XHRcdFx0XHRwcm8uYXBwZW5kQ2hpbGQoZWRpdEJ0bik7XG5cdFx0XHRcdFx0cHJvLmFwcGVuZENoaWxkKGRlbGV0ZUJ0bik7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRlZGl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuXHRcdFx0XHRcdGNvbnN0IGVkaXRQcm9qZWN0SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG5cdFx0XHRcdFx0ZWRpdFByb2plY3RJbnB1dC5jbGFzc0xpc3QudG9nZ2xlKFwiZWRpdC1wcm9qZWN0XCIpO1xuXHRcdFx0XHRcdGVkaXRQcm9qZWN0SW5wdXQuc2V0QXR0cmlidXRlKFxuXHRcdFx0XHRcdFx0XCJ2YWx1ZVwiLFxuXHRcdFx0XHRcdFx0YCR7ZS50YXJnZXQucGFyZW50Tm9kZS5maXJzdENoaWxkLnRleHRDb250ZW50fWBcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdGNvbnN0IGVkaXRQcm9qZWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblx0XHRcdFx0XHRlZGl0UHJvamVjdEJ0bi5jbGFzc0xpc3QudG9nZ2xlKFwiY29uZmlybS1lZGl0XCIpO1xuXHRcdFx0XHRcdGVkaXRQcm9qZWN0QnRuLnRleHRDb250ZW50ID0gXCJFZGl0XCI7XG5cdFx0XHRcdFx0ZS50YXJnZXQucGFyZW50Tm9kZS5maXJzdENoaWxkLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRlXCIpO1xuXHRcdFx0XHRcdGUudGFyZ2V0LnBhcmVudE5vZGUuZmlyc3RDaGlsZC5uZXh0U2libGluZy5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZVwiKTtcblx0XHRcdFx0XHRlLnRhcmdldC5wYXJlbnROb2RlLmZpcnN0Q2hpbGQubmV4dFNpYmxpbmcubmV4dFNpYmxpbmcuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGVcIik7XG5cdFx0XHRcdFx0ZS50YXJnZXQucGFyZW50Tm9kZS5hcHBlbmRDaGlsZChlZGl0UHJvamVjdElucHV0KTtcblx0XHRcdFx0XHRlLnRhcmdldC5wYXJlbnROb2RlLmFwcGVuZENoaWxkKGVkaXRQcm9qZWN0QnRuKTtcblxuXHRcdFx0XHRcdGVkaXRQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuXHRcdFx0XHRcdFx0Y29uc3QgZmluZFByb2plY3RUYXNrID0gcHJvamVjdHMuZmluZChcblx0XHRcdFx0XHRcdFx0KG9iamVjdCkgPT4gb2JqZWN0LnRpdGxlID09PSBwcm9qVGV4dC50ZXh0Q29udGVudFxuXHRcdFx0XHRcdFx0KTtcblxuXHRcdFx0XHRcdFx0ZmluZFByb2plY3RUYXNrLnRpdGxlID0gYCR7ZWRpdFByb2plY3RJbnB1dC52YWx1ZX1gO1xuXHRcdFx0XHRcdFx0cHJvalRleHQudGV4dENvbnRlbnQgPSBgJHtlZGl0UHJvamVjdElucHV0LnZhbHVlfWA7XG5cdFx0XHRcdFx0XHRlLnRhcmdldC5wYXJlbnROb2RlLmZpcnN0Q2hpbGQuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGVcIik7XG5cdFx0XHRcdFx0XHRlLnRhcmdldC5wYXJlbnROb2RlLmZpcnN0Q2hpbGQubmV4dFNpYmxpbmcuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGVcIik7XG5cdFx0XHRcdFx0XHRlLnRhcmdldC5wYXJlbnROb2RlLmZpcnN0Q2hpbGQubmV4dFNpYmxpbmcubmV4dFNpYmxpbmcuY2xhc3NMaXN0LnRvZ2dsZShcblx0XHRcdFx0XHRcdFx0XCJoaWRlXCJcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRhY3RpdmVJRCA9IHByb2pUZXh0LnBhcmVudE5vZGUuZ2V0QXR0cmlidXRlKFwiZGF0YS1udW1iZXJcIik7XG5cblx0XHRcdFx0XHRcdGVkaXRQcm9qZWN0SW5wdXQucmVtb3ZlKCk7XG5cdFx0XHRcdFx0XHRlZGl0UHJvamVjdEJ0bi5yZW1vdmUoKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0ZGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuXHRcdFx0XHRcdC8vIEZpbmQgdGhlIHByb2plY3QgaW5kZXggbnVtYmVyIGluIHRoZSBhcnJheVxuXHRcdFx0XHRcdGNvbnN0IGZpbmRQcm9qZWN0ID0gcHJvamVjdHMuZmluZEluZGV4KFxuXHRcdFx0XHRcdFx0KG9iamVjdCkgPT4gb2JqZWN0LnRpdGxlID09PSBwcm9qVGV4dC50ZXh0Q29udGVudFxuXHRcdFx0XHRcdCk7XG5cblx0XHRcdFx0XHRjb25zb2xlLmxvZyhmaW5kUHJvamVjdCk7XG5cblx0XHRcdFx0XHQvLyBEZWxldGUgdGhlIG9iamVjdCBmcm9tIHRoZSBhcnJheSBhbmQgZnJvbSB0aGUgRE9NXG5cdFx0XHRcdFx0cHJvamVjdHMuc3BsaWNlKGZpbmRQcm9qZWN0LCAxKTtcblx0XHRcdFx0XHRkZWxldGVCdG4ucGFyZW50Tm9kZS5yZW1vdmUoKTtcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhwcm9qZWN0cyk7XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdC8vIFNldCBzdGF0aWNWYWx1ZSB0byBtYXRjaCBhY3RpdmVJRCB2YWx1ZVxuXHRcdFx0XHRsZXQgc3RhdGljVmFsdWUgPSBhY3RpdmVJRDtcblxuXHRcdFx0XHRwcm9qVGV4dC5wYXJlbnROb2RlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuXHRcdFx0XHRcdGNvbnN0IGg0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImg0XCIpO1xuXHRcdFx0XHRcdC8vIE9uIGNsaWNrLCBhZGQgdGhlIGNsYXNzIGFjdGl2ZSB0byB0aGUgb2JqZWN0IHRoYXQgd2FzIGNsaWNrZWQsIGFuZCByZW1vdmUgaXQgZnJvbSBhbnkgb3RoZXIgb2JqZWN0XG5cdFx0XHRcdFx0Zm9yIChsZXQgZWxlbWVudCBvZiBoNCkge1xuXHRcdFx0XHRcdFx0ZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuXHRcdFx0XHRcdFx0ZS50YXJnZXQuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRjb25zdCBmaW5kUHJvamVjdCA9IHByb2plY3RzLmZpbmRJbmRleChcblx0XHRcdFx0XHRcdChvYmplY3QpID0+IG9iamVjdC50aXRsZSA9PT0gcHJvalRleHQudGV4dENvbnRlbnRcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdC8qIFx0XHRcdFx0XHRjb25zb2xlLmxvZyhmaW5kUHJvamVjdCArIDEpO1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKGUudGFyZ2V0LnBhcmVudE5vZGUuZ2V0QXR0cmlidXRlKFwiZGF0YS1udW1iZXJcIikpOyAqL1xuXHRcdFx0XHRcdGFjdGl2ZUlEID0gZmluZFByb2plY3QgKyAxO1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKHByb2plY3RzKTtcblxuXHRcdFx0XHRcdC8vIENsZWFyIHRoZSBET00gYW5kIHRoZW4gcG9wdWxhdGUgaXQgYWdhaW4gd2l0aCB0aGUgdGFza3Mgb2YgZWFjaCBwcm9qZWN0IElEIG51bWJlclxuXHRcdFx0XHRcdGlmIChzdGF0aWNWYWx1ZSAhPT0gYWN0aXZlSUQgJiYgMSA8PSB0YXNrcy5sZW5ndGgpIHtcblx0XHRcdFx0XHRcdGNvbnN0IGxpc3RJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5saXN0LWl0ZW1cIik7XG5cdFx0XHRcdFx0XHRmb3IgKGxldCBpdGVtIG9mIGxpc3RJdGVtKSB7XG5cdFx0XHRcdFx0XHRcdGl0ZW0ucmVtb3ZlKCk7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdGNvbnN0IGZpbmRQcm9qZWN0VGFzayA9IHByb2plY3RzLmZpbmQoXG5cdFx0XHRcdFx0XHRcdChvYmplY3QpID0+IG9iamVjdC50aXRsZSA9PT0gcHJvalRleHQudGV4dENvbnRlbnRcblx0XHRcdFx0XHRcdCk7XG5cblx0XHRcdFx0XHRcdGlmIChmaW5kUHJvamVjdFRhc2sgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHBhcnNlSW50KGZpbmRQcm9qZWN0VGFzay50YXNrcy5sZW5ndGgpOyBpKyspIHtcblx0XHRcdFx0XHRcdFx0XHRjb25zdCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcblx0XHRcdFx0XHRcdFx0XHRsaXN0SXRlbS5jbGFzc0xpc3QuYWRkKFwibGlzdC1pdGVtXCIpO1xuXHRcdFx0XHRcdFx0XHRcdGxpc3RJdGVtLnRleHRDb250ZW50ID0gYCR7ZmluZFByb2plY3RUYXNrLnRhc2tzW2ldLnRpdGxlfSwgJHtmaW5kUHJvamVjdFRhc2sudGFza3NbaV0uZGVzY3JpcHRpb259LCAke2ZpbmRQcm9qZWN0VGFzay50YXNrc1tpXS5kYXRlfSwgJHtmaW5kUHJvamVjdFRhc2sudGFza3NbaV0ucHJpb3JpdHl9YDtcblx0XHRcdFx0XHRcdFx0XHR0YXNrTGlzdC5hcHBlbmRDaGlsZChsaXN0SXRlbSk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXG5cdFx0XHRkZWxldGVFZGl0QXJyYXlDb250ZW50cygpO1xuXHRcdH0pO1xuXHR9XG5cblx0d3JpdGVOZXdQcm9qZWN0TmFtZSgpO1xuXHRkaXNwbGF5QXJyYXlDb250ZW50cygpO1xufVxuIiwiaW1wb3J0IHsgUHJvamVjdCwgYWN0aXZlSUQsIHByb2plY3RNYWtlciwgcHJvamVjdHMgfSBmcm9tIFwiLi9hZGRwcm9qZWN0XCI7XG5cbmV4cG9ydCBjbGFzcyBUYXNrIHtcblx0Y29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkYXRlLCBwcmlvcml0eSkge1xuXHRcdCh0aGlzLnRpdGxlID0gdGl0bGUpLFxuXHRcdFx0KHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbiksXG5cdFx0XHQodGhpcy5kYXRlID0gZGF0ZSksXG5cdFx0XHQodGhpcy5wcmlvcml0eSA9IHByaW9yaXR5KTtcblx0fVxufVxuXG5jb25zdCBhZGRUYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtdGFza1wiKTtcbmNvbnN0IHRhc2tMaXN0SGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImgzXCIpO1xuZXhwb3J0IGNvbnN0IHRhc2tMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWxpc3RcIik7XG5jb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG5mb3JtLnNldEF0dHJpYnV0ZShcIm1ldGhvZFwiLCBcInBvc3RcIik7XG5mb3JtLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaGlkZVwiKTtcblxuY29uc3QgZmllbGRzZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZmllbGRzZXRcIik7XG5maWVsZHNldC50ZXh0Q29udGVudCA9IFwiRmlsbCB0aGUgZmllbGRzIGJlbG93XCI7XG5cbmNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbnRhc2tUaXRsZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbnRhc2tUaXRsZS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwiVGl0bGVcIik7XG50YXNrVGl0bGUuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJUYXNrIFRpdGxlXCIpO1xuXG5jb25zdCB0YXNrRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG50YXNrRGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG50YXNrRGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcIkRlc2NyaXB0aW9uXCIpO1xudGFza0Rlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiVGFzayBEZXNjcmlwdGlvblwiKTtcblxuY29uc3QgdGFza0RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG50YXNrRGF0ZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiZGF0ZVwiKTtcbnRhc2tEYXRlLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJEYXRlXCIpO1xuXG5jb25zdCB0YXNrUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG50YXNrUHJpb3JpdHkuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInJhbmdlXCIpO1xudGFza1ByaW9yaXR5LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJQcmlvcml0eVwiKTtcbnRhc2tQcmlvcml0eS5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIlRhc2sgUHJpb3JpdHlcIik7XG5cbmNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbnN1Ym1pdEJ0bi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwic3VibWl0XCIpO1xuc3VibWl0QnRuLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiU3VibWl0XCIpO1xuXG5hZGRUYXNrLmFwcGVuZENoaWxkKGZvcm0pO1xuZm9ybS5hcHBlbmRDaGlsZChmaWVsZHNldCk7XG5mb3JtLmFwcGVuZENoaWxkKHRhc2tUaXRsZSk7XG5mb3JtLmFwcGVuZENoaWxkKHRhc2tEZXNjcmlwdGlvbik7XG5mb3JtLmFwcGVuZENoaWxkKHRhc2tEYXRlKTtcbmZvcm0uYXBwZW5kQ2hpbGQodGFza1ByaW9yaXR5KTtcbmZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0QnRuKTtcblxuZXhwb3J0IGNvbnN0IHRhc2tzID0gW107XG5cbmV4cG9ydCBmdW5jdGlvbiB0YXNrTWFrZXIoKSB7XG5cdGZ1bmN0aW9uIHdyaXRlTmV3VGFza05hbWUoKSB7XG5cdFx0dGFza0xpc3RIZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG5cdFx0XHRmb3JtLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidW5oaWRlXCIpO1xuXHRcdH0pO1xuXG5cdFx0c3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0Zm9ybS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImhpZGVcIik7XG5cblx0XHRcdGNvbnN0IG5ld1Rhc2sgPSBuZXcgVGFzayhcblx0XHRcdFx0YCR7dGFza1RpdGxlLnZhbHVlfWAsXG5cdFx0XHRcdGAke3Rhc2tEZXNjcmlwdGlvbi52YWx1ZX1gLFxuXHRcdFx0XHRgJHt0YXNrRGF0ZS52YWx1ZX1gLFxuXHRcdFx0XHRgJHt0YXNrUHJpb3JpdHkudmFsdWV9YFxuXHRcdFx0KTtcblxuXHRcdFx0dGFza3MucHVzaChuZXdUYXNrKTtcblx0XHRcdGlmIChwcm9qZWN0cy5sZW5ndGggPj0gMSAmJiBhY3RpdmVJRCA+PSAxKSB7XG5cdFx0XHRcdHByb2plY3RzW2FjdGl2ZUlEIC0gMV0uYWRkVGFzayhuZXdUYXNrKTtcblx0XHRcdFx0Y29uc3QgbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG5cdFx0XHRcdGxpc3RJdGVtLmNsYXNzTGlzdC5hZGQoXCJsaXN0LWl0ZW1cIik7XG5cdFx0XHRcdGxpc3RJdGVtLnRleHRDb250ZW50ID0gYCR7bmV3VGFzay50aXRsZX0sICR7bmV3VGFzay5kZXNjcmlwdGlvbn0sICR7bmV3VGFzay5kYXRlfSwgJHtuZXdUYXNrLnByaW9yaXR5fWA7XG5cdFx0XHRcdHRhc2tMaXN0LmFwcGVuZENoaWxkKGxpc3RJdGVtKTtcblx0XHRcdFx0Zm9ybS5yZXNldCgpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0YWxlcnQoXCJBZGQgYW5kIHNlbGVjdCBwcm9qZWN0IGZpcnN0IVwiKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG5cdGZ1bmN0aW9uIGRlbGV0ZUVkaXRUYXNrKCkge1xuXHRcdGNvbnN0IHRhc2tJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubGlzdC1pdGVtXCIpO1xuXHRcdGNvbnNvbGUubG9nKHRhc2tJdGVtcyk7XG5cdFx0Y29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblx0XHRkZWxldGVCdG4uY2xhc3NMaXN0LnRvZ2dsZShcImRlbGV0ZS1idG4tdGFza3NcIik7XG5cdFx0ZGVsZXRlQnRuLnRleHRDb250ZW50ID0gXCJEZWxldGVcIjtcblx0XHRjb25zdCBlZGl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblx0XHRlZGl0QnRuLmNsYXNzTGlzdC50b2dnbGUoXCJlZGl0LWJ0bi10YXNrc1wiKTtcblx0XHRlZGl0QnRuLnRleHRDb250ZW50ID0gXCJFZGl0XCI7XG5cdFx0Zm9yIChsZXQgdGFzayBvZiB0YXNrSXRlbXMpIHtcblx0XHRcdGNvbnNvbGUubG9nKHRhc2spO1xuXHRcdFx0dGFza3MuYXBwZW5kQ2hpbGQoZWRpdEJ0bik7XG5cdFx0XHR0YXNrcy5hcHBlbmRDaGlsZChkZWxldGVCdG4pO1xuXHRcdH1cblx0fVxuXHRzdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG5cdFx0ZGVsZXRlRWRpdFRhc2soKTtcblx0fSk7XG5cblx0d3JpdGVOZXdUYXNrTmFtZSgpO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCB7IHByb2plY3RNYWtlciB9IGZyb20gXCIuL2FkZHByb2plY3RcIjtcbmltcG9ydCB7IHRhc2tNYWtlciB9IGZyb20gXCIuL2FkZHRhc2tcIjtcblxucHJvamVjdE1ha2VyKCk7XG50YXNrTWFrZXIoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==