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
exports.id = "pages/api/blogs";
exports.ids = ["pages/api/blogs"];
exports.modules = {

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "(api)/./pages/api/blogs.js":
/*!****************************!*\
  !*** ./pages/api/blogs.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\n\nasync function handler(req, res) {\n    let data = await fs__WEBPACK_IMPORTED_MODULE_0__.promises.readdir(\"blogData\");\n    let myfile;\n    let allBlogs = [];\n    for(let index = 0; index < data.length; index++){\n        const item = data[index];\n        myfile = await fs__WEBPACK_IMPORTED_MODULE_0__.promises.readFile(\"blogData/\" + item, \"utf-8\");\n        allBlogs.push(JSON.parse(myfile));\n    }\n    res.status(200).json(allBlogs);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYmxvZ3MuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsNkVBQTZFO0FBQ3BEO0FBQ1YsZUFBZUMsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUM5QyxJQUFJQyxJQUFJLEdBQUcsTUFBTUosZ0RBQW1CLENBQUMsVUFBVSxDQUFDO0lBQ2hELElBQUlPLE1BQU07SUFDVixJQUFJQyxRQUFRLEdBQUcsRUFBRTtJQUNqQixJQUFLLElBQUlDLEtBQUssR0FBRyxDQUFDLEVBQUVBLEtBQUssR0FBR0wsSUFBSSxDQUFDTSxNQUFNLEVBQUVELEtBQUssRUFBRSxDQUFFO1FBQ2hELE1BQU1FLElBQUksR0FBR1AsSUFBSSxDQUFDSyxLQUFLLENBQUM7UUFDeEJGLE1BQU0sR0FBRyxNQUFNUCxpREFBb0IsQ0FBQyxXQUFXLEdBQUdXLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztRQUNqRUgsUUFBUSxDQUFDSyxJQUFJLENBQUNDLElBQUksQ0FBQ0MsS0FBSyxDQUFDUixNQUFNLENBQUMsQ0FBQyxDQUFDO0tBQ25DO0lBQ0RKLEdBQUcsQ0FBQ2EsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUNULFFBQVEsQ0FBQyxDQUFDO0NBQ2hDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaHVudGVyLy4vcGFnZXMvYXBpL2Jsb2dzLmpzP2VjOGMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gTmV4dC5qcyBBUEkgcm91dGUgc3VwcG9ydDogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvYXBpLXJvdXRlcy9pbnRyb2R1Y3Rpb25cbmltcG9ydCAqIGFzIGZzIGZyb20gXCJmc1wiO1xuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICBsZXQgZGF0YSA9IGF3YWl0IGZzLnByb21pc2VzLnJlYWRkaXIoXCJibG9nRGF0YVwiKTtcbiAgbGV0IG15ZmlsZTtcbiAgbGV0IGFsbEJsb2dzID0gW107XG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBkYXRhLmxlbmd0aDsgaW5kZXgrKykge1xuICAgIGNvbnN0IGl0ZW0gPSBkYXRhW2luZGV4XTtcbiAgICBteWZpbGUgPSBhd2FpdCBmcy5wcm9taXNlcy5yZWFkRmlsZShcImJsb2dEYXRhL1wiICsgaXRlbSwgXCJ1dGYtOFwiKTtcbiAgICBhbGxCbG9ncy5wdXNoKEpTT04ucGFyc2UobXlmaWxlKSk7XG4gIH1cbiAgcmVzLnN0YXR1cygyMDApLmpzb24oYWxsQmxvZ3MpO1xufVxuIl0sIm5hbWVzIjpbImZzIiwiaGFuZGxlciIsInJlcSIsInJlcyIsImRhdGEiLCJwcm9taXNlcyIsInJlYWRkaXIiLCJteWZpbGUiLCJhbGxCbG9ncyIsImluZGV4IiwibGVuZ3RoIiwiaXRlbSIsInJlYWRGaWxlIiwicHVzaCIsIkpTT04iLCJwYXJzZSIsInN0YXR1cyIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/blogs.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/blogs.js"));
module.exports = __webpack_exports__;

})();