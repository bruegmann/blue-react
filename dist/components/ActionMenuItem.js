"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ActionMenuItem;

var _react = _interopRequireDefault(require("react"));

var _MenuItem = _interopRequireDefault(require("./MenuItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * @deprecated This is only an alias to MenuItem, please use MenuItem instead.
 * <span class="badge badge-warning">Deprecated</span> This is just an alias for <code>MenuItem</code>, so you should use that component instead.
 * If you need the older <code>ActionMenuItem</code>, make sure to the prop <code>useDeprecated</code>.<br/>
 * List Item and Link for the current Action Menu.
 */
function ActionMenuItem(props) {
  if (props.useDeprecated) {
    var _props = {};
    Object.keys(props).map(function (key) {
      if (key !== "navItemClassName" && key !== "icon" && key !== "label") {
        _props[key] = props[key];
      }
    });
    return /*#__PURE__*/_react.default.createElement("li", {
      className: "nav-item " + props.navItemClassName
    }, /*#__PURE__*/_react.default.createElement("a", _extends({}, _props, {
      href: props.href,
      className: "nav-link blue-app-actions-menu-item " + props.className
    }), /*#__PURE__*/_react.default.createElement("span", {
      className: props.icon
    }), props.label && /*#__PURE__*/_react.default.createElement("span", {
      className: "blue-app-actions-label"
    }, props.icon && /*#__PURE__*/_react.default.createElement("span", null, "\xA0"), props.label)));
  } else {
    return /*#__PURE__*/_react.default.createElement(_MenuItem.default, props);
  }
}