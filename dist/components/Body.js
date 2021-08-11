"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Body;

var _react = _interopRequireDefault(require("react"));

var _excluded = ["id", "className", "containerClass", "hasActions", "onClick", "children", "rounded"];

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
      rounded = _ref.rounded,
      rest = _objectWithoutProperties(_ref, _excluded);

  var pageBodyClassName = "blue-app-page";
  return /*#__PURE__*/_react.default.createElement("div", {
    id: id,
    className: className ? pageBodyClassName + " " + className : pageBodyClassName + (hasActions ? " has-actions" : "") + " break-".concat(rest.break || "md") + (rounded ? " rounded" : ""),
    onClick: onClick
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: containerClass || "container-fluid"
  }, children));
}