webpackHotUpdate("main",{

/***/ "./src/shared/Post/CommentForm/CommentForm.tsx":
/*!*****************************************************!*\
  !*** ./src/shared/Post/CommentForm/CommentForm.tsx ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CommentForm = void 0;\r\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nconst commentform_sass_1 = __importDefault(__webpack_require__(/*! ./commentform.sass */ \"./src/shared/Post/CommentForm/commentform.sass\"));\r\nconst react_hook_form_1 = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/index.esm.mjs\");\r\nconst recoil_1 = __webpack_require__(/*! recoil */ \"./node_modules/recoil/es/index.js\");\r\nfunction CommentForm() {\r\n    var _a, _b;\r\n    const commentText = (0, recoil_1.atom)({\r\n        key: \"commentText\",\r\n        default: \"Hello world!\", // default value (aka initial value)\r\n    });\r\n    const { register, handleSubmit, formState: { errors }, } = (0, react_hook_form_1.useForm)({ defaultValues: { comment: \"Hello! \" } });\r\n    const [value, setValue] = (0, recoil_1.useRecoilState)(\"\");\r\n    return (react_1.default.createElement(\"form\", { className: commentform_sass_1.default.form, onSubmit: handleSubmit(data => {\r\n            setValue(data.comment);\r\n            alert(\"Данные отправлены: \" + data.comment);\r\n        }) },\r\n        react_1.default.createElement(\"textarea\", Object.assign({}, register(\"comment\", { minLength: { value: 7, message: \"Введите минимум 7 символов.\" } }), { className: commentform_sass_1.default.input, \"aria-invalid\": ((_a = errors.comment) === null || _a === void 0 ? void 0 : _a.message) ? \"true\" : undefined })),\r\n        react_1.default.createElement(\"p\", null, (_b = errors.comment) === null || _b === void 0 ? void 0 : _b.message),\r\n        react_1.default.createElement(\"button\", { type: \"submit\", className: commentform_sass_1.default.button }, \"\\u041A\\u043E\\u043C\\u043C\\u0435\\u043D\\u0442\\u0438\\u0440\\u043E\\u0432\\u0430\\u0442\\u044C\")));\r\n}\r\nexports.CommentForm = CommentForm;\r\n\n\n//# sourceURL=webpack:///./src/shared/Post/CommentForm/CommentForm.tsx?");

/***/ }),

/***/ "./src/shared/Post/CommentForm/index.ts":
/*!**********************************************!*\
  !*** ./src/shared/Post/CommentForm/index.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./CommentForm */ \"./src/shared/Post/CommentForm/CommentForm.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Post/CommentForm/index.ts?");

/***/ })

})