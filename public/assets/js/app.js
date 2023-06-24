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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _src_img_edie_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../src/img/edie.svg */ \"./src/img/edie.svg\");\n/* harmony import */ var _src_img_close_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../src/img/close.svg */ \"./src/img/close.svg\");\n/* harmony import */ var _src_img_menu_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../src/img/menu.svg */ \"./src/img/menu.svg\");\n\n\n\nvar Header = function Header() {\n  var data = [{\n    li: 'Home'\n  }, {\n    li: 'Services'\n  }, {\n    li: 'Our Works'\n  }, {\n    li: 'Clients'\n  }, {\n    li: 'Contact'\n  }];\n  var tempContainer = \"\\n    <header class=\\\"header\\\">\\n      <img src=\".concat(_src_img_edie_svg__WEBPACK_IMPORTED_MODULE_0__, \" alt=\\\"logo\\\" class=\\\"header-logo\\\">\\n      <nav class=\\\"header-nav\\\">\\n        <ul class=\\\"navList\\\">\\n          \").concat(data.map(function (d) {\n    return \"\\n                <li class=\\\"navList-item\\\">\\n                <a href=\\\"#\\\" class=\\\"navList-link\\\">\".concat(d.li, \"</a>\\n                </li>\\n              \");\n  }).join(''), \"\\n        </ul>\\n      </nav>\\n      <div class=\\\"header-containerBtn\\\">\\n        <button class=\\\"btn\\\" aria-label=\\\"Cerrar barra de navegaci\\xF3n\\\">\\n          <img src=\").concat(_src_img_close_svg__WEBPACK_IMPORTED_MODULE_1__, \" alt=\\\"logo cerrar menu\\\">\\n        </button>\\n        <button class=\\\"btn\\\" aria-label=\\\"Abrir barra de navegaci\\xF3n\\\">\\n          <img src=\").concat(_src_img_menu_svg__WEBPACK_IMPORTED_MODULE_2__, \" alt=\\\"logo abrir menu\\\">\\n        </button>\\n      </div>      \\n    </header>  \\n  \");\n  return tempContainer.trim();\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);\n\n//# sourceURL=webpack://edie-homepage-master/./src/js/Components/Header.js?");

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

/***/ "./src/img/close.svg":
/*!***************************!*\
  !*** ./src/img/close.svg ***!
  \***************************/
/***/ ((module) => {

eval("module.exports = \"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgc3R5bGU9ImZpbGw6I2ZmZjt0cmFuc2Zvcm06IDttc0ZpbHRlcjo7Ij48cGF0aCBkPSJtMTYuMTkyIDYuMzQ0LTQuMjQzIDQuMjQyLTQuMjQyLTQuMjQyLTEuNDE0IDEuNDE0TDEwLjUzNSAxMmwtNC4yNDIgNC4yNDIgMS40MTQgMS40MTQgNC4yNDItNC4yNDIgNC4yNDMgNC4yNDIgMS40MTQtMS40MTRMMTMuMzY0IDEybDQuMjQyLTQuMjQyeiI+PC9wYXRoPjwvc3ZnPg==\";\n\n//# sourceURL=webpack://edie-homepage-master/./src/img/close.svg?");

/***/ }),

/***/ "./src/img/edie.svg":
/*!**************************!*\
  !*** ./src/img/edie.svg ***!
  \**************************/
/***/ ((module) => {

eval("module.exports = \"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjM0MXB4IiBoZWlnaHQ9IjE5MXB4IiBzdHlsZT0ic2hhcGUtcmVuZGVyaW5nOmdlb21ldHJpY1ByZWNpc2lvbjsgdGV4dC1yZW5kZXJpbmc6Z2VvbWV0cmljUHJlY2lzaW9uOyBpbWFnZS1yZW5kZXJpbmc6b3B0aW1pemVRdWFsaXR5OyBmaWxsLXJ1bGU6ZXZlbm9kZDsgY2xpcC1ydWxlOmV2ZW5vZGQiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KPGc+PHBhdGggc3R5bGU9Im9wYWNpdHk6MC4zMzEiIGZpbGw9IiNiM2IzYjMiIGQ9Ik0gMTg3LjUsMjAuNSBDIDE3OC41LDIwLjUgMTY5LjUsMjAuNSAxNjAuNSwyMC41QyAxNjAuNjY3LDM2LjE3MDIgMTYwLjUsNTEuODM2OSAxNjAsNjcuNUMgMTU5LjI4Myw2Ni45NTU4IDE1OC43ODMsNjYuMjg5MSAxNTguNSw2NS41QyAxNTkuNDk2LDUwLjM0MjQgMTU5LjgzLDM1LjAwOTEgMTU5LjUsMTkuNUMgMTY5LjAxNSwxOS4xNzMxIDE3OC4zNDgsMTkuNTA2NCAxODcuNSwyMC41IFoiLz48L2c+CjxnPjxwYXRoIHN0eWxlPSJvcGFjaXR5OjAuOTk5IiBmaWxsPSIjMzczNzM3IiBkPSJNIDE4Ny41LDIwLjUgQyAxODcuNSw2NC44MzMzIDE4Ny41LDEwOS4xNjcgMTg3LjUsMTUzLjVDIDE3OS4xNjcsMTUzLjUgMTcwLjgzMywxNTMuNSAxNjIuNSwxNTMuNUMgMTYyLjUsMTUyLjE2NyAxNjIuNSwxNTAuODMzIDE2Mi41LDE0OS41QyAxNjIuNzk5LDE0Ny4zOTYgMTYyLjQ2NiwxNDUuMzk2IDE2MS41LDE0My41QyAxNjAuODkzLDE0My42MjQgMTYwLjU2LDE0My45NTcgMTYwLjUsMTQ0LjVDIDE1NC43MywxNTEuNDY4IDE0Ny4yMywxNTUuMTM0IDEzOCwxNTUuNUMgMTMxLjk4MSwxNTUuMTI2IDEyNi40ODEsMTUzLjQ2IDEyMS41LDE1MC41QyAxMjEuMDI3LDE0OS4wOTQgMTIwLjAyNywxNDguNDI3IDExOC41LDE0OC41QyAxMDguNDEsMTQwLjgyMSAxMDIuOTEsMTMwLjQ4OCAxMDIsMTE3LjVDIDEwMC43NjYsMTA1LjMwMiAxMDEuNzY2LDkzLjMwMjEgMTA1LDgxLjVDIDEwNi4yNzQsNzguNjA4OSAxMDcuNzc0LDc1Ljk0MjIgMTA5LjUsNzMuNUMgMTEwLjkwNiw3My4wMjY5IDExMS41NzMsNzIuMDI2OSAxMTEuNSw3MC41QyAxMTEuOTMyLDY5LjI5MDUgMTEyLjU5OSw2OC4yOTA1IDExMy41LDY3LjVDIDExNS40MDQsNjcuMjYyNCAxMTYuNzM4LDY2LjI2MjQgMTE3LjUsNjQuNUMgMTIzLjIyNSw1OS4zNDkyIDEzMC4wNTgsNTcuMDE1OCAxMzgsNTcuNUMgMTQ2LjEzOSw1Ny4xNTE1IDE1Mi45NzIsNTkuODE4MSAxNTguNSw2NS41QyAxNTguNzgzLDY2LjI4OTEgMTU5LjI4Myw2Ni45NTU4IDE2MCw2Ny41QyAxNjAuNSw1MS44MzY5IDE2MC42NjcsMzYuMTcwMiAxNjAuNSwyMC41QyAxNjkuNSwyMC41IDE3OC41LDIwLjUgMTg3LjUsMjAuNSBaIE0gMTU4LjUsODYuNSBDIDE1OS40OCw5OS4wODcgMTU5LjgxMywxMTEuNzU0IDE1OS41LDEyNC41QyAxNTMuNDQ4LDEzMi43MjIgMTQ1Ljc4MSwxMzQuNTU1IDEzNi41LDEzMEMgMTMxLjAwMSwxMjMuMTg1IDEyOC42NjgsMTE1LjM1MSAxMjkuNSwxMDYuNUMgMTI5LjA2LDk5LjUzMzggMTMwLjIyNyw5Mi44NjcxIDEzMyw4Ni41QyAxNDEuNTM5LDc3LjI2NiAxNTAuMDM5LDc3LjI2NiAxNTguNSw4Ni41IFoiLz48L2c+CjxnPjxwYXRoIHN0eWxlPSJvcGFjaXR5OjAuOTk4IiBmaWxsPSIjM2QzZDNkIiBkPSJNIDIwOC41LDI1LjUgQyAyMTAuMDI3LDI1LjU3MyAyMTEuMDI3LDI0LjkwNjMgMjExLjUsMjMuNUMgMjE5LjE4OCwxOS40NjE5IDIyNi4zNTUsMjAuNDYxOSAyMzMsMjYuNUMgMjM4LjM3NSw0Mi41NTc1IDIzMi41NDIsNTAuMDU3NSAyMTUuNSw0OUMgMjA4LjcyNCw0Ny4wNTU1IDIwNS4wNTgsNDIuNTU1NSAyMDQuNSwzNS41QyAyMDQuODc2LDMxLjY4OTcgMjA2LjIwOSwyOC4zNTY0IDIwOC41LDI1LjUgWiIvPjwvZz4KPGc+PHBhdGggc3R5bGU9Im9wYWNpdHk6MC43NjUiIGZpbGw9IiM5MjkyOTIiIGQ9Ik0gMjExLjUsMjMuNSBDIDIxMS4wMjcsMjQuOTA2MyAyMTAuMDI3LDI1LjU3MyAyMDguNSwyNS41QyAyMDguOTczLDI0LjA5MzcgMjA5Ljk3MywyMy40MjcgMjExLjUsMjMuNSBaIi8+PC9nPgo8Zz48cGF0aCBzdHlsZT0ib3BhY2l0eTowLjQ3IiBmaWxsPSIjOTU5NTk1IiBkPSJNIDcuNSwyNy41IEMgMzUuOTk1MSwyNi41MDIgNjQuNjYxOCwyNi4xNjg3IDkzLjUsMjYuNUMgOTMuNSwzNC4xNjY3IDkzLjUsNDEuODMzMyA5My41LDQ5LjVDIDkzLjE2NjcsNDkuNSA5Mi44MzMzLDQ5LjUgOTIuNSw0OS41QyA5Mi41LDQyLjE2NjcgOTIuNSwzNC44MzMzIDkyLjUsMjcuNUMgNjQuMTY2NywyNy41IDM1LjgzMzMsMjcuNSA3LjUsMjcuNSBaIi8+PC9nPgo8Zz48cGF0aCBzdHlsZT0ib3BhY2l0eTowLjk5OSIgZmlsbD0iIzMzMzMzMyIgZD0iTSA3LjUsMjcuNSBDIDM1LjgzMzMsMjcuNSA2NC4xNjY3LDI3LjUgOTIuNSwyNy41QyA5Mi41LDM0LjgzMzMgOTIuNSw0Mi4xNjY3IDkyLjUsNDkuNUMgNzMuNSw0OS41IDU0LjUsNDkuNSAzNS41LDQ5LjVDIDM1LjUsNTguODMzMyAzNS41LDY4LjE2NjcgMzUuNSw3Ny41QyA1MS44MzMzLDc3LjUgNjguMTY2Nyw3Ny41IDg0LjUsNzcuNUMgODQuNSw4NC44MzMzIDg0LjUsOTIuMTY2NyA4NC41LDk5LjVDIDY4LjUsOTkuNSA1Mi41LDk5LjUgMzYuNSw5OS41QyAzNS41MDU4LDEwOS42NTMgMzUuMTcyNCwxMTkuOTg2IDM1LjUsMTMwLjVDIDU0LjUsMTMwLjUgNzMuNSwxMzAuNSA5Mi41LDEzMC41QyA5Mi41LDEzNy44MzMgOTIuNSwxNDUuMTY3IDkyLjUsMTUyLjVDIDY0LjE2NjcsMTUyLjUgMzUuODMzMywxNTIuNSA3LjUsMTUyLjVDIDcuNSwxMTAuODMzIDcuNSw2OS4xNjY3IDcuNSwyNy41IFoiLz48L2c+CjxnPjxwYXRoIHN0eWxlPSJvcGFjaXR5OjAuOTk5IiBmaWxsPSIjMzgzODM4IiBkPSJNIDMzNS41LDkyLjUgQyAzMzUuNSw5OS44MzMzIDMzNS41LDEwNy4xNjcgMzM1LjUsMTE0LjVDIDMxNi4xNjcsMTE0LjUgMjk2LjgzMywxMTQuNSAyNzcuNSwxMTQuNUMgMjc3LjI2MywxMTUuNzkxIDI3Ny41OTYsMTE2Ljc5MSAyNzguNSwxMTcuNUMgMjgzLjE2MSwxMjkuMzM0IDI5MS44MjgsMTM0LjE2NyAzMDQuNSwxMzJDIDMwOC44MTgsMTMxLjE3NCAzMTIuODE4LDEyOS42NzQgMzE2LjUsMTI3LjVDIDMxOC41LDEyNi41IDMyMC41LDEyNS41IDMyMi41LDEyNC41QyAzMjQuMTY3LDEyNS41IDMyNS41LDEyNi44MzMgMzI2LjUsMTI4LjVDIDMyNi40MjcsMTMwLjAyNyAzMjcuMDk0LDEzMS4wMjcgMzI4LjUsMTMxLjVDIDMyOS44MzMsMTMyLjE2NyAzMzAuODMzLDEzMy4xNjcgMzMxLjUsMTM0LjVDIDMzMS40MjcsMTM2LjAyNyAzMzIuMDk0LDEzNy4wMjcgMzMzLjUsMTM3LjVDIDMzMy45MzgsMTM3LjQzNSAzMzQuMjcyLDEzNy42MDEgMzM0LjUsMTM4QyAzMjUuMDgsMTQ5LjcwNyAzMTIuNzQ3LDE1NS41NDEgMjk3LjUsMTU1LjVDIDI4Ny41NzIsMTU1LjQ0MSAyNzguNTcyLDE1Mi43NzUgMjcwLjUsMTQ3LjVDIDI3MC4wMjcsMTQ2LjA5NCAyNjkuMDI3LDE0NS40MjcgMjY3LjUsMTQ1LjVDIDI2MS4wMjksMTQwLjkzIDI1Ni4xOTUsMTM0LjkzIDI1MywxMjcuNUMgMjQ2LjYxNCwxMDcuOTg1IDI0OC45NDcsODkuNjUxNSAyNjAsNzIuNUMgMjc0LjQxMiw1Ny42MDYxIDI5MS41NzksNTMuNDM5NCAzMTEuNSw2MEMgMzI1Ljc4Miw2Ni4xMjUyIDMzMy43ODIsNzYuOTU4NSAzMzUuNSw5Mi41IFogTSAzMDkuNSw5Mi41IEMgMzA5LjUsOTMuODMzMyAzMDkuNSw5NS4xNjY3IDMwOS41LDk2LjVDIDI5OS4xNjcsOTYuNSAyODguODMzLDk2LjUgMjc4LjUsOTYuNUMgMjc4LjUsOTUuNSAyNzguNSw5NC41IDI3OC41LDkzLjVDIDI4Mi43MDUsODEuMDY3MyAyOTEuMDM5LDc3LjIzNCAzMDMuNSw4MkMgMzA2LjkyOSw4NC42OTE2IDMwOC45MjksODguMTkxNiAzMDkuNSw5Mi41IFoiLz48L2c+CjxnPjxwYXRoIHN0eWxlPSJvcGFjaXR5OjEiIGZpbGw9IiMzNDM0MzQiIGQ9Ik0gMjA2LjUsNTkuNSBDIDIxNS41LDU5LjUgMjI0LjUsNTkuNSAyMzMuNSw1OS41QyAyMzMuNSw5MC41IDIzMy41LDEyMS41IDIzMy41LDE1Mi41QyAyMjQuNSwxNTIuNSAyMTUuNSwxNTIuNSAyMDYuNSwxNTIuNUMgMjA2LjUsMTIxLjUgMjA2LjUsOTAuNSAyMDYuNSw1OS41IFoiLz48L2c+CjxnPjxwYXRoIHN0eWxlPSJvcGFjaXR5OjAuMzI4IiBmaWxsPSIjYmJiYmJiIiBkPSJNIDIwNi41LDU5LjUgQyAyMTUuNjUyLDU4LjUwNjQgMjI0Ljk4NSw1OC4xNzMxIDIzNC41LDU4LjVDIDIzNC41LDkwLjE2NjcgMjM0LjUsMTIxLjgzMyAyMzQuNSwxNTMuNUMgMjI0Ljk4NSwxNTMuODI3IDIxNS42NTIsMTUzLjQ5NCAyMDYuNSwxNTIuNUMgMjE1LjUsMTUyLjUgMjI0LjUsMTUyLjUgMjMzLjUsMTUyLjVDIDIzMy41LDEyMS41IDIzMy41LDkwLjUgMjMzLjUsNTkuNUMgMjI0LjUsNTkuNSAyMTUuNSw1OS41IDIwNi41LDU5LjUgWiIvPjwvZz4KPGc+PHBhdGggc3R5bGU9Im9wYWNpdHk6MC43NTciIGZpbGw9IiM4ZjhmOGYiIGQ9Ik0gMTE3LjUsNjQuNSBDIDExNi43MzgsNjYuMjYyNCAxMTUuNDA0LDY3LjI2MjQgMTEzLjUsNjcuNUMgMTE0LjI2Miw2NS43Mzc2IDExNS41OTYsNjQuNzM3NiAxMTcuNSw2NC41IFoiLz48L2c+CjxnPjxwYXRoIHN0eWxlPSJvcGFjaXR5OjAuNTgiIGZpbGw9IiM5MDkwOTAiIGQ9Ik0gMTExLjUsNzAuNSBDIDExMS41NzMsNzIuMDI2OSAxMTAuOTA2LDczLjAyNjkgMTA5LjUsNzMuNUMgMTA5LjQyNyw3MS45NzMxIDExMC4wOTQsNzAuOTczMSAxMTEuNSw3MC41IFoiLz48L2c+CjxnPjxwYXRoIHN0eWxlPSJvcGFjaXR5OjAuMTA4IiBmaWxsPSIjZTBlMGUwIiBkPSJNIDkyLjUsNDkuNSBDIDkyLjgzMzMsNDkuNSA5My4xNjY3LDQ5LjUgOTMuNSw0OS41QyA3NC42NzQsNTAuNDk3IDU1LjY3NCw1MC44MzAzIDM2LjUsNTAuNUMgMzYuNSw1OS4xNjY3IDM2LjUsNjcuODMzMyAzNi41LDc2LjVDIDUyLjY3NTQsNzYuMTcwMyA2OC42NzU0LDc2LjUwMzYgODQuNSw3Ny41QyA2OC4xNjY3LDc3LjUgNTEuODMzMyw3Ny41IDM1LjUsNzcuNUMgMzUuNSw2OC4xNjY3IDM1LjUsNTguODMzMyAzNS41LDQ5LjVDIDU0LjUsNDkuNSA3My41LDQ5LjUgOTIuNSw0OS41IFoiLz48L2c+CjxnPjxwYXRoIHN0eWxlPSJvcGFjaXR5OjAuMzI1IiBmaWxsPSIjYWVhZWFlIiBkPSJNIDE1OC41LDg2LjUgQyAxNTkuODMsOTIuNDYzIDE2MC40OTYsOTguNzk2MyAxNjAuNSwxMDUuNUMgMTYwLjUsMTEyLjAwOSAxNjAuMTY2LDExOC4zNDIgMTU5LjUsMTI0LjVDIDE1OS44MTMsMTExLjc1NCAxNTkuNDgsOTkuMDg3IDE1OC41LDg2LjUgWiIvPjwvZz4KPGc+PHBhdGggc3R5bGU9Im9wYWNpdHk6MC40OTMiIGZpbGw9IiM5MzkzOTMiIGQ9Ik0gMzA5LjUsOTIuNSBDIDMxMC40NTEsOTMuOTE4NyAzMTAuNzg0LDk1LjU4NTMgMzEwLjUsOTcuNUMgMjk5LjUsOTcuNSAyODguNSw5Ny41IDI3Ny41LDk3LjVDIDI3Ny4yMzIsOTUuOTAxIDI3Ny41NjYsOTQuNTY3NiAyNzguNSw5My41QyAyNzguNSw5NC41IDI3OC41LDk1LjUgMjc4LjUsOTYuNUMgMjg4LjgzMyw5Ni41IDI5OS4xNjcsOTYuNSAzMDkuNSw5Ni41QyAzMDkuNSw5NS4xNjY3IDMwOS41LDkzLjgzMzMgMzA5LjUsOTIuNSBaIi8+PC9nPgo8Zz48cGF0aCBzdHlsZT0ib3BhY2l0eTowLjMzNSIgZmlsbD0iI2E1YTVhNSIgZD0iTSAzMzUuNSw5Mi41IEMgMzM2LjQ5Miw5OS45ODE4IDMzNi44MjUsMTA3LjY0OCAzMzYuNSwxMTUuNUMgMzE2LjgwNCwxMTQuODQ2IDI5Ny40NzEsMTE1LjUxMiAyNzguNSwxMTcuNUMgMjc3LjU5NiwxMTYuNzkxIDI3Ny4yNjMsMTE1Ljc5MSAyNzcuNSwxMTQuNUMgMjk2LjgzMywxMTQuNSAzMTYuMTY3LDExNC41IDMzNS41LDExNC41QyAzMzUuNSwxMDcuMTY3IDMzNS41LDk5LjgzMzMgMzM1LjUsOTIuNSBaIi8+PC9nPgo8Zz48cGF0aCBzdHlsZT0ib3BhY2l0eTowLjgxNiIgZmlsbD0iIzgxODE4MSIgZD0iTSAzMjIuNSwxMjQuNSBDIDMyMC41LDEyNS41IDMxOC41LDEyNi41IDMxNi41LDEyNy41QyAzMTcuNjI1LDEyNS44NzEgMzE4Ljk1OSwxMjQuMzcxIDMyMC41LDEyM0MgMzIxLjgxNiwxMjIuNDcyIDMyMi40ODMsMTIyLjk3MiAzMjIuNSwxMjQuNSBaIi8+PC9nPgo8Zz48cGF0aCBzdHlsZT0ib3BhY2l0eTowLjEwMiIgZmlsbD0iI2RmZGZkZiIgZD0iTSAzNi41LDk5LjUgQyAzNi41LDEwOS41IDM2LjUsMTE5LjUgMzYuNSwxMjkuNUMgNTUuNjc0LDEyOS4xNyA3NC42NzQsMTI5LjUwMyA5My41LDEzMC41QyA5My4xNjY3LDEzMC41IDkyLjgzMzMsMTMwLjUgOTIuNSwxMzAuNUMgNzMuNSwxMzAuNSA1NC41LDEzMC41IDM1LjUsMTMwLjVDIDM1LjE3MjQsMTE5Ljk4NiAzNS41MDU4LDEwOS42NTMgMzYuNSw5OS41IFoiLz48L2c+CjxnPjxwYXRoIHN0eWxlPSJvcGFjaXR5OjAuNzUzIiBmaWxsPSIjOTg5ODk4IiBkPSJNIDMyNi41LDEyOC41IEMgMzI3LjkwNiwxMjguOTczIDMyOC41NzMsMTI5Ljk3MyAzMjguNSwxMzEuNUMgMzI3LjA5NCwxMzEuMDI3IDMyNi40MjcsMTMwLjAyNyAzMjYuNSwxMjguNSBaIi8+PC9nPgo8Zz48cGF0aCBzdHlsZT0ib3BhY2l0eTowLjc2NSIgZmlsbD0iIzk4OTg5OCIgZD0iTSAzMzEuNSwxMzQuNSBDIDMzMi45MDYsMTM0Ljk3MyAzMzMuNTczLDEzNS45NzMgMzMzLjUsMTM3LjVDIDMzMi4wOTQsMTM3LjAyNyAzMzEuNDI3LDEzNi4wMjcgMzMxLjUsMTM0LjUgWiIvPjwvZz4KPGc+PHBhdGggc3R5bGU9Im9wYWNpdHk6MC42MzEiIGZpbGw9IiNhY2FjYWMiIGQ9Ik0gMTYwLjUsMTQ0LjUgQyAxNjAuNTYsMTQzLjk1NyAxNjAuODkzLDE0My42MjQgMTYxLjUsMTQzLjVDIDE2Mi40NjYsMTQ1LjM5NiAxNjIuNzk5LDE0Ny4zOTYgMTYyLjUsMTQ5LjVDIDE2MS44MzMsMTQ3LjgzMyAxNjEuMTY3LDE0Ni4xNjcgMTYwLjUsMTQ0LjUgWiIvPjwvZz4KPGc+PHBhdGggc3R5bGU9Im9wYWNpdHk6MC41NzMiIGZpbGw9IiM4ZThlOGUiIGQ9Ik0gMjY3LjUsMTQ1LjUgQyAyNjkuMDI3LDE0NS40MjcgMjcwLjAyNywxNDYuMDk0IDI3MC41LDE0Ny41QyAyNjguOTczLDE0Ny41NzMgMjY3Ljk3MywxNDYuOTA2IDI2Ny41LDE0NS41IFoiLz48L2c+CjxnPjxwYXRoIHN0eWxlPSJvcGFjaXR5OjAuNTY5IiBmaWxsPSIjOGU4ZThlIiBkPSJNIDExOC41LDE0OC41IEMgMTIwLjAyNywxNDguNDI3IDEyMS4wMjcsMTQ5LjA5NCAxMjEuNSwxNTAuNUMgMTE5Ljk3MywxNTAuNTczIDExOC45NzMsMTQ5LjkwNiAxMTguNSwxNDguNSBaIi8+PC9nPgo8Zz48cGF0aCBzdHlsZT0ib3BhY2l0eTowLjMzNSIgZmlsbD0iI2FhYWFhYSIgZD0iTSA5Mi41LDEzMC41IEMgOTIuODMzMywxMzAuNSA5My4xNjY3LDEzMC41IDkzLjUsMTMwLjVDIDkzLjUsMTM4LjE2NyA5My41LDE0NS44MzMgOTMuNSwxNTMuNUMgNjQuNjYxOCwxNTMuODMxIDM1Ljk5NTEsMTUzLjQ5OCA3LjUsMTUyLjVDIDM1LjgzMzMsMTUyLjUgNjQuMTY2NywxNTIuNSA5Mi41LDE1Mi41QyA5Mi41LDE0NS4xNjcgOTIuNSwxMzcuODMzIDkyLjUsMTMwLjUgWiIvPjwvZz4KPC9zdmc+Cg==\";\n\n//# sourceURL=webpack://edie-homepage-master/./src/img/edie.svg?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;