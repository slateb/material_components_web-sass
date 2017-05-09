/*!
 Material Components for the web
 Copyright (c) 2017 Google Inc.
 License: Apache-2.0
*/
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["mdc"] = factory();
	else
		root["mdc"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/assets/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 55);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__foundation__ = __webpack_require__(7);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "MDCFoundation", function() { return __WEBPACK_IMPORTED_MODULE_0__foundation__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__component__ = __webpack_require__(20);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "MDCComponent", function() { return __WEBPACK_IMPORTED_MODULE_1__component__["a"]; });
/**
 * Copyright 2016 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */




/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foundation__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util__ = __webpack_require__(4);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "MDCRippleFoundation", function() { return __WEBPACK_IMPORTED_MODULE_1__foundation__["a"]; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCRipple", function() { return MDCRipple; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */





var MATCHES = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util__["a" /* getMatchesProperty */])(HTMLElement.prototype);



var MDCRipple = function (_MDCComponent) {
  _inherits(MDCRipple, _MDCComponent);

  function MDCRipple() {
    _classCallCheck(this, MDCRipple);

    return _possibleConstructorReturn(this, (MDCRipple.__proto__ || Object.getPrototypeOf(MDCRipple)).apply(this, arguments));
  }

  _createClass(MDCRipple, [{
    key: 'activate',
    value: function activate() {
      this.foundation_.activate();
    }
  }, {
    key: 'deactivate',
    value: function deactivate() {
      this.foundation_.deactivate();
    }
  }, {
    key: 'getDefaultFoundation',
    value: function getDefaultFoundation() {
      return new __WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */](MDCRipple.createAdapter(this));
    }
  }, {
    key: 'initialSyncWithDOM',
    value: function initialSyncWithDOM() {
      this.unbounded = 'mdcRippleIsUnbounded' in this.root_.dataset;
    }
  }, {
    key: 'unbounded',
    get: function get() {
      return this.unbounded_;
    },
    set: function set(unbounded) {
      var UNBOUNDED = __WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */].cssClasses.UNBOUNDED;

      this.unbounded_ = Boolean(unbounded);
      if (this.unbounded_) {
        this.root_.classList.add(UNBOUNDED);
      } else {
        this.root_.classList.remove(UNBOUNDED);
      }
    }
  }], [{
    key: 'attachTo',
    value: function attachTo(root) {
      var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref$isUnbounded = _ref.isUnbounded,
          isUnbounded = _ref$isUnbounded === undefined ? undefined : _ref$isUnbounded;

      var ripple = new MDCRipple(root);
      // Only override unbounded behavior if option is explicitly specified
      if (isUnbounded !== undefined) {
        ripple.unbounded = isUnbounded;
      }
      return ripple;
    }
  }, {
    key: 'createAdapter',
    value: function createAdapter(instance) {
      return {
        browserSupportsCssVars: function browserSupportsCssVars() {
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util__["b" /* supportsCssVariables */])(window);
        },
        isUnbounded: function isUnbounded() {
          return instance.unbounded;
        },
        isSurfaceActive: function isSurfaceActive() {
          return instance.root_[MATCHES](':active');
        },
        addClass: function addClass(className) {
          return instance.root_.classList.add(className);
        },
        removeClass: function removeClass(className) {
          return instance.root_.classList.remove(className);
        },
        registerInteractionHandler: function registerInteractionHandler(evtType, handler) {
          return instance.root_.addEventListener(evtType, handler);
        },
        deregisterInteractionHandler: function deregisterInteractionHandler(evtType, handler) {
          return instance.root_.removeEventListener(evtType, handler);
        },
        registerResizeHandler: function registerResizeHandler(handler) {
          return window.addEventListener('resize', handler);
        },
        deregisterResizeHandler: function deregisterResizeHandler(handler) {
          return window.removeEventListener('resize', handler);
        },
        updateCssVariable: function updateCssVariable(varName, value) {
          return instance.root_.style.setProperty(varName, value);
        },
        computeBoundingRect: function computeBoundingRect() {
          return instance.root_.getBoundingClientRect();
        },
        getWindowPageOffset: function getWindowPageOffset() {
          return { x: window.pageXOffset, y: window.pageYOffset };
        }
      };
    }
  }]);

  return MDCRipple;
}(__WEBPACK_IMPORTED_MODULE_0__material_base__["MDCComponent"]);

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(29);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__constants__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foundation__ = __webpack_require__(30);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__foundation__["a"]; });
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */




/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["remapEvent"] = remapEvent;
/* harmony export (immutable) */ __webpack_exports__["getTransformPropertyName"] = getTransformPropertyName;
/* harmony export (immutable) */ __webpack_exports__["supportsCssCustomProperties"] = supportsCssCustomProperties;
/* harmony export (immutable) */ __webpack_exports__["applyPassive"] = applyPassive;
/* harmony export (immutable) */ __webpack_exports__["saveElementTabState"] = saveElementTabState;
/* harmony export (immutable) */ __webpack_exports__["restoreElementTabState"] = restoreElementTabState;
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var TAB_DATA = 'data-mdc-tabindex';
var TAB_DATA_HANDLED = 'data-mdc-tabindex-handled';

var storedTransformPropertyName_ = void 0;
var supportsPassive_ = void 0;

// Remap touch events to pointer events, if the browser doesn't support touch events.
function remapEvent(eventName) {
  var globalObj = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : window;

  if (!('ontouchstart' in globalObj.document)) {
    switch (eventName) {
      case 'touchstart':
        return 'pointerdown';
      case 'touchmove':
        return 'pointermove';
      case 'touchend':
        return 'pointerup';
      default:
        return eventName;
    }
  }

  return eventName;
}

// Choose the correct transform property to use on the current browser.
function getTransformPropertyName() {
  var globalObj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window;
  var forceRefresh = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (storedTransformPropertyName_ === undefined || forceRefresh) {
    var el = globalObj.document.createElement('div');
    var transformPropertyName = 'transform' in el.style ? 'transform' : '-webkit-transform';
    storedTransformPropertyName_ = transformPropertyName;
  }

  return storedTransformPropertyName_;
}

// Determine whether the current browser supports CSS properties.
function supportsCssCustomProperties() {
  var globalObj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window;

  if ('CSS' in globalObj) {
    return globalObj.CSS.supports('(--color: red)');
  }
  return false;
}

// Determine whether the current browser supports passive event listeners, and if so, use them.
function applyPassive() {
  var globalObj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window;
  var forceRefresh = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (supportsPassive_ === undefined || forceRefresh) {
    var isSupported = false;
    try {
      globalObj.document.addEventListener('test', null, { get passive() {
          isSupported = true;
        } });
    } catch (e) {}

    supportsPassive_ = isSupported;
  }

  return supportsPassive_ ? { passive: true } : false;
}

// Save the tab state for an element.
function saveElementTabState(el) {
  if (el.hasAttribute('tabindex')) {
    el.setAttribute(TAB_DATA, el.getAttribute('tabindex'));
  }
  el.setAttribute(TAB_DATA_HANDLED, true);
}

// Restore the tab state for an element, if it was saved.
function restoreElementTabState(el) {
  // Only modify elements we've already handled, in case anything was dynamically added since we saved state.
  if (el.hasAttribute(TAB_DATA_HANDLED)) {
    if (el.hasAttribute(TAB_DATA)) {
      el.setAttribute('tabindex', el.getAttribute(TAB_DATA));
      el.removeAttribute(TAB_DATA);
    } else {
      el.removeAttribute('tabindex');
    }
    el.removeAttribute(TAB_DATA_HANDLED);
  }
}

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = supportsCssVariables;
/* harmony export (immutable) */ __webpack_exports__["a"] = getMatchesProperty;
/* harmony export (immutable) */ __webpack_exports__["c"] = getNormalizedEventCoords;
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

function supportsCssVariables(windowObj) {
  var supportsFunctionPresent = windowObj.CSS && typeof windowObj.CSS.supports === 'function';
  if (!supportsFunctionPresent) {
    return;
  }

  var explicitlySupportsCssVars = windowObj.CSS.supports('--css-vars', 'yes');
  // See: https://bugs.webkit.org/show_bug.cgi?id=154669
  // See: README section on Safari
  var weAreFeatureDetectingSafari10plus = windowObj.CSS.supports('(--css-vars: yes)') && windowObj.CSS.supports('color', '#00000000');
  return explicitlySupportsCssVars || weAreFeatureDetectingSafari10plus;
}

function getMatchesProperty(HTMLElementPrototype) {
  return ['webkitMatchesSelector', 'msMatchesSelector', 'matches'].filter(function (p) {
    return p in HTMLElementPrototype;
  }).pop();
}

function getNormalizedEventCoords(ev, pageOffset, clientRect) {
  var x = pageOffset.x,
      y = pageOffset.y;

  var documentX = x + clientRect.left;
  var documentY = y + clientRect.top;

  var normalizedX = void 0;
  var normalizedY = void 0;
  // Determine touch point relative to the ripple container.
  if (ev.type === 'touchstart') {
    normalizedX = ev.changedTouches[0].pageX - documentX;
    normalizedY = ev.changedTouches[0].pageY - documentY;
  } else {
    normalizedX = ev.pageX - documentX;
    normalizedY = ev.pageY - documentY;
  }

  return { x: normalizedX, y: normalizedY };
}

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__simple__ = __webpack_require__(42);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "MDCSimpleMenu", function() { return __WEBPACK_IMPORTED_MODULE_0__simple__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "MDCSimpleMenuFoundation", function() { return __WEBPACK_IMPORTED_MODULE_0__simple__["b"]; });
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */



/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getCorrectEventName;
/* unused harmony export getCorrectPropertyName */
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var eventTypeMap = {
  animationstart: {
    noPrefix: 'animationstart',
    webkitPrefix: 'webkitAnimationStart'
  },
  animationend: {
    noPrefix: 'animationend',
    webkitPrefix: 'webkitAnimationEnd'
  },
  animationiteration: {
    noPrefix: 'animationiteration',
    webkitPrefix: 'webkitAnimationIteration'
  },
  transitionend: {
    noPrefix: 'transitionend',
    webkitPrefix: 'webkitTransitionEnd'
  }
};

var cssPropertyMap = {
  animation: {
    noPrefix: 'animation',
    webkitPrefix: '-webkit-animation'
  },
  transform: {
    noPrefix: 'transform',
    webkitPrefix: '-webkit-transform'
  },
  transition: {
    noPrefix: 'transition',
    webkitPrefix: '-webkit-transition'
  }
};

function hasProperShape(windowObj) {
  return windowObj.document !== undefined && typeof windowObj.document.createElement === 'function';
}

function eventFoundInMaps(eventType) {
  return eventType in eventTypeMap || eventType in cssPropertyMap;
}

// If 'animation' or 'transition' exist as style property, webkit prefix isn't necessary. Since we are unable to
// see the event types on the element, we must rely on the corresponding style properties.
function getJavaScriptEventName(eventType, map, el) {
  switch (eventType) {
    case 'animationstart':
    case 'animationend':
    case 'animationiteration':
      return 'animation' in el.style ? map[eventType].noPrefix : map[eventType].webkitPrefix;
    case 'transitionend':
      return 'transition' in el.style ? map[eventType].noPrefix : map[eventType].webkitPrefix;
    default:
      return map[eventType].noPrefix;
  }
}

// Helper function to determine browser prefix for CSS3 animation events
// and property names
//
// Parameters:
// windowObject: Object -- Contains Document with a `createElement()` method
// eventType: string -- The type of animation
//
// returns the value of the event as a string, prefixed if necessary.
// If proper arguments are not supplied, this function will return
// the property or event type without webkit prefix.
//
function getAnimationName(windowObj, eventType) {
  if (!hasProperShape(windowObj) || !eventFoundInMaps(eventType)) {
    return eventType;
  }

  var map = eventType in eventTypeMap ? eventTypeMap : cssPropertyMap;
  var el = windowObj.document.createElement('div');
  var eventName = '';

  if (map === eventTypeMap) {
    eventName = getJavaScriptEventName(eventType, map, el);
  } else {
    eventName = map[eventType].noPrefix in el.style ? map[eventType].noPrefix : map[eventType].webkitPrefix;
  }

  return eventName;
}

// Public functions to access getAnimationName() for JavaScript events or CSS
// property names.
//
// Parameters:
// windowObject: Object -- Contains Document with a `createElement()` method
// eventType: string -- The type of animation
//
// returns the value of the event as a string, prefixed if necessary.
// If proper arguments are not supplied, this function will return
// the property or event type without webkit prefix.
//
function getCorrectEventName(windowObj, eventType) {
  return getAnimationName(windowObj, eventType);
}

function getCorrectPropertyName(windowObj, eventType) {
  return getAnimationName(windowObj, eventType);
}

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Copyright 2016 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var MDCFoundation = function () {
  _createClass(MDCFoundation, null, [{
    key: "cssClasses",
    get: function get() {
      // Classes extending MDCFoundation should implement this method to return an object which exports every
      // CSS class the foundation class needs as a property. e.g. {ACTIVE: 'mdc-component--active'}
      return {};
    }
  }, {
    key: "strings",
    get: function get() {
      // Classes extending MDCFoundation should implement this method to return an object which exports all
      // semantic strings as constants. e.g. {ARIA_ROLE: 'tablist'}
      return {};
    }
  }, {
    key: "numbers",
    get: function get() {
      // Classes extending MDCFoundation should implement this method to return an object which exports all
      // of its semantic numbers as constants. e.g. {ANIMATION_DELAY_MS: 350}
      return {};
    }
  }, {
    key: "defaultAdapter",
    get: function get() {
      // Classes extending MDCFoundation may choose to implement this getter in order to provide a convenient
      // way of viewing the necessary methods of an adapter. In the future, this could also be used for adapter
      // validation.
      return {};
    }
  }]);

  function MDCFoundation() {
    var adapter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, MDCFoundation);

    this.adapter_ = adapter;
  }

  _createClass(MDCFoundation, [{
    key: "init",
    value: function init() {
      // Subclasses should override this method to perform initialization routines (registering events, etc.)
    }
  }, {
    key: "destroy",
    value: function destroy() {
      // Subclasses should override this method to perform de-initialization routines (de-registering events, etc.)
    }
  }]);

  return MDCFoundation;
}();

/* harmony default export */ __webpack_exports__["a"] = MDCFoundation;

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getTransformPropertyName;
/* harmony export (immutable) */ __webpack_exports__["b"] = clamp;
/* harmony export (immutable) */ __webpack_exports__["c"] = bezierProgress;
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var storedTransformPropertyName_ = void 0;

// Returns the name of the correct transform property to use on the current browser.
function getTransformPropertyName(globalObj) {
  var forceRefresh = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (storedTransformPropertyName_ === undefined || forceRefresh) {
    var el = globalObj.document.createElement('div');
    var transformPropertyName = 'transform' in el.style ? 'transform' : 'webkitTransform';
    storedTransformPropertyName_ = transformPropertyName;
  }

  return storedTransformPropertyName_;
}

// Clamps a value between the minimum and the maximum, returning the clamped value.
function clamp(value) {
  var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var max = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

  return Math.min(max, Math.max(min, value));
}

// Returns the easing value to apply at time t, for a given cubic bezier curve.
// Control points P0 and P3 are assumed to be (0,0) and (1,1), respectively.
// Paramters are as follows:
// - time: The current time in the animation, scaled between 0 and 1.
// - x1: The x value of control point P1.
// - y1: The y value of control point P1.
// - x2: The x value of control point P2.
// - y2: The y value of control point P2.
function bezierProgress(time, x1, y1, x2, y2) {
  return getBezierCoordinate_(solvePositionFromXValue_(time, x1, x2), y1, y2);
}

// Compute a single coordinate at a position point between 0 and 1.
// c1 and c2 are the matching coordinate on control points P1 and P2, respectively.
// Control points P0 and P3 are assumed to be (0,0) and (1,1), respectively.
// Adapted from https://github.com/google/closure-library/blob/master/closure/goog/math/bezier.js.
function getBezierCoordinate_(t, c1, c2) {
  // Special case start and end.
  if (t === 0 || t === 1) {
    return t;
  }

  // Step one - from 4 points to 3
  var ic0 = t * c1;
  var ic1 = c1 + t * (c2 - c1);
  var ic2 = c2 + t * (1 - c2);

  // Step two - from 3 points to 2
  ic0 += t * (ic1 - ic0);
  ic1 += t * (ic2 - ic1);

  // Final step - last point
  return ic0 + t * (ic1 - ic0);
}

// Project a point onto the Bezier curve, from a given X. Calculates the position t along the curve.
// Adapted from https://github.com/google/closure-library/blob/master/closure/goog/math/bezier.js.
function solvePositionFromXValue_(xVal, x1, x2) {
  var EPSILON = 1e-6;
  var MAX_ITERATIONS = 8;

  if (xVal <= 0) {
    return 0;
  } else if (xVal >= 1) {
    return 1;
  }

  // Initial estimate of t using linear interpolation.
  var t = xVal;

  // Try gradient descent to solve for t. If it works, it is very fast.
  var tMin = 0;
  var tMax = 1;
  var value = 0;
  for (var i = 0; i < MAX_ITERATIONS; i++) {
    value = getBezierCoordinate_(t, x1, x2);
    var derivative = (getBezierCoordinate_(t + EPSILON, x1, x2) - value) / EPSILON;
    if (Math.abs(value - xVal) < EPSILON) {
      return t;
    } else if (Math.abs(derivative) < EPSILON) {
      break;
    } else {
      if (value < xVal) {
        tMin = t;
      } else {
        tMax = t;
      }
      t -= (value - xVal) / derivative;
    }
  }

  // If the gradient descent got stuck in a local minimum, e.g. because
  // the derivative was close to 0, use a Dichotomy refinement instead.
  // We limit the number of interations to 8.
  for (var _i = 0; Math.abs(value - xVal) > EPSILON && _i < MAX_ITERATIONS; _i++) {
    if (value < xVal) {
      tMin = t;
      t = (t + tMax) / 2;
    } else {
      tMax = t;
      t = (t + tMin) / 2;
    }
    value = getBezierCoordinate_(t, x1, x2);
  }
  return t;
}

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = mdcAutoInit;
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var registry = Object.create(null);

var CONSOLE_WARN = console.warn.bind(console);

/**
 * Auto-initializes all mdc components on a page.
 */
function mdcAutoInit() {
  var root = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;
  var warn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : CONSOLE_WARN;

  var nodes = root.querySelectorAll('[data-mdc-auto-init]');
  for (var i = 0, node; node = nodes[i]; i++) {
    var ctorName = node.dataset.mdcAutoInit;
    if (!ctorName) {
      throw new Error('(mdc-auto-init) Constructor name must be given.');
    }

    var Ctor = registry[ctorName];
    if (typeof Ctor !== 'function') {
      throw new Error('(mdc-auto-init) Could not find constructor in registry for ' + ctorName);
    }

    if (node[ctorName]) {
      warn('(mdc-auto-init) Component already initialized for ' + node + '. Skipping...');
      continue;
    }

    // TODO: Should we make an eslint rule for an attachTo() static method?
    var component = Ctor.attachTo(node);
    Object.defineProperty(node, ctorName, {
      value: component,
      writable: false,
      enumerable: false,
      configurable: true
    });
  }
}

mdcAutoInit.register = function (componentName, Ctor) {
  var warn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : CONSOLE_WARN;

  if (typeof Ctor !== 'function') {
    throw new Error('(mdc-auto-init) Invalid Ctor value ' + Ctor + '. Expected function');
  }
  if (registry[componentName]) {
    warn('(mdc-auto-init) Overriding registration for ' + componentName + ' with ' + Ctor + '. ' + ('Was: ' + registry[componentName]));
  }
  registry[componentName] = Ctor;
};

mdcAutoInit.deregister = function (componentName) {
  delete registry[componentName];
};

mdcAutoInit.deregisterAll = function () {
  Object.keys(registry).forEach(this.deregister, this);
};

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_ripple__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ripple_util__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_animation__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__foundation__ = __webpack_require__(22);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "MDCCheckboxFoundation", function() { return __WEBPACK_IMPORTED_MODULE_4__foundation__["a"]; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCCheckbox", function() { return MDCCheckbox; });
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */










var MDCCheckbox = function (_MDCComponent) {
  _inherits(MDCCheckbox, _MDCComponent);

  _createClass(MDCCheckbox, [{
    key: 'nativeCb_',
    get: function get() {
      var NATIVE_CONTROL_SELECTOR = __WEBPACK_IMPORTED_MODULE_4__foundation__["a" /* default */].strings.NATIVE_CONTROL_SELECTOR;

      return this.root_.querySelector(NATIVE_CONTROL_SELECTOR);
    }
  }], [{
    key: 'attachTo',
    value: function attachTo(root) {
      return new MDCCheckbox(root);
    }
  }]);

  function MDCCheckbox() {
    var _ref;

    _classCallCheck(this, MDCCheckbox);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = MDCCheckbox.__proto__ || Object.getPrototypeOf(MDCCheckbox)).call.apply(_ref, [this].concat(args)));

    _this.ripple_ = _this.initRipple_();
    return _this;
  }

  _createClass(MDCCheckbox, [{
    key: 'initRipple_',
    value: function initRipple_() {
      var _this2 = this;

      var MATCHES = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__material_ripple_util__["a" /* getMatchesProperty */])(HTMLElement.prototype);
      var adapter = _extends(__WEBPACK_IMPORTED_MODULE_1__material_ripple__["MDCRipple"].createAdapter(this), {
        isUnbounded: function isUnbounded() {
          return true;
        },
        isSurfaceActive: function isSurfaceActive() {
          return _this2.nativeCb_[MATCHES](':active');
        },
        registerInteractionHandler: function registerInteractionHandler(type, handler) {
          return _this2.nativeCb_.addEventListener(type, handler);
        },
        deregisterInteractionHandler: function deregisterInteractionHandler(type, handler) {
          return _this2.nativeCb_.removeEventListener(type, handler);
        },
        computeBoundingRect: function computeBoundingRect() {
          var _root_$getBoundingCli = _this2.root_.getBoundingClientRect(),
              left = _root_$getBoundingCli.left,
              top = _root_$getBoundingCli.top;

          var DIM = 40;
          return {
            top: top,
            left: left,
            right: left + DIM,
            bottom: top + DIM,
            width: DIM,
            height: DIM
          };
        }
      });
      var foundation = new __WEBPACK_IMPORTED_MODULE_1__material_ripple__["MDCRippleFoundation"](adapter);
      return new __WEBPACK_IMPORTED_MODULE_1__material_ripple__["MDCRipple"](this.root_, foundation);
    }
  }, {
    key: 'getDefaultFoundation',
    value: function getDefaultFoundation() {
      var _this3 = this;

      return new __WEBPACK_IMPORTED_MODULE_4__foundation__["a" /* default */]({
        addClass: function addClass(className) {
          return _this3.root_.classList.add(className);
        },
        removeClass: function removeClass(className) {
          return _this3.root_.classList.remove(className);
        },
        registerAnimationEndHandler: function registerAnimationEndHandler(handler) {
          return _this3.root_.addEventListener(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__material_animation__["a" /* getCorrectEventName */])(window, 'animationend'), handler);
        },
        deregisterAnimationEndHandler: function deregisterAnimationEndHandler(handler) {
          return _this3.root_.removeEventListener(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__material_animation__["a" /* getCorrectEventName */])(window, 'animationend'), handler);
        },
        registerChangeHandler: function registerChangeHandler(handler) {
          return _this3.nativeCb_.addEventListener('change', handler);
        },
        deregisterChangeHandler: function deregisterChangeHandler(handler) {
          return _this3.nativeCb_.removeEventListener('change', handler);
        },
        getNativeControl: function getNativeControl() {
          return _this3.nativeCb_;
        },
        forceLayout: function forceLayout() {
          return _this3.root_.offsetWidth;
        },
        isAttachedToDOM: function isAttachedToDOM() {
          return Boolean(_this3.root_.parentNode);
        }
      });
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      this.ripple_.destroy();
      _get(MDCCheckbox.prototype.__proto__ || Object.getPrototypeOf(MDCCheckbox.prototype), 'destroy', this).call(this);
    }
  }, {
    key: 'ripple',
    get: function get() {
      return this.ripple_;
    }
  }, {
    key: 'checked',
    get: function get() {
      return this.foundation_.isChecked();
    },
    set: function set(checked) {
      this.foundation_.setChecked(checked);
    }
  }, {
    key: 'indeterminate',
    get: function get() {
      return this.foundation_.isIndeterminate();
    },
    set: function set(indeterminate) {
      this.foundation_.setIndeterminate(indeterminate);
    }
  }, {
    key: 'disabled',
    get: function get() {
      return this.foundation_.isDisabled();
    },
    set: function set(disabled) {
      this.foundation_.setDisabled(disabled);
    }
  }, {
    key: 'value',
    get: function get() {
      return this.foundation_.getValue();
    },
    set: function set(value) {
      this.foundation_.setValue(value);
    }
  }]);

  return MDCCheckbox;
}(__WEBPACK_IMPORTED_MODULE_0__material_base__["MDCComponent"]);

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_ripple__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__foundation__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util__ = __webpack_require__(25);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "MDCDialogFoundation", function() { return __WEBPACK_IMPORTED_MODULE_2__foundation__["a"]; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "util", function() { return __WEBPACK_IMPORTED_MODULE_3__util__; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCDialog", function() { return MDCDialog; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */










var MDCDialog = function (_MDCComponent) {
  _inherits(MDCDialog, _MDCComponent);

  function MDCDialog() {
    _classCallCheck(this, MDCDialog);

    return _possibleConstructorReturn(this, (MDCDialog.__proto__ || Object.getPrototypeOf(MDCDialog)).apply(this, arguments));
  }

  _createClass(MDCDialog, [{
    key: 'initialize',
    value: function initialize() {
      this.focusTrap_ = __WEBPACK_IMPORTED_MODULE_3__util__["createFocusTrapInstance"](this.dialogSurface_, this.acceptButton_);
      this.footerBtnRipples_ = [];

      var footerBtns = this.root_.querySelectorAll('.mdc-dialog__footer__button');
      for (var i = 0, footerBtn; footerBtn = footerBtns[i]; i++) {
        this.footerBtnRipples_.push(new __WEBPACK_IMPORTED_MODULE_1__material_ripple__["MDCRipple"](footerBtn));
      }
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      this.footerBtnRipples_.forEach(function (ripple) {
        return ripple.destroy();
      });
      _get(MDCDialog.prototype.__proto__ || Object.getPrototypeOf(MDCDialog.prototype), 'destroy', this).call(this);
    }
  }, {
    key: 'show',
    value: function show() {
      this.foundation_.open();
    }
  }, {
    key: 'close',
    value: function close() {
      this.foundation_.close();
    }
  }, {
    key: 'getDefaultFoundation',
    value: function getDefaultFoundation() {
      var _this2 = this;

      return new __WEBPACK_IMPORTED_MODULE_2__foundation__["a" /* default */]({
        addClass: function addClass(className) {
          return _this2.root_.classList.add(className);
        },
        removeClass: function removeClass(className) {
          return _this2.root_.classList.remove(className);
        },
        setStyle: function setStyle(prop, val) {
          return _this2.root_.style.setProperty(prop, val);
        },
        addBodyClass: function addBodyClass(className) {
          return document.body.classList.add(className);
        },
        removeBodyClass: function removeBodyClass(className) {
          return document.body.classList.remove(className);
        },
        eventTargetHasClass: function eventTargetHasClass(target, className) {
          return target.classList.contains(className);
        },
        registerInteractionHandler: function registerInteractionHandler(evt, handler) {
          return _this2.root_.addEventListener(evt, handler);
        },
        deregisterInteractionHandler: function deregisterInteractionHandler(evt, handler) {
          return _this2.root_.removeEventListener(evt, handler);
        },
        registerSurfaceInteractionHandler: function registerSurfaceInteractionHandler(evt, handler) {
          return _this2.dialogSurface_.addEventListener(evt, handler);
        },
        deregisterSurfaceInteractionHandler: function deregisterSurfaceInteractionHandler(evt, handler) {
          return _this2.dialogSurface_.removeEventListener(evt, handler);
        },
        registerDocumentKeydownHandler: function registerDocumentKeydownHandler(handler) {
          return document.addEventListener('keydown', handler);
        },
        deregisterDocumentKeydownHandler: function deregisterDocumentKeydownHandler(handler) {
          return document.removeEventListener('keydown', handler);
        },
        notifyAccept: function notifyAccept() {
          return _this2.emit('MDCDialog:accept');
        },
        notifyCancel: function notifyCancel() {
          return _this2.emit('MDCDialog:cancel');
        },
        trapFocusOnSurface: function trapFocusOnSurface() {
          return _this2.focusTrap_.activate();
        },
        untrapFocusOnSurface: function untrapFocusOnSurface() {
          return _this2.focusTrap_.deactivate();
        }
      });
    }
  }, {
    key: 'open',
    get: function get() {
      return this.foundation_.isOpen();
    }
  }, {
    key: 'acceptButton_',
    get: function get() {
      return this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_2__foundation__["a" /* default */].strings.ACCEPT_SELECTOR);
    }
  }, {
    key: 'dialogSurface_',
    get: function get() {
      return this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_2__foundation__["a" /* default */].strings.DIALOG_SURFACE_SELECTOR);
    }
  }], [{
    key: 'attachTo',
    value: function attachTo(root) {
      return new MDCDialog(root);
    }
  }]);

  return MDCDialog;
}(__WEBPACK_IMPORTED_MODULE_0__material_base__["MDCComponent"]);

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__temporary__ = __webpack_require__(33);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "MDCTemporaryDrawer", function() { return __WEBPACK_IMPORTED_MODULE_1__temporary__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "MDCTemporaryDrawerFoundation", function() { return __WEBPACK_IMPORTED_MODULE_1__temporary__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__persistent__ = __webpack_require__(28);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "MDCPersistentDrawer", function() { return __WEBPACK_IMPORTED_MODULE_2__persistent__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "MDCPersistentDrawerFoundation", function() { return __WEBPACK_IMPORTED_MODULE_2__persistent__["b"]; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "util", function() { return __WEBPACK_IMPORTED_MODULE_0__util__; });
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */






/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foundation__ = __webpack_require__(35);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "MDCFormFieldFoundation", function() { return __WEBPACK_IMPORTED_MODULE_1__foundation__["a"]; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCFormField", function() { return MDCFormField; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */






var MDCFormField = function (_MDCComponent) {
  _inherits(MDCFormField, _MDCComponent);

  function MDCFormField() {
    _classCallCheck(this, MDCFormField);

    return _possibleConstructorReturn(this, (MDCFormField.__proto__ || Object.getPrototypeOf(MDCFormField)).apply(this, arguments));
  }

  _createClass(MDCFormField, [{
    key: 'getDefaultFoundation',
    value: function getDefaultFoundation() {
      var _this2 = this;

      return new __WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */]({
        registerInteractionHandler: function registerInteractionHandler(type, handler) {
          return _this2.label_.addEventListener(type, handler);
        },
        deregisterInteractionHandler: function deregisterInteractionHandler(type, handler) {
          return _this2.label_.removeEventListener(type, handler);
        },
        activateInputRipple: function activateInputRipple() {
          if (_this2.input_ && _this2.input_.ripple) {
            _this2.input_.ripple.activate();
          }
        },
        deactivateInputRipple: function deactivateInputRipple() {
          if (_this2.input_ && _this2.input_.ripple) {
            _this2.input_.ripple.deactivate();
          }
        }
      });
    }
  }, {
    key: 'input',
    set: function set(input) {
      this.input_ = input;
    },
    get: function get() {
      return this.input_;
    }
  }, {
    key: 'label_',
    get: function get() {
      return this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */].strings.LABEL_SELECTOR);
    }
  }], [{
    key: 'attachTo',
    value: function attachTo(root) {
      return new MDCFormField(root);
    }
  }]);

  return MDCFormField;
}(__WEBPACK_IMPORTED_MODULE_0__material_base__["MDCComponent"]);

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foundation__ = __webpack_require__(37);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "MDCGridListFoundation", function() { return __WEBPACK_IMPORTED_MODULE_1__foundation__["a"]; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCGridList", function() { return MDCGridList; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */







var MDCGridList = function (_MDCComponent) {
  _inherits(MDCGridList, _MDCComponent);

  function MDCGridList() {
    _classCallCheck(this, MDCGridList);

    return _possibleConstructorReturn(this, (MDCGridList.__proto__ || Object.getPrototypeOf(MDCGridList)).apply(this, arguments));
  }

  _createClass(MDCGridList, [{
    key: 'getDefaultFoundation',
    value: function getDefaultFoundation() {
      var _this2 = this;

      return new __WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */]({
        getOffsetWidth: function getOffsetWidth() {
          return _this2.root_.offsetWidth;
        },
        getNumberOfTiles: function getNumberOfTiles() {
          return _this2.root_.querySelectorAll(__WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */].strings.TILE_SELECTOR).length;
        },
        getOffsetWidthForTileAtIndex: function getOffsetWidthForTileAtIndex(index) {
          return _this2.root_.querySelectorAll(__WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */].strings.TILE_SELECTOR)[index].offsetWidth;
        },
        setStyleForTilesElement: function setStyleForTilesElement(property, value) {
          _this2.root_.querySelector(__WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */].strings.TILES_SELECTOR).style[property] = value;
        },
        registerResizeHandler: function registerResizeHandler(handler) {
          return window.addEventListener('resize', handler);
        },
        deregisterResizeHandler: function deregisterResizeHandler(handler) {
          return window.removeEventListener('resize', handler);
        }
      });
    }
  }], [{
    key: 'attachTo',
    value: function attachTo(root) {
      return new MDCGridList(root);
    }
  }]);

  return MDCGridList;
}(__WEBPACK_IMPORTED_MODULE_0__material_base__["MDCComponent"]);

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_ripple__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__foundation__ = __webpack_require__(39);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "MDCIconToggleFoundation", function() { return __WEBPACK_IMPORTED_MODULE_2__foundation__["a"]; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCIconToggle", function() { return MDCIconToggle; });
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */








var MDCIconToggle = function (_MDCComponent) {
  _inherits(MDCIconToggle, _MDCComponent);

  _createClass(MDCIconToggle, null, [{
    key: 'attachTo',
    value: function attachTo(root) {
      return new MDCIconToggle(root);
    }
  }]);

  function MDCIconToggle() {
    var _ref;

    _classCallCheck(this, MDCIconToggle);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = MDCIconToggle.__proto__ || Object.getPrototypeOf(MDCIconToggle)).call.apply(_ref, [this].concat(args)));

    _this.ripple_ = _this.initRipple_();
    return _this;
  }

  _createClass(MDCIconToggle, [{
    key: 'initRipple_',
    value: function initRipple_() {
      var _this2 = this;

      var adapter = _extends(__WEBPACK_IMPORTED_MODULE_1__material_ripple__["MDCRipple"].createAdapter(this), {
        isUnbounded: function isUnbounded() {
          return true;
        },
        isSurfaceActive: function isSurfaceActive() {
          return _this2.foundation_.isKeyboardActivated();
        },
        computeBoundingRect: function computeBoundingRect() {
          var dim = 48;

          var _root_$getBoundingCli = _this2.root_.getBoundingClientRect(),
              left = _root_$getBoundingCli.left,
              top = _root_$getBoundingCli.top;

          return {
            left: left,
            top: top,
            width: dim,
            height: dim,
            right: left + dim,
            bottom: left + dim
          };
        }
      });
      var foundation = new __WEBPACK_IMPORTED_MODULE_1__material_ripple__["MDCRippleFoundation"](adapter);
      return new __WEBPACK_IMPORTED_MODULE_1__material_ripple__["MDCRipple"](this.root_, foundation);
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      this.ripple_.destroy();
      _get(MDCIconToggle.prototype.__proto__ || Object.getPrototypeOf(MDCIconToggle.prototype), 'destroy', this).call(this);
    }
  }, {
    key: 'getDefaultFoundation',
    value: function getDefaultFoundation() {
      var _this3 = this;

      return new __WEBPACK_IMPORTED_MODULE_2__foundation__["a" /* default */]({
        addClass: function addClass(className) {
          return _this3.iconEl_.classList.add(className);
        },
        removeClass: function removeClass(className) {
          return _this3.iconEl_.classList.remove(className);
        },
        registerInteractionHandler: function registerInteractionHandler(type, handler) {
          return _this3.root_.addEventListener(type, handler);
        },
        deregisterInteractionHandler: function deregisterInteractionHandler(type, handler) {
          return _this3.root_.removeEventListener(type, handler);
        },
        setText: function setText(text) {
          _this3.iconEl_.textContent = text;
        },
        getTabIndex: function getTabIndex() {
          return (/* number */_this3.root_.tabIndex
          );
        },
        setTabIndex: function setTabIndex(tabIndex) {
          _this3.root_.tabIndex = tabIndex;
        },
        getAttr: function getAttr(name, value) {
          return _this3.root_.getAttribute(name, value);
        },
        setAttr: function setAttr(name, value) {
          return _this3.root_.setAttribute(name, value);
        },
        rmAttr: function rmAttr(name) {
          return _this3.root_.removeAttribute(name);
        },
        notifyChange: function notifyChange(evtData) {
          return _this3.emit('MDCIconToggle:change', evtData);
        }
      });
    }
  }, {
    key: 'initialSyncWithDOM',
    value: function initialSyncWithDOM() {
      this.on = this.root_.getAttribute(__WEBPACK_IMPORTED_MODULE_2__foundation__["a" /* default */].strings.ARIA_PRESSED) === 'true';
      this.disabled = this.root_.getAttribute(__WEBPACK_IMPORTED_MODULE_2__foundation__["a" /* default */].strings.ARIA_DISABLED) === 'true';
    }
  }, {
    key: 'refreshToggleData',
    value: function refreshToggleData() {
      this.foundation_.refreshToggleData();
    }
  }, {
    key: 'iconEl_',
    get: function get() {
      var sel = this.root_.dataset.iconInnerSelector;

      return sel ? this.root_.querySelector(sel) : this.root_;
    }
  }, {
    key: 'on',
    get: function get() {
      return this.foundation_.isOn();
    },
    set: function set(isOn) {
      this.foundation_.toggle(isOn);
    }
  }, {
    key: 'disabled',
    get: function get() {
      return this.foundation_.isDisabled();
    },
    set: function set(isDisabled) {
      this.foundation_.setDisabled(isDisabled);
    }
  }]);

  return MDCIconToggle;
}(__WEBPACK_IMPORTED_MODULE_0__material_base__["MDCComponent"]);

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_ripple__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__foundation__ = __webpack_require__(44);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "MDCRadioFoundation", function() { return __WEBPACK_IMPORTED_MODULE_2__foundation__["a"]; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCRadio", function() { return MDCRadio; });
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */








var MDCRadio = function (_MDCComponent) {
  _inherits(MDCRadio, _MDCComponent);

  _createClass(MDCRadio, [{
    key: 'checked',
    get: function get() {
      return this.foundation_.isChecked();
    },
    set: function set(checked) {
      this.foundation_.setChecked(checked);
    }
  }, {
    key: 'disabled',
    get: function get() {
      return this.foundation_.isDisabled();
    },
    set: function set(disabled) {
      this.foundation_.setDisabled(disabled);
    }
  }, {
    key: 'value',
    get: function get() {
      return this.foundation_.getValue();
    },
    set: function set(value) {
      this.foundation_.setValue(value);
    }
  }, {
    key: 'ripple',
    get: function get() {
      return this.ripple_;
    }
  }], [{
    key: 'attachTo',
    value: function attachTo(root) {
      return new MDCRadio(root);
    }
  }]);

  function MDCRadio() {
    var _ref;

    _classCallCheck(this, MDCRadio);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = MDCRadio.__proto__ || Object.getPrototypeOf(MDCRadio)).call.apply(_ref, [this].concat(args)));

    _this.ripple_ = _this.initRipple_();
    return _this;
  }

  _createClass(MDCRadio, [{
    key: 'initRipple_',
    value: function initRipple_() {
      var _this2 = this;

      var adapter = _extends(__WEBPACK_IMPORTED_MODULE_1__material_ripple__["MDCRipple"].createAdapter(this), {
        isUnbounded: function isUnbounded() {
          return true;
        },
        // Radio buttons technically go "active" whenever there is *any* keyboard interaction. This is not the
        // UI we desire.
        isSurfaceActive: function isSurfaceActive() {
          return false;
        },
        registerInteractionHandler: function registerInteractionHandler(type, handler) {
          return _this2.nativeControl_.addEventListener(type, handler);
        },
        deregisterInteractionHandler: function deregisterInteractionHandler(type, handler) {
          return _this2.nativeControl_.removeEventListener(type, handler);
        },
        computeBoundingRect: function computeBoundingRect() {
          var _root_$getBoundingCli = _this2.root_.getBoundingClientRect(),
              left = _root_$getBoundingCli.left,
              top = _root_$getBoundingCli.top;

          var DIM = 40;
          return {
            top: top,
            left: left,
            right: left + DIM,
            bottom: top + DIM,
            width: DIM,
            height: DIM
          };
        }
      });
      var foundation = new __WEBPACK_IMPORTED_MODULE_1__material_ripple__["MDCRippleFoundation"](adapter);
      return new __WEBPACK_IMPORTED_MODULE_1__material_ripple__["MDCRipple"](this.root_, foundation);
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      this.ripple_.destroy();
      _get(MDCRadio.prototype.__proto__ || Object.getPrototypeOf(MDCRadio.prototype), 'destroy', this).call(this);
    }
  }, {
    key: 'getDefaultFoundation',
    value: function getDefaultFoundation() {
      var _this3 = this;

      return new __WEBPACK_IMPORTED_MODULE_2__foundation__["a" /* default */]({
        addClass: function addClass(className) {
          return _this3.root_.classList.add(className);
        },
        removeClass: function removeClass(className) {
          return _this3.root_.classList.remove(className);
        },
        getNativeControl: function getNativeControl() {
          return _this3.root_.querySelector(__WEBPACK_IMPORTED_MODULE_2__foundation__["a" /* default */].strings.NATIVE_CONTROL_SELECTOR);
        }
      });
    }
  }, {
    key: 'nativeControl_',
    get: function get() {
      return this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_2__foundation__["a" /* default */].strings.NATIVE_CONTROL_SELECTOR);
    }
  }]);

  return MDCRadio;
}(__WEBPACK_IMPORTED_MODULE_0__material_base__["MDCComponent"]);

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_menu__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__foundation__ = __webpack_require__(48);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "MDCSelectFoundation", function() { return __WEBPACK_IMPORTED_MODULE_2__foundation__["a"]; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCSelect", function() { return MDCSelect; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */








var MDCSelect = function (_MDCComponent) {
  _inherits(MDCSelect, _MDCComponent);

  function MDCSelect() {
    _classCallCheck(this, MDCSelect);

    return _possibleConstructorReturn(this, (MDCSelect.__proto__ || Object.getPrototypeOf(MDCSelect)).apply(this, arguments));
  }

  _createClass(MDCSelect, [{
    key: 'item',
    value: function item(index) {
      return this.options[index] || null;
    }
  }, {
    key: 'nameditem',
    value: function nameditem(key) {
      // NOTE: IE11 precludes us from using Array.prototype.find
      for (var i = 0, options = this.options, option; option = options[i]; i++) {
        if (option.id === key || option.getAttribute('name') === key) {
          return option;
        }
      }
      return null;
    }
  }, {
    key: 'initialize',
    value: function initialize() {
      var menuFactory = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function (el) {
        return new __WEBPACK_IMPORTED_MODULE_1__material_menu__["MDCSimpleMenu"](el);
      };

      this.menuEl_ = this.root_.querySelector('.mdc-select__menu');
      this.menu_ = menuFactory(this.menuEl_);
      this.selectedText_ = this.root_.querySelector('.mdc-select__selected-text');
    }
  }, {
    key: 'getDefaultFoundation',
    value: function getDefaultFoundation() {
      var _this2 = this;

      return new __WEBPACK_IMPORTED_MODULE_2__foundation__["a" /* default */]({
        addClass: function addClass(className) {
          return _this2.root_.classList.add(className);
        },
        removeClass: function removeClass(className) {
          return _this2.root_.classList.remove(className);
        },
        setAttr: function setAttr(attr, value) {
          return _this2.root_.setAttribute(attr, value);
        },
        rmAttr: function rmAttr(attr, value) {
          return _this2.root_.removeAttribute(attr, value);
        },
        computeBoundingRect: function computeBoundingRect() {
          return _this2.root_.getBoundingClientRect();
        },
        registerInteractionHandler: function registerInteractionHandler(type, handler) {
          return _this2.root_.addEventListener(type, handler);
        },
        deregisterInteractionHandler: function deregisterInteractionHandler(type, handler) {
          return _this2.root_.removeEventListener(type, handler);
        },
        focus: function focus() {
          return _this2.root_.focus();
        },
        makeTabbable: function makeTabbable() {
          _this2.root_.tabIndex = 0;
        },
        makeUntabbable: function makeUntabbable() {
          _this2.root_.tabIndex = -1;
        },
        getComputedStyleValue: function getComputedStyleValue(prop) {
          return window.getComputedStyle(_this2.root_).getPropertyValue(prop);
        },
        setStyle: function setStyle(propertyName, value) {
          return _this2.root_.style.setProperty(propertyName, value);
        },
        create2dRenderingContext: function create2dRenderingContext() {
          return document.createElement('canvas').getContext('2d');
        },
        setMenuElStyle: function setMenuElStyle(propertyName, value) {
          return _this2.menuEl_.style.setProperty(propertyName, value);
        },
        setMenuElAttr: function setMenuElAttr(attr, value) {
          return _this2.menuEl_.setAttribute(attr, value);
        },
        rmMenuElAttr: function rmMenuElAttr(attr) {
          return _this2.menuEl_.removeAttribute(attr);
        },
        getMenuElOffsetHeight: function getMenuElOffsetHeight() {
          return _this2.menuEl_.offsetHeight;
        },
        openMenu: function openMenu(focusIndex) {
          return _this2.menu_.show({ focusIndex: focusIndex });
        },
        isMenuOpen: function isMenuOpen() {
          return _this2.menu_.open;
        },
        setSelectedTextContent: function setSelectedTextContent(selectedTextContent) {
          _this2.selectedText_.textContent = selectedTextContent;
        },
        getNumberOfOptions: function getNumberOfOptions() {
          return _this2.options.length;
        },
        getTextForOptionAtIndex: function getTextForOptionAtIndex(index) {
          return _this2.options[index].textContent;
        },
        getValueForOptionAtIndex: function getValueForOptionAtIndex(index) {
          return _this2.options[index].id || _this2.options[index].textContent;
        },
        setAttrForOptionAtIndex: function setAttrForOptionAtIndex(index, attr, value) {
          return _this2.options[index].setAttribute(attr, value);
        },
        rmAttrForOptionAtIndex: function rmAttrForOptionAtIndex(index, attr) {
          return _this2.options[index].removeAttribute(attr);
        },
        getOffsetTopForOptionAtIndex: function getOffsetTopForOptionAtIndex(index) {
          return _this2.options[index].offsetTop;
        },
        registerMenuInteractionHandler: function registerMenuInteractionHandler(type, handler) {
          return _this2.menu_.listen(type, handler);
        },
        deregisterMenuInteractionHandler: function deregisterMenuInteractionHandler(type, handler) {
          return _this2.menu_.unlisten(type, handler);
        },
        notifyChange: function notifyChange() {
          return _this2.emit('MDCSelect:change', _this2);
        },
        getWindowInnerHeight: function getWindowInnerHeight() {
          return window.innerHeight;
        }
      });
    }
  }, {
    key: 'initialSyncWithDOM',
    value: function initialSyncWithDOM() {
      var selectedOption = this.selectedOptions[0];
      var idx = selectedOption ? this.options.indexOf(selectedOption) : -1;
      if (idx >= 0) {
        this.selectedIndex = idx;
      }

      if (this.root_.getAttribute('aria-disabled') === 'true') {
        this.disabled = true;
      }
    }
  }, {
    key: 'value',
    get: function get() {
      return this.foundation_.getValue();
    }
  }, {
    key: 'options',
    get: function get() {
      return this.menu_.items;
    }
  }, {
    key: 'selectedOptions',
    get: function get() {
      return this.root_.querySelectorAll('[aria-selected]');
    }
  }, {
    key: 'selectedIndex',
    get: function get() {
      return this.foundation_.getSelectedIndex();
    },
    set: function set(selectedIndex) {
      this.foundation_.setSelectedIndex(selectedIndex);
    }
  }, {
    key: 'disabled',
    get: function get() {
      return this.foundation_.isDisabled();
    },
    set: function set(disabled) {
      this.foundation_.setDisabled(disabled);
    }
  }], [{
    key: 'attachTo',
    value: function attachTo(root) {
      return new MDCSelect(root);
    }
  }]);

  return MDCSelect;
}(__WEBPACK_IMPORTED_MODULE_0__material_base__["MDCComponent"]);

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foundation__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_animation__ = __webpack_require__(6);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "MDCSnackbarFoundation", function() { return __WEBPACK_IMPORTED_MODULE_1__foundation__["a"]; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCSnackbar", function() { return MDCSnackbar; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */







var MDCSnackbar = function (_MDCComponent) {
  _inherits(MDCSnackbar, _MDCComponent);

  function MDCSnackbar() {
    _classCallCheck(this, MDCSnackbar);

    return _possibleConstructorReturn(this, (MDCSnackbar.__proto__ || Object.getPrototypeOf(MDCSnackbar)).apply(this, arguments));
  }

  _createClass(MDCSnackbar, [{
    key: 'show',
    value: function show(data) {
      this.foundation_.show(data);
    }
  }, {
    key: 'getDefaultFoundation',
    value: function getDefaultFoundation() {
      var _this2 = this;

      var _MDCSnackbarFoundatio = __WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */].strings,
          TEXT_SELECTOR = _MDCSnackbarFoundatio.TEXT_SELECTOR,
          ACTION_BUTTON_SELECTOR = _MDCSnackbarFoundatio.ACTION_BUTTON_SELECTOR;

      var getText = function getText() {
        return _this2.root_.querySelector(TEXT_SELECTOR);
      };
      var getActionButton = function getActionButton() {
        return _this2.root_.querySelector(ACTION_BUTTON_SELECTOR);
      };

      /* eslint brace-style: "off" */
      return new __WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */]({
        addClass: function addClass(className) {
          return _this2.root_.classList.add(className);
        },
        removeClass: function removeClass(className) {
          return _this2.root_.classList.remove(className);
        },
        setAriaHidden: function setAriaHidden() {
          return _this2.root_.setAttribute('aria-hidden', 'true');
        },
        unsetAriaHidden: function unsetAriaHidden() {
          return _this2.root_.removeAttribute('aria-hidden');
        },
        setActionAriaHidden: function setActionAriaHidden() {
          return getActionButton().setAttribute('aria-hidden', 'true');
        },
        unsetActionAriaHidden: function unsetActionAriaHidden() {
          return getActionButton().removeAttribute('aria-hidden');
        },
        setActionText: function setActionText(text) {
          getActionButton().textContent = text;
        },
        setMessageText: function setMessageText(text) {
          getText().textContent = text;
        },
        registerActionClickHandler: function registerActionClickHandler(handler) {
          return getActionButton().addEventListener('click', handler);
        },
        deregisterActionClickHandler: function deregisterActionClickHandler(handler) {
          return getActionButton().removeEventListener('click', handler);
        },
        registerTransitionEndHandler: function registerTransitionEndHandler(handler) {
          return _this2.root_.addEventListener(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__material_animation__["a" /* getCorrectEventName */])(window, 'transitionend'), handler);
        },
        deregisterTransitionEndHandler: function deregisterTransitionEndHandler(handler) {
          return _this2.root_.removeEventListener(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__material_animation__["a" /* getCorrectEventName */])(window, 'transitionend'), handler);
        }
      });
    }
  }], [{
    key: 'attachTo',
    value: function attachTo(root) {
      return new MDCSnackbar(root);
    }
  }]);

  return MDCSnackbar;
}(__WEBPACK_IMPORTED_MODULE_0__material_base__["MDCComponent"]);

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foundation__ = __webpack_require__(52);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "MDCTextfieldFoundation", function() { return __WEBPACK_IMPORTED_MODULE_1__foundation__["a"]; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCTextfield", function() { return MDCTextfield; });
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */







var MDCTextfield = function (_MDCComponent) {
  _inherits(MDCTextfield, _MDCComponent);

  _createClass(MDCTextfield, null, [{
    key: 'attachTo',
    value: function attachTo(root) {
      return new MDCTextfield(root);
    }
  }]);

  function MDCTextfield() {
    var _ref;

    _classCallCheck(this, MDCTextfield);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = MDCTextfield.__proto__ || Object.getPrototypeOf(MDCTextfield)).call.apply(_ref, [this].concat(args)));

    var input = _this.input_;
    _this.helptextElement = input.hasAttribute('aria-controls') ? document.getElementById(input.getAttribute('aria-controls')) : null;
    return _this;
  }

  _createClass(MDCTextfield, [{
    key: 'initialSyncWithDom',
    value: function initialSyncWithDom() {
      this.disabled = this.input_.disabled;
    }
  }, {
    key: 'getDefaultFoundation',
    value: function getDefaultFoundation() {
      var _this2 = this;

      return new __WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */](_extends({
        addClass: function addClass(className) {
          return _this2.root_.classList.add(className);
        },
        removeClass: function removeClass(className) {
          return _this2.root_.classList.remove(className);
        },
        addClassToLabel: function addClassToLabel(className) {
          var label = _this2.label_;
          if (label) {
            label.classList.add(className);
          }
        },
        removeClassFromLabel: function removeClassFromLabel(className) {
          var label = _this2.label_;
          if (label) {
            label.classList.remove(className);
          }
        }
      }, this.getInputAdapterMethods_(), this.getHelptextAdapterMethods_()));
    }
  }, {
    key: 'getInputAdapterMethods_',
    value: function getInputAdapterMethods_() {
      var _this3 = this;

      return {
        registerInputFocusHandler: function registerInputFocusHandler(handler) {
          return _this3.input_.addEventListener('focus', handler);
        },
        registerInputBlurHandler: function registerInputBlurHandler(handler) {
          return _this3.input_.addEventListener('blur', handler);
        },
        registerInputInputHandler: function registerInputInputHandler(handler) {
          return _this3.input_.addEventListener('input', handler);
        },
        registerInputKeydownHandler: function registerInputKeydownHandler(handler) {
          return _this3.input_.addEventListener('keydown', handler);
        },
        deregisterInputFocusHandler: function deregisterInputFocusHandler(handler) {
          return _this3.input_.removeEventListener('focus', handler);
        },
        deregisterInputBlurHandler: function deregisterInputBlurHandler(handler) {
          return _this3.input_.removeEventListener('blur', handler);
        },
        deregisterInputInputHandler: function deregisterInputInputHandler(handler) {
          return _this3.input_.removeEventListener('input', handler);
        },
        deregisterInputKeydownHandler: function deregisterInputKeydownHandler(handler) {
          return _this3.input_.removeEventListener('keydown', handler);
        },
        getNativeInput: function getNativeInput() {
          return _this3.input_;
        }
      };
    }
  }, {
    key: 'getHelptextAdapterMethods_',
    value: function getHelptextAdapterMethods_() {
      var _this4 = this;

      return {
        addClassToHelptext: function addClassToHelptext(className) {
          if (_this4.helptextElement) {
            _this4.helptextElement.classList.add(className);
          }
        },
        removeClassFromHelptext: function removeClassFromHelptext(className) {
          if (_this4.helptextElement) {
            _this4.helptextElement.classList.remove(className);
          }
        },
        helptextHasClass: function helptextHasClass(className) {
          if (!_this4.helptextElement) {
            return false;
          }
          return _this4.helptextElement.classList.contains(className);
        },
        setHelptextAttr: function setHelptextAttr(name, value) {
          if (_this4.helptextElement) {
            _this4.helptextElement.setAttribute(name, value);
          }
        },
        removeHelptextAttr: function removeHelptextAttr(name) {
          if (_this4.helptextElement) {
            _this4.helptextElement.removeAttribute(name);
          }
        }
      };
    }
  }, {
    key: 'disabled',
    get: function get() {
      return this.foundation_.isDisabled();
    },
    set: function set(disabled) {
      this.foundation_.setDisabled(disabled);
    }
  }, {
    key: 'input_',
    get: function get() {
      return this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */].strings.INPUT_SELECTOR);
    }
  }, {
    key: 'label_',
    get: function get() {
      return this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */].strings.LABEL_SELECTOR);
    }
  }]);

  return MDCTextfield;
}(__WEBPACK_IMPORTED_MODULE_0__material_base__["MDCComponent"]);

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__foundation__ = __webpack_require__(7);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Copyright 2016 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */



var MDCComponent = function () {
  _createClass(MDCComponent, null, [{
    key: 'attachTo',
    value: function attachTo(root) {
      // Subclasses which extend MDCBase should provide an attachTo() method that takes a root element and
      // returns an instantiated component with its root set to that element. Also note that in the cases of
      // subclasses, an explicit foundation class will not have to be passed in; it will simply be initialized
      // from getDefaultFoundation().
      return new MDCComponent(root, new __WEBPACK_IMPORTED_MODULE_0__foundation__["a" /* default */]());
    }
  }]);

  function MDCComponent(root) {
    var foundation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

    _classCallCheck(this, MDCComponent);

    this.root_ = root;

    for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }

    this.initialize.apply(this, args);
    // Note that we initialize foundation here and not within the constructor's default param so that
    // this.root_ is defined and can be used within the foundation class.
    this.foundation_ = foundation === undefined ? this.getDefaultFoundation() : foundation;
    this.foundation_.init();
    this.initialSyncWithDOM();
  }

  _createClass(MDCComponent, [{
    key: 'initialize',
    value: function initialize() /* ...args */{
      // Subclasses can override this to do any additional setup work that would be considered part of a
      // "constructor". Essentially, it is a hook into the parent constructor before the foundation is
      // initialized. Any additional arguments besides root and foundation will be passed in here.
    }
  }, {
    key: 'getDefaultFoundation',
    value: function getDefaultFoundation() {
      // Subclasses must override this method to return a properly configured foundation class for the
      // component.
      throw new Error('Subclasses must override getDefaultFoundation to return a properly configured ' + 'foundation class');
    }
  }, {
    key: 'initialSyncWithDOM',
    value: function initialSyncWithDOM() {
      // Subclasses should override this method if they need to perform work to synchronize with a host DOM
      // object. An example of this would be a form control wrapper that needs to synchronize its internal state
      // to some property or attribute of the host DOM. Please note: this is *not* the place to perform DOM
      // reads/writes that would cause layout / paint, as this is called synchronously from within the constructor.
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      // Subclasses may implement this method to release any resources / deregister any listeners they have
      // attached. An example of this might be deregistering a resize event from the window object.
      this.foundation_.destroy();
    }

    // Wrapper method to add an event listener to the component's root element. This is most useful when
    // listening for custom events.

  }, {
    key: 'listen',
    value: function listen(evtType, handler) {
      this.root_.addEventListener(evtType, handler);
    }

    // Wrapper method to remove an event listener to the component's root element. This is most useful when
    // unlistening for custom events.

  }, {
    key: 'unlisten',
    value: function unlisten(evtType, handler) {
      this.root_.removeEventListener(evtType, handler);
    }

    // Fires a cross-browser-compatible custom event from the component root of the given type,
    // with the given data.

  }, {
    key: 'emit',
    value: function emit(evtType, evtData) {
      var evt = void 0;
      if (typeof CustomEvent === 'function') {
        evt = new CustomEvent(evtType, { detail: evtData });
      } else {
        evt = document.createEvent('CustomEvent');
        evt.initCustomEvent(evtType, false, false, evtData);
      }

      this.root_.dispatchEvent(evt);
    }
  }]);

  return MDCComponent;
}();

/* harmony default export */ __webpack_exports__["a"] = MDCComponent;

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cssClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return strings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return numbers; });
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var ROOT = 'mdc-checkbox';

var cssClasses = {
  ROOT: 'mdc-checkbox',
  UPGRADED: 'mdc-checkbox--upgraded',
  CHECKED: 'mdc-checkbox--checked',
  INDETERMINATE: 'mdc-checkbox--indeterminate',
  ANIM_UNCHECKED_CHECKED: 'mdc-checkbox--anim-unchecked-checked',
  ANIM_UNCHECKED_INDETERMINATE: 'mdc-checkbox--anim-unchecked-indeterminate',
  ANIM_CHECKED_UNCHECKED: 'mdc-checkbox--anim-checked-unchecked',
  ANIM_CHECKED_INDETERMINATE: 'mdc-checkbox--anim-checked-indeterminate',
  ANIM_INDETERMINATE_CHECKED: 'mdc-checkbox--anim-indeterminate-checked',
  ANIM_INDETERMINATE_UNCHECKED: 'mdc-checkbox--anim-indeterminate-unchecked'
};

var strings = {
  NATIVE_CONTROL_SELECTOR: '.' + ROOT + '__native-control',
  TRANSITION_STATE_INIT: 'init',
  TRANSITION_STATE_CHECKED: 'checked',
  TRANSITION_STATE_UNCHECKED: 'unchecked',
  TRANSITION_STATE_INDETERMINATE: 'indeterminate'
};

var numbers = {
  ANIM_END_LATCH_MS: 100
};

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(21);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */




var CB_PROTO_PROPS = ['checked', 'indeterminate'];

var MDCCheckboxFoundation = function (_MDCFoundation) {
  _inherits(MDCCheckboxFoundation, _MDCFoundation);

  _createClass(MDCCheckboxFoundation, null, [{
    key: 'cssClasses',
    get: function get() {
      return __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* cssClasses */];
    }
  }, {
    key: 'strings',
    get: function get() {
      return __WEBPACK_IMPORTED_MODULE_1__constants__["b" /* strings */];
    }
  }, {
    key: 'numbers',
    get: function get() {
      return __WEBPACK_IMPORTED_MODULE_1__constants__["c" /* numbers */];
    }
  }, {
    key: 'defaultAdapter',
    get: function get() {
      return {
        addClass: function addClass() /* className: string */{},
        removeClass: function removeClass() /* className: string */{},
        registerAnimationEndHandler: function registerAnimationEndHandler() /* handler: EventListener */{},
        deregisterAnimationEndHandler: function deregisterAnimationEndHandler() /* handler: EventListener */{},
        registerChangeHandler: function registerChangeHandler() /* handler: EventListener */{},
        deregisterChangeHandler: function deregisterChangeHandler() /* handler: EventListener */{},
        getNativeControl: function getNativeControl() /* HTMLInputElement */{},
        forceLayout: function forceLayout() {},
        isAttachedToDOM: function isAttachedToDOM() /* boolean */{}
      };
    }
  }]);

  function MDCCheckboxFoundation(adapter) {
    _classCallCheck(this, MDCCheckboxFoundation);

    var _this = _possibleConstructorReturn(this, (MDCCheckboxFoundation.__proto__ || Object.getPrototypeOf(MDCCheckboxFoundation)).call(this, _extends(MDCCheckboxFoundation.defaultAdapter, adapter)));

    _this.currentCheckState_ = __WEBPACK_IMPORTED_MODULE_1__constants__["b" /* strings */].TRANSITION_STATE_INIT;
    _this.currentAnimationClass_ = '';
    _this.animEndLatchTimer_ = 0;
    _this.animEndHandler_ = function () {
      clearTimeout(_this.animEndLatchTimer_);
      _this.animEndLatchTimer_ = setTimeout(function () {
        _this.adapter_.removeClass(_this.currentAnimationClass_);
        _this.adapter_.deregisterAnimationEndHandler(_this.animEndHandler_);
      }, __WEBPACK_IMPORTED_MODULE_1__constants__["c" /* numbers */].ANIM_END_LATCH_MS);
    };
    _this.changeHandler_ = function () {
      return _this.transitionCheckState_();
    };
    return _this;
  }

  _createClass(MDCCheckboxFoundation, [{
    key: 'init',
    value: function init() {
      this.adapter_.addClass(__WEBPACK_IMPORTED_MODULE_1__constants__["a" /* cssClasses */].UPGRADED);
      this.adapter_.registerChangeHandler(this.changeHandler_);
      this.installPropertyChangeHooks_();
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      this.adapter_.deregisterChangeHandler(this.changeHandler_);
      this.uninstallPropertyChangeHooks_();
    }
  }, {
    key: 'isChecked',
    value: function isChecked() {
      return this.getNativeControl_().checked;
    }
  }, {
    key: 'setChecked',
    value: function setChecked(checked) {
      this.getNativeControl_().checked = checked;
    }
  }, {
    key: 'isIndeterminate',
    value: function isIndeterminate() {
      return this.getNativeControl_().indeterminate;
    }
  }, {
    key: 'setIndeterminate',
    value: function setIndeterminate(indeterminate) {
      this.getNativeControl_().indeterminate = indeterminate;
    }
  }, {
    key: 'isDisabled',
    value: function isDisabled() {
      return this.getNativeControl_().disabled;
    }
  }, {
    key: 'setDisabled',
    value: function setDisabled(disabled) {
      this.getNativeControl_().disabled = disabled;
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      return this.getNativeControl_().value;
    }
  }, {
    key: 'setValue',
    value: function setValue(value) {
      this.getNativeControl_().value = value;
    }
  }, {
    key: 'installPropertyChangeHooks_',
    value: function installPropertyChangeHooks_() {
      var _this2 = this;

      var nativeCb = this.getNativeControl_();
      var cbProto = Object.getPrototypeOf(nativeCb);

      CB_PROTO_PROPS.forEach(function (controlState) {
        var desc = Object.getOwnPropertyDescriptor(cbProto, controlState);
        // We have to check for this descriptor, since some browsers (Safari) don't support its return.
        // See: https://bugs.webkit.org/show_bug.cgi?id=49739
        if (validDescriptor(desc)) {
          Object.defineProperty(nativeCb, controlState, {
            get: desc.get,
            set: function set(state) {
              desc.set.call(nativeCb, state);
              _this2.transitionCheckState_();
            },
            configurable: desc.configurable,
            enumerable: desc.enumerable
          });
        }
      });
    }
  }, {
    key: 'uninstallPropertyChangeHooks_',
    value: function uninstallPropertyChangeHooks_() {
      var nativeCb = this.getNativeControl_();
      var cbProto = Object.getPrototypeOf(nativeCb);

      CB_PROTO_PROPS.forEach(function (controlState) {
        var desc = Object.getOwnPropertyDescriptor(cbProto, controlState);
        if (validDescriptor(desc)) {
          Object.defineProperty(nativeCb, controlState, desc);
        }
      });
    }
  }, {
    key: 'transitionCheckState_',
    value: function transitionCheckState_() {
      var nativeCb = this.adapter_.getNativeControl();
      if (!nativeCb) {
        return;
      }
      var oldState = this.currentCheckState_;
      var newState = this.determineCheckState_(nativeCb);
      if (oldState === newState) {
        return;
      }

      // Check to ensure that there isn't a previously existing animation class, in case for example
      // the user interacted with the checkbox before the animation was finished.
      if (this.currentAnimationClass_.length > 0) {
        clearTimeout(this.animEndLatchTimer_);
        this.adapter_.forceLayout();
        this.adapter_.removeClass(this.currentAnimationClass_);
      }

      this.currentAnimationClass_ = this.getTransitionAnimationClass_(oldState, newState);
      this.currentCheckState_ = newState;

      // Check for parentNode so that animations are only run when the element is attached
      // to the DOM.
      if (this.adapter_.isAttachedToDOM() && this.currentAnimationClass_.length > 0) {
        this.adapter_.addClass(this.currentAnimationClass_);
        this.adapter_.registerAnimationEndHandler(this.animEndHandler_);
      }
    }
  }, {
    key: 'determineCheckState_',
    value: function determineCheckState_(nativeCb) {
      var TRANSITION_STATE_INDETERMINATE = __WEBPACK_IMPORTED_MODULE_1__constants__["b" /* strings */].TRANSITION_STATE_INDETERMINATE,
          TRANSITION_STATE_CHECKED = __WEBPACK_IMPORTED_MODULE_1__constants__["b" /* strings */].TRANSITION_STATE_CHECKED,
          TRANSITION_STATE_UNCHECKED = __WEBPACK_IMPORTED_MODULE_1__constants__["b" /* strings */].TRANSITION_STATE_UNCHECKED;


      if (nativeCb.indeterminate) {
        return TRANSITION_STATE_INDETERMINATE;
      }
      return nativeCb.checked ? TRANSITION_STATE_CHECKED : TRANSITION_STATE_UNCHECKED;
    }
  }, {
    key: 'getTransitionAnimationClass_',
    value: function getTransitionAnimationClass_(oldState, newState) {
      var TRANSITION_STATE_INIT = __WEBPACK_IMPORTED_MODULE_1__constants__["b" /* strings */].TRANSITION_STATE_INIT,
          TRANSITION_STATE_CHECKED = __WEBPACK_IMPORTED_MODULE_1__constants__["b" /* strings */].TRANSITION_STATE_CHECKED,
          TRANSITION_STATE_UNCHECKED = __WEBPACK_IMPORTED_MODULE_1__constants__["b" /* strings */].TRANSITION_STATE_UNCHECKED;
      var _MDCCheckboxFoundatio = MDCCheckboxFoundation.cssClasses,
          ANIM_UNCHECKED_CHECKED = _MDCCheckboxFoundatio.ANIM_UNCHECKED_CHECKED,
          ANIM_UNCHECKED_INDETERMINATE = _MDCCheckboxFoundatio.ANIM_UNCHECKED_INDETERMINATE,
          ANIM_CHECKED_UNCHECKED = _MDCCheckboxFoundatio.ANIM_CHECKED_UNCHECKED,
          ANIM_CHECKED_INDETERMINATE = _MDCCheckboxFoundatio.ANIM_CHECKED_INDETERMINATE,
          ANIM_INDETERMINATE_CHECKED = _MDCCheckboxFoundatio.ANIM_INDETERMINATE_CHECKED,
          ANIM_INDETERMINATE_UNCHECKED = _MDCCheckboxFoundatio.ANIM_INDETERMINATE_UNCHECKED;


      switch (oldState) {
        case TRANSITION_STATE_INIT:
          if (newState === TRANSITION_STATE_UNCHECKED) {
            return '';
          }
        // fallthrough
        case TRANSITION_STATE_UNCHECKED:
          return newState === TRANSITION_STATE_CHECKED ? ANIM_UNCHECKED_CHECKED : ANIM_UNCHECKED_INDETERMINATE;
        case TRANSITION_STATE_CHECKED:
          return newState === TRANSITION_STATE_UNCHECKED ? ANIM_CHECKED_UNCHECKED : ANIM_CHECKED_INDETERMINATE;
        // TRANSITION_STATE_INDETERMINATE
        default:
          return newState === TRANSITION_STATE_CHECKED ? ANIM_INDETERMINATE_CHECKED : ANIM_INDETERMINATE_UNCHECKED;
      }
    }
  }, {
    key: 'getNativeControl_',
    value: function getNativeControl_() {
      return this.adapter_.getNativeControl() || {
        checked: false,
        indeterminate: false,
        disabled: false,
        value: null
      };
    }
  }]);

  return MDCCheckboxFoundation;
}(__WEBPACK_IMPORTED_MODULE_0__material_base__["MDCFoundation"]);

/* harmony default export */ __webpack_exports__["a"] = MDCCheckboxFoundation;


function validDescriptor(inputPropDesc) {
  return inputPropDesc && typeof inputPropDesc.set === 'function';
}

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cssClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return strings; });
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var cssClasses = {
  ROOT: 'mdc-dialog',
  OPEN: 'mdc-dialog--open',
  BACKDROP: 'mdc-dialog__backdrop',
  SCROLL_LOCK: 'mdc-dialog-scroll-lock',
  ACCEPT_BTN: 'mdc-dialog__footer__button--accept',
  CANCEL_BTN: 'mdc-dialog__footer__button--cancel'
};

var strings = {
  OPEN_DIALOG_SELECTOR: '.mdc-dialog--open',
  DIALOG_SURFACE_SELECTOR: '.mdc-dialog__surface',
  ACCEPT_SELECTOR: '.mdc-dialog__footer__button--accept'
};

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(23);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */




var MDCDialogFoundation = function (_MDCFoundation) {
  _inherits(MDCDialogFoundation, _MDCFoundation);

  _createClass(MDCDialogFoundation, null, [{
    key: 'cssClasses',
    get: function get() {
      return __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* cssClasses */];
    }
  }, {
    key: 'strings',
    get: function get() {
      return __WEBPACK_IMPORTED_MODULE_1__constants__["b" /* strings */];
    }
  }, {
    key: 'defaultAdapter',
    get: function get() {
      return {
        addClass: function addClass() /* className: string */{},
        removeClass: function removeClass() /* className: string */{},
        setStyle: function setStyle() /* propertyName: string, value: string */{},
        addBodyClass: function addBodyClass() /* className: string */{},
        removeBodyClass: function removeBodyClass() /* className: string */{},
        eventTargetHasClass: function eventTargetHasClass() {
          return (/* target: EventTarget, className: string */ /* boolean */false
          );
        },
        registerInteractionHandler: function registerInteractionHandler() /* evt: string, handler: EventListener */{},
        deregisterInteractionHandler: function deregisterInteractionHandler() /* evt: string, handler: EventListener */{},
        registerSurfaceInteractionHandler: function registerSurfaceInteractionHandler() /* evt: string, handler: EventListener */{},
        deregisterSurfaceInteractionHandler: function deregisterSurfaceInteractionHandler() /* evt: string, handler: EventListener */{},
        registerDocumentKeydownHandler: function registerDocumentKeydownHandler() /* handler: EventListener */{},
        deregisterDocumentKeydownHandler: function deregisterDocumentKeydownHandler() /* handler: EventListener */{},
        notifyAccept: function notifyAccept() {},
        notifyCancel: function notifyCancel() {},
        trapFocusOnSurface: function trapFocusOnSurface() {},
        untrapFocusOnSurface: function untrapFocusOnSurface() {}
      };
    }
  }]);

  function MDCDialogFoundation(adapter) {
    _classCallCheck(this, MDCDialogFoundation);

    var _this = _possibleConstructorReturn(this, (MDCDialogFoundation.__proto__ || Object.getPrototypeOf(MDCDialogFoundation)).call(this, _extends(MDCDialogFoundation.defaultAdapter, adapter)));

    _this.isOpen_ = false;
    _this.componentClickHandler_ = function () {
      return _this.cancel(true);
    };
    _this.dialogClickHandler_ = function (evt) {
      return _this.handleDialogClick_(evt);
    };
    _this.documentKeydownHandler_ = function (evt) {
      if (evt.key && evt.key === 'Escape' || evt.keyCode === 27) {
        _this.cancel(true);
      }
    };
    return _this;
  }

  _createClass(MDCDialogFoundation, [{
    key: 'destroy',
    value: function destroy() {
      this.close();
    }
  }, {
    key: 'open',
    value: function open() {
      this.isOpen_ = true;
      this.disableScroll_();
      this.adapter_.setStyle('visibility', 'visible');
      this.adapter_.addClass(MDCDialogFoundation.cssClasses.OPEN);
      this.adapter_.trapFocusOnSurface();

      this.adapter_.registerDocumentKeydownHandler(this.documentKeydownHandler_);
      this.adapter_.registerSurfaceInteractionHandler('click', this.dialogClickHandler_);
      this.adapter_.registerInteractionHandler('click', this.componentClickHandler_);
    }
  }, {
    key: 'close',
    value: function close() {
      this.isOpen_ = false;
      this.adapter_.untrapFocusOnSurface();
      this.adapter_.removeClass(MDCDialogFoundation.cssClasses.OPEN);
      this.adapter_.setStyle('visibility', 'hidden');
      this.enableScroll_();

      this.adapter_.deregisterSurfaceInteractionHandler('click', this.dialogClickHandler_);
      this.adapter_.deregisterDocumentKeydownHandler(this.documentKeydownHandler_);
      this.adapter_.deregisterInteractionHandler('click', this.componentClickHandler_);
    }
  }, {
    key: 'isOpen',
    value: function isOpen() {
      return this.isOpen_;
    }
  }, {
    key: 'accept',
    value: function accept(shouldNotify) {
      if (shouldNotify) {
        this.adapter_.notifyAccept();
      }

      this.close();
    }
  }, {
    key: 'cancel',
    value: function cancel(shouldNotify) {
      if (shouldNotify) {
        this.adapter_.notifyCancel();
      }

      this.close();
    }
  }, {
    key: 'handleDialogClick_',
    value: function handleDialogClick_(evt) {
      evt.stopPropagation();
      var target = evt.target;

      if (this.adapter_.eventTargetHasClass(target, __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* cssClasses */].ACCEPT_BTN)) {
        this.accept(true);
      } else if (this.adapter_.eventTargetHasClass(target, __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* cssClasses */].CANCEL_BTN)) {
        this.cancel(true);
      }
    }
  }, {
    key: 'disableScroll_',
    value: function disableScroll_() {
      this.adapter_.addBodyClass(__WEBPACK_IMPORTED_MODULE_1__constants__["a" /* cssClasses */].SCROLL_LOCK);
    }
  }, {
    key: 'enableScroll_',
    value: function enableScroll_() {
      this.adapter_.removeBodyClass(__WEBPACK_IMPORTED_MODULE_1__constants__["a" /* cssClasses */].SCROLL_LOCK);
    }
  }]);

  return MDCDialogFoundation;
}(__WEBPACK_IMPORTED_MODULE_0__material_base__["MDCFoundation"]);

/* harmony default export */ __webpack_exports__["a"] = MDCDialogFoundation;

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_focus_trap__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_focus_trap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_focus_trap__);
/* harmony export (immutable) */ __webpack_exports__["createFocusTrapInstance"] = createFocusTrapInstance;
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */



function createFocusTrapInstance(surfaceEl, acceptButtonEl) {
  var focusTrapFactory = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : __WEBPACK_IMPORTED_MODULE_0_focus_trap___default.a;

  return focusTrapFactory(surfaceEl, {
    initialFocus: acceptButtonEl,
    clickOutsideDeactivates: true
  });
}

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__slidable__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cssClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return strings; });
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */



var cssClasses = {
  ROOT: 'mdc-persistent-drawer',
  OPEN: 'mdc-persistent-drawer--open',
  ANIMATING: 'mdc-persistent-drawer--animating'
};

var strings = {
  DRAWER_SELECTOR: '.mdc-persistent-drawer__drawer',
  FOCUSABLE_ELEMENTS: __WEBPACK_IMPORTED_MODULE_0__slidable__["b" /* FOCUSABLE_ELEMENTS */]
};

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__slidable__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(26);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */




var MDCPersistentDrawerFoundation = function (_MDCSlidableDrawerFou) {
  _inherits(MDCPersistentDrawerFoundation, _MDCSlidableDrawerFou);

  _createClass(MDCPersistentDrawerFoundation, null, [{
    key: 'cssClasses',
    get: function get() {
      return __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* cssClasses */];
    }
  }, {
    key: 'strings',
    get: function get() {
      return __WEBPACK_IMPORTED_MODULE_1__constants__["b" /* strings */];
    }
  }, {
    key: 'defaultAdapter',
    get: function get() {
      return _extends(__WEBPACK_IMPORTED_MODULE_0__slidable__["a" /* MDCSlidableDrawerFoundation */].defaultAdapter, {
        isDrawer: function isDrawer() {
          return false;
        }
      });
    }
  }]);

  function MDCPersistentDrawerFoundation(adapter) {
    _classCallCheck(this, MDCPersistentDrawerFoundation);

    return _possibleConstructorReturn(this, (MDCPersistentDrawerFoundation.__proto__ || Object.getPrototypeOf(MDCPersistentDrawerFoundation)).call(this, _extends(MDCPersistentDrawerFoundation.defaultAdapter, adapter), MDCPersistentDrawerFoundation.cssClasses.ROOT, MDCPersistentDrawerFoundation.cssClasses.ANIMATING, MDCPersistentDrawerFoundation.cssClasses.OPEN));
  }

  _createClass(MDCPersistentDrawerFoundation, [{
    key: 'isRootTransitioningEventTarget_',
    value: function isRootTransitioningEventTarget_(el) {
      return this.adapter_.isDrawer(el);
    }
  }]);

  return MDCPersistentDrawerFoundation;
}(__WEBPACK_IMPORTED_MODULE_0__slidable__["a" /* MDCSlidableDrawerFoundation */]);

/* harmony default export */ __webpack_exports__["a"] = MDCPersistentDrawerFoundation;

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foundation__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util__ = __webpack_require__(3);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__foundation__["a"]; });
/* unused harmony reexport util */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDCPersistentDrawer; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */








var MDCPersistentDrawer = function (_MDCComponent) {
  _inherits(MDCPersistentDrawer, _MDCComponent);

  function MDCPersistentDrawer() {
    _classCallCheck(this, MDCPersistentDrawer);

    return _possibleConstructorReturn(this, (MDCPersistentDrawer.__proto__ || Object.getPrototypeOf(MDCPersistentDrawer)).apply(this, arguments));
  }

  _createClass(MDCPersistentDrawer, [{
    key: 'getDefaultFoundation',
    value: function getDefaultFoundation() {
      var _this2 = this;

      var FOCUSABLE_ELEMENTS = __WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */].strings.FOCUSABLE_ELEMENTS;


      return new __WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */]({
        addClass: function addClass(className) {
          return _this2.root_.classList.add(className);
        },
        removeClass: function removeClass(className) {
          return _this2.root_.classList.remove(className);
        },
        hasClass: function hasClass(className) {
          return _this2.root_.classList.contains(className);
        },
        hasNecessaryDom: function hasNecessaryDom() {
          return Boolean(_this2.drawer);
        },
        registerInteractionHandler: function registerInteractionHandler(evt, handler) {
          return _this2.root_.addEventListener(__WEBPACK_IMPORTED_MODULE_2__util__["remapEvent"](evt), handler, __WEBPACK_IMPORTED_MODULE_2__util__["applyPassive"]());
        },
        deregisterInteractionHandler: function deregisterInteractionHandler(evt, handler) {
          return _this2.root_.removeEventListener(__WEBPACK_IMPORTED_MODULE_2__util__["remapEvent"](evt), handler, __WEBPACK_IMPORTED_MODULE_2__util__["applyPassive"]());
        },
        registerDrawerInteractionHandler: function registerDrawerInteractionHandler(evt, handler) {
          return _this2.drawer.addEventListener(__WEBPACK_IMPORTED_MODULE_2__util__["remapEvent"](evt), handler);
        },
        deregisterDrawerInteractionHandler: function deregisterDrawerInteractionHandler(evt, handler) {
          return _this2.drawer.removeEventListener(__WEBPACK_IMPORTED_MODULE_2__util__["remapEvent"](evt), handler);
        },
        registerTransitionEndHandler: function registerTransitionEndHandler(handler) {
          return _this2.root_.addEventListener('transitionend', handler);
        },
        deregisterTransitionEndHandler: function deregisterTransitionEndHandler(handler) {
          return _this2.root_.removeEventListener('transitionend', handler);
        },
        registerDocumentKeydownHandler: function registerDocumentKeydownHandler(handler) {
          return document.addEventListener('keydown', handler);
        },
        deregisterDocumentKeydownHandler: function deregisterDocumentKeydownHandler(handler) {
          return document.removeEventListener('keydown', handler);
        },
        getDrawerWidth: function getDrawerWidth() {
          return _this2.drawer.offsetWidth;
        },
        setTranslateX: function setTranslateX(value) {
          return _this2.drawer.style.setProperty(__WEBPACK_IMPORTED_MODULE_2__util__["getTransformPropertyName"](), value === null ? null : 'translateX(' + value + 'px)');
        },
        getFocusableElements: function getFocusableElements() {
          return _this2.drawer.querySelectorAll(FOCUSABLE_ELEMENTS);
        },
        saveElementTabState: function saveElementTabState(el) {
          return __WEBPACK_IMPORTED_MODULE_2__util__["saveElementTabState"](el);
        },
        restoreElementTabState: function restoreElementTabState(el) {
          return __WEBPACK_IMPORTED_MODULE_2__util__["restoreElementTabState"](el);
        },
        makeElementUntabbable: function makeElementUntabbable(el) {
          return el.setAttribute('tabindex', -1);
        },
        isRtl: function isRtl() {
          return getComputedStyle(_this2.root_).getPropertyValue('direction') === 'rtl';
        },
        isDrawer: function isDrawer(el) {
          return el === _this2.drawer;
        }
      });
    }
  }, {
    key: 'open',
    get: function get() {
      return this.foundation_.isOpen();
    },
    set: function set(value) {
      if (value) {
        this.foundation_.open();
      } else {
        this.foundation_.close();
      }
    }

    /* Return the drawer element inside the component. */

  }, {
    key: 'drawer',
    get: function get() {
      return this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */].strings.DRAWER_SELECTOR);
    }
  }], [{
    key: 'attachTo',
    value: function attachTo(root) {
      return new MDCPersistentDrawer(root);
    }
  }]);

  return MDCPersistentDrawer;
}(__WEBPACK_IMPORTED_MODULE_0__material_base__["MDCComponent"]);

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FOCUSABLE_ELEMENTS; });
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var FOCUSABLE_ELEMENTS = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), ' + 'button:not([disabled]), iframe, object, embed, [tabindex], [contenteditable]';

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDCSlidableDrawerFoundation; });
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */



var MDCSlidableDrawerFoundation = function (_MDCFoundation) {
  _inherits(MDCSlidableDrawerFoundation, _MDCFoundation);

  _createClass(MDCSlidableDrawerFoundation, null, [{
    key: 'defaultAdapter',
    get: function get() {
      return {
        addClass: function addClass() /* className: string */{},
        removeClass: function removeClass() /* className: string */{},
        hasClass: function hasClass() /* className: string */{},
        hasNecessaryDom: function hasNecessaryDom() {
          return (/* boolean */false
          );
        },
        registerInteractionHandler: function registerInteractionHandler() /* evt: string, handler: EventListener */{},
        deregisterInteractionHandler: function deregisterInteractionHandler() /* evt: string, handler: EventListener */{},
        registerDrawerInteractionHandler: function registerDrawerInteractionHandler() /* evt: string, handler: EventListener */{},
        deregisterDrawerInteractionHandler: function deregisterDrawerInteractionHandler() /* evt: string, handler: EventListener */{},
        registerTransitionEndHandler: function registerTransitionEndHandler() /* handler: EventListener */{},
        deregisterTransitionEndHandler: function deregisterTransitionEndHandler() /* handler: EventListener */{},
        registerDocumentKeydownHandler: function registerDocumentKeydownHandler() /* handler: EventListener */{},
        deregisterDocumentKeydownHandler: function deregisterDocumentKeydownHandler() /* handler: EventListener */{},
        setTranslateX: function setTranslateX() /* value: number | null */{},
        getFocusableElements: function getFocusableElements() /* NodeList */{},
        saveElementTabState: function saveElementTabState() /* el: Element */{},
        restoreElementTabState: function restoreElementTabState() /* el: Element */{},
        makeElementUntabbable: function makeElementUntabbable() /* el: Element */{},
        isRtl: function isRtl() {
          return (/* boolean */false
          );
        },
        getDrawerWidth: function getDrawerWidth() {
          return (/* number */0
          );
        }
      };
    }
  }]);

  function MDCSlidableDrawerFoundation(adapter, rootCssClass, animatingCssClass, openCssClass) {
    _classCallCheck(this, MDCSlidableDrawerFoundation);

    var _this = _possibleConstructorReturn(this, (MDCSlidableDrawerFoundation.__proto__ || Object.getPrototypeOf(MDCSlidableDrawerFoundation)).call(this, _extends(MDCSlidableDrawerFoundation.defaultAdapter, adapter)));

    _this.rootCssClass_ = rootCssClass;
    _this.animatingCssClass_ = animatingCssClass;
    _this.openCssClass_ = openCssClass;

    _this.transitionEndHandler_ = function (ev) {
      if (_this.isRootTransitioningEventTarget_(ev.target)) {
        _this.adapter_.removeClass(_this.animatingCssClass_);
        _this.adapter_.deregisterTransitionEndHandler(_this.transitionEndHandler_);
      }
    };

    _this.inert_ = false;

    _this.drawerClickHandler_ = function (evt) {
      return evt.stopPropagation();
    };
    _this.componentTouchStartHandler_ = function (evt) {
      return _this.handleTouchStart_(evt);
    };
    _this.componentTouchMoveHandler_ = function (evt) {
      return _this.handleTouchMove_(evt);
    };
    _this.componentTouchEndHandler_ = function (evt) {
      return _this.handleTouchEnd_(evt);
    };
    _this.documentKeydownHandler_ = function (evt) {
      if (evt.key && evt.key === 'Escape' || evt.keyCode === 27) {
        _this.close();
      }
    };
    return _this;
  }

  _createClass(MDCSlidableDrawerFoundation, [{
    key: 'init',
    value: function init() {
      var ROOT = this.rootCssClass_;
      var OPEN = this.openCssClass_;

      if (!this.adapter_.hasClass(ROOT)) {
        throw new Error(ROOT + ' class required in root element.');
      }

      if (!this.adapter_.hasNecessaryDom()) {
        throw new Error('Required DOM nodes missing in ' + ROOT + ' component.');
      }

      if (this.adapter_.hasClass(OPEN)) {
        this.isOpen_ = true;
      } else {
        this.detabinate_();
        this.isOpen_ = false;
      }

      this.adapter_.registerDrawerInteractionHandler('click', this.drawerClickHandler_);
      this.adapter_.registerDrawerInteractionHandler('touchstart', this.componentTouchStartHandler_);
      this.adapter_.registerInteractionHandler('touchmove', this.componentTouchMoveHandler_);
      this.adapter_.registerInteractionHandler('touchend', this.componentTouchEndHandler_);
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      this.adapter_.deregisterDrawerInteractionHandler('click', this.drawerClickHandler_);
      this.adapter_.deregisterDrawerInteractionHandler('touchstart', this.componentTouchStartHandler_);
      this.adapter_.deregisterInteractionHandler('touchmove', this.componentTouchMoveHandler_);
      this.adapter_.deregisterInteractionHandler('touchend', this.componentTouchEndHandler_);
      // Deregister the document keydown handler just in case the component is destroyed while the menu is open.
      this.adapter_.deregisterDocumentKeydownHandler(this.documentKeydownHandler_);
    }
  }, {
    key: 'open',
    value: function open() {
      this.adapter_.registerTransitionEndHandler(this.transitionEndHandler_);
      this.adapter_.registerDocumentKeydownHandler(this.documentKeydownHandler_);
      this.adapter_.addClass(this.animatingCssClass_);
      this.adapter_.addClass(this.openCssClass_);
      this.retabinate_();
      this.isOpen_ = true;
    }
  }, {
    key: 'close',
    value: function close() {
      this.adapter_.deregisterDocumentKeydownHandler(this.documentKeydownHandler_);
      this.adapter_.registerTransitionEndHandler(this.transitionEndHandler_);
      this.adapter_.addClass(this.animatingCssClass_);
      this.adapter_.removeClass(this.openCssClass_);
      this.detabinate_();
      this.isOpen_ = false;
    }
  }, {
    key: 'isOpen',
    value: function isOpen() {
      return this.isOpen_;
    }

    /**
     *  Render all children of the drawer inert when it's closed.
     */

  }, {
    key: 'detabinate_',
    value: function detabinate_() {
      if (this.inert_) {
        return;
      }

      var elements = this.adapter_.getFocusableElements();
      if (elements) {
        for (var i = 0; i < elements.length; i++) {
          this.adapter_.saveElementTabState(elements[i]);
          this.adapter_.makeElementUntabbable(elements[i]);
        }
      }

      this.inert_ = true;
    }

    /**
     *  Make all children of the drawer tabbable again when it's open.
     */

  }, {
    key: 'retabinate_',
    value: function retabinate_() {
      if (!this.inert_) {
        return;
      }

      var elements = this.adapter_.getFocusableElements();
      if (elements) {
        for (var i = 0; i < elements.length; i++) {
          this.adapter_.restoreElementTabState(elements[i]);
        }
      }

      this.inert_ = false;
    }
  }, {
    key: 'handleTouchStart_',
    value: function handleTouchStart_(evt) {
      if (!this.adapter_.hasClass(this.openCssClass_)) {
        return;
      }
      if (evt.pointerType && evt.pointerType !== 'touch') {
        return;
      }

      this.direction_ = this.adapter_.isRtl() ? -1 : 1;
      this.drawerWidth_ = this.adapter_.getDrawerWidth();
      this.startX_ = evt.touches ? evt.touches[0].pageX : evt.pageX;
      this.currentX_ = this.startX_;
      this.touchingSideNav_ = true;

      requestAnimationFrame(this.updateDrawer_.bind(this));
    }
  }, {
    key: 'handleTouchMove_',
    value: function handleTouchMove_(evt) {
      if (evt.pointerType && evt.pointerType !== 'touch') {
        return;
      }

      this.currentX_ = evt.touches ? evt.touches[0].pageX : evt.pageX;
    }
  }, {
    key: 'handleTouchEnd_',
    value: function handleTouchEnd_(evt) {
      if (evt.pointerType && evt.pointerType !== 'touch') {
        return;
      }

      this.prepareForTouchEnd_();

      // Did the user close the drawer by more than 50%?
      if (Math.abs(this.newPosition_ / this.drawerWidth_) >= 0.5) {
        this.close();
      } else {
        // Triggering an open here means we'll get a nice animation back to the fully open state.
        this.open();
      }
    }
  }, {
    key: 'prepareForTouchEnd_',
    value: function prepareForTouchEnd_() {
      this.touchingSideNav_ = false;
      this.adapter_.setTranslateX(null);
    }
  }, {
    key: 'updateDrawer_',
    value: function updateDrawer_() {
      if (!this.touchingSideNav_) {
        return;
      }

      requestAnimationFrame(this.updateDrawer_.bind(this));
      this.adapter_.setTranslateX(this.newPosition_);
    }
  }, {
    key: 'isRootTransitioningEventTarget_',
    value: function isRootTransitioningEventTarget_(el) {
      // Classes extending MDCSlidableDrawerFoundation should implement this method to return true or false
      // if the event target is the root event target currently transitioning.
      return false;
    }
  }, {
    key: 'newPosition_',
    get: function get() {
      var newPos = null;

      if (this.direction_ === 1) {
        newPos = Math.min(0, this.currentX_ - this.startX_);
      } else {
        newPos = Math.max(0, this.currentX_ - this.startX_);
      }

      return newPos;
    }
  }]);

  return MDCSlidableDrawerFoundation;
}(__WEBPACK_IMPORTED_MODULE_0__material_base__["MDCFoundation"]);

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__slidable__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cssClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return strings; });
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */



var cssClasses = {
  ROOT: 'mdc-temporary-drawer',
  OPEN: 'mdc-temporary-drawer--open',
  ANIMATING: 'mdc-temporary-drawer--animating'
};

var strings = {
  DRAWER_SELECTOR: '.mdc-temporary-drawer__drawer',
  OPACITY_VAR_NAME: '--mdc-temporary-drawer-opacity',
  FOCUSABLE_ELEMENTS: __WEBPACK_IMPORTED_MODULE_0__slidable__["b" /* FOCUSABLE_ELEMENTS */]
};

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__slidable__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(31);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */




var MDCTemporaryDrawerFoundation = function (_MDCSlidableDrawerFou) {
  _inherits(MDCTemporaryDrawerFoundation, _MDCSlidableDrawerFou);

  _createClass(MDCTemporaryDrawerFoundation, null, [{
    key: 'cssClasses',
    get: function get() {
      return __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* cssClasses */];
    }
  }, {
    key: 'strings',
    get: function get() {
      return __WEBPACK_IMPORTED_MODULE_1__constants__["b" /* strings */];
    }
  }, {
    key: 'defaultAdapter',
    get: function get() {
      return _extends(__WEBPACK_IMPORTED_MODULE_0__slidable__["a" /* MDCSlidableDrawerFoundation */].defaultAdapter, {
        isDrawer: function isDrawer() {
          return false;
        },
        updateCssVariable: function updateCssVariable() /* value: string */{}
      });
    }
  }]);

  function MDCTemporaryDrawerFoundation(adapter) {
    _classCallCheck(this, MDCTemporaryDrawerFoundation);

    var _this = _possibleConstructorReturn(this, (MDCTemporaryDrawerFoundation.__proto__ || Object.getPrototypeOf(MDCTemporaryDrawerFoundation)).call(this, _extends(MDCTemporaryDrawerFoundation.defaultAdapter, adapter), MDCTemporaryDrawerFoundation.cssClasses.ROOT, MDCTemporaryDrawerFoundation.cssClasses.ANIMATING, MDCTemporaryDrawerFoundation.cssClasses.OPEN));

    _this.componentClickHandler_ = function () {
      return _this.close();
    };
    return _this;
  }

  _createClass(MDCTemporaryDrawerFoundation, [{
    key: 'init',
    value: function init() {
      _get(MDCTemporaryDrawerFoundation.prototype.__proto__ || Object.getPrototypeOf(MDCTemporaryDrawerFoundation.prototype), 'init', this).call(this);

      // Make browser aware of custom property being used in this element.
      // Workaround for certain types of hard-to-reproduce heisenbugs.
      this.adapter_.updateCssVariable(0);
      this.adapter_.registerInteractionHandler('click', this.componentClickHandler_);
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      _get(MDCTemporaryDrawerFoundation.prototype.__proto__ || Object.getPrototypeOf(MDCTemporaryDrawerFoundation.prototype), 'destroy', this).call(this);

      this.adapter_.deregisterInteractionHandler('click', this.componentClickHandler_);
    }
  }, {
    key: 'open',
    value: function open() {
      // Make sure custom property values are cleared before starting.
      this.adapter_.updateCssVariable('');

      _get(MDCTemporaryDrawerFoundation.prototype.__proto__ || Object.getPrototypeOf(MDCTemporaryDrawerFoundation.prototype), 'open', this).call(this);
    }
  }, {
    key: 'close',
    value: function close() {
      // Make sure custom property values are cleared before making any changes.
      this.adapter_.updateCssVariable('');

      _get(MDCTemporaryDrawerFoundation.prototype.__proto__ || Object.getPrototypeOf(MDCTemporaryDrawerFoundation.prototype), 'close', this).call(this);
    }
  }, {
    key: 'prepareForTouchEnd_',
    value: function prepareForTouchEnd_() {
      _get(MDCTemporaryDrawerFoundation.prototype.__proto__ || Object.getPrototypeOf(MDCTemporaryDrawerFoundation.prototype), 'prepareForTouchEnd_', this).call(this);

      this.adapter_.updateCssVariable('');
    }
  }, {
    key: 'updateDrawer_',
    value: function updateDrawer_() {
      _get(MDCTemporaryDrawerFoundation.prototype.__proto__ || Object.getPrototypeOf(MDCTemporaryDrawerFoundation.prototype), 'updateDrawer_', this).call(this);

      var newOpacity = Math.max(0, 1 + this.direction_ * (this.newPosition_ / this.drawerWidth_));
      this.adapter_.updateCssVariable(newOpacity);
    }
  }, {
    key: 'isRootTransitioningEventTarget_',
    value: function isRootTransitioningEventTarget_(el) {
      return this.adapter_.isDrawer(el);
    }
  }]);

  return MDCTemporaryDrawerFoundation;
}(__WEBPACK_IMPORTED_MODULE_0__slidable__["a" /* MDCSlidableDrawerFoundation */]);

/* harmony default export */ __webpack_exports__["a"] = MDCTemporaryDrawerFoundation;

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foundation__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util__ = __webpack_require__(3);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__foundation__["a"]; });
/* unused harmony reexport util */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDCTemporaryDrawer; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */








var MDCTemporaryDrawer = function (_MDCComponent) {
  _inherits(MDCTemporaryDrawer, _MDCComponent);

  function MDCTemporaryDrawer() {
    _classCallCheck(this, MDCTemporaryDrawer);

    return _possibleConstructorReturn(this, (MDCTemporaryDrawer.__proto__ || Object.getPrototypeOf(MDCTemporaryDrawer)).apply(this, arguments));
  }

  _createClass(MDCTemporaryDrawer, [{
    key: 'getDefaultFoundation',
    value: function getDefaultFoundation() {
      var _this2 = this;

      var _MDCTemporaryDrawerFo = __WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */].strings,
          FOCUSABLE_ELEMENTS = _MDCTemporaryDrawerFo.FOCUSABLE_ELEMENTS,
          OPACITY_VAR_NAME = _MDCTemporaryDrawerFo.OPACITY_VAR_NAME;


      return new __WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */]({
        addClass: function addClass(className) {
          return _this2.root_.classList.add(className);
        },
        removeClass: function removeClass(className) {
          return _this2.root_.classList.remove(className);
        },
        hasClass: function hasClass(className) {
          return _this2.root_.classList.contains(className);
        },
        hasNecessaryDom: function hasNecessaryDom() {
          return Boolean(_this2.drawer);
        },
        registerInteractionHandler: function registerInteractionHandler(evt, handler) {
          return _this2.root_.addEventListener(__WEBPACK_IMPORTED_MODULE_2__util__["remapEvent"](evt), handler, __WEBPACK_IMPORTED_MODULE_2__util__["applyPassive"]());
        },
        deregisterInteractionHandler: function deregisterInteractionHandler(evt, handler) {
          return _this2.root_.removeEventListener(__WEBPACK_IMPORTED_MODULE_2__util__["remapEvent"](evt), handler, __WEBPACK_IMPORTED_MODULE_2__util__["applyPassive"]());
        },
        registerDrawerInteractionHandler: function registerDrawerInteractionHandler(evt, handler) {
          return _this2.drawer.addEventListener(__WEBPACK_IMPORTED_MODULE_2__util__["remapEvent"](evt), handler);
        },
        deregisterDrawerInteractionHandler: function deregisterDrawerInteractionHandler(evt, handler) {
          return _this2.drawer.removeEventListener(__WEBPACK_IMPORTED_MODULE_2__util__["remapEvent"](evt), handler);
        },
        registerTransitionEndHandler: function registerTransitionEndHandler(handler) {
          return _this2.drawer.addEventListener('transitionend', handler);
        },
        deregisterTransitionEndHandler: function deregisterTransitionEndHandler(handler) {
          return _this2.drawer.removeEventListener('transitionend', handler);
        },
        registerDocumentKeydownHandler: function registerDocumentKeydownHandler(handler) {
          return document.addEventListener('keydown', handler);
        },
        deregisterDocumentKeydownHandler: function deregisterDocumentKeydownHandler(handler) {
          return document.removeEventListener('keydown', handler);
        },
        getDrawerWidth: function getDrawerWidth() {
          return _this2.drawer.offsetWidth;
        },
        setTranslateX: function setTranslateX(value) {
          return _this2.drawer.style.setProperty(__WEBPACK_IMPORTED_MODULE_2__util__["getTransformPropertyName"](), value === null ? null : 'translateX(' + value + 'px)');
        },
        updateCssVariable: function updateCssVariable(value) {
          if (__WEBPACK_IMPORTED_MODULE_2__util__["supportsCssCustomProperties"]()) {
            _this2.root_.style.setProperty(OPACITY_VAR_NAME, value);
          }
        },
        getFocusableElements: function getFocusableElements() {
          return _this2.drawer.querySelectorAll(FOCUSABLE_ELEMENTS);
        },
        saveElementTabState: function saveElementTabState(el) {
          return __WEBPACK_IMPORTED_MODULE_2__util__["saveElementTabState"](el);
        },
        restoreElementTabState: function restoreElementTabState(el) {
          return __WEBPACK_IMPORTED_MODULE_2__util__["restoreElementTabState"](el);
        },
        makeElementUntabbable: function makeElementUntabbable(el) {
          return el.setAttribute('tabindex', -1);
        },
        isRtl: function isRtl() {
          return getComputedStyle(_this2.root_).getPropertyValue('direction') === 'rtl';
        },
        isDrawer: function isDrawer(el) {
          return el === _this2.drawer;
        }
      });
    }
  }, {
    key: 'open',
    get: function get() {
      return this.foundation_.isOpen();
    },
    set: function set(value) {
      if (value) {
        this.foundation_.open();
      } else {
        this.foundation_.close();
      }
    }

    /* Return the drawer element inside the component. */

  }, {
    key: 'drawer',
    get: function get() {
      return this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */].strings.DRAWER_SELECTOR);
    }
  }], [{
    key: 'attachTo',
    value: function attachTo(root) {
      return new MDCTemporaryDrawer(root);
    }
  }]);

  return MDCTemporaryDrawer;
}(__WEBPACK_IMPORTED_MODULE_0__material_base__["MDCComponent"]);

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cssClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return strings; });
/**
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var cssClasses = {
  ROOT: 'mdc-form-field'
};

var strings = {
  LABEL_SELECTOR: '.mdc-form-field > label'
};

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(34);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */




var MDCFormFieldFoundation = function (_MDCFoundation) {
  _inherits(MDCFormFieldFoundation, _MDCFoundation);

  _createClass(MDCFormFieldFoundation, null, [{
    key: 'cssClasses',
    get: function get() {
      return __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* cssClasses */];
    }
  }, {
    key: 'strings',
    get: function get() {
      return __WEBPACK_IMPORTED_MODULE_1__constants__["b" /* strings */];
    }
  }, {
    key: 'defaultAdapter',
    get: function get() {
      return {
        registerInteractionHandler: function registerInteractionHandler() /* type: string, handler: EventListener */{},
        deregisterInteractionHandler: function deregisterInteractionHandler() /* type: string, handler: EventListener */{},
        activateInputRipple: function activateInputRipple() {},
        deactivateInputRipple: function deactivateInputRipple() {}
      };
    }
  }]);

  function MDCFormFieldFoundation(adapter) {
    _classCallCheck(this, MDCFormFieldFoundation);

    var _this = _possibleConstructorReturn(this, (MDCFormFieldFoundation.__proto__ || Object.getPrototypeOf(MDCFormFieldFoundation)).call(this, _extends(MDCFormFieldFoundation.defaultAdapter, adapter)));

    _this.clickHandler_ = function (evt) {
      return _this.handleClick_(evt);
    };
    return _this;
  }

  _createClass(MDCFormFieldFoundation, [{
    key: 'init',
    value: function init() {
      this.adapter_.registerInteractionHandler('click', this.clickHandler_);
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      this.adapter_.deregisterInteractionHandler('click', this.clickHandler_);
    }
  }, {
    key: 'handleClick_',
    value: function handleClick_(evt) {
      var _this2 = this;

      this.adapter_.activateInputRipple();
      requestAnimationFrame(function () {
        return _this2.adapter_.deactivateInputRipple();
      });
    }
  }]);

  return MDCFormFieldFoundation;
}(__WEBPACK_IMPORTED_MODULE_0__material_base__["MDCFoundation"]);

/* harmony default export */ __webpack_exports__["a"] = MDCFormFieldFoundation;

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return strings; });
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var strings = {
  TILES_SELECTOR: '.mdc-grid-list__tiles',
  TILE_SELECTOR: '.mdc-grid-tile'
};

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(36);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */




var MDCGridListFoundation = function (_MDCFoundation) {
  _inherits(MDCGridListFoundation, _MDCFoundation);

  _createClass(MDCGridListFoundation, null, [{
    key: 'strings',
    get: function get() {
      return __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* strings */];
    }
  }, {
    key: 'defaultAdapter',
    get: function get() {
      return {
        getOffsetWidth: function getOffsetWidth() {
          return (/* number */0
          );
        },
        getNumberOfTiles: function getNumberOfTiles() {
          return (/* number */0
          );
        },
        getOffsetWidthForTileAtIndex: function getOffsetWidthForTileAtIndex() {
          return (/* index: number */ /* number */0
          );
        },
        setStyleForTilesElement: function setStyleForTilesElement() /* property: string, value: string */{},
        registerResizeHandler: function registerResizeHandler() /* handler: EventListener */{},
        deregisterResizeHandler: function deregisterResizeHandler() /* handler: EventListener */{}
      };
    }
  }]);

  function MDCGridListFoundation(adapter) {
    _classCallCheck(this, MDCGridListFoundation);

    var _this = _possibleConstructorReturn(this, (MDCGridListFoundation.__proto__ || Object.getPrototypeOf(MDCGridListFoundation)).call(this, _extends(MDCGridListFoundation.defaultAdapter, adapter)));

    _this.resizeHandler_ = function () {
      return _this.alignCenter();
    };
    _this.resizeFrame_ = 0;
    return _this;
  }

  _createClass(MDCGridListFoundation, [{
    key: 'init',
    value: function init() {
      this.alignCenter();
      this.adapter_.registerResizeHandler(this.resizeHandler_);
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      this.adapter_.deregisterResizeHandler(this.resizeHandler_);
    }
  }, {
    key: 'alignCenter',
    value: function alignCenter() {
      var _this2 = this;

      if (this.resizeFrame_ !== 0) {
        cancelAnimationFrame(this.resizeFrame_);
      }
      this.resizeFrame_ = requestAnimationFrame(function () {
        _this2.alignCenter_();
        _this2.resizeFrame_ = 0;
      });
    }
  }, {
    key: 'alignCenter_',
    value: function alignCenter_() {
      if (this.adapter_.getNumberOfTiles() == 0) {
        return;
      }
      var gridWidth = this.adapter_.getOffsetWidth();
      var itemWidth = this.adapter_.getOffsetWidthForTileAtIndex(0);
      var tilesWidth = itemWidth * Math.floor(gridWidth / itemWidth);
      this.adapter_.setStyleForTilesElement('width', tilesWidth + 'px');
    }
  }]);

  return MDCGridListFoundation;
}(__WEBPACK_IMPORTED_MODULE_0__material_base__["MDCFoundation"]);

/* harmony default export */ __webpack_exports__["a"] = MDCGridListFoundation;

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return strings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cssClasses; });
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var strings = {
  DATA_TOGGLE_ON: 'data-toggle-on',
  DATA_TOGGLE_OFF: 'data-toggle-off',
  ARIA_PRESSED: 'aria-pressed',
  ARIA_DISABLED: 'aria-disabled',
  ARIA_LABEL: 'aria-label'
};

var cssClasses = {
  ROOT: 'mdc-icon-toggle',
  DISABLED: 'mdc-icon-toggle--disabled'
};

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(38);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */




var MDCIconToggleFoundation = function (_MDCFoundation) {
  _inherits(MDCIconToggleFoundation, _MDCFoundation);

  _createClass(MDCIconToggleFoundation, null, [{
    key: 'cssClasses',
    get: function get() {
      return __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* cssClasses */];
    }
  }, {
    key: 'strings',
    get: function get() {
      return __WEBPACK_IMPORTED_MODULE_1__constants__["b" /* strings */];
    }
  }, {
    key: 'defaultAdapter',
    get: function get() {
      return {
        addClass: function addClass() /* className: string */{},
        removeClass: function removeClass() /* className: string */{},
        registerInteractionHandler: function registerInteractionHandler() /* type: string, handler: EventListener */{},
        deregisterInteractionHandler: function deregisterInteractionHandler() /* type: string, handler: EventListener */{},
        setText: function setText() /* text: string */{},
        getTabIndex: function getTabIndex() {
          return (/* number */0
          );
        },
        setTabIndex: function setTabIndex() /* tabIndex: number */{},
        getAttr: function getAttr() {
          return (/* name: string */ /* string */''
          );
        },
        setAttr: function setAttr() /* name: string, value: string */{},
        rmAttr: function rmAttr() /* name: string */{},
        notifyChange: function notifyChange() /* evtData: {isOn: boolean} */{}
      };
    }
  }]);

  function MDCIconToggleFoundation(adapter) {
    _classCallCheck(this, MDCIconToggleFoundation);

    var _this = _possibleConstructorReturn(this, (MDCIconToggleFoundation.__proto__ || Object.getPrototypeOf(MDCIconToggleFoundation)).call(this, _extends(MDCIconToggleFoundation.defaultAdapter, adapter)));

    _this.on_ = false;
    _this.disabled_ = false;
    _this.savedTabIndex_ = -1;
    _this.toggleOnData_ = null;
    _this.toggleOffData_ = null;
    _this.clickHandler_ = function () {
      return _this.toggleFromEvt_();
    };
    _this.isHandlingKeydown_ = false;
    _this.keydownHandler_ = function (evt) {
      if (isSpace(evt)) {
        _this.isHandlingKeydown_ = true;
        return evt.preventDefault();
      }
    };
    _this.keyupHandler_ = function (evt) {
      if (isSpace(evt)) {
        _this.isHandlingKeydown_ = false;
        _this.toggleFromEvt_();
      }
    };
    return _this;
  }

  _createClass(MDCIconToggleFoundation, [{
    key: 'init',
    value: function init() {
      this.refreshToggleData();
      this.adapter_.registerInteractionHandler('click', this.clickHandler_);
      this.adapter_.registerInteractionHandler('keydown', this.keydownHandler_);
      this.adapter_.registerInteractionHandler('keyup', this.keyupHandler_);
    }
  }, {
    key: 'refreshToggleData',
    value: function refreshToggleData() {
      var _MDCIconToggleFoundat = MDCIconToggleFoundation.strings,
          DATA_TOGGLE_ON = _MDCIconToggleFoundat.DATA_TOGGLE_ON,
          DATA_TOGGLE_OFF = _MDCIconToggleFoundat.DATA_TOGGLE_OFF;

      this.toggleOnData_ = this.parseJsonDataAttr_(DATA_TOGGLE_ON);
      this.toggleOffData_ = this.parseJsonDataAttr_(DATA_TOGGLE_OFF);
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      this.adapter_.deregisterInteractionHandler('click', this.clickHandler_);
      this.adapter_.deregisterInteractionHandler('keydown', this.keydownHandler_);
      this.adapter_.deregisterInteractionHandler('keyup', this.keyupHandler_);
    }
  }, {
    key: 'toggleFromEvt_',
    value: function toggleFromEvt_() {
      this.toggle();
      var isOn = this.on_;

      this.adapter_.notifyChange({ isOn: isOn });
    }
  }, {
    key: 'isOn',
    value: function isOn() {
      return this.on_;
    }
  }, {
    key: 'toggle',
    value: function toggle() {
      var isOn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !this.on_;

      this.on_ = isOn;

      var _MDCIconToggleFoundat2 = MDCIconToggleFoundation.strings,
          ARIA_LABEL = _MDCIconToggleFoundat2.ARIA_LABEL,
          ARIA_PRESSED = _MDCIconToggleFoundat2.ARIA_PRESSED;

      var _ref = this.on_ ? this.toggleOnData_ : this.toggleOffData_,
          content = _ref.content,
          label = _ref.label,
          cssClass = _ref.cssClass;

      var _ref2 = this.on_ ? this.toggleOffData_ : this.toggleOnData_,
          classToRemove = _ref2.cssClass;

      if (this.on_) {
        this.adapter_.setAttr(ARIA_PRESSED, 'true');
      } else {
        this.adapter_.setAttr(ARIA_PRESSED, 'false');
      }

      if (classToRemove) {
        this.adapter_.removeClass(classToRemove);
      }
      if (cssClass) {
        this.adapter_.addClass(cssClass);
      }
      if (content) {
        this.adapter_.setText(content);
      }
      if (label) {
        this.adapter_.setAttr(ARIA_LABEL, label);
      }
    }
  }, {
    key: 'parseJsonDataAttr_',
    value: function parseJsonDataAttr_(dataAttr) {
      var val = this.adapter_.getAttr(dataAttr);
      if (!val) {
        return {};
      }
      return JSON.parse(val);
    }
  }, {
    key: 'isDisabled',
    value: function isDisabled() {
      return this.disabled_;
    }
  }, {
    key: 'setDisabled',
    value: function setDisabled(isDisabled) {
      this.disabled_ = isDisabled;

      var DISABLED = MDCIconToggleFoundation.cssClasses.DISABLED;
      var ARIA_DISABLED = MDCIconToggleFoundation.strings.ARIA_DISABLED;


      if (this.disabled_) {
        this.savedTabIndex = this.adapter_.getTabIndex();
        this.adapter_.setTabIndex(-1);
        this.adapter_.setAttr(ARIA_DISABLED, 'true');
        this.adapter_.addClass(DISABLED);
      } else {
        this.adapter_.setTabIndex(this.savedTabIndex);
        this.adapter_.rmAttr(ARIA_DISABLED);
        this.adapter_.removeClass(DISABLED);
      }
    }
  }, {
    key: 'isKeyboardActivated',
    value: function isKeyboardActivated() {
      return this.isHandlingKeydown_;
    }
  }]);

  return MDCIconToggleFoundation;
}(__WEBPACK_IMPORTED_MODULE_0__material_base__["MDCFoundation"]);

/* harmony default export */ __webpack_exports__["a"] = MDCIconToggleFoundation;


function isSpace(_ref3) {
  var key = _ref3.key,
      keyCode = _ref3.keyCode;

  return key && key === 'Space' || keyCode === 32;
}

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cssClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return strings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return numbers; });
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var cssClasses = {
  ROOT: 'mdc-simple-menu',
  OPEN: 'mdc-simple-menu--open',
  ANIMATING: 'mdc-simple-menu--animating',
  TOP_RIGHT: 'mdc-simple-menu--open-from-top-right',
  BOTTOM_LEFT: 'mdc-simple-menu--open-from-bottom-left',
  BOTTOM_RIGHT: 'mdc-simple-menu--open-from-bottom-right'
};

var strings = {
  ITEMS_SELECTOR: '.mdc-simple-menu__items'
};

var numbers = {
  // Amount of time to wait before triggering a selected event on the menu. Note that this time
  // will most likely be bumped up once interactive lists are supported to allow for the ripple to
  // animate before closing the menu
  SELECTED_TRIGGER_DELAY: 50,
  // Total duration of the menu animation.
  TRANSITION_DURATION_MS: 300,
  // The menu starts its open animation with the X axis at this time value (0 - 1).
  TRANSITION_SCALE_ADJUSTMENT_X: 0.5,
  // The time value the menu waits until the animation starts on the Y axis (0 - 1).
  TRANSITION_SCALE_ADJUSTMENT_Y: 0.2,
  // The cubic bezier control points for the animation (cubic-bezier(0, 0, 0.2, 1)).
  TRANSITION_X1: 0,
  TRANSITION_Y1: 0,
  TRANSITION_X2: 0.2,
  TRANSITION_Y2: 1
};

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util__ = __webpack_require__(8);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */





var MDCSimpleMenuFoundation = function (_MDCFoundation) {
  _inherits(MDCSimpleMenuFoundation, _MDCFoundation);

  _createClass(MDCSimpleMenuFoundation, null, [{
    key: 'cssClasses',
    get: function get() {
      return __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* cssClasses */];
    }
  }, {
    key: 'strings',
    get: function get() {
      return __WEBPACK_IMPORTED_MODULE_1__constants__["b" /* strings */];
    }
  }, {
    key: 'numbers',
    get: function get() {
      return __WEBPACK_IMPORTED_MODULE_1__constants__["c" /* numbers */];
    }
  }, {
    key: 'defaultAdapter',
    get: function get() {
      return {
        addClass: function addClass() /* className: string */{},
        removeClass: function removeClass() /* className: string */{},
        hasClass: function hasClass() /* className: string */{},
        hasNecessaryDom: function hasNecessaryDom() {
          return (/* boolean */false
          );
        },
        getInnerDimensions: function getInnerDimensions() {
          return (/* { width: number, height: number } */{}
          );
        },
        hasAnchor: function hasAnchor() {
          return (/* boolean */false
          );
        },
        getAnchorDimensions: function getAnchorDimensions() {
          return (
            /* { width: number, height: number, top: number, right: number, bottom: number, left: number } */{}
          );
        },
        getWindowDimensions: function getWindowDimensions() {
          return (/* { width: number, height: number } */{}
          );
        },
        setScale: function setScale() /* x: number, y: number */{},
        setInnerScale: function setInnerScale() /* x: number, y: number */{},
        getNumberOfItems: function getNumberOfItems() {
          return (/* number */0
          );
        },
        registerInteractionHandler: function registerInteractionHandler() /* type: string, handler: EventListener */{},
        deregisterInteractionHandler: function deregisterInteractionHandler() /* type: string, handler: EventListener */{},
        registerDocumentClickHandler: function registerDocumentClickHandler() /* handler: EventListener */{},
        deregisterDocumentClickHandler: function deregisterDocumentClickHandler() /* handler: EventListener */{},
        getYParamsForItemAtIndex: function getYParamsForItemAtIndex() {
          return (/* index: number */ /* {top: number, height: number} */{}
          );
        },
        setTransitionDelayForItemAtIndex: function setTransitionDelayForItemAtIndex() /* index: number, value: string */{},
        getIndexForEventTarget: function getIndexForEventTarget() {
          return (/* target: EventTarget */ /* number */0
          );
        },
        notifySelected: function notifySelected() /* evtData: {index: number} */{},
        notifyCancel: function notifyCancel() {},
        saveFocus: function saveFocus() {},
        restoreFocus: function restoreFocus() {},
        isFocused: function isFocused() {
          return (/* boolean */false
          );
        },
        focus: function focus() {},
        getFocusedItemIndex: function getFocusedItemIndex() {
          return (/* number */-1
          );
        },
        focusItemAtIndex: function focusItemAtIndex() /* index: number */{},
        isRtl: function isRtl() {
          return (/* boolean */false
          );
        },
        setTransformOrigin: function setTransformOrigin() /* origin: string */{},
        setPosition: function setPosition() /* position: { top: string, right: string, bottom: string, left: string } */{},
        getAccurateTime: function getAccurateTime() {
          return (/* number */0
          );
        }
      };
    }
  }]);

  function MDCSimpleMenuFoundation(adapter) {
    _classCallCheck(this, MDCSimpleMenuFoundation);

    var _this = _possibleConstructorReturn(this, (MDCSimpleMenuFoundation.__proto__ || Object.getPrototypeOf(MDCSimpleMenuFoundation)).call(this, _extends(MDCSimpleMenuFoundation.defaultAdapter, adapter)));

    _this.clickHandler_ = function (evt) {
      return _this.handlePossibleSelected_(evt);
    };
    _this.keydownHandler_ = function (evt) {
      return _this.handleKeyboardDown_(evt);
    };
    _this.keyupHandler_ = function (evt) {
      return _this.handleKeyboardUp_(evt);
    };
    _this.documentClickHandler_ = function (evt) {
      _this.adapter_.notifyCancel();
      _this.close();
    };
    _this.isOpen_ = false;
    _this.startScaleX_ = 0;
    _this.startScaleY_ = 0;
    _this.targetScale_ = 1;
    _this.scaleX_ = 0;
    _this.scaleY_ = 0;
    _this.running_ = false;
    _this.selectedTriggerTimerId_ = 0;
    _this.animationRequestId_ = 0;
    return _this;
  }

  _createClass(MDCSimpleMenuFoundation, [{
    key: 'init',
    value: function init() {
      var _MDCSimpleMenuFoundat = MDCSimpleMenuFoundation.cssClasses,
          ROOT = _MDCSimpleMenuFoundat.ROOT,
          OPEN = _MDCSimpleMenuFoundat.OPEN;


      if (!this.adapter_.hasClass(ROOT)) {
        throw new Error(ROOT + ' class required in root element.');
      }

      if (!this.adapter_.hasNecessaryDom()) {
        throw new Error('Required DOM nodes missing in ' + ROOT + ' component.');
      }

      if (this.adapter_.hasClass(OPEN)) {
        this.isOpen_ = true;
      }

      this.adapter_.registerInteractionHandler('click', this.clickHandler_);
      this.adapter_.registerInteractionHandler('keyup', this.keyupHandler_);
      this.adapter_.registerInteractionHandler('keydown', this.keydownHandler_);
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      clearTimeout(this.selectedTriggerTimerId_);
      // Cancel any currently running animations.
      cancelAnimationFrame(this.animationRequestId_);
      this.adapter_.deregisterInteractionHandler('click', this.clickHandler_);
      this.adapter_.deregisterInteractionHandler('keyup', this.keyupHandler_);
      this.adapter_.deregisterInteractionHandler('keydown', this.keydownHandler_);
      this.adapter_.deregisterDocumentClickHandler(this.documentClickHandler_);
    }

    // Calculate transition delays for individual menu items, so that they fade in one at a time.

  }, {
    key: 'applyTransitionDelays_',
    value: function applyTransitionDelays_() {
      var _MDCSimpleMenuFoundat2 = MDCSimpleMenuFoundation.cssClasses,
          BOTTOM_LEFT = _MDCSimpleMenuFoundat2.BOTTOM_LEFT,
          BOTTOM_RIGHT = _MDCSimpleMenuFoundat2.BOTTOM_RIGHT;

      var numItems = this.adapter_.getNumberOfItems();
      var height = this.dimensions_.height;

      var transitionDuration = MDCSimpleMenuFoundation.numbers.TRANSITION_DURATION_MS / 1000;
      var start = MDCSimpleMenuFoundation.numbers.TRANSITION_SCALE_ADJUSTMENT_Y;

      for (var index = 0; index < numItems; index++) {
        var _adapter_$getYParamsF = this.adapter_.getYParamsForItemAtIndex(index),
            itemTop = _adapter_$getYParamsF.top,
            itemHeight = _adapter_$getYParamsF.height;

        this.itemHeight_ = itemHeight;
        var itemDelayFraction = itemTop / height;
        if (this.adapter_.hasClass(BOTTOM_LEFT) || this.adapter_.hasClass(BOTTOM_RIGHT)) {
          itemDelayFraction = (height - itemTop - itemHeight) / height;
        }
        var itemDelay = (start + itemDelayFraction * (1 - start)) * transitionDuration;
        // Use toFixed() here to normalize CSS unit precision across browsers
        this.adapter_.setTransitionDelayForItemAtIndex(index, itemDelay.toFixed(3) + 's');
      }
    }

    // Remove transition delays from menu items.

  }, {
    key: 'removeTransitionDelays_',
    value: function removeTransitionDelays_() {
      var numItems = this.adapter_.getNumberOfItems();
      for (var i = 0; i < numItems; i++) {
        this.adapter_.setTransitionDelayForItemAtIndex(i, null);
      }
    }

    // Animate menu opening or closing.

  }, {
    key: 'animationLoop_',
    value: function animationLoop_() {
      var _this2 = this;

      var time = this.adapter_.getAccurateTime();
      var _MDCSimpleMenuFoundat3 = MDCSimpleMenuFoundation.numbers,
          TRANSITION_DURATION_MS = _MDCSimpleMenuFoundat3.TRANSITION_DURATION_MS,
          TRANSITION_X1 = _MDCSimpleMenuFoundat3.TRANSITION_X1,
          TRANSITION_Y1 = _MDCSimpleMenuFoundat3.TRANSITION_Y1,
          TRANSITION_X2 = _MDCSimpleMenuFoundat3.TRANSITION_X2,
          TRANSITION_Y2 = _MDCSimpleMenuFoundat3.TRANSITION_Y2,
          TRANSITION_SCALE_ADJUSTMENT_X = _MDCSimpleMenuFoundat3.TRANSITION_SCALE_ADJUSTMENT_X,
          TRANSITION_SCALE_ADJUSTMENT_Y = _MDCSimpleMenuFoundat3.TRANSITION_SCALE_ADJUSTMENT_Y;

      var currentTime = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util__["b" /* clamp */])((time - this.startTime_) / TRANSITION_DURATION_MS);

      // Animate X axis very slowly, so that only the Y axis animation is visible during fade-out.
      var currentTimeX = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util__["b" /* clamp */])((currentTime - TRANSITION_SCALE_ADJUSTMENT_X) / (1 - TRANSITION_SCALE_ADJUSTMENT_X));
      // No time-shifting on the Y axis when closing.
      var currentTimeY = currentTime;

      var startScaleY = this.startScaleY_;
      if (this.targetScale_ === 1) {
        // Start with the menu at the height of a single item.
        if (this.itemHeight_) {
          startScaleY = Math.max(this.itemHeight_ / this.dimensions_.height, startScaleY);
        }
        // X axis moves faster, so time-shift forward.
        currentTimeX = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util__["b" /* clamp */])(currentTime + TRANSITION_SCALE_ADJUSTMENT_X);
        // Y axis moves slower, so time-shift backwards and adjust speed by the difference.
        currentTimeY = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util__["b" /* clamp */])((currentTime - TRANSITION_SCALE_ADJUSTMENT_Y) / (1 - TRANSITION_SCALE_ADJUSTMENT_Y));
      }

      // Apply cubic bezier easing independently to each axis.
      var easeX = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util__["c" /* bezierProgress */])(currentTimeX, TRANSITION_X1, TRANSITION_Y1, TRANSITION_X2, TRANSITION_Y2);
      var easeY = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util__["c" /* bezierProgress */])(currentTimeY, TRANSITION_X1, TRANSITION_Y1, TRANSITION_X2, TRANSITION_Y2);

      // Calculate the scales to apply to the outer container and inner container.
      this.scaleX_ = this.startScaleX_ + (this.targetScale_ - this.startScaleX_) * easeX;
      var invScaleX = 1 / (this.scaleX_ === 0 ? 1 : this.scaleX_);
      this.scaleY_ = startScaleY + (this.targetScale_ - startScaleY) * easeY;
      var invScaleY = 1 / (this.scaleY_ === 0 ? 1 : this.scaleY_);

      // Apply scales.
      this.adapter_.setScale(this.scaleX_, this.scaleY_);
      this.adapter_.setInnerScale(invScaleX, invScaleY);

      // Stop animation when we've covered the entire 0 - 1 range of time.
      if (currentTime < 1) {
        this.animationRequestId_ = requestAnimationFrame(function () {
          return _this2.animationLoop_();
        });
      } else {
        this.animationRequestId_ = 0;
        this.running_ = false;
        this.adapter_.removeClass(MDCSimpleMenuFoundation.cssClasses.ANIMATING);
      }
    }

    // Starts the open or close animation.

  }, {
    key: 'animateMenu_',
    value: function animateMenu_() {
      var _this3 = this;

      this.startTime_ = this.adapter_.getAccurateTime();
      this.startScaleX_ = this.scaleX_;
      this.startScaleY_ = this.scaleY_;

      this.targetScale_ = this.isOpen_ ? 1 : 0;

      if (!this.running_) {
        this.running_ = true;
        this.animationRequestId_ = requestAnimationFrame(function () {
          return _this3.animationLoop_();
        });
      }
    }
  }, {
    key: 'focusOnOpen_',
    value: function focusOnOpen_(focusIndex) {
      if (focusIndex === null) {
        // First, try focusing the menu.
        this.adapter_.focus();
        // If that doesn't work, focus first item instead.
        if (!this.adapter_.isFocused()) {
          this.adapter_.focusItemAtIndex(0);
        }
      } else {
        this.adapter_.focusItemAtIndex(focusIndex);
      }
    }

    // Handle keys that we want to repeat on hold (tab and arrows).

  }, {
    key: 'handleKeyboardDown_',
    value: function handleKeyboardDown_(evt) {
      // Do nothing if Alt, Ctrl or Meta are pressed.
      if (evt.altKey || evt.ctrlKey || evt.metaKey) {
        return true;
      }

      var keyCode = evt.keyCode,
          key = evt.key,
          shiftKey = evt.shiftKey;

      var isTab = key === 'Tab' || keyCode === 9;
      var isArrowUp = key === 'ArrowUp' || keyCode === 38;
      var isArrowDown = key === 'ArrowDown' || keyCode === 40;
      var isSpace = key === 'Space' || keyCode === 32;

      var focusedItemIndex = this.adapter_.getFocusedItemIndex();
      var lastItemIndex = this.adapter_.getNumberOfItems() - 1;

      if (shiftKey && isTab && focusedItemIndex === 0) {
        this.adapter_.focusItemAtIndex(lastItemIndex);
        evt.preventDefault();
        return false;
      }

      if (!shiftKey && isTab && focusedItemIndex === lastItemIndex) {
        this.adapter_.focusItemAtIndex(0);
        evt.preventDefault();
        return false;
      }

      // Ensure Arrow{Up,Down} and space do not cause inadvertent scrolling
      if (isArrowUp || isArrowDown || isSpace) {
        evt.preventDefault();
      }

      if (isArrowUp) {
        if (focusedItemIndex === 0 || this.adapter_.isFocused()) {
          this.adapter_.focusItemAtIndex(lastItemIndex);
        } else {
          this.adapter_.focusItemAtIndex(focusedItemIndex - 1);
        }
      } else if (isArrowDown) {
        if (focusedItemIndex === lastItemIndex || this.adapter_.isFocused()) {
          this.adapter_.focusItemAtIndex(0);
        } else {
          this.adapter_.focusItemAtIndex(focusedItemIndex + 1);
        }
      }

      return true;
    }

    // Handle keys that we don't want to repeat on hold (Enter, Space, Escape).

  }, {
    key: 'handleKeyboardUp_',
    value: function handleKeyboardUp_(evt) {
      // Do nothing if Alt, Ctrl or Meta are pressed.
      if (evt.altKey || evt.ctrlKey || evt.metaKey) {
        return true;
      }

      var keyCode = evt.keyCode,
          key = evt.key;

      var isEnter = key === 'Enter' || keyCode === 13;
      var isSpace = key === 'Space' || keyCode === 32;
      var isEscape = key === 'Escape' || keyCode === 27;

      if (isEnter || isSpace) {
        this.handlePossibleSelected_(evt);
      }

      if (isEscape) {
        this.adapter_.notifyCancel();
        this.close();
      }

      return true;
    }
  }, {
    key: 'handlePossibleSelected_',
    value: function handlePossibleSelected_(evt) {
      var _this4 = this;

      var targetIndex = this.adapter_.getIndexForEventTarget(evt.target);
      if (targetIndex < 0) {
        return;
      }
      // Debounce multiple selections
      if (this.selectedTriggerTimerId_) {
        return;
      }
      this.selectedTriggerTimerId_ = setTimeout(function () {
        _this4.selectedTriggerTimerId_ = 0;
        _this4.close();
        _this4.adapter_.notifySelected({ index: targetIndex });
      }, __WEBPACK_IMPORTED_MODULE_1__constants__["c" /* numbers */].SELECTED_TRIGGER_DELAY);
    }
  }, {
    key: 'autoPosition_',
    value: function autoPosition_() {
      var _position;

      if (!this.adapter_.hasAnchor()) {
        return;
      }

      // Defaults: open from the top left.
      var vertical = 'top';
      var horizontal = 'left';

      var anchor = this.adapter_.getAnchorDimensions();
      var windowDimensions = this.adapter_.getWindowDimensions();

      var topOverflow = anchor.top + this.dimensions_.height - windowDimensions.height;
      var bottomOverflow = this.dimensions_.height - anchor.bottom;
      var extendsBeyondTopBounds = topOverflow > 0;

      if (extendsBeyondTopBounds) {
        if (bottomOverflow < topOverflow) {
          vertical = 'bottom';
        }
      }

      var leftOverflow = anchor.left + this.dimensions_.width - windowDimensions.width;
      var rightOverflow = this.dimensions_.width - anchor.right;
      var extendsBeyondLeftBounds = leftOverflow > 0;
      var extendsBeyondRightBounds = rightOverflow > 0;

      if (this.adapter_.isRtl()) {
        // In RTL, we prefer to open from the right.
        horizontal = 'right';
        if (extendsBeyondRightBounds && leftOverflow < rightOverflow) {
          horizontal = 'left';
        }
      } else if (extendsBeyondLeftBounds && rightOverflow < leftOverflow) {
        horizontal = 'right';
      }

      var position = (_position = {}, _defineProperty(_position, horizontal, '0'), _defineProperty(_position, vertical, '0'), _position);

      this.adapter_.setTransformOrigin(vertical + ' ' + horizontal);
      this.adapter_.setPosition(position);
    }

    // Open the menu.

  }, {
    key: 'open',
    value: function open() {
      var _this5 = this;

      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref$focusIndex = _ref.focusIndex,
          focusIndex = _ref$focusIndex === undefined ? null : _ref$focusIndex;

      this.adapter_.saveFocus();
      this.adapter_.addClass(MDCSimpleMenuFoundation.cssClasses.ANIMATING);
      this.animationRequestId_ = requestAnimationFrame(function () {
        _this5.dimensions_ = _this5.adapter_.getInnerDimensions();
        _this5.applyTransitionDelays_();
        _this5.autoPosition_();
        _this5.animateMenu_();
        _this5.adapter_.addClass(MDCSimpleMenuFoundation.cssClasses.OPEN);
        _this5.focusOnOpen_(focusIndex);
        _this5.adapter_.registerDocumentClickHandler(_this5.documentClickHandler_);
      });
      this.isOpen_ = true;
    }

    // Close the menu.

  }, {
    key: 'close',
    value: function close() {
      var _this6 = this;

      this.adapter_.deregisterDocumentClickHandler(this.documentClickHandler_);
      this.adapter_.addClass(MDCSimpleMenuFoundation.cssClasses.ANIMATING);
      requestAnimationFrame(function () {
        _this6.removeTransitionDelays_();
        _this6.animateMenu_();
        _this6.adapter_.removeClass(MDCSimpleMenuFoundation.cssClasses.OPEN);
      });
      this.isOpen_ = false;
      this.adapter_.restoreFocus();
    }
  }, {
    key: 'isOpen',
    value: function isOpen() {
      return this.isOpen_;
    }
  }]);

  return MDCSimpleMenuFoundation;
}(__WEBPACK_IMPORTED_MODULE_0__material_base__["MDCFoundation"]);

/* harmony default export */ __webpack_exports__["a"] = MDCSimpleMenuFoundation;

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foundation__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util__ = __webpack_require__(8);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__foundation__["a"]; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDCSimpleMenu; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */







var MDCSimpleMenu = function (_MDCComponent) {
  _inherits(MDCSimpleMenu, _MDCComponent);

  function MDCSimpleMenu() {
    _classCallCheck(this, MDCSimpleMenu);

    return _possibleConstructorReturn(this, (MDCSimpleMenu.__proto__ || Object.getPrototypeOf(MDCSimpleMenu)).apply(this, arguments));
  }

  _createClass(MDCSimpleMenu, [{
    key: 'show',
    value: function show() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref$focusIndex = _ref.focusIndex,
          focusIndex = _ref$focusIndex === undefined ? null : _ref$focusIndex;

      this.foundation_.open({ focusIndex: focusIndex });
    }
  }, {
    key: 'hide',
    value: function hide() {
      this.foundation_.close();
    }

    /* Return the item container element inside the component. */

  }, {
    key: 'getDefaultFoundation',
    value: function getDefaultFoundation() {
      var _this2 = this;

      return new __WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */]({
        addClass: function addClass(className) {
          return _this2.root_.classList.add(className);
        },
        removeClass: function removeClass(className) {
          return _this2.root_.classList.remove(className);
        },
        hasClass: function hasClass(className) {
          return _this2.root_.classList.contains(className);
        },
        hasNecessaryDom: function hasNecessaryDom() {
          return Boolean(_this2.itemsContainer_);
        },
        getInnerDimensions: function getInnerDimensions() {
          var itemsContainer = _this2.itemsContainer_;

          return { width: itemsContainer.offsetWidth, height: itemsContainer.offsetHeight };
        },
        hasAnchor: function hasAnchor() {
          return _this2.root_.parentElement && _this2.root_.parentElement.classList.contains('mdc-menu-anchor');
        },
        getAnchorDimensions: function getAnchorDimensions() {
          return _this2.root_.parentElement.getBoundingClientRect();
        },
        getWindowDimensions: function getWindowDimensions() {
          return { width: window.innerWidth, height: window.innerHeight };
        },
        setScale: function setScale(x, y) {
          _this2.root_.style[__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util__["a" /* getTransformPropertyName */])(window)] = 'scale(' + x + ', ' + y + ')';
        },
        setInnerScale: function setInnerScale(x, y) {
          _this2.itemsContainer_.style[__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util__["a" /* getTransformPropertyName */])(window)] = 'scale(' + x + ', ' + y + ')';
        },
        getNumberOfItems: function getNumberOfItems() {
          return _this2.items.length;
        },
        registerInteractionHandler: function registerInteractionHandler(type, handler) {
          return _this2.root_.addEventListener(type, handler);
        },
        deregisterInteractionHandler: function deregisterInteractionHandler(type, handler) {
          return _this2.root_.removeEventListener(type, handler);
        },
        registerDocumentClickHandler: function registerDocumentClickHandler(handler) {
          return document.addEventListener('click', handler);
        },
        deregisterDocumentClickHandler: function deregisterDocumentClickHandler(handler) {
          return document.removeEventListener('click', handler);
        },
        getYParamsForItemAtIndex: function getYParamsForItemAtIndex(index) {
          var _items$index = _this2.items[index],
              top = _items$index.offsetTop,
              height = _items$index.offsetHeight;

          return { top: top, height: height };
        },
        setTransitionDelayForItemAtIndex: function setTransitionDelayForItemAtIndex(index, value) {
          return _this2.items[index].style.setProperty('transition-delay', value);
        },
        getIndexForEventTarget: function getIndexForEventTarget(target) {
          return _this2.items.indexOf(target);
        },
        notifySelected: function notifySelected(evtData) {
          return _this2.emit('MDCSimpleMenu:selected', {
            index: evtData.index,
            item: _this2.items[evtData.index]
          });
        },
        notifyCancel: function notifyCancel() {
          return _this2.emit('MDCSimpleMenu:cancel');
        },
        saveFocus: function saveFocus() {
          _this2.previousFocus_ = document.activeElement;
        },
        restoreFocus: function restoreFocus() {
          if (_this2.previousFocus_) {
            _this2.previousFocus_.focus();
          }
        },
        isFocused: function isFocused() {
          return document.activeElement === _this2.root_;
        },
        focus: function focus() {
          return _this2.root_.focus();
        },
        getFocusedItemIndex: function getFocusedItemIndex() {
          return _this2.items.indexOf(document.activeElement);
        },
        focusItemAtIndex: function focusItemAtIndex(index) {
          return _this2.items[index].focus();
        },
        isRtl: function isRtl() {
          return getComputedStyle(_this2.root_).getPropertyValue('direction') === 'rtl';
        },
        setTransformOrigin: function setTransformOrigin(origin) {
          _this2.root_.style[__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util__["a" /* getTransformPropertyName */])(window) + '-origin'] = origin;
        },
        setPosition: function setPosition(position) {
          _this2.root_.style.left = 'left' in position ? position.left : null;
          _this2.root_.style.right = 'right' in position ? position.right : null;
          _this2.root_.style.top = 'top' in position ? position.top : null;
          _this2.root_.style.bottom = 'bottom' in position ? position.bottom : null;
        },
        getAccurateTime: function getAccurateTime() {
          return window.performance.now();
        }
      });
    }
  }, {
    key: 'open',
    get: function get() {
      return this.foundation_.isOpen();
    },
    set: function set(value) {
      if (value) {
        this.foundation_.open();
      } else {
        this.foundation_.close();
      }
    }
  }, {
    key: 'itemsContainer_',
    get: function get() {
      return this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */].strings.ITEMS_SELECTOR);
    }

    /* Return the items within the menu. Note that this only contains the set of elements within
     * the items container that are proper list items, and not supplemental / presentational DOM
     * elements.
     */

  }, {
    key: 'items',
    get: function get() {
      var itemsContainer = this.itemsContainer_;

      return [].slice.call(itemsContainer.querySelectorAll('.mdc-list-item[role]'));
    }
  }], [{
    key: 'attachTo',
    value: function attachTo(root) {
      return new MDCSimpleMenu(root);
    }
  }]);

  return MDCSimpleMenu;
}(__WEBPACK_IMPORTED_MODULE_0__material_base__["MDCComponent"]);

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return strings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cssClasses; });
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var strings = {
  NATIVE_CONTROL_SELECTOR: '.mdc-radio__native-control'
};

var cssClasses = {
  ROOT: 'mdc-radio',
  DISABLED: 'mdc-radio--disabled'
};

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(43);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */




var MDCRadioFoundation = function (_MDCFoundation) {
  _inherits(MDCRadioFoundation, _MDCFoundation);

  function MDCRadioFoundation() {
    _classCallCheck(this, MDCRadioFoundation);

    return _possibleConstructorReturn(this, (MDCRadioFoundation.__proto__ || Object.getPrototypeOf(MDCRadioFoundation)).apply(this, arguments));
  }

  _createClass(MDCRadioFoundation, [{
    key: 'isChecked',
    value: function isChecked() {
      return this.getNativeControl_().checked;
    }
  }, {
    key: 'setChecked',
    value: function setChecked(checked) {
      this.getNativeControl_().checked = checked;
    }
  }, {
    key: 'isDisabled',
    value: function isDisabled() {
      return this.getNativeControl_().disabled;
    }
  }, {
    key: 'setDisabled',
    value: function setDisabled(disabled) {
      var DISABLED = MDCRadioFoundation.cssClasses.DISABLED;

      this.getNativeControl_().disabled = disabled;
      if (disabled) {
        this.adapter_.addClass(DISABLED);
      } else {
        this.adapter_.removeClass(DISABLED);
      }
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      return this.getNativeControl_().value;
    }
  }, {
    key: 'setValue',
    value: function setValue(value) {
      this.getNativeControl_().value = value;
    }
  }, {
    key: 'getNativeControl_',
    value: function getNativeControl_() {
      return this.adapter_.getNativeControl() || {
        checked: false,
        disabled: false,
        value: null
      };
    }
  }], [{
    key: 'cssClasses',
    get: function get() {
      return __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* cssClasses */];
    }
  }, {
    key: 'strings',
    get: function get() {
      return __WEBPACK_IMPORTED_MODULE_1__constants__["b" /* strings */];
    }
  }, {
    key: 'defaultAdapter',
    get: function get() {
      return {
        addClass: function addClass() /* className: string */{},
        removeClass: function removeClass() /* className: string */{},
        getNativeControl: function getNativeControl() /* HTMLInputElement */{}
      };
    }
  }]);

  return MDCRadioFoundation;
}(__WEBPACK_IMPORTED_MODULE_0__material_base__["MDCFoundation"]);

/* harmony default export */ __webpack_exports__["a"] = MDCRadioFoundation;

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cssClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return strings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return numbers; });
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var cssClasses = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  ROOT: 'mdc-ripple-upgraded',
  UNBOUNDED: 'mdc-ripple-upgraded--unbounded',
  BG_FOCUSED: 'mdc-ripple-upgraded--background-focused',
  BG_ACTIVE_FILL: 'mdc-ripple-upgraded--background-active-fill',
  FG_ACTIVATION: 'mdc-ripple-upgraded--foreground-activation',
  FG_DEACTIVATION: 'mdc-ripple-upgraded--foreground-deactivation'
};

var strings = {
  VAR_SURFACE_WIDTH: '--mdc-ripple-surface-width',
  VAR_SURFACE_HEIGHT: '--mdc-ripple-surface-height',
  VAR_FG_SIZE: '--mdc-ripple-fg-size',
  VAR_LEFT: '--mdc-ripple-left',
  VAR_TOP: '--mdc-ripple-top',
  VAR_FG_SCALE: '--mdc-ripple-fg-scale',
  VAR_FG_TRANSLATE_START: '--mdc-ripple-fg-translate-start',
  VAR_FG_TRANSLATE_END: '--mdc-ripple-fg-translate-end'
};

var numbers = {
  PADDING: 10,
  INITIAL_ORIGIN_SCALE: 0.6,
  DEACTIVATION_TIMEOUT_MS: 300
};

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util__ = __webpack_require__(4);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */






var DEACTIVATION_ACTIVATION_PAIRS = {
  mouseup: 'mousedown',
  pointerup: 'pointerdown',
  touchend: 'touchstart',
  keyup: 'keydown',
  blur: 'focus'
};

var MDCRippleFoundation = function (_MDCFoundation) {
  _inherits(MDCRippleFoundation, _MDCFoundation);

  _createClass(MDCRippleFoundation, [{
    key: 'isSupported_',


    // We compute this property so that we are not querying information about the client
    // until the point in time where the foundation requests it. This prevents scenarios where
    // client-side feature-detection may happen too early, such as when components are rendered on the server
    // and then initialized at mount time on the client.
    get: function get() {
      return this.adapter_.browserSupportsCssVars();
    }
  }], [{
    key: 'cssClasses',
    get: function get() {
      return __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* cssClasses */];
    }
  }, {
    key: 'strings',
    get: function get() {
      return __WEBPACK_IMPORTED_MODULE_1__constants__["b" /* strings */];
    }
  }, {
    key: 'numbers',
    get: function get() {
      return __WEBPACK_IMPORTED_MODULE_1__constants__["c" /* numbers */];
    }
  }, {
    key: 'defaultAdapter',
    get: function get() {
      return {
        browserSupportsCssVars: function browserSupportsCssVars() /* boolean - cached */{},
        isUnbounded: function isUnbounded() /* boolean */{},
        isSurfaceActive: function isSurfaceActive() /* boolean */{},
        addClass: function addClass() /* className: string */{},
        removeClass: function removeClass() /* className: string */{},
        registerInteractionHandler: function registerInteractionHandler() /* evtType: string, handler: EventListener */{},
        deregisterInteractionHandler: function deregisterInteractionHandler() /* evtType: string, handler: EventListener */{},
        registerResizeHandler: function registerResizeHandler() /* handler: EventListener */{},
        deregisterResizeHandler: function deregisterResizeHandler() /* handler: EventListener */{},
        updateCssVariable: function updateCssVariable() /* varName: string, value: string */{},
        computeBoundingRect: function computeBoundingRect() /* ClientRect */{},
        getWindowPageOffset: function getWindowPageOffset() /* {x: number, y: number} */{}
      };
    }
  }]);

  function MDCRippleFoundation(adapter) {
    _classCallCheck(this, MDCRippleFoundation);

    var _this = _possibleConstructorReturn(this, (MDCRippleFoundation.__proto__ || Object.getPrototypeOf(MDCRippleFoundation)).call(this, _extends(MDCRippleFoundation.defaultAdapter, adapter)));

    _this.layoutFrame_ = 0;
    _this.frame_ = { width: 0, height: 0 };
    _this.activationState_ = _this.defaultActivationState_();
    _this.xfDuration_ = 0;
    _this.initialSize_ = 0;
    _this.maxRadius_ = 0;
    _this.listenerInfos_ = [{ activate: 'touchstart', deactivate: 'touchend' }, { activate: 'pointerdown', deactivate: 'pointerup' }, { activate: 'mousedown', deactivate: 'mouseup' }, { activate: 'keydown', deactivate: 'keyup' }, { focus: 'focus', blur: 'blur' }];
    _this.listeners_ = {
      activate: function activate(e) {
        return _this.activate_(e);
      },
      deactivate: function deactivate(e) {
        return _this.deactivate_(e);
      },
      focus: function focus() {
        return requestAnimationFrame(function () {
          return _this.adapter_.addClass(MDCRippleFoundation.cssClasses.BG_FOCUSED);
        });
      },
      blur: function blur() {
        return requestAnimationFrame(function () {
          return _this.adapter_.removeClass(MDCRippleFoundation.cssClasses.BG_FOCUSED);
        });
      }
    };
    _this.resizeHandler_ = function () {
      return _this.layout();
    };
    _this.unboundedCoords_ = {
      left: 0,
      top: 0
    };
    _this.fgScale_ = 0;
    _this.activationTimer_ = 0;
    _this.activationAnimationHasEnded_ = false;
    _this.activationTimerCallback_ = function () {
      _this.activationAnimationHasEnded_ = true;
      _this.runDeactivationUXLogicIfReady_();
    };
    return _this;
  }

  _createClass(MDCRippleFoundation, [{
    key: 'defaultActivationState_',
    value: function defaultActivationState_() {
      return {
        isActivated: false,
        hasDeactivationUXRun: false,
        wasActivatedByPointer: false,
        wasElementMadeActive: false,
        activationStartTime: 0,
        activationEvent: null,
        isProgrammatic: false
      };
    }
  }, {
    key: 'init',
    value: function init() {
      var _this2 = this;

      if (!this.isSupported_) {
        return;
      }
      this.addEventListeners_();

      var _MDCRippleFoundation$ = MDCRippleFoundation.cssClasses,
          ROOT = _MDCRippleFoundation$.ROOT,
          UNBOUNDED = _MDCRippleFoundation$.UNBOUNDED;

      requestAnimationFrame(function () {
        _this2.adapter_.addClass(ROOT);
        if (_this2.adapter_.isUnbounded()) {
          _this2.adapter_.addClass(UNBOUNDED);
        }
        _this2.layoutInternal_();
      });
    }
  }, {
    key: 'addEventListeners_',
    value: function addEventListeners_() {
      var _this3 = this;

      this.listenerInfos_.forEach(function (info) {
        Object.keys(info).forEach(function (k) {
          _this3.adapter_.registerInteractionHandler(info[k], _this3.listeners_[k]);
        });
      });
      this.adapter_.registerResizeHandler(this.resizeHandler_);
    }
  }, {
    key: 'activate_',
    value: function activate_(e) {
      var _this4 = this;

      var activationState = this.activationState_;

      if (activationState.isActivated) {
        return;
      }

      activationState.isActivated = true;
      activationState.isProgrammatic = e === null;
      activationState.activationEvent = e;
      activationState.wasActivatedByPointer = activationState.isProgrammatic ? false : e.type === 'mousedown' || e.type === 'touchstart' || e.type === 'pointerdown';
      activationState.activationStartTime = Date.now();

      requestAnimationFrame(function () {
        // This needs to be wrapped in an rAF call b/c web browsers
        // report active states inconsistently when they're called within
        // event handling code:
        // - https://bugs.chromium.org/p/chromium/issues/detail?id=635971
        // - https://bugzilla.mozilla.org/show_bug.cgi?id=1293741
        activationState.wasElementMadeActive = e && e.type === 'keydown' ? _this4.adapter_.isSurfaceActive() : true;
        if (activationState.wasElementMadeActive) {
          _this4.animateActivation_();
        } else {
          // Reset activation state immediately if element was not made active.
          _this4.activationState_ = _this4.defaultActivationState_();
        }
      });
    }
  }, {
    key: 'activate',
    value: function activate() {
      this.activate_(null);
    }
  }, {
    key: 'animateActivation_',
    value: function animateActivation_() {
      var _this5 = this;

      var _MDCRippleFoundation$2 = MDCRippleFoundation.strings,
          VAR_FG_TRANSLATE_START = _MDCRippleFoundation$2.VAR_FG_TRANSLATE_START,
          VAR_FG_TRANSLATE_END = _MDCRippleFoundation$2.VAR_FG_TRANSLATE_END;
      var _MDCRippleFoundation$3 = MDCRippleFoundation.cssClasses,
          BG_ACTIVE_FILL = _MDCRippleFoundation$3.BG_ACTIVE_FILL,
          FG_DEACTIVATION = _MDCRippleFoundation$3.FG_DEACTIVATION,
          FG_ACTIVATION = _MDCRippleFoundation$3.FG_ACTIVATION;
      var DEACTIVATION_TIMEOUT_MS = MDCRippleFoundation.numbers.DEACTIVATION_TIMEOUT_MS;


      var translateStart = '';
      var translateEnd = '';

      if (!this.adapter_.isUnbounded()) {
        var _getFgTranslationCoor = this.getFgTranslationCoordinates_(),
            startPoint = _getFgTranslationCoor.startPoint,
            endPoint = _getFgTranslationCoor.endPoint;

        translateStart = startPoint.x + 'px, ' + startPoint.y + 'px';
        translateEnd = endPoint.x + 'px, ' + endPoint.y + 'px';
      }

      this.adapter_.updateCssVariable(VAR_FG_TRANSLATE_START, translateStart);
      this.adapter_.updateCssVariable(VAR_FG_TRANSLATE_END, translateEnd);
      // Cancel any ongoing activation/deactivation animations
      clearTimeout(this.activationTimer_);
      this.rmBoundedActivationClasses_();
      this.adapter_.removeClass(FG_DEACTIVATION);

      // Force layout in order to re-trigger the animation.
      this.adapter_.computeBoundingRect();
      this.adapter_.addClass(BG_ACTIVE_FILL);
      this.adapter_.addClass(FG_ACTIVATION);
      this.activationTimer_ = setTimeout(function () {
        return _this5.activationTimerCallback_();
      }, DEACTIVATION_TIMEOUT_MS);
    }
  }, {
    key: 'getFgTranslationCoordinates_',
    value: function getFgTranslationCoordinates_() {
      var activationState = this.activationState_;
      var activationEvent = activationState.activationEvent,
          wasActivatedByPointer = activationState.wasActivatedByPointer;


      var startPoint = void 0;
      if (wasActivatedByPointer) {
        startPoint = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util__["c" /* getNormalizedEventCoords */])(activationEvent, this.adapter_.getWindowPageOffset(), this.adapter_.computeBoundingRect());
      } else {
        startPoint = {
          x: this.frame_.width / 2,
          y: this.frame_.height / 2
        };
      }
      // Center the element around the start point.
      startPoint = {
        x: startPoint.x - this.initialSize_ / 2,
        y: startPoint.y - this.initialSize_ / 2
      };

      var endPoint = {
        x: this.frame_.width / 2 - this.initialSize_ / 2,
        y: this.frame_.height / 2 - this.initialSize_ / 2
      };

      return { startPoint: startPoint, endPoint: endPoint };
    }
  }, {
    key: 'runDeactivationUXLogicIfReady_',
    value: function runDeactivationUXLogicIfReady_() {
      var FG_DEACTIVATION = MDCRippleFoundation.cssClasses.FG_DEACTIVATION;
      var _activationState_ = this.activationState_,
          hasDeactivationUXRun = _activationState_.hasDeactivationUXRun,
          isActivated = _activationState_.isActivated;

      var activationHasEnded = hasDeactivationUXRun || !isActivated;
      if (activationHasEnded && this.activationAnimationHasEnded_) {
        this.rmBoundedActivationClasses_();
        // Note that we don't need to remove this here since it's removed on re-activation.
        this.adapter_.addClass(FG_DEACTIVATION);
      }
    }
  }, {
    key: 'rmBoundedActivationClasses_',
    value: function rmBoundedActivationClasses_() {
      var _MDCRippleFoundation$4 = MDCRippleFoundation.cssClasses,
          BG_ACTIVE_FILL = _MDCRippleFoundation$4.BG_ACTIVE_FILL,
          FG_ACTIVATION = _MDCRippleFoundation$4.FG_ACTIVATION;

      this.adapter_.removeClass(BG_ACTIVE_FILL);
      this.adapter_.removeClass(FG_ACTIVATION);
      this.activationAnimationHasEnded_ = false;
      this.adapter_.computeBoundingRect();
    }
  }, {
    key: 'deactivate_',
    value: function deactivate_(e) {
      var _this6 = this;

      var activationState = this.activationState_;
      // This can happen in scenarios such as when you have a keyup event that blurs the element.

      if (!activationState.isActivated) {
        return;
      }
      // Programmatic deactivation.
      if (activationState.isProgrammatic) {
        var evtObject = null;
        requestAnimationFrame(function () {
          return _this6.animateDeactivation_(evtObject, _extends({}, activationState));
        });
        this.activationState_ = this.defaultActivationState_();
        return;
      }

      var actualActivationType = DEACTIVATION_ACTIVATION_PAIRS[e.type];
      var expectedActivationType = activationState.activationEvent.type;
      // NOTE: Pointer events are tricky - https://patrickhlauke.github.io/touch/tests/results/
      // Essentially, what we need to do here is decouple the deactivation UX from the actual
      // deactivation state itself. This way, touch/pointer events in sequence do not trample one
      // another.
      var needsDeactivationUX = actualActivationType === expectedActivationType;
      var needsActualDeactivation = needsDeactivationUX;
      if (activationState.wasActivatedByPointer) {
        needsActualDeactivation = e.type === 'mouseup';
      }

      var state = _extends({}, activationState);
      requestAnimationFrame(function () {
        if (needsDeactivationUX) {
          _this6.activationState_.hasDeactivationUXRun = true;
          _this6.animateDeactivation_(e, state);
        }

        if (needsActualDeactivation) {
          _this6.activationState_ = _this6.defaultActivationState_();
        }
      });
    }
  }, {
    key: 'deactivate',
    value: function deactivate() {
      this.deactivate_(null);
    }
  }, {
    key: 'animateDeactivation_',
    value: function animateDeactivation_(e, _ref) {
      var wasActivatedByPointer = _ref.wasActivatedByPointer,
          wasElementMadeActive = _ref.wasElementMadeActive;
      var BG_FOCUSED = MDCRippleFoundation.cssClasses.BG_FOCUSED;

      if (wasActivatedByPointer || wasElementMadeActive) {
        // Remove class left over by element being focused
        this.adapter_.removeClass(BG_FOCUSED);
        this.runDeactivationUXLogicIfReady_();
      }
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      var _this7 = this;

      if (!this.isSupported_) {
        return;
      }
      this.removeEventListeners_();

      var _MDCRippleFoundation$5 = MDCRippleFoundation.cssClasses,
          ROOT = _MDCRippleFoundation$5.ROOT,
          UNBOUNDED = _MDCRippleFoundation$5.UNBOUNDED;

      requestAnimationFrame(function () {
        _this7.adapter_.removeClass(ROOT);
        _this7.adapter_.removeClass(UNBOUNDED);
        _this7.removeCssVars_();
      });
    }
  }, {
    key: 'removeEventListeners_',
    value: function removeEventListeners_() {
      var _this8 = this;

      this.listenerInfos_.forEach(function (info) {
        Object.keys(info).forEach(function (k) {
          _this8.adapter_.deregisterInteractionHandler(info[k], _this8.listeners_[k]);
        });
      });
      this.adapter_.deregisterResizeHandler(this.resizeHandler_);
    }
  }, {
    key: 'removeCssVars_',
    value: function removeCssVars_() {
      var _this9 = this;

      var strings = MDCRippleFoundation.strings;

      Object.keys(strings).forEach(function (k) {
        if (k.indexOf('VAR_') === 0) {
          _this9.adapter_.updateCssVariable(strings[k], null);
        }
      });
    }
  }, {
    key: 'layout',
    value: function layout() {
      var _this10 = this;

      if (this.layoutFrame_) {
        cancelAnimationFrame(this.layoutFrame_);
      }
      this.layoutFrame_ = requestAnimationFrame(function () {
        _this10.layoutInternal_();
        _this10.layoutFrame_ = 0;
      });
    }
  }, {
    key: 'layoutInternal_',
    value: function layoutInternal_() {
      this.frame_ = this.adapter_.computeBoundingRect();

      var maxDim = Math.max(this.frame_.height, this.frame_.width);
      var surfaceDiameter = Math.sqrt(Math.pow(this.frame_.width, 2) + Math.pow(this.frame_.height, 2));

      // 60% of the largest dimension of the surface
      this.initialSize_ = maxDim * MDCRippleFoundation.numbers.INITIAL_ORIGIN_SCALE;

      // Diameter of the surface + 10px
      this.maxRadius_ = surfaceDiameter + MDCRippleFoundation.numbers.PADDING;
      this.fgScale_ = this.maxRadius_ / this.initialSize_;
      this.xfDuration_ = 1000 * Math.sqrt(this.maxRadius_ / 1024);
      this.updateLayoutCssVars_();
    }
  }, {
    key: 'updateLayoutCssVars_',
    value: function updateLayoutCssVars_() {
      var _MDCRippleFoundation$6 = MDCRippleFoundation.strings,
          VAR_SURFACE_WIDTH = _MDCRippleFoundation$6.VAR_SURFACE_WIDTH,
          VAR_SURFACE_HEIGHT = _MDCRippleFoundation$6.VAR_SURFACE_HEIGHT,
          VAR_FG_SIZE = _MDCRippleFoundation$6.VAR_FG_SIZE,
          VAR_LEFT = _MDCRippleFoundation$6.VAR_LEFT,
          VAR_TOP = _MDCRippleFoundation$6.VAR_TOP,
          VAR_FG_SCALE = _MDCRippleFoundation$6.VAR_FG_SCALE;


      this.adapter_.updateCssVariable(VAR_SURFACE_WIDTH, this.frame_.width + 'px');
      this.adapter_.updateCssVariable(VAR_SURFACE_HEIGHT, this.frame_.height + 'px');
      this.adapter_.updateCssVariable(VAR_FG_SIZE, this.initialSize_ + 'px');
      this.adapter_.updateCssVariable(VAR_FG_SCALE, this.fgScale_);

      if (this.adapter_.isUnbounded()) {
        this.unboundedCoords_ = {
          left: Math.round(this.frame_.width / 2 - this.initialSize_ / 2),
          top: Math.round(this.frame_.height / 2 - this.initialSize_ / 2)
        };

        this.adapter_.updateCssVariable(VAR_LEFT, this.unboundedCoords_.left + 'px');
        this.adapter_.updateCssVariable(VAR_TOP, this.unboundedCoords_.top + 'px');
      }
    }
  }]);

  return MDCRippleFoundation;
}(__WEBPACK_IMPORTED_MODULE_0__material_base__["MDCFoundation"]);

/* harmony default export */ __webpack_exports__["a"] = MDCRippleFoundation;

/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cssClasses; });
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var cssClasses = {
  ROOT: 'mdc-select',
  OPEN: 'mdc-select--open',
  DISABLED: 'mdc-select--disabled'
};

/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(47);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */




var OPENER_KEYS = [{ key: 'ArrowUp', keyCode: 38, forType: 'keydown' }, { key: 'ArrowDown', keyCode: 40, forType: 'keydown' }, { key: 'Space', keyCode: 32, forType: 'keyup' }];

var MDCSelectFoundation = function (_MDCFoundation) {
  _inherits(MDCSelectFoundation, _MDCFoundation);

  _createClass(MDCSelectFoundation, null, [{
    key: 'cssClasses',
    get: function get() {
      return __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* cssClasses */];
    }
  }, {
    key: 'defaultAdapter',
    get: function get() {
      return {
        addClass: function addClass() /* className: string */{},
        removeClass: function removeClass() /* className: string */{},
        setAttr: function setAttr() /* attr: string, value: string */{},
        rmAttr: function rmAttr() /* attr: string */{},
        computeBoundingRect: function computeBoundingRect() {
          return (/* {left: number, top: number} */{ left: 0, top: 0 }
          );
        },
        registerInteractionHandler: function registerInteractionHandler() /* type: string, handler: EventListener */{},
        deregisterInteractionHandler: function deregisterInteractionHandler() /* type: string, handler: EventListener */{},
        focus: function focus() {},
        makeTabbable: function makeTabbable() {},
        makeUntabbable: function makeUntabbable() {},
        getComputedStyleValue: function getComputedStyleValue() {
          return (/* propertyName: string */ /* string */''
          );
        },
        setStyle: function setStyle() /* propertyName: string, value: string */{},
        create2dRenderingContext: function create2dRenderingContext() {
          return (/* {font: string, measureText: (string) => {width: number}} */{
              font: '',
              measureText: function measureText() {
                return { width: 0 };
              }
            }
          );
        },
        setMenuElStyle: function setMenuElStyle() /* propertyName: string, value: string */{},
        setMenuElAttr: function setMenuElAttr() /* attr: string, value: string */{},
        rmMenuElAttr: function rmMenuElAttr() /* attr: string */{},
        getMenuElOffsetHeight: function getMenuElOffsetHeight() {
          return (/* number */0
          );
        },
        openMenu: function openMenu() /* focusIndex: number */{},
        isMenuOpen: function isMenuOpen() {
          return (/* boolean */false
          );
        },
        setSelectedTextContent: function setSelectedTextContent() /* textContent: string */{},
        getNumberOfOptions: function getNumberOfOptions() {
          return (/* number */0
          );
        },
        getTextForOptionAtIndex: function getTextForOptionAtIndex() {
          return (/* index: number */ /* string */''
          );
        },
        getValueForOptionAtIndex: function getValueForOptionAtIndex() {
          return (/* index: number */ /* string */''
          );
        },
        setAttrForOptionAtIndex: function setAttrForOptionAtIndex() /* index: number, attr: string, value: string */{},
        rmAttrForOptionAtIndex: function rmAttrForOptionAtIndex() /* index: number, attr: string */{},
        getOffsetTopForOptionAtIndex: function getOffsetTopForOptionAtIndex() {
          return (/* index: number */ /* number */0
          );
        },
        registerMenuInteractionHandler: function registerMenuInteractionHandler() /* type: string, handler: EventListener */{},
        deregisterMenuInteractionHandler: function deregisterMenuInteractionHandler() /* type: string, handler: EventListener */{},
        notifyChange: function notifyChange() {},
        getWindowInnerHeight: function getWindowInnerHeight() {
          return (/* number */0
          );
        }
      };
    }
  }]);

  function MDCSelectFoundation(adapter) {
    _classCallCheck(this, MDCSelectFoundation);

    var _this = _possibleConstructorReturn(this, (MDCSelectFoundation.__proto__ || Object.getPrototypeOf(MDCSelectFoundation)).call(this, _extends(MDCSelectFoundation.defaultAdapter, adapter)));

    _this.ctx_ = null;
    _this.selectedIndex_ = -1;
    _this.disabled_ = false;
    _this.displayHandler_ = function (evt) {
      evt.preventDefault();
      if (!_this.adapter_.isMenuOpen()) {
        _this.open_();
      }
    };
    _this.displayViaKeyboardHandler_ = function (evt) {
      return _this.handleDisplayViaKeyboard_(evt);
    };
    _this.selectionHandler_ = function (_ref) {
      var detail = _ref.detail;
      var index = detail.index;

      _this.close_();
      if (index !== _this.selectedIndex_) {
        _this.setSelectedIndex(index);
        _this.adapter_.notifyChange();
      }
    };
    _this.cancelHandler_ = function () {
      _this.close_();
    };
    return _this;
  }

  _createClass(MDCSelectFoundation, [{
    key: 'init',
    value: function init() {
      this.ctx_ = this.adapter_.create2dRenderingContext();
      this.adapter_.registerInteractionHandler('click', this.displayHandler_);
      this.adapter_.registerInteractionHandler('keydown', this.displayViaKeyboardHandler_);
      this.adapter_.registerInteractionHandler('keyup', this.displayViaKeyboardHandler_);
      this.adapter_.registerMenuInteractionHandler('MDCSimpleMenu:selected', this.selectionHandler_);
      this.adapter_.registerMenuInteractionHandler('MDCSimpleMenu:cancel', this.cancelHandler_);
      this.resize();
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      // Drop reference to context object to prevent potential leaks
      this.ctx_ = null;
      this.adapter_.deregisterInteractionHandler('click', this.displayHandler_);
      this.adapter_.deregisterInteractionHandler('keydown', this.displayViaKeyboardHandler_);
      this.adapter_.deregisterInteractionHandler('keyup', this.displayViaKeyboardHandler_);
      this.adapter_.deregisterMenuInteractionHandler('MDCSimpleMenu:selected', this.selectionHandler_);
      this.adapter_.deregisterMenuInteractionHandler('MDCSimpleMenu:cancel', this.cancelHandler_);
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      return this.selectedIndex_ >= 0 ? this.adapter_.getValueForOptionAtIndex(this.selectedIndex_) : '';
    }
  }, {
    key: 'getSelectedIndex',
    value: function getSelectedIndex() {
      return this.selectedIndex_;
    }
  }, {
    key: 'setSelectedIndex',
    value: function setSelectedIndex(index) {
      var prevSelectedIndex = this.selectedIndex_;
      if (prevSelectedIndex >= 0) {
        this.adapter_.rmAttrForOptionAtIndex(this.selectedIndex_, 'aria-selected');
      }

      this.selectedIndex_ = index >= 0 && index < this.adapter_.getNumberOfOptions() ? index : -1;
      var selectedTextContent = '';
      if (this.selectedIndex_ >= 0) {
        selectedTextContent = this.adapter_.getTextForOptionAtIndex(this.selectedIndex_).trim();
        this.adapter_.setAttrForOptionAtIndex(this.selectedIndex_, 'aria-selected', 'true');
      }
      this.adapter_.setSelectedTextContent(selectedTextContent);
    }
  }, {
    key: 'isDisabled',
    value: function isDisabled() {
      return this.disabled_;
    }
  }, {
    key: 'setDisabled',
    value: function setDisabled(disabled) {
      var DISABLED = MDCSelectFoundation.cssClasses.DISABLED;

      this.disabled_ = disabled;
      if (this.disabled_) {
        this.adapter_.addClass(DISABLED);
        this.adapter_.setAttr('aria-disabled', 'true');
        this.adapter_.makeUntabbable();
      } else {
        this.adapter_.removeClass(DISABLED);
        this.adapter_.rmAttr('aria-disabled');
        this.adapter_.makeTabbable();
      }
    }
  }, {
    key: 'resize',
    value: function resize() {
      var font = this.adapter_.getComputedStyleValue('font');
      var letterSpacing = parseFloat(this.adapter_.getComputedStyleValue('letter-spacing'));
      if (font) {
        this.ctx_.font = font;
      } else {
        var primaryFontFamily = this.adapter_.getComputedStyleValue('font-family').split(',')[0];
        var fontSize = this.adapter_.getComputedStyleValue('font-size');
        this.ctx_.font = fontSize + ' ' + primaryFontFamily;
      }

      var maxTextLength = 0;
      for (var i = 0, l = this.adapter_.getNumberOfOptions(); i < l; i++) {
        var txt = this.adapter_.getTextForOptionAtIndex(i).trim();

        var _ctx_$measureText = this.ctx_.measureText(txt),
            width = _ctx_$measureText.width;

        var addedSpace = letterSpacing * txt.length;
        maxTextLength = Math.max(maxTextLength, Math.ceil(width + addedSpace));
      }
      this.adapter_.setStyle('width', maxTextLength + 'px');
    }
  }, {
    key: 'open_',
    value: function open_() {
      var OPEN = MDCSelectFoundation.cssClasses.OPEN;

      var focusIndex = this.selectedIndex_ < 0 ? 0 : this.selectedIndex_;

      var _computeMenuStylesFor = this.computeMenuStylesForOpenAtIndex_(focusIndex),
          left = _computeMenuStylesFor.left,
          top = _computeMenuStylesFor.top,
          transformOrigin = _computeMenuStylesFor.transformOrigin;

      this.adapter_.setMenuElStyle('left', left);
      this.adapter_.setMenuElStyle('top', top);
      this.adapter_.setMenuElStyle('transform-origin', transformOrigin);
      this.adapter_.addClass(OPEN);
      this.adapter_.openMenu(focusIndex);
    }
  }, {
    key: 'computeMenuStylesForOpenAtIndex_',
    value: function computeMenuStylesForOpenAtIndex_(index) {
      var innerHeight = this.adapter_.getWindowInnerHeight();

      var _adapter_$computeBoun = this.adapter_.computeBoundingRect(),
          left = _adapter_$computeBoun.left,
          top = _adapter_$computeBoun.top;

      this.adapter_.setMenuElAttr('aria-hidden', 'true');
      this.adapter_.setMenuElStyle('display', 'block');
      var menuHeight = this.adapter_.getMenuElOffsetHeight();
      var itemOffsetTop = this.adapter_.getOffsetTopForOptionAtIndex(index);
      this.adapter_.setMenuElStyle('display', '');
      this.adapter_.rmMenuElAttr('aria-hidden');

      var adjustedTop = top - itemOffsetTop;
      var adjustedHeight = menuHeight - itemOffsetTop;
      var overflowsTop = adjustedTop < 0;
      var overflowsBottom = adjustedTop + adjustedHeight > innerHeight;
      if (overflowsTop) {
        adjustedTop = 0;
      } else if (overflowsBottom) {
        adjustedTop = Math.max(0, adjustedTop - adjustedHeight);
      }

      return {
        left: left + 'px',
        top: adjustedTop + 'px',
        transformOrigin: 'center ' + itemOffsetTop + 'px'
      };
    }
  }, {
    key: 'close_',
    value: function close_() {
      var OPEN = MDCSelectFoundation.cssClasses.OPEN;

      this.adapter_.removeClass(OPEN);
      this.adapter_.focus();
    }
  }, {
    key: 'handleDisplayViaKeyboard_',
    value: function handleDisplayViaKeyboard_(evt) {
      // We use a hard-coded 2 instead of Event.AT_TARGET to avoid having to reference a browser
      // global.
      var EVENT_PHASE_AT_TARGET = 2;
      if (evt.eventPhase !== EVENT_PHASE_AT_TARGET) {
        return;
      }

      // Prevent pressing space down from scrolling the page
      var isSpaceDown = evt.type === 'keydown' && (evt.key === 'Space' || evt.keyCode === 32);
      if (isSpaceDown) {
        evt.preventDefault();
      }

      var isOpenerKey = OPENER_KEYS.some(function (_ref2) {
        var key = _ref2.key,
            keyCode = _ref2.keyCode,
            forType = _ref2.forType;

        return evt.type === forType && (evt.key === key || evt.keyCode === keyCode);
      });
      if (isOpenerKey) {
        this.displayHandler_(evt);
      }
    }
  }]);

  return MDCSelectFoundation;
}(__WEBPACK_IMPORTED_MODULE_0__material_base__["MDCFoundation"]);

/* harmony default export */ __webpack_exports__["a"] = MDCSelectFoundation;

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cssClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return strings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return numbers; });
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var cssClasses = {
  ROOT: 'mdc-snackbar',
  TEXT: 'mdc-snackbar__text',
  ACTION_WRAPPER: 'mdc-snackbar__action-wrapper',
  ACTION_BUTTON: 'mdc-snackbar__action-button',
  ACTIVE: 'mdc-snackbar--active',
  MULTILINE: 'mdc-snackbar--multiline',
  ACTION_ON_BOTTOM: 'mdc-snackbar--action-on-bottom'
};

var strings = {
  TEXT_SELECTOR: '.mdc-snackbar__text',
  ACTION_WRAPPER_SELECTOR: '.mdc-snackbar__action-wrapper',
  ACTION_BUTTON_SELECTOR: '.mdc-snackbar__action-button'
};

var numbers = {
  MESSAGE_TIMEOUT: 2750
};

/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(49);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */




var MDCSnackbarFoundation = function (_MDCFoundation) {
  _inherits(MDCSnackbarFoundation, _MDCFoundation);

  _createClass(MDCSnackbarFoundation, [{
    key: 'active',
    get: function get() {
      return this.active_;
    }
  }], [{
    key: 'cssClasses',
    get: function get() {
      return __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* cssClasses */];
    }
  }, {
    key: 'strings',
    get: function get() {
      return __WEBPACK_IMPORTED_MODULE_1__constants__["b" /* strings */];
    }
  }, {
    key: 'defaultAdapter',
    get: function get() {
      return {
        addClass: function addClass() /* className: string */{},
        removeClass: function removeClass() /* className: string */{},
        setAriaHidden: function setAriaHidden() {},
        unsetAriaHidden: function unsetAriaHidden() {},
        setMessageText: function setMessageText() /* message: string */{},
        setActionText: function setActionText() /* actionText: string */{},
        setActionAriaHidden: function setActionAriaHidden() {},
        unsetActionAriaHidden: function unsetActionAriaHidden() {},
        registerActionClickHandler: function registerActionClickHandler() /* handler: EventListener */{},
        deregisterActionClickHandler: function deregisterActionClickHandler() /* handler: EventListener */{},
        registerTransitionEndHandler: function registerTransitionEndHandler() /* handler: EventListener */{},
        deregisterTransitionEndHandler: function deregisterTransitionEndHandler() /* handler: EventListener */{}
      };
    }
  }]);

  function MDCSnackbarFoundation(adapter) {
    _classCallCheck(this, MDCSnackbarFoundation);

    var _this = _possibleConstructorReturn(this, (MDCSnackbarFoundation.__proto__ || Object.getPrototypeOf(MDCSnackbarFoundation)).call(this, _extends(MDCSnackbarFoundation.defaultAdapter, adapter)));

    _this.active_ = false;
    _this.queue_ = [];
    _this.actionClickHandler_ = function () {
      return _this.invokeAction_();
    };
    return _this;
  }

  _createClass(MDCSnackbarFoundation, [{
    key: 'init',
    value: function init() {
      this.adapter_.registerActionClickHandler(this.actionClickHandler_);
      this.adapter_.setAriaHidden();
      this.adapter_.setActionAriaHidden();
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      this.adapter_.deregisterActionClickHandler(this.actionClickHandler_);
    }
  }, {
    key: 'show',
    value: function show(data) {
      if (!data) {
        throw new Error('Please provide a data object with at least a message to display.');
      }
      if (!data.message) {
        throw new Error('Please provide a message to be displayed.');
      }
      if (data.actionHandler && !data.actionText) {
        throw new Error('Please provide action text with the handler.');
      }

      if (this.active) {
        this.queue_.push(data);
        return;
      }

      var ACTIVE = __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* cssClasses */].ACTIVE,
          MULTILINE = __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* cssClasses */].MULTILINE,
          ACTION_ON_BOTTOM = __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* cssClasses */].ACTION_ON_BOTTOM;
      var MESSAGE_TIMEOUT = __WEBPACK_IMPORTED_MODULE_1__constants__["c" /* numbers */].MESSAGE_TIMEOUT;


      this.adapter_.setMessageText(data.message);

      if (data.multiline) {
        this.adapter_.addClass(MULTILINE);
        if (data.actionOnBottom) {
          this.adapter_.addClass(ACTION_ON_BOTTOM);
        }
      }

      if (data.actionHandler) {
        this.adapter_.setActionText(data.actionText);
        this.actionHandler_ = data.actionHandler;
        this.setActionHidden_(false);
      } else {
        this.setActionHidden_(true);
        this.actionHandler_ = null;
        this.adapter_.setActionText(null);
      }

      this.active_ = true;
      this.adapter_.addClass(ACTIVE);
      this.adapter_.unsetAriaHidden();

      setTimeout(this.cleanup_.bind(this), data.timeout || MESSAGE_TIMEOUT);
    }
  }, {
    key: 'invokeAction_',
    value: function invokeAction_() {
      if (!this.actionHandler_) {
        return;
      }

      this.actionHandler_();
    }
  }, {
    key: 'cleanup_',
    value: function cleanup_() {
      var _this2 = this;

      var ACTIVE = __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* cssClasses */].ACTIVE,
          MULTILINE = __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* cssClasses */].MULTILINE,
          ACTION_ON_BOTTOM = __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* cssClasses */].ACTION_ON_BOTTOM;


      this.adapter_.removeClass(ACTIVE);

      var handler = function handler() {
        _this2.adapter_.deregisterTransitionEndHandler(handler);
        _this2.adapter_.removeClass(MULTILINE);
        _this2.adapter_.removeClass(ACTION_ON_BOTTOM);
        _this2.setActionHidden_(true);
        _this2.adapter_.setMessageText(null);
        _this2.adapter_.setActionText(null);
        _this2.adapter_.setAriaHidden();
        _this2.active_ = false;
        _this2.showNext_();
      };

      this.adapter_.registerTransitionEndHandler(handler);
    }
  }, {
    key: 'showNext_',
    value: function showNext_() {
      if (!this.queue_.length) {
        return;
      }

      this.show(this.queue_.shift());
    }
  }, {
    key: 'setActionHidden_',
    value: function setActionHidden_(isHidden) {
      if (isHidden) {
        this.adapter_.setActionAriaHidden();
      } else {
        this.adapter_.unsetActionAriaHidden();
      }
    }
  }]);

  return MDCSnackbarFoundation;
}(__WEBPACK_IMPORTED_MODULE_0__material_base__["MDCFoundation"]);

/* harmony default export */ __webpack_exports__["a"] = MDCSnackbarFoundation;

/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return strings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cssClasses; });
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var strings = {
  ARIA_HIDDEN: 'aria-hidden',
  ROLE: 'role',
  INPUT_SELECTOR: '.mdc-textfield__input',
  LABEL_SELECTOR: '.mdc-textfield__label'
};

var cssClasses = {
  ROOT: 'mdc-textfield',
  UPGRADED: 'mdc-textfield--upgraded',
  DISABLED: 'mdc-textfield--disabled',
  FOCUSED: 'mdc-textfield--focused',
  INVALID: 'mdc-textfield--invalid',
  HELPTEXT_PERSISTENT: 'mdc-textfield-helptext--persistent',
  HELPTEXT_VALIDATION_MSG: 'mdc-textfield-helptext--validation-msg',
  LABEL_FLOAT_ABOVE: 'mdc-textfield__label--float-above'
};

/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(51);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */




var MDCTextfieldFoundation = function (_MDCFoundation) {
  _inherits(MDCTextfieldFoundation, _MDCFoundation);

  _createClass(MDCTextfieldFoundation, null, [{
    key: 'cssClasses',
    get: function get() {
      return __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* cssClasses */];
    }
  }, {
    key: 'strings',
    get: function get() {
      return __WEBPACK_IMPORTED_MODULE_1__constants__["b" /* strings */];
    }
  }, {
    key: 'defaultAdapter',
    get: function get() {
      return {
        addClass: function addClass() /* className: string */{},
        removeClass: function removeClass() /* className: string */{},
        addClassToLabel: function addClassToLabel() /* className: string */{},
        removeClassFromLabel: function removeClassFromLabel() /* className: string */{},
        addClassToHelptext: function addClassToHelptext() /* className: string */{},
        removeClassFromHelptext: function removeClassFromHelptext() /* className: string */{},
        helptextHasClass: function helptextHasClass() {
          return (/* className: string */ /* boolean */false
          );
        },
        registerInputFocusHandler: function registerInputFocusHandler() /* handler: EventListener */{},
        deregisterInputFocusHandler: function deregisterInputFocusHandler() /* handler: EventListener */{},
        registerInputBlurHandler: function registerInputBlurHandler() /* handler: EventListener */{},
        deregisterInputBlurHandler: function deregisterInputBlurHandler() /* handler: EventListener */{},
        registerInputInputHandler: function registerInputInputHandler() /* handler: EventListener */{},
        deregisterInputInputHandler: function deregisterInputInputHandler() /* handler: EventListener */{},
        registerInputKeydownHandler: function registerInputKeydownHandler() /* handler: EventListener */{},
        deregisterInputKeydownHandler: function deregisterInputKeydownHandler() /* handler: EventListener */{},
        setHelptextAttr: function setHelptextAttr() /* name: string, value: string */{},
        removeHelptextAttr: function removeHelptextAttr() /* name: string */{},
        getNativeInput: function getNativeInput() {
          return (/* HTMLInputElement */{}
          );
        }
      };
    }
  }]);

  function MDCTextfieldFoundation() {
    var adapter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, MDCTextfieldFoundation);

    var _this = _possibleConstructorReturn(this, (MDCTextfieldFoundation.__proto__ || Object.getPrototypeOf(MDCTextfieldFoundation)).call(this, _extends(MDCTextfieldFoundation.defaultAdapter, adapter)));

    _this.receivedUserInput_ = false;
    _this.inputFocusHandler_ = function () {
      return _this.activateFocus_();
    };
    _this.inputBlurHandler_ = function () {
      return _this.deactivateFocus_();
    };
    _this.inputInputHandler_ = function () {
      return _this.autoCompleteFocus_();
    };
    _this.inputKeydownHandler_ = function () {
      return _this.receivedUserInput_ = true;
    };
    return _this;
  }

  _createClass(MDCTextfieldFoundation, [{
    key: 'init',
    value: function init() {
      this.adapter_.addClass(MDCTextfieldFoundation.cssClasses.UPGRADED);
      this.adapter_.registerInputFocusHandler(this.inputFocusHandler_);
      this.adapter_.registerInputBlurHandler(this.inputBlurHandler_);
      this.adapter_.registerInputInputHandler(this.inputInputHandler_);
      this.adapter_.registerInputKeydownHandler(this.inputKeydownHandler_);

      // Ensure label does not collide with any pre-filled value.
      if (this.getNativeInput_().value) {
        this.adapter_.addClassToLabel(MDCTextfieldFoundation.cssClasses.LABEL_FLOAT_ABOVE);
      }
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      this.adapter_.removeClass(MDCTextfieldFoundation.cssClasses.UPGRADED);
      this.adapter_.deregisterInputFocusHandler(this.inputFocusHandler_);
      this.adapter_.deregisterInputBlurHandler(this.inputBlurHandler_);
      this.adapter_.deregisterInputInputHandler(this.inputInputHandler_);
      this.adapter_.deregisterInputKeydownHandler(this.inputKeydownHandler_);
    }
  }, {
    key: 'activateFocus_',
    value: function activateFocus_() {
      var _MDCTextfieldFoundati = MDCTextfieldFoundation.cssClasses,
          FOCUSED = _MDCTextfieldFoundati.FOCUSED,
          LABEL_FLOAT_ABOVE = _MDCTextfieldFoundati.LABEL_FLOAT_ABOVE;

      this.adapter_.addClass(FOCUSED);
      this.adapter_.addClassToLabel(LABEL_FLOAT_ABOVE);
      this.showHelptext_();
    }
  }, {
    key: 'autoCompleteFocus_',
    value: function autoCompleteFocus_() {
      if (!this.receivedUserInput_) {
        this.activateFocus_();
      }
    }
  }, {
    key: 'showHelptext_',
    value: function showHelptext_() {
      var ARIA_HIDDEN = MDCTextfieldFoundation.strings.ARIA_HIDDEN;

      this.adapter_.removeHelptextAttr(ARIA_HIDDEN);
    }
  }, {
    key: 'deactivateFocus_',
    value: function deactivateFocus_() {
      var _MDCTextfieldFoundati2 = MDCTextfieldFoundation.cssClasses,
          FOCUSED = _MDCTextfieldFoundati2.FOCUSED,
          INVALID = _MDCTextfieldFoundati2.INVALID,
          LABEL_FLOAT_ABOVE = _MDCTextfieldFoundati2.LABEL_FLOAT_ABOVE;

      var input = this.getNativeInput_();
      var isValid = input.checkValidity();

      this.adapter_.removeClass(FOCUSED);
      if (!input.value) {
        this.adapter_.removeClassFromLabel(LABEL_FLOAT_ABOVE);
        this.receivedUserInput_ = false;
      }
      if (isValid) {
        this.adapter_.removeClass(INVALID);
      } else {
        this.adapter_.addClass(INVALID);
      }
      this.updateHelptextOnDeactivation_(isValid);
    }
  }, {
    key: 'updateHelptextOnDeactivation_',
    value: function updateHelptextOnDeactivation_(isValid) {
      var _MDCTextfieldFoundati3 = MDCTextfieldFoundation.cssClasses,
          HELPTEXT_PERSISTENT = _MDCTextfieldFoundati3.HELPTEXT_PERSISTENT,
          HELPTEXT_VALIDATION_MSG = _MDCTextfieldFoundati3.HELPTEXT_VALIDATION_MSG;
      var ROLE = MDCTextfieldFoundation.strings.ROLE;

      var helptextIsPersistent = this.adapter_.helptextHasClass(HELPTEXT_PERSISTENT);
      var helptextIsValidationMsg = this.adapter_.helptextHasClass(HELPTEXT_VALIDATION_MSG);
      var validationMsgNeedsDisplay = helptextIsValidationMsg && !isValid;

      if (validationMsgNeedsDisplay) {
        this.adapter_.setHelptextAttr(ROLE, 'alert');
      } else {
        this.adapter_.removeHelptextAttr(ROLE);
      }

      if (helptextIsPersistent || validationMsgNeedsDisplay) {
        return;
      }
      this.hideHelptext_();
    }
  }, {
    key: 'hideHelptext_',
    value: function hideHelptext_() {
      var ARIA_HIDDEN = MDCTextfieldFoundation.strings.ARIA_HIDDEN;

      this.adapter_.setHelptextAttr(ARIA_HIDDEN, 'true');
    }
  }, {
    key: 'isDisabled',
    value: function isDisabled() {
      return this.getNativeInput_().disabled;
    }
  }, {
    key: 'setDisabled',
    value: function setDisabled(disabled) {
      var DISABLED = MDCTextfieldFoundation.cssClasses.DISABLED;

      this.getNativeInput_().disabled = disabled;
      if (disabled) {
        this.adapter_.addClass(DISABLED);
      } else {
        this.adapter_.removeClass(DISABLED);
      }
    }
  }, {
    key: 'getNativeInput_',
    value: function getNativeInput_() {
      return this.adapter_.getNativeInput() || {
        checkValidity: function checkValidity() {
          return true;
        },
        value: '',
        disabled: false
      };
    }
  }]);

  return MDCTextfieldFoundation;
}(__WEBPACK_IMPORTED_MODULE_0__material_base__["MDCFoundation"]);

/* harmony default export */ __webpack_exports__["a"] = MDCTextfieldFoundation;

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var tabbable = __webpack_require__(54);

var listeningFocusTrap = null;

function focusTrap(element, userOptions) {
  var tabbableNodes = [];
  var nodeFocusedBeforeActivation = null;
  var active = false;
  var paused = false;

  var container = (typeof element === 'string')
    ? document.querySelector(element)
    : element;

  var config = userOptions || {};
  config.returnFocusOnDeactivate = (userOptions && userOptions.returnFocusOnDeactivate !== undefined)
    ? userOptions.returnFocusOnDeactivate
    : true;
  config.escapeDeactivates = (userOptions && userOptions.escapeDeactivates !== undefined)
    ? userOptions.escapeDeactivates
    : true;

  var trap = {
    activate: activate,
    deactivate: deactivate,
    pause: pause,
    unpause: unpause,
  };

  return trap;

  function activate(activateOptions) {
    if (active) return;

    var defaultedActivateOptions = {
      onActivate: (activateOptions && activateOptions.onActivate !== undefined)
        ? activateOptions.onActivate
        : config.onActivate,
    };

    active = true;
    paused = false;
    nodeFocusedBeforeActivation = document.activeElement;

    if (defaultedActivateOptions.onActivate) {
      defaultedActivateOptions.onActivate();
    }

    addListeners();
    return trap;
  }

  function deactivate(deactivateOptions) {
    if (!active) return;

    var defaultedDeactivateOptions = {
      returnFocus: (deactivateOptions && deactivateOptions.returnFocus !== undefined)
        ? deactivateOptions.returnFocus
        : config.returnFocusOnDeactivate,
      onDeactivate: (deactivateOptions && deactivateOptions.onDeactivate !== undefined)
        ? deactivateOptions.onDeactivate
        : config.onDeactivate,
    };

    removeListeners();

    if (defaultedDeactivateOptions.onDeactivate) {
      defaultedDeactivateOptions.onDeactivate();
    }

    if (defaultedDeactivateOptions.returnFocus) {
      setTimeout(function () {
        tryFocus(nodeFocusedBeforeActivation);
      }, 0);
    }

    active = false;
    paused = false;
    return this;
  }

  function pause() {
    if (paused || !active) return;
    paused = true;
    removeListeners();
  }

  function unpause() {
    if (!paused || !active) return;
    paused = false;
    addListeners();
  }

  function addListeners() {
    if (!active) return;

    // There can be only one listening focus trap at a time
    if (listeningFocusTrap) {
      listeningFocusTrap.pause();
    }
    listeningFocusTrap = trap;

    updateTabbableNodes();
    tryFocus(firstFocusNode());
    document.addEventListener('focus', checkFocus, true);
    document.addEventListener('click', checkClick, true);
    document.addEventListener('mousedown', checkPointerDown, true);
    document.addEventListener('touchstart', checkPointerDown, true);
    document.addEventListener('keydown', checkKey, true);

    return trap;
  }

  function removeListeners() {
    if (!active || listeningFocusTrap !== trap) return;

    document.removeEventListener('focus', checkFocus, true);
    document.removeEventListener('click', checkClick, true);
    document.removeEventListener('mousedown', checkPointerDown, true);
    document.removeEventListener('touchstart', checkPointerDown, true);
    document.removeEventListener('keydown', checkKey, true);

    listeningFocusTrap = null;

    return trap;
  }

  function getNodeForOption(optionName) {
    var optionValue = config[optionName];
    var node = optionValue;
    if (!optionValue) {
      return null;
    }
    if (typeof optionValue === 'string') {
      node = document.querySelector(optionValue);
      if (!node) {
        throw new Error('`' + optionName + '` refers to no known node');
      }
    }
    if (typeof optionValue === 'function') {
      node = optionValue();
      if (!node) {
        throw new Error('`' + optionName + '` did not return a node');
      }
    }
    return node;
  }

  function firstFocusNode() {
    var node;
    if (getNodeForOption('initialFocus') !== null) {
      node = getNodeForOption('initialFocus');
    } else if (container.contains(document.activeElement)) {
      node = document.activeElement;
    } else {
      node = tabbableNodes[0] || getNodeForOption('fallbackFocus');
    }

    if (!node) {
      throw new Error('You can\'t have a focus-trap without at least one focusable element');
    }

    return node;
  }

  // This needs to be done on mousedown and touchstart instead of click
  // so that it precedes the focus event
  function checkPointerDown(e) {
    if (config.clickOutsideDeactivates && !container.contains(e.target)) {
      deactivate({ returnFocus: false });
    }
  }

  function checkClick(e) {
    if (config.clickOutsideDeactivates) return;
    if (container.contains(e.target)) return;
    e.preventDefault();
    e.stopImmediatePropagation();
  }

  function checkFocus(e) {
    if (container.contains(e.target)) return;
    e.preventDefault();
    e.stopImmediatePropagation();
    // Checking for a blur method here resolves a Firefox issue (#15)
    if (typeof e.target.blur === 'function') e.target.blur();
  }

  function checkKey(e) {
    if (e.key === 'Tab' || e.keyCode === 9) {
      handleTab(e);
    }

    if (config.escapeDeactivates !== false && isEscapeEvent(e)) {
      deactivate();
    }
  }

  function handleTab(e) {
    e.preventDefault();
    updateTabbableNodes();
    var currentFocusIndex = tabbableNodes.indexOf(e.target);
    var lastTabbableNode = tabbableNodes[tabbableNodes.length - 1];
    var firstTabbableNode = tabbableNodes[0];

    if (e.shiftKey) {
      if (e.target === firstTabbableNode || tabbableNodes.indexOf(e.target) === -1) {
        return tryFocus(lastTabbableNode);
      }
      return tryFocus(tabbableNodes[currentFocusIndex - 1]);
    }

    if (e.target === lastTabbableNode) return tryFocus(firstTabbableNode);

    tryFocus(tabbableNodes[currentFocusIndex + 1]);
  }

  function updateTabbableNodes() {
    tabbableNodes = tabbable(container);
  }
}

function isEscapeEvent(e) {
  return e.key === 'Escape' || e.key === 'Esc' || e.keyCode === 27;
}

function tryFocus(node) {
  if (!node || !node.focus) return;
  node.focus();
  if (node.tagName.toLowerCase() === 'input') {
    node.select();
  }
}

module.exports = focusTrap;


/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = function(el) {
  var basicTabbables = [];
  var orderedTabbables = [];

  // A node is "available" if
  // - it's computed style
  var isUnavailable = createIsUnavailable();

  var candidateSelectors = [
    'input',
    'select',
    'a[href]',
    'textarea',
    'button',
    '[tabindex]',
  ];

  var candidates = el.querySelectorAll(candidateSelectors);

  var candidate, candidateIndex;
  for (var i = 0, l = candidates.length; i < l; i++) {
    candidate = candidates[i];
    candidateIndex = candidate.tabIndex;

    if (
      candidateIndex < 0
      || (candidate.tagName === 'INPUT' && candidate.type === 'hidden')
      || candidate.disabled
      || isUnavailable(candidate)
    ) {
      continue;
    }

    if (candidateIndex === 0) {
      basicTabbables.push(candidate);
    } else {
      orderedTabbables.push({
        tabIndex: candidateIndex,
        node: candidate,
      });
    }
  }

  var tabbableNodes = orderedTabbables
    .sort(function(a, b) {
      return a.tabIndex - b.tabIndex;
    })
    .map(function(a) {
      return a.node
    });

  Array.prototype.push.apply(tabbableNodes, basicTabbables);

  return tabbableNodes;
}

function createIsUnavailable() {
  // Node cache must be refreshed on every check, in case
  // the content of the element has changed
  var isOffCache = [];

  // "off" means `display: none;`, as opposed to "hidden",
  // which means `visibility: hidden;`. getComputedStyle
  // accurately reflects visiblity in context but not
  // "off" state, so we need to recursively check parents.

  function isOff(node, nodeComputedStyle) {
    if (node === document.documentElement) return false;

    // Find the cached node (Array.prototype.find not available in IE9)
    for (var i = 0, length = isOffCache.length; i < length; i++) {
      if (isOffCache[i][0] === node) return isOffCache[i][1];
    }

    nodeComputedStyle = nodeComputedStyle || window.getComputedStyle(node);

    var result = false;

    if (nodeComputedStyle.display === 'none') {
      result = true;
    } else if (node.parentNode) {
      result = isOff(node.parentNode);
    }

    isOffCache.push([node, result]);

    return result;
  }

  return function isUnavailable(node) {
    if (node === document.documentElement) return false;

    var computedStyle = window.getComputedStyle(node);

    if (isOff(node, computedStyle)) return true;

    return computedStyle.visibility === 'hidden';
  }
}


/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_checkbox__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_form_field__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_grid_list__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_icon_toggle__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_radio__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__material_ripple__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__material_dialog__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__material_drawer__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__material_textfield__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__material_snackbar__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__material_menu__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__material_select__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__material_auto_init__ = __webpack_require__(9);
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "base", function() { return __WEBPACK_IMPORTED_MODULE_0__material_base__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "checkbox", function() { return __WEBPACK_IMPORTED_MODULE_1__material_checkbox__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "formField", function() { return __WEBPACK_IMPORTED_MODULE_2__material_form_field__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "gridList", function() { return __WEBPACK_IMPORTED_MODULE_3__material_grid_list__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "iconToggle", function() { return __WEBPACK_IMPORTED_MODULE_4__material_icon_toggle__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "radio", function() { return __WEBPACK_IMPORTED_MODULE_5__material_radio__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "ripple", function() { return __WEBPACK_IMPORTED_MODULE_6__material_ripple__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "snackbar", function() { return __WEBPACK_IMPORTED_MODULE_10__material_snackbar__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "dialog", function() { return __WEBPACK_IMPORTED_MODULE_7__material_dialog__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "drawer", function() { return __WEBPACK_IMPORTED_MODULE_8__material_drawer__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "textfield", function() { return __WEBPACK_IMPORTED_MODULE_9__material_textfield__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "menu", function() { return __WEBPACK_IMPORTED_MODULE_11__material_menu__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "select", function() { return __WEBPACK_IMPORTED_MODULE_12__material_select__; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "autoInit", function() { return __WEBPACK_IMPORTED_MODULE_13__material_auto_init__["a"]; });
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
















// Register all components
__WEBPACK_IMPORTED_MODULE_13__material_auto_init__["a" /* default */].register('MDCCheckbox', __WEBPACK_IMPORTED_MODULE_1__material_checkbox__["MDCCheckbox"]);
__WEBPACK_IMPORTED_MODULE_13__material_auto_init__["a" /* default */].register('MDCDialog', __WEBPACK_IMPORTED_MODULE_7__material_dialog__["MDCDialog"]);
__WEBPACK_IMPORTED_MODULE_13__material_auto_init__["a" /* default */].register('MDCTemporaryDrawer', __WEBPACK_IMPORTED_MODULE_8__material_drawer__["MDCTemporaryDrawer"]);
__WEBPACK_IMPORTED_MODULE_13__material_auto_init__["a" /* default */].register('MDCRipple', __WEBPACK_IMPORTED_MODULE_6__material_ripple__["MDCRipple"]);
__WEBPACK_IMPORTED_MODULE_13__material_auto_init__["a" /* default */].register('MDCGridList', __WEBPACK_IMPORTED_MODULE_3__material_grid_list__["MDCGridList"]);
__WEBPACK_IMPORTED_MODULE_13__material_auto_init__["a" /* default */].register('MDCIconToggle', __WEBPACK_IMPORTED_MODULE_4__material_icon_toggle__["MDCIconToggle"]);
__WEBPACK_IMPORTED_MODULE_13__material_auto_init__["a" /* default */].register('MDCRadio', __WEBPACK_IMPORTED_MODULE_5__material_radio__["MDCRadio"]);
__WEBPACK_IMPORTED_MODULE_13__material_auto_init__["a" /* default */].register('MDCSnackbar', __WEBPACK_IMPORTED_MODULE_10__material_snackbar__["MDCSnackbar"]);
__WEBPACK_IMPORTED_MODULE_13__material_auto_init__["a" /* default */].register('MDCTextfield', __WEBPACK_IMPORTED_MODULE_9__material_textfield__["MDCTextfield"]);
__WEBPACK_IMPORTED_MODULE_13__material_auto_init__["a" /* default */].register('MDCSimpleMenu', __WEBPACK_IMPORTED_MODULE_11__material_menu__["MDCSimpleMenu"]);
__WEBPACK_IMPORTED_MODULE_13__material_auto_init__["a" /* default */].register('MDCSelect', __WEBPACK_IMPORTED_MODULE_12__material_select__["MDCSelect"]);

// Export all components.


/***/ })
/******/ ]);
});