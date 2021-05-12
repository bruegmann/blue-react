"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Header;

var _react = _interopRequireDefault(require("react"));

var _Utilities = _interopRequireDefault(require("./Utilities"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The top of a page.
 */
function Header(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "blue-app-header blue-app-header-extension"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "ui-header-wrapper",
    onClick: _Utilities.default.scrollToTop
  }), children);
}