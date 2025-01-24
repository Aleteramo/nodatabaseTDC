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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   PUT: () => (/* binding */ PUT)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(rsc)/./node_modules/next/dist/server/web/exports/next-response.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _app_api_auth_nextauth_route__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/api/auth/[...nextauth]/route */ \"(rsc)/./app/api/auth/[...nextauth]/route.ts\");\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/prisma */ \"(rsc)/./lib/prisma.ts\");\n/* harmony import */ var cloudinary__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! cloudinary */ \"(rsc)/./node_modules/cloudinary/cloudinary.js\");\n/* harmony import */ var cloudinary__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(cloudinary__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n// Configura Cloudinary\ncloudinary__WEBPACK_IMPORTED_MODULE_4__.v2.config({\n    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,\n    api_key: process.env.CLOUDINARY_API_KEY,\n    api_secret: process.env.CLOUDINARY_API_SECRET\n});\nasync function PUT(req, { params }) {\n    console.log(\"PUT request received for product:\", params.id);\n    const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_1__.getServerSession)(_app_api_auth_nextauth_route__WEBPACK_IMPORTED_MODULE_2__.authOptions);\n    if (!session?.user || session.user.role !== \"ADMIN\") {\n        return new next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"](JSON.stringify({\n            message: \"Unauthorized\"\n        }), {\n            status: 401,\n            headers: {\n                \"Content-Type\": \"application/json\"\n            }\n        });\n    }\n    const productId = params.id;\n    const formData = await req.formData();\n    console.log(\"Received form data fields:\", Array.from(formData.keys()));\n    try {\n        const updateData = {};\n        // Handle text fields\n        if (formData.has(\"titleEn\")) updateData.titleEn = formData.get(\"titleEn\");\n        if (formData.has(\"titleIt\")) updateData.titleIt = formData.get(\"titleIt\");\n        if (formData.has(\"descriptionEn\")) updateData.descriptionEn = formData.get(\"descriptionEn\");\n        if (formData.has(\"descriptionIt\")) updateData.descriptionIt = formData.get(\"descriptionIt\");\n        if (formData.has(\"price\")) updateData.price = Number(formData.get(\"price\"));\n        if (formData.has(\"status\")) {\n            const status = formData.get(\"status\");\n            updateData.status = status;\n        }\n        // Handle image file\n        const imageFile = formData.get(\"image\");\n        if (imageFile) {\n            console.log(\"Processing image file:\", imageFile.name);\n            // Converti il File in un buffer\n            const bytes = await imageFile.arrayBuffer();\n            const buffer = Buffer.from(bytes);\n            // Carica l'immagine su Cloudinary\n            const uploadResponse = await new Promise((resolve, reject)=>{\n                cloudinary__WEBPACK_IMPORTED_MODULE_4__.v2.uploader.upload_stream({\n                    folder: \"orologi\",\n                    resource_type: \"image\",\n                    transformation: [\n                        {\n                            width: 800,\n                            height: 800,\n                            crop: \"fill\",\n                            gravity: \"auto\"\n                        },\n                        {\n                            quality: \"auto\",\n                            fetch_format: \"auto\"\n                        }\n                    ]\n                }, (error, result)=>{\n                    if (error) reject(error);\n                    else resolve(result);\n                }).end(buffer);\n            });\n            const cloudinaryUrl = uploadResponse.secure_url;\n            // Delete existing images from database\n            await _lib_prisma__WEBPACK_IMPORTED_MODULE_3__[\"default\"].image.deleteMany({\n                where: {\n                    productId: productId\n                }\n            });\n            // Create new image record\n            await _lib_prisma__WEBPACK_IMPORTED_MODULE_3__[\"default\"].image.create({\n                data: {\n                    url: cloudinaryUrl,\n                    alt: `${updateData.titleEn || \"Product\"} image`,\n                    isMain: true,\n                    product: {\n                        connect: {\n                            id: productId\n                        }\n                    }\n                }\n            });\n            console.log(\"Image uploaded to Cloudinary:\", cloudinaryUrl);\n        }\n        const updatedProduct = await _lib_prisma__WEBPACK_IMPORTED_MODULE_3__[\"default\"].product.update({\n            where: {\n                id: productId\n            },\n            data: updateData,\n            include: {\n                images: true\n            }\n        });\n        console.log(\"Product updated successfully:\", updatedProduct);\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json(updatedProduct);\n    } catch (error) {\n        console.error(\"Error updating product:\", error);\n        return new next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"](JSON.stringify({\n            message: error.message\n        }), {\n            status: 500,\n            headers: {\n                \"Content-Type\": \"application/json\"\n            }\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2FkbWluL3Byb2R1Y3RzL1tpZF0vcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBMkM7QUFDRTtBQUNvQjtBQUMvQjtBQUNZO0FBRTlDLHVCQUF1QjtBQUN2QkssMENBQVVBLENBQUNDLE1BQU0sQ0FBQztJQUNoQkMsWUFBWUMsUUFBUUMsR0FBRyxDQUFDQyxxQkFBcUI7SUFDN0NDLFNBQVNILFFBQVFDLEdBQUcsQ0FBQ0csa0JBQWtCO0lBQ3ZDQyxZQUFZTCxRQUFRQyxHQUFHLENBQUNLLHFCQUFxQjtBQUMvQztBQU1PLGVBQWVDLElBQUlDLEdBQVksRUFBRSxFQUFFQyxNQUFNLEVBQVU7SUFDeERDLFFBQVFDLEdBQUcsQ0FBQyxxQ0FBcUNGLE9BQU9HLEVBQUU7SUFFMUQsTUFBTUMsVUFBVSxNQUFNcEIsMkRBQWdCQSxDQUFDQyxxRUFBV0E7SUFFbEQsSUFBSSxDQUFDbUIsU0FBU0MsUUFBUUQsUUFBUUMsSUFBSSxDQUFDQyxJQUFJLEtBQUssU0FBUztRQUNuRCxPQUFPLElBQUl2QixrRkFBWUEsQ0FBQ3dCLEtBQUtDLFNBQVMsQ0FBQztZQUFFQyxTQUFTO1FBQWUsSUFBSTtZQUNuRUMsUUFBUTtZQUNSQyxTQUFTO2dCQUFFLGdCQUFnQjtZQUFtQjtRQUNoRDtJQUNGO0lBRUEsTUFBTUMsWUFBWVosT0FBT0csRUFBRTtJQUMzQixNQUFNVSxXQUFXLE1BQU1kLElBQUljLFFBQVE7SUFDbkNaLFFBQVFDLEdBQUcsQ0FBQyw4QkFBOEJZLE1BQU1DLElBQUksQ0FBQ0YsU0FBU0csSUFBSTtJQUVsRSxJQUFJO1FBQ0YsTUFBTUMsYUFBa0IsQ0FBQztRQUV6QixxQkFBcUI7UUFDckIsSUFBSUosU0FBU0ssR0FBRyxDQUFDLFlBQVlELFdBQVdFLE9BQU8sR0FBR04sU0FBU08sR0FBRyxDQUFDO1FBQy9ELElBQUlQLFNBQVNLLEdBQUcsQ0FBQyxZQUFZRCxXQUFXSSxPQUFPLEdBQUdSLFNBQVNPLEdBQUcsQ0FBQztRQUMvRCxJQUFJUCxTQUFTSyxHQUFHLENBQUMsa0JBQWtCRCxXQUFXSyxhQUFhLEdBQUdULFNBQVNPLEdBQUcsQ0FBQztRQUMzRSxJQUFJUCxTQUFTSyxHQUFHLENBQUMsa0JBQWtCRCxXQUFXTSxhQUFhLEdBQUdWLFNBQVNPLEdBQUcsQ0FBQztRQUMzRSxJQUFJUCxTQUFTSyxHQUFHLENBQUMsVUFBVUQsV0FBV08sS0FBSyxHQUFHQyxPQUFPWixTQUFTTyxHQUFHLENBQUM7UUFDbEUsSUFBSVAsU0FBU0ssR0FBRyxDQUFDLFdBQVc7WUFDMUIsTUFBTVIsU0FBU0csU0FBU08sR0FBRyxDQUFDO1lBQzVCSCxXQUFXUCxNQUFNLEdBQUdBO1FBQ3RCO1FBRUEsb0JBQW9CO1FBQ3BCLE1BQU1nQixZQUFZYixTQUFTTyxHQUFHLENBQUM7UUFDL0IsSUFBSU0sV0FBVztZQUNiekIsUUFBUUMsR0FBRyxDQUFDLDBCQUEwQndCLFVBQVVDLElBQUk7WUFFcEQsZ0NBQWdDO1lBQ2hDLE1BQU1DLFFBQVEsTUFBTUYsVUFBVUcsV0FBVztZQUN6QyxNQUFNQyxTQUFTQyxPQUFPaEIsSUFBSSxDQUFDYTtZQUUzQixrQ0FBa0M7WUFDbEMsTUFBTUksaUJBQWlCLE1BQU0sSUFBSUMsUUFBUSxDQUFDQyxTQUFTQztnQkFDakQvQywwQ0FBVUEsQ0FBQ2dELFFBQVEsQ0FBQ0MsYUFBYSxDQUMvQjtvQkFDRUMsUUFBUTtvQkFDUkMsZUFBZTtvQkFDZkMsZ0JBQWdCO3dCQUNkOzRCQUFFQyxPQUFPOzRCQUFLQyxRQUFROzRCQUFLQyxNQUFNOzRCQUFRQyxTQUFTO3dCQUFPO3dCQUN6RDs0QkFBRUMsU0FBUzs0QkFBUUMsY0FBYzt3QkFBTztxQkFDekM7Z0JBQ0gsR0FDQSxDQUFDQyxPQUFPQztvQkFDTixJQUFJRCxPQUFPWixPQUFPWTt5QkFDYmIsUUFBUWM7Z0JBQ2YsR0FDQUMsR0FBRyxDQUFDbkI7WUFDUjtZQUVBLE1BQU1vQixnQkFBZ0IsZUFBd0JDLFVBQVU7WUFFeEQsdUNBQXVDO1lBQ3ZDLE1BQU1qRSxtREFBTUEsQ0FBQ2tFLEtBQUssQ0FBQ0MsVUFBVSxDQUFDO2dCQUM1QkMsT0FBTztvQkFDTDFDLFdBQVdBO2dCQUNiO1lBQ0Y7WUFFQSwwQkFBMEI7WUFDMUIsTUFBTTFCLG1EQUFNQSxDQUFDa0UsS0FBSyxDQUFDRyxNQUFNLENBQUM7Z0JBQ3hCQyxNQUFNO29CQUNKQyxLQUFLUDtvQkFDTFEsS0FBSyxDQUFDLEVBQUV6QyxXQUFXRSxPQUFPLElBQUksVUFBVSxNQUFNLENBQUM7b0JBQy9Dd0MsUUFBUTtvQkFDUkMsU0FBUzt3QkFDUEMsU0FBUzs0QkFDUDFELElBQUlTO3dCQUNOO29CQUNGO2dCQUNGO1lBQ0Y7WUFFQVgsUUFBUUMsR0FBRyxDQUFDLGlDQUFpQ2dEO1FBQy9DO1FBRUEsTUFBTVksaUJBQWlCLE1BQU01RSxtREFBTUEsQ0FBQzBFLE9BQU8sQ0FBQ0csTUFBTSxDQUFDO1lBQ2pEVCxPQUFPO2dCQUFFbkQsSUFBSVM7WUFBVTtZQUN2QjRDLE1BQU12QztZQUNOK0MsU0FBUztnQkFDUEMsUUFBUTtZQUNWO1FBQ0Y7UUFFQWhFLFFBQVFDLEdBQUcsQ0FBQyxpQ0FBaUM0RDtRQUM3QyxPQUFPL0Usa0ZBQVlBLENBQUNtRixJQUFJLENBQUNKO0lBQzNCLEVBQUUsT0FBT2YsT0FBWTtRQUNuQjlDLFFBQVE4QyxLQUFLLENBQUMsMkJBQTJCQTtRQUN6QyxPQUFPLElBQUloRSxrRkFBWUEsQ0FBQ3dCLEtBQUtDLFNBQVMsQ0FBQztZQUFFQyxTQUFTc0MsTUFBTXRDLE9BQU87UUFBQyxJQUFJO1lBQ2xFQyxRQUFRO1lBQ1JDLFNBQVM7Z0JBQUUsZ0JBQWdCO1lBQW1CO1FBQ2hEO0lBQ0Y7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL25vZGF0YWJhc2V0ZGMvLi9hcHAvYXBpL2FkbWluL3Byb2R1Y3RzL1tpZF0vcm91dGUudHM/NWE1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tICduZXh0L3NlcnZlcic7XG5pbXBvcnQgeyBnZXRTZXJ2ZXJTZXNzaW9uIH0gZnJvbSAnbmV4dC1hdXRoJztcbmltcG9ydCB7IGF1dGhPcHRpb25zIH0gZnJvbSAnQC9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZSc7XG5pbXBvcnQgcHJpc21hIGZyb20gJ0AvbGliL3ByaXNtYSc7XG5pbXBvcnQgeyB2MiBhcyBjbG91ZGluYXJ5IH0gZnJvbSAnY2xvdWRpbmFyeSc7XG5cbi8vIENvbmZpZ3VyYSBDbG91ZGluYXJ5XG5jbG91ZGluYXJ5LmNvbmZpZyh7XG4gIGNsb3VkX25hbWU6IHByb2Nlc3MuZW52LkNMT1VESU5BUllfQ0xPVURfTkFNRSxcbiAgYXBpX2tleTogcHJvY2Vzcy5lbnYuQ0xPVURJTkFSWV9BUElfS0VZLFxuICBhcGlfc2VjcmV0OiBwcm9jZXNzLmVudi5DTE9VRElOQVJZX0FQSV9TRUNSRVRcbn0pO1xuXG5pbnRlcmZhY2UgUGFyYW1zIHtcbiAgcGFyYW1zOiB7IGlkOiBzdHJpbmcgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBVVChyZXE6IFJlcXVlc3QsIHsgcGFyYW1zIH06IFBhcmFtcykge1xuICBjb25zb2xlLmxvZygnUFVUIHJlcXVlc3QgcmVjZWl2ZWQgZm9yIHByb2R1Y3Q6JywgcGFyYW1zLmlkKTtcbiAgXG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXJ2ZXJTZXNzaW9uKGF1dGhPcHRpb25zKTtcblxuICBpZiAoIXNlc3Npb24/LnVzZXIgfHwgc2Vzc2lvbi51c2VyLnJvbGUgIT09IFwiQURNSU5cIikge1xuICAgIHJldHVybiBuZXcgTmV4dFJlc3BvbnNlKEpTT04uc3RyaW5naWZ5KHsgbWVzc2FnZTogXCJVbmF1dGhvcml6ZWRcIiB9KSwge1xuICAgICAgc3RhdHVzOiA0MDEsXG4gICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXG4gICAgfSk7XG4gIH1cblxuICBjb25zdCBwcm9kdWN0SWQgPSBwYXJhbXMuaWQ7XG4gIGNvbnN0IGZvcm1EYXRhID0gYXdhaXQgcmVxLmZvcm1EYXRhKCk7XG4gIGNvbnNvbGUubG9nKCdSZWNlaXZlZCBmb3JtIGRhdGEgZmllbGRzOicsIEFycmF5LmZyb20oZm9ybURhdGEua2V5cygpKSk7XG4gIFxuICB0cnkge1xuICAgIGNvbnN0IHVwZGF0ZURhdGE6IGFueSA9IHt9O1xuICAgIFxuICAgIC8vIEhhbmRsZSB0ZXh0IGZpZWxkc1xuICAgIGlmIChmb3JtRGF0YS5oYXMoJ3RpdGxlRW4nKSkgdXBkYXRlRGF0YS50aXRsZUVuID0gZm9ybURhdGEuZ2V0KCd0aXRsZUVuJyk7XG4gICAgaWYgKGZvcm1EYXRhLmhhcygndGl0bGVJdCcpKSB1cGRhdGVEYXRhLnRpdGxlSXQgPSBmb3JtRGF0YS5nZXQoJ3RpdGxlSXQnKTtcbiAgICBpZiAoZm9ybURhdGEuaGFzKCdkZXNjcmlwdGlvbkVuJykpIHVwZGF0ZURhdGEuZGVzY3JpcHRpb25FbiA9IGZvcm1EYXRhLmdldCgnZGVzY3JpcHRpb25FbicpO1xuICAgIGlmIChmb3JtRGF0YS5oYXMoJ2Rlc2NyaXB0aW9uSXQnKSkgdXBkYXRlRGF0YS5kZXNjcmlwdGlvbkl0ID0gZm9ybURhdGEuZ2V0KCdkZXNjcmlwdGlvbkl0Jyk7XG4gICAgaWYgKGZvcm1EYXRhLmhhcygncHJpY2UnKSkgdXBkYXRlRGF0YS5wcmljZSA9IE51bWJlcihmb3JtRGF0YS5nZXQoJ3ByaWNlJykpO1xuICAgIGlmIChmb3JtRGF0YS5oYXMoJ3N0YXR1cycpKSB7XG4gICAgICBjb25zdCBzdGF0dXMgPSBmb3JtRGF0YS5nZXQoJ3N0YXR1cycpIGFzIHN0cmluZztcbiAgICAgIHVwZGF0ZURhdGEuc3RhdHVzID0gc3RhdHVzO1xuICAgIH1cbiAgICBcbiAgICAvLyBIYW5kbGUgaW1hZ2UgZmlsZVxuICAgIGNvbnN0IGltYWdlRmlsZSA9IGZvcm1EYXRhLmdldCgnaW1hZ2UnKSBhcyBGaWxlIHwgbnVsbDtcbiAgICBpZiAoaW1hZ2VGaWxlKSB7XG4gICAgICBjb25zb2xlLmxvZygnUHJvY2Vzc2luZyBpbWFnZSBmaWxlOicsIGltYWdlRmlsZS5uYW1lKTtcbiAgICAgIFxuICAgICAgLy8gQ29udmVydGkgaWwgRmlsZSBpbiB1biBidWZmZXJcbiAgICAgIGNvbnN0IGJ5dGVzID0gYXdhaXQgaW1hZ2VGaWxlLmFycmF5QnVmZmVyKCk7XG4gICAgICBjb25zdCBidWZmZXIgPSBCdWZmZXIuZnJvbShieXRlcyk7XG4gICAgICBcbiAgICAgIC8vIENhcmljYSBsJ2ltbWFnaW5lIHN1IENsb3VkaW5hcnlcbiAgICAgIGNvbnN0IHVwbG9hZFJlc3BvbnNlID0gYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBjbG91ZGluYXJ5LnVwbG9hZGVyLnVwbG9hZF9zdHJlYW0oXG4gICAgICAgICAge1xuICAgICAgICAgICAgZm9sZGVyOiAnb3JvbG9naScsXG4gICAgICAgICAgICByZXNvdXJjZV90eXBlOiAnaW1hZ2UnLFxuICAgICAgICAgICAgdHJhbnNmb3JtYXRpb246IFtcbiAgICAgICAgICAgICAgeyB3aWR0aDogODAwLCBoZWlnaHQ6IDgwMCwgY3JvcDogJ2ZpbGwnLCBncmF2aXR5OiAnYXV0bycgfSxcbiAgICAgICAgICAgICAgeyBxdWFsaXR5OiAnYXV0bycsIGZldGNoX2Zvcm1hdDogJ2F1dG8nIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9LFxuICAgICAgICAgIChlcnJvciwgcmVzdWx0KSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyb3IpIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgICBlbHNlIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgICB9XG4gICAgICAgICkuZW5kKGJ1ZmZlcik7XG4gICAgICB9KTtcblxuICAgICAgY29uc3QgY2xvdWRpbmFyeVVybCA9ICh1cGxvYWRSZXNwb25zZSBhcyBhbnkpLnNlY3VyZV91cmw7XG4gICAgICBcbiAgICAgIC8vIERlbGV0ZSBleGlzdGluZyBpbWFnZXMgZnJvbSBkYXRhYmFzZVxuICAgICAgYXdhaXQgcHJpc21hLmltYWdlLmRlbGV0ZU1hbnkoe1xuICAgICAgICB3aGVyZToge1xuICAgICAgICAgIHByb2R1Y3RJZDogcHJvZHVjdElkXG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICAvLyBDcmVhdGUgbmV3IGltYWdlIHJlY29yZFxuICAgICAgYXdhaXQgcHJpc21hLmltYWdlLmNyZWF0ZSh7XG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICB1cmw6IGNsb3VkaW5hcnlVcmwsXG4gICAgICAgICAgYWx0OiBgJHt1cGRhdGVEYXRhLnRpdGxlRW4gfHwgJ1Byb2R1Y3QnfSBpbWFnZWAsXG4gICAgICAgICAgaXNNYWluOiB0cnVlLFxuICAgICAgICAgIHByb2R1Y3Q6IHtcbiAgICAgICAgICAgIGNvbm5lY3Q6IHtcbiAgICAgICAgICAgICAgaWQ6IHByb2R1Y3RJZFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGNvbnNvbGUubG9nKCdJbWFnZSB1cGxvYWRlZCB0byBDbG91ZGluYXJ5OicsIGNsb3VkaW5hcnlVcmwpO1xuICAgIH1cblxuICAgIGNvbnN0IHVwZGF0ZWRQcm9kdWN0ID0gYXdhaXQgcHJpc21hLnByb2R1Y3QudXBkYXRlKHtcbiAgICAgIHdoZXJlOiB7IGlkOiBwcm9kdWN0SWQgfSxcbiAgICAgIGRhdGE6IHVwZGF0ZURhdGEsXG4gICAgICBpbmNsdWRlOiB7XG4gICAgICAgIGltYWdlczogdHJ1ZVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc29sZS5sb2coJ1Byb2R1Y3QgdXBkYXRlZCBzdWNjZXNzZnVsbHk6JywgdXBkYXRlZFByb2R1Y3QpO1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih1cGRhdGVkUHJvZHVjdCk7XG4gIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgdXBkYXRpbmcgcHJvZHVjdDpcIiwgZXJyb3IpO1xuICAgIHJldHVybiBuZXcgTmV4dFJlc3BvbnNlKEpTT04uc3RyaW5naWZ5KHsgbWVzc2FnZTogZXJyb3IubWVzc2FnZSB9KSwge1xuICAgICAgc3RhdHVzOiA1MDAsXG4gICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXG4gICAgfSk7XG4gIH1cbn0iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwiZ2V0U2VydmVyU2Vzc2lvbiIsImF1dGhPcHRpb25zIiwicHJpc21hIiwidjIiLCJjbG91ZGluYXJ5IiwiY29uZmlnIiwiY2xvdWRfbmFtZSIsInByb2Nlc3MiLCJlbnYiLCJDTE9VRElOQVJZX0NMT1VEX05BTUUiLCJhcGlfa2V5IiwiQ0xPVURJTkFSWV9BUElfS0VZIiwiYXBpX3NlY3JldCIsIkNMT1VESU5BUllfQVBJX1NFQ1JFVCIsIlBVVCIsInJlcSIsInBhcmFtcyIsImNvbnNvbGUiLCJsb2ciLCJpZCIsInNlc3Npb24iLCJ1c2VyIiwicm9sZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJtZXNzYWdlIiwic3RhdHVzIiwiaGVhZGVycyIsInByb2R1Y3RJZCIsImZvcm1EYXRhIiwiQXJyYXkiLCJmcm9tIiwia2V5cyIsInVwZGF0ZURhdGEiLCJoYXMiLCJ0aXRsZUVuIiwiZ2V0IiwidGl0bGVJdCIsImRlc2NyaXB0aW9uRW4iLCJkZXNjcmlwdGlvbkl0IiwicHJpY2UiLCJOdW1iZXIiLCJpbWFnZUZpbGUiLCJuYW1lIiwiYnl0ZXMiLCJhcnJheUJ1ZmZlciIsImJ1ZmZlciIsIkJ1ZmZlciIsInVwbG9hZFJlc3BvbnNlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJ1cGxvYWRlciIsInVwbG9hZF9zdHJlYW0iLCJmb2xkZXIiLCJyZXNvdXJjZV90eXBlIiwidHJhbnNmb3JtYXRpb24iLCJ3aWR0aCIsImhlaWdodCIsImNyb3AiLCJncmF2aXR5IiwicXVhbGl0eSIsImZldGNoX2Zvcm1hdCIsImVycm9yIiwicmVzdWx0IiwiZW5kIiwiY2xvdWRpbmFyeVVybCIsInNlY3VyZV91cmwiLCJpbWFnZSIsImRlbGV0ZU1hbnkiLCJ3aGVyZSIsImNyZWF0ZSIsImRhdGEiLCJ1cmwiLCJhbHQiLCJpc01haW4iLCJwcm9kdWN0IiwiY29ubmVjdCIsInVwZGF0ZWRQcm9kdWN0IiwidXBkYXRlIiwiaW5jbHVkZSIsImltYWdlcyIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/admin/products/[id]/route.ts\n");

/***/ }),

/***/ "(rsc)/./app/api/auth/[...nextauth]/route.ts":
/*!*********************************************!*\
  !*** ./app/api/auth/[...nextauth]/route.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ handler),\n/* harmony export */   POST: () => (/* binding */ handler),\n/* harmony export */   authOptions: () => (/* binding */ authOptions)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(rsc)/./node_modules/next-auth/providers/credentials.js\");\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/prisma */ \"(rsc)/./lib/prisma.ts\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst authOptions = {\n    providers: [\n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n            name: \"Credentials\",\n            credentials: {\n                email: {\n                    label: \"Email\",\n                    type: \"text\"\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"password\"\n                }\n            },\n            async authorize (credentials) {\n                if (!credentials?.email || !credentials?.password) {\n                    return null;\n                }\n                const user = await _lib_prisma__WEBPACK_IMPORTED_MODULE_2__[\"default\"].user.findUnique({\n                    where: {\n                        email: credentials.email\n                    }\n                });\n                if (!user) {\n                    return null;\n                }\n                const isPasswordCorrect = await bcrypt__WEBPACK_IMPORTED_MODULE_3___default().compare(credentials.password, user.passwordHash);\n                if (isPasswordCorrect) {\n                    return {\n                        id: user.id,\n                        email: user.email,\n                        name: user.name || \"\",\n                        role: user.role\n                    };\n                }\n                return null;\n            }\n        })\n    ],\n    callbacks: {\n        async jwt ({ token, user }) {\n            if (user) {\n                token.role = user.role;\n            }\n            return token;\n        },\n        async session ({ session, token }) {\n            if (session?.user) {\n                session.user.role = token.role;\n            }\n            return session;\n        }\n    },\n    pages: {\n        signIn: \"/login\"\n    },\n    session: {\n        strategy: \"jwt\"\n    }\n};\nconst handler = next_auth__WEBPACK_IMPORTED_MODULE_0___default()(authOptions);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBaUM7QUFDaUM7QUFDaEM7QUFDTjtBQUtyQixNQUFNSSxjQUEyQjtJQUN0Q0MsV0FBVztRQUNUSiwyRUFBbUJBLENBQUM7WUFDbEJLLE1BQU07WUFDTkMsYUFBYTtnQkFDWEMsT0FBTztvQkFBRUMsT0FBTztvQkFBU0MsTUFBTTtnQkFBTztnQkFDdENDLFVBQVU7b0JBQUVGLE9BQU87b0JBQVlDLE1BQU07Z0JBQVc7WUFDbEQ7WUFDQSxNQUFNRSxXQUFVTCxXQUFXO2dCQUN6QixJQUFJLENBQUNBLGFBQWFDLFNBQVMsQ0FBQ0QsYUFBYUksVUFBVTtvQkFDakQsT0FBTztnQkFDVDtnQkFFQSxNQUFNRSxPQUFPLE1BQU1YLG1EQUFNQSxDQUFDVyxJQUFJLENBQUNDLFVBQVUsQ0FBQztvQkFDeENDLE9BQU87d0JBQUVQLE9BQU9ELFlBQVlDLEtBQUs7b0JBQUM7Z0JBQ3BDO2dCQUVBLElBQUksQ0FBQ0ssTUFBTTtvQkFDVCxPQUFPO2dCQUNUO2dCQUVBLE1BQU1HLG9CQUFvQixNQUFNYixxREFBYyxDQUM1Q0ksWUFBWUksUUFBUSxFQUNwQkUsS0FBS0ssWUFBWTtnQkFHbkIsSUFBSUYsbUJBQW1CO29CQUNyQixPQUFPO3dCQUNMRyxJQUFJTixLQUFLTSxFQUFFO3dCQUNYWCxPQUFPSyxLQUFLTCxLQUFLO3dCQUNqQkYsTUFBTU8sS0FBS1AsSUFBSSxJQUFJO3dCQUNuQmMsTUFBTVAsS0FBS08sSUFBSTtvQkFDakI7Z0JBQ0Y7Z0JBRUEsT0FBTztZQUNUO1FBQ0Y7S0FDRDtJQUNEQyxXQUFXO1FBQ1QsTUFBTUMsS0FBSSxFQUFFQyxLQUFLLEVBQUVWLElBQUksRUFBRTtZQUN2QixJQUFJQSxNQUFNO2dCQUNSVSxNQUFNSCxJQUFJLEdBQUdQLEtBQUtPLElBQUk7WUFDeEI7WUFDQSxPQUFPRztRQUNUO1FBQ0EsTUFBTUMsU0FBUSxFQUFFQSxPQUFPLEVBQUVELEtBQUssRUFBRTtZQUM5QixJQUFJQyxTQUFTWCxNQUFNO2dCQUNqQlcsUUFBUVgsSUFBSSxDQUFDTyxJQUFJLEdBQUdHLE1BQU1ILElBQUk7WUFDaEM7WUFDQSxPQUFPSTtRQUNUO0lBQ0Y7SUFDQUMsT0FBTztRQUNMQyxRQUFRO0lBQ1Y7SUFDQUYsU0FBUztRQUNQRyxVQUFVO0lBQ1o7QUFDRixFQUFFO0FBRUYsTUFBTUMsVUFBVTVCLGdEQUFRQSxDQUFDSTtBQUNrQiIsInNvdXJjZXMiOlsid2VicGFjazovL25vZGF0YWJhc2V0ZGMvLi9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZS50cz9jOGE0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOZXh0QXV0aCBmcm9tICduZXh0LWF1dGgnO1xuaW1wb3J0IENyZWRlbnRpYWxzUHJvdmlkZXIgZnJvbSAnbmV4dC1hdXRoL3Byb3ZpZGVycy9jcmVkZW50aWFscyc7XG5pbXBvcnQgcHJpc21hIGZyb20gJ0AvbGliL3ByaXNtYSc7XG5pbXBvcnQgYmNyeXB0IGZyb20gJ2JjcnlwdCc7XG5pbXBvcnQgeyBKV1QgfSBmcm9tIFwibmV4dC1hdXRoL2p3dFwiO1xuaW1wb3J0IHsgU2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGhcIjtcbmltcG9ydCB7IEF1dGhPcHRpb25zIH0gZnJvbSAnbmV4dC1hdXRoJztcblxuZXhwb3J0IGNvbnN0IGF1dGhPcHRpb25zOiBBdXRoT3B0aW9ucyA9IHtcbiAgcHJvdmlkZXJzOiBbXG4gICAgQ3JlZGVudGlhbHNQcm92aWRlcih7XG4gICAgICBuYW1lOiAnQ3JlZGVudGlhbHMnLFxuICAgICAgY3JlZGVudGlhbHM6IHtcbiAgICAgICAgZW1haWw6IHsgbGFiZWw6IFwiRW1haWxcIiwgdHlwZTogXCJ0ZXh0XCIgfSxcbiAgICAgICAgcGFzc3dvcmQ6IHsgbGFiZWw6IFwiUGFzc3dvcmRcIiwgdHlwZTogXCJwYXNzd29yZFwiIH1cbiAgICAgIH0sXG4gICAgICBhc3luYyBhdXRob3JpemUoY3JlZGVudGlhbHMpIHtcbiAgICAgICAgaWYgKCFjcmVkZW50aWFscz8uZW1haWwgfHwgIWNyZWRlbnRpYWxzPy5wYXNzd29yZCkge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRVbmlxdWUoe1xuICAgICAgICAgIHdoZXJlOiB7IGVtYWlsOiBjcmVkZW50aWFscy5lbWFpbCB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICghdXNlcikge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaXNQYXNzd29yZENvcnJlY3QgPSBhd2FpdCBiY3J5cHQuY29tcGFyZShcbiAgICAgICAgICBjcmVkZW50aWFscy5wYXNzd29yZCxcbiAgICAgICAgICB1c2VyLnBhc3N3b3JkSGFzaFxuICAgICAgICApO1xuXG4gICAgICAgIGlmIChpc1Bhc3N3b3JkQ29ycmVjdCkge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpZDogdXNlci5pZCxcbiAgICAgICAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxuICAgICAgICAgICAgbmFtZTogdXNlci5uYW1lIHx8ICcnLFxuICAgICAgICAgICAgcm9sZTogdXNlci5yb2xlXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgIH0pLFxuICBdLFxuICBjYWxsYmFja3M6IHtcbiAgICBhc3luYyBqd3QoeyB0b2tlbiwgdXNlciB9KSB7XG4gICAgICBpZiAodXNlcikge1xuICAgICAgICB0b2tlbi5yb2xlID0gdXNlci5yb2xlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRva2VuO1xuICAgIH0sXG4gICAgYXN5bmMgc2Vzc2lvbih7IHNlc3Npb24sIHRva2VuIH0pIHtcbiAgICAgIGlmIChzZXNzaW9uPy51c2VyKSB7XG4gICAgICAgIHNlc3Npb24udXNlci5yb2xlID0gdG9rZW4ucm9sZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBzZXNzaW9uO1xuICAgIH1cbiAgfSxcbiAgcGFnZXM6IHtcbiAgICBzaWduSW46ICcvbG9naW4nXG4gIH0sXG4gIHNlc3Npb246IHtcbiAgICBzdHJhdGVneTogXCJqd3RcIiBhcyBjb25zdFxuICB9XG59O1xuXG5jb25zdCBoYW5kbGVyID0gTmV4dEF1dGgoYXV0aE9wdGlvbnMpO1xuZXhwb3J0IHsgaGFuZGxlciBhcyBHRVQsIGhhbmRsZXIgYXMgUE9TVCB9OyJdLCJuYW1lcyI6WyJOZXh0QXV0aCIsIkNyZWRlbnRpYWxzUHJvdmlkZXIiLCJwcmlzbWEiLCJiY3J5cHQiLCJhdXRoT3B0aW9ucyIsInByb3ZpZGVycyIsIm5hbWUiLCJjcmVkZW50aWFscyIsImVtYWlsIiwibGFiZWwiLCJ0eXBlIiwicGFzc3dvcmQiLCJhdXRob3JpemUiLCJ1c2VyIiwiZmluZFVuaXF1ZSIsIndoZXJlIiwiaXNQYXNzd29yZENvcnJlY3QiLCJjb21wYXJlIiwicGFzc3dvcmRIYXNoIiwiaWQiLCJyb2xlIiwiY2FsbGJhY2tzIiwiand0IiwidG9rZW4iLCJzZXNzaW9uIiwicGFnZXMiLCJzaWduSW4iLCJzdHJhdGVneSIsImhhbmRsZXIiLCJHRVQiLCJQT1NUIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/auth/[...nextauth]/route.ts\n");

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