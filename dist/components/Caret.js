"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Caret;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Caret icon component.
 */
function Caret(_ref) {
  var open = _ref.open,
      mirrored = _ref.mirrored,
      className = _ref.className;
  return /*#__PURE__*/_react.default.createElement("span", {
    className: "caret " + (open ? " caret-open " : "") + (mirrored ? " caret-mirrored " : "") + className
  });
}