webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/week.js":
/*!****************************!*\
  !*** ./components/week.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Week; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_item__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/item */ "./components/item.js");
/* harmony import */ var _styles_week_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../styles/week.css */ "./styles/week.css");
/* harmony import */ var _styles_week_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_week_css__WEBPACK_IMPORTED_MODULE_10__);








var _jsxFileName = "/Users/owner/projects/lets-meet/components/week.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;




var Week =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Week, _React$Component);

  function Week() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Week);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Week)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "days", ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "state", {
      available: []
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Week, [{
    key: "handleMouseOver",
    value: function handleMouseOver(e, dayIndex, itemIndex) {
      if (e.buttons != 1) return;
      this.handleCheck(dayIndex, itemIndex);
    }
  }, {
    key: "handleCheck",
    value: function handleCheck(dayIndex, itemIndex) {
      if (this.checkIfAvailable(dayIndex, itemIndex) == -1) {
        if (dayIndex == 0 || itemIndex == 0) return;
        this.setState(function (prevState) {
          return {
            available: [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(prevState.available), [{
              dayIndex: dayIndex,
              itemIndex: itemIndex
            }])
          };
        });
      } else {
        return this.setState(function (prevState) {
          return {
            available: Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(prevState.available)
          };
        });
      }
    }
  }, {
    key: "checkIfAvailable",
    value: function checkIfAvailable(dayIndex, itemIndex) {
      return this.state.available.findIndex(function (item) {
        return item.dayIndex == dayIndex && item.itemIndex == itemIndex;
      });
    }
  }, {
    key: "getItems",
    value: function getItems(dayIndex) {
      var _this2 = this;

      return Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(Array(25)).map(function (_, itemIndex) {
        return __jsx(_components_item__WEBPACK_IMPORTED_MODULE_9__["default"], {
          onMouseOver: function onMouseOver(e) {
            return _this2.handleMouseOver(e, dayIndex, itemIndex);
          },
          onClick: function onClick() {
            return _this2.handleCheck(dayIndex, itemIndex);
          },
          available: _this2.checkIfAvailable(dayIndex, itemIndex),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          },
          __self: this
        }, dayIndex > 0 && itemIndex == 0 && _this2.days[dayIndex - 1], dayIndex == 0 && itemIndex > 0 && "".concat(itemIndex, ":00"));
      });
    }
  }, {
    key: "getDays",
    value: function getDays() {
      var _this3 = this;

      return Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(Array(8)).map(function (_, dayIndex) {
        return __jsx("div", {
          className: "day",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 58
          },
          __self: this
        }, _this3.getItems(dayIndex));
      });
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx("div", {
        className: "week",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, this.getDays());
    }
  }]);

  return Week;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);



/***/ })

})
//# sourceMappingURL=index.js.f80f2f30ad3cf1f9250a.hot-update.js.map