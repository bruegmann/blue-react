"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ActionMenuSwitch;

var _react = _interopRequireDefault(require("react"));

var _Switch = _interopRequireDefault(require("./Switch"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * Switch for the Action Menu.
 */
function ActionMenuSwitch(props) {
  return /*#__PURE__*/_react.default.createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "javascript:void(0)",
    className: "nav-link blue-app-actions-menu-item",
    onClick: function onClick() {
      if (props.onChange) props.onChange();
    }
  }, /*#__PURE__*/_react.default.createElement(_Switch.default, _extends({}, props, {
    elementType: "span"
  })), props.label && /*#__PURE__*/_react.default.createElement("span", {
    className: "blue-app-actions-label"
  }, "\xA0", props.label)));
}