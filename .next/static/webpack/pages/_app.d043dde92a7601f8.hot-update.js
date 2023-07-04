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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MainNav; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction MainNav() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [searchValue, setSearchValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleSubmit = (event)=>{\n        event.preventDefault();\n        const searchField = event.target.value;\n        router.push(\"/artwork?title=true&q=\".concat(searchField));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Navbar, {\n                expand: \"lg\",\n                className: \"fixed-top navbar-dark bg-primary\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Container, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Navbar.Brand, {\n                            children: \"Seonghoon Kim\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\blanc\\\\Documents\\\\Seneca\\\\4학기\\\\WEB 422\\\\Assignment\\\\Assignment 4\\\\my-app\\\\components\\\\MainNav.jsx\",\n                            lineNumber: 20,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Navbar.Toggle, {\n                            \"aria-controls\": \"basic-navbar-nav\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\blanc\\\\Documents\\\\Seneca\\\\4학기\\\\WEB 422\\\\Assignment\\\\Assignment 4\\\\my-app\\\\components\\\\MainNav.jsx\",\n                            lineNumber: 21,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Navbar.Collapse, {\n                            id: \"basic-navbar-nav\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Nav, {\n                                    className: \"me-auto my-2 my-lg-0\",\n                                    style: {\n                                        maxHeight: \"100px\"\n                                    },\n                                    navbarScroll: true,\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                            href: \"/\",\n                                            passHref: true,\n                                            legacyBehavior: true,\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Nav.Link, {\n                                                children: \"Home\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\blanc\\\\Documents\\\\Seneca\\\\4학기\\\\WEB 422\\\\Assignment\\\\Assignment 4\\\\my-app\\\\components\\\\MainNav.jsx\",\n                                                lineNumber: 29,\n                                                columnNumber: 17\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\blanc\\\\Documents\\\\Seneca\\\\4학기\\\\WEB 422\\\\Assignment\\\\Assignment 4\\\\my-app\\\\components\\\\MainNav.jsx\",\n                                            lineNumber: 28,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                            href: \"/search\",\n                                            passHref: true,\n                                            legacyBehavior: true,\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Nav.Link, {\n                                                children: \"Advanced Search\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\blanc\\\\Documents\\\\Seneca\\\\4학기\\\\WEB 422\\\\Assignment\\\\Assignment 4\\\\my-app\\\\components\\\\MainNav.jsx\",\n                                                lineNumber: 32,\n                                                columnNumber: 17\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\blanc\\\\Documents\\\\Seneca\\\\4학기\\\\WEB 422\\\\Assignment\\\\Assignment 4\\\\my-app\\\\components\\\\MainNav.jsx\",\n                                            lineNumber: 31,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\blanc\\\\Documents\\\\Seneca\\\\4학기\\\\WEB 422\\\\Assignment\\\\Assignment 4\\\\my-app\\\\components\\\\MainNav.jsx\",\n                                    lineNumber: 23,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Form, {\n                                    className: \"d-flex\",\n                                    onSubmit: handleSubmit,\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Form.Control, {\n                                            type: \"search\",\n                                            placeholder: \"Search\",\n                                            className: \"me-2\",\n                                            \"aria-label\": \"Search\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\blanc\\\\Documents\\\\Seneca\\\\4학기\\\\WEB 422\\\\Assignment\\\\Assignment 4\\\\my-app\\\\components\\\\MainNav.jsx\",\n                                            lineNumber: 36,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                            variant: \"success\",\n                                            type: \"submit\",\n                                            children: \"Search\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\blanc\\\\Documents\\\\Seneca\\\\4학기\\\\WEB 422\\\\Assignment\\\\Assignment 4\\\\my-app\\\\components\\\\MainNav.jsx\",\n                                            lineNumber: 42,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\blanc\\\\Documents\\\\Seneca\\\\4학기\\\\WEB 422\\\\Assignment\\\\Assignment 4\\\\my-app\\\\components\\\\MainNav.jsx\",\n                                    lineNumber: 35,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\blanc\\\\Documents\\\\Seneca\\\\4학기\\\\WEB 422\\\\Assignment\\\\Assignment 4\\\\my-app\\\\components\\\\MainNav.jsx\",\n                            lineNumber: 22,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\blanc\\\\Documents\\\\Seneca\\\\4학기\\\\WEB 422\\\\Assignment\\\\Assignment 4\\\\my-app\\\\components\\\\MainNav.jsx\",\n                    lineNumber: 19,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\blanc\\\\Documents\\\\Seneca\\\\4학기\\\\WEB 422\\\\Assignment\\\\Assignment 4\\\\my-app\\\\components\\\\MainNav.jsx\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\blanc\\\\Documents\\\\Seneca\\\\4학기\\\\WEB 422\\\\Assignment\\\\Assignment 4\\\\my-app\\\\components\\\\MainNav.jsx\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, this),\n            \" \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\blanc\\\\Documents\\\\Seneca\\\\4학기\\\\WEB 422\\\\Assignment\\\\Assignment 4\\\\my-app\\\\components\\\\MainNav.jsx\",\n                lineNumber: 49,\n                columnNumber: 14\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(MainNav, \"8PHJvFs7OeUlmnGbdu/cVyWXxTw=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = MainNav;\nvar _c;\n$RefreshReg$(_c, \"MainNav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01haW5OYXYuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUF3QztBQUMrQjtBQUMvQjtBQUNYO0FBRWQsU0FBU1M7O0lBQ3RCLE1BQU1DLFNBQVNILHNEQUFTQTtJQUN4QixNQUFNLENBQUNJLGFBQWFDLGVBQWUsR0FBR1gsK0NBQVFBLENBQUM7SUFFL0MsTUFBTVksZUFBZSxDQUFDQztRQUNwQkEsTUFBTUM7UUFDTixNQUFNQyxjQUFjRixNQUFNRyxPQUFPQztRQUNqQ1IsT0FBT1MsS0FBSyx5QkFBcUMsT0FBWkg7SUFDdkM7SUFFQSxxQkFDRTs7MEJBQ0UsOERBQUNYLG1EQUFNQTtnQkFBQ2UsUUFBTztnQkFBS0MsV0FBVTswQkFDNUIsNEVBQUNsQixzREFBU0E7O3NDQUNSLDhEQUFDRSxtREFBTUEsQ0FBQ2lCO3NDQUFNOzs7Ozs7c0NBQ2QsOERBQUNqQixtREFBTUEsQ0FBQ2tCOzRCQUFPQyxpQkFBYzs7Ozs7O3NDQUM3Qiw4REFBQ25CLG1EQUFNQSxDQUFDb0I7NEJBQVNDLElBQUc7OzhDQUNsQiw4REFBQ3RCLGdEQUFHQTtvQ0FDRmlCLFdBQVU7b0NBQ1ZNLE9BQU87d0NBQUVDLFdBQVc7b0NBQVE7b0NBQzVCQyxZQUFZOztzREFFWiw4REFBQ3JCLGtEQUFJQTs0Q0FBQ3NCLE1BQUs7NENBQUlDLFFBQVE7NENBQUNDLGNBQWM7c0RBQ3BDLDRFQUFDNUIsZ0RBQUdBLENBQUNJOzBEQUFLOzs7Ozs7Ozs7OztzREFFWiw4REFBQ0Esa0RBQUlBOzRDQUFDc0IsTUFBSzs0Q0FBVUMsUUFBUTs0Q0FBQ0MsY0FBYztzREFDMUMsNEVBQUM1QixnREFBR0EsQ0FBQ0k7MERBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhDQUdkLDhEQUFDRixpREFBSUE7b0NBQUNlLFdBQVU7b0NBQVNZLFVBQVVwQjs7c0RBQ2pDLDhEQUFDUCxpREFBSUEsQ0FBQzRCOzRDQUNKQyxNQUFLOzRDQUNMQyxhQUFZOzRDQUNaZixXQUFVOzRDQUNWZ0IsY0FBVzs7Ozs7O3NEQUViLDhEQUFDbkMsbURBQU1BOzRDQUFDb0MsU0FBUTs0Q0FBVUgsTUFBSztzREFBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBT2hELDhEQUFDSTs7Ozs7WUFBSzswQkFBQyw4REFBQ0E7Ozs7Ozs7QUFHZDtHQTlDd0I5Qjs7UUFDUEYsa0RBQVNBOzs7S0FERkUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NYWluTmF2LmpzeD80NzA2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBCdXR0b24sIENvbnRhaW5lciwgTmF2LCBOYXZiYXIsIEZvcm0gfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNYWluTmF2KCkge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IFtzZWFyY2hWYWx1ZSwgc2V0U2VhcmNoVmFsdWVdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IHNlYXJjaEZpZWxkID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG4gICAgcm91dGVyLnB1c2goYC9hcnR3b3JrP3RpdGxlPXRydWUmcT0ke3NlYXJjaEZpZWxkfWApO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8TmF2YmFyIGV4cGFuZD1cImxnXCIgY2xhc3NOYW1lPVwiZml4ZWQtdG9wIG5hdmJhci1kYXJrIGJnLXByaW1hcnlcIj5cclxuICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgPE5hdmJhci5CcmFuZD5TZW9uZ2hvb24gS2ltPC9OYXZiYXIuQnJhbmQ+XHJcbiAgICAgICAgICA8TmF2YmFyLlRvZ2dsZSBhcmlhLWNvbnRyb2xzPVwiYmFzaWMtbmF2YmFyLW5hdlwiIC8+XHJcbiAgICAgICAgICA8TmF2YmFyLkNvbGxhcHNlIGlkPVwiYmFzaWMtbmF2YmFyLW5hdlwiPlxyXG4gICAgICAgICAgICA8TmF2XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWUtYXV0byBteS0yIG15LWxnLTBcIlxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IG1heEhlaWdodDogXCIxMDBweFwiIH19XHJcbiAgICAgICAgICAgICAgbmF2YmFyU2Nyb2xsXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiIHBhc3NIcmVmIGxlZ2FjeUJlaGF2aW9yPlxyXG4gICAgICAgICAgICAgICAgPE5hdi5MaW5rPkhvbWU8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3NlYXJjaFwiIHBhc3NIcmVmIGxlZ2FjeUJlaGF2aW9yPlxyXG4gICAgICAgICAgICAgICAgPE5hdi5MaW5rPkFkdmFuY2VkIFNlYXJjaDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L05hdj5cclxuICAgICAgICAgICAgPEZvcm0gY2xhc3NOYW1lPVwiZC1mbGV4XCIgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInNlYXJjaFwiXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaFwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtZS0yXCJcclxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJTZWFyY2hcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwic3VjY2Vzc1wiIHR5cGU9XCJzdWJtaXRcIj5cclxuICAgICAgICAgICAgICAgIFNlYXJjaFxyXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICA8L05hdmJhci5Db2xsYXBzZT5cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgPC9OYXZiYXI+XHJcbiAgICAgIDxiciAvPiA8YnIgLz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJCdXR0b24iLCJDb250YWluZXIiLCJOYXYiLCJOYXZiYXIiLCJGb3JtIiwidXNlUm91dGVyIiwiTGluayIsIk1haW5OYXYiLCJyb3V0ZXIiLCJzZWFyY2hWYWx1ZSIsInNldFNlYXJjaFZhbHVlIiwiaGFuZGxlU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInNlYXJjaEZpZWxkIiwidGFyZ2V0IiwidmFsdWUiLCJwdXNoIiwiZXhwYW5kIiwiY2xhc3NOYW1lIiwiQnJhbmQiLCJUb2dnbGUiLCJhcmlhLWNvbnRyb2xzIiwiQ29sbGFwc2UiLCJpZCIsInN0eWxlIiwibWF4SGVpZ2h0IiwibmF2YmFyU2Nyb2xsIiwiaHJlZiIsInBhc3NIcmVmIiwibGVnYWN5QmVoYXZpb3IiLCJvblN1Ym1pdCIsIkNvbnRyb2wiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJhcmlhLWxhYmVsIiwidmFyaWFudCIsImJyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/MainNav.jsx\n"));

/***/ })

});