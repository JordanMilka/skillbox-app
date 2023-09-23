/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(36), exports);


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.meRequestAsync = exports.meRequestError = exports.ME_REQUEST_ERROR = exports.meRequestSuccess = exports.ME_REQUEST_SUCCESS = exports.meRequest = exports.ME_REQUEST = void 0;
const axios_1 = __importDefault(__webpack_require__(3));
exports.ME_REQUEST = "ME_REQUEST";
const meRequest = () => ({
    type: exports.ME_REQUEST,
});
exports.meRequest = meRequest;
exports.ME_REQUEST_SUCCESS = "ME_REQUEST_SUCCESS";
const meRequestSuccess = (data) => ({
    type: exports.ME_REQUEST_SUCCESS,
    data,
});
exports.meRequestSuccess = meRequestSuccess;
exports.ME_REQUEST_ERROR = "ME_REQUEST_ERROR";
const meRequestError = (error) => ({
    type: exports.ME_REQUEST_ERROR,
    error,
});
exports.meRequestError = meRequestError;
const meRequestAsync = () => (dispatch, getState) => {
    dispatch((0, exports.meRequest)());
    axios_1.default
        .get("https://oauth.reddit.com/api/v1/me.json", {
        headers: { Authorization: `bearer ${getState().saveToken.token}` },
    })
        .then(resp => {
        const userData = resp.data;
        dispatch((0, exports.meRequestSuccess)({ name: userData.name, iconImg: userData.snoovatar_img }));
    })
        .catch(err => {
        console.log(err);
        dispatch((0, exports.meRequestError)(String(err)));
    });
};
exports.meRequestAsync = meRequestAsync;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.setToken = exports.SET_TOKEN = void 0;
exports.SET_TOKEN = "SET_TOKEN";
const setToken = text => ({ type: exports.SET_TOKEN, text: text });
exports.setToken = setToken;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(81), exports);


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(38), exports);
__exportStar(__webpack_require__(39), exports);
__exportStar(__webpack_require__(40), exports);
__exportStar(__webpack_require__(41), exports);
__exportStar(__webpack_require__(42), exports);
__exportStar(__webpack_require__(43), exports);
__exportStar(__webpack_require__(44), exports);


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.useUserData = void 0;
const react_1 = __webpack_require__(0);
const react_redux_1 = __webpack_require__(1);
const react_redux_2 = __webpack_require__(1);
const actions_1 = __webpack_require__(6);
function useUserData() {
    const data = (0, react_redux_1.useSelector)(state => state.me.data);
    const loading = (0, react_redux_1.useSelector)(state => state.me.loading);
    const token = (0, react_redux_1.useSelector)(state => state.saveToken.token);
    const dispatch = (0, react_redux_2.useDispatch)();
    (0, react_1.useEffect)(() => {
        if (!token || token == "undefined") {
            return;
        }
        dispatch((0, actions_1.meRequestAsync)());
    }, [token]);
    return { data, loading };
}
exports.useUserData = useUserData;


/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("recoil");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(__webpack_require__(14));
const server_1 = __importDefault(__webpack_require__(15));
const indexTemplate_1 = __webpack_require__(16);
const App_1 = __webpack_require__(17);
const axios_1 = __importDefault(__webpack_require__(3));
// import { compression } from "compression"
// import helmet from "helmet"
const PORT = process.env.PORT || 3000;
const app = (0, express_1.default)();
app.use("/static", express_1.default.static("./dist/client"));
// app.use(compression())
// app.use(helmet({ contentSecurityPolicy: false }))
app.get("/auth", (req, res) => {
    axios_1.default
        .post("https://www.reddit.com/api/v1/access_token", `grant_type=authorization_code&code=${req.query.code}&redirect_uri=http://localhost:3000/auth`, {
        auth: { username: 'undefined', password: "qz0wU3U3LwIoVt_3pYb4R3bKJx8iEw" },
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
    })
        .then(({ data }) => {
        res.send((0, indexTemplate_1.indexTemplate)(server_1.default.renderToString((0, App_1.App)()), data["access_token"]));
    })
        .catch(console.log);
});
app.get("*", (req, res) => {
    res.send((0, indexTemplate_1.indexTemplate)(server_1.default.renderToString((0, App_1.App)())));
});
app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});


/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.indexTemplate = void 0;
const indexTemplate = (content, token) => `
	<!DOCTYPE html>
	<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>Reddit</title>
		<script src="/static/client.js" type="application/javascript"></script>
		<script>
			window.__token__ = '${token}'
		</script>
	</head>
	<body>
		<div id="react_root">${content}</div>
		<div id="modal_root"></div>
	</body>
	</html>
`;
exports.indexTemplate = indexTemplate;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const react_1 = __importStar(__webpack_require__(0));
__webpack_require__(18);
const root_1 = __webpack_require__(20);
const Layout_1 = __webpack_require__(21);
const userContext_1 = __webpack_require__(56);
const redux_1 = __webpack_require__(57);
const react_redux_1 = __webpack_require__(1);
const redux_devtools_extension_1 = __webpack_require__(58);
const store_1 = __webpack_require__(59);
const redux_thunk_1 = __importDefault(__webpack_require__(62));
const useToken_1 = __webpack_require__(63);
const react_router_dom_1 = __webpack_require__(2);
const CardsList_1 = __webpack_require__(64);
const NoMatch_1 = __webpack_require__(111);
const Post_1 = __webpack_require__(114);
const store = (0, redux_1.createStore)(store_1.rootReducer, (0, redux_devtools_extension_1.composeWithDevTools)((0, redux_1.applyMiddleware)(redux_thunk_1.default)));
function AppComponent() {
    const [mounted, setMounted] = (0, react_1.useState)(false);
    (0, react_1.useEffect)(() => {
        setMounted(true);
        // @ts-ignore
        store.dispatch((0, useToken_1.saveToken)());
    }, []);
    return (react_1.default.createElement(react_redux_1.Provider, { store: store }, mounted && (react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
        react_1.default.createElement(userContext_1.UserContextProvider, null,
            react_1.default.createElement(react_router_dom_1.Routes, null,
                react_1.default.createElement(react_router_dom_1.Route, { path: "/", element: react_1.default.createElement(Layout_1.Layout, null) },
                    react_1.default.createElement(react_router_dom_1.Route, { index: true, element: react_1.default.createElement(react_router_dom_1.Navigate, { to: "/posts" }) }),
                    react_1.default.createElement(react_router_dom_1.Route, { path: "/auth", element: react_1.default.createElement(react_router_dom_1.Navigate, { to: "/posts" }) }),
                    react_1.default.createElement(react_router_dom_1.Route, { path: "/posts/*", element: react_1.default.createElement(CardsList_1.CardsList, null) },
                        react_1.default.createElement(react_router_dom_1.Route, { path: ":id", element: react_1.default.createElement(Post_1.Post, null) })),
                    react_1.default.createElement(react_router_dom_1.Route, { path: "*", element: react_1.default.createElement(NoMatch_1.NoMatch, null) }))))))));
}
exports.App = (0, root_1.hot)(() => react_1.default.createElement(AppComponent, null));


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(19);
exports = ___CSS_LOADER_API_IMPORT___(false);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Roboto&display=swap);"]);
// Module
exports.push([module.i, "body{padding:0;margin:0;background-color:hsl(0, 0%, calc(var(--whiteLightness) - 4%));font-size:14px;line-height:16px;font-family:\"Roboto\",serif}*{color:#333;box-sizing:border-box;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}ul{margin:0;padding:0;list-style:none}a{text-decoration:none}button{padding:0;border:0;background:rgba(0,0,0,0);cursor:pointer}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
    var list = []; // return the list of modules as css string
    list.toString = function toString() {
        return this.map(function (item) {
            var content = cssWithMappingToString(item, useSourceMap);
            if (item[2]) {
                return "@media ".concat(item[2], " {").concat(content, "}");
            }
            return content;
        }).join('');
    }; // import a list of modules into the list
    // eslint-disable-next-line func-names
    list.i = function (modules, mediaQuery, dedupe) {
        if (typeof modules === 'string') {
            // eslint-disable-next-line no-param-reassign
            modules = [[null, modules, '']];
        }
        var alreadyImportedModules = {};
        if (dedupe) {
            for (var i = 0; i < this.length; i++) {
                // eslint-disable-next-line prefer-destructuring
                var id = this[i][0];
                if (id != null) {
                    alreadyImportedModules[id] = true;
                }
            }
        }
        for (var _i = 0; _i < modules.length; _i++) {
            var item = [].concat(modules[_i]);
            if (dedupe && alreadyImportedModules[item[0]]) {
                // eslint-disable-next-line no-continue
                continue;
            }
            if (mediaQuery) {
                if (!item[2]) {
                    item[2] = mediaQuery;
                }
                else {
                    item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
                }
            }
            list.push(item);
        }
    };
    return list;
};
function cssWithMappingToString(item, useSourceMap) {
    var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring
    var cssMapping = item[3];
    if (!cssMapping) {
        return content;
    }
    if (useSourceMap && typeof btoa === 'function') {
        var sourceMapping = toComment(cssMapping);
        var sourceURLs = cssMapping.sources.map(function (source) {
            return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
        });
        return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
    }
    return [content].join('\n');
} // Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    return "/*# ".concat(data, " */");
}


/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader/root");

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(22), exports);


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Layout = void 0;
const react_1 = __importDefault(__webpack_require__(0));
const layout_sass_1 = __importDefault(__webpack_require__(23));
const Header_1 = __webpack_require__(24);
const Content_1 = __webpack_require__(51);
const postContext_1 = __webpack_require__(54);
const react_router_dom_1 = __webpack_require__(2);
function Layout({ children }) {
    return (react_1.default.createElement("div", { className: layout_sass_1.default.layout },
        react_1.default.createElement(Header_1.Header, null),
        react_1.default.createElement(Content_1.Content, null,
            react_1.default.createElement(postContext_1.PostContextProvider, null,
                react_1.default.createElement(react_router_dom_1.Outlet, null),
                children))));
}
exports.Layout = Layout;


/***/ }),
/* 23 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"layout": "layout__layout--1crG2"
};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(25), exports);


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Header = void 0;
const react_1 = __importDefault(__webpack_require__(0));
const header_sass_1 = __importDefault(__webpack_require__(26));
const SearchBlock_1 = __webpack_require__(27);
const ThreadTitle_1 = __webpack_require__(45);
const SortBlock_1 = __webpack_require__(48);
function Header() {
    return (react_1.default.createElement("header", { className: header_sass_1.default.header },
        react_1.default.createElement(SearchBlock_1.SearchBlock, null),
        react_1.default.createElement(ThreadTitle_1.ThreadTitle, null),
        react_1.default.createElement(SortBlock_1.SortBlock, null)));
}
exports.Header = Header;


/***/ }),
/* 26 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"header": "header__header--fE7p8"
};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(28), exports);


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchBlock = void 0;
const react_1 = __importDefault(__webpack_require__(0));
const searchblock_sass_1 = __importDefault(__webpack_require__(29));
const UserBlock_1 = __webpack_require__(30);
const useUserData_1 = __webpack_require__(10);
function SearchBlock() {
    const { data, loading } = (0, useUserData_1.useUserData)();
    return (react_1.default.createElement("div", { className: searchblock_sass_1.default.searchBlock },
        react_1.default.createElement(UserBlock_1.UserBlock, { avatarSrc: data.iconImg, username: data.name, loading: loading })));
}
exports.SearchBlock = SearchBlock;


/***/ }),
/* 29 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"searchBlock": "searchblock__searchBlock--1sryi"
};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(31), exports);


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserBlock = void 0;
const react_1 = __importDefault(__webpack_require__(0));
const userblock_sass_1 = __importDefault(__webpack_require__(32));
const Break_1 = __webpack_require__(33);
const Text_1 = __webpack_require__(5);
const Icons_1 = __webpack_require__(9);
function UserBlock({ avatarSrc, username, loading }) {
    return (react_1.default.createElement("a", { href: "https://www.reddit.com/api/v1/authorize?client_id=hM5Xz-Jqngvv7rzwkr1bWw&response_type=code&state=random_string&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=read submit identity", className: userblock_sass_1.default.userBox },
        react_1.default.createElement("div", { className: userblock_sass_1.default.avatarBox }, avatarSrc ? react_1.default.createElement("img", { src: avatarSrc, alt: "User Avatar", className: userblock_sass_1.default.avatarImage }) : react_1.default.createElement(Icons_1.IconAnon, null)),
        react_1.default.createElement("div", { className: userblock_sass_1.default.username },
            react_1.default.createElement(Break_1.Break, { size: 12 }),
            loading ? (react_1.default.createElement(Text_1.Text, { size: 20, color: username ? Text_1.EColor.black : Text_1.EColor.grey99 }, "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430...")) : (react_1.default.createElement(Text_1.Text, { size: 20, color: username ? Text_1.EColor.black : Text_1.EColor.grey99 }, username || "Аноним")))));
}
exports.UserBlock = UserBlock;


/***/ }),
/* 32 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"userBox": "userblock__userBox--3dDp2",
	"avatarBox": "userblock__avatarBox--ZhHPa",
	"avatarImage": "userblock__avatarImage--1MNBj",
	"username": "userblock__username--HATTw"
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(34), exports);


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Break = void 0;
const react_1 = __importDefault(__webpack_require__(0));
const break_sass_1 = __importDefault(__webpack_require__(35));
const classnames_1 = __importDefault(__webpack_require__(4));
function Break(props) {
    const { inline = false, top = false, size, mobileSize, tabletSize, desktopSize } = props;
    return react_1.default.createElement("div", { className: (0, classnames_1.default)(break_sass_1.default[`s${size}`], { [break_sass_1.default[`mobile_s${mobileSize}`]]: mobileSize }, { [break_sass_1.default[`tablet_t${tabletSize}`]]: tabletSize }, { [break_sass_1.default[`desktop_d${desktopSize}`]]: desktopSize }, { [break_sass_1.default.inline]: inline }, { [break_sass_1.default.top]: top }) });
}
exports.Break = Break;


/***/ }),
/* 35 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"s4": "break__s4--1gBpA",
	"s8": "break__s8--y1YE3",
	"s12": "break__s12--3_cpZ",
	"s16": "break__s16--1JljU",
	"s20": "break__s20--2hyC3",
	"inline": "break__inline--3Rgqg",
	"top": "break__top--2oy-b",
	"mobile_s4": "break__mobile_s4--3d17q",
	"mobile_s8": "break__mobile_s8--231hm",
	"mobile_s12": "break__mobile_s12--1P1FE",
	"mobile_s16": "break__mobile_s16--fZ4kR",
	"mobile_s20": "break__mobile_s20--iz51X",
	"tablet_s4": "break__tablet_s4--3lPAm",
	"tablet_s8": "break__tablet_s8--OKfcv",
	"tablet_s12": "break__tablet_s12--x1EQc",
	"tablet_s16": "break__tablet_s16--1DJpN",
	"tablet_s20": "break__tablet_s20--j46WL",
	"desktop_s4": "break__desktop_s4--1t6dn",
	"desktop_s8": "break__desktop_s8--10EVq",
	"desktop_s12": "break__desktop_s12--wbkKs",
	"desktop_s16": "break__desktop_s16--3ECBa",
	"desktop_s20": "break__desktop_s20--tiw_n"
};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Text = exports.EColor = void 0;
const react_1 = __importDefault(__webpack_require__(0));
const text_sass_1 = __importDefault(__webpack_require__(37));
const classnames_1 = __importDefault(__webpack_require__(4));
var EColor;
(function (EColor) {
    EColor["black"] = "black";
    EColor["orange"] = "#cc6633";
    EColor["green"] = "#A4CC33";
    EColor["white"] = "white";
    EColor["greyF4"] = "#f4f4f4";
    EColor["greyF3"] = "#f3f3f3";
    EColor["greyD9"] = "#d9d9d9";
    EColor["greyC4"] = "#c4c4c4";
    EColor["grey99"] = "#999999";
    EColor["grey66"] = "#666666";
})(EColor = exports.EColor || (exports.EColor = {}));
function Text(props) {
    const { As = "span", color = EColor.black, children, size, mobileSize, tabletSize, desktopSize, bold = false } = props;
    const classes = (0, classnames_1.default)(text_sass_1.default[`s${size}`], text_sass_1.default[color], { [text_sass_1.default.bold]: bold }, { [text_sass_1.default[`m${mobileSize}`]]: mobileSize }, { [text_sass_1.default[`t${tabletSize}`]]: tabletSize }, { [text_sass_1.default[`d${desktopSize}`]]: desktopSize });
    return react_1.default.createElement(As, { className: classes }, children);
}
exports.Text = Text;


/***/ }),
/* 37 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"s28": "text__s28--O__C_",
	"s20": "text__s20--1RloP",
	"s16": "text__s16--7oGeA",
	"s14": "text__s14--2dyuc",
	"s12": "text__s12--1Lutp",
	"s10": "text__s10--3BXIU",
	"black": "text__black--3sbv9",
	"orange": "text__orange--3Wycf",
	"green": "text__green--3LtoF",
	"white": "text__white--2rQel",
	"grayF4": "text__grayF4--eqn0d",
	"greyF3": "text__greyF3--1Timp",
	"greyD9": "text__greyD9--SHV7l",
	"greyC4": "text__greyC4--1FKPl",
	"grey99": "text__grey99--26kBH",
	"grey66": "text__grey66--2q82A",
	"upperCase": "text__upperCase--3P90b",
	"m28": "text__m28--1cpLP",
	"m20": "text__m20--1VFsd",
	"m16": "text__m16--JvmxW",
	"m14": "text__m14--2r_ce",
	"m12": "text__m12--1ucmC",
	"m10": "text__m10--1rfxk",
	"bold": "text__bold--mRAtT",
	"t28": "text__t28--1_-7B",
	"t20": "text__t20--2jzQp",
	"t16": "text__t16--veXDM",
	"t14": "text__t14--1-nsk",
	"t12": "text__t12--2Ojuy",
	"t10": "text__t10--3wUSK",
	"d28": "text__d28--W37U1",
	"d20": "text__d20--BFYrQ",
	"d16": "text__d16--3RRCX",
	"d14": "text__d14--12ze_",
	"d12": "text__d12--20Q69",
	"d10": "text__d10--39N9n"
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuIcon = void 0;
const react_1 = __importDefault(__webpack_require__(0));
function MenuIcon() {
    return (react_1.default.createElement("svg", { width: "16", height: "16", viewBox: "0 0 5 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        react_1.default.createElement("circle", { cx: "2.5", cy: "2.5", r: "2.5", fill: "#D9D9D9" }),
        react_1.default.createElement("circle", { cx: "2.5", cy: "10", r: "2.5", fill: "#D9D9D9" }),
        react_1.default.createElement("circle", { cx: "2.5", cy: "17.5", r: "2.5", fill: "#D9D9D9" })));
}
exports.MenuIcon = MenuIcon;


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentIcon = void 0;
const react_1 = __importDefault(__webpack_require__(0));
function CommentIcon() {
    return (react_1.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "15", height: "15", viewBox: "0 0 15 15", fill: "none" },
        react_1.default.createElement("path", { d: "M12.75 0.416626H1.41667C0.6375 0.416626 0 1.05413 0 1.83329V10.3333C0 11.1125 0.6375 11.75 1.41667 11.75H11.3333L14.1667 14.5833V1.83329C14.1667 1.05413 13.5292 0.416626 12.75 0.416626ZM11.3333 8.91663H2.83333V7.49996H11.3333V8.91663ZM11.3333 6.79163H2.83333V5.37496H11.3333V6.79163ZM11.3333 4.66663H2.83333V3.24996H11.3333V4.66663Z", fill: "#999999" })));
}
exports.CommentIcon = CommentIcon;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepostIcon = void 0;
const react_1 = __importDefault(__webpack_require__(0));
function RepostIcon() {
    return (react_1.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "12", height: "14", viewBox: "0 0 12 14", fill: "none" },
        react_1.default.createElement("path", { d: "M10 9.89558C9.49333 9.89558 9.04 10.1064 8.69333 10.4367L3.94 7.52008C3.97333 7.35843 4 7.19679 4 7.02811C4 6.85944 3.97333 6.69779 3.94 6.53614L8.64 3.64759C9 3.999 9.47333 4.21687 10 4.21687C11.1067 4.21687 12 3.2751 12 2.10843C12 0.941767 11.1067 0 10 0C8.89333 0 8 0.941767 8 2.10843C8 2.27711 8.02667 2.43875 8.06 2.6004L3.36 5.48896C3 5.13755 2.52667 4.91968 2 4.91968C0.893333 4.91968 0 5.86145 0 7.02811C0 8.19478 0.893333 9.13655 2 9.13655C2.52667 9.13655 3 8.91867 3.36 8.56727L8.10667 11.491C8.07333 11.6386 8.05333 11.7932 8.05333 11.9478C8.05333 13.0793 8.92667 14 10 14C11.0733 14 11.9467 13.0793 11.9467 11.9478C11.9467 10.8163 11.0733 9.89558 10 9.89558Z", fill: "#999999" })));
}
exports.RepostIcon = RepostIcon;


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockIcon = void 0;
const react_1 = __importDefault(__webpack_require__(0));
function BlockIcon() {
    return (react_1.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 14 14", fill: "none" },
        react_1.default.createElement("path", { d: "M7 0C3.136 0 0 3.136 0 7C0 10.864 3.136 14 7 14C10.864 14 14 10.864 14 7C14 3.136 10.864 0 7 0ZM7 12.6C3.906 12.6 1.4 10.094 1.4 7C1.4 5.705 1.841 4.515 2.583 3.57L10.43 11.417C9.485 12.159 8.295 12.6 7 12.6ZM11.417 10.43L3.57 2.583C4.515 1.841 5.705 1.4 7 1.4C10.094 1.4 12.6 3.906 12.6 7C12.6 8.295 12.159 9.485 11.417 10.43Z", fill: "#999999" })));
}
exports.BlockIcon = BlockIcon;


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SavePostIcon = void 0;
const react_1 = __importDefault(__webpack_require__(0));
function SavePostIcon() {
    return (react_1.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "14", height: "14", viewBox: "0 0 14 14", fill: "none" },
        react_1.default.createElement("path", { d: "M1.4 2.8H0V12.6C0 13.37 0.63 14 1.4 14H11.2V12.6H1.4V2.8ZM12.6 0H4.2C3.43 0 2.8 0.63 2.8 1.4V9.8C2.8 10.57 3.43 11.2 4.2 11.2H12.6C13.37 11.2 14 10.57 14 9.8V1.4C14 0.63 13.37 0 12.6 0ZM11.9 6.3H9.1V9.1H7.7V6.3H4.9V4.9H7.7V2.1H9.1V4.9H11.9V6.3Z", fill: "#979797" })));
}
exports.SavePostIcon = SavePostIcon;


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WarningIcon = void 0;
const react_1 = __importDefault(__webpack_require__(0));
function WarningIcon() {
    return (react_1.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 16 14", fill: "none" },
        react_1.default.createElement("path", { d: "M0 14H16L8 0L0 14ZM8.72727 11.7895H7.27273V10.3158H8.72727V11.7895ZM8.72727 8.8421H7.27273V5.89474H8.72727V8.8421Z", fill: "#999999" })));
}
exports.WarningIcon = WarningIcon;


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IconAnon = void 0;
const react_1 = __importDefault(__webpack_require__(0));
function IconAnon() {
    return (react_1.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "50", height: "50", viewBox: "0 0 50 50", fill: "none" },
        react_1.default.createElement("path", { d: "M25 0C11.2 0 0 11.2 0 25C0 38.8 11.2 50 25 50C38.8 50 50 38.8 50 25C50 11.2 38.8 0 25 0ZM25 7.5C29.15 7.5 32.5 10.85 32.5 15C32.5 19.15 29.15 22.5 25 22.5C20.85 22.5 17.5 19.15 17.5 15C17.5 10.85 20.85 7.5 25 7.5ZM25 43C18.75 43 13.225 39.8 10 34.95C10.075 29.975 20 27.25 25 27.25C29.975 27.25 39.925 29.975 40 34.95C36.775 39.8 31.25 43 25 43Z", fill: "#D9D9D9" })));
}
exports.IconAnon = IconAnon;


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(46), exports);


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadTitle = void 0;
const react_1 = __importDefault(__webpack_require__(0));
const threadtitle_sass_1 = __importDefault(__webpack_require__(47));
function ThreadTitle() {
    return (react_1.default.createElement("h1", { className: threadtitle_sass_1.default.threadTitle }, "Header"));
}
exports.ThreadTitle = ThreadTitle;


/***/ }),
/* 47 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"threadTitle": "threadtitle__threadTitle--32fJx"
};


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(49), exports);


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SortBlock = void 0;
const react_1 = __importDefault(__webpack_require__(0));
const sortblock_sass_1 = __importDefault(__webpack_require__(50));
function SortBlock() {
    return react_1.default.createElement("div", { className: sortblock_sass_1.default.sortBlock }, "sorting dropdown");
}
exports.SortBlock = SortBlock;


/***/ }),
/* 50 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"sortBlock": "sortblock__sortBlock--1ZoOn"
};


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(52), exports);


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Content = void 0;
const react_1 = __importDefault(__webpack_require__(0));
const content_sass_1 = __importDefault(__webpack_require__(53));
function Content({ children }) {
    return react_1.default.createElement("main", { className: content_sass_1.default.content }, children);
}
exports.Content = Content;


/***/ }),
/* 53 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"content": "content__content--3sAx5"
};


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostContextProvider = exports.postContext = void 0;
const react_1 = __importDefault(__webpack_require__(0));
const usePostData_1 = __webpack_require__(55);
exports.postContext = react_1.default.createContext([]);
function PostContextProvider({ children }) {
    const [data] = (0, usePostData_1.usePostData)();
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(exports.postContext.Provider, { value: data }, children)));
}
exports.PostContextProvider = PostContextProvider;


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usePostData = void 0;
const axios_1 = __importDefault(__webpack_require__(3));
const react_1 = __webpack_require__(0);
const react_redux_1 = __webpack_require__(1);
function usePostData() {
    const [data, setData] = (0, react_1.useState)([]);
    const token = (0, react_redux_1.useSelector)(state => state.saveToken.token);
    (0, react_1.useEffect)(() => {
        if (!token || token == "undefined") {
            return;
        }
        axios_1.default
            .get("https://oauth.reddit.com/best.json?sr_detail=true", {
            headers: { Authorization: `Bearer ${token}` },
        })
            .then(resp => {
            const userData = resp.data.data.children.map((item) => {
                var _a;
                return ({
                    id: item.data.id,
                    author: item.data.author,
                    title: item.data.title,
                    rating: item.data.ups,
                    avatar: item.data.sr_detail.icon_img ? item.data.sr_detail.icon_img : "https://mir-avatarok.3dn.ru/_si/0/03342719.jpg",
                    previewImg: item.data.preview ? (_a = item.data.preview.images) === null || _a === void 0 ? void 0 : _a[0].source.url.replace(/(\&amp\;)/g, "&") : "https://mir-avatarok.3dn.ru/_si/0/03342719.jpg",
                    dataPostUtc: item.data.created_utc,
                });
            });
            setData(userData);
        })
            .catch(console.log);
    }, [token]);
    return [data];
}
exports.usePostData = usePostData;


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserContextProvider = exports.userContext = void 0;
const react_1 = __importDefault(__webpack_require__(0));
const useUserData_1 = __webpack_require__(10);
exports.userContext = react_1.default.createContext({});
function UserContextProvider({ children }) {
    const { data } = (0, useUserData_1.useUserData)();
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(exports.userContext.Provider, { value: data }, children)));
}
exports.UserContextProvider = UserContextProvider;


/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.updateComment = exports.rootReducer = void 0;
const actions_1 = __webpack_require__(6);
const reducer_1 = __webpack_require__(60);
const actions_2 = __webpack_require__(7);
const reducer_2 = __webpack_require__(61);
const initialState = {
    commentText: "Hello! ",
    saveToken: { token: "" },
    me: { loading: false, error: "", data: {} },
};
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_COMMENT:
            return Object.assign(Object.assign({}, state), { commentText: action.text });
        case actions_2.SET_TOKEN:
            return Object.assign(Object.assign({}, state), { saveToken: (0, reducer_2.tokenReducer)(state.saveToken, action) });
        case actions_1.ME_REQUEST:
        case actions_1.ME_REQUEST_SUCCESS:
        case actions_1.ME_REQUEST_ERROR:
            return Object.assign(Object.assign({}, state), { me: (0, reducer_1.meReducer)(state.me, action) });
        default:
            return state;
    }
};
exports.rootReducer = rootReducer;
const UPDATE_COMMENT = "UPDATE_COMMENT";
const updateComment = text => ({ type: UPDATE_COMMENT, text: text });
exports.updateComment = updateComment;


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.meReducer = void 0;
const actions_1 = __webpack_require__(6);
const meReducer = (state = { loading: false, error: "", data: {} }, action) => {
    switch (action.type) {
        case actions_1.ME_REQUEST:
            return Object.assign(Object.assign({}, state), { loading: true });
        case actions_1.ME_REQUEST_ERROR:
            return Object.assign(Object.assign({}, state), { error: action.error, loading: false });
        case actions_1.ME_REQUEST_SUCCESS:
            return Object.assign(Object.assign({}, state), { data: action.data, loading: false });
        default:
            return state;
    }
};
exports.meReducer = meReducer;


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.tokenReducer = void 0;
const actions_1 = __webpack_require__(7);
const tokenReducer = (state, action) => {
    switch (action.type) {
        case actions_1.SET_TOKEN:
            return Object.assign(Object.assign({}, state), { token: action.text });
        default:
            return state;
    }
};
exports.tokenReducer = tokenReducer;


/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.saveToken = void 0;
const actions_1 = __webpack_require__(7);
const saveToken = () => (dispatch, getState) => {
    if (window.__token__) {
        dispatch((0, actions_1.setToken)(window.__token__));
    }
};
exports.saveToken = saveToken;


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(65), exports);


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardsList = void 0;
const react_1 = __importStar(__webpack_require__(0));
const cardslist_sass_1 = __importDefault(__webpack_require__(66));
const react_redux_1 = __webpack_require__(1);
const axios_1 = __importDefault(__webpack_require__(3));
const Card_1 = __webpack_require__(67);
const react_router_dom_1 = __webpack_require__(2);
let endCounter = 0;
function CardsList() {
    const token = (0, react_redux_1.useSelector)(state => state.saveToken.token);
    const [posts, setPosts] = (0, react_1.useState)([]);
    const [isLoading, setIsLoading] = (0, react_1.useState)(false);
    const [errorLoading, setErrorLoading] = (0, react_1.useState)("");
    const [nextAfter, setNextAfter] = (0, react_1.useState)("");
    const [isEnd, setIsEnd] = (0, react_1.useState)(false);
    const bottomOfList = (0, react_1.useRef)(null);
    function handleClick() {
        setIsEnd(false);
        endCounter = 0;
    }
    (0, react_1.useEffect)(() => {
        if (!token || token == "undefined") {
            return;
        }
        function load() {
            return __awaiter(this, void 0, void 0, function* () {
                endCounter++;
                if (endCounter > 3) {
                    return setIsEnd(true);
                }
                setIsLoading(true);
                setErrorLoading("");
                try {
                    const resp = yield axios_1.default.get("https://oauth.reddit.com/best.json?sr_detail=true", {
                        headers: { Authorization: `Bearer ${token}` },
                        params: { limit: 10, after: nextAfter },
                    });
                    const userData = resp.data.data.children.map((item) => {
                        var _a;
                        return ({
                            id: item.data.id,
                            author: item.data.author,
                            title: item.data.title,
                            rating: item.data.ups,
                            avatar: item.data.sr_detail.icon_img ? item.data.sr_detail.icon_img : "https://mir-avatarok.3dn.ru/_si/0/03342719.jpg",
                            previewImg: item.data.preview ? (_a = item.data.preview.images) === null || _a === void 0 ? void 0 : _a[0].source.url.replace(/(\&amp\;)/g, "&") : "https://media.istockphoto.com/id/943304030/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BD%D0%B5%D0%B9%D1%82%D1%80%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9-%D1%82%D0%BE%D0%BD-%D0%BE%D1%88%D1%82%D1%83%D0%BA%D0%B0%D1%82%D1%83%D1%80%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9-%D1%81%D1%82%D0%B5%D0%BD%D1%8B-%D1%82%D0%B5%D0%BA%D1%81%D1%82%D1%83%D1%80%D0%B0-%D1%84%D0%BE%D0%BD%D0%BE%D0%B2%D0%BE%D0%B5-%D0%B8%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5.jpg?s=612x612&w=0&k=20&c=Ojyspwgzm7s2GfeBVBMeIHF_KynMSOJ-VctDhx1gSqg=",
                            dataPostUtc: item.data.created_utc,
                        });
                    });
                    setNextAfter(resp.data.data.after);
                    setPosts(prevChildren => prevChildren.concat(...userData));
                }
                catch (error) {
                    setErrorLoading(String(error));
                }
                setIsLoading(false);
            });
        }
        const observer = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && !isEnd) {
                load();
            }
        }, { rootMargin: "10px" });
        if (bottomOfList.current) {
            observer.observe(bottomOfList.current);
        }
        return () => {
            if (bottomOfList.current) {
                observer.unobserve(bottomOfList.current);
            }
        };
    }, [isEnd, token, bottomOfList.current, nextAfter]);
    return (react_1.default.createElement("div", { className: cardslist_sass_1.default.cardsList },
        react_1.default.createElement(react_router_dom_1.Outlet, null),
        posts.length === 0 && !isLoading && !errorLoading && react_1.default.createElement("div", { style: { textAlign: "center" } }, "\u041D\u0435\u0442 \u043D\u0438 \u043E\u0434\u043D\u043E\u0433\u043E \u043F\u043E\u0441\u0442\u0430..."),
        posts.map(post => (react_1.default.createElement(Card_1.Card, { key: post.id, id: post.id, dataPostUtc: post.dataPostUtc, title: post.title, avatar: post.avatar, author: post.author, previewImg: post.previewImg, rating: post.rating }))),
        react_1.default.createElement("div", { ref: bottomOfList }),
        isEnd && (react_1.default.createElement("div", { style: { width: "100%", display: "flex", justifyContent: "center", marginTop: "10px" } },
            react_1.default.createElement("button", { className: cardslist_sass_1.default.button, onClick: handleClick }, "\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0435\u0449\u0451"))),
        isLoading && react_1.default.createElement("div", { style: { textAlign: "center", marginTop: "10px" } }, "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430..."),
        errorLoading && (react_1.default.createElement("div", { role: "alert", style: { textAlign: "center" } }, errorLoading))));
}
exports.CardsList = CardsList;


/***/ }),
/* 66 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"cardsList": "cardslist__cardsList--5G35F",
	"button": "cardslist__button--bu9az"
};


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Card = void 0;
const react_1 = __importDefault(__webpack_require__(0));
const card_sass_1 = __importDefault(__webpack_require__(68));
const Menu_1 = __webpack_require__(69);
const Controls_1 = __webpack_require__(87);
const Content_1 = __webpack_require__(99);
const Preview_1 = __webpack_require__(108);
function Card({ id, dataPostUtc, title, avatar, author, previewImg, rating }) {
    return (react_1.default.createElement("li", { className: card_sass_1.default.card },
        react_1.default.createElement(Content_1.Content, { postID: id, dataPostUtc: dataPostUtc, title: title, avatar: avatar, author: author }),
        react_1.default.createElement(Preview_1.Preview, { previewImg: previewImg }),
        react_1.default.createElement(Menu_1.Menu, { postID: id }),
        react_1.default.createElement(Controls_1.Controls, { rating: rating })));
}
exports.Card = Card;


/***/ }),
/* 68 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"card": "card__card--JF3k_",
	"textContent": "card__textContent--2uXBu"
};


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(70), exports);


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Menu = void 0;
const react_1 = __importDefault(__webpack_require__(0));
const menu_sass_1 = __importDefault(__webpack_require__(71));
const Dropdown_1 = __webpack_require__(72);
const Text_1 = __webpack_require__(5);
const MenuItemsList_1 = __webpack_require__(78);
const Icon_1 = __webpack_require__(8);
function Menu({ postID }) {
    return (react_1.default.createElement("div", { className: menu_sass_1.default.menu, id: postID },
        react_1.default.createElement(Dropdown_1.Dropdown, { postID: postID, button: react_1.default.createElement("button", { className: menu_sass_1.default.menuButton },
                react_1.default.createElement(Icon_1.Icon, { name: 0 /* menu */, size: 16 })) },
            react_1.default.createElement("div", { className: menu_sass_1.default.dropdown },
                react_1.default.createElement(MenuItemsList_1.MenuItemsList, { postID: postID }),
                react_1.default.createElement("button", { className: menu_sass_1.default.closeButton },
                    react_1.default.createElement(Text_1.Text, { mobileSize: 12, size: 14, color: Text_1.EColor.grey66 }, "\u0417\u0430\u043A\u0440\u044B\u0442\u044C"))))));
}
exports.Menu = Menu;


/***/ }),
/* 71 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"menu": "menu__menu--36KCu",
	"menuButton": "menu__menuButton--149sf",
	"dropdown": "menu__dropdown--3LOfx",
	"closeButton": "menu__closeButton--1_O1f"
};


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(73), exports);


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dropdown = void 0;
const react_1 = __importDefault(__webpack_require__(0));
const dropdown_sass_1 = __importDefault(__webpack_require__(74));
const DropdownContent_1 = __webpack_require__(75);
const NOOP = () => { };
function Dropdown({ postID, button, children, isOpen, onClose = NOOP, onOpen = NOOP }) {
    const [isDropdownOpen, setIsDropdownOpen] = react_1.default.useState(isOpen);
    react_1.default.useEffect(() => setIsDropdownOpen(isOpen), [isOpen]);
    react_1.default.useEffect(() => (isDropdownOpen ? onOpen() : onClose()), [isDropdownOpen]);
    const handleOpen = () => {
        if (isOpen === undefined) {
            setIsDropdownOpen(!isDropdownOpen);
        }
        else {
            setIsDropdownOpen(!isDropdownOpen);
        }
    };
    return (react_1.default.createElement("div", { className: dropdown_sass_1.default.dropdownContainer },
        react_1.default.createElement("div", { onClick: handleOpen }, button),
        isDropdownOpen && (react_1.default.createElement(DropdownContent_1.DropdownContent, { postID: postID, onClick: () => setIsDropdownOpen(false), onClose: () => setIsDropdownOpen(false) }, children))));
}
exports.Dropdown = Dropdown;


/***/ }),
/* 74 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"dropdownContainer": "dropdown__dropdownContainer--wavrp"
};


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(76), exports);


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DropdownContent = void 0;
const react_1 = __importStar(__webpack_require__(0));
const react_dom_1 = __importDefault(__webpack_require__(11));
const dropdowncontent_sass_1 = __importDefault(__webpack_require__(77));
function DropdownContent({ postID, onClick, children, onClose }) {
    const ref = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(() => {
        function handleClick(event) {
            var _a;
            if (event.target instanceof Node && !((_a = ref.current) === null || _a === void 0 ? void 0 : _a.contains(event.target))) {
                onClose === null || onClose === void 0 ? void 0 : onClose();
            }
        }
        document.addEventListener("click", handleClick);
        return () => {
            document.removeEventListener("click", handleClick);
        };
    }, []);
    const node = document.querySelector(`#modal_root`);
    if (!node)
        return null;
    return react_dom_1.default.createPortal(react_1.default.createElement("div", { className: dropdowncontent_sass_1.default.listContainer, ref: ref },
        react_1.default.createElement("div", { className: dropdowncontent_sass_1.default.list, onClick: onClick }, children)), node);
}
exports.DropdownContent = DropdownContent;


/***/ }),
/* 77 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"listContainer": "dropdowncontent__listContainer--1rr0D",
	"list": "dropdowncontent__list--2rC7N"
};


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(79), exports);


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuItemsList = void 0;
const react_1 = __importDefault(__webpack_require__(0));
const menuitemslist_sass_1 = __importDefault(__webpack_require__(80));
const Text_1 = __webpack_require__(5);
const Icon_1 = __webpack_require__(8);
const GenericList_1 = __webpack_require__(83);
const generateRandomIndex_1 = __webpack_require__(85);
const classnames_1 = __importDefault(__webpack_require__(4));
const menuItemsList = (0, classnames_1.default)([menuitemslist_sass_1.default.menuItemsList], [menuitemslist_sass_1.default.menuItemsListMD]);
const LIST = [
    {
        element: (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(Icon_1.Icon, { name: 1 /* comment */, size: 16 }),
            react_1.default.createElement(Text_1.Text, { size: 14, color: Text_1.EColor.grey99 }, "\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0438"))),
        className: menuitemslist_sass_1.default.menuItem,
        As: "li",
    },
    {
        element: (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(Icon_1.Icon, { name: 2 /* repost */, size: 16 }),
            react_1.default.createElement(Text_1.Text, { size: 14, color: Text_1.EColor.grey99 }, "\u041F\u043E\u0434\u0435\u043B\u0438\u0442\u044C\u0441\u044F"))),
        className: menuitemslist_sass_1.default.menuItem,
        As: "li",
    },
    {
        element: (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(Icon_1.Icon, { name: 3 /* block */, size: 16 }),
            react_1.default.createElement(Text_1.Text, { size: 14, color: Text_1.EColor.grey99 }, "\u0421\u043A\u0440\u044B\u0442\u044C"))),
        className: menuitemslist_sass_1.default.menuItem,
        As: "li",
    },
    {
        element: (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(Icon_1.Icon, { name: 4 /* save */, size: 16 }),
            react_1.default.createElement(Text_1.Text, { size: 14, color: Text_1.EColor.grey99 }, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C"))),
        className: menuitemslist_sass_1.default.menuItem,
        As: "li",
    },
    {
        element: (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(Icon_1.Icon, { name: 5 /* warning */, size: 16 }),
            react_1.default.createElement(Text_1.Text, { size: 14, color: Text_1.EColor.grey99 }, "\u041F\u043E\u0436\u0430\u043B\u043E\u0432\u0430\u0442\u044C\u0441\u044F"))),
        className: menuitemslist_sass_1.default.menuItem,
        As: "li",
    },
].map(generateRandomIndex_1.generateID);
function MenuItemsList({ postID }) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("ul", { className: menuItemsList },
            react_1.default.createElement(GenericList_1.GenericList, { list: LIST }))));
}
exports.MenuItemsList = MenuItemsList;


/***/ }),
/* 80 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"menuItemsList": "menuitemslist__menuItemsList--n5heL",
	"menuItem": "menuitemslist__menuItem--3nedJ"
};


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Icon = void 0;
const react_1 = __importDefault(__webpack_require__(0));
const icon_sass_1 = __importDefault(__webpack_require__(82));
const Icons_1 = __webpack_require__(9);
const classnames_1 = __importDefault(__webpack_require__(4));
const icons = {
    [0 /* menu */]: react_1.default.createElement(Icons_1.MenuIcon, null),
    [1 /* comment */]: react_1.default.createElement(Icons_1.CommentIcon, null),
    [2 /* repost */]: react_1.default.createElement(Icons_1.RepostIcon, null),
    [3 /* block */]: react_1.default.createElement(Icons_1.BlockIcon, null),
    [4 /* save */]: react_1.default.createElement(Icons_1.SavePostIcon, null),
    [5 /* warning */]: react_1.default.createElement(Icons_1.WarningIcon, null),
};
function Icon({ name, size = 16 }) {
    const classes = (0, classnames_1.default)(icon_sass_1.default[`s${size}`], [icon_sass_1.default.iconContainer]);
    return react_1.default.createElement("div", { className: classes }, icons[name]);
}
exports.Icon = Icon;


/***/ }),
/* 82 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"iconContainer": "icon__iconContainer--38ZEW",
	"s10": "icon__s10--2QSSd",
	"s13": "icon__s13--3fulb",
	"s16": "icon__s16--2MhE6"
};


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(84), exports);


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenericList = void 0;
const react_1 = __importDefault(__webpack_require__(0));
const NOOP = () => { }; // Позволяет не делать if на проверку наличия значения (например в onClick)
function GenericList({ list }) {
    return (react_1.default.createElement(react_1.default.Fragment, null, list.map(({ As = "div", element, onClick = NOOP, className, id, href }) => (react_1.default.createElement(As, { className: className, onClick: () => onClick(id), key: id, href: href }, element)))));
}
exports.GenericList = GenericList;


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.generateID = exports.assignID = exports.generateRandomString = void 0;
const assoc_1 = __webpack_require__(86);
// библиотека nanoid может генерировать случайные id
const generateRandomString = () => Math.random().toString(36).substring(2, 15);
exports.generateRandomString = generateRandomString;
exports.assignID = (0, assoc_1.assoc)("id", exports.generateRandomString); // Здесь GRS вызывается лишь 1 раз
const generateID = (obj) => (0, exports.assignID)(obj); // здесь GRS вызывается каждый раз при вызове функции
exports.generateID = generateID;


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.assoc = void 0;
function assoc(key, value) {
    return (obj) => (Object.assign(Object.assign({}, obj), { [key]: value() }));
}
exports.assoc = assoc;


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(88), exports);


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Controls = void 0;
const react_1 = __importDefault(__webpack_require__(0));
const controls_sass_1 = __importDefault(__webpack_require__(89));
const KarmaCounter_1 = __webpack_require__(90);
const Comments_1 = __webpack_require__(93);
const ActionButtons_1 = __webpack_require__(96);
function Controls({ rating }) {
    return (react_1.default.createElement("div", { className: controls_sass_1.default.controls },
        react_1.default.createElement(KarmaCounter_1.KarmaCounter, { rating: rating }),
        react_1.default.createElement(Comments_1.Comments, null),
        react_1.default.createElement(ActionButtons_1.ActionButtons, null)));
}
exports.Controls = Controls;


/***/ }),
/* 89 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"controls": "controls__controls--2wRqC"
};


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(91), exports);


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.KarmaCounter = void 0;
const react_1 = __importDefault(__webpack_require__(0));
const karmacounter_sass_1 = __importDefault(__webpack_require__(92));
function KarmaCounter({ rating }) {
    return (react_1.default.createElement("div", { className: karmacounter_sass_1.default.karmaCounter },
        react_1.default.createElement("button", { className: karmacounter_sass_1.default.up },
            react_1.default.createElement("svg", { width: "19", height: "10", viewBox: "0 0 19 10", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                react_1.default.createElement("path", { d: "M9.5 0L0 10H19L9.5 0Z", fill: "#D9D9D9" }))),
        react_1.default.createElement("span", { className: karmacounter_sass_1.default.karmaValue }, rating),
        react_1.default.createElement("button", { className: karmacounter_sass_1.default.down },
            react_1.default.createElement("svg", { className: karmacounter_sass_1.default.down, width: "19", height: "10", viewBox: "0 0 19 10", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                react_1.default.createElement("path", { d: "M9.5 0L0 10H19L9.5 0Z", fill: "#D9D9D9" })))));
}
exports.KarmaCounter = KarmaCounter;


/***/ }),
/* 92 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"controls": "karmacounter__controls--6dE2a",
	"karmaCounter": "karmacounter__karmaCounter--exi35",
	"karmaValue": "karmacounter__karmaValue---YN7M",
	"down": "karmacounter__down--1iPky",
	"up": "karmacounter__up--3fb1U"
};


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(94), exports);


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Comments = void 0;
const react_1 = __importDefault(__webpack_require__(0));
const comments_sass_1 = __importDefault(__webpack_require__(95));
function Comments() {
    return (react_1.default.createElement("button", { className: comments_sass_1.default.commentsButton },
        react_1.default.createElement("svg", { width: "15", height: "15", viewBox: "0 0 15 15", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
            react_1.default.createElement("path", { d: "M12.75 0H1.41667C0.6375 0 0 0.6375 0 1.41667V9.91667C0 10.6958 0.6375 11.3333 1.41667 11.3333H11.3333L14.1667 14.1667V1.41667C14.1667 0.6375 13.5292 0 12.75 0ZM11.3333 8.5H2.83333V7.08333H11.3333V8.5ZM11.3333 6.375H2.83333V4.95833H11.3333V6.375ZM11.3333 4.25H2.83333V2.83333H11.3333V4.25Z", fill: "#C4C4C4" })),
        react_1.default.createElement("span", { className: comments_sass_1.default.commentsNumber }, "13")));
}
exports.Comments = Comments;


/***/ }),
/* 95 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"commentsButton": "comments__commentsButton--2Nsvh",
	"commentsNumber": "comments__commentsNumber--1OaAd"
};


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(97), exports);


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActionButtons = void 0;
const react_1 = __importDefault(__webpack_require__(0));
const actionbuttons_sass_1 = __importDefault(__webpack_require__(98));
function ActionButtons() {
    return (react_1.default.createElement("div", { className: actionbuttons_sass_1.default.actions },
        react_1.default.createElement("button", { className: actionbuttons_sass_1.default.shareButton },
            react_1.default.createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                react_1.default.createElement("circle", { cx: "10", cy: "10", r: "10", fill: "#C4C4C4" }),
                react_1.default.createElement("path", { d: "M11.6667 12.0683C11.3289 12.0683 11.0267 12.2189 10.7956 12.4548L7.62667 10.3715C7.64889 10.256 7.66667 10.1406 7.66667 10.0201C7.66667 9.8996 7.64889 9.78414 7.62667 9.66867L10.76 7.60542C11 7.85643 11.3156 8.01205 11.6667 8.01205C12.4044 8.01205 13 7.33936 13 6.50602C13 5.67269 12.4044 5 11.6667 5C10.9289 5 10.3333 5.67269 10.3333 6.50602C10.3333 6.62651 10.3511 6.74197 10.3733 6.85743L7.24 8.92068C7 8.66968 6.68444 8.51406 6.33333 8.51406C5.59556 8.51406 5 9.18675 5 10.0201C5 10.8534 5.59556 11.5261 6.33333 11.5261C6.68444 11.5261 7 11.3705 7.24 11.1195L10.4044 13.2078C10.3822 13.3133 10.3689 13.4237 10.3689 13.5341C10.3689 14.3424 10.9511 15 11.6667 15C12.3822 15 12.9644 14.3424 12.9644 13.5341C12.9644 12.7259 12.3822 12.0683 11.6667 12.0683Z", fill: "white" }))),
        react_1.default.createElement("button", { className: actionbuttons_sass_1.default.saveButton },
            react_1.default.createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                react_1.default.createElement("circle", { cx: "10", cy: "10", r: "10", fill: "#C4C4C4" }),
                react_1.default.createElement("path", { d: "M6 7H5V14C5 14.55 5.45 15 6 15H13V14H6V7ZM14 5H8C7.45 5 7 5.45 7 6V12C7 12.55 7.45 13 8 13H14C14.55 13 15 12.55 15 12V6C15 5.45 14.55 5 14 5ZM13.5 9.5H11.5V11.5H10.5V9.5H8.5V8.5H10.5V6.5H11.5V8.5H13.5V9.5Z", fill: "white" })))));
}
exports.ActionButtons = ActionButtons;


/***/ }),
/* 98 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"actions": "actionbuttons__actions--3pUVL",
	"shareButton": "actionbuttons__shareButton--1sZXQ",
	"saveButton": "actionbuttons__saveButton--1VY1a"
};


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(100), exports);


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Content = void 0;
const react_1 = __importDefault(__webpack_require__(0));
const content_sass_1 = __importDefault(__webpack_require__(101));
const CardData_1 = __webpack_require__(102);
const react_router_dom_1 = __webpack_require__(2);
function Content({ postID, avatar, author, dataPostUtc, title }) {
    const link = "/posts/" + postID;
    return (react_1.default.createElement("div", { className: content_sass_1.default.textContent },
        react_1.default.createElement(CardData_1.CardData, { dataPostUtc: dataPostUtc, avatar: avatar, author: author }),
        react_1.default.createElement("h2", { className: content_sass_1.default.title },
            react_1.default.createElement(react_router_dom_1.Link, { to: link, className: content_sass_1.default.postLink }, title))));
}
exports.Content = Content;


/***/ }),
/* 101 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"textContent": "content__textContent--2yVcb",
	"publishedLabel": "content__publishedLabel--1Kvp1",
	"title": "content__title--1I1_e",
	"postLink": "content__postLink--2FN_c"
};


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(103), exports);


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardData = void 0;
const react_1 = __importDefault(__webpack_require__(0));
const carddata_sass_1 = __importDefault(__webpack_require__(104));
const UserData_1 = __webpack_require__(105);
function CardData({ avatar, author, dataPostUtc }) {
    const date = new Date(Number(dataPostUtc) * 1000);
    return (react_1.default.createElement("div", { className: carddata_sass_1.default.metaData },
        react_1.default.createElement(UserData_1.UserData, { avatar: avatar, author: author }),
        react_1.default.createElement("span", { className: carddata_sass_1.default.createAt },
            react_1.default.createElement("span", { className: carddata_sass_1.default.publishedLabel }, "\u043E\u043F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u043D\u043E "),
            date.getDate() + "." + date.getMonth() + "." + date.getFullYear() + " в " + date.getHours() + ":" + date.getMinutes())));
}
exports.CardData = CardData;


/***/ }),
/* 104 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"metaData": "carddata__metaData--cshZU",
	"createdAt": "carddata__createdAt--1J89I",
	"publishedLabel": "carddata__publishedLabel--303nZ"
};


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(106), exports);


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserData = void 0;
const react_1 = __importDefault(__webpack_require__(0));
const userdata_sass_1 = __importDefault(__webpack_require__(107));
function UserData({ avatar, author }) {
    return (react_1.default.createElement("div", { className: userdata_sass_1.default.userLink },
        react_1.default.createElement("img", { className: userdata_sass_1.default.avatar, src: avatar, alt: "avatar" }),
        react_1.default.createElement("a", { href: "#user-url", className: userdata_sass_1.default.username }, author)));
}
exports.UserData = UserData;


/***/ }),
/* 107 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"userLink": "userdata__userLink--aRcuz",
	"avatar": "userdata__avatar--2Kts1",
	"username": "userdata__username--1PhDi"
};


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(109), exports);


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Preview = void 0;
const react_1 = __importDefault(__webpack_require__(0));
const preview_sass_1 = __importDefault(__webpack_require__(110));
function Preview({ previewImg }) {
    return (react_1.default.createElement("div", { className: preview_sass_1.default.preview },
        react_1.default.createElement("img", { src: previewImg, alt: "preview", className: preview_sass_1.default.previewImg })));
}
exports.Preview = Preview;


/***/ }),
/* 110 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"preview": "preview__preview--ga22N",
	"previewImg": "preview__previewImg--2Mg50"
};


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(112), exports);


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoMatch = void 0;
const react_1 = __importDefault(__webpack_require__(0));
const nomatch_sass_1 = __importDefault(__webpack_require__(113));
const react_router_dom_1 = __webpack_require__(2);
function NoMatch() {
    let location = (0, react_router_dom_1.useLocation)();
    return (react_1.default.createElement("div", { className: nomatch_sass_1.default.wrapper },
        react_1.default.createElement("img", { src: "https://i.pinimg.com/564x/7c/1c/a4/7c1ca448be31c489fb66214ea3ae6deb.jpg", alt: "\u041E\u0448\u0438\u0431\u043A\u0430" }),
        react_1.default.createElement("p", null,
            react_1.default.createElement("b", null, "\u041E\u0448\u0438\u0431\u043A\u0430 404"),
            " - \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430 ",
            react_1.default.createElement("b", null,
                "'",
                location.pathname,
                "'"),
            " \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u0430"),
        react_1.default.createElement("a", { href: "/posts", className: nomatch_sass_1.default.button }, "\u0412\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F \u043D\u0430 \u0433\u043B\u0430\u0432\u043D\u0443\u044E")));
}
exports.NoMatch = NoMatch;


/***/ }),
/* 113 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"wrapper": "nomatch__wrapper--2Eu7m",
	"button": "nomatch__button--1ibra"
};


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(115), exports);


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Post = void 0;
const react_1 = __importStar(__webpack_require__(0));
const react_dom_1 = __importDefault(__webpack_require__(11));
const post_sass_1 = __importDefault(__webpack_require__(116));
const CommentsWrapper_1 = __webpack_require__(117);
const CommentForm_1 = __webpack_require__(135);
const react_router_dom_1 = __webpack_require__(2);
const recoil_1 = __webpack_require__(12);
function Post() {
    const ref = (0, react_1.useRef)(null);
    let history = (0, react_router_dom_1.useNavigate)();
    let { id } = (0, react_router_dom_1.useParams)();
    console.log(id);
    (0, react_1.useEffect)(() => {
        function handleClick(event) {
            var _a;
            if (event.target instanceof Node && !((_a = ref.current) === null || _a === void 0 ? void 0 : _a.contains(event.target))) {
                history("/posts");
            }
        }
        document.addEventListener("click", handleClick);
        return () => {
            document.removeEventListener("click", handleClick);
        };
    }, []);
    const node = document.querySelector("#modal_root");
    if (!node)
        return null;
    return react_dom_1.default.createPortal(react_1.default.createElement("div", { className: post_sass_1.default.modal, ref: ref },
        react_1.default.createElement("h2", null, "\u0414\u0430\u043B\u0435\u043A\u043E-\u0434\u0430\u043B\u0435\u043A\u043E \u0437\u0430 \u0441\u043B\u043E\u0432\u0435\u0441\u043D\u044B\u043C\u0438 \u0433\u043E\u0440\u0430\u043C\u0438 \u0432 \u0441\u0442\u0440\u0430\u043D\u0435 \u0433\u043B\u0430\u0441\u043D\u044B\u0445 \u0438 \u0441\u043E\u0433\u043B\u0430\u0441\u043D\u044B\u0445 \u0436\u0438\u0432\u0443\u0442, \u0440\u044B\u0431\u043D\u044B\u0435 \u0442\u0435\u043A\u0441\u0442\u044B."),
        react_1.default.createElement("div", { className: post_sass_1.default.content },
            react_1.default.createElement("p", null, "\u0414\u0430\u043B\u0435\u043A\u043E-\u0434\u0430\u043B\u0435\u043A\u043E \u0437\u0430 \u0441\u043B\u043E\u0432\u0435\u0441\u043D\u044B\u043C\u0438 \u0433\u043E\u0440\u0430\u043C\u0438 \u0432 \u0441\u0442\u0440\u0430\u043D\u0435 \u0433\u043B\u0430\u0441\u043D\u044B\u0445 \u0438 \u0441\u043E\u0433\u043B\u0430\u0441\u043D\u044B\u0445 \u0436\u0438\u0432\u0443\u0442 \u0440\u044B\u0431\u043D\u044B\u0435 \u0442\u0435\u043A\u0441\u0442\u044B. \u041A\u043E\u0442\u043E\u0440\u043E\u0435 \u0437\u0430\u0433\u043B\u0430\u0432\u043D\u044B\u0445 \u0440\u0435\u0447\u044C\u044E \u0440\u0430\u0437 \u043D\u0430 \u0431\u0435\u0440\u0435\u0433\u0443 \u043F\u0440\u0435\u0434\u0443\u043F\u0440\u0435\u0436\u0434\u0430\u043B \u0440\u0435\u0448\u0438\u043B\u0430 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u044F!"),
            react_1.default.createElement("p", null, "\u0414\u0430\u043B\u0435\u043A\u043E-\u0434\u0430\u043B\u0435\u043A\u043E \u0437\u0430 \u0441\u043B\u043E\u0432\u0435\u0441\u043D\u044B\u043C\u0438 \u0433\u043E\u0440\u0430\u043C\u0438 \u0432 \u0441\u0442\u0440\u0430\u043D\u0435 \u0433\u043B\u0430\u0441\u043D\u044B\u0445 \u0438 \u0441\u043E\u0433\u043B\u0430\u0441\u043D\u044B\u0445 \u0436\u0438\u0432\u0443\u0442 \u0440\u044B\u0431\u043D\u044B\u0435 \u0442\u0435\u043A\u0441\u0442\u044B. \u041A\u043E\u0442\u043E\u0440\u043E\u0435 \u0437\u0430\u0433\u043B\u0430\u0432\u043D\u044B\u0445 \u0440\u0435\u0447\u044C\u044E \u0440\u0430\u0437 \u043D\u0430 \u0431\u0435\u0440\u0435\u0433\u0443 \u043F\u0440\u0435\u0434\u0443\u043F\u0440\u0435\u0436\u0434\u0430\u043B \u0440\u0435\u0448\u0438\u043B\u0430 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u044F!"),
            react_1.default.createElement("p", null, "\u0414\u0430\u043B\u0435\u043A\u043E-\u0434\u0430\u043B\u0435\u043A\u043E \u0437\u0430 \u0441\u043B\u043E\u0432\u0435\u0441\u043D\u044B\u043C\u0438 \u0433\u043E\u0440\u0430\u043C\u0438 \u0432 \u0441\u0442\u0440\u0430\u043D\u0435 \u0433\u043B\u0430\u0441\u043D\u044B\u0445 \u0438 \u0441\u043E\u0433\u043B\u0430\u0441\u043D\u044B\u0445 \u0436\u0438\u0432\u0443\u0442 \u0440\u044B\u0431\u043D\u044B\u0435 \u0442\u0435\u043A\u0441\u0442\u044B. \u041A\u043E\u0442\u043E\u0440\u043E\u0435 \u0437\u0430\u0433\u043B\u0430\u0432\u043D\u044B\u0445 \u0440\u0435\u0447\u044C\u044E \u0440\u0430\u0437 \u043D\u0430 \u0431\u0435\u0440\u0435\u0433\u0443 \u043F\u0440\u0435\u0434\u0443\u043F\u0440\u0435\u0436\u0434\u0430\u043B \u0440\u0435\u0448\u0438\u043B\u0430 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u044F!")),
        react_1.default.createElement(recoil_1.RecoilRoot, null,
            react_1.default.createElement(CommentForm_1.CommentForm, null)),
        react_1.default.createElement(CommentsWrapper_1.CommentsWrapper, { postID: id })), node);
}
exports.Post = Post;


/***/ }),
/* 116 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"modal": "post__modal--3l6va",
	"content": "post__content--21E1W",
	"close": "post__close--2SYlJ"
};


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(118), exports);


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentsWrapper = void 0;
const react_1 = __importDefault(__webpack_require__(0));
const commentsWrapper_sass_1 = __importDefault(__webpack_require__(119));
const useCommentsData_1 = __webpack_require__(120);
const Comment_1 = __webpack_require__(121);
function CommentsWrapper({ postID }) {
    const [data] = (0, useCommentsData_1.useCommentsData)(postID);
    return (react_1.default.createElement("ul", { className: commentsWrapper_sass_1.default.list }, data.map(comment => (react_1.default.createElement(Comment_1.Comment, { key: comment.id, id: comment.id, dataCommentUtc: comment.dataCommentUtc, text: comment.text, author: comment.author, rating: comment.rating })))));
}
exports.CommentsWrapper = CommentsWrapper;


/***/ }),
/* 119 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"list": "commentsWrapper__list--280jZ"
};


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCommentsData = void 0;
const axios_1 = __importDefault(__webpack_require__(3));
const react_1 = __webpack_require__(0);
const react_redux_1 = __webpack_require__(1);
function useCommentsData(id) {
    const [data, setData] = (0, react_1.useState)([]);
    const token = (0, react_redux_1.useSelector)(state => state.saveToken.token);
    (0, react_1.useEffect)(() => {
        if (!token || token == "undefined") {
            return;
        }
        axios_1.default
            .get(`https://oauth.reddit.com/comments/${id}`, {
            headers: { Authorization: `bearer ${token}` },
        })
            .then(resp => {
            const commentData = resp.data[1].data.children.map((item) => ({
                id: item.data.id,
                author: item.data.author,
                text: item.data.body,
                rating: item.data.ups,
                dataCommentUtc: item.data.created_utc,
            }));
            setData(commentData);
        })
            .catch(console.log);
    }, [token]);
    return [data];
}
exports.useCommentsData = useCommentsData;


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Comment = void 0;
const react_1 = __importDefault(__webpack_require__(0));
const comment_sass_1 = __importDefault(__webpack_require__(122));
const Data_1 = __webpack_require__(123);
const Controls_1 = __webpack_require__(126);
const Counter_1 = __webpack_require__(132);
function Comment({ id, author, text, rating, dataCommentUtc }) {
    return (react_1.default.createElement("div", { className: comment_sass_1.default.body },
        react_1.default.createElement(Counter_1.Counter, { rating: rating }),
        react_1.default.createElement("div", { className: comment_sass_1.default.content },
            react_1.default.createElement(Data_1.Data, { author: author, dataCommentUtc: dataCommentUtc }),
            text,
            react_1.default.createElement(Controls_1.Controls, { postID: id, author: author }))));
}
exports.Comment = Comment;


/***/ }),
/* 122 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"body": "comment__body--XwR_X",
	"content": "comment__content--3uXet"
};


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(124), exports);


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Data = void 0;
const react_1 = __importDefault(__webpack_require__(0));
const data_sass_1 = __importDefault(__webpack_require__(125));
function Data({ author, dataCommentUtc }) {
    const date = new Date(Number(dataCommentUtc) * 1000);
    return (react_1.default.createElement("div", { className: data_sass_1.default.data },
        react_1.default.createElement("a", { href: "#" }, author),
        react_1.default.createElement("div", { className: data_sass_1.default.date }, date.getDate() + "." + date.getMonth() + "." + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes())));
}
exports.Data = Data;


/***/ }),
/* 125 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"data": "data__data--1kDz-",
	"date": "data__date--BQpOo"
};


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(127), exports);


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Controls = void 0;
const react_1 = __importStar(__webpack_require__(0));
const controls_sass_1 = __importDefault(__webpack_require__(128));
const Icon_1 = __webpack_require__(8);
const ControledForm_1 = __webpack_require__(129);
function Controls({ postID, author }) {
    const [isFormOpened, setIsFormOpened] = (0, react_1.useState)(false);
    return (react_1.default.createElement("div", { className: controls_sass_1.default.controls },
        react_1.default.createElement("div", { className: controls_sass_1.default.wrapper },
            react_1.default.createElement("button", { onClick: () => setIsFormOpened(!isFormOpened) },
                react_1.default.createElement(Icon_1.Icon, { name: 1 /* comment */, size: 13 }),
                " \u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C"),
            react_1.default.createElement("button", null,
                react_1.default.createElement(Icon_1.Icon, { name: 2 /* repost */, size: 13 }),
                " \u041F\u043E\u0434\u0435\u043B\u0438\u0442\u044C\u0441\u044F"),
            react_1.default.createElement("button", null,
                react_1.default.createElement(Icon_1.Icon, { name: 5 /* warning */, size: 13 }),
                " \u041F\u043E\u0436\u0430\u043B\u043E\u0432\u0430\u0442\u044C\u0441\u044F")),
        isFormOpened && react_1.default.createElement(ControledForm_1.ControledForm, { author: author, onClose: () => setIsFormOpened(false) })));
}
exports.Controls = Controls;


/***/ }),
/* 128 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"controls": "controls__controls--1oyf9",
	"wrapper": "controls__wrapper--qKbD_"
};


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(130), exports);


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ControledForm = void 0;
const react_1 = __importStar(__webpack_require__(0));
const controledform_sass_1 = __importDefault(__webpack_require__(131));
function ControledForm({ author, onClose }) {
    const [value, setValue] = (0, react_1.useState)(`${author}, `);
    const ref = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(() => {
        var _a, _b;
        (_a = ref.current) === null || _a === void 0 ? void 0 : _a.focus();
        (_b = ref.current) === null || _b === void 0 ? void 0 : _b.setSelectionRange(value.length, value.length);
    }, []);
    function handleChange(event) {
        setValue(event.target.value);
    }
    function handleSubmit(event) {
        event.preventDefault();
        onClose();
    }
    return (react_1.default.createElement("form", { className: controledform_sass_1.default.form, onSubmit: handleSubmit },
        react_1.default.createElement("textarea", { className: controledform_sass_1.default.input, value: value, onChange: handleChange, ref: ref }),
        react_1.default.createElement("button", { type: "submit", className: controledform_sass_1.default.button }, "\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C")));
}
exports.ControledForm = ControledForm;


/***/ }),
/* 131 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"form": "controledform__form--2t7tG",
	"input": "controledform__input--3buLo",
	"button": "controledform__button--1ROjG"
};


/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(133), exports);


/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Counter = void 0;
const react_1 = __importDefault(__webpack_require__(0));
const counter_sass_1 = __importDefault(__webpack_require__(134));
function Counter({ rating }) {
    return (react_1.default.createElement("div", { className: counter_sass_1.default.karmaCounter },
        react_1.default.createElement("button", { className: counter_sass_1.default.up },
            react_1.default.createElement("svg", { width: "19", height: "10", viewBox: "0 0 19 10", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                react_1.default.createElement("path", { d: "M9.5 0L0 10H19L9.5 0Z", fill: "#D9D9D9" }))),
        react_1.default.createElement("span", { className: counter_sass_1.default.karmaValue }, rating),
        react_1.default.createElement("button", { className: counter_sass_1.default.down },
            react_1.default.createElement("svg", { className: counter_sass_1.default.down, width: "19", height: "10", viewBox: "0 0 19 10", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                react_1.default.createElement("path", { d: "M9.5 0L0 10H19L9.5 0Z", fill: "#D9D9D9" })))));
}
exports.Counter = Counter;


/***/ }),
/* 134 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"controls": "counter__controls--3cKzC",
	"karmaCounter": "counter__karmaCounter--Iq80Z",
	"karmaValue": "counter__karmaValue--2DmoI",
	"down": "counter__down--3mzd3",
	"up": "counter__up--N0u1_"
};


/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(136), exports);


/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentForm = void 0;
const react_1 = __importDefault(__webpack_require__(0));
const commentform_sass_1 = __importDefault(__webpack_require__(137));
const react_hook_form_1 = __webpack_require__(138);
const recoil_1 = __webpack_require__(12);
function CommentForm() {
    var _a, _b;
    const commentText = (0, recoil_1.atom)({
        key: "commentText",
        default: "Hello world!",
    });
    const { register, handleSubmit, formState: { errors }, } = (0, react_hook_form_1.useForm)({ defaultValues: { comment: "Hello! " } });
    const [value, setValue] = (0, recoil_1.useRecoilState)(commentText);
    const onChange = (event) => {
        setValue(event.target.value);
    };
    return (react_1.default.createElement("form", { className: commentform_sass_1.default.form, onSubmit: handleSubmit(data => {
            setValue(data.comment);
            alert("Данные отправлены: " + data.comment);
        }) },
        react_1.default.createElement("p", null, value),
        react_1.default.createElement("textarea", Object.assign({}, register("comment", { minLength: { value: 7, message: "Введите минимум 7 символов." } }), { onChange: onChange, className: commentform_sass_1.default.input, "aria-invalid": ((_a = errors.comment) === null || _a === void 0 ? void 0 : _a.message) ? "true" : undefined })),
        react_1.default.createElement("p", null, (_b = errors.comment) === null || _b === void 0 ? void 0 : _b.message),
        react_1.default.createElement("button", { type: "submit", className: commentform_sass_1.default.button }, "\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C")));
}
exports.CommentForm = CommentForm;


/***/ }),
/* 137 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"form": "commentform__form--3LGb0",
	"input": "commentform__input--Td4Bw",
	"button": "commentform__button--2ay2y"
};


/***/ }),
/* 138 */
/***/ (function(module, exports) {

module.exports = require("react-hook-form");

/***/ })
/******/ ]);