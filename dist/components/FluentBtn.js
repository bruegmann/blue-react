"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FluentBtn;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @deprecated Fluent buttons got removed from blue-react.
 * Shortcut for `<button class="fluent-btn"><div className="fluent-btn-ball"></div></button>`.
 * Button with a fancy and fluent acrylic effect.
 */
function FluentBtn(props) {
  var ballClassName = "fluent-btn-ball";
  var _props = {};
  Object.keys(props).forEach(function (key) {
    if (key !== "light") {
      _props[key] = props[key];
    }
  });
  _props.className = "fluent-btn " + props.className + (props.light ? " light" : "");
  return props.href ? /*#__PURE__*/_react.default.createElement("a", _props, /*#__PURE__*/_react.default.createElement("div", {
    className: ballClassName
  }), props.children) : /*#__PURE__*/_react.default.createElement("button", _props, /*#__PURE__*/_react.default.createElement("div", {
    className: ballClassName
  }), props.children);
}