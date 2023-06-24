/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/Components/Header.js":
/*!*************************************!*\
  !*** ./src/js/Components/Header.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _src_img_booking_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../src/img/booking.png */ \"./src/img/booking.png\");\n/* harmony import */ var _src_img_close_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../src/img/close.svg */ \"./src/img/close.svg\");\n/* harmony import */ var _src_img_menu_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../src/img/menu.svg */ \"./src/img/menu.svg\");\n\n\n\nvar Header = function Header() {\n  var data = [{\n    li: 'Home'\n  }, {\n    li: 'Services'\n  }, {\n    li: 'Our Works'\n  }, {\n    li: 'Clients'\n  }, {\n    li: 'Contact'\n  }];\n  var tempContainer = \"\\n    <header class=\\\"header\\\">\\n      <img src=\".concat(_src_img_booking_png__WEBPACK_IMPORTED_MODULE_0__, \" alt=\\\"logo\\\" class=\\\"header-logo\\\">\\n      <nav class=\\\"header-nav\\\">\\n        <ul class=\\\"navList\\\">\\n          \").concat(data.map(function (d) {\n    return \"\\n                <li class=\\\"navList-item\\\">\\n                <a href=\\\"#\\\" class=\\\"navList-link\\\">\".concat(d.li, \"</a>\\n                </li>\\n              \");\n  }).join(''), \"\\n        </ul>\\n      </nav>\\n      <div class=\\\"header-containerBtn\\\">\\n        <button class=\\\"btn\\\" aria-label=\\\"Cerrar barra de navegaci\\xF3n\\\">\\n          <img src=\").concat(_src_img_close_svg__WEBPACK_IMPORTED_MODULE_1__, \" alt=\\\"logo cerrar menu\\\">\\n        </button>\\n        <button class=\\\"btn\\\" aria-label=\\\"Abrir barra de navegaci\\xF3n\\\">\\n          <img src=\").concat(_src_img_menu_svg__WEBPACK_IMPORTED_MODULE_2__, \" alt=\\\"logo abrir menu\\\">\\n        </button>\\n      </div>      \\n    </header>  \\n  \");\n  return tempContainer.trim();\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);\n\n//# sourceURL=webpack://edie-homepage-master/./src/js/Components/Header.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_addBlock_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/addBlock.js */ \"./src/js/utils/addBlock.js\");\n/* harmony import */ var _Components_Header_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Components/Header.js */ \"./src/js/Components/Header.js\");\n/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scss/style.scss */ \"./src/scss/style.scss\");\n\n\n\n(0,_utils_addBlock_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])((0,_Components_Header_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(), '#app');\n\n//# sourceURL=webpack://edie-homepage-master/./src/js/index.js?");

/***/ }),

/***/ "./src/js/utils/addBlock.js":
/*!**********************************!*\
  !*** ./src/js/utils/addBlock.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction addBlock(content, target) {\n  var position = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'beforeend';\n  var targetElement = document.querySelector(target);\n  if (content instanceof HTMLElement) {\n    targetElement.insertAdjacentElement(position, content);\n  } else if (typeof content === 'string' && content.startsWith('<') && content.endsWith('>')) {\n    targetElement.insertAdjacentHTML(position, content);\n  } else {\n    console.error('Formatos válidos: string o elementos HTML y posiciones válidas: beforebegin, afterbegin, beforeend, afterend');\n  }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addBlock);\n// addBlock('<h1>Hello</h1>', '#app');\n// addBlock('<h1>Hello</h1>', '#app', 'afterbegin');\n// addBlock('<h1>Hello</h1>', '#app', 'beforeend');\n\n//# sourceURL=webpack://edie-homepage-master/./src/js/utils/addBlock.js?");

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://edie-homepage-master/./src/scss/style.scss?");

/***/ }),

/***/ "./src/img/booking.png":
/*!*****************************!*\
  !*** ./src/img/booking.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/images/booking.png\";\n\n//# sourceURL=webpack://edie-homepage-master/./src/img/booking.png?");

/***/ }),

/***/ "./src/img/close.svg":
/*!***************************!*\
  !*** ./src/img/close.svg ***!
  \***************************/
/***/ ((module) => {

eval("module.exports = \"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgc3R5bGU9ImZpbGw6I2ZmZjt0cmFuc2Zvcm06IDttc0ZpbHRlcjo7Ij48cGF0aCBkPSJtMTYuMTkyIDYuMzQ0LTQuMjQzIDQuMjQyLTQuMjQyLTQuMjQyLTEuNDE0IDEuNDE0TDEwLjUzNSAxMmwtNC4yNDIgNC4yNDIgMS40MTQgMS40MTQgNC4yNDItNC4yNDIgNC4yNDMgNC4yNDIgMS40MTQtMS40MTRMMTMuMzY0IDEybDQuMjQyLTQuMjQyeiI+PC9wYXRoPjwvc3ZnPg==\";\n\n//# sourceURL=webpack://edie-homepage-master/./src/img/close.svg?");

/***/ }),

/***/ "./src/img/menu.svg":
/*!**************************!*\
  !*** ./src/img/menu.svg ***!
  \**************************/
/***/ ((module) => {

eval("module.exports = \"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgc3R5bGU9ImZpbGw6I2ZmZjt0cmFuc2Zvcm06IDttc0ZpbHRlcjo7Ij48cGF0aCBkPSJNNCA2aDE2djJINHptMCA1aDE2djJINHptMCA1aDE2djJINHoiPjwvcGF0aD48L3N2Zz4=\";\n\n//# sourceURL=webpack://edie-homepage-master/./src/img/menu.svg?");

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
/******/ 			// no module.id needed
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl + "../../";
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;