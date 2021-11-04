"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = BodyRounded;

var _react = _interopRequireDefault(require("react"));

var _Body = _interopRequireDefault(require("./Body"));

var _excluded = ["classNameTop", "classNameBottom", "children"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Extended variation of `Body` with rounded elements on top and bottom of the page.
 */
function BodyRounded(_ref) {
  var classNameTop = _ref.classNameTop,
      classNameBottom = _ref.classNameBottom,
      children = _ref.children,
      bodyProps = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/_react.default.createElement(_Body.default, bodyProps, /*#__PURE__*/_react.default.createElement("div", {
    className: "blue-app-body-rounded-top bg-theme pt-1 " + classNameTop,
    style: {
      height: "1rem"
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "rounded-top bg-body w-100 h-100"
  })), children, /*#__PURE__*/_react.default.createElement("div", {
    className: "blue-app-body-rounded-bottom bg-theme pb-1 " + classNameBottom,
    style: {
      height: "1rem"
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "rounded-bottom bg-body w-100 h-100"
  })));
}