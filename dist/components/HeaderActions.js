"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = HeaderActions;

var _react = _interopRequireDefault(require("react"));

var _Utilities = _interopRequireDefault(require("./Utilities"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Here you can place components like `ActionMenu` for the current page.
 */
function HeaderActions(props) {
  var _break = props.break || props.breakpoint || "lg";

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "blue-app-actions navbar ".concat(props.className, " navbar-expand-").concat(_break, " ").concat(_break)
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "ui-header-wrapper",
    onClick: _Utilities.default.scrollToTop
  }), props.children);
}