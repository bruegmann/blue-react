(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react);
    global.Caret = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _react) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = Caret;
  _react = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  /**
   * Caret icon component.
   */
  function Caret(_ref) {
    var open = _ref.open,
        mirrored = _ref.mirrored,
        className = _ref.className;
    return /*#__PURE__*/_react.default.createElement("span", {
      className: "blue-caret " + (open ? " blue-caret-open " : "") + (mirrored ? " blue-caret-mirrored " : "") + className
    });
  }
});