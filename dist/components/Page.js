"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Page;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Utilities = _interopRequireDefault(require("./Utilities"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * Main component for each page.
 */
function Page(_ref) {
  var children = _ref.children,
      title = _ref.title;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      hasHeader = _useState2[0],
      setHasHeader = _useState2[1];

  var elementRef = (0, _react.useRef)(null);
  (0, _react.useEffect)(function () {
    _Utilities.default.registerFluentBtns();
  });
  (0, _react.useEffect)(function () {
    if (elementRef && elementRef.current) {
      var headerElement = elementRef.current.querySelector(".blue-app-header");
      setHasHeader(headerElement !== null && headerElement !== undefined);
    }
  }, [elementRef]);
  (0, _react.useEffect)(function () {
    var titleElement = document.querySelector("title");

    if (title && titleElement) {
      titleElement.innerText = title;
    }
  }, [title]);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)("blue-app-page-wrapper", {
      "hasHeader": hasHeader
    }),
    ref: elementRef
  }, children);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL1BhZ2UudHN4Il0sIm5hbWVzIjpbIlBhZ2UiLCJjaGlsZHJlbiIsInRpdGxlIiwiaGFzSGVhZGVyIiwic2V0SGFzSGVhZGVyIiwiZWxlbWVudFJlZiIsIlV0aWxpdGllcyIsInJlZ2lzdGVyRmx1ZW50QnRucyIsImN1cnJlbnQiLCJoZWFkZXJFbGVtZW50IiwicXVlcnlTZWxlY3RvciIsInVuZGVmaW5lZCIsInRpdGxlRWxlbWVudCIsImRvY3VtZW50IiwiaW5uZXJUZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVQTtBQUNBO0FBQ0E7QUFDZSxTQUFTQSxJQUFULE9BQThDO0FBQUEsTUFBOUJDLFFBQThCLFFBQTlCQSxRQUE4QjtBQUFBLE1BQXBCQyxLQUFvQixRQUFwQkEsS0FBb0I7O0FBQ3pELGtCQUFrQyxxQkFBUyxLQUFULENBQWxDO0FBQUE7QUFBQSxNQUFPQyxTQUFQO0FBQUEsTUFBa0JDLFlBQWxCOztBQUNBLE1BQU1DLFVBQVUsR0FBRyxtQkFBTyxJQUFQLENBQW5CO0FBRUEsd0JBQVUsWUFBTTtBQUNaQyx1QkFBVUMsa0JBQVY7QUFDSCxHQUZEO0FBSUEsd0JBQVUsWUFBTTtBQUNaLFFBQUlGLFVBQVUsSUFBSUEsVUFBVSxDQUFDRyxPQUE3QixFQUFzQztBQUNsQyxVQUFNQyxhQUFhLEdBQUdKLFVBQVUsQ0FBQ0csT0FBWCxDQUFtQkUsYUFBbkIsQ0FBaUMsa0JBQWpDLENBQXRCO0FBQ0FOLE1BQUFBLFlBQVksQ0FBQ0ssYUFBYSxLQUFLLElBQWxCLElBQTBCQSxhQUFhLEtBQUtFLFNBQTdDLENBQVo7QUFDSDtBQUNKLEdBTEQsRUFLRyxDQUFDTixVQUFELENBTEg7QUFPQSx3QkFBVSxZQUFNO0FBQ1osUUFBTU8sWUFBWSxHQUFHQyxRQUFRLENBQUNILGFBQVQsQ0FBdUIsT0FBdkIsQ0FBckI7O0FBQ0EsUUFBSVIsS0FBSyxJQUFJVSxZQUFiLEVBQTJCO0FBQ3ZCQSxNQUFBQSxZQUFZLENBQUNFLFNBQWIsR0FBeUJaLEtBQXpCO0FBQ0g7QUFDSixHQUxELEVBS0csQ0FBQ0EsS0FBRCxDQUxIO0FBT0Esc0JBQ0k7QUFBSyxJQUFBLFNBQVMsRUFBRSx5QkFBRyx1QkFBSCxFQUE0QjtBQUFFLG1CQUFhQztBQUFmLEtBQTVCLENBQWhCO0FBQXlFLElBQUEsR0FBRyxFQUFFRTtBQUE5RSxLQUNLSixRQURMLENBREo7QUFLSCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBNdXRhYmxlUmVmT2JqZWN0LCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgY3ggZnJvbSBcImNsYXNzbmFtZXNcIlxyXG5pbXBvcnQgVXRpbGl0aWVzIGZyb20gXCIuL1V0aWxpdGllc1wiXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFBhZ2VQcm9wcyB7XHJcbiAgICAvKipcclxuICAgICAqIFdpbGwgYmUgc2V0IHRvIHRoZSBkb2N1bWVudCdzIGA8dGl0bGU+YCB0YWcuXHJcbiAgICAgKi9cclxuICAgIHRpdGxlPzogc3RyaW5nXHJcbiAgICBjaGlsZHJlbj86IGFueVxyXG59XHJcblxyXG4vKipcclxuICogTWFpbiBjb21wb25lbnQgZm9yIGVhY2ggcGFnZS5cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhZ2UoeyBjaGlsZHJlbiwgdGl0bGUgfTogUGFnZVByb3BzKSB7XHJcbiAgICBjb25zdCBbaGFzSGVhZGVyLCBzZXRIYXNIZWFkZXJdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCBlbGVtZW50UmVmID0gdXNlUmVmKG51bGwpIGFzIE11dGFibGVSZWZPYmplY3Q8YW55PlxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgVXRpbGl0aWVzLnJlZ2lzdGVyRmx1ZW50QnRucygpXHJcbiAgICB9KVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKGVsZW1lbnRSZWYgJiYgZWxlbWVudFJlZi5jdXJyZW50KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGhlYWRlckVsZW1lbnQgPSBlbGVtZW50UmVmLmN1cnJlbnQucXVlcnlTZWxlY3RvcihcIi5ibHVlLWFwcC1oZWFkZXJcIilcclxuICAgICAgICAgICAgc2V0SGFzSGVhZGVyKGhlYWRlckVsZW1lbnQgIT09IG51bGwgJiYgaGVhZGVyRWxlbWVudCAhPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgIH1cclxuICAgIH0sIFtlbGVtZW50UmVmXSlcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRpdGxlRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJ0aXRsZVwiKVxyXG4gICAgICAgIGlmICh0aXRsZSAmJiB0aXRsZUVsZW1lbnQpIHtcclxuICAgICAgICAgICAgdGl0bGVFbGVtZW50LmlubmVyVGV4dCA9IHRpdGxlXHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3RpdGxlXSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeChcImJsdWUtYXBwLXBhZ2Utd3JhcHBlclwiLCB7IFwiaGFzSGVhZGVyXCI6IGhhc0hlYWRlciB9KX0gcmVmPXtlbGVtZW50UmVmfT5cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59Il19