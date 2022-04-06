/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://test-notes/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://test-notes/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./node_modules/handlebars/dist/cjs/handlebars.runtime.js":
/*!****************************************************************!*\
  !*** ./node_modules/handlebars/dist/cjs/handlebars.runtime.js ***!
  \****************************************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";
eval("\n\nexports.__esModule = true; // istanbul ignore next\n\nfunction _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : {\n    'default': obj\n  };\n} // istanbul ignore next\n\n\nfunction _interopRequireWildcard(obj) {\n  if (obj && obj.__esModule) {\n    return obj;\n  } else {\n    var newObj = {};\n\n    if (obj != null) {\n      for (var key in obj) {\n        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];\n      }\n    }\n\n    newObj['default'] = obj;\n    return newObj;\n  }\n}\n\nvar _handlebarsBase = __webpack_require__(/*! ./handlebars/base */ \"./node_modules/handlebars/dist/cjs/handlebars/base.js\");\n\nvar base = _interopRequireWildcard(_handlebarsBase); // Each of these augment the Handlebars object. No need to setup here.\n// (This is done to easily share code between commonjs and browse envs)\n\n\nvar _handlebarsSafeString = __webpack_require__(/*! ./handlebars/safe-string */ \"./node_modules/handlebars/dist/cjs/handlebars/safe-string.js\");\n\nvar _handlebarsSafeString2 = _interopRequireDefault(_handlebarsSafeString);\n\nvar _handlebarsException = __webpack_require__(/*! ./handlebars/exception */ \"./node_modules/handlebars/dist/cjs/handlebars/exception.js\");\n\nvar _handlebarsException2 = _interopRequireDefault(_handlebarsException);\n\nvar _handlebarsUtils = __webpack_require__(/*! ./handlebars/utils */ \"./node_modules/handlebars/dist/cjs/handlebars/utils.js\");\n\nvar Utils = _interopRequireWildcard(_handlebarsUtils);\n\nvar _handlebarsRuntime = __webpack_require__(/*! ./handlebars/runtime */ \"./node_modules/handlebars/dist/cjs/handlebars/runtime.js\");\n\nvar runtime = _interopRequireWildcard(_handlebarsRuntime);\n\nvar _handlebarsNoConflict = __webpack_require__(/*! ./handlebars/no-conflict */ \"./node_modules/handlebars/dist/cjs/handlebars/no-conflict.js\");\n\nvar _handlebarsNoConflict2 = _interopRequireDefault(_handlebarsNoConflict); // For compatibility and usage outside of module systems, make the Handlebars object a namespace\n\n\nfunction create() {\n  var hb = new base.HandlebarsEnvironment();\n  Utils.extend(hb, base);\n  hb.SafeString = _handlebarsSafeString2['default'];\n  hb.Exception = _handlebarsException2['default'];\n  hb.Utils = Utils;\n  hb.escapeExpression = Utils.escapeExpression;\n  hb.VM = runtime;\n\n  hb.template = function (spec) {\n    return runtime.template(spec, hb);\n  };\n\n  return hb;\n}\n\nvar inst = create();\ninst.create = create;\n\n_handlebarsNoConflict2['default'](inst);\n\ninst['default'] = inst;\nexports[\"default\"] = inst;\nmodule.exports = exports['default'];\n\n//# sourceURL=webpack://test-notes/./node_modules/handlebars/dist/cjs/handlebars.runtime.js?");

/***/ }),

/***/ "./node_modules/handlebars/dist/cjs/handlebars/base.js":
/*!*************************************************************!*\
  !*** ./node_modules/handlebars/dist/cjs/handlebars/base.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nexports.__esModule = true;\nexports.HandlebarsEnvironment = HandlebarsEnvironment; // istanbul ignore next\n\nfunction _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : {\n    'default': obj\n  };\n}\n\nvar _utils = __webpack_require__(/*! ./utils */ \"./node_modules/handlebars/dist/cjs/handlebars/utils.js\");\n\nvar _exception = __webpack_require__(/*! ./exception */ \"./node_modules/handlebars/dist/cjs/handlebars/exception.js\");\n\nvar _exception2 = _interopRequireDefault(_exception);\n\nvar _helpers = __webpack_require__(/*! ./helpers */ \"./node_modules/handlebars/dist/cjs/handlebars/helpers.js\");\n\nvar _decorators = __webpack_require__(/*! ./decorators */ \"./node_modules/handlebars/dist/cjs/handlebars/decorators.js\");\n\nvar _logger = __webpack_require__(/*! ./logger */ \"./node_modules/handlebars/dist/cjs/handlebars/logger.js\");\n\nvar _logger2 = _interopRequireDefault(_logger);\n\nvar _internalProtoAccess = __webpack_require__(/*! ./internal/proto-access */ \"./node_modules/handlebars/dist/cjs/handlebars/internal/proto-access.js\");\n\nvar VERSION = '4.7.7';\nexports.VERSION = VERSION;\nvar COMPILER_REVISION = 8;\nexports.COMPILER_REVISION = COMPILER_REVISION;\nvar LAST_COMPATIBLE_COMPILER_REVISION = 7;\nexports.LAST_COMPATIBLE_COMPILER_REVISION = LAST_COMPATIBLE_COMPILER_REVISION;\nvar REVISION_CHANGES = {\n  1: '<= 1.0.rc.2',\n  // 1.0.rc.2 is actually rev2 but doesn't report it\n  2: '== 1.0.0-rc.3',\n  3: '== 1.0.0-rc.4',\n  4: '== 1.x.x',\n  5: '== 2.0.0-alpha.x',\n  6: '>= 2.0.0-beta.1',\n  7: '>= 4.0.0 <4.3.0',\n  8: '>= 4.3.0'\n};\nexports.REVISION_CHANGES = REVISION_CHANGES;\nvar objectType = '[object Object]';\n\nfunction HandlebarsEnvironment(helpers, partials, decorators) {\n  this.helpers = helpers || {};\n  this.partials = partials || {};\n  this.decorators = decorators || {};\n\n  _helpers.registerDefaultHelpers(this);\n\n  _decorators.registerDefaultDecorators(this);\n}\n\nHandlebarsEnvironment.prototype = {\n  constructor: HandlebarsEnvironment,\n  logger: _logger2['default'],\n  log: _logger2['default'].log,\n  registerHelper: function registerHelper(name, fn) {\n    if (_utils.toString.call(name) === objectType) {\n      if (fn) {\n        throw new _exception2['default']('Arg not supported with multiple helpers');\n      }\n\n      _utils.extend(this.helpers, name);\n    } else {\n      this.helpers[name] = fn;\n    }\n  },\n  unregisterHelper: function unregisterHelper(name) {\n    delete this.helpers[name];\n  },\n  registerPartial: function registerPartial(name, partial) {\n    if (_utils.toString.call(name) === objectType) {\n      _utils.extend(this.partials, name);\n    } else {\n      if (typeof partial === 'undefined') {\n        throw new _exception2['default']('Attempting to register a partial called \"' + name + '\" as undefined');\n      }\n\n      this.partials[name] = partial;\n    }\n  },\n  unregisterPartial: function unregisterPartial(name) {\n    delete this.partials[name];\n  },\n  registerDecorator: function registerDecorator(name, fn) {\n    if (_utils.toString.call(name) === objectType) {\n      if (fn) {\n        throw new _exception2['default']('Arg not supported with multiple decorators');\n      }\n\n      _utils.extend(this.decorators, name);\n    } else {\n      this.decorators[name] = fn;\n    }\n  },\n  unregisterDecorator: function unregisterDecorator(name) {\n    delete this.decorators[name];\n  },\n\n  /**\n   * Reset the memory of illegal property accesses that have already been logged.\n   * @deprecated should only be used in handlebars test-cases\n   */\n  resetLoggedPropertyAccesses: function resetLoggedPropertyAccesses() {\n    _internalProtoAccess.resetLoggedProperties();\n  }\n};\nvar log = _logger2['default'].log;\nexports.log = log;\nexports.createFrame = _utils.createFrame;\nexports.logger = _logger2['default'];\n\n//# sourceURL=webpack://test-notes/./node_modules/handlebars/dist/cjs/handlebars/base.js?");

/***/ }),

/***/ "./node_modules/handlebars/dist/cjs/handlebars/decorators.js":
/*!*******************************************************************!*\
  !*** ./node_modules/handlebars/dist/cjs/handlebars/decorators.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nexports.__esModule = true;\nexports.registerDefaultDecorators = registerDefaultDecorators; // istanbul ignore next\n\nfunction _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : {\n    'default': obj\n  };\n}\n\nvar _decoratorsInline = __webpack_require__(/*! ./decorators/inline */ \"./node_modules/handlebars/dist/cjs/handlebars/decorators/inline.js\");\n\nvar _decoratorsInline2 = _interopRequireDefault(_decoratorsInline);\n\nfunction registerDefaultDecorators(instance) {\n  _decoratorsInline2['default'](instance);\n}\n\n//# sourceURL=webpack://test-notes/./node_modules/handlebars/dist/cjs/handlebars/decorators.js?");

/***/ }),

/***/ "./node_modules/handlebars/dist/cjs/handlebars/decorators/inline.js":
/*!**************************************************************************!*\
  !*** ./node_modules/handlebars/dist/cjs/handlebars/decorators/inline.js ***!
  \**************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";
eval("\n\nexports.__esModule = true;\n\nvar _utils = __webpack_require__(/*! ../utils */ \"./node_modules/handlebars/dist/cjs/handlebars/utils.js\");\n\nexports[\"default\"] = function (instance) {\n  instance.registerDecorator('inline', function (fn, props, container, options) {\n    var ret = fn;\n\n    if (!props.partials) {\n      props.partials = {};\n\n      ret = function (context, options) {\n        // Create a new partials stack frame prior to exec.\n        var original = container.partials;\n        container.partials = _utils.extend({}, original, props.partials);\n        var ret = fn(context, options);\n        container.partials = original;\n        return ret;\n      };\n    }\n\n    props.partials[options.args[0]] = options.fn;\n    return ret;\n  });\n};\n\nmodule.exports = exports['default'];\n\n//# sourceURL=webpack://test-notes/./node_modules/handlebars/dist/cjs/handlebars/decorators/inline.js?");

/***/ }),

/***/ "./node_modules/handlebars/dist/cjs/handlebars/exception.js":
/*!******************************************************************!*\
  !*** ./node_modules/handlebars/dist/cjs/handlebars/exception.js ***!
  \******************************************************************/
/***/ ((module, exports) => {

"use strict";
eval("\n\nexports.__esModule = true;\nvar errorProps = ['description', 'fileName', 'lineNumber', 'endLineNumber', 'message', 'name', 'number', 'stack'];\n\nfunction Exception(message, node) {\n  var loc = node && node.loc,\n      line = undefined,\n      endLineNumber = undefined,\n      column = undefined,\n      endColumn = undefined;\n\n  if (loc) {\n    line = loc.start.line;\n    endLineNumber = loc.end.line;\n    column = loc.start.column;\n    endColumn = loc.end.column;\n    message += ' - ' + line + ':' + column;\n  }\n\n  var tmp = Error.prototype.constructor.call(this, message); // Unfortunately errors are not enumerable in Chrome (at least), so `for prop in tmp` doesn't work.\n\n  for (var idx = 0; idx < errorProps.length; idx++) {\n    this[errorProps[idx]] = tmp[errorProps[idx]];\n  }\n  /* istanbul ignore else */\n\n\n  if (Error.captureStackTrace) {\n    Error.captureStackTrace(this, Exception);\n  }\n\n  try {\n    if (loc) {\n      this.lineNumber = line;\n      this.endLineNumber = endLineNumber; // Work around issue under safari where we can't directly set the column value\n\n      /* istanbul ignore next */\n\n      if (Object.defineProperty) {\n        Object.defineProperty(this, 'column', {\n          value: column,\n          enumerable: true\n        });\n        Object.defineProperty(this, 'endColumn', {\n          value: endColumn,\n          enumerable: true\n        });\n      } else {\n        this.column = column;\n        this.endColumn = endColumn;\n      }\n    }\n  } catch (nop) {\n    /* Ignore if the browser is very particular */\n  }\n}\n\nException.prototype = new Error();\nexports[\"default\"] = Exception;\nmodule.exports = exports['default'];\n\n//# sourceURL=webpack://test-notes/./node_modules/handlebars/dist/cjs/handlebars/exception.js?");

/***/ }),

/***/ "./node_modules/handlebars/dist/cjs/handlebars/helpers.js":
/*!****************************************************************!*\
  !*** ./node_modules/handlebars/dist/cjs/handlebars/helpers.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nexports.__esModule = true;\nexports.registerDefaultHelpers = registerDefaultHelpers;\nexports.moveHelperToHooks = moveHelperToHooks; // istanbul ignore next\n\nfunction _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : {\n    'default': obj\n  };\n}\n\nvar _helpersBlockHelperMissing = __webpack_require__(/*! ./helpers/block-helper-missing */ \"./node_modules/handlebars/dist/cjs/handlebars/helpers/block-helper-missing.js\");\n\nvar _helpersBlockHelperMissing2 = _interopRequireDefault(_helpersBlockHelperMissing);\n\nvar _helpersEach = __webpack_require__(/*! ./helpers/each */ \"./node_modules/handlebars/dist/cjs/handlebars/helpers/each.js\");\n\nvar _helpersEach2 = _interopRequireDefault(_helpersEach);\n\nvar _helpersHelperMissing = __webpack_require__(/*! ./helpers/helper-missing */ \"./node_modules/handlebars/dist/cjs/handlebars/helpers/helper-missing.js\");\n\nvar _helpersHelperMissing2 = _interopRequireDefault(_helpersHelperMissing);\n\nvar _helpersIf = __webpack_require__(/*! ./helpers/if */ \"./node_modules/handlebars/dist/cjs/handlebars/helpers/if.js\");\n\nvar _helpersIf2 = _interopRequireDefault(_helpersIf);\n\nvar _helpersLog = __webpack_require__(/*! ./helpers/log */ \"./node_modules/handlebars/dist/cjs/handlebars/helpers/log.js\");\n\nvar _helpersLog2 = _interopRequireDefault(_helpersLog);\n\nvar _helpersLookup = __webpack_require__(/*! ./helpers/lookup */ \"./node_modules/handlebars/dist/cjs/handlebars/helpers/lookup.js\");\n\nvar _helpersLookup2 = _interopRequireDefault(_helpersLookup);\n\nvar _helpersWith = __webpack_require__(/*! ./helpers/with */ \"./node_modules/handlebars/dist/cjs/handlebars/helpers/with.js\");\n\nvar _helpersWith2 = _interopRequireDefault(_helpersWith);\n\nfunction registerDefaultHelpers(instance) {\n  _helpersBlockHelperMissing2['default'](instance);\n\n  _helpersEach2['default'](instance);\n\n  _helpersHelperMissing2['default'](instance);\n\n  _helpersIf2['default'](instance);\n\n  _helpersLog2['default'](instance);\n\n  _helpersLookup2['default'](instance);\n\n  _helpersWith2['default'](instance);\n}\n\nfunction moveHelperToHooks(instance, helperName, keepHelper) {\n  if (instance.helpers[helperName]) {\n    instance.hooks[helperName] = instance.helpers[helperName];\n\n    if (!keepHelper) {\n      delete instance.helpers[helperName];\n    }\n  }\n}\n\n//# sourceURL=webpack://test-notes/./node_modules/handlebars/dist/cjs/handlebars/helpers.js?");

/***/ }),

/***/ "./node_modules/handlebars/dist/cjs/handlebars/helpers/block-helper-missing.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/handlebars/dist/cjs/handlebars/helpers/block-helper-missing.js ***!
  \*************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";
eval("\n\nexports.__esModule = true;\n\nvar _utils = __webpack_require__(/*! ../utils */ \"./node_modules/handlebars/dist/cjs/handlebars/utils.js\");\n\nexports[\"default\"] = function (instance) {\n  instance.registerHelper('blockHelperMissing', function (context, options) {\n    var inverse = options.inverse,\n        fn = options.fn;\n\n    if (context === true) {\n      return fn(this);\n    } else if (context === false || context == null) {\n      return inverse(this);\n    } else if (_utils.isArray(context)) {\n      if (context.length > 0) {\n        if (options.ids) {\n          options.ids = [options.name];\n        }\n\n        return instance.helpers.each(context, options);\n      } else {\n        return inverse(this);\n      }\n    } else {\n      if (options.data && options.ids) {\n        var data = _utils.createFrame(options.data);\n\n        data.contextPath = _utils.appendContextPath(options.data.contextPath, options.name);\n        options = {\n          data: data\n        };\n      }\n\n      return fn(context, options);\n    }\n  });\n};\n\nmodule.exports = exports['default'];\n\n//# sourceURL=webpack://test-notes/./node_modules/handlebars/dist/cjs/handlebars/helpers/block-helper-missing.js?");

/***/ }),

/***/ "./node_modules/handlebars/dist/cjs/handlebars/helpers/each.js":
/*!*********************************************************************!*\
  !*** ./node_modules/handlebars/dist/cjs/handlebars/helpers/each.js ***!
  \*********************************************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";
eval("\n\nexports.__esModule = true; // istanbul ignore next\n\nfunction _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : {\n    'default': obj\n  };\n}\n\nvar _utils = __webpack_require__(/*! ../utils */ \"./node_modules/handlebars/dist/cjs/handlebars/utils.js\");\n\nvar _exception = __webpack_require__(/*! ../exception */ \"./node_modules/handlebars/dist/cjs/handlebars/exception.js\");\n\nvar _exception2 = _interopRequireDefault(_exception);\n\nexports[\"default\"] = function (instance) {\n  instance.registerHelper('each', function (context, options) {\n    if (!options) {\n      throw new _exception2['default']('Must pass iterator to #each');\n    }\n\n    var fn = options.fn,\n        inverse = options.inverse,\n        i = 0,\n        ret = '',\n        data = undefined,\n        contextPath = undefined;\n\n    if (options.data && options.ids) {\n      contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0]) + '.';\n    }\n\n    if (_utils.isFunction(context)) {\n      context = context.call(this);\n    }\n\n    if (options.data) {\n      data = _utils.createFrame(options.data);\n    }\n\n    function execIteration(field, index, last) {\n      if (data) {\n        data.key = field;\n        data.index = index;\n        data.first = index === 0;\n        data.last = !!last;\n\n        if (contextPath) {\n          data.contextPath = contextPath + field;\n        }\n      }\n\n      ret = ret + fn(context[field], {\n        data: data,\n        blockParams: _utils.blockParams([context[field], field], [contextPath + field, null])\n      });\n    }\n\n    if (context && typeof context === 'object') {\n      if (_utils.isArray(context)) {\n        for (var j = context.length; i < j; i++) {\n          if (i in context) {\n            execIteration(i, i, i === context.length - 1);\n          }\n        }\n      } else if (__webpack_require__.g.Symbol && context[__webpack_require__.g.Symbol.iterator]) {\n        var newContext = [];\n        var iterator = context[__webpack_require__.g.Symbol.iterator]();\n\n        for (var it = iterator.next(); !it.done; it = iterator.next()) {\n          newContext.push(it.value);\n        }\n\n        context = newContext;\n\n        for (var j = context.length; i < j; i++) {\n          execIteration(i, i, i === context.length - 1);\n        }\n      } else {\n        (function () {\n          var priorKey = undefined;\n          Object.keys(context).forEach(function (key) {\n            // We're running the iterations one step out of sync so we can detect\n            // the last iteration without have to scan the object twice and create\n            // an itermediate keys array.\n            if (priorKey !== undefined) {\n              execIteration(priorKey, i - 1);\n            }\n\n            priorKey = key;\n            i++;\n          });\n\n          if (priorKey !== undefined) {\n            execIteration(priorKey, i - 1, true);\n          }\n        })();\n      }\n    }\n\n    if (i === 0) {\n      ret = inverse(this);\n    }\n\n    return ret;\n  });\n};\n\nmodule.exports = exports['default'];\n\n//# sourceURL=webpack://test-notes/./node_modules/handlebars/dist/cjs/handlebars/helpers/each.js?");

/***/ }),

/***/ "./node_modules/handlebars/dist/cjs/handlebars/helpers/helper-missing.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/handlebars/dist/cjs/handlebars/helpers/helper-missing.js ***!
  \*******************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";
eval("\n\nexports.__esModule = true; // istanbul ignore next\n\nfunction _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : {\n    'default': obj\n  };\n}\n\nvar _exception = __webpack_require__(/*! ../exception */ \"./node_modules/handlebars/dist/cjs/handlebars/exception.js\");\n\nvar _exception2 = _interopRequireDefault(_exception);\n\nexports[\"default\"] = function (instance) {\n  instance.registerHelper('helperMissing', function ()\n  /* [args, ]options */\n  {\n    if (arguments.length === 1) {\n      // A missing field in a {{foo}} construct.\n      return undefined;\n    } else {\n      // Someone is actually trying to call something, blow up.\n      throw new _exception2['default']('Missing helper: \"' + arguments[arguments.length - 1].name + '\"');\n    }\n  });\n};\n\nmodule.exports = exports['default'];\n\n//# sourceURL=webpack://test-notes/./node_modules/handlebars/dist/cjs/handlebars/helpers/helper-missing.js?");

/***/ }),

/***/ "./node_modules/handlebars/dist/cjs/handlebars/helpers/if.js":
/*!*******************************************************************!*\
  !*** ./node_modules/handlebars/dist/cjs/handlebars/helpers/if.js ***!
  \*******************************************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";
eval("\n\nexports.__esModule = true; // istanbul ignore next\n\nfunction _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : {\n    'default': obj\n  };\n}\n\nvar _utils = __webpack_require__(/*! ../utils */ \"./node_modules/handlebars/dist/cjs/handlebars/utils.js\");\n\nvar _exception = __webpack_require__(/*! ../exception */ \"./node_modules/handlebars/dist/cjs/handlebars/exception.js\");\n\nvar _exception2 = _interopRequireDefault(_exception);\n\nexports[\"default\"] = function (instance) {\n  instance.registerHelper('if', function (conditional, options) {\n    if (arguments.length != 2) {\n      throw new _exception2['default']('#if requires exactly one argument');\n    }\n\n    if (_utils.isFunction(conditional)) {\n      conditional = conditional.call(this);\n    } // Default behavior is to render the positive path if the value is truthy and not empty.\n    // The `includeZero` option may be set to treat the condtional as purely not empty based on the\n    // behavior of isEmpty. Effectively this determines if 0 is handled by the positive path or negative.\n\n\n    if (!options.hash.includeZero && !conditional || _utils.isEmpty(conditional)) {\n      return options.inverse(this);\n    } else {\n      return options.fn(this);\n    }\n  });\n  instance.registerHelper('unless', function (conditional, options) {\n    if (arguments.length != 2) {\n      throw new _exception2['default']('#unless requires exactly one argument');\n    }\n\n    return instance.helpers['if'].call(this, conditional, {\n      fn: options.inverse,\n      inverse: options.fn,\n      hash: options.hash\n    });\n  });\n};\n\nmodule.exports = exports['default'];\n\n//# sourceURL=webpack://test-notes/./node_modules/handlebars/dist/cjs/handlebars/helpers/if.js?");

/***/ }),

/***/ "./node_modules/handlebars/dist/cjs/handlebars/helpers/log.js":
/*!********************************************************************!*\
  !*** ./node_modules/handlebars/dist/cjs/handlebars/helpers/log.js ***!
  \********************************************************************/
/***/ ((module, exports) => {

"use strict";
eval("\n\nexports.__esModule = true;\n\nexports[\"default\"] = function (instance) {\n  instance.registerHelper('log', function ()\n  /* message, options */\n  {\n    var args = [undefined],\n        options = arguments[arguments.length - 1];\n\n    for (var i = 0; i < arguments.length - 1; i++) {\n      args.push(arguments[i]);\n    }\n\n    var level = 1;\n\n    if (options.hash.level != null) {\n      level = options.hash.level;\n    } else if (options.data && options.data.level != null) {\n      level = options.data.level;\n    }\n\n    args[0] = level;\n    instance.log.apply(instance, args);\n  });\n};\n\nmodule.exports = exports['default'];\n\n//# sourceURL=webpack://test-notes/./node_modules/handlebars/dist/cjs/handlebars/helpers/log.js?");

/***/ }),

/***/ "./node_modules/handlebars/dist/cjs/handlebars/helpers/lookup.js":
/*!***********************************************************************!*\
  !*** ./node_modules/handlebars/dist/cjs/handlebars/helpers/lookup.js ***!
  \***********************************************************************/
/***/ ((module, exports) => {

"use strict";
eval("\n\nexports.__esModule = true;\n\nexports[\"default\"] = function (instance) {\n  instance.registerHelper('lookup', function (obj, field, options) {\n    if (!obj) {\n      // Note for 5.0: Change to \"obj == null\" in 5.0\n      return obj;\n    }\n\n    return options.lookupProperty(obj, field);\n  });\n};\n\nmodule.exports = exports['default'];\n\n//# sourceURL=webpack://test-notes/./node_modules/handlebars/dist/cjs/handlebars/helpers/lookup.js?");

/***/ }),

/***/ "./node_modules/handlebars/dist/cjs/handlebars/helpers/with.js":
/*!*********************************************************************!*\
  !*** ./node_modules/handlebars/dist/cjs/handlebars/helpers/with.js ***!
  \*********************************************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";
eval("\n\nexports.__esModule = true; // istanbul ignore next\n\nfunction _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : {\n    'default': obj\n  };\n}\n\nvar _utils = __webpack_require__(/*! ../utils */ \"./node_modules/handlebars/dist/cjs/handlebars/utils.js\");\n\nvar _exception = __webpack_require__(/*! ../exception */ \"./node_modules/handlebars/dist/cjs/handlebars/exception.js\");\n\nvar _exception2 = _interopRequireDefault(_exception);\n\nexports[\"default\"] = function (instance) {\n  instance.registerHelper('with', function (context, options) {\n    if (arguments.length != 2) {\n      throw new _exception2['default']('#with requires exactly one argument');\n    }\n\n    if (_utils.isFunction(context)) {\n      context = context.call(this);\n    }\n\n    var fn = options.fn;\n\n    if (!_utils.isEmpty(context)) {\n      var data = options.data;\n\n      if (options.data && options.ids) {\n        data = _utils.createFrame(options.data);\n        data.contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0]);\n      }\n\n      return fn(context, {\n        data: data,\n        blockParams: _utils.blockParams([context], [data && data.contextPath])\n      });\n    } else {\n      return options.inverse(this);\n    }\n  });\n};\n\nmodule.exports = exports['default'];\n\n//# sourceURL=webpack://test-notes/./node_modules/handlebars/dist/cjs/handlebars/helpers/with.js?");

/***/ }),

/***/ "./node_modules/handlebars/dist/cjs/handlebars/internal/create-new-lookup-object.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/handlebars/dist/cjs/handlebars/internal/create-new-lookup-object.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nexports.__esModule = true;\nexports.createNewLookupObject = createNewLookupObject;\n\nvar _utils = __webpack_require__(/*! ../utils */ \"./node_modules/handlebars/dist/cjs/handlebars/utils.js\");\n/**\n * Create a new object with \"null\"-prototype to avoid truthy results on prototype properties.\n * The resulting object can be used with \"object[property]\" to check if a property exists\n * @param {...object} sources a varargs parameter of source objects that will be merged\n * @returns {object}\n */\n\n\nfunction createNewLookupObject() {\n  for (var _len = arguments.length, sources = Array(_len), _key = 0; _key < _len; _key++) {\n    sources[_key] = arguments[_key];\n  }\n\n  return _utils.extend.apply(undefined, [Object.create(null)].concat(sources));\n}\n\n//# sourceURL=webpack://test-notes/./node_modules/handlebars/dist/cjs/handlebars/internal/create-new-lookup-object.js?");

/***/ }),

/***/ "./node_modules/handlebars/dist/cjs/handlebars/internal/proto-access.js":
/*!******************************************************************************!*\
  !*** ./node_modules/handlebars/dist/cjs/handlebars/internal/proto-access.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nexports.__esModule = true;\nexports.createProtoAccessControl = createProtoAccessControl;\nexports.resultIsAllowed = resultIsAllowed;\nexports.resetLoggedProperties = resetLoggedProperties; // istanbul ignore next\n\nfunction _interopRequireWildcard(obj) {\n  if (obj && obj.__esModule) {\n    return obj;\n  } else {\n    var newObj = {};\n\n    if (obj != null) {\n      for (var key in obj) {\n        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];\n      }\n    }\n\n    newObj['default'] = obj;\n    return newObj;\n  }\n}\n\nvar _createNewLookupObject = __webpack_require__(/*! ./create-new-lookup-object */ \"./node_modules/handlebars/dist/cjs/handlebars/internal/create-new-lookup-object.js\");\n\nvar _logger = __webpack_require__(/*! ../logger */ \"./node_modules/handlebars/dist/cjs/handlebars/logger.js\");\n\nvar logger = _interopRequireWildcard(_logger);\n\nvar loggedProperties = Object.create(null);\n\nfunction createProtoAccessControl(runtimeOptions) {\n  var defaultMethodWhiteList = Object.create(null);\n  defaultMethodWhiteList['constructor'] = false;\n  defaultMethodWhiteList['__defineGetter__'] = false;\n  defaultMethodWhiteList['__defineSetter__'] = false;\n  defaultMethodWhiteList['__lookupGetter__'] = false;\n  var defaultPropertyWhiteList = Object.create(null); // eslint-disable-next-line no-proto\n\n  defaultPropertyWhiteList['__proto__'] = false;\n  return {\n    properties: {\n      whitelist: _createNewLookupObject.createNewLookupObject(defaultPropertyWhiteList, runtimeOptions.allowedProtoProperties),\n      defaultValue: runtimeOptions.allowProtoPropertiesByDefault\n    },\n    methods: {\n      whitelist: _createNewLookupObject.createNewLookupObject(defaultMethodWhiteList, runtimeOptions.allowedProtoMethods),\n      defaultValue: runtimeOptions.allowProtoMethodsByDefault\n    }\n  };\n}\n\nfunction resultIsAllowed(result, protoAccessControl, propertyName) {\n  if (typeof result === 'function') {\n    return checkWhiteList(protoAccessControl.methods, propertyName);\n  } else {\n    return checkWhiteList(protoAccessControl.properties, propertyName);\n  }\n}\n\nfunction checkWhiteList(protoAccessControlForType, propertyName) {\n  if (protoAccessControlForType.whitelist[propertyName] !== undefined) {\n    return protoAccessControlForType.whitelist[propertyName] === true;\n  }\n\n  if (protoAccessControlForType.defaultValue !== undefined) {\n    return protoAccessControlForType.defaultValue;\n  }\n\n  logUnexpecedPropertyAccessOnce(propertyName);\n  return false;\n}\n\nfunction logUnexpecedPropertyAccessOnce(propertyName) {\n  if (loggedProperties[propertyName] !== true) {\n    loggedProperties[propertyName] = true;\n    logger.log('error', 'Handlebars: Access has been denied to resolve the property \"' + propertyName + '\" because it is not an \"own property\" of its parent.\\n' + 'You can add a runtime option to disable the check or this warning:\\n' + 'See https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access for details');\n  }\n}\n\nfunction resetLoggedProperties() {\n  Object.keys(loggedProperties).forEach(function (propertyName) {\n    delete loggedProperties[propertyName];\n  });\n}\n\n//# sourceURL=webpack://test-notes/./node_modules/handlebars/dist/cjs/handlebars/internal/proto-access.js?");

/***/ }),

/***/ "./node_modules/handlebars/dist/cjs/handlebars/internal/wrapHelper.js":
/*!****************************************************************************!*\
  !*** ./node_modules/handlebars/dist/cjs/handlebars/internal/wrapHelper.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\n\nexports.__esModule = true;\nexports.wrapHelper = wrapHelper;\n\nfunction wrapHelper(helper, transformOptionsFn) {\n  if (typeof helper !== 'function') {\n    // This should not happen, but apparently it does in https://github.com/wycats/handlebars.js/issues/1639\n    // We try to make the wrapper least-invasive by not wrapping it, if the helper is not a function.\n    return helper;\n  }\n\n  var wrapper = function wrapper()\n  /* dynamic arguments */\n  {\n    var options = arguments[arguments.length - 1];\n    arguments[arguments.length - 1] = transformOptionsFn(options);\n    return helper.apply(this, arguments);\n  };\n\n  return wrapper;\n}\n\n//# sourceURL=webpack://test-notes/./node_modules/handlebars/dist/cjs/handlebars/internal/wrapHelper.js?");

/***/ }),

/***/ "./node_modules/handlebars/dist/cjs/handlebars/logger.js":
/*!***************************************************************!*\
  !*** ./node_modules/handlebars/dist/cjs/handlebars/logger.js ***!
  \***************************************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";
eval("\n\nexports.__esModule = true;\n\nvar _utils = __webpack_require__(/*! ./utils */ \"./node_modules/handlebars/dist/cjs/handlebars/utils.js\");\n\nvar logger = {\n  methodMap: ['debug', 'info', 'warn', 'error'],\n  level: 'info',\n  // Maps a given level value to the `methodMap` indexes above.\n  lookupLevel: function lookupLevel(level) {\n    if (typeof level === 'string') {\n      var levelMap = _utils.indexOf(logger.methodMap, level.toLowerCase());\n\n      if (levelMap >= 0) {\n        level = levelMap;\n      } else {\n        level = parseInt(level, 10);\n      }\n    }\n\n    return level;\n  },\n  // Can be overridden in the host environment\n  log: function log(level) {\n    level = logger.lookupLevel(level);\n\n    if (typeof console !== 'undefined' && logger.lookupLevel(logger.level) <= level) {\n      var method = logger.methodMap[level]; // eslint-disable-next-line no-console\n\n      if (!console[method]) {\n        method = 'log';\n      }\n\n      for (var _len = arguments.length, message = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {\n        message[_key - 1] = arguments[_key];\n      }\n\n      console[method].apply(console, message); // eslint-disable-line no-console\n    }\n  }\n};\nexports[\"default\"] = logger;\nmodule.exports = exports['default'];\n\n//# sourceURL=webpack://test-notes/./node_modules/handlebars/dist/cjs/handlebars/logger.js?");

/***/ }),

/***/ "./node_modules/handlebars/dist/cjs/handlebars/no-conflict.js":
/*!********************************************************************!*\
  !*** ./node_modules/handlebars/dist/cjs/handlebars/no-conflict.js ***!
  \********************************************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";
eval("\n\nexports.__esModule = true;\n\nexports[\"default\"] = function (Handlebars) {\n  /* istanbul ignore next */\n  var root = typeof __webpack_require__.g !== 'undefined' ? __webpack_require__.g : window,\n      $Handlebars = root.Handlebars;\n  /* istanbul ignore next */\n\n  Handlebars.noConflict = function () {\n    if (root.Handlebars === Handlebars) {\n      root.Handlebars = $Handlebars;\n    }\n\n    return Handlebars;\n  };\n};\n\nmodule.exports = exports['default'];\n\n//# sourceURL=webpack://test-notes/./node_modules/handlebars/dist/cjs/handlebars/no-conflict.js?");

/***/ }),

/***/ "./node_modules/handlebars/dist/cjs/handlebars/runtime.js":
/*!****************************************************************!*\
  !*** ./node_modules/handlebars/dist/cjs/handlebars/runtime.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nexports.__esModule = true;\nexports.checkRevision = checkRevision;\nexports.template = template;\nexports.wrapProgram = wrapProgram;\nexports.resolvePartial = resolvePartial;\nexports.invokePartial = invokePartial;\nexports.noop = noop; // istanbul ignore next\n\nfunction _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : {\n    'default': obj\n  };\n} // istanbul ignore next\n\n\nfunction _interopRequireWildcard(obj) {\n  if (obj && obj.__esModule) {\n    return obj;\n  } else {\n    var newObj = {};\n\n    if (obj != null) {\n      for (var key in obj) {\n        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];\n      }\n    }\n\n    newObj['default'] = obj;\n    return newObj;\n  }\n}\n\nvar _utils = __webpack_require__(/*! ./utils */ \"./node_modules/handlebars/dist/cjs/handlebars/utils.js\");\n\nvar Utils = _interopRequireWildcard(_utils);\n\nvar _exception = __webpack_require__(/*! ./exception */ \"./node_modules/handlebars/dist/cjs/handlebars/exception.js\");\n\nvar _exception2 = _interopRequireDefault(_exception);\n\nvar _base = __webpack_require__(/*! ./base */ \"./node_modules/handlebars/dist/cjs/handlebars/base.js\");\n\nvar _helpers = __webpack_require__(/*! ./helpers */ \"./node_modules/handlebars/dist/cjs/handlebars/helpers.js\");\n\nvar _internalWrapHelper = __webpack_require__(/*! ./internal/wrapHelper */ \"./node_modules/handlebars/dist/cjs/handlebars/internal/wrapHelper.js\");\n\nvar _internalProtoAccess = __webpack_require__(/*! ./internal/proto-access */ \"./node_modules/handlebars/dist/cjs/handlebars/internal/proto-access.js\");\n\nfunction checkRevision(compilerInfo) {\n  var compilerRevision = compilerInfo && compilerInfo[0] || 1,\n      currentRevision = _base.COMPILER_REVISION;\n\n  if (compilerRevision >= _base.LAST_COMPATIBLE_COMPILER_REVISION && compilerRevision <= _base.COMPILER_REVISION) {\n    return;\n  }\n\n  if (compilerRevision < _base.LAST_COMPATIBLE_COMPILER_REVISION) {\n    var runtimeVersions = _base.REVISION_CHANGES[currentRevision],\n        compilerVersions = _base.REVISION_CHANGES[compilerRevision];\n    throw new _exception2['default']('Template was precompiled with an older version of Handlebars than the current runtime. ' + 'Please update your precompiler to a newer version (' + runtimeVersions + ') or downgrade your runtime to an older version (' + compilerVersions + ').');\n  } else {\n    // Use the embedded version info since the runtime doesn't know about this revision yet\n    throw new _exception2['default']('Template was precompiled with a newer version of Handlebars than the current runtime. ' + 'Please update your runtime to a newer version (' + compilerInfo[1] + ').');\n  }\n}\n\nfunction template(templateSpec, env) {\n  /* istanbul ignore next */\n  if (!env) {\n    throw new _exception2['default']('No environment passed to template');\n  }\n\n  if (!templateSpec || !templateSpec.main) {\n    throw new _exception2['default']('Unknown template object: ' + typeof templateSpec);\n  }\n\n  templateSpec.main.decorator = templateSpec.main_d; // Note: Using env.VM references rather than local var references throughout this section to allow\n  // for external users to override these as pseudo-supported APIs.\n\n  env.VM.checkRevision(templateSpec.compiler); // backwards compatibility for precompiled templates with compiler-version 7 (<4.3.0)\n\n  var templateWasPrecompiledWithCompilerV7 = templateSpec.compiler && templateSpec.compiler[0] === 7;\n\n  function invokePartialWrapper(partial, context, options) {\n    if (options.hash) {\n      context = Utils.extend({}, context, options.hash);\n\n      if (options.ids) {\n        options.ids[0] = true;\n      }\n    }\n\n    partial = env.VM.resolvePartial.call(this, partial, context, options);\n    var extendedOptions = Utils.extend({}, options, {\n      hooks: this.hooks,\n      protoAccessControl: this.protoAccessControl\n    });\n    var result = env.VM.invokePartial.call(this, partial, context, extendedOptions);\n\n    if (result == null && env.compile) {\n      options.partials[options.name] = env.compile(partial, templateSpec.compilerOptions, env);\n      result = options.partials[options.name](context, extendedOptions);\n    }\n\n    if (result != null) {\n      if (options.indent) {\n        var lines = result.split('\\n');\n\n        for (var i = 0, l = lines.length; i < l; i++) {\n          if (!lines[i] && i + 1 === l) {\n            break;\n          }\n\n          lines[i] = options.indent + lines[i];\n        }\n\n        result = lines.join('\\n');\n      }\n\n      return result;\n    } else {\n      throw new _exception2['default']('The partial ' + options.name + ' could not be compiled when running in runtime-only mode');\n    }\n  } // Just add water\n\n\n  var container = {\n    strict: function strict(obj, name, loc) {\n      if (!obj || !(name in obj)) {\n        throw new _exception2['default']('\"' + name + '\" not defined in ' + obj, {\n          loc: loc\n        });\n      }\n\n      return container.lookupProperty(obj, name);\n    },\n    lookupProperty: function lookupProperty(parent, propertyName) {\n      var result = parent[propertyName];\n\n      if (result == null) {\n        return result;\n      }\n\n      if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {\n        return result;\n      }\n\n      if (_internalProtoAccess.resultIsAllowed(result, container.protoAccessControl, propertyName)) {\n        return result;\n      }\n\n      return undefined;\n    },\n    lookup: function lookup(depths, name) {\n      var len = depths.length;\n\n      for (var i = 0; i < len; i++) {\n        var result = depths[i] && container.lookupProperty(depths[i], name);\n\n        if (result != null) {\n          return depths[i][name];\n        }\n      }\n    },\n    lambda: function lambda(current, context) {\n      return typeof current === 'function' ? current.call(context) : current;\n    },\n    escapeExpression: Utils.escapeExpression,\n    invokePartial: invokePartialWrapper,\n    fn: function fn(i) {\n      var ret = templateSpec[i];\n      ret.decorator = templateSpec[i + '_d'];\n      return ret;\n    },\n    programs: [],\n    program: function program(i, data, declaredBlockParams, blockParams, depths) {\n      var programWrapper = this.programs[i],\n          fn = this.fn(i);\n\n      if (data || depths || blockParams || declaredBlockParams) {\n        programWrapper = wrapProgram(this, i, fn, data, declaredBlockParams, blockParams, depths);\n      } else if (!programWrapper) {\n        programWrapper = this.programs[i] = wrapProgram(this, i, fn);\n      }\n\n      return programWrapper;\n    },\n    data: function data(value, depth) {\n      while (value && depth--) {\n        value = value._parent;\n      }\n\n      return value;\n    },\n    mergeIfNeeded: function mergeIfNeeded(param, common) {\n      var obj = param || common;\n\n      if (param && common && param !== common) {\n        obj = Utils.extend({}, common, param);\n      }\n\n      return obj;\n    },\n    // An empty object to use as replacement for null-contexts\n    nullContext: Object.seal({}),\n    noop: env.VM.noop,\n    compilerInfo: templateSpec.compiler\n  };\n\n  function ret(context) {\n    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];\n    var data = options.data;\n\n    ret._setup(options);\n\n    if (!options.partial && templateSpec.useData) {\n      data = initData(context, data);\n    }\n\n    var depths = undefined,\n        blockParams = templateSpec.useBlockParams ? [] : undefined;\n\n    if (templateSpec.useDepths) {\n      if (options.depths) {\n        depths = context != options.depths[0] ? [context].concat(options.depths) : options.depths;\n      } else {\n        depths = [context];\n      }\n    }\n\n    function main(context\n    /*, options*/\n    ) {\n      return '' + templateSpec.main(container, context, container.helpers, container.partials, data, blockParams, depths);\n    }\n\n    main = executeDecorators(templateSpec.main, main, container, options.depths || [], data, blockParams);\n    return main(context, options);\n  }\n\n  ret.isTop = true;\n\n  ret._setup = function (options) {\n    if (!options.partial) {\n      var mergedHelpers = Utils.extend({}, env.helpers, options.helpers);\n      wrapHelpersToPassLookupProperty(mergedHelpers, container);\n      container.helpers = mergedHelpers;\n\n      if (templateSpec.usePartial) {\n        // Use mergeIfNeeded here to prevent compiling global partials multiple times\n        container.partials = container.mergeIfNeeded(options.partials, env.partials);\n      }\n\n      if (templateSpec.usePartial || templateSpec.useDecorators) {\n        container.decorators = Utils.extend({}, env.decorators, options.decorators);\n      }\n\n      container.hooks = {};\n      container.protoAccessControl = _internalProtoAccess.createProtoAccessControl(options);\n      var keepHelperInHelpers = options.allowCallsToHelperMissing || templateWasPrecompiledWithCompilerV7;\n\n      _helpers.moveHelperToHooks(container, 'helperMissing', keepHelperInHelpers);\n\n      _helpers.moveHelperToHooks(container, 'blockHelperMissing', keepHelperInHelpers);\n    } else {\n      container.protoAccessControl = options.protoAccessControl; // internal option\n\n      container.helpers = options.helpers;\n      container.partials = options.partials;\n      container.decorators = options.decorators;\n      container.hooks = options.hooks;\n    }\n  };\n\n  ret._child = function (i, data, blockParams, depths) {\n    if (templateSpec.useBlockParams && !blockParams) {\n      throw new _exception2['default']('must pass block params');\n    }\n\n    if (templateSpec.useDepths && !depths) {\n      throw new _exception2['default']('must pass parent depths');\n    }\n\n    return wrapProgram(container, i, templateSpec[i], data, 0, blockParams, depths);\n  };\n\n  return ret;\n}\n\nfunction wrapProgram(container, i, fn, data, declaredBlockParams, blockParams, depths) {\n  function prog(context) {\n    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];\n    var currentDepths = depths;\n\n    if (depths && context != depths[0] && !(context === container.nullContext && depths[0] === null)) {\n      currentDepths = [context].concat(depths);\n    }\n\n    return fn(container, context, container.helpers, container.partials, options.data || data, blockParams && [options.blockParams].concat(blockParams), currentDepths);\n  }\n\n  prog = executeDecorators(fn, prog, container, depths, data, blockParams);\n  prog.program = i;\n  prog.depth = depths ? depths.length : 0;\n  prog.blockParams = declaredBlockParams || 0;\n  return prog;\n}\n/**\n * This is currently part of the official API, therefore implementation details should not be changed.\n */\n\n\nfunction resolvePartial(partial, context, options) {\n  if (!partial) {\n    if (options.name === '@partial-block') {\n      partial = options.data['partial-block'];\n    } else {\n      partial = options.partials[options.name];\n    }\n  } else if (!partial.call && !options.name) {\n    // This is a dynamic partial that returned a string\n    options.name = partial;\n    partial = options.partials[partial];\n  }\n\n  return partial;\n}\n\nfunction invokePartial(partial, context, options) {\n  // Use the current closure context to save the partial-block if this partial\n  var currentPartialBlock = options.data && options.data['partial-block'];\n  options.partial = true;\n\n  if (options.ids) {\n    options.data.contextPath = options.ids[0] || options.data.contextPath;\n  }\n\n  var partialBlock = undefined;\n\n  if (options.fn && options.fn !== noop) {\n    (function () {\n      options.data = _base.createFrame(options.data); // Wrapper function to get access to currentPartialBlock from the closure\n\n      var fn = options.fn;\n\n      partialBlock = options.data['partial-block'] = function partialBlockWrapper(context) {\n        var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1]; // Restore the partial-block from the closure for the execution of the block\n        // i.e. the part inside the block of the partial call.\n\n        options.data = _base.createFrame(options.data);\n        options.data['partial-block'] = currentPartialBlock;\n        return fn(context, options);\n      };\n\n      if (fn.partials) {\n        options.partials = Utils.extend({}, options.partials, fn.partials);\n      }\n    })();\n  }\n\n  if (partial === undefined && partialBlock) {\n    partial = partialBlock;\n  }\n\n  if (partial === undefined) {\n    throw new _exception2['default']('The partial ' + options.name + ' could not be found');\n  } else if (partial instanceof Function) {\n    return partial(context, options);\n  }\n}\n\nfunction noop() {\n  return '';\n}\n\nfunction initData(context, data) {\n  if (!data || !('root' in data)) {\n    data = data ? _base.createFrame(data) : {};\n    data.root = context;\n  }\n\n  return data;\n}\n\nfunction executeDecorators(fn, prog, container, depths, data, blockParams) {\n  if (fn.decorator) {\n    var props = {};\n    prog = fn.decorator(prog, props, container, depths && depths[0], data, blockParams, depths);\n    Utils.extend(prog, props);\n  }\n\n  return prog;\n}\n\nfunction wrapHelpersToPassLookupProperty(mergedHelpers, container) {\n  Object.keys(mergedHelpers).forEach(function (helperName) {\n    var helper = mergedHelpers[helperName];\n    mergedHelpers[helperName] = passLookupPropertyOption(helper, container);\n  });\n}\n\nfunction passLookupPropertyOption(helper, container) {\n  var lookupProperty = container.lookupProperty;\n  return _internalWrapHelper.wrapHelper(helper, function (options) {\n    return Utils.extend({\n      lookupProperty: lookupProperty\n    }, options);\n  });\n}\n\n//# sourceURL=webpack://test-notes/./node_modules/handlebars/dist/cjs/handlebars/runtime.js?");

/***/ }),

/***/ "./node_modules/handlebars/dist/cjs/handlebars/safe-string.js":
/*!********************************************************************!*\
  !*** ./node_modules/handlebars/dist/cjs/handlebars/safe-string.js ***!
  \********************************************************************/
/***/ ((module, exports) => {

"use strict";
eval("// Build out our basic SafeString type\n\n\nexports.__esModule = true;\n\nfunction SafeString(string) {\n  this.string = string;\n}\n\nSafeString.prototype.toString = SafeString.prototype.toHTML = function () {\n  return '' + this.string;\n};\n\nexports[\"default\"] = SafeString;\nmodule.exports = exports['default'];\n\n//# sourceURL=webpack://test-notes/./node_modules/handlebars/dist/cjs/handlebars/safe-string.js?");

/***/ }),

/***/ "./node_modules/handlebars/dist/cjs/handlebars/utils.js":
/*!**************************************************************!*\
  !*** ./node_modules/handlebars/dist/cjs/handlebars/utils.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\n\nexports.__esModule = true;\nexports.extend = extend;\nexports.indexOf = indexOf;\nexports.escapeExpression = escapeExpression;\nexports.isEmpty = isEmpty;\nexports.createFrame = createFrame;\nexports.blockParams = blockParams;\nexports.appendContextPath = appendContextPath;\nvar escape = {\n  '&': '&amp;',\n  '<': '&lt;',\n  '>': '&gt;',\n  '\"': '&quot;',\n  \"'\": '&#x27;',\n  '`': '&#x60;',\n  '=': '&#x3D;'\n};\nvar badChars = /[&<>\"'`=]/g,\n    possible = /[&<>\"'`=]/;\n\nfunction escapeChar(chr) {\n  return escape[chr];\n}\n\nfunction extend(obj\n/* , ...source */\n) {\n  for (var i = 1; i < arguments.length; i++) {\n    for (var key in arguments[i]) {\n      if (Object.prototype.hasOwnProperty.call(arguments[i], key)) {\n        obj[key] = arguments[i][key];\n      }\n    }\n  }\n\n  return obj;\n}\n\nvar toString = Object.prototype.toString;\nexports.toString = toString; // Sourced from lodash\n// https://github.com/bestiejs/lodash/blob/master/LICENSE.txt\n\n/* eslint-disable func-style */\n\nvar isFunction = function isFunction(value) {\n  return typeof value === 'function';\n}; // fallback for older versions of Chrome and Safari\n\n/* istanbul ignore next */\n\n\nif (isFunction(/x/)) {\n  exports.isFunction = isFunction = function (value) {\n    return typeof value === 'function' && toString.call(value) === '[object Function]';\n  };\n}\n\nexports.isFunction = isFunction;\n/* eslint-enable func-style */\n\n/* istanbul ignore next */\n\nvar isArray = Array.isArray || function (value) {\n  return value && typeof value === 'object' ? toString.call(value) === '[object Array]' : false;\n};\n\nexports.isArray = isArray; // Older IE versions do not directly support indexOf so we must implement our own, sadly.\n\nfunction indexOf(array, value) {\n  for (var i = 0, len = array.length; i < len; i++) {\n    if (array[i] === value) {\n      return i;\n    }\n  }\n\n  return -1;\n}\n\nfunction escapeExpression(string) {\n  if (typeof string !== 'string') {\n    // don't escape SafeStrings, since they're already safe\n    if (string && string.toHTML) {\n      return string.toHTML();\n    } else if (string == null) {\n      return '';\n    } else if (!string) {\n      return string + '';\n    } // Force a string conversion as this will be done by the append regardless and\n    // the regex test will do this transparently behind the scenes, causing issues if\n    // an object's to string has escaped characters in it.\n\n\n    string = '' + string;\n  }\n\n  if (!possible.test(string)) {\n    return string;\n  }\n\n  return string.replace(badChars, escapeChar);\n}\n\nfunction isEmpty(value) {\n  if (!value && value !== 0) {\n    return true;\n  } else if (isArray(value) && value.length === 0) {\n    return true;\n  } else {\n    return false;\n  }\n}\n\nfunction createFrame(object) {\n  var frame = extend({}, object);\n  frame._parent = object;\n  return frame;\n}\n\nfunction blockParams(params, ids) {\n  params.path = ids;\n  return params;\n}\n\nfunction appendContextPath(contextPath, id) {\n  return (contextPath ? contextPath + '.' : '') + id;\n}\n\n//# sourceURL=webpack://test-notes/./node_modules/handlebars/dist/cjs/handlebars/utils.js?");

/***/ }),

/***/ "./node_modules/handlebars/runtime.js":
/*!********************************************!*\
  !*** ./node_modules/handlebars/runtime.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// Create a simple path alias to allow browserify to resolve\n// the runtime on a supported path.\nmodule.exports = __webpack_require__(/*! ./dist/cjs/handlebars.runtime */ \"./node_modules/handlebars/dist/cjs/handlebars.runtime.js\")[\"default\"];\n\n//# sourceURL=webpack://test-notes/./node_modules/handlebars/runtime.js?");

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("/**\n * Copyright (c) 2014-present, Facebook, Inc.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\nvar runtime = function (exports) {\n  \"use strict\";\n\n  var Op = Object.prototype;\n  var hasOwn = Op.hasOwnProperty;\n  var undefined; // More compressible than void 0.\n\n  var $Symbol = typeof Symbol === \"function\" ? Symbol : {};\n  var iteratorSymbol = $Symbol.iterator || \"@@iterator\";\n  var asyncIteratorSymbol = $Symbol.asyncIterator || \"@@asyncIterator\";\n  var toStringTagSymbol = $Symbol.toStringTag || \"@@toStringTag\";\n\n  function define(obj, key, value) {\n    Object.defineProperty(obj, key, {\n      value: value,\n      enumerable: true,\n      configurable: true,\n      writable: true\n    });\n    return obj[key];\n  }\n\n  try {\n    // IE 8 has a broken Object.defineProperty that only works on DOM objects.\n    define({}, \"\");\n  } catch (err) {\n    define = function (obj, key, value) {\n      return obj[key] = value;\n    };\n  }\n\n  function wrap(innerFn, outerFn, self, tryLocsList) {\n    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.\n    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;\n    var generator = Object.create(protoGenerator.prototype);\n    var context = new Context(tryLocsList || []); // The ._invoke method unifies the implementations of the .next,\n    // .throw, and .return methods.\n\n    generator._invoke = makeInvokeMethod(innerFn, self, context);\n    return generator;\n  }\n\n  exports.wrap = wrap; // Try/catch helper to minimize deoptimizations. Returns a completion\n  // record like context.tryEntries[i].completion. This interface could\n  // have been (and was previously) designed to take a closure to be\n  // invoked without arguments, but in all the cases we care about we\n  // already have an existing method we want to call, so there's no need\n  // to create a new function object. We can even get away with assuming\n  // the method takes exactly one argument, since that happens to be true\n  // in every case, so we don't have to touch the arguments object. The\n  // only additional allocation required is the completion record, which\n  // has a stable shape and so hopefully should be cheap to allocate.\n\n  function tryCatch(fn, obj, arg) {\n    try {\n      return {\n        type: \"normal\",\n        arg: fn.call(obj, arg)\n      };\n    } catch (err) {\n      return {\n        type: \"throw\",\n        arg: err\n      };\n    }\n  }\n\n  var GenStateSuspendedStart = \"suspendedStart\";\n  var GenStateSuspendedYield = \"suspendedYield\";\n  var GenStateExecuting = \"executing\";\n  var GenStateCompleted = \"completed\"; // Returning this object from the innerFn has the same effect as\n  // breaking out of the dispatch switch statement.\n\n  var ContinueSentinel = {}; // Dummy constructor functions that we use as the .constructor and\n  // .constructor.prototype properties for functions that return Generator\n  // objects. For full spec compliance, you may wish to configure your\n  // minifier not to mangle the names of these two functions.\n\n  function Generator() {}\n\n  function GeneratorFunction() {}\n\n  function GeneratorFunctionPrototype() {} // This is a polyfill for %IteratorPrototype% for environments that\n  // don't natively support it.\n\n\n  var IteratorPrototype = {};\n  define(IteratorPrototype, iteratorSymbol, function () {\n    return this;\n  });\n  var getProto = Object.getPrototypeOf;\n  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));\n\n  if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {\n    // This environment has a native %IteratorPrototype%; use it instead\n    // of the polyfill.\n    IteratorPrototype = NativeIteratorPrototype;\n  }\n\n  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);\n  GeneratorFunction.prototype = GeneratorFunctionPrototype;\n  define(Gp, \"constructor\", GeneratorFunctionPrototype);\n  define(GeneratorFunctionPrototype, \"constructor\", GeneratorFunction);\n  GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, \"GeneratorFunction\"); // Helper for defining the .next, .throw, and .return methods of the\n  // Iterator interface in terms of a single ._invoke method.\n\n  function defineIteratorMethods(prototype) {\n    [\"next\", \"throw\", \"return\"].forEach(function (method) {\n      define(prototype, method, function (arg) {\n        return this._invoke(method, arg);\n      });\n    });\n  }\n\n  exports.isGeneratorFunction = function (genFun) {\n    var ctor = typeof genFun === \"function\" && genFun.constructor;\n    return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can\n    // do is to check its .name property.\n    (ctor.displayName || ctor.name) === \"GeneratorFunction\" : false;\n  };\n\n  exports.mark = function (genFun) {\n    if (Object.setPrototypeOf) {\n      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);\n    } else {\n      genFun.__proto__ = GeneratorFunctionPrototype;\n      define(genFun, toStringTagSymbol, \"GeneratorFunction\");\n    }\n\n    genFun.prototype = Object.create(Gp);\n    return genFun;\n  }; // Within the body of any async function, `await x` is transformed to\n  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test\n  // `hasOwn.call(value, \"__await\")` to determine if the yielded value is\n  // meant to be awaited.\n\n\n  exports.awrap = function (arg) {\n    return {\n      __await: arg\n    };\n  };\n\n  function AsyncIterator(generator, PromiseImpl) {\n    function invoke(method, arg, resolve, reject) {\n      var record = tryCatch(generator[method], generator, arg);\n\n      if (record.type === \"throw\") {\n        reject(record.arg);\n      } else {\n        var result = record.arg;\n        var value = result.value;\n\n        if (value && typeof value === \"object\" && hasOwn.call(value, \"__await\")) {\n          return PromiseImpl.resolve(value.__await).then(function (value) {\n            invoke(\"next\", value, resolve, reject);\n          }, function (err) {\n            invoke(\"throw\", err, resolve, reject);\n          });\n        }\n\n        return PromiseImpl.resolve(value).then(function (unwrapped) {\n          // When a yielded Promise is resolved, its final value becomes\n          // the .value of the Promise<{value,done}> result for the\n          // current iteration.\n          result.value = unwrapped;\n          resolve(result);\n        }, function (error) {\n          // If a rejected Promise was yielded, throw the rejection back\n          // into the async generator function so it can be handled there.\n          return invoke(\"throw\", error, resolve, reject);\n        });\n      }\n    }\n\n    var previousPromise;\n\n    function enqueue(method, arg) {\n      function callInvokeWithMethodAndArg() {\n        return new PromiseImpl(function (resolve, reject) {\n          invoke(method, arg, resolve, reject);\n        });\n      }\n\n      return previousPromise = // If enqueue has been called before, then we want to wait until\n      // all previous Promises have been resolved before calling invoke,\n      // so that results are always delivered in the correct order. If\n      // enqueue has not been called before, then it is important to\n      // call invoke immediately, without waiting on a callback to fire,\n      // so that the async generator function has the opportunity to do\n      // any necessary setup in a predictable way. This predictability\n      // is why the Promise constructor synchronously invokes its\n      // executor callback, and why async functions synchronously\n      // execute code before the first await. Since we implement simple\n      // async functions in terms of async generators, it is especially\n      // important to get this right, even though it requires care.\n      previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later\n      // invocations of the iterator.\n      callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();\n    } // Define the unified helper method that is used to implement .next,\n    // .throw, and .return (see defineIteratorMethods).\n\n\n    this._invoke = enqueue;\n  }\n\n  defineIteratorMethods(AsyncIterator.prototype);\n  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {\n    return this;\n  });\n  exports.AsyncIterator = AsyncIterator; // Note that simple async functions are implemented on top of\n  // AsyncIterator objects; they just return a Promise for the value of\n  // the final result produced by the iterator.\n\n  exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {\n    if (PromiseImpl === void 0) PromiseImpl = Promise;\n    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);\n    return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.\n    : iter.next().then(function (result) {\n      return result.done ? result.value : iter.next();\n    });\n  };\n\n  function makeInvokeMethod(innerFn, self, context) {\n    var state = GenStateSuspendedStart;\n    return function invoke(method, arg) {\n      if (state === GenStateExecuting) {\n        throw new Error(\"Generator is already running\");\n      }\n\n      if (state === GenStateCompleted) {\n        if (method === \"throw\") {\n          throw arg;\n        } // Be forgiving, per 25.3.3.3.3 of the spec:\n        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume\n\n\n        return doneResult();\n      }\n\n      context.method = method;\n      context.arg = arg;\n\n      while (true) {\n        var delegate = context.delegate;\n\n        if (delegate) {\n          var delegateResult = maybeInvokeDelegate(delegate, context);\n\n          if (delegateResult) {\n            if (delegateResult === ContinueSentinel) continue;\n            return delegateResult;\n          }\n        }\n\n        if (context.method === \"next\") {\n          // Setting context._sent for legacy support of Babel's\n          // function.sent implementation.\n          context.sent = context._sent = context.arg;\n        } else if (context.method === \"throw\") {\n          if (state === GenStateSuspendedStart) {\n            state = GenStateCompleted;\n            throw context.arg;\n          }\n\n          context.dispatchException(context.arg);\n        } else if (context.method === \"return\") {\n          context.abrupt(\"return\", context.arg);\n        }\n\n        state = GenStateExecuting;\n        var record = tryCatch(innerFn, self, context);\n\n        if (record.type === \"normal\") {\n          // If an exception is thrown from innerFn, we leave state ===\n          // GenStateExecuting and loop back for another invocation.\n          state = context.done ? GenStateCompleted : GenStateSuspendedYield;\n\n          if (record.arg === ContinueSentinel) {\n            continue;\n          }\n\n          return {\n            value: record.arg,\n            done: context.done\n          };\n        } else if (record.type === \"throw\") {\n          state = GenStateCompleted; // Dispatch the exception by looping back around to the\n          // context.dispatchException(context.arg) call above.\n\n          context.method = \"throw\";\n          context.arg = record.arg;\n        }\n      }\n    };\n  } // Call delegate.iterator[context.method](context.arg) and handle the\n  // result, either by returning a { value, done } result from the\n  // delegate iterator, or by modifying context.method and context.arg,\n  // setting context.delegate to null, and returning the ContinueSentinel.\n\n\n  function maybeInvokeDelegate(delegate, context) {\n    var method = delegate.iterator[context.method];\n\n    if (method === undefined) {\n      // A .throw or .return when the delegate iterator has no .throw\n      // method always terminates the yield* loop.\n      context.delegate = null;\n\n      if (context.method === \"throw\") {\n        // Note: [\"return\"] must be used for ES3 parsing compatibility.\n        if (delegate.iterator[\"return\"]) {\n          // If the delegate iterator has a return method, give it a\n          // chance to clean up.\n          context.method = \"return\";\n          context.arg = undefined;\n          maybeInvokeDelegate(delegate, context);\n\n          if (context.method === \"throw\") {\n            // If maybeInvokeDelegate(context) changed context.method from\n            // \"return\" to \"throw\", let that override the TypeError below.\n            return ContinueSentinel;\n          }\n        }\n\n        context.method = \"throw\";\n        context.arg = new TypeError(\"The iterator does not provide a 'throw' method\");\n      }\n\n      return ContinueSentinel;\n    }\n\n    var record = tryCatch(method, delegate.iterator, context.arg);\n\n    if (record.type === \"throw\") {\n      context.method = \"throw\";\n      context.arg = record.arg;\n      context.delegate = null;\n      return ContinueSentinel;\n    }\n\n    var info = record.arg;\n\n    if (!info) {\n      context.method = \"throw\";\n      context.arg = new TypeError(\"iterator result is not an object\");\n      context.delegate = null;\n      return ContinueSentinel;\n    }\n\n    if (info.done) {\n      // Assign the result of the finished delegate to the temporary\n      // variable specified by delegate.resultName (see delegateYield).\n      context[delegate.resultName] = info.value; // Resume execution at the desired location (see delegateYield).\n\n      context.next = delegate.nextLoc; // If context.method was \"throw\" but the delegate handled the\n      // exception, let the outer generator proceed normally. If\n      // context.method was \"next\", forget context.arg since it has been\n      // \"consumed\" by the delegate iterator. If context.method was\n      // \"return\", allow the original .return call to continue in the\n      // outer generator.\n\n      if (context.method !== \"return\") {\n        context.method = \"next\";\n        context.arg = undefined;\n      }\n    } else {\n      // Re-yield the result returned by the delegate method.\n      return info;\n    } // The delegate iterator is finished, so forget it and continue with\n    // the outer generator.\n\n\n    context.delegate = null;\n    return ContinueSentinel;\n  } // Define Generator.prototype.{next,throw,return} in terms of the\n  // unified ._invoke helper method.\n\n\n  defineIteratorMethods(Gp);\n  define(Gp, toStringTagSymbol, \"Generator\"); // A Generator should always return itself as the iterator object when the\n  // @@iterator function is called on it. Some browsers' implementations of the\n  // iterator prototype chain incorrectly implement this, causing the Generator\n  // object to not be returned from this call. This ensures that doesn't happen.\n  // See https://github.com/facebook/regenerator/issues/274 for more details.\n\n  define(Gp, iteratorSymbol, function () {\n    return this;\n  });\n  define(Gp, \"toString\", function () {\n    return \"[object Generator]\";\n  });\n\n  function pushTryEntry(locs) {\n    var entry = {\n      tryLoc: locs[0]\n    };\n\n    if (1 in locs) {\n      entry.catchLoc = locs[1];\n    }\n\n    if (2 in locs) {\n      entry.finallyLoc = locs[2];\n      entry.afterLoc = locs[3];\n    }\n\n    this.tryEntries.push(entry);\n  }\n\n  function resetTryEntry(entry) {\n    var record = entry.completion || {};\n    record.type = \"normal\";\n    delete record.arg;\n    entry.completion = record;\n  }\n\n  function Context(tryLocsList) {\n    // The root entry object (effectively a try statement without a catch\n    // or a finally block) gives us a place to store values thrown from\n    // locations where there is no enclosing try statement.\n    this.tryEntries = [{\n      tryLoc: \"root\"\n    }];\n    tryLocsList.forEach(pushTryEntry, this);\n    this.reset(true);\n  }\n\n  exports.keys = function (object) {\n    var keys = [];\n\n    for (var key in object) {\n      keys.push(key);\n    }\n\n    keys.reverse(); // Rather than returning an object with a next method, we keep\n    // things simple and return the next function itself.\n\n    return function next() {\n      while (keys.length) {\n        var key = keys.pop();\n\n        if (key in object) {\n          next.value = key;\n          next.done = false;\n          return next;\n        }\n      } // To avoid creating an additional object, we just hang the .value\n      // and .done properties off the next function object itself. This\n      // also ensures that the minifier will not anonymize the function.\n\n\n      next.done = true;\n      return next;\n    };\n  };\n\n  function values(iterable) {\n    if (iterable) {\n      var iteratorMethod = iterable[iteratorSymbol];\n\n      if (iteratorMethod) {\n        return iteratorMethod.call(iterable);\n      }\n\n      if (typeof iterable.next === \"function\") {\n        return iterable;\n      }\n\n      if (!isNaN(iterable.length)) {\n        var i = -1,\n            next = function next() {\n          while (++i < iterable.length) {\n            if (hasOwn.call(iterable, i)) {\n              next.value = iterable[i];\n              next.done = false;\n              return next;\n            }\n          }\n\n          next.value = undefined;\n          next.done = true;\n          return next;\n        };\n\n        return next.next = next;\n      }\n    } // Return an iterator with no values.\n\n\n    return {\n      next: doneResult\n    };\n  }\n\n  exports.values = values;\n\n  function doneResult() {\n    return {\n      value: undefined,\n      done: true\n    };\n  }\n\n  Context.prototype = {\n    constructor: Context,\n    reset: function (skipTempReset) {\n      this.prev = 0;\n      this.next = 0; // Resetting context._sent for legacy support of Babel's\n      // function.sent implementation.\n\n      this.sent = this._sent = undefined;\n      this.done = false;\n      this.delegate = null;\n      this.method = \"next\";\n      this.arg = undefined;\n      this.tryEntries.forEach(resetTryEntry);\n\n      if (!skipTempReset) {\n        for (var name in this) {\n          // Not sure about the optimal order of these conditions:\n          if (name.charAt(0) === \"t\" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {\n            this[name] = undefined;\n          }\n        }\n      }\n    },\n    stop: function () {\n      this.done = true;\n      var rootEntry = this.tryEntries[0];\n      var rootRecord = rootEntry.completion;\n\n      if (rootRecord.type === \"throw\") {\n        throw rootRecord.arg;\n      }\n\n      return this.rval;\n    },\n    dispatchException: function (exception) {\n      if (this.done) {\n        throw exception;\n      }\n\n      var context = this;\n\n      function handle(loc, caught) {\n        record.type = \"throw\";\n        record.arg = exception;\n        context.next = loc;\n\n        if (caught) {\n          // If the dispatched exception was caught by a catch block,\n          // then let that catch block handle the exception normally.\n          context.method = \"next\";\n          context.arg = undefined;\n        }\n\n        return !!caught;\n      }\n\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        var record = entry.completion;\n\n        if (entry.tryLoc === \"root\") {\n          // Exception thrown outside of any try block that could handle\n          // it, so set the completion value of the entire function to\n          // throw the exception.\n          return handle(\"end\");\n        }\n\n        if (entry.tryLoc <= this.prev) {\n          var hasCatch = hasOwn.call(entry, \"catchLoc\");\n          var hasFinally = hasOwn.call(entry, \"finallyLoc\");\n\n          if (hasCatch && hasFinally) {\n            if (this.prev < entry.catchLoc) {\n              return handle(entry.catchLoc, true);\n            } else if (this.prev < entry.finallyLoc) {\n              return handle(entry.finallyLoc);\n            }\n          } else if (hasCatch) {\n            if (this.prev < entry.catchLoc) {\n              return handle(entry.catchLoc, true);\n            }\n          } else if (hasFinally) {\n            if (this.prev < entry.finallyLoc) {\n              return handle(entry.finallyLoc);\n            }\n          } else {\n            throw new Error(\"try statement without catch or finally\");\n          }\n        }\n      }\n    },\n    abrupt: function (type, arg) {\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n\n        if (entry.tryLoc <= this.prev && hasOwn.call(entry, \"finallyLoc\") && this.prev < entry.finallyLoc) {\n          var finallyEntry = entry;\n          break;\n        }\n      }\n\n      if (finallyEntry && (type === \"break\" || type === \"continue\") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {\n        // Ignore the finally entry if control is not jumping to a\n        // location outside the try/catch block.\n        finallyEntry = null;\n      }\n\n      var record = finallyEntry ? finallyEntry.completion : {};\n      record.type = type;\n      record.arg = arg;\n\n      if (finallyEntry) {\n        this.method = \"next\";\n        this.next = finallyEntry.finallyLoc;\n        return ContinueSentinel;\n      }\n\n      return this.complete(record);\n    },\n    complete: function (record, afterLoc) {\n      if (record.type === \"throw\") {\n        throw record.arg;\n      }\n\n      if (record.type === \"break\" || record.type === \"continue\") {\n        this.next = record.arg;\n      } else if (record.type === \"return\") {\n        this.rval = this.arg = record.arg;\n        this.method = \"return\";\n        this.next = \"end\";\n      } else if (record.type === \"normal\" && afterLoc) {\n        this.next = afterLoc;\n      }\n\n      return ContinueSentinel;\n    },\n    finish: function (finallyLoc) {\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n\n        if (entry.finallyLoc === finallyLoc) {\n          this.complete(entry.completion, entry.afterLoc);\n          resetTryEntry(entry);\n          return ContinueSentinel;\n        }\n      }\n    },\n    \"catch\": function (tryLoc) {\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n\n        if (entry.tryLoc === tryLoc) {\n          var record = entry.completion;\n\n          if (record.type === \"throw\") {\n            var thrown = record.arg;\n            resetTryEntry(entry);\n          }\n\n          return thrown;\n        }\n      } // The context.catch method must only be called with a location\n      // argument that corresponds to a known catch block.\n\n\n      throw new Error(\"illegal catch attempt\");\n    },\n    delegateYield: function (iterable, resultName, nextLoc) {\n      this.delegate = {\n        iterator: values(iterable),\n        resultName: resultName,\n        nextLoc: nextLoc\n      };\n\n      if (this.method === \"next\") {\n        // Deliberately forget the last sent value so that we don't\n        // accidentally pass it on to the delegate.\n        this.arg = undefined;\n      }\n\n      return ContinueSentinel;\n    }\n  }; // Regardless of whether this script is executing as a CommonJS module\n  // or not, return the runtime object so that we can declare the variable\n  // regeneratorRuntime in the outer scope, which allows this module to be\n  // injected easily by `bin/regenerator --include-runtime script.js`.\n\n  return exports;\n}( // If this script is executing as a CommonJS module, use module.exports\n// as the regeneratorRuntime namespace. Otherwise create a new empty\n// object. Either way, the resulting object will be used to initialize\n// the regeneratorRuntime variable at the top of this file.\n true ? module.exports : 0);\n\ntry {\n  regeneratorRuntime = runtime;\n} catch (accidentalStrictMode) {\n  // This module should not be running in strict mode, so the above\n  // assignment should always work unless something is misconfigured. Just\n  // in case runtime.js accidentally runs in strict mode, in modern engines\n  // we can explicitly access globalThis. In older engines we can escape\n  // strict mode using a global Function call. This could conceivably fail\n  // if a Content Security Policy forbids using Function, but in that case\n  // the proper solution is to fix the accidental strict mode problem. If\n  // you've misconfigured your bundler to force strict mode and applied a\n  // CSP to forbid Function, and you're not willing to fix either of those\n  // problems, please detail your unique predicament in a GitHub issue.\n  if (typeof globalThis === \"object\") {\n    globalThis.regeneratorRuntime = runtime;\n  } else {\n    Function(\"r\", \"regeneratorRuntime = r\")(runtime);\n  }\n}\n\n//# sourceURL=webpack://test-notes/./node_modules/regenerator-runtime/runtime.js?");

/***/ }),

/***/ "./node_modules/uniqid/index.js":
/*!**************************************!*\
  !*** ./node_modules/uniqid/index.js ***!
  \**************************************/
/***/ ((module) => {

eval("/* \n(The MIT License)\nCopyright (c) 2014-2021 Halász Ádám <adam@aimform.com>\nPermission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the \"Software\"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\nThe above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\nTHE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n*/\n//  Unique Hexatridecimal ID Generator\n// ================================================\n//  Dependencies\n// ================================================\nvar pid = typeof process !== 'undefined' && process.pid ? process.pid.toString(36) : '';\nvar address = '';\n\nif (false) { var i, networkInterfaces, mac, os; } //  Exports\n// ================================================\n\n\nmodule.exports = module.exports[\"default\"] = function (prefix, suffix) {\n  return (prefix ? prefix : '') + address + pid + now().toString(36) + (suffix ? suffix : '');\n};\n\nmodule.exports.process = function (prefix, suffix) {\n  return (prefix ? prefix : '') + pid + now().toString(36) + (suffix ? suffix : '');\n};\n\nmodule.exports.time = function (prefix, suffix) {\n  return (prefix ? prefix : '') + now().toString(36) + (suffix ? suffix : '');\n}; //  Helpers\n// ================================================\n\n\nfunction now() {\n  var time = Date.now();\n  var last = now.last || time;\n  return now.last = time > last ? time : last + 1;\n}\n\n//# sourceURL=webpack://test-notes/./node_modules/uniqid/index.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sass/main.scss */ \"./src/sass/main.scss\");\n/* harmony import */ var _js_notes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/notes */ \"./src/js/notes.js\");\n/* harmony import */ var _js_archiv_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/archiv-list */ \"./src/js/archiv-list.js\");\n/* harmony import */ var _js_modal_add__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/modal-add */ \"./src/js/modal-add.js\");\n/* harmony import */ var _js_create_logic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/create-logic */ \"./src/js/create-logic.js\");\n/* harmony import */ var _js_remove_notes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./js/remove-notes */ \"./src/js/remove-notes.js\");\n/* harmony import */ var _js_arhiv_notes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./js/arhiv-notes */ \"./src/js/arhiv-notes.js\");\n/* harmony import */ var _js_write_notes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./js/write-notes */ \"./src/js/write-notes.js\");\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://test-notes/./src/index.js?");

/***/ }),

/***/ "./src/js/archiv-list.js":
/*!*******************************!*\
  !*** ./src/js/archiv-list.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getRenderCategory\": () => (/* binding */ getRenderCategory)\n/* harmony export */ });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/js/constants.js\");\n/* harmony import */ var _templates_list_archiv_hbs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../templates/list-archiv.hbs */ \"./src/templates/list-archiv.hbs\");\n/* harmony import */ var _templates_list_archiv_hbs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_templates_list_archiv_hbs__WEBPACK_IMPORTED_MODULE_1__);\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\nvar refs = {\n  container: document.querySelector('.table-archiv-container')\n};\nvar dataRender = [];\ngetRenderNoteList();\n\nfunction getRenderNoteList() {\n  return _getRenderNoteList.apply(this, arguments);\n}\n\nfunction _getRenderNoteList() {\n  _getRenderNoteList = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            try {\n              arrayFilterCategory();\n\n              if (_typeof(dataRender) === 'object') {\n                getRenderList(dataRender);\n              }\n            } catch (error) {}\n\n          case 1:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n  return _getRenderNoteList.apply(this, arguments);\n}\n\n;\n\nfunction getRenderList(dataLoad) {\n  refs.container.insertAdjacentHTML('afterbegin', _templates_list_archiv_hbs__WEBPACK_IMPORTED_MODULE_1___default()(dataLoad));\n}\n\nfunction CategoryObject(_ref) {\n  var category = _ref.category,\n      isActiv = _ref.isActiv,\n      isArchiv = _ref.isArchiv,\n      viewBox = _ref.viewBox,\n      pathD = _ref.pathD;\n  this.id = category;\n  this.category = category;\n  this.isActiv = 1;\n  this.isArchiv = 1;\n  this.viewBox = viewBox;\n  this.pathD = pathD;\n  return {\n    id: this.id,\n    category: this.category,\n    isActiv: this.isActiv,\n    isArchiv: this.isArchiv,\n    viewBox: this.viewBox,\n    pathD: this.pathD\n  };\n}\n\n;\n\nfunction arrayFilterCategory() {\n  var dataLoadIsactiv = _constants__WEBPACK_IMPORTED_MODULE_0__.data.filter(function (num) {\n    return num.isActiv === false;\n  });\n  dataLoadIsactiv.reduce(function (acc, num, ind, arr) {\n    acc = dataRender.map(function (num) {\n      return num.category;\n    });\n\n    if (acc.includes(num.category)) {\n      dataRender.reduce(function (acc, n, ind) {\n        if (n.category === num.category) {\n          n.isActiv += 1;\n\n          if (num.isArchiv) {\n            n.isArchiv += 1;\n          }\n        }\n      }, []);\n    } else dataRender.push(new CategoryObject(num));\n\n    return dataRender;\n  }, []);\n}\n\n;\n\nfunction getRenderCategory(archivedNote) {\n  dataRender = [];\n  arrayFilterCategory();\n  var newDatarender = [dataRender.find(function (el) {\n    return el.category === archivedNote.category;\n  })];\n  console.log(newDatarender);\n  getRenderList(newDatarender);\n}\n\n\n\n//# sourceURL=webpack://test-notes/./src/js/archiv-list.js?");

/***/ }),

/***/ "./src/js/arhiv-notes.js":
/*!*******************************!*\
  !*** ./src/js/arhiv-notes.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/js/constants.js\");\n/* harmony import */ var _remove_notes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./remove-notes */ \"./src/js/remove-notes.js\");\n/* harmony import */ var _archiv_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./archiv-list */ \"./src/js/archiv-list.js\");\n/* harmony import */ var _write_notes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./write-notes */ \"./src/js/write-notes.js\");\n\n\n\n\nvar ContainerList = document.querySelector('.notes-list');\nContainerList.addEventListener('click', onButtonClick);\n\nfunction onButtonClick(e) {\n  var idElement = e.target.parentElement.parentElement.parentElement.id || e.target.parentElement.parentElement.id;\n  typeButton(e.target.id, idElement);\n}\n\n;\n\nvar typeButton = function typeButton(type, idElement) {\n  if (type === 'archiv' && idElement) {\n    getArchivNotes(idElement);\n  }\n\n  ;\n\n  if (type === 'remove') {\n    (0,_remove_notes__WEBPACK_IMPORTED_MODULE_1__.getRemoveElById)(idElement);\n  }\n\n  ;\n\n  if (type === 'write' && idElement) {\n    (0,_write_notes__WEBPACK_IMPORTED_MODULE_3__.getRewriteNotes)(idElement);\n  }\n};\n\nfunction getArchivNotes(idElement) {\n  var findEl = _constants__WEBPACK_IMPORTED_MODULE_0__.data.findIndex(function (el) {\n    return el.id.toString() === idElement;\n  });\n  _constants__WEBPACK_IMPORTED_MODULE_0__.data.find(function (el) {\n    if (el.id.toString() === idElement) {\n      console.log(el.id.toString());\n      el.isArchiv = true;\n      el.isActiv = false;\n      return el;\n    }\n  });\n  (0,_remove_notes__WEBPACK_IMPORTED_MODULE_1__.getRemoveElById)(idElement);\n  getElementTextContent(_constants__WEBPACK_IMPORTED_MODULE_0__.data[findEl].category);\n  (0,_archiv_list__WEBPACK_IMPORTED_MODULE_2__.getRenderCategory)(_constants__WEBPACK_IMPORTED_MODULE_0__.data[findEl]);\n}\n\n;\n\nfunction getElementTextContent(category) {\n  var deletedElement = document.getElementById(category);\n\n  if (deletedElement) {\n    deletedElement.remove();\n  }\n}\n\n//# sourceURL=webpack://test-notes/./src/js/arhiv-notes.js?");

/***/ }),

/***/ "./src/js/constants.js":
/*!*****************************!*\
  !*** ./src/js/constants.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"data\": () => (/* binding */ data),\n/* harmony export */   \"imagesPath\": () => (/* binding */ imagesPath),\n/* harmony export */   \"tasksImage\": () => (/* binding */ tasksImage)\n/* harmony export */ });\n/* harmony import */ var _db_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./db.json */ \"./src/js/db.json\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n\nvar imagesPath = [\"M27 0c2.761 0 5 2.239 5 5 0 1.126-0.372 2.164-1 3l-2 2-7-7 2-2c0.836-0.628 1.874-1 3-1zM2 23l-2 9 9-2 18.5-18.5-7-7-18.5 18.5zM22.362 11.362l-14 14-1.724-1.724 14-14 1.724 1.724z\", \"M26 2h-20l-6 6v21c0 0.552 0.448 1 1 1h30c0.552 0 1-0.448 1-1v-21l-6-6zM16 26l-10-8h6v-6h8v6h6l-10 8zM4.828 6l2-2h18.343l2 2h-22.343z\", \"M6 32h20l2-22h-24zM20 4v-4h-8v4h-10v6l2-2h24l2 2v-6h-10zM18 4h-4v-2h4v2z\"];\nvar tasksImage = [{\n  name: \"Task\",\n  viewBox: \"-8 -8 35 35\",\n  pathD: \"M4 2h16l-3 9h-13c-0.552 0-1 0.448-1 1s0.448 1 1 1v0h13v2h-13c-1.657 0-3-1.343-3-3s1.343-3 3-3v0h0.33l-1.33-4-1-3h-2v-2h3c0.552 0 1 0.448 1 1v0 1zM5 20c-1.105 0-2-0.895-2-2s0.895-2 2-2v0c1.105 0 2 0.895 2 2s-0.895 2-2 2v0zM15 20c-1.105 0-2-0.895-2-2s0.895-2 2-2v0c1.105 0 2 0.895 2 2s-0.895 2-2 2v0z\"\n}, {\n  name: \"Random\",\n  viewBox: \"-3 -3 30 30\",\n  pathD: \"M12.984 8.578q-0.563 0-0.984 0.422t-0.422 0.984q0 0.609 0.422 1.031t0.984 0.422q0.609 0 1.031-0.422t0.422-1.031q0-0.563-0.422-0.984t-1.031-0.422zM12.984 3q-1.406 0-2.625 0.516t-2.18 1.43-1.523 2.109-0.656 2.602l-1.922 2.531q-0.188 0.281-0.047 0.539t0.469 0.258h1.5v3q0 0.844 0.586 1.43t1.43 0.586h0.984v3h6.984v-4.688q1.781-0.844 2.906-2.531t1.125-3.797q0-1.453-0.563-2.719t-1.523-2.227-2.227-1.5-2.719-0.539zM15.984 9.984v0.422l0.844 0.656q0.094 0.094 0.047 0.234l-0.797 1.406q-0.094 0.141-0.281 0.094l-0.984-0.422q-0.281 0.234-0.656 0.375l-0.141 1.078q-0.047 0.188-0.234 0.188h-1.594q-0.141 0-0.188-0.188l-0.141-1.078q-0.375-0.141-0.703-0.375l-0.984 0.422q-0.141 0.047-0.234-0.094l-0.797-1.406q-0.094-0.141 0.047-0.234l0.844-0.656q0-0.094-0.023-0.211t-0.023-0.211 0.023-0.188 0.023-0.188l-0.844-0.656q-0.141-0.094-0.047-0.281l0.797-1.359q0.094-0.141 0.234-0.094l1.031 0.422q0.328-0.281 0.656-0.422l0.141-1.031q0.047-0.188 0.188-0.188h1.594q0.188 0 0.234 0.188l0.141 1.031q0.328 0.141 0.656 0.422l0.984-0.422q0.188-0.047 0.281 0.094l0.797 1.359q0.094 0.188-0.047 0.281l-0.891 0.656q0.047 0.141 0.047 0.375z\"\n}, {\n  name: \"Idea\",\n  viewBox: \"-3 -3 30 30\",\n  pathD: \"M14.859 13.078q2.156-1.5 2.156-4.078 0-2.063-1.477-3.539t-3.539-1.477-3.539 1.477-1.477 3.539q0 1.078 0.633 2.25t1.523 1.828l0.844 0.609v2.297h4.031v-2.297zM12 2.016q2.906 0 4.945 2.039t2.039 4.945q0 3.656-3 5.719v2.297q0 0.422-0.281 0.703t-0.703 0.281h-6q-0.422 0-0.703-0.281t-0.281-0.703v-2.297q-3-2.063-3-5.719 0-2.906 2.039-4.945t4.945-2.039zM9 21v-0.984h6v0.984q0 0.422-0.281 0.703t-0.703 0.281h-4.031q-0.422 0-0.703-0.281t-0.281-0.703z\"\n}, {\n  name: \"Quote\",\n  \"viewBox\": \"-3 -3 30 30\",\n  \"pathD\": \"M14.016 17.016l1.969-4.031h-3v-6h6v6l-1.969 4.031h-3zM6 17.016l2.016-4.031h-3v-6h6v6l-2.016 4.031h-3z\"\n}];\n\nvar data = _toConsumableArray(_db_json__WEBPACK_IMPORTED_MODULE_0__.users);\n\n\n\n//# sourceURL=webpack://test-notes/./src/js/constants.js?");

/***/ }),

/***/ "./src/js/create-logic.js":
/*!********************************!*\
  !*** ./src/js/create-logic.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"clearlModalInput\": () => (/* binding */ clearlModalInput),\n/* harmony export */   \"date\": () => (/* binding */ date),\n/* harmony export */   \"dateParse\": () => (/* binding */ dateParse),\n/* harmony export */   \"getDateForm\": () => (/* binding */ getDateForm),\n/* harmony export */   \"onCreatedTask\": () => (/* binding */ onCreatedTask),\n/* harmony export */   \"refs\": () => (/* binding */ refs)\n/* harmony export */ });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/js/constants.js\");\n/* harmony import */ var _modal_add__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal-add */ \"./src/js/modal-add.js\");\n/* harmony import */ var uniqid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uniqid */ \"./node_modules/uniqid/index.js\");\n/* harmony import */ var uniqid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(uniqid__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _notes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notes */ \"./src/js/notes.js\");\n\n\n\n\n\nvar refs = {\n  taskName: document.querySelector('.task-input'),\n  taskContent: document.querySelector('.content-input'),\n  taskSelekt: document.querySelector('.task-select'),\n  taskData: document.querySelector('.task-data'),\n  taskButton: document.querySelector('.form-submit-btn'),\n  formBtn: document.querySelector('.task-form')\n};\nvar date = new Date();\ngetDateForm(date);\n\nfunction onCreatedTask(e) {\n  e.preventDefault();\n  var renderNotes = new GetModalData();\n  (0,_notes__WEBPACK_IMPORTED_MODULE_3__.getRenderList)([renderNotes]);\n  getDataTooDb(renderNotes);\n  clearlModalInput();\n  (0,_modal_add__WEBPACK_IMPORTED_MODULE_1__.closeModalButton)();\n}\n\n;\n\nfunction GetModalData() {\n  var _this = this;\n\n  this.id = uniqid__WEBPACK_IMPORTED_MODULE_2___default()();\n  this.name = refs.taskName.value;\n  this.created = date.toDateString().slice(4, 15);\n  ;\n  this.category = refs.taskSelekt.value;\n  this.content = refs.taskContent.value;\n  this.isActiv = true;\n  this.isArchiv = false;\n  this.viewBox = '';\n  this.pathD = '';\n  this.data = [];\n\n  if (isDate(dateParse()) !== isDate(date.toLocaleString().slice(0, 10))) {\n    this.data = [dateParse()];\n  }\n\n  ;\n  _constants__WEBPACK_IMPORTED_MODULE_0__.tasksImage.reduce(function (acc, img) {\n    if (refs.taskSelekt.value.toLowerCase().includes(img.name.toLowerCase())) {\n      _this.viewBox = img.viewBox;\n      _this.pathD = img.pathD;\n    }\n  }, []);\n  return {\n    id: this.id,\n    name: this.name,\n    created: this.created,\n    category: this.category,\n    content: this.content,\n    data: this.data,\n    viewBox: this.viewBox,\n    pathD: this.pathD,\n    isActiv: this.isActiv,\n    isArchiv: this.isArchiv\n  };\n}\n\n;\n\nfunction getDateForm(date) {\n  var data = date.toLocaleString().slice(0, 10).split(\".\").reverse().join('-');\n  refs.taskData.value = data;\n  console.log(data);\n  return data;\n}\n\n;\n\nvar dateParse = function dateParse() {\n  var dat = [];\n  refs.taskData.value.split('-').reverse().reduce(function (acc, num) {\n    if (num.split(\"\")[0].includes('0')) {\n      dat.push(num.split(\"\")[1].trim());\n    } else dat.push(num);\n\n    return acc;\n  }, []);\n  return dat.join('/');\n};\n\nvar isDate = function isDate(dats) {\n  return dats.split(\"\").reduce(function (acc, num) {\n    if (+num) {\n      acc = acc + +num;\n    }\n\n    return acc;\n  }, 0);\n};\n\nfunction getDataTooDb(notes) {\n  _constants__WEBPACK_IMPORTED_MODULE_0__.data.push(notes);\n}\n\n;\n\nfunction clearlModalInput() {\n  refs.taskName.value = '';\n  refs.taskContent.value = '';\n  getDateForm(date);\n}\n\n;\n\n\n//# sourceURL=webpack://test-notes/./src/js/create-logic.js?");

/***/ }),

/***/ "./src/js/modal-add.js":
/*!*****************************!*\
  !*** ./src/js/modal-add.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"closeModal\": () => (/* binding */ closeModal),\n/* harmony export */   \"closeModalButton\": () => (/* binding */ closeModalButton),\n/* harmony export */   \"openModal\": () => (/* binding */ openModal)\n/* harmony export */ });\n/* harmony import */ var _write_notes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./write-notes */ \"./src/js/write-notes.js\");\n/* harmony import */ var _create_logic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-logic */ \"./src/js/create-logic.js\");\n\n\nvar refs = {\n  modalBtn: document.querySelector('.add-btn'),\n  backdrop: document.querySelector('.modal-backdrop'),\n  formBtn: document.querySelector('.task-form')\n};\nrefs.modalBtn.addEventListener('click', togleModalBtn);\nrefs.backdrop.addEventListener('click', closeModal);\n\nfunction togleModalBtn() {\n  refs.formBtn.removeEventListener('submit', _write_notes__WEBPACK_IMPORTED_MODULE_0__.onRewriteDataTask);\n  refs.formBtn.addEventListener('submit', _create_logic__WEBPACK_IMPORTED_MODULE_1__.onCreatedTask);\n  openModal();\n}\n\n;\n\nfunction openModal() {\n  refs.backdrop.classList.replace('is-hiden', 'is-open');\n}\n\n;\n\nfunction closeModal(e) {\n  if (e.target.classList[0] === \"modal-backdrop\") {\n    closeModalButton();\n  }\n}\n\n;\n\nfunction closeModalButton() {\n  refs.backdrop.classList.replace('is-open', 'is-hiden');\n}\n\n;\n\n\n//# sourceURL=webpack://test-notes/./src/js/modal-add.js?");

/***/ }),

/***/ "./src/js/notes.js":
/*!*************************!*\
  !*** ./src/js/notes.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getRenderList\": () => (/* binding */ getRenderList)\n/* harmony export */ });\n/* harmony import */ var _templates_list_title_hbs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../templates/list-title.hbs */ \"./src/templates/list-title.hbs\");\n/* harmony import */ var _templates_list_title_hbs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_templates_list_title_hbs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ \"./src/js/constants.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\n\nvar refs = {\n  container: document.querySelector('.notes-list')\n};\ngetRenderNoteList();\n\nfunction getRenderNoteList() {\n  return _getRenderNoteList.apply(this, arguments);\n}\n\nfunction _getRenderNoteList() {\n  _getRenderNoteList = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n    var dataLoad;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.prev = 0;\n            _context.next = 3;\n            return _toConsumableArray(_constants__WEBPACK_IMPORTED_MODULE_1__.data).reduce(function (acc, num, ind, arr) {\n              if (num.isActiv === true) {\n                acc.push(_objectSpread(_objectSpread({}, num), {}, {\n                  imagesPath: _constants__WEBPACK_IMPORTED_MODULE_1__.imagesPath\n                }));\n              }\n\n              return acc;\n            }, []);\n\n          case 3:\n            dataLoad = _context.sent;\n\n            if (_typeof(dataLoad) === 'object') {\n              getRenderList(_toConsumableArray(dataLoad));\n            }\n\n            _context.next = 9;\n            break;\n\n          case 7:\n            _context.prev = 7;\n            _context.t0 = _context[\"catch\"](0);\n\n          case 9:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[0, 7]]);\n  }));\n  return _getRenderNoteList.apply(this, arguments);\n}\n\nfunction getRenderList(dataLoad) {\n  refs.container.insertAdjacentHTML('afterbegin', _templates_list_title_hbs__WEBPACK_IMPORTED_MODULE_0___default()(dataLoad));\n}\n\n;\n\n\n//# sourceURL=webpack://test-notes/./src/js/notes.js?");

/***/ }),

/***/ "./src/js/remove-notes.js":
/*!********************************!*\
  !*** ./src/js/remove-notes.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getRemoveElById\": () => (/* binding */ getRemoveElById)\n/* harmony export */ });\nfunction getRemoveElById(id) {\n  var element = document.getElementById(id);\n  element.remove();\n}\n\n\n\n//# sourceURL=webpack://test-notes/./src/js/remove-notes.js?");

/***/ }),

/***/ "./src/js/write-notes.js":
/*!*******************************!*\
  !*** ./src/js/write-notes.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getRewriteNotes\": () => (/* binding */ getRewriteNotes),\n/* harmony export */   \"onRewriteDataTask\": () => (/* binding */ onRewriteDataTask)\n/* harmony export */ });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/js/constants.js\");\n/* harmony import */ var _modal_add__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal-add */ \"./src/js/modal-add.js\");\n/* harmony import */ var _create_logic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-logic */ \"./src/js/create-logic.js\");\n/* harmony import */ var _remove_notes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./remove-notes */ \"./src/js/remove-notes.js\");\n/* harmony import */ var _notes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./notes */ \"./src/js/notes.js\");\n\n\n\n\n\nvar elementForUpdate = {};\n\nfunction getRewriteNotes(idElement) {\n  _create_logic__WEBPACK_IMPORTED_MODULE_2__.refs.formBtn.removeEventListener('submit', _create_logic__WEBPACK_IMPORTED_MODULE_2__.onCreatedTask);\n  _create_logic__WEBPACK_IMPORTED_MODULE_2__.refs.formBtn.addEventListener('submit', onRewriteDataTask);\n  getInitialData(idElement);\n  (0,_modal_add__WEBPACK_IMPORTED_MODULE_1__.openModal)();\n}\n\n;\n\nfunction onRewriteDataTask(e) {\n  e.preventDefault();\n  RewriteDataBase(elementForUpdate);\n}\n\nfunction getInitialData(idElement) {\n  var findEl = _constants__WEBPACK_IMPORTED_MODULE_0__.data.findIndex(function (el) {\n    return el.id.toString() === idElement;\n  });\n  elementForUpdate = _constants__WEBPACK_IMPORTED_MODULE_0__.data.find(function (el) {\n    return el.id.toString() === idElement;\n  });\n  initialWriteModal(_constants__WEBPACK_IMPORTED_MODULE_0__.data[findEl]);\n}\n\n;\n\nfunction initialWriteModal(params) {\n  _create_logic__WEBPACK_IMPORTED_MODULE_2__.refs.taskName.value = params.name;\n  _create_logic__WEBPACK_IMPORTED_MODULE_2__.refs.taskContent.value = params.content;\n  _create_logic__WEBPACK_IMPORTED_MODULE_2__.refs.taskSelekt.value = params.category;\n  _create_logic__WEBPACK_IMPORTED_MODULE_2__.refs.taskData.value = (0,_create_logic__WEBPACK_IMPORTED_MODULE_2__.getDateForm)(_create_logic__WEBPACK_IMPORTED_MODULE_2__.date);\n}\n\n;\n\nfunction RewriteDataBase(elementForUpdate) {\n  var elForUpdata = [];\n  _constants__WEBPACK_IMPORTED_MODULE_0__.data.find(function (el) {\n    if (el.id === elementForUpdate.id) {\n      console.log('RewriteDataBase', elementForUpdate);\n      el.name = _create_logic__WEBPACK_IMPORTED_MODULE_2__.refs.taskName.value;\n      el.content = _create_logic__WEBPACK_IMPORTED_MODULE_2__.refs.taskContent.value;\n      el.category = _create_logic__WEBPACK_IMPORTED_MODULE_2__.refs.taskSelekt.value;\n      console.log('qqqqqqqqqqqqqqqqqqqqqqqqqqqqqq', el.data.length);\n\n      if (el.data.length === 0) {\n        [el.data = (0,_create_logic__WEBPACK_IMPORTED_MODULE_2__.dateParse)()];\n        console.log('1elqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq', el.data.length);\n      } else if (el.data.length === 1 || el.data.length === 8) {\n        el.data = [el.data, (0,_create_logic__WEBPACK_IMPORTED_MODULE_2__.dateParse)()];\n        console.log('2elcccccccccccccccccccccccccccccc', el);\n      } else el.data = [el.data[1], (0,_create_logic__WEBPACK_IMPORTED_MODULE_2__.dateParse)()];\n\n      elForUpdata = [el];\n    }\n  });\n  (0,_remove_notes__WEBPACK_IMPORTED_MODULE_3__.getRemoveElById)(elementForUpdate.id);\n  (0,_notes__WEBPACK_IMPORTED_MODULE_4__.getRenderList)(elForUpdata);\n  (0,_modal_add__WEBPACK_IMPORTED_MODULE_1__.closeModalButton)();\n  (0,_create_logic__WEBPACK_IMPORTED_MODULE_2__.clearlModalInput)();\n}\n\n;\n\n\n//# sourceURL=webpack://test-notes/./src/js/write-notes.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/main.scss":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/main.scss ***!
  \***************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@charset \\\"UTF-8\\\";\\n*,\\n*::before,\\n*::after {\\n  -webkit-box-sizing: inherit;\\n          box-sizing: inherit; }\\n\\nhtml {\\n  scroll-behavior: smooth; }\\n\\nbody {\\n  font-family: 'Montserrat', sans-serif;\\n  font-style: normal;\\n  font-weight: 400;\\n  font-size: 14px; }\\n\\nh1,\\nh2,\\nh3,\\np,\\nul {\\n  margin: 0;\\n  padding: 0;\\n  list-style-type: none; }\\n\\nimg {\\n  display: block;\\n  max-width: 100%;\\n  height: auto; }\\n\\n.link {\\n  text-decoration: none;\\n  color: inherit;\\n  font-style: normal;\\n  font-family: 'Montserrat', sans-serif; }\\n\\n.list {\\n  list-style: none;\\n  padding-left: 0;\\n  margin: 0; }\\n\\n.container {\\n  -webkit-box-sizing: content-box;\\n          box-sizing: content-box;\\n  margin-left: auto;\\n  margin-right: auto;\\n  position: relative; }\\n  @media screen and (min-width: 320px) {\\n    .container {\\n      max-width: 270px;\\n      width: 100%; } }\\n  @media screen and (min-width: 768px) {\\n    .container {\\n      max-width: 596px;\\n      width: 100%; } }\\n  @media screen and (min-width: 1400px) {\\n    .container {\\n      max-width: 1400px;\\n      width: 100%; } }\\n\\n.head-title {\\n  opacity: 0;\\n  width: opx;\\n  height: 0px; }\\n\\n.table-head {\\n  margin-top: 30px;\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-pack: justify;\\n      -ms-flex-pack: justify;\\n          justify-content: space-between;\\n  -webkit-box-align: center;\\n      -ms-flex-align: center;\\n          align-items: center;\\n  padding: 10px 0 10px 10px;\\n  height: 30px;\\n  max-width: 100%;\\n  background-color: #767573;\\n  border-radius: 6px; }\\n\\n.table-head-container {\\n  width: 100%;\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-pack: start;\\n      -ms-flex-pack: start;\\n          justify-content: flex-start; }\\n\\n.table-head-item {\\n  font-size: 25px;\\n  font-weight: 700;\\n  color: white;\\n  font-family: Arial, Helvetica, sans-serif;\\n  width: 200px; }\\n  .table-head-item:first-child {\\n    margin-left: 80px;\\n    margin-right: 20px; }\\n  .table-head-item:nth-child(3) {\\n    margin-left: 10px; }\\n  .table-head-item:nth-child(4) {\\n    margin-left: 10px; }\\n  .table-head-item:last-child {\\n    margin-right: 70px;\\n    margin-left: 10px; }\\n\\n.category-icons {\\n  width: 200px;\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-pack: end;\\n      -ms-flex-pack: end;\\n          justify-content: flex-end;\\n  -webkit-box-align: center;\\n      -ms-flex-align: center;\\n          align-items: center; }\\n\\n.table-head-svg {\\n  width: 35px;\\n  height: 30px;\\n  background-color: #767573;\\n  fill: white; }\\n\\n.btn-image {\\n  padding: 0;\\n  border: 0;\\n  background-color: inherit;\\n  margin-right: 15px; }\\n\\n.add-btn {\\n  margin-top: 30px;\\n  display: block;\\n  background-color: #f8f4eb;\\n  border: 1px solin black;\\n  border-radius: 4px;\\n  padding: 5px 20px;\\n  font-size: 18px;\\n  font-weight: 600;\\n  margin-left: auto; }\\n\\n.notes-list {\\n  width: 100%; }\\n\\n.container-items {\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-pack: justify;\\n      -ms-flex-pack: justify;\\n          justify-content: space-between;\\n  -webkit-box-align: center;\\n      -ms-flex-align: center;\\n          align-items: center;\\n  margin-top: 10px;\\n  width: 100%;\\n  height: 65px;\\n  background-color: #cfe7f8; }\\n\\n.container-title-list {\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  width: 1200px;\\n  -webkit-box-align: center;\\n      -ms-flex-align: center;\\n          align-items: center;\\n  color: #57575a; }\\n  .container-title-list li {\\n    font-size: 27px;\\n    font-weight: 500;\\n    padding: 10px;\\n    white-space: nowrap;\\n    overflow-x: hidden;\\n    text-overflow: ellipsis; }\\n    .container-title-list li:first-child {\\n      margin-left: 10px; }\\n    .container-title-list li:nth-child(2) {\\n      width: 200px;\\n      color: #020202; }\\n    .container-title-list li:nth-child(3) {\\n      width: 200px; }\\n    .container-title-list li:nth-child(4) {\\n      padding: 0;\\n      width: 200px; }\\n    .container-title-list li:nth-child(5) {\\n      width: 200px; }\\n\\n.container-title-images {\\n  width: 150px; }\\n\\n.table-row-svg {\\n  width: 40px;\\n  height: 40px;\\n  border-radius: 50%;\\n  fill: white;\\n  padding: 5px;\\n  margin-top: 5px;\\n  text-align: center;\\n  background-color: #767573; }\\n\\n.container-title-images {\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-pack: end;\\n      -ms-flex-pack: end;\\n          justify-content: flex-end; }\\n  .container-title-images svg {\\n    margin-right: 17px; }\\n\\n.title-image-list {\\n  fill: #767573; }\\n\\nul .archiv-item:nth-child(2) {\\n  margin-left: 300px;\\n  margin-right: 100px; }\\n\\n.is-activ-item {\\n  margin-left: 310px;\\n  margin-right: 100px; }\\n\\n.modal-backdrop {\\n  position: absolute;\\n  background-color: rgba(71, 48, 48, 0.7); }\\n\\n.modal-container {\\n  padding: 20px;\\n  border-radius: 10px;\\n  width: 600px;\\n  margin-left: auto;\\n  margin-right: auto;\\n  margin-top: 100px;\\n  background-color: aqua; }\\n\\n.is-open {\\n  top: 0;\\n  width: 100%;\\n  height: 100%;\\n  opacity: 1; }\\n\\n.is-hiden {\\n  top: -100%;\\n  opacity: 0; }\\n\\nlabel {\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-align: center;\\n      -ms-flex-align: center;\\n          align-items: center; }\\n\\nspan::after {\\n  padding-left: 5px; }\\n\\ninput:invalid + span::after {\\n  content: '✖'; }\\n\\ninput:valid + span::after {\\n  content: '✓'; }\\n\\n.task-form {\\n  padding: 0px 20px 20px 20px;\\n  width: 300px;\\n  margin-left: auto;\\n  margin-right: auto; }\\n\\nlabel {\\n  margin-top: 20px;\\n  color: #29251f;\\n  font-size: 16px;\\n  font-weight: 500; }\\n\\n.task-input {\\n  margin-top: 10px;\\n  width: 100%;\\n  height: 30px;\\n  border: 3px solid green;\\n  border-radius: 4px; }\\n\\n.content-input {\\n  margin-top: 10px;\\n  width: 100%;\\n  height: 30px;\\n  border: 3px solid green;\\n  border-radius: 4px; }\\n\\n.task-select {\\n  margin-top: 10px;\\n  width: 100%;\\n  height: 30px;\\n  border: 3px solid green;\\n  border-radius: 4px; }\\n\\n.task-data {\\n  margin-top: 10px;\\n  width: 100%;\\n  height: 30px;\\n  border: 3px solid green;\\n  border-radius: 4px; }\\n\\n.form-submit-btn {\\n  display: block;\\n  margin-top: 20px;\\n  margin-left: auto;\\n  border-radius: 6px;\\n  padding: 10px;\\n  background-color: #c690f8; }\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://test-notes/./src/sass/main.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./src/templates/list-archiv.hbs":
/*!***************************************!*\
  !*** ./src/templates/list-archiv.hbs ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var Handlebars = __webpack_require__(/*! ../../node_modules/handlebars/runtime.js */ \"./node_modules/handlebars/runtime.js\");\nfunction __default(obj) { return obj && (obj.__esModule ? obj[\"default\"] : obj); }\nmodule.exports = (Handlebars[\"default\"] || Handlebars).template({\"1\":function(container,depth0,helpers,partials,data) {\n    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=\"function\", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {\n        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {\n          return parent[propertyName];\n        }\n        return undefined\n    };\n\n  return \"<li class=\\\"container-items\\\" id=\\\"\"\n    + alias4(((helper = (helper = lookupProperty(helpers,\"id\") || (depth0 != null ? lookupProperty(depth0,\"id\") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{\"name\":\"id\",\"hash\":{},\"data\":data,\"loc\":{\"start\":{\"line\":2,\"column\":32},\"end\":{\"line\":2,\"column\":38}}}) : helper)))\n    + \"\\\">\\r\\n          \\r\\n            <ul class=\\\"container-title-list\\\">\\r\\n            <li>\\r\\n                <svg class=\\\"table-row-svg\\\" viewBox=\\\"\"\n    + alias4(((helper = (helper = lookupProperty(helpers,\"viewBox\") || (depth0 != null ? lookupProperty(depth0,\"viewBox\") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{\"name\":\"viewBox\",\"hash\":{},\"data\":data,\"loc\":{\"start\":{\"line\":6,\"column\":52},\"end\":{\"line\":6,\"column\":63}}}) : helper)))\n    + \"\\\">\\r\\n                <path d=\\\"\"\n    + alias4(((helper = (helper = lookupProperty(helpers,\"pathD\") || (depth0 != null ? lookupProperty(depth0,\"pathD\") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{\"name\":\"pathD\",\"hash\":{},\"data\":data,\"loc\":{\"start\":{\"line\":7,\"column\":25},\"end\":{\"line\":7,\"column\":34}}}) : helper)))\n    + \"\\\"></path>\\r\\n                </svg>\\r\\n            </li>\\r\\n            <li>\"\n    + alias4(((helper = (helper = lookupProperty(helpers,\"category\") || (depth0 != null ? lookupProperty(depth0,\"category\") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{\"name\":\"category\",\"hash\":{},\"data\":data,\"loc\":{\"start\":{\"line\":10,\"column\":16},\"end\":{\"line\":10,\"column\":28}}}) : helper)))\n    + \"</li>\\r\\n            <li class=\\\"is-activ-item\\\">\"\n    + alias4(((helper = (helper = lookupProperty(helpers,\"isActiv\") || (depth0 != null ? lookupProperty(depth0,\"isActiv\") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{\"name\":\"isActiv\",\"hash\":{},\"data\":data,\"loc\":{\"start\":{\"line\":11,\"column\":38},\"end\":{\"line\":11,\"column\":49}}}) : helper)))\n    + \"</li>\\r\\n            <li >\"\n    + alias4(((helper = (helper = lookupProperty(helpers,\"isArchiv\") || (depth0 != null ? lookupProperty(depth0,\"isArchiv\") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{\"name\":\"isArchiv\",\"hash\":{},\"data\":data,\"loc\":{\"start\":{\"line\":12,\"column\":17},\"end\":{\"line\":12,\"column\":29}}}) : helper)))\n    + \"</li>\\r\\n            </ul>\\r\\n   \\r\\n</li>\\r\\n\";\n},\"compiler\":[8,\">= 4.3.0\"],\"main\":function(container,depth0,helpers,partials,data) {\n    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {\n        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {\n          return parent[propertyName];\n        }\n        return undefined\n    };\n\n  return ((stack1 = lookupProperty(helpers,\"each\").call(depth0 != null ? depth0 : (container.nullContext || {}),depth0,{\"name\":\"each\",\"hash\":{},\"fn\":container.program(1, data, 0),\"inverse\":container.noop,\"data\":data,\"loc\":{\"start\":{\"line\":1,\"column\":0},\"end\":{\"line\":16,\"column\":9}}})) != null ? stack1 : \"\")\n    + \"\\r\\n\";\n},\"useData\":true});\n\n//# sourceURL=webpack://test-notes/./src/templates/list-archiv.hbs?");

/***/ }),

/***/ "./src/templates/list-title.hbs":
/*!**************************************!*\
  !*** ./src/templates/list-title.hbs ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var Handlebars = __webpack_require__(/*! ../../node_modules/handlebars/runtime.js */ \"./node_modules/handlebars/runtime.js\");\nfunction __default(obj) { return obj && (obj.__esModule ? obj[\"default\"] : obj); }\nmodule.exports = (Handlebars[\"default\"] || Handlebars).template({\"1\":function(container,depth0,helpers,partials,data) {\n    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=\"function\", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {\n        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {\n          return parent[propertyName];\n        }\n        return undefined\n    };\n\n  return \"<li class=\\\"container-items\\\" id=\\\"\"\n    + alias4(((helper = (helper = lookupProperty(helpers,\"id\") || (depth0 != null ? lookupProperty(depth0,\"id\") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{\"name\":\"id\",\"hash\":{},\"data\":data,\"loc\":{\"start\":{\"line\":2,\"column\":32},\"end\":{\"line\":2,\"column\":38}}}) : helper)))\n    + \"\\\">\\n          \\n            <ul class=\\\"container-title-list\\\">\\n            <li>\\n                <svg class=\\\"table-row-svg\\\" viewBox=\\\"\"\n    + alias4(((helper = (helper = lookupProperty(helpers,\"viewBox\") || (depth0 != null ? lookupProperty(depth0,\"viewBox\") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{\"name\":\"viewBox\",\"hash\":{},\"data\":data,\"loc\":{\"start\":{\"line\":6,\"column\":52},\"end\":{\"line\":6,\"column\":63}}}) : helper)))\n    + \"\\\">\\n                <path d=\\\"\"\n    + alias4(((helper = (helper = lookupProperty(helpers,\"pathD\") || (depth0 != null ? lookupProperty(depth0,\"pathD\") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{\"name\":\"pathD\",\"hash\":{},\"data\":data,\"loc\":{\"start\":{\"line\":7,\"column\":25},\"end\":{\"line\":7,\"column\":34}}}) : helper)))\n    + \"\\\"></path>\\n                </svg>\\n            </li>\\n            <li>\"\n    + alias4(((helper = (helper = lookupProperty(helpers,\"name\") || (depth0 != null ? lookupProperty(depth0,\"name\") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{\"name\":\"name\",\"hash\":{},\"data\":data,\"loc\":{\"start\":{\"line\":10,\"column\":16},\"end\":{\"line\":10,\"column\":24}}}) : helper)))\n    + \"</li>\\n            <li>\"\n    + alias4(((helper = (helper = lookupProperty(helpers,\"created\") || (depth0 != null ? lookupProperty(depth0,\"created\") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{\"name\":\"created\",\"hash\":{},\"data\":data,\"loc\":{\"start\":{\"line\":11,\"column\":16},\"end\":{\"line\":11,\"column\":27}}}) : helper)))\n    + \"</li>\\n            <li>\"\n    + alias4(((helper = (helper = lookupProperty(helpers,\"category\") || (depth0 != null ? lookupProperty(depth0,\"category\") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{\"name\":\"category\",\"hash\":{},\"data\":data,\"loc\":{\"start\":{\"line\":12,\"column\":16},\"end\":{\"line\":12,\"column\":28}}}) : helper)))\n    + \"</li>\\n            <li>\"\n    + alias4(((helper = (helper = lookupProperty(helpers,\"content\") || (depth0 != null ? lookupProperty(depth0,\"content\") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{\"name\":\"content\",\"hash\":{},\"data\":data,\"loc\":{\"start\":{\"line\":13,\"column\":16},\"end\":{\"line\":13,\"column\":27}}}) : helper)))\n    + \"</li>\\n            <li>\"\n    + alias4(((helper = (helper = lookupProperty(helpers,\"data\") || (depth0 != null ? lookupProperty(depth0,\"data\") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{\"name\":\"data\",\"hash\":{},\"data\":data,\"loc\":{\"start\":{\"line\":14,\"column\":16},\"end\":{\"line\":14,\"column\":24}}}) : helper)))\n    + \"</li>\\n\\n\\n            </ul>\\n            <div class=\\\"container-title-images\\\">\\n                                   \\n                    <svg id=\\\"write\\\" class=\\\"title-image-list write-btn\\\" width=\\\"32\\\" height=\\\"32\\\" viewBox=\\\"0 0 32 32\\\">\\n                     <path id=\\\"write\\\" d=\\\"M27 0c2.761 0 5 2.239 5 5 0 1.126-0.372 2.164-1 3l-2 2-7-7 2-2c0.836-0.628 1.874-1 3-1zM2 23l-2 9 9-2 18.5-18.5-7-7-18.5 18.5zM22.362 11.362l-14 14-1.724-1.724 14-14 1.724 1.724z\\\"></path>\\n                    </svg>\\n                    \\n                                                  \\n                    <svg id=\\\"archiv\\\"  class=\\\"title-image-list\\\" width=\\\"32\\\" height=\\\"32\\\" viewBox=\\\"0 0 32 32\\\">\\n                    <path id=\\\"archiv\\\" d=\\\"M26 2h-20l-6 6v21c0 0.552 0.448 1 1 1h30c0.552 0 1-0.448 1-1v-21l-6-6zM16 26l-10-8h6v-6h8v6h6l-10 8zM4.828 6l2-2h18.343l2 2h-22.343z\\\"></path>\\n                    </svg>\\n                    \\n                                                   \\n                    <svg  id=\\\"remove\\\" class=\\\"title-image-list\\\" width=\\\"32\\\" height=\\\"32\\\" viewBox=\\\"0 0 32 32\\\">\\n                    <path id=\\\"remove\\\" d=\\\"M6 32h20l2-22h-24zM20 4v-4h-8v4h-10v6l2-2h24l2 2v-6h-10zM18 4h-4v-2h4v2z\\\"></path>\\n                    </svg>\\n                    \\n                \\n            </div>\\n   \\n</li>\\n\";\n},\"compiler\":[8,\">= 4.3.0\"],\"main\":function(container,depth0,helpers,partials,data) {\n    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {\n        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {\n          return parent[propertyName];\n        }\n        return undefined\n    };\n\n  return ((stack1 = lookupProperty(helpers,\"each\").call(depth0 != null ? depth0 : (container.nullContext || {}),depth0,{\"name\":\"each\",\"hash\":{},\"fn\":container.program(1, data, 0),\"inverse\":container.noop,\"data\":data,\"loc\":{\"start\":{\"line\":1,\"column\":0},\"end\":{\"line\":38,\"column\":9}}})) != null ? stack1 : \"\")\n    + \"\\n\";\n},\"useData\":true});\n\n//# sourceURL=webpack://test-notes/./src/templates/list-title.hbs?");

/***/ }),

/***/ "./src/sass/main.scss":
/*!****************************!*\
  !*** ./src/sass/main.scss ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/main.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\nif (true) {\n  if (!_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals || module.hot.invalidate) {\n    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {\n  if (!a && b || a && !b) {\n    return false;\n  }\n\n  var p;\n\n  for (p in a) {\n    if (isNamedExport && p === \"default\") {\n      // eslint-disable-next-line no-continue\n      continue;\n    }\n\n    if (a[p] !== b[p]) {\n      return false;\n    }\n  }\n\n  for (p in b) {\n    if (isNamedExport && p === \"default\") {\n      // eslint-disable-next-line no-continue\n      continue;\n    }\n\n    if (!a[p]) {\n      return false;\n    }\n  }\n\n  return true;\n};\n    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals;\n    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals;\n\n    module.hot.accept(\n      /*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/main.scss\",\n      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/main.scss\");\n(function () {\n        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals, isNamedExport)) {\n                module.hot.invalidate();\n\n                return;\n              }\n\n              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals;\n\n              update(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"]);\n      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }\n    )\n  }\n\n  module.hot.dispose(function() {\n    update();\n  });\n}\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://test-notes/./src/sass/main.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://test-notes/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://test-notes/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://test-notes/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://test-notes/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://test-notes/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://test-notes/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/js/db.json":
/*!************************!*\
  !*** ./src/js/db.json ***!
  \************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"users\":[{\"id\":1,\"name\":\"Shopping list\",\"created\":\"April 20,2020\",\"category\":\"Task\",\"content\":[\"tomatos\",\"bread\"],\"data\":[],\"viewBox\":\"-8 -8 35 35\",\"pathD\":\"M4 2h16l-3 9h-13c-0.552 0-1 0.448-1 1s0.448 1 1 1v0h13v2h-13c-1.657 0-3-1.343-3-3s1.343-3 3-3v0h0.33l-1.33-4-1-3h-2v-2h3c0.552 0 1 0.448 1 1v0 1zM5 20c-1.105 0-2-0.895-2-2s0.895-2 2-2v0c1.105 0 2 0.895 2 2s-0.895 2-2 2v0zM15 20c-1.105 0-2-0.895-2-2s0.895-2 2-2v0c1.105 0 2 0.895 2 2s-0.895 2-2 2v0z\",\"isActiv\":true,\"isArchiv\":false},{\"id\":2,\"name\":\"The Teory of evolution\",\"created\":\"April 27,2020\",\"category\":\"Random Thought\",\"content\":[\"The evolution\"],\"data\":[],\"viewBox\":\"-3 -3 30 30\",\"pathD\":\"M12.984 8.578q-0.563 0-0.984 0.422t-0.422 0.984q0 0.609 0.422 1.031t0.984 0.422q0.609 0 1.031-0.422t0.422-1.031q0-0.563-0.422-0.984t-1.031-0.422zM12.984 3q-1.406 0-2.625 0.516t-2.18 1.43-1.523 2.109-0.656 2.602l-1.922 2.531q-0.188 0.281-0.047 0.539t0.469 0.258h1.5v3q0 0.844 0.586 1.43t1.43 0.586h0.984v3h6.984v-4.688q1.781-0.844 2.906-2.531t1.125-3.797q0-1.453-0.563-2.719t-1.523-2.227-2.227-1.5-2.719-0.539zM15.984 9.984v0.422l0.844 0.656q0.094 0.094 0.047 0.234l-0.797 1.406q-0.094 0.141-0.281 0.094l-0.984-0.422q-0.281 0.234-0.656 0.375l-0.141 1.078q-0.047 0.188-0.234 0.188h-1.594q-0.141 0-0.188-0.188l-0.141-1.078q-0.375-0.141-0.703-0.375l-0.984 0.422q-0.141 0.047-0.234-0.094l-0.797-1.406q-0.094-0.141 0.047-0.234l0.844-0.656q0-0.094-0.023-0.211t-0.023-0.211 0.023-0.188 0.023-0.188l-0.844-0.656q-0.141-0.094-0.047-0.281l0.797-1.359q0.094-0.141 0.234-0.094l1.031 0.422q0.328-0.281 0.656-0.422l0.141-1.031q0.047-0.188 0.188-0.188h1.594q0.188 0 0.234 0.188l0.141 1.031q0.328 0.141 0.656 0.422l0.984-0.422q0.188-0.047 0.281 0.094l0.797 1.359q0.094 0.188-0.047 0.281l-0.891 0.656q0.047 0.141 0.047 0.375z\",\"isActiv\":true,\"isArchiv\":false},{\"id\":3,\"name\":\"New Feature\",\"created\":\"May 05,2020\",\"category\":\"Idea\",\"content\":[\"Implement new\"],\"data\":[\"3/5/2021\",\"5/5/2021\"],\"viewBox\":\"-3 -3 30 30\",\"pathD\":\"M14.859 13.078q2.156-1.5 2.156-4.078 0-2.063-1.477-3.539t-3.539-1.477-3.539 1.477-1.477 3.539q0 1.078 0.633 2.25t1.523 1.828l0.844 0.609v2.297h4.031v-2.297zM12 2.016q2.906 0 4.945 2.039t2.039 4.945q0 3.656-3 5.719v2.297q0 0.422-0.281 0.703t-0.703 0.281h-6q-0.422 0-0.703-0.281t-0.281-0.703v-2.297q-3-2.063-3-5.719 0-2.906 2.039-4.945t4.945-2.039zM9 21v-0.984h6v0.984q0 0.422-0.281 0.703t-0.703 0.281h-4.031q-0.422 0-0.703-0.281t-0.281-0.703z\",\"isActiv\":true,\"isArchiv\":false},{\"id\":4,\"name\":\"William Gaddis\",\"created\":\"May 07,2020\",\"category\":\"Quote\",\"content\":[\"Power doesent co...\"],\"data\":[],\"viewBox\":\"-3 -3 30 30\",\"pathD\":\"M14.016 17.016l1.969-4.031h-3v-6h6v6l-1.969 4.031h-3zM6 17.016l2.016-4.031h-3v-6h6v6l-2.016 4.031h-3z\",\"isActiv\":true,\"isArchiv\":false},{\"id\":5,\"name\":\"Books\",\"created\":\"May 15,2020\",\"category\":\"Task\",\"content\":[\"The Learn StartUp\"],\"data\":[],\"viewBox\":\"-8 -8 35 35\",\"pathD\":\"M4 2h16l-3 9h-13c-0.552 0-1 0.448-1 1s0.448 1 1 1v0h13v2h-13c-1.657 0-3-1.343-3-3s1.343-3 3-3v0h0.33l-1.33-4-1-3h-2v-2h3c0.552 0 1 0.448 1 1v0 1zM5 20c-1.105 0-2-0.895-2-2s0.895-2 2-2v0c1.105 0 2 0.895 2 2s-0.895 2-2 2v0zM15 20c-1.105 0-2-0.895-2-2s0.895-2 2-2v0c1.105 0 2 0.895 2 2s-0.895 2-2 2v0z\",\"isActiv\":true,\"isArchiv\":false},{\"id\":6,\"name\":\"Shopping list\",\"created\":\"April 20,2020\",\"category\":\"Task\",\"content\":[\"tomatos\",\"bread\"],\"data\":[],\"viewBox\":\"-8 -8 35 35\",\"pathD\":\"M4 2h16l-3 9h-13c-0.552 0-1 0.448-1 1s0.448 1 1 1v0h13v2h-13c-1.657 0-3-1.343-3-3s1.343-3 3-3v0h0.33l-1.33-4-1-3h-2v-2h3c0.552 0 1 0.448 1 1v0 1zM5 20c-1.105 0-2-0.895-2-2s0.895-2 2-2v0c1.105 0 2 0.895 2 2s-0.895 2-2 2v0zM15 20c-1.105 0-2-0.895-2-2s0.895-2 2-2v0c1.105 0 2 0.895 2 2s-0.895 2-2 2v0z\",\"isActiv\":false,\"isArchiv\":true},{\"id\":7,\"name\":\"The Teory of evolution\",\"created\":\"April 27,2020\",\"category\":\"Random Thought\",\"content\":[\"The evolution\"],\"data\":[],\"viewBox\":\"-3 -3 30 30\",\"pathD\":\"M12.984 8.578q-0.563 0-0.984 0.422t-0.422 0.984q0 0.609 0.422 1.031t0.984 0.422q0.609 0 1.031-0.422t0.422-1.031q0-0.563-0.422-0.984t-1.031-0.422zM12.984 3q-1.406 0-2.625 0.516t-2.18 1.43-1.523 2.109-0.656 2.602l-1.922 2.531q-0.188 0.281-0.047 0.539t0.469 0.258h1.5v3q0 0.844 0.586 1.43t1.43 0.586h0.984v3h6.984v-4.688q1.781-0.844 2.906-2.531t1.125-3.797q0-1.453-0.563-2.719t-1.523-2.227-2.227-1.5-2.719-0.539zM15.984 9.984v0.422l0.844 0.656q0.094 0.094 0.047 0.234l-0.797 1.406q-0.094 0.141-0.281 0.094l-0.984-0.422q-0.281 0.234-0.656 0.375l-0.141 1.078q-0.047 0.188-0.234 0.188h-1.594q-0.141 0-0.188-0.188l-0.141-1.078q-0.375-0.141-0.703-0.375l-0.984 0.422q-0.141 0.047-0.234-0.094l-0.797-1.406q-0.094-0.141 0.047-0.234l0.844-0.656q0-0.094-0.023-0.211t-0.023-0.211 0.023-0.188 0.023-0.188l-0.844-0.656q-0.141-0.094-0.047-0.281l0.797-1.359q0.094-0.141 0.234-0.094l1.031 0.422q0.328-0.281 0.656-0.422l0.141-1.031q0.047-0.188 0.188-0.188h1.594q0.188 0 0.234 0.188l0.141 1.031q0.328 0.141 0.656 0.422l0.984-0.422q0.188-0.047 0.281 0.094l0.797 1.359q0.094 0.188-0.047 0.281l-0.891 0.656q0.047 0.141 0.047 0.375z\",\"isActiv\":false,\"isArchiv\":true},{\"id\":8,\"name\":\"New Feature\",\"created\":\"May 05,2020\",\"category\":\"Idea\",\"content\":[\"Implement new\"],\"data\":[\"3/5/2021\",\"5/5/2021\"],\"viewBox\":\"-3 -3 30 30\",\"pathD\":\"M14.859 13.078q2.156-1.5 2.156-4.078 0-2.063-1.477-3.539t-3.539-1.477-3.539 1.477-1.477 3.539q0 1.078 0.633 2.25t1.523 1.828l0.844 0.609v2.297h4.031v-2.297zM12 2.016q2.906 0 4.945 2.039t2.039 4.945q0 3.656-3 5.719v2.297q0 0.422-0.281 0.703t-0.703 0.281h-6q-0.422 0-0.703-0.281t-0.281-0.703v-2.297q-3-2.063-3-5.719 0-2.906 2.039-4.945t4.945-2.039zM9 21v-0.984h6v0.984q0 0.422-0.281 0.703t-0.703 0.281h-4.031q-0.422 0-0.703-0.281t-0.281-0.703z\",\"isActiv\":false,\"isArchiv\":true},{\"id\":9,\"name\":\"William Gaddis\",\"created\":\"May 07,2020\",\"category\":\"Quote\",\"content\":[\"Power doesent co...\"],\"data\":[],\"viewBox\":\"-3 -3 30 30\",\"pathD\":\"M14.016 17.016l1.969-4.031h-3v-6h6v6l-1.969 4.031h-3zM6 17.016l2.016-4.031h-3v-6h6v6l-2.016 4.031h-3z\",\"isActiv\":false,\"isArchiv\":true},{\"id\":10,\"name\":\"Books\",\"created\":\"May 15,2020\",\"category\":\"Task\",\"content\":[\"The Learn StartUp\"],\"data\":[],\"viewBox\":\"-8 -8 35 35\",\"pathD\":\"M4 2h16l-3 9h-13c-0.552 0-1 0.448-1 1s0.448 1 1 1v0h13v2h-13c-1.657 0-3-1.343-3-3s1.343-3 3-3v0h0.33l-1.33-4-1-3h-2v-2h3c0.552 0 1 0.448 1 1v0 1zM5 20c-1.105 0-2-0.895-2-2s0.895-2 2-2v0c1.105 0 2 0.895 2 2s-0.895 2-2 2v0zM15 20c-1.105 0-2-0.895-2-2s0.895-2 2-2v0c1.105 0 2 0.895 2 2s-0.895 2-2 2v0z\",\"isActiv\":false,\"isArchiv\":true},{\"id\":11,\"name\":\"Shopping list\",\"created\":\"April 20,2020\",\"category\":\"Task\",\"content\":[\"tomatos\",\"bread\"],\"data\":[],\"viewBox\":\"-8 -8 35 35\",\"pathD\":\"M4 2h16l-3 9h-13c-0.552 0-1 0.448-1 1s0.448 1 1 1v0h13v2h-13c-1.657 0-3-1.343-3-3s1.343-3 3-3v0h0.33l-1.33-4-1-3h-2v-2h3c0.552 0 1 0.448 1 1v0 1zM5 20c-1.105 0-2-0.895-2-2s0.895-2 2-2v0c1.105 0 2 0.895 2 2s-0.895 2-2 2v0zM15 20c-1.105 0-2-0.895-2-2s0.895-2 2-2v0c1.105 0 2 0.895 2 2s-0.895 2-2 2v0z\",\"isActiv\":false,\"isArchiv\":true},{\"id\":12,\"name\":\"The Teory of evolution\",\"created\":\"April 27,2020\",\"category\":\"Random Thought\",\"content\":[\"The evolution\"],\"data\":[],\"viewBox\":\"-3 -3 30 30\",\"pathD\":\"M12.984 8.578q-0.563 0-0.984 0.422t-0.422 0.984q0 0.609 0.422 1.031t0.984 0.422q0.609 0 1.031-0.422t0.422-1.031q0-0.563-0.422-0.984t-1.031-0.422zM12.984 3q-1.406 0-2.625 0.516t-2.18 1.43-1.523 2.109-0.656 2.602l-1.922 2.531q-0.188 0.281-0.047 0.539t0.469 0.258h1.5v3q0 0.844 0.586 1.43t1.43 0.586h0.984v3h6.984v-4.688q1.781-0.844 2.906-2.531t1.125-3.797q0-1.453-0.563-2.719t-1.523-2.227-2.227-1.5-2.719-0.539zM15.984 9.984v0.422l0.844 0.656q0.094 0.094 0.047 0.234l-0.797 1.406q-0.094 0.141-0.281 0.094l-0.984-0.422q-0.281 0.234-0.656 0.375l-0.141 1.078q-0.047 0.188-0.234 0.188h-1.594q-0.141 0-0.188-0.188l-0.141-1.078q-0.375-0.141-0.703-0.375l-0.984 0.422q-0.141 0.047-0.234-0.094l-0.797-1.406q-0.094-0.141 0.047-0.234l0.844-0.656q0-0.094-0.023-0.211t-0.023-0.211 0.023-0.188 0.023-0.188l-0.844-0.656q-0.141-0.094-0.047-0.281l0.797-1.359q0.094-0.141 0.234-0.094l1.031 0.422q0.328-0.281 0.656-0.422l0.141-1.031q0.047-0.188 0.188-0.188h1.594q0.188 0 0.234 0.188l0.141 1.031q0.328 0.141 0.656 0.422l0.984-0.422q0.188-0.047 0.281 0.094l0.797 1.359q0.094 0.188-0.047 0.281l-0.891 0.656q0.047 0.141 0.047 0.375z\",\"isActiv\":false,\"isArchiv\":false},{\"id\":13,\"name\":\"New Feature\",\"created\":\"May 05,2020\",\"category\":\"Idea\",\"content\":[\"Implement new\"],\"data\":[\"3/5/2021\",\"5/5/2021\"],\"viewBox\":\"-3 -3 30 30\",\"pathD\":\"M14.859 13.078q2.156-1.5 2.156-4.078 0-2.063-1.477-3.539t-3.539-1.477-3.539 1.477-1.477 3.539q0 1.078 0.633 2.25t1.523 1.828l0.844 0.609v2.297h4.031v-2.297zM12 2.016q2.906 0 4.945 2.039t2.039 4.945q0 3.656-3 5.719v2.297q0 0.422-0.281 0.703t-0.703 0.281h-6q-0.422 0-0.703-0.281t-0.281-0.703v-2.297q-3-2.063-3-5.719 0-2.906 2.039-4.945t4.945-2.039zM9 21v-0.984h6v0.984q0 0.422-0.281 0.703t-0.703 0.281h-4.031q-0.422 0-0.703-0.281t-0.281-0.703z\",\"isActiv\":false,\"isArchiv\":false},{\"id\":14,\"name\":\"William Gaddis\",\"created\":\"May 07,2020\",\"category\":\"Quote\",\"content\":[\"Power doesent co...\"],\"data\":[],\"viewBox\":\"-3 -3 30 30\",\"pathD\":\"M14.016 17.016l1.969-4.031h-3v-6h6v6l-1.969 4.031h-3zM6 17.016l2.016-4.031h-3v-6h6v6l-2.016 4.031h-3z\",\"isActiv\":false,\"isArchiv\":false},{\"id\":15,\"name\":\"Books\",\"created\":\"May 15,2020\",\"category\":\"Task\",\"content\":[\"The Learn StartUp\"],\"data\":[],\"viewBox\":\"-8 -8 35 35\",\"pathD\":\"M4 2h16l-3 9h-13c-0.552 0-1 0.448-1 1s0.448 1 1 1v0h13v2h-13c-1.657 0-3-1.343-3-3s1.343-3 3-3v0h0.33l-1.33-4-1-3h-2v-2h3c0.552 0 1 0.448 1 1v0 1zM5 20c-1.105 0-2-0.895-2-2s0.895-2 2-2v0c1.105 0 2 0.895 2 2s-0.895 2-2 2v0zM15 20c-1.105 0-2-0.895-2-2s0.895-2 2-2v0c1.105 0 2 0.895 2 2s-0.895 2-2 2v0z\",\"isActiv\":false,\"isArchiv\":false}]}');\n\n//# sourceURL=webpack://test-notes/./src/js/db.json?");

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
/******/ 			if (cachedModule.error !== undefined) throw cachedModule.error;
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		try {
/******/ 			var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 			__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 			module = execOptions.module;
/******/ 			execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 		} catch(e) {
/******/ 			module.error = e;
/******/ 			throw e;
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.hu = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + __webpack_require__.h() + ".hot-update.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	(() => {
/******/ 		__webpack_require__.hmrF = () => ("main." + __webpack_require__.h() + ".hot-update.json");
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("ae136f457403fb858cc7")
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
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "test-notes:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
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
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	(() => {
/******/ 		var currentModuleData = {};
/******/ 		var installedModules = __webpack_require__.c;
/******/ 		
/******/ 		// module and require creation
/******/ 		var currentChildModule;
/******/ 		var currentParents = [];
/******/ 		
/******/ 		// status
/******/ 		var registeredStatusHandlers = [];
/******/ 		var currentStatus = "idle";
/******/ 		
/******/ 		// while downloading
/******/ 		var blockingPromises;
/******/ 		
/******/ 		// The update info
/******/ 		var currentUpdateApplyHandlers;
/******/ 		var queuedInvalidatedModules;
/******/ 		
/******/ 		// eslint-disable-next-line no-unused-vars
/******/ 		__webpack_require__.hmrD = currentModuleData;
/******/ 		
/******/ 		__webpack_require__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
/******/ 		});
/******/ 		
/******/ 		__webpack_require__.hmrC = {};
/******/ 		__webpack_require__.hmrI = {};
/******/ 		
/******/ 		function createRequire(require, moduleId) {
/******/ 			var me = installedModules[moduleId];
/******/ 			if (!me) return require;
/******/ 			var fn = function (request) {
/******/ 				if (me.hot.active) {
/******/ 					if (installedModules[request]) {
/******/ 						var parents = installedModules[request].parents;
/******/ 						if (parents.indexOf(moduleId) === -1) {
/******/ 							parents.push(moduleId);
/******/ 						}
/******/ 					} else {
/******/ 						currentParents = [moduleId];
/******/ 						currentChildModule = request;
/******/ 					}
/******/ 					if (me.children.indexOf(request) === -1) {
/******/ 						me.children.push(request);
/******/ 					}
/******/ 				} else {
/******/ 					console.warn(
/******/ 						"[HMR] unexpected require(" +
/******/ 							request +
/******/ 							") from disposed module " +
/******/ 							moduleId
/******/ 					);
/******/ 					currentParents = [];
/******/ 				}
/******/ 				return require(request);
/******/ 			};
/******/ 			var createPropertyDescriptor = function (name) {
/******/ 				return {
/******/ 					configurable: true,
/******/ 					enumerable: true,
/******/ 					get: function () {
/******/ 						return require[name];
/******/ 					},
/******/ 					set: function (value) {
/******/ 						require[name] = value;
/******/ 					}
/******/ 				};
/******/ 			};
/******/ 			for (var name in require) {
/******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 				}
/******/ 			}
/******/ 			fn.e = function (chunkId) {
/******/ 				return trackBlockingPromise(require.e(chunkId));
/******/ 			};
/******/ 			return fn;
/******/ 		}
/******/ 		
/******/ 		function createModuleHotObject(moduleId, me) {
/******/ 			var _main = currentChildModule !== moduleId;
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_acceptedErrorHandlers: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: _main,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = _main ? undefined : moduleId;
/******/ 					__webpack_require__(moduleId);
/******/ 				},
/******/ 		
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback, errorHandler) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null) {
/******/ 						for (var i = 0; i < dep.length; i++) {
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 							hot._acceptedErrorHandlers[dep[i]] = errorHandler;
/******/ 						}
/******/ 					} else {
/******/ 						hot._acceptedDependencies[dep] = callback || function () {};
/******/ 						hot._acceptedErrorHandlers[dep] = errorHandler;
/******/ 					}
/******/ 				},
/******/ 				decline: function (dep) {
/******/ 					if (dep === undefined) hot._selfDeclined = true;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._declinedDependencies[dep[i]] = true;
/******/ 					else hot._declinedDependencies[dep] = true;
/******/ 				},
/******/ 				dispose: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				addDisposeHandler: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				removeDisposeHandler: function (callback) {
/******/ 					var idx = hot._disposeHandlers.indexOf(callback);
/******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 				},
/******/ 				invalidate: function () {
/******/ 					this._selfInvalidated = true;
/******/ 					switch (currentStatus) {
/******/ 						case "idle":
/******/ 							currentUpdateApplyHandlers = [];
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							break;
/******/ 						case "prepare":
/******/ 						case "check":
/******/ 						case "dispose":
/******/ 						case "apply":
/******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 								moduleId
/******/ 							);
/******/ 							break;
/******/ 						default:
/******/ 							// ignore requests in error states
/******/ 							break;
/******/ 					}
/******/ 				},
/******/ 		
/******/ 				// Management API
/******/ 				check: hotCheck,
/******/ 				apply: hotApply,
/******/ 				status: function (l) {
/******/ 					if (!l) return currentStatus;
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				addStatusHandler: function (l) {
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				removeStatusHandler: function (l) {
/******/ 					var idx = registeredStatusHandlers.indexOf(l);
/******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 				},
/******/ 		
/******/ 				//inherit from previous dispose call
/******/ 				data: currentModuleData[moduleId]
/******/ 			};
/******/ 			currentChildModule = undefined;
/******/ 			return hot;
/******/ 		}
/******/ 		
/******/ 		function setStatus(newStatus) {
/******/ 			currentStatus = newStatus;
/******/ 			var results = [];
/******/ 		
/******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 				results[i] = registeredStatusHandlers[i].call(null, newStatus);
/******/ 		
/******/ 			return Promise.all(results);
/******/ 		}
/******/ 		
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 					blockingPromises.push(promise);
/******/ 					waitForBlockingPromises(function () {
/******/ 						return setStatus("ready");
/******/ 					});
/******/ 					return promise;
/******/ 				case "prepare":
/******/ 					blockingPromises.push(promise);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises.length === 0) return fn();
/******/ 			var blocker = blockingPromises;
/******/ 			blockingPromises = [];
/******/ 			return Promise.all(blocker).then(function () {
/******/ 				return waitForBlockingPromises(fn);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotCheck(applyOnUpdate) {
/******/ 			if (currentStatus !== "idle") {
/******/ 				throw new Error("check() is only allowed in idle status");
/******/ 			}
/******/ 			return setStatus("check")
/******/ 				.then(__webpack_require__.hmrM)
/******/ 				.then(function (update) {
/******/ 					if (!update) {
/******/ 						return setStatus(applyInvalidatedModules() ? "ready" : "idle").then(
/******/ 							function () {
/******/ 								return null;
/******/ 							}
/******/ 						);
/******/ 					}
/******/ 		
/******/ 					return setStatus("prepare").then(function () {
/******/ 						var updatedModules = [];
/******/ 						blockingPromises = [];
/******/ 						currentUpdateApplyHandlers = [];
/******/ 		
/******/ 						return Promise.all(
/******/ 							Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 								promises,
/******/ 								key
/******/ 							) {
/******/ 								__webpack_require__.hmrC[key](
/******/ 									update.c,
/******/ 									update.r,
/******/ 									update.m,
/******/ 									promises,
/******/ 									currentUpdateApplyHandlers,
/******/ 									updatedModules
/******/ 								);
/******/ 								return promises;
/******/ 							},
/******/ 							[])
/******/ 						).then(function () {
/******/ 							return waitForBlockingPromises(function () {
/******/ 								if (applyOnUpdate) {
/******/ 									return internalApply(applyOnUpdate);
/******/ 								} else {
/******/ 									return setStatus("ready").then(function () {
/******/ 										return updatedModules;
/******/ 									});
/******/ 								}
/******/ 							});
/******/ 						});
/******/ 					});
/******/ 				});
/******/ 		}
/******/ 		
/******/ 		function hotApply(options) {
/******/ 			if (currentStatus !== "ready") {
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw new Error("apply() is only allowed in ready status");
/******/ 				});
/******/ 			}
/******/ 			return internalApply(options);
/******/ 		}
/******/ 		
/******/ 		function internalApply(options) {
/******/ 			options = options || {};
/******/ 		
/******/ 			applyInvalidatedModules();
/******/ 		
/******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 				return handler(options);
/******/ 			});
/******/ 			currentUpdateApplyHandlers = undefined;
/******/ 		
/******/ 			var errors = results
/******/ 				.map(function (r) {
/******/ 					return r.error;
/******/ 				})
/******/ 				.filter(Boolean);
/******/ 		
/******/ 			if (errors.length > 0) {
/******/ 				return setStatus("abort").then(function () {
/******/ 					throw errors[0];
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			// Now in "dispose" phase
/******/ 			var disposePromise = setStatus("dispose");
/******/ 		
/******/ 			results.forEach(function (result) {
/******/ 				if (result.dispose) result.dispose();
/******/ 			});
/******/ 		
/******/ 			// Now in "apply" phase
/******/ 			var applyPromise = setStatus("apply");
/******/ 		
/******/ 			var error;
/******/ 			var reportError = function (err) {
/******/ 				if (!error) error = err;
/******/ 			};
/******/ 		
/******/ 			var outdatedModules = [];
/******/ 			results.forEach(function (result) {
/******/ 				if (result.apply) {
/******/ 					var modules = result.apply(reportError);
/******/ 					if (modules) {
/******/ 						for (var i = 0; i < modules.length; i++) {
/******/ 							outdatedModules.push(modules[i]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			});
/******/ 		
/******/ 			return Promise.all([disposePromise, applyPromise]).then(function () {
/******/ 				// handle errors in accept handlers and self accepted module load
/******/ 				if (error) {
/******/ 					return setStatus("fail").then(function () {
/******/ 						throw error;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				if (queuedInvalidatedModules) {
/******/ 					return internalApply(options).then(function (list) {
/******/ 						outdatedModules.forEach(function (moduleId) {
/******/ 							if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 						});
/******/ 						return list;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				return setStatus("idle").then(function () {
/******/ 					return outdatedModules;
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function applyInvalidatedModules() {
/******/ 			if (queuedInvalidatedModules) {
/******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__webpack_require__.hmrI[key](
/******/ 							moduleId,
/******/ 							currentUpdateApplyHandlers
/******/ 						);
/******/ 					});
/******/ 				});
/******/ 				queuedInvalidatedModules = undefined;
/******/ 				return true;
/******/ 			}
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = __webpack_require__.hmrS_jsonp = __webpack_require__.hmrS_jsonp || {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		var currentUpdatedModulesList;
/******/ 		var waitingUpdateResolves = {};
/******/ 		function loadUpdateChunk(chunkId) {
/******/ 			return new Promise((resolve, reject) => {
/******/ 				waitingUpdateResolves[chunkId] = resolve;
/******/ 				// start update chunk loading
/******/ 				var url = __webpack_require__.p + __webpack_require__.hu(chunkId);
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				var loadingEnded = (event) => {
/******/ 					if(waitingUpdateResolves[chunkId]) {
/******/ 						waitingUpdateResolves[chunkId] = undefined
/******/ 						var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 						var realSrc = event && event.target && event.target.src;
/******/ 						error.message = 'Loading hot update chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 						error.name = 'ChunkLoadError';
/******/ 						error.type = errorType;
/******/ 						error.request = realSrc;
/******/ 						reject(error);
/******/ 					}
/******/ 				};
/******/ 				__webpack_require__.l(url, loadingEnded);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		self["webpackHotUpdatetest_notes"] = (chunkId, moreModules, runtime) => {
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					currentUpdate[moduleId] = moreModules[moduleId];
/******/ 					if(currentUpdatedModulesList) currentUpdatedModulesList.push(moduleId);
/******/ 				}
/******/ 			}
/******/ 			if(runtime) currentUpdateRuntime.push(runtime);
/******/ 			if(waitingUpdateResolves[chunkId]) {
/******/ 				waitingUpdateResolves[chunkId]();
/******/ 				waitingUpdateResolves[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var currentUpdateChunks;
/******/ 		var currentUpdate;
/******/ 		var currentUpdateRemovedChunks;
/******/ 		var currentUpdateRuntime;
/******/ 		function applyHandler(options) {
/******/ 			if (__webpack_require__.f) delete __webpack_require__.f.jsonpHmr;
/******/ 			currentUpdateChunks = undefined;
/******/ 			function getAffectedModuleEffects(updateModuleId) {
/******/ 				var outdatedModules = [updateModuleId];
/******/ 				var outdatedDependencies = {};
/******/ 		
/******/ 				var queue = outdatedModules.map(function (id) {
/******/ 					return {
/******/ 						chain: [id],
/******/ 						id: id
/******/ 					};
/******/ 				});
/******/ 				while (queue.length > 0) {
/******/ 					var queueItem = queue.pop();
/******/ 					var moduleId = queueItem.id;
/******/ 					var chain = queueItem.chain;
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (
/******/ 						!module ||
/******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 					)
/******/ 						continue;
/******/ 					if (module.hot._selfDeclined) {
/******/ 						return {
/******/ 							type: "self-declined",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					if (module.hot._main) {
/******/ 						return {
/******/ 							type: "unaccepted",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					for (var i = 0; i < module.parents.length; i++) {
/******/ 						var parentId = module.parents[i];
/******/ 						var parent = __webpack_require__.c[parentId];
/******/ 						if (!parent) continue;
/******/ 						if (parent.hot._declinedDependencies[moduleId]) {
/******/ 							return {
/******/ 								type: "declined",
/******/ 								chain: chain.concat([parentId]),
/******/ 								moduleId: moduleId,
/******/ 								parentId: parentId
/******/ 							};
/******/ 						}
/******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 							if (!outdatedDependencies[parentId])
/******/ 								outdatedDependencies[parentId] = [];
/******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 							continue;
/******/ 						}
/******/ 						delete outdatedDependencies[parentId];
/******/ 						outdatedModules.push(parentId);
/******/ 						queue.push({
/******/ 							chain: chain.concat([parentId]),
/******/ 							id: parentId
/******/ 						});
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				return {
/******/ 					type: "accepted",
/******/ 					moduleId: updateModuleId,
/******/ 					outdatedModules: outdatedModules,
/******/ 					outdatedDependencies: outdatedDependencies
/******/ 				};
/******/ 			}
/******/ 		
/******/ 			function addAllToSet(a, b) {
/******/ 				for (var i = 0; i < b.length; i++) {
/******/ 					var item = b[i];
/******/ 					if (a.indexOf(item) === -1) a.push(item);
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			// at begin all updates modules are outdated
/******/ 			// the "outdated" status can propagate to parents if they don't accept the children
/******/ 			var outdatedDependencies = {};
/******/ 			var outdatedModules = [];
/******/ 			var appliedUpdate = {};
/******/ 		
/******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 				);
/******/ 			};
/******/ 		
/******/ 			for (var moduleId in currentUpdate) {
/******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 					var newModuleFactory = currentUpdate[moduleId];
/******/ 					/** @type {TODO} */
/******/ 					var result;
/******/ 					if (newModuleFactory) {
/******/ 						result = getAffectedModuleEffects(moduleId);
/******/ 					} else {
/******/ 						result = {
/******/ 							type: "disposed",
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					/** @type {Error|false} */
/******/ 					var abortError = false;
/******/ 					var doApply = false;
/******/ 					var doDispose = false;
/******/ 					var chainInfo = "";
/******/ 					if (result.chain) {
/******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 					}
/******/ 					switch (result.type) {
/******/ 						case "self-declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of self decline: " +
/******/ 										result.moduleId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of declined dependency: " +
/******/ 										result.moduleId +
/******/ 										" in " +
/******/ 										result.parentId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "unaccepted":
/******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 							if (!options.ignoreUnaccepted)
/******/ 								abortError = new Error(
/******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "accepted":
/******/ 							if (options.onAccepted) options.onAccepted(result);
/******/ 							doApply = true;
/******/ 							break;
/******/ 						case "disposed":
/******/ 							if (options.onDisposed) options.onDisposed(result);
/******/ 							doDispose = true;
/******/ 							break;
/******/ 						default:
/******/ 							throw new Error("Unexception type " + result.type);
/******/ 					}
/******/ 					if (abortError) {
/******/ 						return {
/******/ 							error: abortError
/******/ 						};
/******/ 					}
/******/ 					if (doApply) {
/******/ 						appliedUpdate[moduleId] = newModuleFactory;
/******/ 						addAllToSet(outdatedModules, result.outdatedModules);
/******/ 						for (moduleId in result.outdatedDependencies) {
/******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 								if (!outdatedDependencies[moduleId])
/******/ 									outdatedDependencies[moduleId] = [];
/******/ 								addAllToSet(
/******/ 									outdatedDependencies[moduleId],
/******/ 									result.outdatedDependencies[moduleId]
/******/ 								);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 					if (doDispose) {
/******/ 						addAllToSet(outdatedModules, [result.moduleId]);
/******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 			currentUpdate = undefined;
/******/ 		
/******/ 			// Store self accepted outdated modules to require them later by the module system
/******/ 			var outdatedSelfAcceptedModules = [];
/******/ 			for (var j = 0; j < outdatedModules.length; j++) {
/******/ 				var outdatedModuleId = outdatedModules[j];
/******/ 				var module = __webpack_require__.c[outdatedModuleId];
/******/ 				if (
/******/ 					module &&
/******/ 					(module.hot._selfAccepted || module.hot._main) &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!module.hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: module.hot._requireSelf,
/******/ 						errorHandler: module.hot._selfAccepted
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			var moduleOutdatedDependencies;
/******/ 		
/******/ 			return {
/******/ 				dispose: function () {
/******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 						delete installedChunks[chunkId];
/******/ 					});
/******/ 					currentUpdateRemovedChunks = undefined;
/******/ 		
/******/ 					var idx;
/******/ 					var queue = outdatedModules.slice();
/******/ 					while (queue.length > 0) {
/******/ 						var moduleId = queue.pop();
/******/ 						var module = __webpack_require__.c[moduleId];
/******/ 						if (!module) continue;
/******/ 		
/******/ 						var data = {};
/******/ 		
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
/******/ 						}
/******/ 						__webpack_require__.hmrD[moduleId] = data;
/******/ 		
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/ 		
/******/ 						// remove module from cache
/******/ 						delete __webpack_require__.c[moduleId];
/******/ 		
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/ 		
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __webpack_require__.c[module.children[j]];
/******/ 							if (!child) continue;
/******/ 							idx = child.parents.indexOf(moduleId);
/******/ 							if (idx >= 0) {
/******/ 								child.parents.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// remove outdated dependency from module children
/******/ 					var dependency;
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									dependency = moduleOutdatedDependencies[j];
/******/ 									idx = module.children.indexOf(dependency);
/******/ 									if (idx >= 0) module.children.splice(idx, 1);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				},
/******/ 				apply: function (reportError) {
/******/ 					// insert new code
/******/ 					for (var updateModuleId in appliedUpdate) {
/******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__webpack_require__);
/******/ 					}
/******/ 		
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								var callbacks = [];
/******/ 								var errorHandlers = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									var errorHandler =
/******/ 										module.hot._acceptedErrorHandlers[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										errorHandlers.push(errorHandler);
/******/ 										dependenciesForCallbacks.push(dependency);
/******/ 									}
/******/ 								}
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									try {
/******/ 										callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 									} catch (err) {
/******/ 										if (typeof errorHandlers[k] === "function") {
/******/ 											try {
/******/ 												errorHandlers[k](err, {
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k]
/******/ 												});
/******/ 											} catch (err2) {
/******/ 												if (options.onErrored) {
/******/ 													options.onErrored({
/******/ 														type: "accept-error-handler-errored",
/******/ 														moduleId: outdatedModuleId,
/******/ 														dependencyId: dependenciesForCallbacks[k],
/******/ 														error: err2,
/******/ 														originalError: err
/******/ 													});
/******/ 												}
/******/ 												if (!options.ignoreErrored) {
/******/ 													reportError(err2);
/******/ 													reportError(err);
/******/ 												}
/******/ 											}
/******/ 										} else {
/******/ 											if (options.onErrored) {
/******/ 												options.onErrored({
/******/ 													type: "accept-errored",
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k],
/******/ 													error: err
/******/ 												});
/******/ 											}
/******/ 											if (!options.ignoreErrored) {
/******/ 												reportError(err);
/******/ 											}
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// Load self accepted modules
/******/ 					for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 						var item = outdatedSelfAcceptedModules[o];
/******/ 						var moduleId = item.module;
/******/ 						try {
/******/ 							item.require(moduleId);
/******/ 						} catch (err) {
/******/ 							if (typeof item.errorHandler === "function") {
/******/ 								try {
/******/ 									item.errorHandler(err, {
/******/ 										moduleId: moduleId,
/******/ 										module: __webpack_require__.c[moduleId]
/******/ 									});
/******/ 								} catch (err2) {
/******/ 									if (options.onErrored) {
/******/ 										options.onErrored({
/******/ 											type: "self-accept-error-handler-errored",
/******/ 											moduleId: moduleId,
/******/ 											error: err2,
/******/ 											originalError: err
/******/ 										});
/******/ 									}
/******/ 									if (!options.ignoreErrored) {
/******/ 										reportError(err2);
/******/ 										reportError(err);
/******/ 									}
/******/ 								}
/******/ 							} else {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					return outdatedModules;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 		__webpack_require__.hmrI.jsonp = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
/******/ 			}
/******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 			}
/******/ 		};
/******/ 		__webpack_require__.hmrC.jsonp = function (
/******/ 			chunkIds,
/******/ 			removedChunks,
/******/ 			removedModules,
/******/ 			promises,
/******/ 			applyHandlers,
/******/ 			updatedModulesList
/******/ 		) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			currentUpdateChunks = {};
/******/ 			currentUpdateRemovedChunks = removedChunks;
/******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 				obj[key] = false;
/******/ 				return obj;
/******/ 			}, {});
/******/ 			currentUpdateRuntime = [];
/******/ 			chunkIds.forEach(function (chunkId) {
/******/ 				if (
/******/ 					__webpack_require__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				}
/******/ 			});
/******/ 			if (__webpack_require__.f) {
/******/ 				__webpack_require__.f.jsonpHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						!__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 						__webpack_require__.o(installedChunks, chunkId) &&
/******/ 						installedChunks[chunkId] !== undefined
/******/ 					) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
/******/ 					}
/******/ 				};
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.hmrM = () => {
/******/ 			if (typeof fetch === "undefined") throw new Error("No browser support: need fetch API");
/******/ 			return fetch(__webpack_require__.p + __webpack_require__.hmrF()).then((response) => {
/******/ 				if(response.status === 404) return; // no update available
/******/ 				if(!response.ok) throw new Error("Failed to fetch update manifest " + response.statusText);
/******/ 				return response.json();
/******/ 			});
/******/ 		};
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;