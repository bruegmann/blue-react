"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = BsModalFooter;

var _react = _interopRequireDefault(require("react"));

var _clsx = _interopRequireDefault(require("clsx"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function BsModalFooter(_ref) {
  var className = _ref.className,
      children = _ref.children;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _clsx.default)("modal-footer", className)
  }, children);
}