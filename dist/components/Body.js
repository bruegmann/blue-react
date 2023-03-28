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
    global.Body = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _react) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = Body;
  _react = _interopRequireDefault(_react);
  var _excluded = ["id", "className", "containerClass", "hasActions", "onClick", "children"];

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

  function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

  /**
   * Contains the content of the page.
   */
  function Body(_ref) {
    var id = _ref.id,
        className = _ref.className,
        containerClass = _ref.containerClass,
        hasActions = _ref.hasActions,
        onClick = _ref.onClick,
        children = _ref.children,
        rest = _objectWithoutProperties(_ref, _excluded);

    var pageBodyClassName = "blue-page";
    return /*#__PURE__*/_react.default.createElement("div", {
      id: id,
      className: className ? pageBodyClassName + " " + className : pageBodyClassName + (hasActions ? " has-actions" : "") + " break-".concat(rest.break || "md"),
      onClick: onClick
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: containerClass || "container-fluid"
    }, children));
  }
});