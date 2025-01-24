"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/admin/products/[id]/route";
exports.ids = ["app/api/admin/products/[id]/route"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("lodash");

/***/ }),

/***/ "lodash/at":
/*!****************************!*\
  !*** external "lodash/at" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("lodash/at");

/***/ }),

/***/ "lodash/clone":
/*!*******************************!*\
  !*** external "lodash/clone" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("lodash/clone");

/***/ }),

/***/ "lodash/compact":
/*!*********************************!*\
  !*** external "lodash/compact" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("lodash/compact");

/***/ }),

/***/ "lodash/extend":
/*!********************************!*\
  !*** external "lodash/extend" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("lodash/extend");

/***/ }),

/***/ "lodash/filter":
/*!********************************!*\
  !*** external "lodash/filter" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("lodash/filter");

/***/ }),

/***/ "lodash/first":
/*!*******************************!*\
  !*** external "lodash/first" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("lodash/first");

/***/ }),

/***/ "lodash/includes":
/*!**********************************!*\
  !*** external "lodash/includes" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("lodash/includes");

/***/ }),

/***/ "lodash/isArray":
/*!*********************************!*\
  !*** external "lodash/isArray" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("lodash/isArray");

/***/ }),

/***/ "lodash/isEmpty":
/*!*********************************!*\
  !*** external "lodash/isEmpty" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("lodash/isEmpty");

/***/ }),

/***/ "lodash/isFunction":
/*!************************************!*\
  !*** external "lodash/isFunction" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("lodash/isFunction");

/***/ }),

/***/ "lodash/isNumber":
/*!**********************************!*\
  !*** external "lodash/isNumber" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("lodash/isNumber");

/***/ }),

/***/ "lodash/isObject":
/*!**********************************!*\
  !*** external "lodash/isObject" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("lodash/isObject");

/***/ }),

/***/ "lodash/isPlainObject":
/*!***************************************!*\
  !*** external "lodash/isPlainObject" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("lodash/isPlainObject");

/***/ }),

/***/ "lodash/isString":
/*!**********************************!*\
  !*** external "lodash/isString" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("lodash/isString");

/***/ }),

/***/ "lodash/isUndefined":
/*!*************************************!*\
  !*** external "lodash/isUndefined" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("lodash/isUndefined");

/***/ }),

/***/ "lodash/last":
/*!******************************!*\
  !*** external "lodash/last" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("lodash/last");

/***/ }),

/***/ "lodash/map":
/*!*****************************!*\
  !*** external "lodash/map" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("lodash/map");

/***/ }),

/***/ "lodash/take":
/*!******************************!*\
  !*** external "lodash/take" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("lodash/take");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fadmin%2Fproducts%2F%5Bid%5D%2Froute&page=%2Fapi%2Fadmin%2Fproducts%2F%5Bid%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fadmin%2Fproducts%2F%5Bid%5D%2Froute.ts&appDir=%2FUsers%2Falessiocavatassi%2FnodatabaseTDC%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Falessiocavatassi%2FnodatabaseTDC&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fadmin%2Fproducts%2F%5Bid%5D%2Froute&page=%2Fapi%2Fadmin%2Fproducts%2F%5Bid%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fadmin%2Fproducts%2F%5Bid%5D%2Froute.ts&appDir=%2FUsers%2Falessiocavatassi%2FnodatabaseTDC%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Falessiocavatassi%2FnodatabaseTDC&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_alessiocavatassi_nodatabaseTDC_app_api_admin_products_id_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/admin/products/[id]/route.ts */ \"(rsc)/./app/api/admin/products/[id]/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/admin/products/[id]/route\",\n        pathname: \"/api/admin/products/[id]\",\n        filename: \"route\",\n        bundlePath: \"app/api/admin/products/[id]/route\"\n    },\n    resolvedPagePath: \"/Users/alessiocavatassi/nodatabaseTDC/app/api/admin/products/[id]/route.ts\",\n    nextConfigOutput,\n    userland: _Users_alessiocavatassi_nodatabaseTDC_app_api_admin_products_id_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/admin/products/[id]/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZhZG1pbiUyRnByb2R1Y3RzJTJGJTVCaWQlNUQlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmFkbWluJTJGcHJvZHVjdHMlMkYlNUJpZCU1RCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmFkbWluJTJGcHJvZHVjdHMlMkYlNUJpZCU1RCUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRmFsZXNzaW9jYXZhdGFzc2klMkZub2RhdGFiYXNlVERDJTJGYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj0lMkZVc2VycyUyRmFsZXNzaW9jYXZhdGFzc2klMkZub2RhdGFiYXNlVERDJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQzBCO0FBQ3ZHO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnSEFBbUI7QUFDM0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsdUdBQXVHO0FBQy9HO0FBQ0E7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDNko7O0FBRTdKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbm9kYXRhYmFzZXRkYy8/Njk0MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIvVXNlcnMvYWxlc3Npb2NhdmF0YXNzaS9ub2RhdGFiYXNlVERDL2FwcC9hcGkvYWRtaW4vcHJvZHVjdHMvW2lkXS9yb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvYWRtaW4vcHJvZHVjdHMvW2lkXS9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2FkbWluL3Byb2R1Y3RzL1tpZF1cIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL2FkbWluL3Byb2R1Y3RzL1tpZF0vcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCIvVXNlcnMvYWxlc3Npb2NhdmF0YXNzaS9ub2RhdGFiYXNlVERDL2FwcC9hcGkvYWRtaW4vcHJvZHVjdHMvW2lkXS9yb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBoZWFkZXJIb29rcywgc3RhdGljR2VuZXJhdGlvbkJhaWxvdXQgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS9hZG1pbi9wcm9kdWN0cy9baWRdL3JvdXRlXCI7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHNlcnZlckhvb2tzLFxuICAgICAgICBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIGhlYWRlckhvb2tzLCBzdGF0aWNHZW5lcmF0aW9uQmFpbG91dCwgb3JpZ2luYWxQYXRobmFtZSwgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fadmin%2Fproducts%2F%5Bid%5D%2Froute&page=%2Fapi%2Fadmin%2Fproducts%2F%5Bid%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fadmin%2Fproducts%2F%5Bid%5D%2Froute.ts&appDir=%2FUsers%2Falessiocavatassi%2FnodatabaseTDC%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Falessiocavatassi%2FnodatabaseTDC&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/admin/products/[id]/route.ts":
/*!**********************************************!*\
  !*** ./app/api/admin/products/[id]/route.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   PUT: () => (/* binding */ PUT)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_auth_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/auth.config */ \"(rsc)/./lib/auth.config.ts\");\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/prisma */ \"(rsc)/./lib/prisma.ts\");\n/* harmony import */ var cloudinary__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cloudinary */ \"(rsc)/./node_modules/cloudinary/cloudinary.js\");\n/* harmony import */ var cloudinary__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(cloudinary__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n// Configura Cloudinary\ncloudinary__WEBPACK_IMPORTED_MODULE_3__.v2.config({\n    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,\n    api_key: process.env.CLOUDINARY_API_KEY,\n    api_secret: process.env.CLOUDINARY_API_SECRET\n});\nasync function PUT(req, { params }) {\n    try {\n        console.log(\"PUT request received for product:\", params.id);\n        const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_0__.getServerSession)(_lib_auth_config__WEBPACK_IMPORTED_MODULE_1__.authOptions);\n        console.log(\"Session:\", session);\n        if (!session?.user || session.user.role !== \"ADMIN\") {\n            return new Response(JSON.stringify({\n                message: \"Unauthorized\"\n            }), {\n                status: 401,\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                }\n            });\n        }\n        const productId = params.id;\n        const formData = await req.formData();\n        console.log(\"Received form data fields:\", Array.from(formData.entries()));\n        const updateData = {};\n        // Handle text fields\n        if (formData.has(\"titleEn\")) updateData.titleEn = formData.get(\"titleEn\");\n        if (formData.has(\"titleIt\")) updateData.titleIt = formData.get(\"titleIt\");\n        if (formData.has(\"descriptionEn\")) updateData.descriptionEn = formData.get(\"descriptionEn\");\n        if (formData.has(\"descriptionIt\")) updateData.descriptionIt = formData.get(\"descriptionIt\");\n        if (formData.has(\"price\")) {\n            const price = Number(formData.get(\"price\"));\n            if (!isNaN(price)) {\n                updateData.price = price;\n            }\n        }\n        if (formData.has(\"status\")) updateData.status = formData.get(\"status\");\n        if (formData.has(\"brand\")) updateData.brand = formData.get(\"brand\") || null;\n        if (formData.has(\"model\")) updateData.model = formData.get(\"model\") || null;\n        if (formData.has(\"year\")) {\n            const year = parseInt(formData.get(\"year\"), 10);\n            if (!isNaN(year)) {\n                updateData.year = year;\n            }\n        }\n        if (formData.has(\"condition\")) updateData.condition = formData.get(\"condition\") || null;\n        console.log(\"Update data:\", updateData);\n        // Handle image file\n        const imageFile = formData.get(\"image\");\n        if (imageFile) {\n            console.log(\"Processing image file:\", imageFile.name);\n            try {\n                const bytes = await imageFile.arrayBuffer();\n                const buffer = Buffer.from(bytes);\n                const uploadResponse = await new Promise((resolve, reject)=>{\n                    cloudinary__WEBPACK_IMPORTED_MODULE_3__.v2.uploader.upload_stream({\n                        folder: \"orologi\",\n                        resource_type: \"image\",\n                        transformation: [\n                            {\n                                width: 800,\n                                height: 800,\n                                crop: \"fill\",\n                                gravity: \"auto\"\n                            },\n                            {\n                                quality: \"auto\",\n                                fetch_format: \"auto\"\n                            }\n                        ]\n                    }, (error, result)=>{\n                        if (error) {\n                            console.error(\"Cloudinary upload error:\", error);\n                            reject(error);\n                        } else {\n                            resolve(result);\n                        }\n                    }).end(buffer);\n                });\n                console.log(\"Cloudinary upload response:\", uploadResponse);\n                const cloudinaryUrl = uploadResponse.secure_url;\n                // Update images in database\n                await _lib_prisma__WEBPACK_IMPORTED_MODULE_2__[\"default\"].image.deleteMany({\n                    where: {\n                        productId\n                    }\n                });\n                await _lib_prisma__WEBPACK_IMPORTED_MODULE_2__[\"default\"].image.create({\n                    data: {\n                        url: cloudinaryUrl,\n                        alt: `${updateData.titleEn || \"Product\"} image`,\n                        isMain: true,\n                        productId\n                    }\n                });\n            } catch (imageError) {\n                console.error(\"Image processing error:\", imageError);\n                throw imageError;\n            }\n        }\n        // Update product\n        const updatedProduct = await _lib_prisma__WEBPACK_IMPORTED_MODULE_2__[\"default\"].product.update({\n            where: {\n                id: productId\n            },\n            data: updateData,\n            include: {\n                images: true\n            }\n        });\n        console.log(\"Updated product:\", updatedProduct);\n        return new Response(JSON.stringify(updatedProduct), {\n            status: 200,\n            headers: {\n                \"Content-Type\": \"application/json\"\n            }\n        });\n    } catch (error) {\n        console.error(\"Error in PUT route:\", error);\n        return new Response(JSON.stringify({\n            message: error instanceof Error ? error.message : \"Failed to update product\",\n            details: error\n        }), {\n            status: 500,\n            headers: {\n                \"Content-Type\": \"application/json\"\n            }\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2FkbWluL3Byb2R1Y3RzL1tpZF0vcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUE2QztBQUNHO0FBQ2Q7QUFDWTtBQUc5Qyx1QkFBdUI7QUFDdkJJLDBDQUFVQSxDQUFDQyxNQUFNLENBQUM7SUFDaEJDLFlBQVlDLFFBQVFDLEdBQUcsQ0FBQ0MscUJBQXFCO0lBQzdDQyxTQUFTSCxRQUFRQyxHQUFHLENBQUNHLGtCQUFrQjtJQUN2Q0MsWUFBWUwsUUFBUUMsR0FBRyxDQUFDSyxxQkFBcUI7QUFDL0M7QUFNTyxlQUFlQyxJQUFJQyxHQUFZLEVBQUUsRUFBRUMsTUFBTSxFQUFVO0lBQ3hELElBQUk7UUFDRkMsUUFBUUMsR0FBRyxDQUFDLHFDQUFxQ0YsT0FBT0csRUFBRTtRQUUxRCxNQUFNQyxVQUFVLE1BQU1wQiwyREFBZ0JBLENBQUNDLHlEQUFXQTtRQUNsRGdCLFFBQVFDLEdBQUcsQ0FBQyxZQUFZRTtRQUV4QixJQUFJLENBQUNBLFNBQVNDLFFBQVFELFFBQVFDLElBQUksQ0FBQ0MsSUFBSSxLQUFLLFNBQVM7WUFDbkQsT0FBTyxJQUFJQyxTQUFTQyxLQUFLQyxTQUFTLENBQUM7Z0JBQUVDLFNBQVM7WUFBZSxJQUFJO2dCQUMvREMsUUFBUTtnQkFDUkMsU0FBUztvQkFBRSxnQkFBZ0I7Z0JBQW1CO1lBQ2hEO1FBQ0Y7UUFFQSxNQUFNQyxZQUFZYixPQUFPRyxFQUFFO1FBQzNCLE1BQU1XLFdBQVcsTUFBTWYsSUFBSWUsUUFBUTtRQUNuQ2IsUUFBUUMsR0FBRyxDQUFDLDhCQUE4QmEsTUFBTUMsSUFBSSxDQUFDRixTQUFTRyxPQUFPO1FBRXJFLE1BQU1DLGFBQWtCLENBQUM7UUFFekIscUJBQXFCO1FBQ3JCLElBQUlKLFNBQVNLLEdBQUcsQ0FBQyxZQUFZRCxXQUFXRSxPQUFPLEdBQUdOLFNBQVNPLEdBQUcsQ0FBQztRQUMvRCxJQUFJUCxTQUFTSyxHQUFHLENBQUMsWUFBWUQsV0FBV0ksT0FBTyxHQUFHUixTQUFTTyxHQUFHLENBQUM7UUFDL0QsSUFBSVAsU0FBU0ssR0FBRyxDQUFDLGtCQUFrQkQsV0FBV0ssYUFBYSxHQUFHVCxTQUFTTyxHQUFHLENBQUM7UUFDM0UsSUFBSVAsU0FBU0ssR0FBRyxDQUFDLGtCQUFrQkQsV0FBV00sYUFBYSxHQUFHVixTQUFTTyxHQUFHLENBQUM7UUFDM0UsSUFBSVAsU0FBU0ssR0FBRyxDQUFDLFVBQVU7WUFDekIsTUFBTU0sUUFBUUMsT0FBT1osU0FBU08sR0FBRyxDQUFDO1lBQ2xDLElBQUksQ0FBQ00sTUFBTUYsUUFBUTtnQkFDakJQLFdBQVdPLEtBQUssR0FBR0E7WUFDckI7UUFDRjtRQUNBLElBQUlYLFNBQVNLLEdBQUcsQ0FBQyxXQUFXRCxXQUFXUCxNQUFNLEdBQUdHLFNBQVNPLEdBQUcsQ0FBQztRQUM3RCxJQUFJUCxTQUFTSyxHQUFHLENBQUMsVUFBVUQsV0FBV1UsS0FBSyxHQUFHZCxTQUFTTyxHQUFHLENBQUMsWUFBWTtRQUN2RSxJQUFJUCxTQUFTSyxHQUFHLENBQUMsVUFBVUQsV0FBV1csS0FBSyxHQUFHZixTQUFTTyxHQUFHLENBQUMsWUFBWTtRQUN2RSxJQUFJUCxTQUFTSyxHQUFHLENBQUMsU0FBUztZQUN4QixNQUFNVyxPQUFPQyxTQUFTakIsU0FBU08sR0FBRyxDQUFDLFNBQW1CO1lBQ3RELElBQUksQ0FBQ00sTUFBTUcsT0FBTztnQkFDaEJaLFdBQVdZLElBQUksR0FBR0E7WUFDcEI7UUFDRjtRQUNBLElBQUloQixTQUFTSyxHQUFHLENBQUMsY0FBY0QsV0FBV2MsU0FBUyxHQUFHbEIsU0FBU08sR0FBRyxDQUFDLGdCQUFnQjtRQUVuRnBCLFFBQVFDLEdBQUcsQ0FBQyxnQkFBZ0JnQjtRQUU1QixvQkFBb0I7UUFDcEIsTUFBTWUsWUFBWW5CLFNBQVNPLEdBQUcsQ0FBQztRQUMvQixJQUFJWSxXQUFXO1lBQ2JoQyxRQUFRQyxHQUFHLENBQUMsMEJBQTBCK0IsVUFBVUMsSUFBSTtZQUVwRCxJQUFJO2dCQUNGLE1BQU1DLFFBQVEsTUFBTUYsVUFBVUcsV0FBVztnQkFDekMsTUFBTUMsU0FBU0MsT0FBT3RCLElBQUksQ0FBQ21CO2dCQUUzQixNQUFNSSxpQkFBaUIsTUFBTSxJQUFJQyxRQUFRLENBQUNDLFNBQVNDO29CQUNqRHRELDBDQUFVQSxDQUFDdUQsUUFBUSxDQUFDQyxhQUFhLENBQy9CO3dCQUNFQyxRQUFRO3dCQUNSQyxlQUFlO3dCQUNmQyxnQkFBZ0I7NEJBQ2Q7Z0NBQUVDLE9BQU87Z0NBQUtDLFFBQVE7Z0NBQUtDLE1BQU07Z0NBQVFDLFNBQVM7NEJBQU87NEJBQ3pEO2dDQUFFQyxTQUFTO2dDQUFRQyxjQUFjOzRCQUFPO3lCQUN6QztvQkFDSCxHQUNBLENBQUNDLE9BQU9DO3dCQUNOLElBQUlELE9BQU87NEJBQ1RyRCxRQUFRcUQsS0FBSyxDQUFDLDRCQUE0QkE7NEJBQzFDWixPQUFPWTt3QkFDVCxPQUFPOzRCQUNMYixRQUFRYzt3QkFDVjtvQkFDRixHQUNBQyxHQUFHLENBQUNuQjtnQkFDUjtnQkFFQXBDLFFBQVFDLEdBQUcsQ0FBQywrQkFBK0JxQztnQkFDM0MsTUFBTWtCLGdCQUFnQixlQUF3QkMsVUFBVTtnQkFFeEQsNEJBQTRCO2dCQUM1QixNQUFNeEUsbURBQU1BLENBQUN5RSxLQUFLLENBQUNDLFVBQVUsQ0FBQztvQkFDNUJDLE9BQU87d0JBQUVoRDtvQkFBVTtnQkFDckI7Z0JBRUEsTUFBTTNCLG1EQUFNQSxDQUFDeUUsS0FBSyxDQUFDRyxNQUFNLENBQUM7b0JBQ3hCQyxNQUFNO3dCQUNKQyxLQUFLUDt3QkFDTFEsS0FBSyxDQUFDLEVBQUUvQyxXQUFXRSxPQUFPLElBQUksVUFBVSxNQUFNLENBQUM7d0JBQy9DOEMsUUFBUTt3QkFDUnJEO29CQUNGO2dCQUNGO1lBQ0YsRUFBRSxPQUFPc0QsWUFBWTtnQkFDbkJsRSxRQUFRcUQsS0FBSyxDQUFDLDJCQUEyQmE7Z0JBQ3pDLE1BQU1BO1lBQ1I7UUFDRjtRQUVBLGlCQUFpQjtRQUNqQixNQUFNQyxpQkFBaUIsTUFBTWxGLG1EQUFNQSxDQUFDbUYsT0FBTyxDQUFDQyxNQUFNLENBQUM7WUFDakRULE9BQU87Z0JBQUUxRCxJQUFJVTtZQUFVO1lBQ3ZCa0QsTUFBTTdDO1lBQ05xRCxTQUFTO2dCQUFFQyxRQUFRO1lBQUs7UUFDMUI7UUFFQXZFLFFBQVFDLEdBQUcsQ0FBQyxvQkFBb0JrRTtRQUVoQyxPQUFPLElBQUk3RCxTQUFTQyxLQUFLQyxTQUFTLENBQUMyRCxpQkFBaUI7WUFDbER6RCxRQUFRO1lBQ1JDLFNBQVM7Z0JBQUUsZ0JBQWdCO1lBQW1CO1FBQ2hEO0lBQ0YsRUFBRSxPQUFPMEMsT0FBTztRQUNkckQsUUFBUXFELEtBQUssQ0FBQyx1QkFBdUJBO1FBQ3JDLE9BQU8sSUFBSS9DLFNBQ1RDLEtBQUtDLFNBQVMsQ0FBQztZQUNiQyxTQUFTNEMsaUJBQWlCbUIsUUFBUW5CLE1BQU01QyxPQUFPLEdBQUc7WUFDbERnRSxTQUFTcEI7UUFDWCxJQUNBO1lBQ0UzQyxRQUFRO1lBQ1JDLFNBQVM7Z0JBQUUsZ0JBQWdCO1lBQW1CO1FBQ2hEO0lBRUo7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL25vZGF0YWJhc2V0ZGMvLi9hcHAvYXBpL2FkbWluL3Byb2R1Y3RzL1tpZF0vcm91dGUudHM/NWE1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRTZXJ2ZXJTZXNzaW9uIH0gZnJvbSAnbmV4dC1hdXRoJztcbmltcG9ydCB7IGF1dGhPcHRpb25zIH0gZnJvbSAnQC9saWIvYXV0aC5jb25maWcnO1xuaW1wb3J0IHByaXNtYSBmcm9tICdAL2xpYi9wcmlzbWEnO1xuaW1wb3J0IHsgdjIgYXMgY2xvdWRpbmFyeSB9IGZyb20gJ2Nsb3VkaW5hcnknO1xuaW1wb3J0IHsgUHJvZHVjdFdpdGhJbWFnZXMgfSBmcm9tICdAL2FwcC91dGlscy9wcm9kdWN0cyc7XG5cbi8vIENvbmZpZ3VyYSBDbG91ZGluYXJ5XG5jbG91ZGluYXJ5LmNvbmZpZyh7XG4gIGNsb3VkX25hbWU6IHByb2Nlc3MuZW52LkNMT1VESU5BUllfQ0xPVURfTkFNRSxcbiAgYXBpX2tleTogcHJvY2Vzcy5lbnYuQ0xPVURJTkFSWV9BUElfS0VZLFxuICBhcGlfc2VjcmV0OiBwcm9jZXNzLmVudi5DTE9VRElOQVJZX0FQSV9TRUNSRVRcbn0pO1xuXG5pbnRlcmZhY2UgUGFyYW1zIHtcbiAgcGFyYW1zOiB7IGlkOiBzdHJpbmcgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBVVChyZXE6IFJlcXVlc3QsIHsgcGFyYW1zIH06IFBhcmFtcyk6IFByb21pc2U8UmVzcG9uc2U+IHtcbiAgdHJ5IHtcbiAgICBjb25zb2xlLmxvZygnUFVUIHJlcXVlc3QgcmVjZWl2ZWQgZm9yIHByb2R1Y3Q6JywgcGFyYW1zLmlkKTtcbiAgICBcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2VydmVyU2Vzc2lvbihhdXRoT3B0aW9ucyk7XG4gICAgY29uc29sZS5sb2coJ1Nlc3Npb246Jywgc2Vzc2lvbik7XG5cbiAgICBpZiAoIXNlc3Npb24/LnVzZXIgfHwgc2Vzc2lvbi51c2VyLnJvbGUgIT09IFwiQURNSU5cIikge1xuICAgICAgcmV0dXJuIG5ldyBSZXNwb25zZShKU09OLnN0cmluZ2lmeSh7IG1lc3NhZ2U6IFwiVW5hdXRob3JpemVkXCIgfSksIHtcbiAgICAgICAgc3RhdHVzOiA0MDEsXG4gICAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IHByb2R1Y3RJZCA9IHBhcmFtcy5pZDtcbiAgICBjb25zdCBmb3JtRGF0YSA9IGF3YWl0IHJlcS5mb3JtRGF0YSgpO1xuICAgIGNvbnNvbGUubG9nKCdSZWNlaXZlZCBmb3JtIGRhdGEgZmllbGRzOicsIEFycmF5LmZyb20oZm9ybURhdGEuZW50cmllcygpKSk7XG4gICAgXG4gICAgY29uc3QgdXBkYXRlRGF0YTogYW55ID0ge307XG4gICAgXG4gICAgLy8gSGFuZGxlIHRleHQgZmllbGRzXG4gICAgaWYgKGZvcm1EYXRhLmhhcygndGl0bGVFbicpKSB1cGRhdGVEYXRhLnRpdGxlRW4gPSBmb3JtRGF0YS5nZXQoJ3RpdGxlRW4nKTtcbiAgICBpZiAoZm9ybURhdGEuaGFzKCd0aXRsZUl0JykpIHVwZGF0ZURhdGEudGl0bGVJdCA9IGZvcm1EYXRhLmdldCgndGl0bGVJdCcpO1xuICAgIGlmIChmb3JtRGF0YS5oYXMoJ2Rlc2NyaXB0aW9uRW4nKSkgdXBkYXRlRGF0YS5kZXNjcmlwdGlvbkVuID0gZm9ybURhdGEuZ2V0KCdkZXNjcmlwdGlvbkVuJyk7XG4gICAgaWYgKGZvcm1EYXRhLmhhcygnZGVzY3JpcHRpb25JdCcpKSB1cGRhdGVEYXRhLmRlc2NyaXB0aW9uSXQgPSBmb3JtRGF0YS5nZXQoJ2Rlc2NyaXB0aW9uSXQnKTtcbiAgICBpZiAoZm9ybURhdGEuaGFzKCdwcmljZScpKSB7XG4gICAgICBjb25zdCBwcmljZSA9IE51bWJlcihmb3JtRGF0YS5nZXQoJ3ByaWNlJykpO1xuICAgICAgaWYgKCFpc05hTihwcmljZSkpIHtcbiAgICAgICAgdXBkYXRlRGF0YS5wcmljZSA9IHByaWNlO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoZm9ybURhdGEuaGFzKCdzdGF0dXMnKSkgdXBkYXRlRGF0YS5zdGF0dXMgPSBmb3JtRGF0YS5nZXQoJ3N0YXR1cycpO1xuICAgIGlmIChmb3JtRGF0YS5oYXMoJ2JyYW5kJykpIHVwZGF0ZURhdGEuYnJhbmQgPSBmb3JtRGF0YS5nZXQoJ2JyYW5kJykgfHwgbnVsbDtcbiAgICBpZiAoZm9ybURhdGEuaGFzKCdtb2RlbCcpKSB1cGRhdGVEYXRhLm1vZGVsID0gZm9ybURhdGEuZ2V0KCdtb2RlbCcpIHx8IG51bGw7XG4gICAgaWYgKGZvcm1EYXRhLmhhcygneWVhcicpKSB7XG4gICAgICBjb25zdCB5ZWFyID0gcGFyc2VJbnQoZm9ybURhdGEuZ2V0KCd5ZWFyJykgYXMgc3RyaW5nLCAxMCk7XG4gICAgICBpZiAoIWlzTmFOKHllYXIpKSB7XG4gICAgICAgIHVwZGF0ZURhdGEueWVhciA9IHllYXI7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChmb3JtRGF0YS5oYXMoJ2NvbmRpdGlvbicpKSB1cGRhdGVEYXRhLmNvbmRpdGlvbiA9IGZvcm1EYXRhLmdldCgnY29uZGl0aW9uJykgfHwgbnVsbDtcbiAgICBcbiAgICBjb25zb2xlLmxvZygnVXBkYXRlIGRhdGE6JywgdXBkYXRlRGF0YSk7XG5cbiAgICAvLyBIYW5kbGUgaW1hZ2UgZmlsZVxuICAgIGNvbnN0IGltYWdlRmlsZSA9IGZvcm1EYXRhLmdldCgnaW1hZ2UnKSBhcyBGaWxlIHwgbnVsbDtcbiAgICBpZiAoaW1hZ2VGaWxlKSB7XG4gICAgICBjb25zb2xlLmxvZygnUHJvY2Vzc2luZyBpbWFnZSBmaWxlOicsIGltYWdlRmlsZS5uYW1lKTtcbiAgICAgIFxuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgYnl0ZXMgPSBhd2FpdCBpbWFnZUZpbGUuYXJyYXlCdWZmZXIoKTtcbiAgICAgICAgY29uc3QgYnVmZmVyID0gQnVmZmVyLmZyb20oYnl0ZXMpO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgdXBsb2FkUmVzcG9uc2UgPSBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgY2xvdWRpbmFyeS51cGxvYWRlci51cGxvYWRfc3RyZWFtKFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBmb2xkZXI6ICdvcm9sb2dpJyxcbiAgICAgICAgICAgICAgcmVzb3VyY2VfdHlwZTogJ2ltYWdlJyxcbiAgICAgICAgICAgICAgdHJhbnNmb3JtYXRpb246IFtcbiAgICAgICAgICAgICAgICB7IHdpZHRoOiA4MDAsIGhlaWdodDogODAwLCBjcm9wOiAnZmlsbCcsIGdyYXZpdHk6ICdhdXRvJyB9LFxuICAgICAgICAgICAgICAgIHsgcXVhbGl0eTogJ2F1dG8nLCBmZXRjaF9mb3JtYXQ6ICdhdXRvJyB9XG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAoZXJyb3IsIHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdDbG91ZGluYXJ5IHVwbG9hZCBlcnJvcjonLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICApLmVuZChidWZmZXIpO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zb2xlLmxvZygnQ2xvdWRpbmFyeSB1cGxvYWQgcmVzcG9uc2U6JywgdXBsb2FkUmVzcG9uc2UpO1xuICAgICAgICBjb25zdCBjbG91ZGluYXJ5VXJsID0gKHVwbG9hZFJlc3BvbnNlIGFzIGFueSkuc2VjdXJlX3VybDtcblxuICAgICAgICAvLyBVcGRhdGUgaW1hZ2VzIGluIGRhdGFiYXNlXG4gICAgICAgIGF3YWl0IHByaXNtYS5pbWFnZS5kZWxldGVNYW55KHtcbiAgICAgICAgICB3aGVyZTogeyBwcm9kdWN0SWQgfVxuICAgICAgICB9KTtcblxuICAgICAgICBhd2FpdCBwcmlzbWEuaW1hZ2UuY3JlYXRlKHtcbiAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICB1cmw6IGNsb3VkaW5hcnlVcmwsXG4gICAgICAgICAgICBhbHQ6IGAke3VwZGF0ZURhdGEudGl0bGVFbiB8fCAnUHJvZHVjdCd9IGltYWdlYCxcbiAgICAgICAgICAgIGlzTWFpbjogdHJ1ZSxcbiAgICAgICAgICAgIHByb2R1Y3RJZFxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGNhdGNoIChpbWFnZUVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ltYWdlIHByb2Nlc3NpbmcgZXJyb3I6JywgaW1hZ2VFcnJvcik7XG4gICAgICAgIHRocm93IGltYWdlRXJyb3I7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gVXBkYXRlIHByb2R1Y3RcbiAgICBjb25zdCB1cGRhdGVkUHJvZHVjdCA9IGF3YWl0IHByaXNtYS5wcm9kdWN0LnVwZGF0ZSh7XG4gICAgICB3aGVyZTogeyBpZDogcHJvZHVjdElkIH0sXG4gICAgICBkYXRhOiB1cGRhdGVEYXRhLFxuICAgICAgaW5jbHVkZTogeyBpbWFnZXM6IHRydWUgfVxuICAgIH0pO1xuXG4gICAgY29uc29sZS5sb2coJ1VwZGF0ZWQgcHJvZHVjdDonLCB1cGRhdGVkUHJvZHVjdCk7XG5cbiAgICByZXR1cm4gbmV3IFJlc3BvbnNlKEpTT04uc3RyaW5naWZ5KHVwZGF0ZWRQcm9kdWN0KSwge1xuICAgICAgc3RhdHVzOiAyMDAsXG4gICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gUFVUIHJvdXRlOicsIGVycm9yKTtcbiAgICByZXR1cm4gbmV3IFJlc3BvbnNlKFxuICAgICAgSlNPTi5zdHJpbmdpZnkoeyBcbiAgICAgICAgbWVzc2FnZTogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnRmFpbGVkIHRvIHVwZGF0ZSBwcm9kdWN0JyxcbiAgICAgICAgZGV0YWlsczogZXJyb3JcbiAgICAgIH0pLCBcbiAgICAgIHsgXG4gICAgICAgIHN0YXR1czogNTAwLFxuICAgICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXG4gICAgICB9XG4gICAgKTtcbiAgfVxufSJdLCJuYW1lcyI6WyJnZXRTZXJ2ZXJTZXNzaW9uIiwiYXV0aE9wdGlvbnMiLCJwcmlzbWEiLCJ2MiIsImNsb3VkaW5hcnkiLCJjb25maWciLCJjbG91ZF9uYW1lIiwicHJvY2VzcyIsImVudiIsIkNMT1VESU5BUllfQ0xPVURfTkFNRSIsImFwaV9rZXkiLCJDTE9VRElOQVJZX0FQSV9LRVkiLCJhcGlfc2VjcmV0IiwiQ0xPVURJTkFSWV9BUElfU0VDUkVUIiwiUFVUIiwicmVxIiwicGFyYW1zIiwiY29uc29sZSIsImxvZyIsImlkIiwic2Vzc2lvbiIsInVzZXIiLCJyb2xlIiwiUmVzcG9uc2UiLCJKU09OIiwic3RyaW5naWZ5IiwibWVzc2FnZSIsInN0YXR1cyIsImhlYWRlcnMiLCJwcm9kdWN0SWQiLCJmb3JtRGF0YSIsIkFycmF5IiwiZnJvbSIsImVudHJpZXMiLCJ1cGRhdGVEYXRhIiwiaGFzIiwidGl0bGVFbiIsImdldCIsInRpdGxlSXQiLCJkZXNjcmlwdGlvbkVuIiwiZGVzY3JpcHRpb25JdCIsInByaWNlIiwiTnVtYmVyIiwiaXNOYU4iLCJicmFuZCIsIm1vZGVsIiwieWVhciIsInBhcnNlSW50IiwiY29uZGl0aW9uIiwiaW1hZ2VGaWxlIiwibmFtZSIsImJ5dGVzIiwiYXJyYXlCdWZmZXIiLCJidWZmZXIiLCJCdWZmZXIiLCJ1cGxvYWRSZXNwb25zZSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwidXBsb2FkZXIiLCJ1cGxvYWRfc3RyZWFtIiwiZm9sZGVyIiwicmVzb3VyY2VfdHlwZSIsInRyYW5zZm9ybWF0aW9uIiwid2lkdGgiLCJoZWlnaHQiLCJjcm9wIiwiZ3Jhdml0eSIsInF1YWxpdHkiLCJmZXRjaF9mb3JtYXQiLCJlcnJvciIsInJlc3VsdCIsImVuZCIsImNsb3VkaW5hcnlVcmwiLCJzZWN1cmVfdXJsIiwiaW1hZ2UiLCJkZWxldGVNYW55Iiwid2hlcmUiLCJjcmVhdGUiLCJkYXRhIiwidXJsIiwiYWx0IiwiaXNNYWluIiwiaW1hZ2VFcnJvciIsInVwZGF0ZWRQcm9kdWN0IiwicHJvZHVjdCIsInVwZGF0ZSIsImluY2x1ZGUiLCJpbWFnZXMiLCJFcnJvciIsImRldGFpbHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/admin/products/[id]/route.ts\n");

/***/ }),

/***/ "(rsc)/./lib/auth.config.ts":
/*!****************************!*\
  !*** ./lib/auth.config.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authOptions: () => (/* binding */ authOptions)\n/* harmony export */ });\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(rsc)/./node_modules/next-auth/providers/credentials.js\");\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/prisma */ \"(rsc)/./lib/prisma.ts\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst authOptions = {\n    providers: [\n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n            name: \"Credentials\",\n            credentials: {\n                email: {\n                    label: \"Email\",\n                    type: \"text\"\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"password\"\n                }\n            },\n            async authorize (credentials) {\n                if (!credentials?.email || !credentials?.password) {\n                    return null;\n                }\n                const user = await _lib_prisma__WEBPACK_IMPORTED_MODULE_1__[\"default\"].user.findUnique({\n                    where: {\n                        email: credentials.email\n                    }\n                });\n                if (!user) {\n                    return null;\n                }\n                const isPasswordCorrect = await bcrypt__WEBPACK_IMPORTED_MODULE_2___default().compare(credentials.password, user.passwordHash);\n                if (isPasswordCorrect) {\n                    return {\n                        id: user.id,\n                        email: user.email,\n                        name: user.name || \"\",\n                        role: user.role\n                    };\n                }\n                return null;\n            }\n        })\n    ],\n    callbacks: {\n        async jwt ({ token, user }) {\n            if (user) {\n                token.role = user.role;\n            }\n            return token;\n        },\n        async session ({ session, token }) {\n            if (session?.user) {\n                session.user.role = token.role;\n            }\n            return session;\n        }\n    },\n    pages: {\n        signIn: \"/login\"\n    },\n    session: {\n        strategy: \"jwt\"\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvYXV0aC5jb25maWcudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBa0U7QUFDaEM7QUFDTjtBQUdyQixNQUFNRyxjQUEyQjtJQUN0Q0MsV0FBVztRQUNUSiwyRUFBbUJBLENBQUM7WUFDbEJLLE1BQU07WUFDTkMsYUFBYTtnQkFDWEMsT0FBTztvQkFBRUMsT0FBTztvQkFBU0MsTUFBTTtnQkFBTztnQkFDdENDLFVBQVU7b0JBQUVGLE9BQU87b0JBQVlDLE1BQU07Z0JBQVc7WUFDbEQ7WUFDQSxNQUFNRSxXQUFVTCxXQUFXO2dCQUN6QixJQUFJLENBQUNBLGFBQWFDLFNBQVMsQ0FBQ0QsYUFBYUksVUFBVTtvQkFDakQsT0FBTztnQkFDVDtnQkFFQSxNQUFNRSxPQUFPLE1BQU1YLG1EQUFNQSxDQUFDVyxJQUFJLENBQUNDLFVBQVUsQ0FBQztvQkFDeENDLE9BQU87d0JBQUVQLE9BQU9ELFlBQVlDLEtBQUs7b0JBQUM7Z0JBQ3BDO2dCQUVBLElBQUksQ0FBQ0ssTUFBTTtvQkFDVCxPQUFPO2dCQUNUO2dCQUVBLE1BQU1HLG9CQUFvQixNQUFNYixxREFBYyxDQUM1Q0ksWUFBWUksUUFBUSxFQUNwQkUsS0FBS0ssWUFBWTtnQkFHbkIsSUFBSUYsbUJBQW1CO29CQUNyQixPQUFPO3dCQUNMRyxJQUFJTixLQUFLTSxFQUFFO3dCQUNYWCxPQUFPSyxLQUFLTCxLQUFLO3dCQUNqQkYsTUFBTU8sS0FBS1AsSUFBSSxJQUFJO3dCQUNuQmMsTUFBTVAsS0FBS08sSUFBSTtvQkFDakI7Z0JBQ0Y7Z0JBRUEsT0FBTztZQUNUO1FBQ0Y7S0FDRDtJQUNEQyxXQUFXO1FBQ1QsTUFBTUMsS0FBSSxFQUFFQyxLQUFLLEVBQUVWLElBQUksRUFBRTtZQUN2QixJQUFJQSxNQUFNO2dCQUNSVSxNQUFNSCxJQUFJLEdBQUdQLEtBQUtPLElBQUk7WUFDeEI7WUFDQSxPQUFPRztRQUNUO1FBQ0EsTUFBTUMsU0FBUSxFQUFFQSxPQUFPLEVBQUVELEtBQUssRUFBRTtZQUM5QixJQUFJQyxTQUFTWCxNQUFNO2dCQUNqQlcsUUFBUVgsSUFBSSxDQUFDTyxJQUFJLEdBQUdHLE1BQU1ILElBQUk7WUFDaEM7WUFDQSxPQUFPSTtRQUNUO0lBQ0Y7SUFDQUMsT0FBTztRQUNMQyxRQUFRO0lBQ1Y7SUFDQUYsU0FBUztRQUNQRyxVQUFVO0lBQ1o7QUFDRixFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbm9kYXRhYmFzZXRkYy8uL2xpYi9hdXRoLmNvbmZpZy50cz82ODZlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDcmVkZW50aWFsc1Byb3ZpZGVyIGZyb20gJ25leHQtYXV0aC9wcm92aWRlcnMvY3JlZGVudGlhbHMnO1xuaW1wb3J0IHByaXNtYSBmcm9tICdAL2xpYi9wcmlzbWEnO1xuaW1wb3J0IGJjcnlwdCBmcm9tICdiY3J5cHQnO1xuaW1wb3J0IHsgQXV0aE9wdGlvbnMgfSBmcm9tICduZXh0LWF1dGgnO1xuXG5leHBvcnQgY29uc3QgYXV0aE9wdGlvbnM6IEF1dGhPcHRpb25zID0ge1xuICBwcm92aWRlcnM6IFtcbiAgICBDcmVkZW50aWFsc1Byb3ZpZGVyKHtcbiAgICAgIG5hbWU6ICdDcmVkZW50aWFscycsXG4gICAgICBjcmVkZW50aWFsczoge1xuICAgICAgICBlbWFpbDogeyBsYWJlbDogXCJFbWFpbFwiLCB0eXBlOiBcInRleHRcIiB9LFxuICAgICAgICBwYXNzd29yZDogeyBsYWJlbDogXCJQYXNzd29yZFwiLCB0eXBlOiBcInBhc3N3b3JkXCIgfVxuICAgICAgfSxcbiAgICAgIGFzeW5jIGF1dGhvcml6ZShjcmVkZW50aWFscykge1xuICAgICAgICBpZiAoIWNyZWRlbnRpYWxzPy5lbWFpbCB8fCAhY3JlZGVudGlhbHM/LnBhc3N3b3JkKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZFVuaXF1ZSh7XG4gICAgICAgICAgd2hlcmU6IHsgZW1haWw6IGNyZWRlbnRpYWxzLmVtYWlsIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKCF1c2VyKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBpc1Bhc3N3b3JkQ29ycmVjdCA9IGF3YWl0IGJjcnlwdC5jb21wYXJlKFxuICAgICAgICAgIGNyZWRlbnRpYWxzLnBhc3N3b3JkLFxuICAgICAgICAgIHVzZXIucGFzc3dvcmRIYXNoXG4gICAgICAgICk7XG5cbiAgICAgICAgaWYgKGlzUGFzc3dvcmRDb3JyZWN0KSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlkOiB1c2VyLmlkLFxuICAgICAgICAgICAgZW1haWw6IHVzZXIuZW1haWwsXG4gICAgICAgICAgICBuYW1lOiB1c2VyLm5hbWUgfHwgJycsXG4gICAgICAgICAgICByb2xlOiB1c2VyLnJvbGVcbiAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgfSksXG4gIF0sXG4gIGNhbGxiYWNrczoge1xuICAgIGFzeW5jIGp3dCh7IHRva2VuLCB1c2VyIH0pIHtcbiAgICAgIGlmICh1c2VyKSB7XG4gICAgICAgIHRva2VuLnJvbGUgPSB1c2VyLnJvbGU7XG4gICAgICB9XG4gICAgICByZXR1cm4gdG9rZW47XG4gICAgfSxcbiAgICBhc3luYyBzZXNzaW9uKHsgc2Vzc2lvbiwgdG9rZW4gfSkge1xuICAgICAgaWYgKHNlc3Npb24/LnVzZXIpIHtcbiAgICAgICAgc2Vzc2lvbi51c2VyLnJvbGUgPSB0b2tlbi5yb2xlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHNlc3Npb247XG4gICAgfVxuICB9LFxuICBwYWdlczoge1xuICAgIHNpZ25JbjogJy9sb2dpbidcbiAgfSxcbiAgc2Vzc2lvbjoge1xuICAgIHN0cmF0ZWd5OiBcImp3dFwiXG4gIH1cbn07Il0sIm5hbWVzIjpbIkNyZWRlbnRpYWxzUHJvdmlkZXIiLCJwcmlzbWEiLCJiY3J5cHQiLCJhdXRoT3B0aW9ucyIsInByb3ZpZGVycyIsIm5hbWUiLCJjcmVkZW50aWFscyIsImVtYWlsIiwibGFiZWwiLCJ0eXBlIiwicGFzc3dvcmQiLCJhdXRob3JpemUiLCJ1c2VyIiwiZmluZFVuaXF1ZSIsIndoZXJlIiwiaXNQYXNzd29yZENvcnJlY3QiLCJjb21wYXJlIiwicGFzc3dvcmRIYXNoIiwiaWQiLCJyb2xlIiwiY2FsbGJhY2tzIiwiand0IiwidG9rZW4iLCJzZXNzaW9uIiwicGFnZXMiLCJzaWduSW4iLCJzdHJhdGVneSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./lib/auth.config.ts\n");

/***/ }),

/***/ "(rsc)/./lib/prisma.ts":
/*!***********************!*\
  !*** ./lib/prisma.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prisma = global.prisma || new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nif (true) global.prisma = prisma;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvcHJpc21hLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE2QztBQU03QyxNQUFNQyxTQUFTQyxPQUFPRCxNQUFNLElBQUksSUFBSUQsd0RBQVlBO0FBRWhELElBQUlHLElBQXlCLEVBQWNELE9BQU9ELE1BQU0sR0FBR0E7QUFFM0QsaUVBQWVBLE1BQU1BLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub2RhdGFiYXNldGRjLy4vbGliL3ByaXNtYS50cz85ODIyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gJ0BwcmlzbWEvY2xpZW50J1xuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIHZhciBwcmlzbWE6IFByaXNtYUNsaWVudCB8IHVuZGVmaW5lZFxufVxuXG5jb25zdCBwcmlzbWEgPSBnbG9iYWwucHJpc21hIHx8IG5ldyBQcmlzbWFDbGllbnQoKVxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgZ2xvYmFsLnByaXNtYSA9IHByaXNtYVxuXG5leHBvcnQgZGVmYXVsdCBwcmlzbWEiXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwicHJpc21hIiwiZ2xvYmFsIiwicHJvY2VzcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./lib/prisma.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/openid-client","vendor-chunks/oauth","vendor-chunks/object-hash","vendor-chunks/preact","vendor-chunks/preact-render-to-string","vendor-chunks/uuid","vendor-chunks/yallist","vendor-chunks/lru-cache","vendor-chunks/cookie","vendor-chunks/oidc-token-hash","vendor-chunks/@panva","vendor-chunks/cloudinary","vendor-chunks/q"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fadmin%2Fproducts%2F%5Bid%5D%2Froute&page=%2Fapi%2Fadmin%2Fproducts%2F%5Bid%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fadmin%2Fproducts%2F%5Bid%5D%2Froute.ts&appDir=%2FUsers%2Falessiocavatassi%2FnodatabaseTDC%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Falessiocavatassi%2FnodatabaseTDC&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();