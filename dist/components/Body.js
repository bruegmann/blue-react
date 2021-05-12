"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Body;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Contains the content of the page.
 */
function Body(props) {
  var pageBodyClassName = "blue-app-page";
  return /*#__PURE__*/_react.default.createElement("div", {
    id: props.id,
    className: props.className ? pageBodyClassName + " " + props.className : pageBodyClassName + (props.hasActions ? " has-actions" : "") + " break-".concat(props.break || "md"),
    onClick: props.onClick
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: props.containerClass || "container-fluid"
  }, props.children));
}