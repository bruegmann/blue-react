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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL1N3aXRjaC50c3giXSwibmFtZXMiOlsiU3dpdGNoIiwiY2xhc3NOYW1lIiwiY2hlY2tlZCIsIm9uQ2hhbmdlIiwic2xpZGVyTGFiZWwiLCJkaXNhYmxlZCIsImVsZW1lbnRUeXBlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7Ozs7O0FBb0JBO0FBQ0E7QUFDQTtBQUNlLFNBQVNBLE1BQVQsT0FBNkc7QUFBQSxNQUEzRkMsU0FBMkYsUUFBM0ZBLFNBQTJGO0FBQUEsTUFBaEZDLE9BQWdGLFFBQWhGQSxPQUFnRjtBQUFBLE1BQXZFQyxRQUF1RSxRQUF2RUEsUUFBdUU7QUFBQSxNQUE3REMsV0FBNkQsUUFBN0RBLFdBQTZEO0FBQUEsTUFBaERDLFFBQWdELFFBQWhEQSxRQUFnRDtBQUFBLDhCQUF0Q0MsV0FBc0M7QUFBQSxNQUF0Q0EsV0FBc0MsaUNBQXhCLE9BQXdCO0FBQ3hILHNCQUFPLDBCQUNIQSxXQURHLEVBRUg7QUFDSUwsSUFBQUEsU0FBUyxFQUFFLGFBQWFJLFFBQVEsR0FBRyxXQUFILEdBQWlCLEVBQXRDLElBQTRDSjtBQUQzRCxHQUZHLEVBSUEsY0FDSDtBQUNJLElBQUEsR0FBRyxFQUFFLENBRFQ7QUFFSSxJQUFBLElBQUksRUFBQyxVQUZUO0FBR0ksSUFBQSxPQUFPLEVBQUVDLE9BSGI7QUFJSSxJQUFBLFFBQVEsRUFBRUMsUUFKZDtBQUtJLElBQUEsUUFBUSxFQUFFRTtBQUxkLElBREcsZUFRSDtBQUNJLElBQUEsR0FBRyxFQUFFLENBRFQ7QUFFSSxJQUFBLFNBQVMsRUFBQyxjQUZkO0FBR0ksa0JBQVlEO0FBSGhCLElBUkcsQ0FKQSxDQUFQO0FBbUJIIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwicmVhY3RcIlxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTd2l0Y2hQcm9wcyB7XHJcbiAgICBjbGFzc05hbWU/OiBzdHJpbmdcclxuICAgIGNoZWNrZWQ/OiBib29sZWFuXHJcbiAgICBvbkNoYW5nZT86IChldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQpID0+IHZvaWRcclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldHMgbGFiZWwgaW5zaWRlIG9mIHRoZSBzd2l0Y2guIElmIHlvdSBzZXQgdGhpcywgeW91IHNob3VsZCBhbHNvIHNldCB0aGUgY2xhc3NOYW1lIFwibGdcIiB0byBtYWtlIHRoZSBzd2l0Y2ggbGFyZ2VyLlxyXG4gICAgICovXHJcbiAgICBzbGlkZXJMYWJlbD86IHN0cmluZ1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogWW91IGNhbiBjaGFuZ2UgdGhlIHR5cGUgb2YgdGhlIHdyYXBwZXIgZWxlbWVudC4gSWYgeW91IGRvLCB0aGUgYG9uQ2hhbmdlYCBldmVudCBtaWdodCBub3QgYmUgdHJpZ2dlcmVkLlxyXG4gICAgICovXHJcbiAgICBlbGVtZW50VHlwZT86IHN0cmluZ1xyXG5cclxuICAgIGRpc2FibGVkPzogYm9vbGVhblxyXG59XHJcblxyXG4vKipcclxuICogU3dpdGNoLlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3dpdGNoKHsgY2xhc3NOYW1lLCBjaGVja2VkLCBvbkNoYW5nZSwgc2xpZGVyTGFiZWwsIGRpc2FibGVkLCBlbGVtZW50VHlwZSA9IFwibGFiZWxcIiB9OiBTd2l0Y2hQcm9wcykge1xyXG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoXHJcbiAgICAgICAgZWxlbWVudFR5cGUsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjbGFzc05hbWU6IFwic3dpdGNoIFwiICsgKGRpc2FibGVkID8gXCJkaXNhYmxlZCBcIiA6IFwiXCIpICsgY2xhc3NOYW1lXHJcbiAgICAgICAgfSwgW1xyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICBrZXk9ezB9XHJcbiAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXHJcbiAgICAgICAgICAgIGNoZWNrZWQ9e2NoZWNrZWR9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cclxuICAgICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxyXG4gICAgICAgIC8+LFxyXG4gICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgIGtleT17MX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwic2xpZGVyIHJvdW5kXCJcclxuICAgICAgICAgICAgZGF0YS1sYWJlbD17c2xpZGVyTGFiZWx9XHJcbiAgICAgICAgLz5cclxuICAgIF1cclxuICAgIClcclxufSJdfQ==