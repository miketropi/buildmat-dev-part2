/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/lib/custom-select-ui.js":
/*!*************************************!*\
  !*** ./src/lib/custom-select-ui.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CustomSelectUI)
/* harmony export */ });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ "./src/lib/helpers.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }



var CustomSelectUI = /*#__PURE__*/function () {
  function CustomSelectUI(elem, opts) {
    _classCallCheck(this, CustomSelectUI);

    this.elem = elem;
    this.options = elem.querySelectorAll('option');
    this.opts = opts;
    this.defaultValue = elem.value;
    this.value = this.defaultValue;
    this.setValueInit = 0;
    elem.style.display = 'none';
    this.buildTempalte();
    this.render();
    this.addAttrs();
    this.addEvents();
  }

  _createClass(CustomSelectUI, [{
    key: "buildTempalte",
    value: function buildTempalte() {
      var self = this;
      var arrowIcon = "<svg width=\"15\" height=\"16\" viewBox=\"0 0 15 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M12.5 5L7.5 10L2.5 5\" stroke=\"#333333\" stroke-width=\"1.5\"/> </svg>";
      this.targetTemp = document.createElement('DIV');
      this.targetTemp.className = 'custom-select-ui';
      this.targetTemp.innerHTML = "\n    <div class=\"custom-select-ui__inner\">\n      <div class=\"custom-select-ui__target\">".concat(this.defaultValue, "</div>\n      <span class=\"arrow-icon\">").concat(arrowIcon, "</span>\n    </div>");
      this.selectListTemp = document.createElement('DIV');
      this.selectListTemp.className = 'custom-select-ui__select-list';
      this.selectListTemp.style.display = 'none';
      this.selectListTemp.style.position = 'absolute';
      this.selectListTemp.innerHTML = "\n    <ul>\n      ".concat(_toConsumableArray(this.options).map(function (item) {
        var iconClass = item.dataset.iconClass;
        var classes = item.value == self.getValue() ? '__selected' : '';
        return "\n          <li class=\"".concat(classes, " __item\" data-option-value=\"").concat(item.value, "\">\n            <span class=\"__icon-class __icon-").concat(iconClass, "\"></span>\n            <span>").concat(item.innerHTML, "</span>\n          </li>");
      }).join(''), "\n    </ul>");
    }
  }, {
    key: "fixSelectListPos",
    value: function fixSelectListPos() {
      this.selectListTemp.style.left = "".concat(this.targetTemp.offsetLeft, "px");
      this.selectListTemp.style.top = "".concat(this.targetTemp.offsetTop + this.targetTemp.clientHeight + 4, "px");
      this.selectListTemp.style.width = "".concat(this.targetTemp.offsetWidth, "px");
      this.selectListTemp.style.zIndex = 90;
    }
  }, {
    key: "setValue",
    value: function setValue(value) {
      var findOpt = this.selectListTemp.querySelector("[data-option-value=\"".concat(value, "\"]"));
      if (!findOpt) return;
      this.value = value;
      this.handleAfterSetValue();
    }
  }, {
    key: "handleAfterSetValue",
    value: function handleAfterSetValue() {
      var _this$opts, _this$opts2;

      var value = this.getValue();
      var findOpt = this.selectListTemp.querySelector("[data-option-value=\"".concat(value, "\"]"));
      this.elem.value = value; // Update value real select
      // update custom ui

      this.targetTemp.querySelector('.custom-select-ui__target').innerHTML = findOpt.innerHTML;
      this.selectListTemp.querySelector('.__item.__selected').classList.remove('__selected');
      findOpt.classList.add('__selected');

      if (this !== null && this !== void 0 && (_this$opts = this.opts) !== null && _this$opts !== void 0 && _this$opts.onChange && this.setValueInit > 0) {
        this.opts.onChange.call(null, value, this); // callback onchange
      }

      if (this !== null && this !== void 0 && (_this$opts2 = this.opts) !== null && _this$opts2 !== void 0 && _this$opts2.onInit && this.setValueInit == 0) {
        this.setValueInit += 1;
        this.opts.onInit.call(null, this);
        return;
      }

      this.setValueInit += 1;
    }
  }, {
    key: "getValue",
    value: function getValue() {
      return this.value;
    }
  }, {
    key: "controlSelectListDisplay",
    value: function controlSelectListDisplay(status) {
      // 1 show
      // 0 hidden
      var self = this;

      if (status == 1) {
        self.fixSelectListPos();
        self.selectListTemp.style.display = 'block';
        self.targetTemp.dataset.status = 1;
      } else {
        self.selectListTemp.style.display = 'none';
        self.targetTemp.dataset.status = 0;
      }
    }
  }, {
    key: "addEvents",
    value: function addEvents() {
      var self = this;
      var items = this.selectListTemp.querySelectorAll('.__item');
      this.targetTemp.addEventListener('click', function () {
        var status = this.dataset.status;

        if (!status || status == false) {
          self.controlSelectListDisplay(1);
        } else {
          self.controlSelectListDisplay(0);
        }
      }); // Select option

      _toConsumableArray(items).forEach(function (li) {
        li.addEventListener('click', function () {
          self.setValue(this.dataset.optionValue);
          self.controlSelectListDisplay(0);
        });
      });
    }
  }, {
    key: "addAttrs",
    value: function addAttrs() {
      this.elem.customSelectUi = this;
    }
  }, {
    key: "render",
    value: function render() {
      var self = this;
      (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.insertAfter)(this.targetTemp, this.elem);
      document.body.appendChild(this.selectListTemp);
      this.fixSelectListPos();
      this.setValue(this.defaultValue);

      window.onresize = function () {
        self.fixSelectListPos();
      };
    }
  }]);

  return CustomSelectUI;
}();



/***/ }),

/***/ "./src/lib/helpers.js":
/*!****************************!*\
  !*** ./src/lib/helpers.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getQueryUrl": () => (/* binding */ getQueryUrl),
/* harmony export */   "insertAfter": () => (/* binding */ insertAfter)
/* harmony export */ });
var insertAfter = function insertAfter(newNode, existingNode) {
  existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
};
var getQueryUrl = new Proxy(new URLSearchParams(window.location.search), {
  get: function get(searchParams, prop) {
    return searchParams.get(prop);
  }
});

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _megaMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./megaMenu */ "./src/megaMenu.js");
/* harmony import */ var _lib_custom_select_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/custom-select-ui */ "./src/lib/custom-select-ui.js");
/* harmony import */ var _lib_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/helpers */ "./src/lib/helpers.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**
 * Buildmat Script 
 * @ver 1.0
 */



;

(function (w, $) {
  'use strict';

  w.__customSelectUI = [];

  var productGoApecificationsSection = function productGoApecificationsSection() {
    var handle = document.querySelector('.__go-apecifications-js');
    var targetSection = document.querySelector('.product-block--tab.Custom-Specifications');
    if (!handle || !targetSection) return;
    handle.addEventListener('click', function (e) {
      e.preventDefault();
      w.scrollTo({
        top: targetSection.offsetTop - 170
      });
      targetSection.querySelector('.collapsible-trigger-btn').click();
    });
  };

  var applyCustomSelectUIProductFilterColour = function applyCustomSelectUIProductFilterColour() {
    var select = document.querySelector('select#ProductFilterColourField');
    var productListContainer = document.querySelector('.product-list-container');
    if (!select) return;
    var urlQueryname = 'colour';

    var _historyFn = function _historyFn(args) {
      var url = new URL(w.location);

      if (args) {
        var _url$searchParams;

        (_url$searchParams = url.searchParams).set.apply(_url$searchParams, _toConsumableArray(args));
      } else {
        url.searchParams["delete"](urlQueryname);
      }

      w.history.pushState({}, '', url);
    };

    var _filterFn = function _filterFn(filter) {
      _toConsumableArray(productListContainer.querySelectorAll('tr')).forEach(function (elem) {
        elem.style.display = 'none';
      });

      var activeItems = productListContainer.querySelectorAll("[data-p-colour=\"".concat(filter, "\"]"));

      _toConsumableArray(activeItems).forEach(function (elem) {
        elem.style.display = 'table-row';
      });
    };

    var SelectUI = new _lib_custom_select_ui__WEBPACK_IMPORTED_MODULE_1__["default"](select, {
      onChange: function onChange(value, object) {
        document.querySelector('.__filter-current-value').innerHTML = "(".concat(value, ")");

        _filterFn(value);

        if (object.defaultValue == value) {
          _historyFn();
        } else {
          _historyFn([urlQueryname, value]);
        }
      },
      onInit: function onInit(object) {
        document.querySelector('.__filter-current-value').innerHTML = "(".concat(object.value, ")");

        _filterFn(object.value);

        if (_lib_helpers__WEBPACK_IMPORTED_MODULE_2__.getQueryUrl.colour != null) {
          object.setValue(_lib_helpers__WEBPACK_IMPORTED_MODULE_2__.getQueryUrl.colour);
        }
      }
    });
  };

  var thicknessProgressBarPreviewAminate = function thicknessProgressBarPreviewAminate() {
    var elems = document.querySelectorAll('.thickness-progress-bar-preview__do-aminate');
    if (elems.length == 0) return;
    var _itemsTriggerScroll = [];

    _toConsumableArray(elems).forEach(function (wrap) {
      var items = wrap.querySelectorAll('.thickness-progress-bar-preview__item');

      _toConsumableArray(items).forEach(function (_item) {
        // reset width
        _item.querySelector('.thickness-progress-bar-preview__item-bar-inner').style.width = '0%';

        _itemsTriggerScroll.push(_item);
      });
    });

    if (!_itemsTriggerScroll.length) return;
    var wHeight = w.innerHeight;
    w.addEventListener('scroll', function (e) {
      wHeight = w.innerHeight;
      if (_itemsTriggerScroll.length == 0) return;

      _itemsTriggerScroll.forEach(function (el, _index) {
        var _el$getBoundingClient = el.getBoundingClientRect(),
            top = _el$getBoundingClient.top;

        if (wHeight > top + 100) {
          el.classList.add('__trigger-scroll-active');
          var innerBar = el.querySelector('.thickness-progress-bar-preview__item-bar-inner');
          var percent = innerBar.dataset.percent;
          el.querySelector('.thickness-progress-bar-preview__item-bar-inner').style.width = "".concat(percent, "%");

          _itemsTriggerScroll.splice(_index, 1);
        }
      });
    });
  };

  var accordionHandle = function accordionHandle() {
    var accordionElems = document.querySelectorAll('.accordion-target-js');
    if (accordionElems.length == 0) return;

    _toConsumableArray(accordionElems).forEach(function (el, _accIndex) {
      var items = el.querySelectorAll('.accordion-item');
      var activeItem = el.dataset.activeItemDefault;
      if (items.length == 0) return; // check items exists

      _toConsumableArray(items).forEach(function (item, _itemIndex) {
        var heading = item.querySelector('.accordion-item__heading');
        var content = item.querySelector('.accordion-item__content');

        if (_itemIndex + 1 == activeItem) {
          item.classList.add('__active');
          $(content).slideDown('slow');
        }

        heading.addEventListener('click', function (e) {
          e.preventDefault();

          if ($(item).hasClass('__active')) {
            $(content).stop(true, true).slideUp('slow');
            $(item).removeClass('__active');
          } else {
            $(content).stop(true, true).slideDown('slow');
            $(item).addClass('__active');
          }
        });
      });
    });
  };

  var ready = function ready() {
    new _megaMenu__WEBPACK_IMPORTED_MODULE_0__["default"]($('#HeaderMegamenuWrapper'));
    productGoApecificationsSection(); // applyCustomSelectUIProductFilterColour();

    thicknessProgressBarPreviewAminate();
    accordionHandle();
  };
  /**
  * DOM Ready
  */


  $(ready);
  /**
  * 
  */
})(window, jQuery);

/***/ }),

/***/ "./src/megaMenu.js":
/*!*************************!*\
  !*** ./src/megaMenu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MegaMenuHandle)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * Megamenu handle
 */
var MegaMenuHandle = /*#__PURE__*/function () {
  function MegaMenuHandle($header) {
    _classCallCheck(this, MegaMenuHandle);

    this.$header = $header;
    this.$mobileMenu = jQuery('#MobileMegamenu');
    this.appendNavTo();
    this.addNavItemHandle();
    this.toggleButtonHandle();
  }

  _createClass(MegaMenuHandle, [{
    key: "appendNavTo",
    value: function appendNavTo() {
      this.$mobileMenu.find('.mobile-megamenu__nav').html(this.$header.find('#MegamenuBlock').html());
    }
  }, {
    key: "addNavItemHandle",
    value: function addNavItemHandle() {
      this.$mobileMenu.on('click', '.megamenu-block__item > a', function (event) {
        event.preventDefault();
        var status = $(this).data('is-open');

        if (!status || status == false) {
          $(this).closest('li.megamenu-block__item').find('.megamenu-block__mega').show();
          $(this).data('is-open', true);
        } else {
          $(this).closest('li.megamenu-block__item').find('.megamenu-block__mega').hide();
          $(this).data('is-open', false);
        }
      });
    }
  }, {
    key: "toggleButtonHandle",
    value: function toggleButtonHandle() {
      jQuery('body').on('click', 'button.site-nav__mobile-nav-trigger', function (e) {
        jQuery('body').toggleClass('menumobi-open');
      });
    }
  }]);

  return MegaMenuHandle;
}();



/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/theme-script.bundle": 0,
/******/ 			"theme-stylesheet.bundle": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkbuildmat_dev_part2"] = self["webpackChunkbuildmat_dev_part2"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["theme-stylesheet.bundle"], () => (__webpack_require__("./src/main.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["theme-stylesheet.bundle"], () => (__webpack_require__("./src/scss/main.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;