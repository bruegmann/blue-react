"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = BsModalBody;

var _react = _interopRequireDefault(require("react"));

var _clsx = _interopRequireDefault(require("clsx"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function BsModalBody(_ref) {
  var className = _ref.className,
      children = _ref.children;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _clsx.default)("modal-body", className)
  }, children);
}