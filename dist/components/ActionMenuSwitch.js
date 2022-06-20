"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ActionMenuSwitch;

var _react = _interopRequireDefault(require("react"));

var _Switch = _interopRequireDefault(require("./Switch"));

var _excluded = ["label"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * @deprecated
 * Use a solution with Bootstrap's `.form-check.form-switch` or `MenuItem` with a switch icon.
 * Switch for the Action Menu.
 */
function ActionMenuSwitch(_ref) {
  var label = _ref.label,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/_react.default.createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "javascript:void(0)",
    className: "nav-link blue-actions-menu-item",
    onClick: function onClick() {
      if (props.onChange) props.onChange();
    }
  }, /*#__PURE__*/_react.default.createElement(_Switch.default, _extends({}, props, {
    elementType: "span"
  })), label && /*#__PURE__*/_react.default.createElement("span", {
    className: "blue-actions-label"
  }, "\xA0", label)));
}