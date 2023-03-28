(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "./Utilities"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("./Utilities"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.Utilities);
    global.Header = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _react, _Utilities) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = Header;
  _react = _interopRequireDefault(_react);
  _Utilities = _interopRequireDefault(_Utilities);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  /**
   * The top of a page.
   */
  function Header(_ref) {
    var children = _ref.children;
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "blue-header blue-header-extension"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "blue-header-wrapper",
      onClick: _Utilities.default.scrollToTop
    }), children);
  }
});