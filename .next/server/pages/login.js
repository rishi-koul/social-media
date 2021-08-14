/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/login";
exports.ids = ["pages/login"];
exports.modules = {

/***/ "./components/Common/WelcomeMsg.js":
/*!*****************************************!*\
  !*** ./components/Common/WelcomeMsg.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"HeaderMsg\": function() { return /* binding */ HeaderMsg; },\n/* harmony export */   \"FooterMsg\": function() { return /* binding */ FooterMsg; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ \"semantic-ui-react\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/Users/rishikoul/Desktop/MERN/social-media/components/Common/WelcomeMsg.js\";\n\nvar __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);\n\n\n\nconst HeaderMsg = () => {\n  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n  const signupRoute = router.pathname === \"/signup\";\n  return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Message, {\n    color: \"teal\",\n    attached: true,\n    header: signupRoute ? \"Get Started\" : \"Welcome Back\",\n    icon: signupRoute ? \"settings\" : \"privacy\",\n    content: signupRoute ? \"Create New Account\" : \"Login with Email and Password\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 9\n    }\n  });\n};\nconst FooterMsg = () => {\n  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n  const signupRoute = router.pathname === \"/signup\";\n  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, \" \", signupRoute ? __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Message, {\n    attached: \"bottom\",\n    warning: true,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 9\n    }\n  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {\n    name: \"help\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 9\n    }\n  }), \"Existing User?\", \" \", __jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n    href: \"/login\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 9\n    }\n  }, \"Login Here Instead\")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Divider, {\n    hidden: true,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 9\n    }\n  })) : __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Message, {\n    attached: \"bottom\",\n    info: true,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 10\n    }\n  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {\n    name: \"lock\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 9\n    }\n  }), __jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n    href: \"/reset\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 9\n    }\n  }, \"Forgot Password\")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Message, {\n    attached: \"bottom\",\n    warning: true,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 9\n    }\n  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {\n    name: \"help\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 9\n    }\n  }), \"New User?\", \" \", __jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n    href: \"/signup\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 9\n    }\n  }, \"Signup Here\"), \"Instead \", \" \")));\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvLi9jb21wb25lbnRzL0NvbW1vbi9XZWxjb21lTXNnLmpzP2FiZTQiXSwibmFtZXMiOlsiSGVhZGVyTXNnIiwicm91dGVyIiwidXNlUm91dGVyIiwic2lnbnVwUm91dGUiLCJwYXRobmFtZSIsIkZvb3Rlck1zZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVPLE1BQU1BLFNBQVMsR0FBQyxNQUFJO0FBQ3ZCLFFBQU1DLE1BQU0sR0FBR0Msc0RBQVMsRUFBeEI7QUFDQSxRQUFNQyxXQUFXLEdBQUdGLE1BQU0sQ0FBQ0csUUFBUCxLQUFrQixTQUF0QztBQUVBLFNBQ0ksTUFBQyxzREFBRDtBQUNBLFNBQUssRUFBQyxNQUROO0FBRUMsWUFBUSxNQUZUO0FBR0MsVUFBTSxFQUFFRCxXQUFXLEdBQUMsYUFBRCxHQUFlLGNBSG5DO0FBSUEsUUFBSSxFQUFFQSxXQUFXLEdBQUMsVUFBRCxHQUFZLFNBSjdCO0FBS0EsV0FBTyxFQUFFQSxXQUFXLEdBQUMsb0JBQUQsR0FBc0IsK0JBTDFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESjtBQVVILENBZE07QUFnQkEsTUFBTUUsU0FBUyxHQUFDLE1BQUk7QUFDdkIsUUFBTUosTUFBTSxHQUFHQyxzREFBUyxFQUF4QjtBQUNBLFFBQU1DLFdBQVcsR0FBR0YsTUFBTSxDQUFDRyxRQUFQLEtBQWtCLFNBQXRDO0FBRUEsU0FBTywwRUFBSUQsV0FBVyxHQUNqQixxRUFDRCxNQUFDLHNEQUFEO0FBQVMsWUFBUSxFQUFDLFFBQWxCO0FBQTJCLFdBQU8sTUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBLE1BQUMsbURBQUQ7QUFBTSxRQUFJLEVBQUMsTUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREEsb0JBRWUsR0FGZixFQUdBLE1BQUMsa0RBQUQ7QUFBTSxRQUFJLEVBQUMsUUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQUhBLENBREMsRUFRRCxNQUFDLHNEQUFEO0FBQVMsVUFBTSxNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFSQyxDQURpQixHQWFqQixxRUFDQSxNQUFDLHNEQUFEO0FBQVMsWUFBUSxFQUFDLFFBQWxCO0FBQTJCLFFBQUksTUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNELE1BQUMsbURBQUQ7QUFBTSxRQUFJLEVBQUMsTUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREMsRUFFRCxNQUFDLGtEQUFEO0FBQU0sUUFBSSxFQUFDLFFBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFGQyxDQURBLEVBUUQsTUFBQyxzREFBRDtBQUFTLFlBQVEsRUFBQyxRQUFsQjtBQUEyQixXQUFPLE1BQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQSxNQUFDLG1EQUFEO0FBQU0sUUFBSSxFQUFDLE1BQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURBLGVBRVUsR0FGVixFQUdBLE1BQUMsa0RBQUQ7QUFBTSxRQUFJLEVBQUMsU0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUhBLGNBTVMsR0FOVCxDQVJDLENBYkUsQ0FBUDtBQWtDSCxDQXRDTSIsImZpbGUiOiIuL2NvbXBvbmVudHMvQ29tbW9uL1dlbGNvbWVNc2cuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0ljb24sIE1lc3NhZ2UsIERpdmlkZXJ9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSBcIm5leHQvcm91dGVyXCJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxuXG5leHBvcnQgY29uc3QgSGVhZGVyTXNnPSgpPT57XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgICBjb25zdCBzaWdudXBSb3V0ZSA9IHJvdXRlci5wYXRobmFtZT09PVwiL3NpZ251cFwiXG5cbiAgICByZXR1cm4oXG4gICAgICAgIDxNZXNzYWdlXG4gICAgICAgIGNvbG9yPVwidGVhbFwiXG4gICAgICAgICBhdHRhY2hlZFxuICAgICAgICAgaGVhZGVyPXtzaWdudXBSb3V0ZT9cIkdldCBTdGFydGVkXCI6XCJXZWxjb21lIEJhY2tcIn1cbiAgICAgICAgaWNvbj17c2lnbnVwUm91dGU/XCJzZXR0aW5nc1wiOlwicHJpdmFjeVwifSBcbiAgICAgICAgY29udGVudD17c2lnbnVwUm91dGU/XCJDcmVhdGUgTmV3IEFjY291bnRcIjpcIkxvZ2luIHdpdGggRW1haWwgYW5kIFBhc3N3b3JkXCJ9XG4gICAgICAgIC8+XG5cbiAgICApXG59XG5cbmV4cG9ydCBjb25zdCBGb290ZXJNc2c9KCk9PntcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICAgIGNvbnN0IHNpZ251cFJvdXRlID0gcm91dGVyLnBhdGhuYW1lPT09XCIvc2lnbnVwXCJcblxuICAgIHJldHVybiA8PiB7c2lnbnVwUm91dGUgPyAoXG4gICAgICAgICA8PlxuICAgICAgICA8TWVzc2FnZSBhdHRhY2hlZD1cImJvdHRvbVwiIHdhcm5pbmc+XG4gICAgICAgIDxJY29uIG5hbWU9XCJoZWxwXCIvPlxuICAgICAgICBFeGlzdGluZyBVc2VyP3tcIiBcIn1cbiAgICAgICAgPExpbmsgaHJlZj1cIi9sb2dpblwiPlxuICAgICAgICAgICAgTG9naW4gSGVyZSBJbnN0ZWFkXG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9NZXNzYWdlPlxuICAgICAgICA8RGl2aWRlciBoaWRkZW4gLz5cblxuICAgICAgICA8Lz5cbiAgICApIDogKFxuICAgICAgICAgPD5cbiAgICAgICAgIDxNZXNzYWdlIGF0dGFjaGVkPVwiYm90dG9tXCIgaW5mbz5cbiAgICAgICAgPEljb24gbmFtZT1cImxvY2tcIi8+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvcmVzZXRcIj5cbiAgICAgICAgICAgIEZvcmdvdCBQYXNzd29yZFxuICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvTWVzc2FnZT5cblxuICAgICAgICA8TWVzc2FnZSBhdHRhY2hlZD1cImJvdHRvbVwiIHdhcm5pbmc+XG4gICAgICAgIDxJY29uIG5hbWU9XCJoZWxwXCIvPlxuICAgICAgICBOZXcgVXNlcj97XCIgXCJ9XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvc2lnbnVwXCI+XG4gICAgICAgICAgICBTaWdudXAgSGVyZVxuICAgICAgICA8L0xpbms+XG4gICAgICAgIEluc3RlYWQge1wiIFwifVxuICAgICAgICA8L01lc3NhZ2U+XG4gICAgICAgIDwvPlxuICAgICkgXG4gICAgXG4gICAgfTwvPjtcbiAgICBcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Common/WelcomeMsg.js\n");

/***/ }),

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Common_WelcomeMsg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Common/WelcomeMsg */ \"./components/Common/WelcomeMsg.js\");\nvar _jsxFileName = \"/Users/rishikoul/Desktop/MERN/social-media/pages/login.js\";\n\nvar __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);\n\n\nfunction Login() {\n  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(_components_Common_WelcomeMsg__WEBPACK_IMPORTED_MODULE_1__.HeaderMsg, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 9\n    }\n  }), __jsx(_components_Common_WelcomeMsg__WEBPACK_IMPORTED_MODULE_1__.FooterMsg, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 9\n    }\n  }));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Login);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvLi9wYWdlcy9sb2dpbi5qcz8zYjY5Il0sIm5hbWVzIjpbIkxvZ2luIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUEsU0FBU0EsS0FBVCxHQUFpQjtBQUNiLFNBQ0kscUVBQ0EsTUFBQyxvRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREEsRUFFQSxNQUFDLG9FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGQSxDQURKO0FBTUg7O0FBRUQsK0RBQWVBLEtBQWYiLCJmaWxlIjoiLi9wYWdlcy9sb2dpbi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SGVhZGVyTXNnLCBGb290ZXJNc2d9IGZyb20gXCIuLi9jb21wb25lbnRzL0NvbW1vbi9XZWxjb21lTXNnXCJcblxuZnVuY3Rpb24gTG9naW4oKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgPEhlYWRlck1zZyAvPlxuICAgICAgICA8Rm9vdGVyTXNnIC8+XG4gICAgICAgIDwvPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9naW5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/login.js\n");

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

/***/ }),

/***/ "semantic-ui-react":
/*!************************************!*\
  !*** external "semantic-ui-react" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("semantic-ui-react");;

/***/ }),

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js"], function() { return __webpack_exec__("./pages/login.js"); });
module.exports = __webpack_exports__;

})();