"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/MainNav.jsx":
/*!********************************!*\
  !*** ./components/MainNav.jsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MainNav; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction MainNav() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [searchValue, setSearchValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleSubmit = (event)=>{\n        event.preventDefault();\n        console.log(event);\n        router.push(\"/artwork?title=true&q=\".concat(searchValue));\n        setSearchText(\"\");\n    };\n    const handleSearchChange = (event)=>{\n        setSearchValue(event.target.value);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Navbar, {\n                expand: \"lg\",\n                className: \"fixed-top navbar-dark bg-primary\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Container, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Navbar.Brand, {\n                            children: \"Seonghoon Kim\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\blanc\\\\Documents\\\\Seneca\\\\4학기\\\\WEB 422\\\\Assignment\\\\Assignment 4\\\\my-app\\\\components\\\\MainNav.jsx\",\n                            lineNumber: 25,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Navbar.Toggle, {\n                            \"aria-controls\": \"basic-navbar-nav\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\blanc\\\\Documents\\\\Seneca\\\\4학기\\\\WEB 422\\\\Assignment\\\\Assignment 4\\\\my-app\\\\components\\\\MainNav.jsx\",\n                            lineNumber: 26,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Navbar.Collapse, {\n                            id: \"basic-navbar-nav\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Nav, {\n                                    className: \"me-auto my-2 my-lg-0\",\n                                    style: {\n                                        maxHeight: \"100px\"\n                                    },\n                                    navbarScroll: true,\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                            href: \"/\",\n                                            passHref: true,\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Nav.Link, {\n                                                children: \"Home\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\blanc\\\\Documents\\\\Seneca\\\\4학기\\\\WEB 422\\\\Assignment\\\\Assignment 4\\\\my-app\\\\components\\\\MainNav.jsx\",\n                                                lineNumber: 34,\n                                                columnNumber: 17\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\blanc\\\\Documents\\\\Seneca\\\\4학기\\\\WEB 422\\\\Assignment\\\\Assignment 4\\\\my-app\\\\components\\\\MainNav.jsx\",\n                                            lineNumber: 33,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                            href: \"/search\",\n                                            passHref: true,\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Nav.Link, {\n                                                children: \"Advanced Search\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\blanc\\\\Documents\\\\Seneca\\\\4학기\\\\WEB 422\\\\Assignment\\\\Assignment 4\\\\my-app\\\\components\\\\MainNav.jsx\",\n                                                lineNumber: 37,\n                                                columnNumber: 17\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\blanc\\\\Documents\\\\Seneca\\\\4학기\\\\WEB 422\\\\Assignment\\\\Assignment 4\\\\my-app\\\\components\\\\MainNav.jsx\",\n                                            lineNumber: 36,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\blanc\\\\Documents\\\\Seneca\\\\4학기\\\\WEB 422\\\\Assignment\\\\Assignment 4\\\\my-app\\\\components\\\\MainNav.jsx\",\n                                    lineNumber: 28,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Form, {\n                                    className: \"d-flex\",\n                                    onSubmit: handleSubmit,\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Form.Control, {\n                                            type: \"search\",\n                                            placeholder: \"Search\",\n                                            className: \"me-2\",\n                                            \"aria-label\": \"Search\",\n                                            value: searchValue,\n                                            onChange: handleSearchChange\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\blanc\\\\Documents\\\\Seneca\\\\4학기\\\\WEB 422\\\\Assignment\\\\Assignment 4\\\\my-app\\\\components\\\\MainNav.jsx\",\n                                            lineNumber: 41,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                            variant: \"success\",\n                                            type: \"submit\",\n                                            children: \"Search\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\blanc\\\\Documents\\\\Seneca\\\\4학기\\\\WEB 422\\\\Assignment\\\\Assignment 4\\\\my-app\\\\components\\\\MainNav.jsx\",\n                                            lineNumber: 49,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\blanc\\\\Documents\\\\Seneca\\\\4학기\\\\WEB 422\\\\Assignment\\\\Assignment 4\\\\my-app\\\\components\\\\MainNav.jsx\",\n                                    lineNumber: 40,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\blanc\\\\Documents\\\\Seneca\\\\4학기\\\\WEB 422\\\\Assignment\\\\Assignment 4\\\\my-app\\\\components\\\\MainNav.jsx\",\n                            lineNumber: 27,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\blanc\\\\Documents\\\\Seneca\\\\4학기\\\\WEB 422\\\\Assignment\\\\Assignment 4\\\\my-app\\\\components\\\\MainNav.jsx\",\n                    lineNumber: 24,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\blanc\\\\Documents\\\\Seneca\\\\4학기\\\\WEB 422\\\\Assignment\\\\Assignment 4\\\\my-app\\\\components\\\\MainNav.jsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\blanc\\\\Documents\\\\Seneca\\\\4학기\\\\WEB 422\\\\Assignment\\\\Assignment 4\\\\my-app\\\\components\\\\MainNav.jsx\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, this),\n            \" \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\blanc\\\\Documents\\\\Seneca\\\\4학기\\\\WEB 422\\\\Assignment\\\\Assignment 4\\\\my-app\\\\components\\\\MainNav.jsx\",\n                lineNumber: 56,\n                columnNumber: 14\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(MainNav, \"8PHJvFs7OeUlmnGbdu/cVyWXxTw=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = MainNav;\nvar _c;\n$RefreshReg$(_c, \"MainNav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01haW5OYXYuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUF3QztBQUMrQjtBQUMvQjtBQUNYO0FBRWQsU0FBU1M7O0lBQ3RCLE1BQU1DLFNBQVNILHNEQUFTQTtJQUN4QixNQUFNLENBQUNJLGFBQWFDLGVBQWUsR0FBR1gsK0NBQVFBLENBQUM7SUFFL0MsTUFBTVksZUFBZSxDQUFDQztRQUNwQkEsTUFBTUM7UUFDTkMsUUFBUUMsSUFBSUg7UUFDWkosT0FBT1EsS0FBSyx5QkFBcUMsT0FBWlA7UUFDckNRLGNBQWM7SUFDaEI7SUFFQSxNQUFNQyxxQkFBcUIsQ0FBQ047UUFDMUJGLGVBQWVFLE1BQU1PLE9BQU9DO0lBQzlCO0lBRUEscUJBQ0U7OzBCQUNFLDhEQUFDakIsbURBQU1BO2dCQUFDa0IsUUFBTztnQkFBS0MsV0FBVTswQkFDNUIsNEVBQUNyQixzREFBU0E7O3NDQUNSLDhEQUFDRSxtREFBTUEsQ0FBQ29CO3NDQUFNOzs7Ozs7c0NBQ2QsOERBQUNwQixtREFBTUEsQ0FBQ3FCOzRCQUFPQyxpQkFBYzs7Ozs7O3NDQUM3Qiw4REFBQ3RCLG1EQUFNQSxDQUFDdUI7NEJBQVNDLElBQUc7OzhDQUNsQiw4REFBQ3pCLGdEQUFHQTtvQ0FDRm9CLFdBQVU7b0NBQ1ZNLE9BQU87d0NBQUVDLFdBQVc7b0NBQVE7b0NBQzVCQyxZQUFZOztzREFFWiw4REFBQ3hCLGtEQUFJQTs0Q0FBQ3lCLE1BQUs7NENBQUlDLFFBQVE7c0RBQ3JCLDRFQUFDOUIsZ0RBQUdBLENBQUNJOzBEQUFLOzs7Ozs7Ozs7OztzREFFWiw4REFBQ0Esa0RBQUlBOzRDQUFDeUIsTUFBSzs0Q0FBVUMsUUFBUTtzREFDM0IsNEVBQUM5QixnREFBR0EsQ0FBQ0k7MERBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhDQUdkLDhEQUFDRixpREFBSUE7b0NBQUNrQixXQUFVO29DQUFTVyxVQUFVdEI7O3NEQUNqQyw4REFBQ1AsaURBQUlBLENBQUM4Qjs0Q0FDSkMsTUFBSzs0Q0FDTEMsYUFBWTs0Q0FDWmQsV0FBVTs0Q0FDVmUsY0FBVzs0Q0FDWGpCLE9BQU9YOzRDQUNQNkIsVUFBVXBCOzs7Ozs7c0RBRVosOERBQUNsQixtREFBTUE7NENBQUN1QyxTQUFROzRDQUFVSixNQUFLO3NEQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFPaEQsOERBQUNLOzs7OztZQUFLOzBCQUFDLDhEQUFDQTs7Ozs7OztBQUdkO0dBckR3QmpDOztRQUNQRixrREFBU0E7OztLQURGRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL01haW5OYXYuanN4PzQ3MDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEJ1dHRvbiwgQ29udGFpbmVyLCBOYXYsIE5hdmJhciwgRm9ybSB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1haW5OYXYoKSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgW3NlYXJjaFZhbHVlLCBzZXRTZWFyY2hWYWx1ZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc29sZS5sb2coZXZlbnQpO1xyXG4gICAgcm91dGVyLnB1c2goYC9hcnR3b3JrP3RpdGxlPXRydWUmcT0ke3NlYXJjaFZhbHVlfWApO1xyXG4gICAgc2V0U2VhcmNoVGV4dChcIlwiKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVTZWFyY2hDaGFuZ2UgPSAoZXZlbnQpID0+IHtcclxuICAgIHNldFNlYXJjaFZhbHVlKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxOYXZiYXIgZXhwYW5kPVwibGdcIiBjbGFzc05hbWU9XCJmaXhlZC10b3AgbmF2YmFyLWRhcmsgYmctcHJpbWFyeVwiPlxyXG4gICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICA8TmF2YmFyLkJyYW5kPlNlb25naG9vbiBLaW08L05hdmJhci5CcmFuZD5cclxuICAgICAgICAgIDxOYXZiYXIuVG9nZ2xlIGFyaWEtY29udHJvbHM9XCJiYXNpYy1uYXZiYXItbmF2XCIgLz5cclxuICAgICAgICAgIDxOYXZiYXIuQ29sbGFwc2UgaWQ9XCJiYXNpYy1uYXZiYXItbmF2XCI+XHJcbiAgICAgICAgICAgIDxOYXZcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtZS1hdXRvIG15LTIgbXktbGctMFwiXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgbWF4SGVpZ2h0OiBcIjEwMHB4XCIgfX1cclxuICAgICAgICAgICAgICBuYXZiYXJTY3JvbGxcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCIgcGFzc0hyZWY+XHJcbiAgICAgICAgICAgICAgICA8TmF2Lkxpbms+SG9tZTwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc2VhcmNoXCIgcGFzc0hyZWY+XHJcbiAgICAgICAgICAgICAgICA8TmF2Lkxpbms+QWR2YW5jZWQgU2VhcmNoPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvTmF2PlxyXG4gICAgICAgICAgICA8Rm9ybSBjbGFzc05hbWU9XCJkLWZsZXhcIiBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwic2VhcmNoXCJcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1lLTJcIlxyXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIlNlYXJjaFwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17c2VhcmNoVmFsdWV9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlU2VhcmNoQ2hhbmdlfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwic3VjY2Vzc1wiIHR5cGU9XCJzdWJtaXRcIj5cclxuICAgICAgICAgICAgICAgIFNlYXJjaFxyXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICA8L05hdmJhci5Db2xsYXBzZT5cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgPC9OYXZiYXI+XHJcbiAgICAgIDxiciAvPiA8YnIgLz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJCdXR0b24iLCJDb250YWluZXIiLCJOYXYiLCJOYXZiYXIiLCJGb3JtIiwidXNlUm91dGVyIiwiTGluayIsIk1haW5OYXYiLCJyb3V0ZXIiLCJzZWFyY2hWYWx1ZSIsInNldFNlYXJjaFZhbHVlIiwiaGFuZGxlU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJwdXNoIiwic2V0U2VhcmNoVGV4dCIsImhhbmRsZVNlYXJjaENoYW5nZSIsInRhcmdldCIsInZhbHVlIiwiZXhwYW5kIiwiY2xhc3NOYW1lIiwiQnJhbmQiLCJUb2dnbGUiLCJhcmlhLWNvbnRyb2xzIiwiQ29sbGFwc2UiLCJpZCIsInN0eWxlIiwibWF4SGVpZ2h0IiwibmF2YmFyU2Nyb2xsIiwiaHJlZiIsInBhc3NIcmVmIiwib25TdWJtaXQiLCJDb250cm9sIiwidHlwZSIsInBsYWNlaG9sZGVyIiwiYXJpYS1sYWJlbCIsIm9uQ2hhbmdlIiwidmFyaWFudCIsImJyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/MainNav.jsx\n"));

/***/ })

});