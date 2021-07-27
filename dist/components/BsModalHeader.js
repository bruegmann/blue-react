"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = BsModalHeader;

var _react = _interopRequireDefault(require("react"));

var _clsx = _interopRequireDefault(require("clsx"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function BsModalHeader(_ref) {
  var className = _ref.className,
      children = _ref.children,
      toggle = _ref.toggle;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _clsx.default)("modal-header", className)
  }, /*#__PURE__*/_react.default.createElement("h5", {
    className: "modal-title"
  }, children), /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    className: "btn-close",
    onClick: toggle
  }));
}