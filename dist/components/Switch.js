"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Switch;

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Switch.
 */
function Switch(_ref) {
  var className = _ref.className,
      checked = _ref.checked,
      onChange = _ref.onChange,
      sliderLabel = _ref.sliderLabel,
      disabled = _ref.disabled,
      _ref$elementType = _ref.elementType,
      elementType = _ref$elementType === void 0 ? "label" : _ref$elementType;
  return /*#__PURE__*/(0, _react.createElement)(elementType, {
    className: "switch " + (disabled ? "disabled " : "") + className
  }, [/*#__PURE__*/_react.default.createElement("input", {
    key: 0,
    type: "checkbox",
    checked: checked,
    onChange: onChange,
    disabled: disabled
  }), /*#__PURE__*/_react.default.createElement("span", {
    key: 1,
    className: "slider round",
    "data-label": sliderLabel
  })]);
}