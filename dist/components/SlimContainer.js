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
    global.SlimContainer = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _react) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = SlimContainer;
  _react = _interopRequireDefault(_react);

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
});