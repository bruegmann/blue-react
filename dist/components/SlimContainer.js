"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SlimContainer;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Shortcut for a combination using Bootstrap's Grid System to create a slim responsive container.
 */
function SlimContainer(_ref) {
  var children = _ref.children,
      className = _ref.className,
      innerClassName = _ref.innerClassName;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "row " + (className || "")
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "col-md-6 col-lg-4 " + (innerClassName || "")
  }, children));
}